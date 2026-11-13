import type { Metadata } from "next";
import { WorkBrowser } from "@/components/work-browser";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Product case studies spanning AI, enterprise SaaS, GovTech, finance and operational systems."
};

const active = projects.filter(project => project.status === "In progress" || project.status === "Live website").length;
const concepts = projects.filter(project => project.status === "Concept").length;
const professional = projects.filter(project => project.status === "Professional case study").length;

export default function WorkPage() {
  return <div className="container-shell py-16 md:py-24">
    <p className="eyebrow">A PORTFOLIO OF PRODUCT THINKING & EXECUTION</p>
    <h1 className="display-title mt-6 max-w-5xl">Selected <span className="text-[#c4f36a]">work.</span></h1>
    <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <p className="max-w-2xl text-base leading-8 text-white/50">A collection of business systems, AI-enabled workflows and public-service experiences. Open a project to explore the product thesis, user journey, design trade-offs, system boundaries and how success should be validated.</p>
      <p className="font-mono text-[9px] uppercase tracking-[.16em] text-white/35">Strategy / UX / Systems / Delivery</p>
    </div>
    <div className="mt-12 grid grid-cols-3 border-y border-white/10 py-5">
      <div className="pr-3"><p className="font-serif text-3xl tracking-tight text-white md:text-4xl">{projects.length.toString().padStart(2,"0")}</p><p className="mt-1 text-[9px] uppercase tracking-[.14em] text-white/35">Registered projects</p></div>
      <div className="border-l border-white/10 px-4"><p className="font-serif text-3xl tracking-tight text-white md:text-4xl">{active.toString().padStart(2,"0")}</p><p className="mt-1 text-[9px] uppercase tracking-[.14em] text-white/35">Live / in progress</p></div>
      <div className="border-l border-white/10 pl-4"><p className="font-serif text-3xl tracking-tight text-white md:text-4xl">{(concepts + professional).toString().padStart(2,"0")}</p><p className="mt-1 text-[9px] uppercase tracking-[.14em] text-white/35">Concept / case study</p></div>
    </div>
    <div className="mt-12"><WorkBrowser/></div>
    <p className="mt-10 max-w-3xl text-[10px] leading-6 text-white/30">Project status is labelled transparently. Exploratory interfaces use sample data and are not presented as production software. Professional case studies avoid disclosing client-sensitive material.</p>
  </div>;
}
