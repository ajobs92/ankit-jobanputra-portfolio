import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Boxes, BrainCircuit, Compass, Workflow } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { ProjectCard } from "@/components/project-card";

const capabilities = [
  { icon: Compass, title: "Product discovery", text: "Get close to users, map the operating context and turn ambiguity into a focused product direction." },
  { icon: BrainCircuit, title: "AI product strategy", text: "Find the workflows where AI creates measurable value, with human review and clear guardrails." },
  { icon: Boxes, title: "Systems & integrations", text: "Connect product experiences to APIs, data, operational realities and the systems around them." },
  { icon: Workflow, title: "Delivery leadership", text: "Bring stakeholders and engineering together around scope, dependencies, quality and execution." }
];

const operatingLens = [
  { n: "01", label: "Understand the business", detail: "People, incentives, workflows and constraints.", tag: "CONTEXT" },
  { n: "02", label: "Shape product direction", detail: "The right problem, workflow, scope and experience.", tag: "STRATEGY" },
  { n: "03", label: "Make delivery real", detail: "Teams, integrations, risks and a practical path to launch.", tag: "EXECUTION" }
];

export default function Home() {
  const featured = projects.slice(0, 6);
  return <div className="overflow-hidden">
    <section className="hero-section relative isolate overflow-hidden border-b border-white/10">
      <div className="noise pointer-events-none absolute inset-0"/>
      <div className="pointer-events-none absolute -right-48 top-[-16rem] h-[38rem] w-[38rem] rounded-full border border-[#d3bd91]/10"/>
      <div className="pointer-events-none absolute -right-24 top-[-12rem] h-[30rem] w-[30rem] rounded-full border border-[#d3bd91]/[.07]"/>
      <div className="container-shell relative grid min-h-[720px] items-center gap-16 py-24 lg:grid-cols-[1.08fr_.92fr] lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#d3bd91] shadow-[0_0_14px_#d3bd9155]"/>
            <span className="eyebrow">{site.availability}</span>
            <span className="font-mono text-[9px] tracking-[.14em] text-white/30">INDIA / GLOBAL TEAMS</span>
          </div>
          <p className="eyebrow mb-6">FORWARD DEPLOYED PRODUCT MANAGER</p>
          <h1 className="display-title max-w-4xl">I make complex systems <em className="font-normal not-italic text-[#d3bd91]">work better.</em></h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/58 md:text-lg">{site.summary}</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/work" className="inline-flex items-center gap-3 rounded-full bg-[#d3bd91] px-6 py-4 text-[10px] font-semibold uppercase tracking-[.14em] text-[#151713] transition hover:bg-[#ead9b6]">View selected work <ArrowUpRight size={15}/></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.14em] text-white/60 transition hover:text-[#d3bd91]">Start a conversation <ArrowRight size={13}/></Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5">
            {["PRODUCT STRATEGY","AI-ENABLED WORKFLOWS","SYSTEMS THINKING","DELIVERY LEADERSHIP"].map(item=><span key={item} className="font-mono text-[8px] tracking-[.14em] text-white/35">{item}</span>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[510px]">
          <div className="absolute -inset-5 rounded-[24px] border border-[#d3bd91]/10"/>
          <div className="relative overflow-hidden rounded-[18px] border border-[#d3bd91]/20 bg-[linear-gradient(145deg,rgba(31,40,32,.96),rgba(17,22,18,.98))] p-6 shadow-[0_35px_100px_rgba(0,0,0,.35)] md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div><p className="eyebrow">THE OPERATING LENS</p><p className="mt-2 font-serif text-2xl text-[#f0ece2]">From context to execution</p></div>
              <span className="font-mono text-[9px] tracking-[.12em] text-white/30">01 — 03</span>
            </div>
            <div className="relative mt-5">
              <div className="absolute bottom-8 left-[17px] top-8 w-px bg-gradient-to-b from-[#d3bd91]/60 via-[#d3bd91]/25 to-transparent"/>
              <div className="space-y-2">
                {operatingLens.map((item)=><div key={item.n} className="relative flex gap-4 rounded-xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/[.025]">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d3bd91]/35 bg-[#171d18] font-mono text-[9px] text-[#d3bd91]">{item.n}</div>
                  <div className="min-w-0 flex-1 py-0.5">
                    <div className="flex flex-wrap items-center justify-between gap-2"><h2 className="text-sm font-semibold text-[#f0ece2]">{item.label}</h2><span className="font-mono text-[8px] tracking-[.12em] text-[#d3bd91]/70">{item.tag}</span></div>
                    <p className="mt-2 text-xs leading-6 text-white/45">{item.detail}</p>
                  </div>
                </div>)}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <span className="font-mono text-[8px] tracking-[.16em] text-white/35">DECISIONS / WORKFLOWS / OUTCOMES</span>
              <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[.12em] text-[#d3bd91]"><span className="h-1.5 w-1.5 rounded-full bg-[#d3bd91]"/> PRACTICAL BY DESIGN</span>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-7 hidden rounded-full border border-white/10 bg-[#121713] px-4 py-3 font-mono text-[8px] tracking-[.14em] text-white/45 sm:block">BUSINESS × PRODUCT × ENGINEERING</div>
        </div>
      </div>
      <div className="container-shell flex items-center justify-between border-t border-white/10 py-5">
        <span className="font-mono text-[9px] uppercase tracking-[.16em] text-white/35">A considered approach to product delivery</span>
        <a href="#selected-work" className="flex items-center gap-2 text-[9px] uppercase tracking-[.14em] text-white/45 transition hover:text-[#d3bd91]">Explore the work <ArrowDown size={13}/></a>
      </div>
    </section>
    <section className="container-shell py-24 md:py-32">
      <div className="grid gap-8 md:grid-cols-[.58fr_1.42fr]">
        <p className="eyebrow">01 / POINT OF VIEW</p>
        <div>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-[-.035em] md:text-6xl">Good product work starts with <span className="text-[#d3bd91]">context.</span></h2>
          <p className="mt-8 max-w-2xl text-sm leading-8 text-white/52">Understand how people work today. Make the constraints visible. Focus on the decision or workflow that matters most, then build a path from a validated idea to an implementation a team can own.</p>
        </div>
      </div>
    </section>
    <section id="selected-work" className="border-y border-white/10 bg-[#121713] py-24 md:py-28">
      <div className="container-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow">02 / SELECTED WORK</p><h2 className="section-title mt-4">A clear view of<br/>the work that matters.</h2></div>
          <div className="flex flex-wrap gap-5"><Link href="/work" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.13em] text-[#d3bd91]">View all {projects.length} projects <ArrowUpRight size={14}/></Link><Link href="/visuals" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.13em] text-white/50 transition hover:text-[#d3bd91]">Explore product gallery <ArrowUpRight size={14}/></Link></div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">{featured.map((project, i) => <ProjectCard key={project.slug} project={project} featured={i === 0}/>)}</div>
      </div>
    </section>
    <section className="container-shell py-24 md:py-32">
      <p className="eyebrow">03 / HOW I CREATE VALUE</p>
      <div className="mt-6 grid gap-10 md:grid-cols-[.72fr_1.28fr]">
        <h2 className="section-title">From ambiguity<br/>to <span className="accent-text">action.</span></h2>
        <div className="grid gap-0 sm:grid-cols-2">
          {capabilities.map((item) => <div key={item.title} className="grid-line py-7 sm:pr-8">
            <item.icon size={19} className="text-[#d3bd91]"/>
            <h3 className="mt-5 font-serif text-2xl tracking-[-.02em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/45">{item.text}</p>
          </div>)}
        </div>
      </div>
    </section>
    <section className="border-y border-white/10 bg-[#121713] py-24 md:py-28">
      <div className="container-shell">
        <p className="eyebrow">04 / A PRACTICAL METHOD</p>
        <h2 className="section-title mt-4 max-w-3xl">Make the problem clear.<br/><span className="text-white/40">Make the next step real.</span></h2>
        <div className="mt-14 grid gap-0 sm:grid-cols-3 lg:grid-cols-6">
          {["Discover","Define","Design","Prototype","Deliver","Iterate"].map((step,i)=><div key={step} className="border-t border-white/15 py-5 pr-4">
            <span className="font-mono text-[9px] text-[#d3bd91]">0{i+1}</span><p className="mt-3 font-serif text-2xl tracking-[-.02em]">{step}</p>
          </div>)}
        </div>
      </div>
    </section>
  </div>;
}
