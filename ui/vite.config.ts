import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createUiDevWatchOptions } from "./src/lib/vite-watch";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    minify: "esbuild",
    rollupOptions: {
      output: {
        // Rolldown (Vite 8) requires manualChunks to be a function, not an
        // object. Return a chunk id for matched packages, undefined to let
        // Rolldown decide. (Object form still works in Rollup / Vite 6.)
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          const pkgs = [
            ["vendor-react", [
              /\/node_modules\/.pnpm\/(react|react-dom|react-router-dom|react-i18next|react-resizable-panels)@/,
              /\/node_modules\/(react|react-dom|react-router-dom|react-i18next|react-resizable-panels)\//,
            ]],
            ["vendor-query", [
              /\/node_modules\/.pnpm\/@tanstack\+react-query@/,
              /\/node_modules\/@tanstack\/react-query\//,
            ]],
            ["vendor-mdx", [
              /\/node_modules\/.pnpm\/@mdxeditor\+editor@/,
              /\/node_modules\/.pnpm\/@lexical\+/,
              /\/node_modules\/@mdxeditor\/editor\//,
            ]],
            ["vendor-dnd", [
              /\/node_modules\/.pnpm\/@dnd-kit\+/,
              /\/node_modules\/@dnd-kit\//,
            ]],
            ["vendor-markdown-render", [
              /\/node_modules\/.pnpm\/(react-markdown|remark-gfm)@/,
              /\/node_modules\/(react-markdown|remark-gfm)\//,
            ]],
          ] as const;
          for (const [name, patterns] of pkgs) {
            if (patterns.some((re) => re.test(id))) return name;
          }
          return undefined;
        },
      },
    },
  },
  esbuild:
    mode === "production"
      ? {
          drop: ["console", "debugger"],
          legalComments: "none",
        }
      : undefined,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      lexical: path.resolve(__dirname, "./node_modules/lexical/dist/Lexical.mjs"),
    },
  },
  server: {
    port: 5173,
    watch: createUiDevWatchOptions(process.cwd()),
    proxy: {
      "/api": {
        target: "http://localhost:3100",
        ws: true,
      },
    },
  },
}));
