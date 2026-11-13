export type CaseStudyDetail = {
  chapter: string;
  thesis: string;
  context: string;
  users: { role: string; need: string }[];
  workflow: { title: string; detail: string }[];
  decisions: { title: string; rationale: string; tradeoff: string }[];
  architecture: { layer: string; detail: string }[];
  signals: { name: string; method: string }[];
  guardrail: string;
  nextStep: string;
};

export const caseStudies: Record<string, CaseStudyDetail> = {
  "enterprise-accounting-erp": {
    chapter: "The connected finance workspace",
    thesis: "Make the financial state of a business understandable at a glance, then let every operational action resolve back to a trusted accounting record.",
    context: "Accounting software becomes difficult when each function feels like a separate mini-product. Owners switch between invoices, purchases, inventory, tax workflows and bank statements, while finance teams carry the burden of reconciling the gaps. The product direction is a modular operating system for business finance, with a dependable ledger at its centre.",
    users: [
      { role: "Business owner", need: "Understand cash position, obligations and performance without learning accounting terminology." },
      { role: "Accountant", need: "Maintain a correct ledger, close periods, reconcile accounts and produce defensible reports." },
      { role: "Operations manager", need: "Connect purchasing, stock movement and sales activity to financial records." },
      { role: "Finance administrator", need: "Control approvals, access, supporting documents and audit history." }
    ],
    workflow: [
      { title: "Set up the books", detail: "Configure the organisation, financial year, chart of accounts, tax registrations, opening balances and user permissions." },
      { title: "Record a business event", detail: "Create an invoice, bill, receipt, payment or journal entry through a form that explains the accounting impact before posting." },
      { title: "Reconcile the movement", detail: "Match bank lines to existing transactions, flag unmatched items and keep a traceable path from statement to ledger." },
      { title: "Review exceptions", detail: "Surface overdue receivables, unusual balances, missing tax details and inventory variances as work to resolve, not just dashboard alerts." },
      { title: "Close and report", detail: "Use period controls, review checklists and locked snapshots to support reliable statements and an auditable close." }
    ],
    decisions: [
      { title: "Ledger first, modules second", rationale: "Every invoice, stock adjustment and payment should resolve to a consistent source of truth.", tradeoff: "A stricter posting model requires careful onboarding and validation, but prevents disconnected sub-ledgers." },
      { title: "Progressive complexity", rationale: "Owners should see a clear summary while accountants can open journals, tax treatment and reconciliation details.", tradeoff: "Role-aware views add design and permission complexity, but avoid forcing every user into the same interface." },
      { title: "Explain before posting", rationale: "Show the accounts, tax treatment and balance impact before an irreversible financial action.", tradeoff: "An extra review step can slow expert users, so frequent actions need keyboard-friendly shortcuts." },
      { title: "Treat exceptions as work", rationale: "An overdue invoice or unmatched bank line needs ownership, next action and resolution state.", tradeoff: "Workflow tracking increases scope; start with the exceptions that materially affect close quality." }
    ],
    architecture: [
      { layer: "Experience layer", detail: "Role-aware workspaces for owners, accountants and operations, with a consistent transaction vocabulary." },
      { layer: "Domain services", detail: "Sales, purchasing, inventory, tax, banking and reporting as bounded modules that share accounting rules." },
      { layer: "Accounting core", detail: "Double-entry postings, period controls, account mappings, reversals and immutable audit events." },
      { layer: "Trust & operations", detail: "Permission scopes, approvals, backups, import validation, export controls and monitored background jobs." }
    ],
    signals: [
      { name: "Time to first correct transaction", method: "Observe whether a new organisation can configure accounts and post a valid transaction without assisted support." },
      { name: "Reconciliation completion", method: "Track matched, unmatched and manually adjusted bank lines by period and organisation." },
      { name: "Close readiness", method: "Measure the number of unresolved exceptions and the time required to complete a review checklist." },
      { name: "Correction rate", method: "Review reversals, edits after posting and recurring validation failures to find confusing workflows." }
    ],
    guardrail: "Financial figures shown in the interface study are illustrative. A production accounting system needs validated tax rules, secure data handling, tested posting logic and accountant review before being used for statutory books.",
    nextStep: "Validate the end-to-end invoice-to-ledger and bank-reconciliation journeys with a practicing accountant, then harden the posting engine and period-close controls before widening the module set."
  },
  "education-360": {
    chapter: "One learning ecosystem, distinct role experiences",
    thesis: "Connect the daily work of a school without making students, teachers, parents and administrators navigate the same product.",
    context: "Education platforms often accumulate features around individual departments. The result is duplicated records, fragmented communication and dashboards that report activity without helping someone take the next step. Education 360 is framed as a coordinated institution platform with a role-specific experience over a shared student and learning record.",
    users: [
      { role: "Student", need: "Know what is due, where to be, what feedback matters and how learning is progressing." },
      { role: "Teacher", need: "Prepare classes, capture attendance, share learning material and give useful feedback with minimal administration." },
      { role: "Parent or guardian", need: "See clear updates about attendance, notices, progress and actions that need attention." },
      { role: "Institution administrator", need: "Manage enrolment, classes, staff, calendars, policies and institution-wide reporting." }
    ],
    workflow: [
      { title: "Create the institution model", detail: "Set academic years, campuses, grades, sections, subjects, terms, staff roles and guardian relationships." },
      { title: "Build the learner profile", detail: "Bring enrolment, attendance, class membership, assessments and communication into one permission-aware record." },
      { title: "Run the school day", detail: "Give teachers a fast class view for attendance, lesson context, assignments and follow-up actions." },
      { title: "Close the feedback loop", detail: "Publish feedback and progress summaries in language that students and guardians can understand and act on." },
      { title: "Improve institution operations", detail: "Help administrators identify bottlenecks in attendance, workload, communication and academic operations without ranking people unfairly." }
    ],
    decisions: [
      { title: "Shared record, separate front doors", rationale: "A student record can support multiple roles while each person sees only the tasks and details appropriate to them.", tradeoff: "Role-aware information architecture is more demanding than one universal dashboard, but materially reduces clutter and access risk." },
      { title: "Design for the school timetable", rationale: "Teacher workflows should follow periods, classes and academic calendars rather than generic task lists.", tradeoff: "Timetable models vary by institution, so configuration must be flexible without becoming opaque." },
      { title: "Communication with acknowledgement", rationale: "Important notices need delivery and acknowledgement states, not just another message thread.", tradeoff: "More status visibility creates notification pressure; the product needs quiet hours and digest controls." },
      { title: "Progress as a conversation", rationale: "Learning information should show context and next steps rather than reduce a learner to a single score.", tradeoff: "Narrative feedback requires more structure and moderation than a simple grade display." }
    ],
    architecture: [
      { layer: "Identity & tenancy", detail: "Institution boundaries, campus membership, role assignments, guardian links and scoped access." },
      { layer: "Academic domain", detail: "Learners, classes, timetables, attendance, curriculum, assignments and assessment periods." },
      { layer: "Communication services", detail: "Notices, reminders, acknowledgement, message preferences and delivery history." },
      { layer: "Insight layer", detail: "Progress summaries and operational trends with definitions, drill-down and careful access controls." }
    ],
    signals: [
      { name: "Teacher task time", method: "Observe time and error rate for attendance, assignment publishing and feedback tasks." },
      { name: "Parent comprehension", method: "Test whether guardians can interpret an update and identify the next action without staff help." },
      { name: "Communication follow-through", method: "Measure notice delivery, acknowledgement and unanswered follow-up by message type." },
      { name: "Record consistency", method: "Audit duplicate learner records, timetable conflicts and mismatched class membership." }
    ],
    guardrail: "Student information is sensitive. Any live deployment requires strict institution tenancy, guardian verification, role-based access, retention policy, consent handling and age-appropriate UX. All interface data in this portfolio study is illustrative.",
    nextStep: "Choose one institution profile and validate the timetable-to-attendance-to-parent-update journey with teachers and administrators before expanding into learning analytics."
  },
  "mobility-ai": {
    chapter: "An operations room for moving fleets",
    thesis: "Turn scattered fleet signals into a shared operational picture, with human dispatchers staying in control of consequential decisions.",
    context: "Fleet teams make decisions under time pressure. Vehicle position, driver availability, delivery commitments, maintenance events and route disruptions may live in separate tools. The proposed Mobility AI experience centres on a live operational map, but makes the exception queue and the reason behind each alert just as important as the map itself.",
    users: [
      { role: "Fleet controller", need: "See vehicle state, route progress and exceptions across the fleet from one operational view." },
      { role: "Dispatcher", need: "Reassign work, communicate changes and understand the impact before committing a new route." },
      { role: "Maintenance lead", need: "Prioritise service issues based on vehicle condition, severity and operational dependency." },
      { role: "Business operator", need: "Understand service reliability, utilisation and recurring bottlenecks over time." }
    ],
    workflow: [
      { title: "Connect the operating context", detail: "Import vehicles, depots, operating zones, driver shifts, delivery jobs and service commitments." },
      { title: "Observe the live picture", detail: "Combine location pings with freshness indicators so operators can distinguish a moving vehicle from a stale signal." },
      { title: "Triage a disruption", detail: "Group late arrivals, route blockages, idle vehicles and maintenance warnings into an owned exception queue." },
      { title: "Compare possible actions", detail: "Preview travel, capacity and downstream commitment implications before a dispatcher changes an assignment." },
      { title: "Learn from the shift", detail: "Review route adherence, delay causes and unresolved exceptions to improve the next operating plan." }
    ],
    decisions: [
      { title: "Map plus queue", rationale: "A geographic view explains where something is; a queue explains what needs a decision.", tradeoff: "The interface must preserve context between the map selection and the operational record." },
      { title: "Freshness is a first-class signal", rationale: "A location marker without a timestamp can create false confidence.", tradeoff: "Showing stale or uncertain positions adds visual noise but improves operational trust." },
      { title: "Recommendations are explainable", rationale: "A route or reassignment suggestion should show the constraints it considers.", tradeoff: "Explanations use screen space and require a clear hierarchy between essential and optional detail." },
      { title: "Human approval for dispatch", rationale: "Dispatch changes affect drivers, customers and safety; automation should assist rather than silently commit.", tradeoff: "Approval adds a step, so low-risk repetitive actions may be streamlined after validation." }
    ],
    architecture: [
      { layer: "Signal ingestion", detail: "Vehicle telematics, job updates, driver status and maintenance events with timestamps and source quality." },
      { layer: "Operational model", detail: "Vehicles, routes, jobs, depots, shifts, service zones and assignment constraints." },
      { layer: "Decision support", detail: "ETA estimates, route options, exception rules and explainable prioritisation." },
      { layer: "Command experience", detail: "Map, fleet list, dispatch queue, vehicle detail and shift review with permissioned actions." }
    ],
    signals: [
      { name: "Exception acknowledgement", method: "Measure elapsed time from a qualified alert to an operator opening and assigning it." },
      { name: "Signal freshness", method: "Track the proportion of visible vehicle states backed by sufficiently recent telemetry." },
      { name: "On-time service", method: "Compare planned commitments with actual completion, segmented by route and disruption cause." },
      { name: "Recommendation acceptance", method: "Record accepted, modified and rejected suggestions with the operator's reason." }
    ],
    guardrail: "The portfolio screen is a product concept with synthetic fleet data. Real routing requires validated maps, telemetry contracts, safety constraints, privacy controls and operational testing; no live fleet integration or autonomous dispatch is claimed.",
    nextStep: "Validate one dispatch scenario with a fleet operator, including a stale GPS signal and a vehicle breakdown, before designing optimisation around real constraints."
  },
  "digital-government-transformation": {
    chapter: "Public services designed around citizen tasks",
    thesis: "Make essential information easier to find, understand and act on, while giving public-sector teams a maintainable and governed publishing model.",
    context: "Government websites are often shaped by organisational structures rather than citizen needs. Residents arrive with a task: find a service, understand a requirement, locate a contact or complete a process. The delivery approach connects discovery, information architecture, accessibility, content operations and launch readiness so the digital experience works for both the public and the institution.",
    users: [
      { role: "Resident or service user", need: "Find the right information quickly, understand the next step and use the site with assistive technology." },
      { role: "Department content owner", need: "Publish accurate updates with a clear owner, review date and approval route." },
      { role: "Municipal communications team", need: "Maintain consistent navigation, service language and urgent announcements across departments." },
      { role: "IT and web administrator", need: "Operate a secure, maintainable platform with predictable releases and support ownership." }
    ],
    workflow: [
      { title: "Discover citizen intent", detail: "Review search behaviour, existing content, stakeholder interviews and high-value service tasks." },
      { title: "Reframe the information architecture", detail: "Organise around resident goals, plain-language labels, clear routes and a consistent page hierarchy." },
      { title: "Prepare accessible content", detail: "Audit documents, headings, links, forms, contrast, keyboard paths and alternative text before migration." },
      { title: "Coordinate the delivery system", detail: "Define dependencies, owners, review checkpoints, content freeze, QA cycles and escalation paths." },
      { title: "Launch and govern", detail: "Validate redirects, analytics, accessibility, support handover, content ownership and a post-launch issue process." }
    ],
    decisions: [
      { title: "Citizen tasks before department names", rationale: "Navigation should reflect the language and intent of residents rather than internal reporting lines.", tradeoff: "Some departments may need multiple service routes, requiring clear ownership and content governance." },
      { title: "Accessibility as delivery acceptance", rationale: "Accessibility cannot be left as a final visual audit; it affects content, component design and testing.", tradeoff: "It requires earlier involvement from content and technical teams, but reduces expensive late rework." },
      { title: "Content migration as product work", rationale: "Migrating every old page preserves clutter; review each item for relevance, owner and destination.", tradeoff: "Editorial decisions can become a schedule dependency and need explicit decision rights." },
      { title: "Launch readiness is a system", rationale: "A successful release needs redirect checks, analytics, support ownership and rollback thinking, not just a deployment date.", tradeoff: "Readiness gates require discipline and can surface risks earlier than stakeholders expect." }
    ],
    architecture: [
      { layer: "Citizen experience", detail: "Task-led navigation, accessible page templates, service details, forms, search and mobile-first patterns." },
      { layer: "Content operations", detail: "Taxonomy, page ownership, review dates, approvals, media standards and editorial governance." },
      { layer: "Platform & integration", detail: "CMS, identity where required, analytics, redirects, search indexing and third-party service links." },
      { layer: "Delivery & assurance", detail: "Accessibility validation, content QA, security checks, release plan, support model and issue triage." }
    ],
    signals: [
      { name: "Task completion", method: "Test representative resident tasks and record success, misroutes, assistance and completion time." },
      { name: "Search refinement", method: "Review zero-result terms, repeated queries and searches that lead to no useful page." },
      { name: "Accessibility defects", method: "Track issues by severity and template, using automated checks plus manual keyboard and screen-reader review." },
      { name: "Content freshness", method: "Measure pages with an owner and current review date, then audit the highest-risk service content." }
    ],
    guardrail: "This case study describes a delivery approach based on public-sector project management experience. Client-sensitive artefacts, exact contributions and project-specific outcomes are intentionally not disclosed here.",
    nextStep: "Select one anonymised citizen task and show its journey from discovery through content model, accessibility checks, QA and release governance using only approved, non-confidential evidence."
  },
  "rfp-intelligence": {
    chapter: "From bid documents to a decision-ready workbench",
    thesis: "Help bid teams understand an opportunity before they commit effort, and turn every extracted requirement into a traceable human-reviewed action.",
    context: "RFPs compress eligibility rules, scope, deadlines, forms, insurance, technical requirements and submission instructions into long document sets. A missed clause can invalidate an otherwise strong response. This concept treats the RFP as a structured project with evidence and owners, rather than a document to summarise once.",
    users: [
      { role: "Bid manager", need: "Decide whether an opportunity is worth pursuing and coordinate a complete submission plan." },
      { role: "Subject-matter expert", need: "Review only the requirements relevant to their service, solution or evidence." },
      { role: "Compliance reviewer", need: "Trace every response claim to the originating clause and supporting document." },
      { role: "Executive approver", need: "See bid fit, delivery risk, submission effort and unresolved blockers before approving pursuit." }
    ],
    workflow: [
      { title: "Ingest the bid pack", detail: "Add the main RFP, addenda, exhibits, response templates and referenced policy documents while preserving file versions." },
      { title: "Extract the opportunity structure", detail: "Identify dates, eligibility, mandatory forms, scope, evaluation criteria, contract terms and submission method with page-level citations." },
      { title: "Run a bid-fit review", detail: "Compare requirements with capabilities, past performance, certifications, delivery capacity and geographic constraints." },
      { title: "Build the compliance matrix", detail: "Assign each requirement an owner, response approach, evidence link, status and reviewer." },
      { title: "Control the submission", detail: "Generate a deadline plan, highlight addenda changes and verify the final response package against mandatory instructions." }
    ],
    decisions: [
      { title: "Evidence beside every extraction", rationale: "A detected requirement is useful only when a reviewer can inspect the source passage and page.", tradeoff: "Citation capture adds complexity, but makes review faster and safer." },
      { title: "Mandatory versus scored requirements", rationale: "A disqualifying condition should not be visually equal to a preference or evaluation criterion.", tradeoff: "Classification may be uncertain, so confidence and reviewer confirmation remain visible." },
      { title: "Addenda as change events", rationale: "New documents can alter dates, scope or submission rules; the product should show what changed.", tradeoff: "Version comparison takes more processing, but reduces reliance on memory and email." },
      { title: "Human decision on bid/no-bid", rationale: "The product can structure fit and risk, but commercial strategy and legal commitments need accountable owners.", tradeoff: "The recommendation is advisory and must expose unknowns rather than manufacture certainty." }
    ],
    architecture: [
      { layer: "Document pipeline", detail: "Secure upload, OCR where needed, file versioning, parsing and page-level source coordinates." },
      { layer: "Requirement model", detail: "Typed clauses for deadlines, eligibility, deliverables, forms, evaluation, terms and submission logistics." },
      { layer: "Review workspace", detail: "Compliance matrix, owner assignment, evidence library, addenda diff and bid/no-bid review." },
      { layer: "Governance", detail: "Access controls, source citations, extraction confidence, reviewer overrides and activity audit." }
    ],
    signals: [
      { name: "Requirement coverage", method: "Have reviewers compare extracted clauses against a manually verified sample of the source pack." },
      { name: "Citation accuracy", method: "Check whether a reviewer can jump to the exact supporting page and passage for each requirement." },
      { name: "Review effort", method: "Compare time spent finding, assigning and confirming requirements with the existing process." },
      { name: "Late-stage omissions", method: "Track mandatory requirements discovered after the compliance review as a quality signal." }
    ],
    guardrail: "This is an independent AI product concept. Extraction can miss context or misclassify clauses. Legal interpretation, eligibility decisions and final submission checks must remain with qualified human reviewers.",
    nextStep: "Prototype a single RFP intake with a citation-backed requirement matrix, then run a blind comparison against a human-prepared compliance matrix to understand error patterns."
  },
  "agent-orchestration": {
    chapter: "Make multi-agent work observable and governable",
    thesis: "Treat agentic workflows like production operations: explicit ownership, inspectable tool use, permission boundaries and meaningful human approval.",
    context: "A multi-agent demo can look impressive while hiding the difficult questions. Which agent owns a task? What context did it receive? Which tools may it call? What happens when it fails, repeats work or reaches an irreversible action? This concept focuses on the orchestration control plane rather than anthropomorphic chat.",
    users: [
      { role: "Workflow designer", need: "Compose task graphs, define input/output contracts and understand dependencies." },
      { role: "Operations owner", need: "See run state, failures, retries, cost drivers and work waiting for approval." },
      { role: "Risk or security reviewer", need: "Inspect permissions, data access, tool boundaries and approval policy." },
      { role: "Human approver", need: "Review the evidence and proposed action before a consequential step executes." }
    ],
    workflow: [
      { title: "Define the workflow contract", detail: "Set the goal, input schema, expected outputs, success criteria and tasks that require human approval." },
      { title: "Assign specialised agents", detail: "Give each agent a bounded role, context window, permitted tools, output schema and escalation condition." },
      { title: "Execute with visible state", detail: "Show queued, running, blocked, completed and failed tasks with dependencies and event timestamps." },
      { title: "Review a decision gate", detail: "Present the proposed action, evidence, uncertainty and potential side effects for explicit approval or rejection." },
      { title: "Recover and audit", detail: "Retry safely, resume from checkpoints, prevent duplicate side effects and retain an inspectable run history." }
    ],
    decisions: [
      { title: "Graph is the source of truth", rationale: "A visual task graph exposes dependencies and blocked work better than a long chat transcript.", tradeoff: "Graphs become hard to read at scale, so the interface needs grouping and progressive detail." },
      { title: "Tool permissions are explicit", rationale: "An agent should receive only the tools and data needed for its task.", tradeoff: "Permission configuration adds setup work but meaningfully limits accidental overreach." },
      { title: "Approval is a first-class node", rationale: "Human review belongs inside the workflow, not in an informal message outside it.", tradeoff: "Approvals interrupt execution; policies should distinguish reversible from irreversible actions." },
      { title: "Retry must be idempotent", rationale: "A resumed workflow should not send duplicate emails, create duplicate records or repeat external actions.", tradeoff: "Idempotency requires explicit side-effect contracts and durable execution state." }
    ],
    architecture: [
      { layer: "Workflow definition", detail: "Versioned graph, task schemas, dependencies, timeouts and approval policies." },
      { layer: "Agent runtime", detail: "Bounded context, model selection, tool registry, secrets isolation and structured outputs." },
      { layer: "Execution control", detail: "Queue, scheduler, checkpointing, retries, idempotency keys and cancellation." },
      { layer: "Observability & trust", detail: "Event logs, token and tool usage, trace IDs, policy checks, approvals and redaction." }
    ],
    signals: [
      { name: "Task completion reliability", method: "Measure completed, failed, retried and abandoned tasks by workflow and agent role." },
      { name: "Human intervention rate", method: "Track where users intervene, reject outputs or request additional evidence." },
      { name: "Side-effect safety", method: "Test repeated execution, cancellation and retry paths against duplicate external actions." },
      { name: "Run explainability", method: "Ask an operator to reconstruct why a workflow took a particular path using the audit trail." }
    ],
    guardrail: "The interface is a concept, not a live agent platform. Any real deployment requires sandboxing, secrets management, strict tool permissions, prompt-injection defences, auditability and human approval for high-impact actions.",
    nextStep: "Build a deterministic workflow simulator with failure, retry and approval states before connecting any real models or external tools."
  },
  "revenue-intelligence-crm": {
    chapter: "A CRM that helps the next conversation happen",
    thesis: "Move the CRM from passive record keeping to a focused daily system that explains pipeline health and makes the next best action visible.",
    context: "Sales tools can become data-entry systems that reveal little about what a team should do next. Leads, contacts, notes, follow-ups and opportunity stages often drift apart. The concept pairs a familiar pipeline with account context, a transparent prioritisation model and a practical follow-up queue.",
    users: [
      { role: "Business development representative", need: "Know whom to contact, why the lead matters and what the last interaction was." },
      { role: "Account executive", need: "Understand stakeholder context, opportunity risks and the next milestone." },
      { role: "Sales manager", need: "Coach pipeline quality, spot stalled deals and understand forecast assumptions." },
      { role: "Revenue operations", need: "Keep fields, lifecycle definitions, routing rules and reporting consistent." }
    ],
    workflow: [
      { title: "Capture and qualify", detail: "Create a lead with source, organisation, need, fit signals and a clearly stated qualification gap." },
      { title: "Build account context", detail: "Connect stakeholders, meetings, notes, documents, services of interest and previous interactions." },
      { title: "Advance with evidence", detail: "Move an opportunity through stages only when the required exit criteria and buyer signals are recorded." },
      { title: "Prioritise follow-up", detail: "Use urgency, fit, engagement and time since last contact to surface a suggested queue with the reason shown." },
      { title: "Inspect the forecast", detail: "Review amount, stage, probability assumptions, close date confidence and risks by owner or segment." }
    ],
    decisions: [
      { title: "Explain the score", rationale: "A lead priority should show the signals behind it rather than present an opaque number.", tradeoff: "Explainable rules are easier to trust but need governance to avoid stale or biased assumptions." },
      { title: "Stage exit criteria", rationale: "A pipeline stage should represent buyer progress, not salesperson optimism.", tradeoff: "More disciplined fields can feel heavier, so capture should be embedded in natural workflows." },
      { title: "Relationship context over activity volume", rationale: "A high email count is not the same as a healthy opportunity.", tradeoff: "Qualitative context is harder to standardise and needs manager review." },
      { title: "Follow-up as a daily queue", rationale: "A single prioritised action list reduces the cognitive cost of navigating multiple records.", tradeoff: "Users need control over suggested priorities and a clear way to snooze or dismiss an item." }
    ],
    architecture: [
      { layer: "CRM records", detail: "Leads, accounts, contacts, opportunities, activities, products and relationship links." },
      { layer: "Lifecycle rules", detail: "Lead routing, qualification fields, stage gates, ownership, reminders and deduplication." },
      { layer: "Intelligence layer", detail: "Transparent fit and engagement signals, stale-opportunity detection and forecast assumptions." },
      { layer: "Manager workspace", detail: "Team pipeline, coaching views, exceptions, saved filters and change history." }
    ],
    signals: [
      { name: "Follow-up completion", method: "Measure planned actions completed within the intended window, segmented by type." },
      { name: "Stage hygiene", method: "Track opportunities missing required evidence or sitting beyond an agreed stage duration." },
      { name: "Forecast calibration", method: "Compare stage-based expectations with actual outcomes over time; do not assume a model is accurate." },
      { name: "Data completeness", method: "Monitor duplicate records and missing fields that materially affect routing or decisions." }
    ],
    guardrail: "All records and signals in the interface are synthetic. Any scoring must be reviewed for fairness, explainability and data quality, and must never be presented as a guaranteed prediction.",
    nextStep: "Test the lead-to-opportunity workflow with a small sales team and compare the suggested follow-up queue with the actions experienced reps would actually take."
  },
  "healthcare-operations": {
    chapter: "Operational clarity without exposing more patient data",
    thesis: "Help care teams coordinate the work around appointments and capacity while keeping sensitive information out of unnecessary views.",
    context: "Healthcare operations involve many small dependencies: appointment availability, room capacity, staff schedules, preparation instructions and follow-up. When each activity sits in a disconnected tool, front-desk teams spend time resolving conflicts instead of helping people. This concept focuses on administrative coordination, not diagnosis or treatment decisions.",
    users: [
      { role: "Front-desk coordinator", need: "Schedule, confirm, reschedule and prepare visits without losing patient context." },
      { role: "Clinic operations manager", need: "Understand capacity, bottlenecks, cancellations and workload across locations." },
      { role: "Care-team member", need: "See the operational details needed for a visit without unrelated administrative data." },
      { role: "System administrator", need: "Manage roles, locations, schedules and audit access to sensitive information." }
    ],
    workflow: [
      { title: "Configure capacity", detail: "Model locations, rooms, appointment types, staff availability, buffers and operating hours." },
      { title: "Find an appropriate slot", detail: "Use service duration, staff skill, location and patient preference to present valid options." },
      { title: "Prepare the visit", detail: "Track confirmation, required administrative documents and preparation status using minimal necessary data." },
      { title: "Manage the day", detail: "Surface late arrivals, cancellations, room conflicts and overbooked periods in a coordinated work queue." },
      { title: "Close the operational loop", detail: "Review utilisation, wait-time patterns and recurring schedule friction without exposing clinical details unnecessarily." }
    ],
    decisions: [
      { title: "Operational status, not clinical judgement", rationale: "The product is deliberately constrained to scheduling and administrative coordination.", tradeoff: "It avoids high-risk clinical use cases but needs clear handoff to clinical systems." },
      { title: "Minimum necessary information", rationale: "Most capacity tasks do not need a full clinical record.", tradeoff: "Context may require a secure deep link or separate permission check." },
      { title: "Exceptions before dashboards", rationale: "A schedule conflict needs ownership and resolution more urgently than a weekly utilisation chart.", tradeoff: "The operational queue needs clear prioritisation to prevent alert fatigue." },
      { title: "Accessible for busy environments", rationale: "Large targets, clear status, keyboard operation and responsive layouts support high-throughput work.", tradeoff: "Dense data must be organised into layers without hiding critical information." }
    ],
    architecture: [
      { layer: "Scheduling domain", detail: "Appointments, slots, service types, staff calendars, rooms, locations and availability rules." },
      { layer: "Operations workflow", detail: "Confirmation, preparation, cancellation, rescheduling, waitlist and exception states." },
      { layer: "Identity & privacy", detail: "Role-based access, minimum data views, audit events, retention and secure integration boundaries." },
      { layer: "Operational analytics", detail: "Capacity, utilisation, no-show and wait-time measures with clear definitions and access controls." }
    ],
    signals: [
      { name: "Scheduling completion", method: "Observe time and error rate for booking, rescheduling and cancellation workflows." },
      { name: "Capacity utilisation", method: "Compare available slots with booked and completed appointments by service and location." },
      { name: "Administrative wait time", method: "Measure time between arrival, check-in and operational readiness without inferring clinical outcomes." },
      { name: "Privacy exceptions", method: "Audit inappropriate access attempts, overexposed fields and unresolved permission defects." }
    ],
    guardrail: "This is an administrative product concept using synthetic data. It is not a clinical system or medical decision tool. Any deployment must meet applicable health-data, privacy, security, accessibility and interoperability requirements.",
    nextStep: "Validate the appointment rescheduling and same-day exception workflow with front-desk staff, then perform a privacy threat model before testing with any real records."
  },
  "fraud-risk-engine": {
    chapter: "A defensible investigation workflow for risk teams",
    thesis: "Prioritise suspicious activity without turning a model signal into an accusation, and make every investigator decision traceable.",
    context: "Risk analysts work through queues of alerts that vary widely in quality and urgency. A black-box score can create false confidence, while a dense transaction screen can obscure the pattern that triggered review. The concept makes evidence, context and decision status the centre of the investigation experience.",
    users: [
      { role: "Fraud analyst", need: "Understand why an event was flagged, inspect related activity and document a defensible decision." },
      { role: "Investigation lead", need: "Allocate work by risk and workload, review escalations and maintain consistent case standards." },
      { role: "Compliance reviewer", need: "Trace evidence, policy references, actions and approvals for later audit." },
      { role: "Model or data steward", need: "Monitor alert quality, drift, false positives and the effect of rules or model changes." }
    ],
    workflow: [
      { title: "Receive a signal", detail: "Create an alert with source, time, event type, detection reason and data-quality context." },
      { title: "Build the event picture", detail: "Show related transactions, account history, device or channel context where lawfully available and permitted." },
      { title: "Investigate the pattern", detail: "Let an analyst compare events, inspect rule contributions and record supporting or contradictory evidence." },
      { title: "Choose a controlled disposition", detail: "Mark for monitoring, request information, escalate or close with a reason and required approval." },
      { title: "Review system quality", detail: "Feed confirmed outcomes into controlled evaluation of alert quality, drift and investigator workload." }
    ],
    decisions: [
      { title: "Evidence before score", rationale: "Analysts need to see the event pattern and reason, not just a severity badge.", tradeoff: "More context requires thoughtful information hierarchy and progressive disclosure." },
      { title: "Separate detection from decision", rationale: "A model can surface a pattern; a trained investigator determines what action is appropriate.", tradeoff: "The process is slower than automated blocking but avoids unsupported conclusions." },
      { title: "Record contrary evidence", rationale: "A defensible case includes what did not fit the initial suspicion.", tradeoff: "Structured notes take time, so forms should guide rather than constrain judgement." },
      { title: "Monitor fairness and drift", rationale: "Alert quality can change across time, channel and customer segments.", tradeoff: "Evaluation requires governance, representative labels and careful treatment of sensitive attributes." }
    ],
    architecture: [
      { layer: "Event ingestion", detail: "Validated transaction events, entity resolution, timestamps and source lineage." },
      { layer: "Detection services", detail: "Rules and model outputs with version, reason codes, confidence and feature provenance." },
      { layer: "Case management", detail: "Alert queues, investigation notes, evidence, dispositions, escalation and approvals." },
      { layer: "Model governance", detail: "Outcome feedback, drift monitoring, false-positive review, access controls and audit." }
    ],
    signals: [
      { name: "Alert precision", method: "Review investigator-confirmed outcomes against a consistently labelled sample." },
      { name: "Time to disposition", method: "Measure elapsed time from alert creation to a reviewed case outcome." },
      { name: "Escalation quality", method: "Audit whether escalated cases contain the evidence and context required by the next reviewer." },
      { name: "Model stability", method: "Monitor drift and alert distribution across time, channel and relevant operational segments." }
    ],
    guardrail: "This concept uses synthetic events and an illustrative risk display. It does not detect real fraud. Production use requires legal review, model validation, privacy controls, explainability, bias assessment and human oversight.",
    nextStep: "Run a tabletop investigation with synthetic cases, including a false positive and an ambiguous pattern, to test whether analysts can explain and challenge the alert."
  },
  "enterprise-support-copilot": {
    chapter: "Answers that show their working",
    thesis: "Reduce knowledge-hunting time while making the source, freshness and limits of every generated answer visible.",
    context: "Enterprise knowledge is spread across handbooks, tickets, policies, product docs and team spaces. A conversational interface helps only if it retrieves the right source, respects access boundaries and makes uncertainty obvious. The concept is a source-aware support workspace with human escalation as part of the answer path.",
    users: [
      { role: "Employee or customer", need: "Ask a question in natural language and receive a useful answer with links to the underlying material." },
      { role: "Support agent", need: "Resolve repeat questions faster while retaining context and control over the response." },
      { role: "Knowledge manager", need: "Identify missing, conflicting and outdated documentation that causes repeated questions." },
      { role: "Security administrator", need: "Ensure retrieval respects the user's access and does not expose restricted content." }
    ],
    workflow: [
      { title: "Ask in context", detail: "Capture the question, product area, user role and relevant conversation history without collecting unnecessary data." },
      { title: "Retrieve permitted sources", detail: "Search only documents the user can access, with filters for source type, freshness and scope." },
      { title: "Compose a grounded response", detail: "Generate a concise answer with citations beside claims and a clear indication when evidence is incomplete." },
      { title: "Resolve or escalate", detail: "Let the user open source material, ask a follow-up, hand off to a human or flag an incorrect answer." },
      { title: "Improve the knowledge base", detail: "Aggregate unanswered questions and feedback into a review queue for content owners." }
    ],
    decisions: [
      { title: "Source links are part of the answer", rationale: "Users should be able to verify a policy statement without trusting the assistant blindly.", tradeoff: "Citation quality and source ranking become product-critical capabilities." },
      { title: "Permission-aware retrieval", rationale: "The assistant must not become a side door into restricted documents.", tradeoff: "Identity and ACL synchronisation complicate indexing but are non-negotiable." },
      { title: "Abstain rather than invent", rationale: "When sources conflict or retrieval is weak, the assistant should say what is missing and offer escalation.", tradeoff: "More abstentions can reduce apparent automation rate but improve trust." },
      { title: "Feedback improves content, not just the model", rationale: "Repeated unanswered questions often expose a documentation problem.", tradeoff: "Content governance needs owners and review SLAs, not only model tuning." }
    ],
    architecture: [
      { layer: "Knowledge connectors", detail: "Document ingestion, permissions, metadata, versioning and freshness tracking." },
      { layer: "Retrieval layer", detail: "Chunking, indexing, hybrid search, reranking and access filtering." },
      { layer: "Response orchestration", detail: "Prompt policy, grounded generation, citation assembly, confidence handling and abstention." },
      { layer: "Experience & governance", detail: "Chat, sources panel, human handoff, feedback queue, logging, retention and evaluation." }
    ],
    signals: [
      { name: "Grounded answer rate", method: "Have reviewers verify that key answer claims are supported by the cited source passages." },
      { name: "Source usefulness", method: "Track whether users open cited material and whether the source resolves the question." },
      { name: "Escalation quality", method: "Review whether the handoff preserves context and reduces repeated explanation." },
      { name: "Knowledge gaps", method: "Cluster unanswered questions and feedback by topic, source freshness and ownership." }
    ],
    guardrail: "This is a product concept, not a connected AI assistant. Any deployment needs access-aware retrieval, prompt-injection controls, privacy boundaries, source evaluation and a human escalation route.",
    nextStep: "Prototype retrieval and citation behaviour against a small, permission-labelled knowledge set, then evaluate with adversarial and ambiguous questions before connecting an LLM."
  },
  "supply-chain-control-tower": {
    chapter: "A shared operating picture for supply chain exceptions",
    thesis: "Connect shipment, inventory and supplier signals around the exceptions that threaten a commitment, not just a wall of status indicators.",
    context: "Supply chain teams often discover a problem only after it has crossed system boundaries. A shipment delay affects inventory, production plans, customer promises and supplier conversations. The control tower concept links an event to its downstream impact and gives teams a shared case to coordinate around.",
    users: [
      { role: "Supply chain planner", need: "Understand which inbound or outbound movement threatens a production or fulfilment plan." },
      { role: "Logistics coordinator", need: "Track milestones, carrier updates and exceptions with clear owners." },
      { role: "Procurement lead", need: "See supplier commitments, lead-time changes and unresolved dependency risks." },
      { role: "Operations leader", need: "Understand service exposure and where intervention is needed across the network." }
    ],
    workflow: [
      { title: "Connect the network", detail: "Model suppliers, facilities, lanes, inventory points, orders, shipments and customer commitments." },
      { title: "Track milestones", detail: "Normalise status events from purchase orders, warehouse systems, carriers and manual updates." },
      { title: "Detect an exception", detail: "Identify a late milestone, inventory shortfall or supplier change and link it to impacted orders." },
      { title: "Coordinate a response", detail: "Assign an owner, record supplier or carrier updates, compare alternatives and document the chosen action." },
      { title: "Learn across the network", detail: "Review recurring lanes, suppliers and failure modes to improve planning assumptions and escalation rules." }
    ],
    decisions: [
      { title: "Exception-first navigation", rationale: "Operators need to know what changed and what it affects before exploring the full network.", tradeoff: "A queue-centric entry point must still let planners inspect broader network context." },
      { title: "One event, many impacts", rationale: "A late shipment should connect to all orders, facilities and commitments it may affect.", tradeoff: "Impact calculations require reliable entity relationships and source freshness." },
      { title: "Show provenance and freshness", rationale: "An ETA from a carrier feed is different from a manually estimated arrival.", tradeoff: "Source metadata adds density, so use clear badges and detail-on-demand." },
      { title: "Coordinate decisions in the record", rationale: "A shared exception case prevents decisions from disappearing into disconnected email threads.", tradeoff: "Teams need lightweight updates and integrations to avoid creating another data-entry burden." }
    ],
    architecture: [
      { layer: "Source integration", detail: "ERP, WMS, TMS, supplier portals, carrier events and manual milestone updates." },
      { layer: "Network model", detail: "Orders, items, facilities, suppliers, inventory, shipments, lanes and commitments." },
      { layer: "Exception intelligence", detail: "Event normalisation, milestone deviation, downstream impact and priority rules." },
      { layer: "Collaboration layer", detail: "Ownership, response plans, notes, supplier communication and resolution history." }
    ],
    signals: [
      { name: "Exception lead time", method: "Measure time between the first detectable signal and the first actionable alert." },
      { name: "Impact visibility", method: "Check whether reviewers can identify affected orders and commitments from an exception." },
      { name: "Resolution cycle", method: "Track assignment, first action, resolution and recurrence by exception category." },
      { name: "Source coverage", method: "Measure the freshness and completeness of key milestone feeds by partner and lane." }
    ],
    guardrail: "The visual uses illustrative logistics records. A real control tower needs agreed data contracts, entity matching, source freshness rules and clear ownership of operational decisions.",
    nextStep: "Validate one inbound delay scenario from supplier notice through impacted order identification and resolution handoff with a planner and logistics coordinator."
  },
  "automation-studio": {
    chapter: "Automation that people can inspect before it runs",
    thesis: "Make business logic visual, testable and recoverable so teams can automate repeatable work without losing control of exceptions.",
    context: "No-code tools lower the barrier to automation, but visual flows can become fragile when errors, retries, credentials and ownership are hidden. This concept treats a workflow as an operational asset with a readable graph, test data, validation and a clear run history.",
    users: [
      { role: "Business operations owner", need: "Automate repetitive handoffs without depending on custom code for every change." },
      { role: "Workflow builder", need: "Connect triggers, conditions and actions while understanding inputs and outputs." },
      { role: "IT administrator", need: "Control connectors, credentials, access, usage and failure behaviour." },
      { role: "Process approver", need: "Review what an automation will do and approve sensitive actions before activation." }
    ],
    workflow: [
      { title: "Start from a trigger", detail: "Choose an event such as a form submission, record update or scheduled check and define the required input." },
      { title: "Build the logic", detail: "Connect actions, conditions, branches and transformations with typed inputs and visible dependencies." },
      { title: "Test with sample data", detail: "Run a dry-run, inspect each node's input and output, and evaluate both success and failure paths." },
      { title: "Publish with controls", detail: "Set owner, environment, connector permissions, approval requirements and activation schedule." },
      { title: "Operate and improve", detail: "Inspect run history, retry safe steps, pause a failing flow and review changes before republishing." }
    ],
    decisions: [
      { title: "Readable graph over hidden logic", rationale: "Every branch and action should be understandable to the person responsible for the process.", tradeoff: "Complex expressions need an advanced panel without overwhelming the canvas." },
      { title: "Dry-run before activation", rationale: "Users should see what a workflow would do with sample inputs before it can affect real records.", tradeoff: "Simulation needs realistic connector contracts and clearly labelled test environments." },
      { title: "Typed inputs and outputs", rationale: "Many workflow failures come from mismatched data shapes and missing fields.", tradeoff: "Schemas add learning effort but make errors more actionable." },
      { title: "Ownership follows the workflow", rationale: "A published automation needs an accountable owner and a defined support path.", tradeoff: "Ownership governance can feel bureaucratic unless reassignment and alerts are simple." }
    ],
    architecture: [
      { layer: "Canvas model", detail: "Nodes, edges, conditions, schema definitions and versioned workflow configuration." },
      { layer: "Connector runtime", detail: "Credential vault, API adapters, rate limits, retries and connector health." },
      { layer: "Execution engine", detail: "Queue, scheduler, state store, idempotency, failure handling and run tracing." },
      { layer: "Governance", detail: "Workspace roles, approvals, environment separation, audit log and usage controls." }
    ],
    signals: [
      { name: "First successful dry-run", method: "Observe whether a new builder can create, test and understand a simple workflow." },
      { name: "Failure recovery", method: "Test timeouts, invalid inputs, expired credentials and safe retry without duplicate actions." },
      { name: "Workflow ownership", method: "Track active flows with a named owner, review date and documented purpose." },
      { name: "Manual work removed", method: "Baseline the process before launch and compare effort after a controlled pilot." }
    ],
    guardrail: "This is an independent workflow-builder concept. It does not execute real integrations. Production automation needs secrets isolation, least privilege, idempotency, audit logs and a safe pause or rollback mechanism.",
    nextStep: "Build one end-to-end sample flow with branching, validation, a failed connector and a human approval node, then test whether a non-developer can debug it."
  },
  "bi-command-center": {
    chapter: "Metrics that lead to a decision",
    thesis: "Give leaders a consistent view of performance, but make every metric explainable, comparable and connected to an operational question.",
    context: "Executive dashboards often look polished while hiding inconsistent metric definitions, stale data and unclear ownership. A command centre should help leaders understand what changed, why it may have changed and where to investigate. The concept prioritises metric governance and narrative context as much as charts.",
    users: [
      { role: "Executive leader", need: "See a concise view of performance and understand the few changes that require a decision." },
      { role: "Functional leader", need: "Drill from a business-level signal into the operational drivers owned by the team." },
      { role: "Analyst", need: "Maintain definitions, source lineage, refresh status and consistent comparisons." },
      { role: "Data steward", need: "Monitor quality, access and the trustworthiness of the reporting pipeline." }
    ],
    workflow: [
      { title: "Define the metric contract", detail: "Specify formula, owner, source, refresh cadence, grain, exclusions and intended use for each KPI." },
      { title: "Build the executive view", detail: "Group leading and lagging indicators around strategic questions rather than department silos." },
      { title: "Explain a change", detail: "Compare against an appropriate period or target and expose the dimensions contributing to movement." },
      { title: "Drill into the driver", detail: "Move from KPI to segment, product, region or operational event while preserving filter context." },
      { title: "Capture the decision", detail: "Record the interpretation, owner and follow-up action so the dashboard supports operating rhythm." }
    ],
    decisions: [
      { title: "Metric definition travels with the chart", rationale: "A number without a formula, time window or owner invites false comparison.", tradeoff: "Definition metadata takes space, so keep it one click away and consistent." },
      { title: "Show trend before decoration", rationale: "A clear trend and comparison often communicate more than multiple chart types.", tradeoff: "Some nuanced distributions require drill-down rather than fitting everything on the first screen." },
      { title: "Separate leading and lagging indicators", rationale: "Outcome measures explain what happened; leading signals can inform what to do next.", tradeoff: "Leading indicators may be proxies and must be labelled with their limitations." },
      { title: "Treat stale data as a product state", rationale: "A delayed refresh should never look like a live operational truth.", tradeoff: "Freshness warnings can reduce perceived polish but materially increase trust." }
    ],
    architecture: [
      { layer: "Source systems", detail: "Business applications, finance, CRM, support and operational databases." },
      { layer: "Semantic model", detail: "Metric definitions, dimensions, calculation logic, ownership and access policy." },
      { layer: "Data quality & refresh", detail: "Scheduled pipelines, lineage, freshness, validation and issue reporting." },
      { layer: "Decision interface", detail: "Executive overview, contextual drill-down, annotations, saved views and action notes." }
    ],
    signals: [
      { name: "Metric comprehension", method: "Ask leaders to explain what a KPI means, its comparison basis and its owner." },
      { name: "Data freshness", method: "Monitor refresh success and display the age of the underlying source." },
      { name: "Decision follow-through", method: "Review whether dashboard insights result in a named owner and recorded action." },
      { name: "Definition consistency", method: "Audit whether teams use the same formula and time grain for shared KPIs." }
    ],
    guardrail: "All data and visual trends in this concept are illustrative. Real executive reporting needs reconciled source systems, agreed metric definitions, access controls and explicit freshness indicators.",
    nextStep: "Choose a small set of cross-functional KPIs, document their metric contracts and test whether leaders can move from a top-level change to a defensible next action."
  },
  "talent-intelligence": {
    chapter: "Hiring operations with structure and human judgement",
    thesis: "Give hiring teams a consistent process and clear candidate context without turning AI into an unaccountable hiring decision-maker.",
    context: "Recruitment is a coordination problem as much as a sourcing problem. Candidate details, interview feedback, scheduling and approvals often sit across inboxes and spreadsheets. This concept creates a shared hiring workspace that supports consistent evaluation while keeping people responsible for every consequential decision.",
    users: [
      { role: "Recruiter", need: "Manage candidate stages, scheduling, communication and missing information." },
      { role: "Hiring manager", need: "Compare candidates against role requirements using structured evidence and interview feedback." },
      { role: "Interviewer", need: "Submit focused, role-relevant feedback without seeing unrelated or inappropriate information." },
      { role: "People operations", need: "Maintain process consistency, privacy, approvals and recruitment reporting." }
    ],
    workflow: [
      { title: "Create a role scorecard", detail: "Define responsibilities, essential skills, evidence expectations and interview stages before reviewing applicants." },
      { title: "Organise the candidate", detail: "Track application status, communication, consent, source and role-specific documents in one record." },
      { title: "Coordinate interviews", detail: "Match availability, assign interviewers and provide each participant with a structured evaluation guide." },
      { title: "Compare evidence", detail: "Review role-related feedback side by side, flag missing evaluations and surface areas requiring further discussion." },
      { title: "Complete a governed decision", detail: "Record the accountable decision, approvals, candidate communication and retention action." }
    ],
    decisions: [
      { title: "Role criteria before candidate scoring", rationale: "A structured scorecard reduces arbitrary comparison and shifting expectations.", tradeoff: "Role design takes more upfront effort but improves interview consistency." },
      { title: "Separate evidence from recommendation", rationale: "A summary can help organise information, but it should not become an automated ranking that determines hiring.", tradeoff: "Human review takes time, yet preserves accountability and context." },
      { title: "Blind where it is appropriate", rationale: "Reduce exposure to irrelevant personal information during early review where the process allows.", tradeoff: "Some context is legitimately required later and needs controlled access." },
      { title: "Feedback tied to competencies", rationale: "Interview notes should describe observed evidence against role requirements.", tradeoff: "Structured feedback can feel repetitive, so use concise prompts and examples." }
    ],
    architecture: [
      { layer: "Role & requisition", detail: "Job definition, approval, scorecard, interview plan and hiring team." },
      { layer: "Candidate workflow", detail: "Application record, consent, stage, communications, documents and scheduling." },
      { layer: "Evaluation workspace", detail: "Competency feedback, evidence summaries, interviewer access and decision record." },
      { layer: "Privacy & governance", detail: "Retention, access scopes, audit, consent handling and reporting controls." }
    ],
    signals: [
      { name: "Stage ageing", method: "Track time in each stage and identify avoidable scheduling or approval delays." },
      { name: "Feedback completeness", method: "Measure whether interviewers submit role-related feedback before a decision meeting." },
      { name: "Process consistency", method: "Audit whether candidates for the same role receive comparable evaluation stages and criteria." },
      { name: "Candidate experience", method: "Collect feedback on clarity, communication cadence and scheduling friction." }
    ],
    guardrail: "This is a concept using synthetic candidate records. It does not rank real people or make hiring decisions. Any AI-assisted features need bias review, explainability, privacy controls and meaningful human oversight.",
    nextStep: "Test the scorecard and interview-feedback workflow with recruiters and hiring managers, then evaluate consistency and candidate experience before adding any AI assistance."
  },
  "security-operations": {
    chapter: "Turn alert volume into incident response clarity",
    thesis: "Help security teams separate signal from noise, preserve investigation context and coordinate response through a controlled incident lifecycle.",
    context: "Security operations teams face an expanding stream of events from endpoints, identity, cloud and network systems. The difficult work is not merely seeing an alert; it is understanding whether events are related, deciding who owns the investigation and ensuring response actions are approved and recorded. This concept centres on triage and incident coordination.",
    users: [
      { role: "SOC analyst", need: "Triage incoming alerts, inspect evidence and determine whether an incident should be opened." },
      { role: "Incident commander", need: "Coordinate owners, response steps, communications and escalation during an active incident." },
      { role: "Security engineer", need: "Understand affected assets, containment options and remediation dependencies." },
      { role: "Risk or compliance lead", need: "Review timelines, approvals, evidence handling and post-incident actions." }
    ],
    workflow: [
      { title: "Ingest and normalise", detail: "Bring event metadata into a common structure with source, timestamp, asset and identity context." },
      { title: "Triage the alert", detail: "Inspect severity rationale, related events, asset criticality and available evidence before creating an incident." },
      { title: "Establish ownership", detail: "Assign an incident lead, affected service, severity, response team and communication channel." },
      { title: "Execute the playbook", detail: "Track containment, investigation, eradication and recovery tasks with explicit approvals for high-impact actions." },
      { title: "Close and learn", detail: "Preserve the timeline, capture root-cause hypotheses, assign remediation and review recurring detection gaps." }
    ],
    decisions: [
      { title: "Alert is not an incident", rationale: "A signal needs investigation before it becomes an incident with response consequences.", tradeoff: "A distinct triage stage adds work but reduces premature escalation." },
      { title: "Timeline is the shared narrative", rationale: "Every event, decision and action should be visible in chronological context.", tradeoff: "Timelines can become noisy and need filters and event grouping." },
      { title: "Playbooks include approvals", rationale: "Containment actions can disrupt business services and require the right authority.", tradeoff: "Approval can slow response, so policies should pre-authorise only well-understood low-risk actions." },
      { title: "Evidence handling is designed in", rationale: "Investigators need provenance and integrity when reviewing and sharing evidence.", tradeoff: "Evidence controls add workflow complexity but protect the investigation record." }
    ],
    architecture: [
      { layer: "Telemetry sources", detail: "Endpoint, identity, cloud, network and application security events." },
      { layer: "Correlation layer", detail: "Normalisation, entity resolution, enrichment and related-event grouping." },
      { layer: "Incident workflow", detail: "Triage queue, incident record, assignment, playbooks, approvals and communications." },
      { layer: "Assurance", detail: "Evidence provenance, audit events, access control, retention and post-incident review." }
    ],
    signals: [
      { name: "Time to triage", method: "Measure time from alert creation to first qualified analyst disposition." },
      { name: "Incident ownership", method: "Track incidents without a named owner or overdue response task." },
      { name: "Playbook adherence", method: "Review completion and exception reasons for required response steps." },
      { name: "Repeat incident patterns", method: "Group recurring causes and track whether remediation reduces reoccurrence." }
    ],
    guardrail: "The platform is a concept with simulated security events, not a live monitoring or threat-detection service. Production use requires secure integrations, tested playbooks, evidence controls and expert security operations ownership.",
    nextStep: "Simulate an identity compromise from initial alert through triage, containment approval and post-incident review to test the full handoff model."
  },
  "smart-city-digital-twin": {
    chapter: "A spatial interface for connected city operations",
    thesis: "Give city operators a shared spatial context for infrastructure signals, while making the limits and freshness of every data layer visible.",
    context: "City services are interconnected, but their operational data is often divided by department and vendor. A traffic disruption can affect public transport, emergency access and local services. A digital twin interface should make those relationships explorable without suggesting that a static map is a complete real-time replica of a city.",
    users: [
      { role: "City operations coordinator", need: "Understand service conditions across districts and identify where multiple issues overlap." },
      { role: "Infrastructure manager", need: "Inspect the status and maintenance context of assets under their ownership." },
      { role: "Transport planner", need: "Explore mobility patterns and the possible impact of network disruptions." },
      { role: "Public-sector data steward", need: "Manage data sources, access, quality, freshness and appropriate public disclosure." }
    ],
    workflow: [
      { title: "Choose an operating area", detail: "Navigate districts, service zones and infrastructure layers with a clear geographic hierarchy." },
      { title: "Toggle data layers", detail: "Explore transport, utilities, public facilities, environmental signals and asset status independently." },
      { title: "Inspect an event", detail: "Open a map feature to see its owner, source, timestamp, current status and related assets." },
      { title: "Explore dependencies", detail: "Show nearby services and potential downstream effects as relationships to investigate, not automatic causal conclusions." },
      { title: "Coordinate follow-up", detail: "Create an issue, assign it to the responsible team and preserve the spatial context for response." }
    ],
    decisions: [
      { title: "Layer control over map overload", rationale: "Operators should choose which systems are relevant to the current task.", tradeoff: "Layer management adds interaction but reduces visual confusion." },
      { title: "Freshness displayed on the feature", rationale: "Different city systems update at different rates and should not look equally current.", tradeoff: "Visible timestamps add complexity but prevent false real-time assumptions." },
      { title: "Relationships, not unsupported causality", rationale: "Spatial proximity can suggest a dependency to review, not prove an operational cause.", tradeoff: "The UI must use careful language and avoid overconfident recommendations." },
      { title: "District-to-asset progressive disclosure", rationale: "Start with a city overview and reveal asset detail only when needed.", tradeoff: "Deep hierarchies need strong search and a persistent sense of location." }
    ],
    architecture: [
      { layer: "Geospatial foundation", detail: "Coordinate systems, boundaries, map tiles, feature layers and asset identifiers." },
      { layer: "Data connectors", detail: "Transport, utility, environment and public-facility feeds with metadata and freshness." },
      { layer: "Operational model", detail: "Assets, owners, service zones, events, relationships and issue records." },
      { layer: "Spatial experience", detail: "Layer controls, search, feature details, event overlays and role-based views." }
    ],
    signals: [
      { name: "Layer comprehension", method: "Test whether operators can identify the source, owner and update time of a selected layer." },
      { name: "Issue localisation", method: "Measure how quickly users can locate an affected asset and its responsible team." },
      { name: "Data freshness", method: "Monitor update lag and missing-feed rates per source rather than using one global status." },
      { name: "Cross-team resolution", method: "Track ownership handoffs and time to resolve spatially related issues." }
    ],
    guardrail: "The map and signals in this concept are illustrative. It is not connected to live municipal infrastructure. Any deployment needs verified geospatial data, source agreements, cybersecurity controls and clear public-disclosure rules.",
    nextStep: "Prototype one district with two connected service layers and a single disruption scenario, then validate the map-to-issue handoff with city operations users."
  },
  "personal-finance-advisor": {
    chapter: "A calmer way to understand personal cash flow",
    thesis: "Help people see where their money is going and explore trade-offs without judgement, opaque predictions or risky financial automation.",
    context: "Personal finance products often overwhelm users with charts or push generic advice that ignores timing and individual goals. A useful advisor starts with a trustworthy cash-flow picture, explains categorisation and lets someone test a decision before committing to it. This concept is a planning companion, not an investment or lending recommendation engine.",
    users: [
      { role: "Early-career professional", need: "Understand recurring costs, build a buffer and plan for near-term goals." },
      { role: "Household planner", need: "See shared commitments, upcoming expenses and trade-offs between goals." },
      { role: "Self-employed user", need: "Plan around irregular income, tax reserves and variable monthly cash flow." },
      { role: "Privacy-conscious user", need: "Understand what data is used and retain control over financial connections and exports." }
    ],
    workflow: [
      { title: "Establish a baseline", detail: "Add or import transactions, review categorisation and separate recurring commitments from variable spending." },
      { title: "Understand cash flow", detail: "See income timing, fixed obligations, flexible categories and upcoming bills in one monthly view." },
      { title: "Set a meaningful goal", detail: "Define a target, horizon and contribution that fits the user's current cash-flow reality." },
      { title: "Explore a scenario", detail: "Adjust a contribution or planned expense and see the effect on projected monthly buffer and goal progress." },
      { title: "Review without judgement", detail: "Offer a calm check-in, explain the assumptions and let the user revise categories, goals or reminders." }
    ],
    decisions: [
      { title: "Cash flow before net worth", rationale: "Near-term decisions depend on timing and available cash, not just a total balance.", tradeoff: "Long-term asset views remain useful but should not dominate the first experience." },
      { title: "Explain every categorisation", rationale: "Users should be able to correct a mistaken transaction label and understand recurring rules.", tradeoff: "Editable categorisation requires a simple learning loop and a clear audit of changes." },
      { title: "Scenarios instead of prescriptions", rationale: "A user can explore trade-offs without the interface implying one universally correct choice.", tradeoff: "Scenario outputs need assumptions and uncertainty labels, not false precision." },
      { title: "Privacy visible at the point of connection", rationale: "Financial data is highly sensitive and consent should be clear before account linking or upload.", tradeoff: "A more explicit consent step adds friction but is essential for informed use." }
    ],
    architecture: [
      { layer: "Data input", detail: "Manual entry or consented account data with clear source, timestamp and import controls." },
      { layer: "Financial model", detail: "Transactions, categories, recurring commitments, income timing and user-defined goals." },
      { layer: "Scenario engine", detail: "Transparent arithmetic projections with assumptions, ranges and editable inputs." },
      { layer: "Personal workspace", detail: "Cash-flow timeline, budget review, goal planning, reminders, export and privacy controls." }
    ],
    signals: [
      { name: "Categorisation confidence", method: "Track how often users accept, correct or manually classify suggested categories." },
      { name: "Goal plan usability", method: "Test whether users can set a realistic goal and explain its contribution assumptions." },
      { name: "Scenario comprehension", method: "Ask users to describe what changed and what assumptions drive the projection." },
      { name: "User control", method: "Measure completion of data export, connection revocation and deletion flows in usability tests." }
    ],
    guardrail: "This concept uses synthetic financial data and is not financial advice. Any real product needs strong privacy and security controls, transparent assumptions and appropriate regulatory review before connecting financial accounts or offering recommendations.",
    nextStep: "Test the cash-flow and goal-scenario journey with synthetic profiles representing fixed salary, irregular income and shared household costs before adding account connectivity."
  }
};
