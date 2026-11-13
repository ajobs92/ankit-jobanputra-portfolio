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
    number: "02", slug: "servertra-funding-platform", title: "Government Funding Platform",
    category: "GovTech / Business Advisory", discipline: ["GovTech", "SaaS & Enterprise"],
    status: "In progress", summary: "A discovery and eligibility experience for businesses navigating central and state support schemes.",
    problem: "Business owners face fragmented scheme information, complex eligibility rules and unclear documentation requirements.",
    solution: "A guided discovery platform combining scheme exploration, structured eligibility questions and application preparation.",
    capabilities: ["Central and state scheme discovery", "State-led navigation", "Eligibility calculator concept", "Document checklist", "Scheme and application workflows"],
    role: "Product concept, business workflows, website strategy and prototyping",
    evidenceNote: "Based on Servertra product and website work. Live government data integrations and scheme accuracy must be validated before claiming production capability.",
    accent: "#B9D7C6", visual: "civic"
  },
  {
    number: "03", slug: "education-360", title: "Education 360",
    category: "EdTech", discipline: ["SaaS & Enterprise", "Operations"],
    status: "In progress", summary: "A multi-stakeholder education management ecosystem for learners, educators and institutions.",
    problem: "Education operations can become fragmented across student records, attendance, learning activity and institutional reporting.",
    solution: "A connected workspace that makes key education journeys and institutional information easier to coordinate.",
    capabilities: ["Student and educator workspaces", "Attendance and learning workflows", "Institution administration", "Progress analytics", "Parent communication concepts"],
    role: "Product planning and cross-functional delivery",
    evidenceNote: "Product initiative previously discussed. Feature implementation and launch status to be confirmed.",
    accent: "#A9C9FF", visual: "education"
  },
  {
    number: "04", slug: "mobility-ai", title: "Mobility AI",
    category: "Mobility / AI", discipline: ["AI & ML", "Operations"],
    status: "In progress", summary: "An intelligent operations concept for fleet visibility, routing and mobility performance.",
    problem: "Fleet operators need a coherent view of vehicles, routes, maintenance signals and service performance.",
    solution: "A mobility operations workspace that brings fleet activity and operational decisions into one view.",
    capabilities: ["Fleet overview", "Vehicle and route visibility", "Maintenance signals", "Driver operations", "Performance analytics"],
    role: "Product planning and delivery coordination",
    evidenceNote: "Product initiative previously discussed. Scope, technical implementation and outcomes require confirmation.",
    accent: "#F4B183", visual: "mobility"
  },
  {
    number: "05", slug: "digital-government-transformation", title: "Digital Government Transformation",
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
    number: "06", slug: "rfp-intelligence", title: "AI-Powered RFP Intelligence",
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
    number: "07", slug: "agent-orchestration", title: "Autonomous AI Agent Orchestration",
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
    number: "08", slug: "revenue-intelligence-crm", title: "Revenue Intelligence CRM",
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
    number: "09", slug: "healthcare-operations", title: "Healthcare Operations Intelligence",
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
    number: "10", slug: "fraud-risk-engine", title: "Fraud Detection & Risk Engine",
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
    number: "11", slug: "enterprise-support-copilot", title: "Enterprise AI Support Copilot",
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
    number: "12", slug: "supply-chain-control-tower", title: "Supply Chain Control Tower",
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
    number: "13", slug: "automation-studio", title: "No-Code Automation Studio",
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
    number: "14", slug: "bi-command-center", title: "Business Intelligence Command Center",
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
    number: "15", slug: "talent-intelligence", title: "AI Recruitment & Talent Intelligence",
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
    number: "16", slug: "security-operations", title: "Cybersecurity Operations Platform",
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
    number: "17", slug: "smart-city-digital-twin", title: "Smart City Digital Twin",
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
    number: "18", slug: "personal-finance-advisor", title: "AI Personal Finance Advisor",
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
