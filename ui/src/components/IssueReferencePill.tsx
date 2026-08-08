import { useContext, type ReactNode } from "react";
import type { IssueRelationIssueSummary } from "@paperclipai/shared";
import { InsideLinkContext, Link, useNavigate } from "@/lib/router";
import { cn } from "../lib/utils";
import { StatusIcon } from "./StatusIcon";

export function IssueReferencePill({
  issue,
  strikethrough,
  className,
  children,
}: {
  issue: Pick<IssueRelationIssueSummary, "id" | "identifier" | "title"> &
    Partial<Pick<IssueRelationIssueSummary, "status">>;
  strikethrough?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const issueLabel = issue.identifier ?? issue.title;
  const insideLink = useContext(InsideLinkContext);
  const navigate = useNavigate();
  const classNames = cn(
    "paperclip-mention-chip paperclip-mention-chip--issue",
    "inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs no-underline",
    issue.identifier && "hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-(length:--rad-3) focus-visible:ring-ring",
    strikethrough && "opacity-60 line-through decoration-muted-foreground",
    className,
  );
  const content = (
    <>
      {issue.status ? <StatusIcon status={issue.status} className="h-3 w-3 shrink-0" /> : null}
      {children !== undefined ? children : <span>{issue.identifier ?? issue.title}</span>}
    </>
  );

  if (!issue.identifier) {
    return (
      <span
        data-mention-kind="issue"
        className={classNames}
        title={issue.title}
        aria-label={`Task: ${issue.title}`}
      >
        {content}
      </span>
    );
  }

  // When rendered inside another <Link>, HTML disallows nesting <a>; downgrade
  // to a <span> with manual navigation. Loses the quicklook popover, but
  // avoids React 19 hydration errors.
  if (insideLink) {
    return (
      <span
        data-mention-kind="issue"
        className={classNames}
        title={issue.title}
        aria-label={`Task ${issueLabel}: ${issue.title}`}
        role="link"
        tabIndex={0}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          navigate(`/issues/${issueLabel}`);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.stopPropagation();
            navigate(`/issues/${issueLabel}`);
          }
        }}
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      to={`/issues/${issueLabel}`}
      data-mention-kind="issue"
      className={classNames}
      title={issue.title}
      aria-label={`Task ${issueLabel}: ${issue.title}`}
    >
      {content}
    </Link>
  );
}
