import type { Metadata } from "next";
import { ArrowUpRight, Compass, Layers3, Workflow } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

const principles = [
  { icon: Compass, title: "Start with context", text: "Understand the people, operating model and constraints before committing to a solution." },
  { icon: Layers3, title: "Think in systems", text: "Connect the interface to data, processes, integrations, ownership and the realities of delivery." },
  { icon: Workflow, title: "Make progress visible", text: "Translate strategy into decisions, milestones and feedback loops that teams can act on." }
];

export default function AboutPage() {
  return <div className="container-shell py-20 md:py-28">
    <p className="eyebrow">ABOUT / THE PERSON BEHIND THE WORK</p>
    <h1 className="display-title mt-6 max-w-5xl">Curious about systems.<br/><span className="text-[#d3bd91]">Serious about outcomes.</span></h1>
    <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[.7fr_1.3fr]">
      <div className="relative flex min-h-[280px] items-end overflow-hidden rounded-2xl border border-[#d3bd91]/20 bg-[radial-gradient(ellipse_at_80%_15%,rgba(211,189,145,.16),transparent_42%),linear-gradient(145deg,#1c261f,#101511)] p-7">
        <div className="absolute right-8 top-8 h-36 w-36 rounded-full border border-[#d3bd91]/20"/>
        <div className="absolute right-14 top-14 h-24 w-24 rounded-full border border-[#d3bd91]/15"/>
        <div><p className="font-mono text-[9px] tracking-[.18em] text-[#d3bd91]">ANKIT JOBANPUTRA</p><p className="mt-3 font-serif text-3xl text-[#f0ece2]">Business × Product × Technology</p></div>
      </div>
      <div className="space-y-6 text-sm leading-8 text-white/55">
        <p>I am a product and project management professional focused on the space where business needs meet technology execution.</p>
        <p>I enjoy getting close to a problem, understanding the people and systems around it, and making a solution tangible through clear requirements, collaborative design and rapid prototyping.</p>
        <p>AI-assisted development has expanded how I explore product ideas. I use it to accelerate learning and prototyping while keeping product judgement, validation, security and engineering quality firmly in view.</p>
        <p>This portfolio distinguishes professional experience, active initiatives and independent concepts, with clear notes on what is implemented and what remains to be validated.</p>
        <Link href="/experience" className="inline-flex items-center gap-2 pt-2 text-[10px] uppercase tracking-[.13em] text-[#d3bd91]">Explore experience <ArrowUpRight size={14}/></Link>
      </div>
    </div>
    <div className="mt-20 grid gap-4 md:grid-cols-3">
      {principles.map((item,i)=><article key={item.title} className="rounded-xl border border-white/10 bg-white/[.018] p-6">
        <span className="font-mono text-[9px] text-[#d3bd91]">0{i+1}</span><item.icon className="mt-6 text-[#d3bd91]" size={19}/>
        <h2 className="mt-5 font-serif text-2xl text-[#f0ece2]">{item.title}</h2><p className="mt-3 text-xs leading-6 text-white/45">{item.text}</p>
      </article>)}
    </div>
  </div>;
}
