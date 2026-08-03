import { createHash, randomUUID } from "node:crypto";
import fs from "node:fs";
import { afterEach, describe, expect, it } from "vitest";
import postgres from "postgres";
import { applyPendingMigrations } from "./client.js";
import {
  getEmbeddedPostgresTestSupport,
  startEmbeddedPostgresTestDatabase,
} from "./test-embedded-postgres.js";

const MIGRATION_FILE = "0193_jcode_local_adapter_type.sql";
const cleanups: Array<() => Promise<void>> = [];
const embeddedPostgresSupport = await getEmbeddedPostgresTestSupport();
const describeEmbeddedPostgres = embeddedPostgresSupport.supported ? describe : describe.skip;

async function migrationHash() {
  const content = await fs.promises.readFile(
    new URL(`./migrations/${MIGRATION_FILE}`, import.meta.url),
    "utf8",
  );
  return createHash("sha256").update(content).digest("hex");
}

describe("JCode adapter type migration definition", () => {
  it("only rewrites the legacy jcode adapter type", async () => {
    const content = await fs.promises.readFile(
      new URL(`./migrations/${MIGRATION_FILE}`, import.meta.url),
      "utf8",
    );

    expect(content).toContain(`SET\n  "adapter_type" = 'jcode_local'`);
    expect(content).toContain(`"error_reason" = 'Process adapter missing command'`);
    expect(content).toContain(`WHERE "adapter_type" = 'jcode'`);
  });
});

describeEmbeddedPostgres("JCode adapter type migration", () => {
  afterEach(async () => {
    await Promise.all(cleanups.splice(0).map((cleanup) => cleanup()));
  });

  it("normalizes legacy jcode agents without changing their adapter config", async () => {
    const database = await startEmbeddedPostgresTestDatabase("paperclip-jcode-adapter-migration-");
    cleanups.push(database.cleanup);
    const sql = postgres(database.connectionString, { max: 1 });
    cleanups.push(async () => sql.end());

    await sql`DELETE FROM "drizzle"."__drizzle_migrations" WHERE "hash" = ${await migrationHash()}`;

    const companyId = randomUUID();
    const legacyAgentId = randomUUID();
    const unrelatedErrorAgentId = randomUUID();
    const processAgentId = randomUUID();
    await sql`
      INSERT INTO "companies" ("id", "name", "issue_prefix")
      VALUES (${companyId}, 'Paperclip', 'PAP')
    `;
    await sql`
      INSERT INTO "agents" (
        "id",
        "company_id",
        "name",
        "status",
        "adapter_type",
        "adapter_config",
        "error_reason"
      )
      VALUES
        (${legacyAgentId}, ${companyId}, 'Legacy JCode', 'error', 'jcode', '{"model":"test-model"}'::jsonb, 'Process adapter missing command'),
        (${unrelatedErrorAgentId}, ${companyId}, 'Other JCode Error', 'error', 'jcode', '{}'::jsonb, 'Provider authentication failed'),
        (${processAgentId}, ${companyId}, 'Process', 'idle', 'process', '{"command":"true"}'::jsonb, NULL)
    `;

    await applyPendingMigrations(database.connectionString);

    const rows = await sql<{
      id: string;
      status: string;
      adapter_type: string;
      adapter_config: Record<string, unknown>;
      error_reason: string | null;
    }[]>`
      SELECT "id", "status", "adapter_type", "adapter_config", "error_reason"
      FROM "agents"
      WHERE "id" IN (${legacyAgentId}, ${unrelatedErrorAgentId}, ${processAgentId})
      ORDER BY "name"
    `;
    expect(rows).toEqual([
      {
        id: legacyAgentId,
        status: "idle",
        adapter_type: "jcode_local",
        adapter_config: { model: "test-model" },
        error_reason: null,
      },
      {
        id: unrelatedErrorAgentId,
        status: "error",
        adapter_type: "jcode_local",
        adapter_config: {},
        error_reason: "Provider authentication failed",
      },
      {
        id: processAgentId,
        status: "idle",
        adapter_type: "process",
        adapter_config: { command: "true" },
        error_reason: null,
      },
    ]);
  }, 30_000);
});
