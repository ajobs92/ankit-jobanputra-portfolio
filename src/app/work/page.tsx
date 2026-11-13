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
    <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_.8fr] md:items-end md:pb-14">
      <div><p className="eyebrow">WORK / PRODUCT & DELIVERY</p><h1 className="display-title mt-6 max-w-5xl">Selected <span className="text-[#d3bd91]">work.</span></h1></div>
      <p className="max-w-xl text-sm leading-7 text-white/50">A curated view of business systems, AI-enabled workflows and digital service experiences. Each case study explains the problem, product direction, key decisions and what should be validated next.</p>
    </div>
    <div className="grid grid-cols-3 border-b border-white/10 py-7">
      <div className="pr-3"><p className="font-serif text-4xl tracking-tight text-white md:text-5xl">{projects.length.toString().padStart(2,"0")}</p><p className="mt-2 text-[8px] uppercase tracking-[.15em] text-white/35 md:text-[9px]">Selected projects</p></div>
      <div className="border-l border-white/10 px-4"><p className="font-serif text-4xl tracking-tight text-white md:text-5xl">{active.toString().padStart(2,"0")}</p><p className="mt-2 text-[8px] uppercase tracking-[.15em] text-white/35 md:text-[9px]">Live / in progress</p></div>
      <div className="border-l border-white/10 pl-4"><p className="font-serif text-4xl tracking-tight text-white md:text-5xl">{(concepts + professional).toString().padStart(2,"0")}</p><p className="mt-2 text-[8px] uppercase tracking-[.15em] text-white/35 md:text-[9px]">Concept / case study</p></div>
    </div>
    <div className="mt-12"><WorkBrowser/></div>
    <p className="mt-10 max-w-3xl text-[10px] leading-6 text-white/30">Project status is labelled transparently. Exploratory interfaces use sample data and are not presented as production software. Professional case studies avoid disclosing client-sensitive material.</p>
  </div>;
}
