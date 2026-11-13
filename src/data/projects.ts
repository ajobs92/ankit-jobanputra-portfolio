import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    number: "01", slug: "enterprise-accounting-erp", title: "Enterprise Accounting & ERP",
    category: "FinTech / Enterprise SaaS", discipline: ["FinTech", "SaaS & Enterprise", "Operations"],
    status: "In progress", summary: "A connected accounting workspace for core finance operations, controls and reporting.",
    problem: "Growing businesses often manage finance across disconnected ledgers, invoices, inventory records and spreadsheets.",
    solution: "A modular accounting experience that connects financial records and operational workflows through a consistent system of record.",
    capabilities: ["General ledger & chart of accounts", "Payables, receivables & invoicing", "GST-oriented workflows", "Inventory and bank reconciliation", "Financial reports and audit trails"],
    role: "Product direction, workflow definition and AI-assisted prototyping",
    evidenceNote: "Based on an existing personal product initiative. Exact implemented modules and production status require verification.",
    accent: "#C4F36A", visual: "ledger"
  },
  {
    number: "02", slug: "servertra-funding-platform", title: "Servertra Business Growth Ecosystem",
    category: "Business Services / Digital Platform", discipline: ["SaaS & Enterprise", "GovTech", "Operations"],
    status: "Live website", summary: "A live business advisory and technology platform connecting business setup, compliance, government scheme discovery, eligibility guidance and digital solutions.",
    problem: "Indian founders and growing businesses face a fragmented journey across registrations, certifications, compliance, government support and technology needs. Finding the right service or scheme often means navigating multiple disconnected sources.",
    solution: "A unified digital front door that organises advisory services, central and state government scheme information, a preliminary eligibility journey and technology services around the needs of a growing business.",
    capabilities: ["Business setup, registrations and incorporation", "Compliance, certifications and advisory services", "Central and state government scheme discovery", "State-wise scheme exploration across 36 States and UTs", "Preliminary scheme eligibility checker", "IT solutions and digital transformation", "Structured enquiry and lead capture"],
    role: "Product strategy, information architecture, UX and website implementation",
    evidenceNote: "The supplied Servertra V11 deployment package contains the pre-rendered home, services, government-schemes, eligibility-checker, IT-solutions, about and contact pages, along with compiled assets and the lead enquiry endpoint. The homepage snapshot states 36 States and UTs, 18 schemes, 8 official sources and 6 service categories. The site presents scheme information for guidance; official authorities and lenders retain control over eligibility decisions and approvals. Live data refresh and government API integrations have not been independently verified.",
    accent: "#B9D7C6", visual: "servertra", liveUrl: "https://servertra.com"
  },
  {
    number: "03", slug: "digital-government-transformation", title: "Digital Government Transformation",
    category: "GovTech / Enterprise", discipline: ["GovTech", "SaaS & Enterprise"],
    status: "Professional case study", summary: "A public-sector digital delivery perspective focused on citizen-facing services and municipal web experiences.",
    problem: "Public institutions need accessible, maintainable digital experiences that align content, services and stakeholder needs.",
    solution: "A delivery approach connecting discovery, information architecture, content workflows, accessibility and launch readiness.",
    capabilities: ["Citizen-facing information architecture", "CMS and content migration", "Accessibility and QA", "Stakeholder coordination", "Launch planning"],
    role: "Project management and delivery coordination",
    evidenceNote: "Professional experience case study. Client names, deliverables, screenshots and precise personal contribution must be reviewed for confidentiality and accuracy.",
    accent: "#D6C8FF", visual: "civic"
  },
  {
    number: "04", slug: "rfp-intelligence", title: "AI-Powered RFP Intelligence",
    category: "AI / Procurement", discipline: ["AI & ML", "SaaS & Enterprise", "Operations"],
    status: "Concept", summary: "A procurement workspace that turns lengthy bid documents into structured requirements and action.",
    problem: "Teams spend significant time extracting deadlines, eligibility conditions, mandatory forms and submission requirements from RFP documents.",
    solution: "An assisted analysis workflow that organises extracted requirements into a reviewable compliance and bid-planning workspace.",
    capabilities: ["Document intake and extraction", "Deadline and milestone detection", "Eligibility review", "Compliance matrix", "Bid/no-bid decision support"],
    role: "Independent product concept based on procurement workflow knowledge",
    evidenceNote: "Independent concept. Extraction accuracy, legal interpretation and bid recommendations require human review.",
    accent: "#C4F36A", visual: "document"
  },
  {
    number: "05", slug: "agent-orchestration", title: "Autonomous AI Agent Orchestration",
    category: "Agentic AI", discipline: ["AI & ML", "SaaS & Enterprise"],
    status: "Concept", summary: "A control plane for coordinating specialised agents with observable, human-governed execution.",
    problem: "Multi-step AI workflows become difficult to trust when task ownership, tool access and failure recovery are opaque.",
    solution: "A visual orchestration layer with task states, agent roles, approval gates and execution history.",
    capabilities: ["Agent and task configuration", "Workflow orchestration", "Human approval gates", "Retry and failure states", "Execution audit trail"],
    role: "Independent product concept",
    evidenceNote: "Concept only. No autonomous production agents or external integrations are claimed.",
    accent: "#B7C5FF", visual: "agents"
  },
  {
    number: "06", slug: "revenue-intelligence-crm", title: "Revenue Intelligence CRM",
    category: "SalesTech", discipline: ["AI & ML", "SaaS & Enterprise", "Operations"],
    status: "Concept", summary: "A revenue workspace for lead prioritisation, opportunity context and sales execution.",
    problem: "Sales teams often lack a unified view of lead quality, next actions and forecast confidence.",
    solution: "A CRM concept that combines pipeline visibility with explainable prioritisation and suggested actions.",
    capabilities: ["Lead and account workspace", "Pipeline stages", "Explainable lead scoring", "Follow-up queue", "Forecast views"],
    role: "Independent product concept",
    evidenceNote: "Concept with simulated records and scoring. No live CRM integration is claimed.",
    accent: "#E9B6D1", visual: "crm"
  },
  {
    number: "07", slug: "healthcare-operations", title: "Healthcare Operations Intelligence",
    category: "HealthTech", discipline: ["AI & ML", "SaaS & Enterprise", "Operations"],
    status: "Concept", summary: "An operational coordination concept for appointments, capacity and administrative flow.",
    problem: "Operational teams need to coordinate schedules and resources while protecting sensitive patient information.",
    solution: "A privacy-conscious operations interface using synthetic data and clearly separated access roles.",
    capabilities: ["Appointment operations", "Capacity overview", "Resource scheduling", "Administrative analytics", "Role-aware access concepts"],
    role: "Independent product concept",
    evidenceNote: "Concept only. Uses synthetic data; not a clinical decision tool.",
    accent: "#9DDDD1", visual: "health"
  },
  {
    number: "08", slug: "fraud-risk-engine", title: "Fraud Detection & Risk Engine",
    category: "FinTech", discipline: ["AI & ML", "FinTech", "Operations"],
    status: "Concept", summary: "An investigation workspace for suspicious transaction patterns and risk review.",
    problem: "Risk teams need to prioritise alerts, inspect context and document decisions without treating model outputs as certainty.",
    solution: "A human-in-the-loop risk queue with explainable signals, case status and investigation notes.",
    capabilities: ["Transaction review queue", "Anomaly signal display", "Risk prioritisation", "Investigation workflow", "Decision audit trail"],
    role: "Independent product concept",
    evidenceNote: "Concept only. Any scores and transactions are illustrative, not a validated fraud model.",
    accent: "#F2A79B", visual: "risk"
  },
  {
    number: "09", slug: "enterprise-support-copilot", title: "Enterprise AI Support Copilot",
    category: "Generative AI", discipline: ["AI & ML", "SaaS & Enterprise"],
    status: "Concept", summary: "A support assistant concept grounded in enterprise knowledge with source-aware responses.",
    problem: "Support teams lose time searching fragmented documentation and repeating common answers.",
    solution: "A retrieval-based assistant experience that surfaces relevant sources and makes escalation explicit.",
    capabilities: ["Knowledge search", "Source-linked answers", "Conversation context", "Human escalation", "Feedback capture"],
    role: "Independent product concept",
    evidenceNote: "Concept only. No live LLM, vector database or knowledge-base integration is claimed.",
    accent: "#C4F36A", visual: "copilot"
  },
  {
    number: "10", slug: "supply-chain-control-tower", title: "Supply Chain Control Tower",
    category: "Logistics / SaaS", discipline: ["SaaS & Enterprise", "Operations"],
    status: "Concept", summary: "An operational view of shipments, inventory signals and supply-chain exceptions.",
    problem: "Distributed supply chain information makes it difficult to spot delays and coordinate response.",
    solution: "A control-tower interface that groups operational signals into actionable exception workflows.",
    capabilities: ["Shipment visibility", "Inventory signals", "Supplier status", "Exception management", "Delivery performance"],
    role: "Independent product concept",
    evidenceNote: "Concept using illustrative operational data. No live carrier or ERP integration is claimed.",
    accent: "#E7C77D", visual: "supply"
  },
  {
    number: "11", slug: "automation-studio", title: "No-Code Automation Studio",
    category: "Business Automation", discipline: ["AI & ML", "SaaS & Enterprise", "Operations"],
    status: "Concept", summary: "A visual workflow builder for connecting triggers, conditions and business actions.",
    problem: "Repeated administrative work is often trapped in manual handoffs and disconnected tools.",
    solution: "A node-based workflow canvas that makes automation logic visible and reviewable.",
    capabilities: ["Trigger and action nodes", "Conditional branches", "Workflow validation", "Execution history", "Approval steps"],
    role: "Independent product concept",
    evidenceNote: "Concept. Workflow execution and external integrations are not yet implemented.",
    accent: "#B7C5FF", visual: "workflow"
  },
  {
    number: "12", slug: "bi-command-center", title: "Business Intelligence Command Center",
    category: "Analytics", discipline: ["SaaS & Enterprise", "Operations"],
    status: "Concept", summary: "An executive view of business performance across revenue, operations and customer activity.",
    problem: "Leaders often receive metrics in disconnected reports with inconsistent definitions and timing.",
    solution: "A coherent dashboard concept with KPI definitions, trends and decision-focused context.",
    capabilities: ["Executive KPI overview", "Revenue and operations views", "Trend comparisons", "Metric definitions", "Reporting concepts"],
    role: "Independent product concept",
    evidenceNote: "Concept with illustrative data. Metrics do not represent a real company.",
    accent: "#A7D5B8", visual: "analytics"
  },
  {
    number: "13", slug: "talent-intelligence", title: "AI Recruitment & Talent Intelligence",
    category: "HRTech", discipline: ["AI & ML", "SaaS & Enterprise", "Operations"],
    status: "Concept", summary: "A recruiting operations concept for structured candidate review and hiring coordination.",
    problem: "Recruiting teams manage candidate information, feedback and scheduling across multiple tools.",
    solution: "A hiring workspace that organises pipeline stages and supports consistent, human-reviewed evaluation.",
    capabilities: ["Candidate pipeline", "Structured evaluation", "Interview coordination", "Hiring analytics", "Audit-friendly notes"],
    role: "Independent product concept",
    evidenceNote: "Concept only. No automated hiring decisions or live resume parsing are claimed.",
    accent: "#D7B9FF", visual: "talent"
  },
  {
    number: "14", slug: "security-operations", title: "Cybersecurity Operations Platform",
    category: "Cybersecurity", discipline: ["AI & ML", "SaaS & Enterprise", "Operations"],
    status: "Concept", summary: "A security operations workspace for alert triage, incident context and response coordination.",
    problem: "Security teams need to prioritise high-signal incidents and preserve context across investigation handoffs.",
    solution: "A structured incident queue with severity, ownership, timeline and response status.",
    capabilities: ["Alert triage", "Incident timeline", "Ownership and escalation", "Response checklist", "Audit history"],
    role: "Independent product concept",
    evidenceNote: "Concept with simulated events. No live security monitoring or threat detection is claimed.",
    accent: "#E6A5A5", visual: "security"
  },
  {
    number: "15", slug: "smart-city-digital-twin", title: "Smart City Digital Twin",
    category: "IoT / Smart Cities", discipline: ["SaaS & Enterprise", "Operations"],
    status: "Concept", summary: "A city systems visualisation concept connecting infrastructure signals to operational views.",
    problem: "City operations span many services, making it difficult to understand dependencies and changing conditions.",
    solution: "A spatial dashboard concept for exploring infrastructure layers and synthetic sensor readings.",
    capabilities: ["Map-based exploration", "Traffic and mobility layers", "Energy indicators", "Infrastructure status", "Environmental signals"],
    role: "Independent product concept",
    evidenceNote: "Concept only. Map and sensor information must be labelled illustrative unless connected to verified live sources.",
    accent: "#9BC9D9", visual: "city"
  },
  {
    number: "16", slug: "personal-finance-advisor", title: "AI Personal Finance Advisor",
    category: "Personal Finance", discipline: ["AI & ML", "FinTech"],
    status: "Concept", summary: "A personal finance planning interface for budgets, cash flow and scenario exploration.",
    problem: "People need a clearer view of spending patterns and trade-offs between day-to-day expenses and goals.",
    solution: "A planning interface that organises expenses and lets users explore illustrative financial scenarios.",
    capabilities: ["Expense categories", "Budget planning", "Goal tracking", "Cash-flow views", "Scenario modelling"],
    role: "Independent product concept",
    evidenceNote: "Concept with synthetic financial data. Not financial advice and not connected to bank accounts.",
    accent: "#C4F36A", visual: "finance"
  }
];

export const projectCategories = [
  "All", "AI & ML", "SaaS & Enterprise", "GovTech", "FinTech", "Operations"
];
