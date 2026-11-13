import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Experience" };

const items = [
  { role: "Project Manager", company: "Xduce", description: "Project and delivery coordination across digital products, public-sector websites and design initiatives. Work includes cross-functional collaboration, stakeholder alignment, delivery planning and RFP workflows.", focus: ["Delivery planning","Stakeholder alignment","Public-sector digital projects","RFP coordination"] },
  { role: "Scrum Master / Product Owner", company: "Designing Alley", description: "Agile delivery and product ownership responsibilities, including sprint coordination, backlog thinking, workflow clarity and team collaboration.", focus: ["Sprint facilitation","Backlog ownership","Cross-functional delivery","Process improvement"] }
];

export default function ExperiencePage() {
  return <div className="container-shell py-20 md:py-28">
    <p className="eyebrow">EXPERIENCE / CAPABILITIES</p>
    <h1 className="display-title mt-6 max-w-5xl">Built around <span className="text-[#d3bd91]">delivery.</span></h1>
    <p className="mt-8 max-w-2xl text-base leading-8 text-white/50">A practical view of the roles and responsibilities behind my product work. The emphasis is on turning complex requirements into coordinated, well-executed delivery.</p>
    <div className="mt-16">
      {items.map((item,i)=><article key={item.company} className="grid gap-8 border-t border-white/12 py-9 md:grid-cols-[190px_1fr]">
        <div><p className="font-mono text-[9px] tracking-[.15em] text-[#d3bd91]">0{i+1} / EXPERIENCE</p><p className="mt-3 text-sm text-white/50">{item.company}</p></div>
        <div>
          <h2 className="font-serif text-4xl tracking-[-.03em] text-[#f0ece2]">{item.role}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">{item.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">{item.focus.map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-2 text-[9px] text-white/45">{x}</span>)}</div>
        </div>
      </article>)}
    </div>
    <div className="mt-10 rounded-xl border border-white/10 bg-white/[.02] p-7">
      <p className="eyebrow">CORE CAPABILITIES</p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55">{["Product discovery","Business analysis","Product requirements","AI-assisted prototyping","Agile delivery","Stakeholder management","SaaS workflows","Technical coordination","RFP analysis","Process improvement"].map(x=><span key={x}>{x}</span>)}</div>
    </div>
    <p className="mt-8 text-xs leading-6 text-white/35">Dates, certifications and quantified outcomes are omitted here until they are validated against the current resume. <Link href="/contact" className="text-[#d3bd91]">Get in touch <ArrowUpRight className="inline" size={13}/></Link></p>
  </div>;
}
