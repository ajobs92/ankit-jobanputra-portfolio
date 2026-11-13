export type ProjectStatus = "In progress" | "Live website" | "Professional case study" | "Concept";

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  discipline: string[];
  status: ProjectStatus;
  summary: string;
  problem: string;
  solution: string;
  capabilities: string[];
  role: string;
  evidenceNote: string;
  accent: string;
  visual: string;
  liveUrl?: string;
  prototypeUrl?: string;
};

export type ProjectFilter = "All" | "AI & ML" | "SaaS & Enterprise" | "GovTech" | "FinTech" | "Operations";
