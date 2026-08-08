import { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes, useActiveCompanyPrefix, useLocation, useParams } from "@/lib/router";

const Cases = lazy(() => import("./pages/Cases").then((m) => ({ default: m.Cases })));
const CaseDetail = lazy(() => import("./pages/CaseDetail").then((m) => ({ default: m.CaseDetail })));
const Dashboard = lazy(() => import("./pages/Dashboard").then((m) => ({ default: m.Dashboard })));
const DashboardLive = lazy(() => import("./pages/DashboardLive").then((m) => ({ default: m.DashboardLive })));
const Timeline = lazy(() => import("./pages/Timeline").then((m) => ({ default: m.Timeline })));
const Companies = lazy(() => import("./pages/Companies").then((m) => ({ default: m.Companies })));
import { AGENT_FILTER_TABS } from "./pages/Agents";
const Agents = lazy(() => import("./pages/Agents").then((m) => ({ default: m.Agents })));
const AgentDetail = lazy(() => import("./pages/AgentDetail").then((m) => ({ default: m.AgentDetail })));
const Projects = lazy(() => import("./pages/Projects").then((m) => ({ default: m.Projects })));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail").then((m) => ({ default: m.ProjectDetail })));
const ProjectWorkspaceDetail = lazy(() => import("./pages/ProjectWorkspaceDetail").then((m) => ({ default: m.ProjectWorkspaceDetail })));
const Workspaces = lazy(() => import("./pages/Workspaces").then((m) => ({ default: m.Workspaces })));
const Issues = lazy(() => import("./pages/Issues").then((m) => ({ default: m.Issues })));
const Search = lazy(() => import("./pages/Search").then((m) => ({ default: m.Search })));
const IssueDetail = lazy(() => import("./pages/IssueDetail").then((m) => ({ default: m.IssueDetail })));
const IssueChatLongThreadPerf = lazy(() => import("./pages/IssueChatLongThreadPerf").then((m) => ({ default: m.IssueChatLongThreadPerf })));
const Routines = lazy(() => import("./pages/Routines").then((m) => ({ default: m.Routines })));
const Learnings = lazy(() => import("./pages/Pipelines").then((m) => ({ default: m.Learnings })));
const PipelineItemDetail = lazy(() => import("./pages/Pipelines").then((m) => ({ default: m.PipelineItemDetail })));
const PipelineItemLegacyRedirect = lazy(() => import("./pages/Pipelines").then((m) => ({ default: m.PipelineItemLegacyRedirect })));
const Pipelines = lazy(() => import("./pages/Pipelines").then((m) => ({ default: m.Pipelines })));
const ReviewQueue = lazy(() => import("./pages/Pipelines").then((m) => ({ default: m.ReviewQueue })));
const PipelineSettings = lazy(() => import("./pages/PipelineSettings").then((m) => ({ default: m.PipelineSettings })));
const StatusCards = lazy(() => import("./pages/StatusCards").then((m) => ({ default: m.StatusCards })));
const RoutineDetail = lazy(() => import("./pages/RoutineDetail").then((m) => ({ default: m.RoutineDetail })));
const UserProfile = lazy(() => import("./pages/UserProfile").then((m) => ({ default: m.UserProfile })));
const ExecutionWorkspaceDetail = lazy(() => import("./pages/ExecutionWorkspaceDetail").then((m) => ({ default: m.ExecutionWorkspaceDetail })));
const Goals = lazy(() => import("./pages/Goals").then((m) => ({ default: m.Goals })));
const Artifacts = lazy(() => import("./pages/Artifacts").then((m) => ({ default: m.Artifacts })));
const GoalDetail = lazy(() => import("./pages/GoalDetail").then((m) => ({ default: m.GoalDetail })));
const Approvals = lazy(() => import("./pages/Approvals").then((m) => ({ default: m.Approvals })));
const ApprovalDetail = lazy(() => import("./pages/ApprovalDetail").then((m) => ({ default: m.ApprovalDetail })));
const Costs = lazy(() => import("./pages/Costs").then((m) => ({ default: m.Costs })));
const Activity = lazy(() => import("./pages/Activity").then((m) => ({ default: m.Activity })));
const Inbox = lazy(() => import("./pages/Inbox").then((m) => ({ default: m.Inbox })));
const WhatNeedsMe = lazy(() => import("./pages/WhatNeedsMe").then((m) => ({ default: m.WhatNeedsMe })));
const TrainingInspector = lazy(() => import("./pages/Training").then((m) => ({ default: m.TrainingInspector })));
const TrainingLibrary = lazy(() => import("./pages/Training").then((m) => ({ default: m.TrainingLibrary })));
const BoardChat = lazy(() => import("./pages/BoardChat").then((m) => ({ default: m.BoardChat })));
const CompanySettings = lazy(() => import("./pages/CompanySettings").then((m) => ({ default: m.CompanySettings })));
const CompanyEnvironments = lazy(() => import("./pages/CompanyEnvironments").then((m) => ({ default: m.CompanyEnvironments })));
const CloudUpstream = lazy(() => import("./pages/CloudUpstream").then((m) => ({ default: m.CloudUpstream })));
const CloudUpstreamUxLab = lazy(() => import("./pages/CloudUpstreamUxLab").then((m) => ({ default: m.CloudUpstreamUxLab })));
const BootstrapSetupUxLab = lazy(() => import("./pages/BootstrapSetupUxLab").then((m) => ({ default: m.BootstrapSetupUxLab })));
const ResponsibleUserDenialUxLab = lazy(() => import("./pages/ResponsibleUserDenialUxLab").then((m) => ({ default: m.ResponsibleUserDenialUxLab })));
const CompanySettingsPluginPage = lazy(() => import("./pages/CompanySettingsPluginPage").then((m) => ({ default: m.CompanySettingsPluginPage })));
const CompanyAccess = lazy(() => import("./pages/CompanyAccess").then((m) => ({ default: m.CompanyAccess })));
const CompanyAccessLegacyRoute = lazy(() => import("./pages/CompanyAccess").then((m) => ({ default: m.CompanyAccessLegacyRoute })));
const AdvancedToolsRoute = lazy(() => import("./pages/tools/AdvancedToolsRoute").then((m) => ({ default: m.AdvancedToolsRoute })));
const ProfileWizardRoute = lazy(() => import("./pages/tools/profiles/ProfileWizardRoute").then((m) => ({ default: m.ProfileWizardRoute })));
const ProfileDetailRoute = lazy(() => import("./pages/tools/profiles/ProfileDetailRoute").then((m) => ({ default: m.ProfileDetailRoute })));
const Connections = lazy(() => import("./pages/apps/Connections").then((m) => ({ default: m.Connections })));
const Browse = lazy(() => import("./pages/apps/Browse").then((m) => ({ default: m.Browse })));
const AppsConnect = lazy(() => import("./pages/apps/AppsConnect").then((m) => ({ default: m.AppsConnect })));
const AppsReview = lazy(() => import("./pages/apps/AppsReview").then((m) => ({ default: m.AppsReview })));
const AppDetail = lazy(() => import("./pages/apps/AppDetail").then((m) => ({ default: m.AppDetail })));
const AppNotConnected = lazy(() => import("./pages/apps/AppNotConnected").then((m) => ({ default: m.AppNotConnected })));
const GatewaysList = lazy(() => import("./pages/apps/gateways/GatewaysList").then((m) => ({ default: m.GatewaysList })));
const GatewayDetail = lazy(() => import("./pages/apps/gateways/GatewayDetail").then((m) => ({ default: m.GatewayDetail })));
const CompanyInvites = lazy(() => import("./pages/CompanyInvites").then((m) => ({ default: m.CompanyInvites })));
const CompanySkills = lazy(() => import("./pages/CompanySkills").then((m) => ({ default: m.CompanySkills })));
const SkillStudio = lazy(() => import("./pages/SkillStudio").then((m) => ({ default: m.SkillStudio })));
const Secrets = lazy(() => import("./pages/Secrets").then((m) => ({ default: m.Secrets })));
const CompanyExport = lazy(() => import("./pages/CompanyExport").then((m) => ({ default: m.CompanyExport })));
const CompanyImport = lazy(() => import("./pages/CompanyImport").then((m) => ({ default: m.CompanyImport })));
const DesignGuide = lazy(() => import("./pages/DesignGuide").then((m) => ({ default: m.DesignGuide })));
const InstanceGeneralSettings = lazy(() => import("./pages/InstanceGeneralSettings").then((m) => ({ default: m.InstanceGeneralSettings })));
const InstanceAccess = lazy(() => import("./pages/InstanceAccess").then((m) => ({ default: m.InstanceAccess })));
const InstanceSettings = lazy(() => import("./pages/InstanceSettings").then((m) => ({ default: m.InstanceSettings })));
const InstanceExperimentalSettings = lazy(() => import("./pages/InstanceExperimentalSettings").then((m) => ({ default: m.InstanceExperimentalSettings })));
const ProfileSettings = lazy(() => import("./pages/ProfileSettings").then((m) => ({ default: m.ProfileSettings })));
const PluginManager = lazy(() => import("./pages/PluginManager").then((m) => ({ default: m.PluginManager })));
const PluginSettings = lazy(() => import("./pages/PluginSettings").then((m) => ({ default: m.PluginSettings })));
const AdapterManager = lazy(() => import("./pages/AdapterManager").then((m) => ({ default: m.AdapterManager })));
const PluginPage = lazy(() => import("./pages/PluginPage").then((m) => ({ default: m.PluginPage })));
const OrgChart = lazy(() => import("./pages/OrgChart").then((m) => ({ default: m.OrgChart })));
const NewAgent = lazy(() => import("./pages/NewAgent").then((m) => ({ default: m.NewAgent })));
const AuthPage = lazy(() => import("./pages/Auth").then((m) => ({ default: m.AuthPage })));
const BoardClaimPage = lazy(() => import("./pages/BoardClaim").then((m) => ({ default: m.BoardClaimPage })));
const CliAuthPage = lazy(() => import("./pages/CliAuth").then((m) => ({ default: m.CliAuthPage })));
const InviteLandingPage = lazy(() => import("./pages/InviteLanding").then((m) => ({ default: m.InviteLandingPage })));
const JoinRequestQueue = lazy(() => import("./pages/JoinRequestQueue").then((m) => ({ default: m.JoinRequestQueue })));
const NotFoundPage = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFoundPage })));

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n";
import { Layout } from "./components/Layout";
import { ConferenceRoomChatGate } from "./components/ConferenceRoomChatGate";
import { PipelinesExperimentalGate } from "./components/PipelinesExperimentalGate";
import { CasesExperimentalGate } from "./components/CasesExperimentalGate";
import { StatusCardsExperimentalGate } from "./components/StatusCardsExperimentalGate";
import { AppsExperimentalGate } from "./components/AppsExperimentalGate";
import { OnboardingWizardVariant } from "./components/OnboardingWizardVariant";
import { CloudAccessGate } from "./components/CloudAccessGate";
import { useCompany } from "./context/CompanyContext";
import { useDialogActions, useDialogState } from "./context/DialogContext";
import { loadLastInboxTab } from "./lib/inbox";
import {
  isOnboardingWizardActive,
  shouldRedirectCompanylessRouteToOnboarding,
} from "./lib/onboarding-route";
import { normalizeRememberedInstanceSettingsPath } from "./lib/instance-settings";

function boardRoutes() {
  return (
    <Suspense fallback={null}>
      <>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/live" element={<DashboardLive />} />
      <Route path="timeline" element={<Timeline />} />
      <Route path="onboarding" element={<OnboardingRoutePage />} />
      <Route path="companies" element={<Companies />} />
      <Route path="company/settings" element={<CompanySettings />} />
      <Route path="company/settings/environments" element={<Navigate to="/company/settings/instance/environments" replace />} />
      <Route path="company/settings/cloud-upstream" element={<CloudUpstream />} />
      <Route path="company/settings/members" element={<CompanyAccess />} />
      <Route path="company/settings/access" element={<CompanyAccessLegacyRoute />} />
      <Route path="company/settings/invites" element={<CompanyInvites />} />
      <Route path="company/export/*" element={<CompanyExport />} />
      <Route path="company/import" element={<CompanyImport />} />
      <Route path="company/settings/secrets" element={<Secrets />} />
      <Route path="company/settings/tools" element={<LegacyToolsSettingsRedirect />} />
      <Route path="company/settings/tools/:tab" element={<LegacyToolsSettingsRedirect />} />
      <Route path="tools" element={<LegacyToolsRedirect />} />
      <Route path="tools/:tab" element={<LegacyToolsRedirect />} />
      <Route element={<AppsExperimentalGate />}>
        <Route path="apps" element={<Connections />} />
        <Route path="apps/browse" element={<Browse />} />
        <Route path="apps/connect" element={<AppsConnectEntryRoute />} />
        <Route path="apps/connect/:appKey" element={<Navigate to="/apps/browse" replace />} />
        <Route path="apps/connect/:appKey/:stage" element={<Navigate to="/apps/browse" replace />} />
        <Route path="apps/review" element={<AppsReview />} />
        {/* Needs attention folded into Connections (PAP-13254); keep legacy links working. */}
        <Route path="apps/attention" element={<Navigate to="/apps" replace />} />
        <Route path="apps/gateways" element={<GatewaysList />} />
        <Route path="apps/gateways/:gatewayId" element={<Navigate to="overview" replace />} />
        <Route path="apps/gateways/:gatewayId/:tab" element={<GatewayDetail />} />
        <Route path="apps/advanced" element={<AdvancedToolsRoute />} />
        <Route path="apps/advanced/profiles/new" element={<ProfileWizardRoute mode="new" />} />
        <Route path="apps/advanced/profiles/:profileId/edit" element={<ProfileWizardRoute mode="edit" />} />
        <Route path="apps/advanced/profiles/:profileId" element={<ProfileDetailRoute />} />
        <Route path="apps/advanced/:tab" element={<AdvancedToolsRoute />} />
        <Route path="apps/app/:applicationId" element={<AppNotConnected />} />
        <Route path="apps/app/:applicationId/:tab" element={<AppNotConnected />} />
        <Route path="apps/:connectionId" element={<Navigate to="setup" replace />} />
        <Route path="apps/:connectionId/:tab" element={<AppDetail />} />
      </Route>
      <Route path="company/settings/instance" element={<Navigate to="general" replace />} />
      <Route path="company/settings/instance/profile" element={<ProfileSettings />} />
      <Route path="company/settings/instance/general" element={<InstanceGeneralSettings />} />
      <Route path="company/settings/instance/environments" element={<CompanyEnvironments />} />
      <Route path="company/settings/instance/environments/new" element={<CompanyEnvironments mode="create" />} />
      <Route path="company/settings/instance/environments/:environmentId/edit" element={<CompanyEnvironments mode="edit" />} />
      <Route path="company/settings/instance/access" element={<InstanceAccess />} />
      <Route path="company/settings/instance/heartbeats" element={<InstanceSettings />} />
      <Route path="company/settings/instance/experimental" element={<InstanceExperimentalSettings />} />
      <Route path="company/settings/instance/plugins" element={<PluginManager />} />
      <Route path="company/settings/instance/plugins/:pluginId" element={<PluginSettings />} />
      <Route path="company/settings/instance/adapters" element={<AdapterManager />} />
      <Route path="company/settings/:settingsRoutePath/*" element={<CompanySettingsPluginPage />} />
      <Route path="skills/studio" element={<SkillStudio />} />
      <Route path="skills/studio/new" element={<SkillStudio />} />
      <Route path="skills/studio/:skillId" element={<SkillStudio />} />
      <Route path="skills/:skillId/studio" element={<LegacySkillStudioRedirect />} />
      <Route path="skills/*" element={<CompanySkills />} />
      <Route path="settings" element={<LegacySettingsRedirect />} />
      <Route path="settings/*" element={<LegacySettingsRedirect />} />
      <Route path="plugins/:pluginId" element={<PluginPage />} />
      <Route path="org" element={<OrgChart />} />
      <Route path="agents" element={<Navigate to="/agents/all" replace />} />
      {AGENT_FILTER_TABS.map((tab) => (
        <Route key={tab} path={`agents/${tab}`} element={<Agents />} />
      ))}
      <Route path="agents/new" element={<NewAgent />} />
      <Route path="agents/:agentId" element={<AgentDetail />} />
      <Route path="agents/:agentId/:tab" element={<AgentDetail />} />
      <Route path="agents/:agentId/runs/:runId" element={<AgentDetail />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:projectId" element={<ProjectDetail />} />
      <Route path="projects/:projectId/overview" element={<ProjectDetail />} />
      <Route path="projects/:projectId/issues" element={<ProjectDetail />} />
      <Route path="projects/:projectId/issues/:filter" element={<ProjectDetail />} />
      <Route path="projects/:projectId/workspaces/:workspaceId" element={<ProjectWorkspaceDetail />} />
      <Route path="projects/:projectId/workspaces" element={<ProjectDetail />} />
      <Route path="projects/:projectId/configuration" element={<ProjectDetail />} />
      <Route path="projects/:projectId/budget" element={<ProjectDetail />} />
      <Route path="workspaces" element={<Workspaces />} />
      <Route path="issues" element={<Issues />} />
      <Route path="search" element={<Search />} />
      <Route path="issues/all" element={<Navigate to="/issues" replace />} />
      <Route path="issues/active" element={<Navigate to="/issues" replace />} />
      <Route path="issues/backlog" element={<Navigate to="/issues" replace />} />
      <Route path="issues/done" element={<Navigate to="/issues" replace />} />
      <Route path="issues/recent" element={<Navigate to="/issues" replace />} />
      <Route path="issues/:issueId" element={<IssueDetail />} />
      {import.meta.env.DEV ? (
        <Route path="tests/perf/long-thread" element={<IssueChatLongThreadPerf />} />
      ) : null}
      <Route path="routines" element={<Routines />} />
      <Route
        path="cases"
        element={<CasesExperimentalGate><Cases /></CasesExperimentalGate>}
      />
      <Route
        path="cases/:caseIdentifier"
        element={<CasesExperimentalGate><CaseDetail /></CasesExperimentalGate>}
      />
      <Route
        path="status"
        element={<StatusCardsExperimentalGate><StatusCards /></StatusCardsExperimentalGate>}
      />
      <Route
        path="status/:cardId"
        element={<StatusCardsExperimentalGate><StatusCards /></StatusCardsExperimentalGate>}
      />
      {/* Back-compat: the board lived at /status-cards before PAP-15223. */}
      <Route path="status-cards" element={<StatusCardsLegacyRedirect />} />
      <Route path="status-cards/:cardId" element={<StatusCardsLegacyRedirect />} />
      <Route
        path="review-queue"
        element={<PipelinesExperimentalGate><ReviewQueue /></PipelinesExperimentalGate>}
      />
      <Route
        path="learnings"
        element={<PipelinesExperimentalGate><Learnings /></PipelinesExperimentalGate>}
      />
      <Route
        path="pipelines"
        element={<PipelinesExperimentalGate><Pipelines /></PipelinesExperimentalGate>}
      />
      <Route
        path="pipelines/:pipelineId"
        element={<PipelinesExperimentalGate><Pipelines /></PipelinesExperimentalGate>}
      />
      <Route
        path="pipelines/:pipelineId/add"
        element={<PipelinesExperimentalGate><Pipelines /></PipelinesExperimentalGate>}
      />
      <Route
        path="pipelines/:pipelineId/settings"
        element={<PipelinesExperimentalGate><PipelineSettings /></PipelinesExperimentalGate>}
      />
      <Route
        path="pipelines/:pipelineId/items/:caseId"
        element={<PipelinesExperimentalGate><PipelineItemDetail /></PipelinesExperimentalGate>}
      />
      <Route
        path="pipelines/:pipelineId/cases/:caseId"
        element={<PipelinesExperimentalGate><PipelineItemLegacyRedirect /></PipelinesExperimentalGate>}
      />
      <Route path="routines/:routineId" element={<RoutineDetail />} />
      <Route path="routines/:routineId/:section" element={<RoutineDetail />} />
      <Route path="execution-workspaces/:workspaceId" element={<ExecutionWorkspaceDetail />} />
      <Route path="execution-workspaces/:workspaceId/services" element={<ExecutionWorkspaceDetail />} />
      <Route path="execution-workspaces/:workspaceId/configuration" element={<ExecutionWorkspaceDetail />} />
      <Route path="execution-workspaces/:workspaceId/runtime-logs" element={<ExecutionWorkspaceDetail />} />
      <Route path="execution-workspaces/:workspaceId/issues" element={<ExecutionWorkspaceDetail />} />
      <Route path="execution-workspaces/:workspaceId/routines" element={<ExecutionWorkspaceDetail />} />
      <Route path="goals" element={<Goals />} />
      <Route path="goals/:goalId" element={<GoalDetail />} />
      <Route path="artifacts" element={<Artifacts />} />
      <Route path="approvals" element={<Navigate to="/approvals/pending" replace />} />
      <Route path="approvals/pending" element={<Approvals />} />
      <Route path="approvals/all" element={<Approvals />} />
      <Route path="approvals/:approvalId" element={<ApprovalDetail />} />
      <Route path="costs" element={<Costs />} />
      <Route path="activity" element={<Activity />} />
      {/* Conference Room Chat surfaces (PAP-136/PAP-137): routes stay
          registered but redirect to the company home while the experimental
          flag is off. The board-level `artifacts` mount below is the new
          conference-room one; the master-level mount above it still serves
          `/artifacts` in both modes. */}
      <Route element={<ConferenceRoomChatGate />}>
        <Route path="board-chat" element={<BoardChat />} />
        <Route path="artifacts" element={<Artifacts />} />
      </Route>
      <Route path="decisions" element={<WhatNeedsMe />} />
      <Route path="training" element={<TrainingLibrary />} />
      <Route path="training/:id" element={<TrainingInspector />} />
      <Route path="inbox" element={<InboxRootRedirect />} />
      <Route path="inbox/mine" element={<Inbox />} />
      <Route path="inbox/recent" element={<Inbox />} />
      <Route path="inbox/unread" element={<Inbox />} />
      <Route path="inbox/blocked" element={<Inbox />} />
      <Route path="inbox/all" element={<Inbox />} />
      <Route path="inbox/requests" element={<JoinRequestQueue />} />
      <Route path="inbox/new" element={<Navigate to="/inbox/mine" replace />} />
      <Route path="u/:userSlug" element={<UserProfile />} />
      <Route path="design-guide" element={<DesignGuide />} />
      <Route path="instance/settings/adapters" element={<AdapterManager />} />
      <Route path=":pluginRoutePath/*" element={<PluginPage />} />
      <Route path="*" element={<NotFoundPage scope="board" />} />
      </>
    </Suspense>
  );
}

function AppsConnectEntryRoute() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get("byo") === "1" ? <AppsConnect /> : <Navigate to="/apps/browse" replace />;
}

function InboxRootRedirect() {
  return <Navigate to={`/inbox/${loadLastInboxTab()}`} replace />;
}

function LegacySkillStudioRedirect() {
  const location = useLocation();
  const { companies, selectedCompany, loading } = useCompany();
  const { companyPrefix, skillId } = useParams<{ companyPrefix?: string; skillId?: string }>();

  if (loading) return null;

  const targetCompany =
    (companyPrefix
      ? companies.find((company) => company.issuePrefix.toUpperCase() === companyPrefix.toUpperCase())
      : null) ??
    selectedCompany ??
    companies[0] ??
    null;

  if (!targetCompany || !skillId) {
    return <Navigate to="/skills/studio" replace />;
  }

  return (
    <Navigate
      to={`/${targetCompany.issuePrefix}/skills/studio/${encodeURIComponent(skillId)}${location.search}${location.hash}`}
      replace
    />
  );
}

function LegacySettingsRedirect() {
  const location = useLocation();
  const { companies, selectedCompany, loading } = useCompany();
  const { companyPrefix } = useParams<{ companyPrefix?: string }>();

  if (loading) {
    return <div className="mx-auto max-w-xl py-10 text-sm text-muted-foreground">Loading...</div>;
  }

  const targetCompany =
    (companyPrefix
      ? companies.find((company) => company.issuePrefix.toUpperCase() === companyPrefix.toUpperCase())
      : null) ??
    selectedCompany ??
    companies[0] ??
    null;

  if (!targetCompany) {
    if (
      shouldRedirectCompanylessRouteToOnboarding({
        pathname: location.pathname,
        hasCompanies: false,
      })
    ) {
      return <Navigate to="/onboarding" replace />;
    }
    return <NoCompaniesStartPage />;
  }

  const normalizedPath = normalizeRememberedInstanceSettingsPath(
    `${location.pathname}${location.search}${location.hash}`,
  );

  return (
    <Navigate
      to={`/${targetCompany.issuePrefix}${normalizedPath}`}
      replace
    />
  );
}

function LegacyToolsSettingsRedirect() {
  const { tab } = useParams<{ tab?: string }>();
  return <Navigate to={legacyToolsRedirectTarget(tab)} replace />;
}

// The developer "Tools" surface moved under the Apps "Advanced setup" door
// (PAP-10862). `/tools` and `/tools/:tab` redirect to their new home.
function LegacyToolsRedirect() {
  const { tab } = useParams<{ tab?: string }>();
  return <Navigate to={legacyToolsRedirectTarget(tab)} replace />;
}

function legacyToolsRedirectTarget(tab?: string) {
  if (!tab) return "/apps/advanced/profiles";
  if (tab === "applications" || tab === "connections" || tab === "overview" || tab === "examples") return "/apps";
  return `/apps/advanced/${tab}`;
}

function OnboardingRoutePage() {
  const { companies } = useCompany();
  const { openOnboarding } = useDialogActions();
  const { onboardingOpen, onboardingRouteDismissed } = useDialogState();
  const { companyPrefix } = useParams<{ companyPrefix?: string }>();

  // The OnboardingWizard auto-opens on this route (and can also be opened
  // explicitly). While it is showing it covers the whole screen, so the
  // launcher card below must not stay interactive behind it — otherwise users
  // can tab/click through to the form behind the modal (PAP-52). The launcher
  // only needs to render as a re-entry point once the wizard is dismissed.
  if (isOnboardingWizardActive({ onboardingOpen, routeDismissed: onboardingRouteDismissed })) {
    return null;
  }
  const matchedCompany = companyPrefix
    ? companies.find((company) => company.issuePrefix.toUpperCase() === companyPrefix.toUpperCase()) ?? null
    : null;

  const title = matchedCompany
    ? `Add another agent to ${matchedCompany.name}`
    : companies.length > 0
      ? "Create another company"
      : "Create your first company";
  const description = matchedCompany
    ? "Run onboarding again to add an agent and a starter task for this company."
    : companies.length > 0
      ? "Run onboarding again to create another company and seed its first agent."
      : "Get started by creating a company and your first agent.";

  return (
    <div className="mx-auto max-w-xl py-10">
      <div className="rounded-lg border border-border bg-card p-6">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4">
          <Button
            onClick={() =>
              matchedCompany
                ? openOnboarding({ initialStep: 2, companyId: matchedCompany.id })
                : openOnboarding()
            }
          >
            {matchedCompany ? "Add Agent" : "Start Onboarding"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function CompanyRootRedirect() {
  const { companies, selectedCompany, loading } = useCompany();
  const location = useLocation();

  if (loading) {
    return <div className="mx-auto max-w-xl py-10 text-sm text-muted-foreground">Loading...</div>;
  }

  const targetCompany = selectedCompany ?? companies[0] ?? null;
  if (!targetCompany) {
    if (
      shouldRedirectCompanylessRouteToOnboarding({
        pathname: location.pathname,
        hasCompanies: false,
      })
    ) {
      return <Navigate to="/onboarding" replace />;
    }
    return <NoCompaniesStartPage />;
  }

  return <Navigate to={`/${targetCompany.issuePrefix}/dashboard`} replace />;
}

function StatusCardsLegacyRedirect() {
  const { cardId } = useParams<{ cardId?: string }>();
  const prefix = useActiveCompanyPrefix();
  const base = prefix ? `/${prefix}` : "";
  return <Navigate to={`${base}/status${cardId ? `/${cardId}` : ""}`} replace />;
}

function UnprefixedBoardRedirect() {
  const location = useLocation();
  const { companies, selectedCompany, loading } = useCompany();

  if (loading) {
    return <div className="mx-auto max-w-xl py-10 text-sm text-muted-foreground">Loading...</div>;
  }

  const targetCompany = selectedCompany ?? companies[0] ?? null;
  if (!targetCompany) {
    if (
      shouldRedirectCompanylessRouteToOnboarding({
        pathname: location.pathname,
        hasCompanies: false,
      })
    ) {
      return <Navigate to="/onboarding" replace />;
    }
    return <NoCompaniesStartPage />;
  }

  return (
    <Navigate
      to={`/${targetCompany.issuePrefix}${location.pathname}${location.search}${location.hash}`}
      replace
    />
  );
}

function NoCompaniesStartPage() {
  const { openOnboarding } = useDialogActions();
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-xl py-10">
      <div className="rounded-lg border border-border bg-card p-6">
        <h1 className="text-xl font-semibold">
          {t("app.noCompanies.title", { defaultValue: "Create your first company" })}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("app.noCompanies.description", { defaultValue: "Get started by creating a company." })}
        </p>
        <div className="mt-4">
          <Button onClick={() => openOnboarding()}>
            {t("app.noCompanies.newCompany", { defaultValue: "New Company" })}
          </Button>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthPage />} />
        <Route path="board-claim/:token" element={<BoardClaimPage />} />
        <Route path="cli-auth/:id" element={<CliAuthPage />} />
        <Route path="invite/:token" element={<InviteLandingPage />} />
        <Route path="tests/perf/long-thread" element={<IssueChatLongThreadPerf />} />
        <Route path="ux-lab/cloud-upstream" element={<CloudUpstreamUxLab />} />
        <Route path="ux-lab/bootstrap-setup" element={<BootstrapSetupUxLab />} />
        <Route path="ux-lab/responsible-user-denial" element={<ResponsibleUserDenialUxLab />} />

        <Route element={<CloudAccessGate />}>
          <Route index element={<CompanyRootRedirect />} />
          <Route path="onboarding" element={<OnboardingRoutePage />} />
          <Route path="instance" element={<LegacySettingsRedirect />} />
          <Route path="instance/settings" element={<LegacySettingsRedirect />} />
          <Route path="instance/settings/*" element={<LegacySettingsRedirect />} />
          <Route path="companies" element={<UnprefixedBoardRedirect />} />
          <Route path="issues" element={<UnprefixedBoardRedirect />} />
          <Route path="issues/:issueId" element={<UnprefixedBoardRedirect />} />
          <Route path="routines" element={<UnprefixedBoardRedirect />} />
          <Route path="routines/:routineId" element={<UnprefixedBoardRedirect />} />
          <Route path="review-queue" element={<UnprefixedBoardRedirect />} />
          <Route path="learnings" element={<UnprefixedBoardRedirect />} />
          <Route path="cases" element={<UnprefixedBoardRedirect />} />
          <Route path="cases/:caseIdentifier" element={<UnprefixedBoardRedirect />} />
          <Route path="status" element={<UnprefixedBoardRedirect />} />
          <Route path="status/:cardId" element={<UnprefixedBoardRedirect />} />
          <Route path="status-cards" element={<UnprefixedBoardRedirect />} />
          <Route path="status-cards/:cardId" element={<UnprefixedBoardRedirect />} />
          <Route path="pipelines" element={<UnprefixedBoardRedirect />} />
          <Route path="pipelines/:pipelineId" element={<UnprefixedBoardRedirect />} />
          <Route path="pipelines/:pipelineId/add" element={<UnprefixedBoardRedirect />} />
          <Route path="pipelines/:pipelineId/settings" element={<UnprefixedBoardRedirect />} />
          <Route path="pipelines/:pipelineId/items/:caseId" element={<UnprefixedBoardRedirect />} />
          <Route path="pipelines/:pipelineId/cases/:caseId" element={<UnprefixedBoardRedirect />} />
          <Route path="artifacts" element={<UnprefixedBoardRedirect />} />
          <Route path="decisions" element={<UnprefixedBoardRedirect />} />
          <Route path="u/:userSlug" element={<UnprefixedBoardRedirect />} />
          <Route path="skills/studio" element={<UnprefixedBoardRedirect />} />
          <Route path="skills/studio/new" element={<UnprefixedBoardRedirect />} />
          <Route path="skills/studio/:skillId" element={<UnprefixedBoardRedirect />} />
          <Route path="skills/:skillId/studio" element={<LegacySkillStudioRedirect />} />
          <Route path="skills/*" element={<UnprefixedBoardRedirect />} />
          <Route path="settings" element={<LegacySettingsRedirect />} />
          <Route path="settings/*" element={<LegacySettingsRedirect />} />
          <Route path="agents" element={<UnprefixedBoardRedirect />} />
          {AGENT_FILTER_TABS.map((tab) => (
            <Route key={tab} path={`agents/${tab}`} element={<UnprefixedBoardRedirect />} />
          ))}
          <Route path="agents/new" element={<UnprefixedBoardRedirect />} />
          <Route path="agents/:agentId" element={<UnprefixedBoardRedirect />} />
          <Route path="agents/:agentId/:tab" element={<UnprefixedBoardRedirect />} />
          <Route path="agents/:agentId/runs/:runId" element={<UnprefixedBoardRedirect />} />
          <Route path="projects" element={<UnprefixedBoardRedirect />} />
          <Route path="projects/:projectId" element={<UnprefixedBoardRedirect />} />
          <Route path="projects/:projectId/overview" element={<UnprefixedBoardRedirect />} />
          <Route path="projects/:projectId/issues" element={<UnprefixedBoardRedirect />} />
          <Route path="projects/:projectId/issues/:filter" element={<UnprefixedBoardRedirect />} />
          <Route path="projects/:projectId/workspaces" element={<UnprefixedBoardRedirect />} />
          <Route path="projects/:projectId/workspaces/:workspaceId" element={<UnprefixedBoardRedirect />} />
          <Route path="projects/:projectId/configuration" element={<UnprefixedBoardRedirect />} />
          <Route path="workspaces" element={<UnprefixedBoardRedirect />} />
          <Route path="execution-workspaces/:workspaceId" element={<UnprefixedBoardRedirect />} />
          <Route path="execution-workspaces/:workspaceId/services" element={<UnprefixedBoardRedirect />} />
          <Route path="execution-workspaces/:workspaceId/configuration" element={<UnprefixedBoardRedirect />} />
          <Route path="execution-workspaces/:workspaceId/runtime-logs" element={<UnprefixedBoardRedirect />} />
          <Route path="execution-workspaces/:workspaceId/issues" element={<UnprefixedBoardRedirect />} />
          <Route path="execution-workspaces/:workspaceId/routines" element={<UnprefixedBoardRedirect />} />
          <Route path=":companyPrefix" element={<Layout />}>
            {boardRoutes()}
          </Route>
          <Route path="*" element={<NotFoundPage scope="global" />} />
        </Route>
      </Routes>
      <OnboardingWizardVariant />
    </>
  );
}
