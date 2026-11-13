import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Boxes, BrainCircuit, Compass, Workflow } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { ProjectCard } from "@/components/project-card";

const capabilities = [
  { icon: Compass, title: "Product discovery", text: "Frame ambiguous business challenges, map users and turn findings into clear product decisions." },
  { icon: BrainCircuit, title: "AI product thinking", text: "Identify where AI adds real value, design human oversight and prototype useful workflows." },
  { icon: Boxes, title: "Systems & integrations", text: "Work across product boundaries, APIs, operational data and the constraints of real systems." },
  { icon: Workflow, title: "Delivery leadership", text: "Translate strategy into requirements, milestones and coordinated execution with teams." }
];

export default function Home() {
  const featured = [projects[0], projects[1], projects[5], projects[6], projects[10], projects[12]];
  return <div>
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="noise pointer-events-none absolute inset-0"/>
      <div className="container-shell relative grid min-h-[680px] items-center gap-14 py-24 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#c4f36a] shadow-[0_0_12px_#c4f36a]"/>
            <span className="eyebrow">{site.availability}</span>
            <span className="font-mono text-[10px] text-white/30">/ INDIA · OPEN TO GLOBAL TEAMS</span>
          </div>
          <p className="eyebrow mb-6">FORWARD DEPLOYED PRODUCT MANAGER</p>
          <h1 className="display-title max-w-4xl">I turn complex business problems into <span className="text-[#c4f36a]">intelligent products.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/55 md:text-lg">{site.summary}</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/work" className="inline-flex items-center gap-3 rounded-full bg-[#c4f36a] px-6 py-4 text-xs font-semibold uppercase tracking-[.1em] text-[#111312] transition hover:bg-[#d8ff8c]">Explore selected work <ArrowUpRight size={16}/></Link>
            <Link href="/contact" className="text-xs uppercase tracking-[.1em] text-white/55 transition hover:text-white">Let's connect <ArrowRight size={14} className="ml-2 inline"/></Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[440px]">
          <div className="orbit-one absolute inset-[8%] rounded-full border border-white/10"/>
          <div className="orbit-two absolute inset-[18%] rounded-full border border-dashed border-[#c4f36a]/35"/>
          <div className="absolute inset-[30%] rounded-full border border-white/15"/>
          <div className="absolute inset-[39%] flex items-center justify-center rounded-full bg-[#c4f36a] text-center text-[#111312] shadow-[0_0_90px_#c4f36a22]">
            <div><span className="font-mono text-[9px] tracking-[.15em]">BUSINESS</span><div className="my-1 text-2xl font-medium tracking-[-.08em]">×</div><span className="font-mono text-[9px] tracking-[.15em]">PRODUCT</span></div>
          </div>
          {[
            {t:"DISCOVER",x:"top-[5%] left-1/2 -translate-x-1/2"},
            {t:"DEFINE",x:"right-[-1%] top-[35%]"},
            {t:"PROTOTYPE",x:"bottom-[10%] right-[4%]"},
            {t:"DELIVER",x:"bottom-[10%] left-[4%]"},
            {t:"LEARN",x:"left-[-1%] top-[35%]"}
          ].map(item => <div key={item.t} className={`absolute ${item.x} rounded-full border border-white/15 bg-[#191d1b] px-3 py-2 font-mono text-[9px] tracking-[.1em] text-white/75`}>{item.t}</div>)}
          <div className="absolute right-[10%] top-[14%] h-2 w-2 rounded-full bg-[#c4f36a]"/>
          <div className="absolute bottom-[18%] left-[14%] h-1.5 w-1.5 rounded-full bg-white/60"/>
        </div>
      </div>
      <div className="container-shell flex items-center justify-between border-t border-white/10 py-5">
        <span className="font-mono text-[9px] uppercase tracking-[.16em] text-white/35">Business × Product × Engineering</span>
        <a href="#selected-work" className="flex items-center gap-2 text-[10px] uppercase tracking-[.12em] text-white/45 hover:text-[#c4f36a]">Scroll to explore <ArrowDown size={13}/></a>
      </div>
    </section>

    <section className="container-shell py-28">
      <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr]">
        <p className="eyebrow">01 / THE INTERSECTION</p>
        <div><h2 className="max-w-3xl text-3xl leading-tight tracking-[-.055em] md:text-5xl">The best product work happens where <span className="text-white/40">business context meets technical possibility.</span></h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50">I bring a delivery mindset to product discovery: understand the people closest to the problem, make constraints visible, test the smallest useful solution and create a path from prototype to implementation.</p>
        </div>
      </div>
    </section>

    <section id="selected-work" className="border-y border-white/10 bg-[#151917] py-24">
      <div className="container-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow">02 / SELECTED WORK</p><h2 className="section-title mt-4">Problems worth<br/>making progress on.</h2></div>
          <Link href="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.1em] text-[#c4f36a]">View all 18 projects <ArrowUpRight size={15}/></Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">{featured.map((project, i) => <ProjectCard key={project.slug} project={project} featured={i === 0}/>)}</div>
      </div>
    </section>

    <section className="container-shell py-28">
      <p className="eyebrow">03 / HOW I CREATE VALUE</p>
      <div className="mt-5 grid gap-10 md:grid-cols-[.8fr_1.2fr]">
        <h2 className="section-title">From ambiguity<br/>to <span className="accent-text">action.</span></h2>
        <div className="grid gap-0 sm:grid-cols-2">
          {capabilities.map((item, i) => <div key={item.title} className="grid-line py-6 sm:pr-7">
            <item.icon size={20} className="text-[#c4f36a]"/>
            <h3 className="mt-5 text-xl tracking-[-.04em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/45">{item.text}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="border-y border-white/10 bg-[#151917] py-24">
      <div className="container-shell">
        <p className="eyebrow">04 / A PRACTICAL METHOD</p>
        <h2 className="section-title mt-4 max-w-3xl">Make the problem clear.<br/><span className="text-white/40">Make the next step real.</span></h2>
        <div className="mt-14 grid gap-0 sm:grid-cols-3 lg:grid-cols-6">
          {["Discover","Define","Design","Prototype","Deliver","Iterate"].map((step,i)=><div key={step} className="border-t border-white/15 py-5 pr-4">
            <span className="font-mono text-[10px] text-[#c4f36a]">0{i+1}</span><p className="mt-3 text-lg tracking-[-.04em]">{step}</p>
          </div>)}
        </div>
      </div>
    </section>
  </div>;
}
