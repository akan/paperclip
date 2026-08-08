import * as React from "react";
import * as RouterDom from "react-router-dom";
import type { NavigateOptions, To } from "react-router-dom";
import type { Issue } from "@paperclipai/shared";
import { useCompany } from "@/context/CompanyContext";
import { IssueLinkQuicklook } from "@/components/IssueLinkQuicklook";
import {
  applyCompanyPrefix,
  caseHref,
  extractCompanyPrefixFromPath,
  normalizeCompanyPrefix,
} from "@/lib/company-routes";
import { parseIssuePathIdFromPath } from "@/lib/issue-reference";

/**
 * Set true while rendering inside a `<Link>` so nested interactive widgets
 * (e.g. mention chips, issue reference pills) can downgrade themselves to
 * `<span onClick>` instead of nesting another `<a>`. HTML disallows `<a>` inside
 * `<a>` and React 19 hydration will throw.
 */
export const InsideLinkContext = React.createContext(false);

function resolveTo(to: To, companyPrefix: string | null): To {
  if (typeof to === "string") {
    return applyCompanyPrefix(to, companyPrefix);
  }

  if (to.pathname && to.pathname.startsWith("/")) {
    const pathname = applyCompanyPrefix(to.pathname, companyPrefix);
    if (pathname !== to.pathname) {
      return { ...to, pathname };
    }
  }

  return to;
}

export function useActiveCompanyPrefix(): string | null {
  const { selectedCompany } = useCompany();
  const params = RouterDom.useParams<{ companyPrefix?: string }>();
  const location = RouterDom.useLocation();

  if (params.companyPrefix) {
    return normalizeCompanyPrefix(params.companyPrefix);
  }

  const pathPrefix = extractCompanyPrefixFromPath(location.pathname);
  if (pathPrefix) return pathPrefix;

  return selectedCompany ? normalizeCompanyPrefix(selectedCompany.issuePrefix) : null;
}

/**
 * Returns a builder for company-prefixed Cases hrefs bound to the active company
 * (e.g. `/PAP/cases/PAP-C5`). Use for all case-to-case links so they emit
 * prefixed paths directly instead of leaning on the PAP-13002 redirect.
 */
export function useCaseHref(): (...segments: string[]) => string {
  const companyPrefix = useActiveCompanyPrefix();
  return React.useCallback(
    (...segments: string[]) => caseHref(companyPrefix, ...segments),
    [companyPrefix],
  );
}

export * from "react-router-dom";

type CompanyLinkProps = React.ComponentProps<typeof RouterDom.Link> & {
  disableIssueQuicklook?: boolean;
  issuePrefetch?: Issue | null;
  issueQuicklookSide?: React.ComponentProps<typeof IssueLinkQuicklook>["issueQuicklookSide"];
  issueQuicklookAlign?: React.ComponentProps<typeof IssueLinkQuicklook>["issueQuicklookAlign"];
};

export const Link = React.forwardRef<HTMLAnchorElement, CompanyLinkProps>(
  function CompanyLink({
    to,
    disableIssueQuicklook = false,
    issuePrefetch = null,
    issueQuicklookSide,
    issueQuicklookAlign,
    ...props
  }, ref) {
    const companyPrefix = useActiveCompanyPrefix();
    const resolvedTo = resolveTo(to, companyPrefix);
    const issuePathId = parseIssuePathIdFromPath(typeof resolvedTo === "string" ? resolvedTo : resolvedTo.pathname);
    const insideLink = React.useContext(InsideLinkContext);

    if (issuePathId) {
      return (
        <InsideLinkContext.Provider value={true}>
          <IssueLinkQuicklook
            ref={ref}
            to={resolvedTo}
            issuePathId={issuePathId}
            disableIssueQuicklook={disableIssueQuicklook}
            issuePrefetch={issuePrefetch}
            issueQuicklookSide={issueQuicklookSide}
            issueQuicklookAlign={issueQuicklookAlign}
            {...props}
          />
        </InsideLinkContext.Provider>
      );
    }

    return (
      <InsideLinkContext.Provider value={true}>
        <RouterDom.Link ref={ref} to={resolvedTo} {...props} />
      </InsideLinkContext.Provider>
    );
  },
);

export const NavLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof RouterDom.NavLink>>(
  function CompanyNavLink({ to, ...props }, ref) {
    const companyPrefix = useActiveCompanyPrefix();
    return <RouterDom.NavLink ref={ref} to={resolveTo(to, companyPrefix)} {...props} />;
  },
);

export function Navigate({ to, ...props }: React.ComponentProps<typeof RouterDom.Navigate>) {
  const companyPrefix = useActiveCompanyPrefix();
  return <RouterDom.Navigate to={resolveTo(to, companyPrefix)} {...props} />;
}

export function useNavigate(): ReturnType<typeof RouterDom.useNavigate> {
  const navigate = RouterDom.useNavigate();
  const companyPrefix = useActiveCompanyPrefix();

  return React.useCallback(
    ((to: To | number, options?: NavigateOptions) => {
      if (typeof to === "number") {
        navigate(to);
        return;
      }
      navigate(resolveTo(to, companyPrefix), options);
    }) as ReturnType<typeof RouterDom.useNavigate>,
    [navigate, companyPrefix],
  );
}
