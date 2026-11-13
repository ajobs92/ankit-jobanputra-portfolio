import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectArt } from "@/components/project-art";
import { ServertraPreview } from "@/components/servertra-preview";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return { title: project?.title ?? "Project not found", description: project?.summary };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex(item => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return <article className="container-shell py-14 md:py-20">
    <Link href="/work" className="mb-12 inline-flex items-center gap-2 text-xs text-white/50 hover:text-[#c4f36a]"><ArrowLeft size={14}/> Back to all work</Link>
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      <div>
        <p className="eyebrow">PROJECT {project.number} / {project.category}</p>
        <h1 className="display-title mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)]">{project.title}<span className="accent-text">.</span></h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">{project.summary}</p>
      </div>
      <aside className="h-fit border border-white/10 p-5">
        <p className="eyebrow">PROJECT STATUS</p><p className="mt-3 text-sm">{project.status}</p>
        <div className="my-5 border-t border-white/10"/>
        <p className="eyebrow">ROLE / CONTRIBUTION</p><p className="mt-3 text-sm leading-6 text-white/65">{project.role}</p>
        <div className="my-5 border-t border-white/10"/>
        <p className="eyebrow">DISCIPLINES</p><div className="mt-3 flex flex-wrap gap-2">{project.discipline.map(item=><span key={item} className="border border-white/15 px-2 py-1 text-[10px] text-white/55">{item}</span>)}</div>
      </aside>
    </div>
    {project.liveUrl && <div className="mt-8"><a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#c4f36a] px-5 py-3 text-xs font-semibold text-[#111312] transition hover:bg-[#d8ff8c]">Visit live website <ExternalLink size={14}/></a></div>}
    <div className="mt-14">{project.slug === "servertra-funding-platform" ? <ServertraPreview/> : <ProjectArt project={project}/>}</div>
    <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_280px]">
      <div className="space-y-14">
        <section><p className="eyebrow">01 / THE CHALLENGE</p><h2 className="mt-4 text-3xl tracking-[-.05em]">The problem to solve</h2><p className="mt-5 max-w-3xl text-base leading-8 text-white/55">{project.problem}</p></section>
        <section><p className="eyebrow">02 / PRODUCT DIRECTION</p><h2 className="mt-4 text-3xl tracking-[-.05em]">A useful way forward</h2><p className="mt-5 max-w-3xl text-base leading-8 text-white/55">{project.solution}</p></section>
        <section><p className="eyebrow">03 / CAPABILITIES</p><h2 className="mt-4 text-3xl tracking-[-.05em]">What the product needs to do</h2><div className="mt-7 grid gap-3 sm:grid-cols-2">{project.capabilities.map((item,i)=><div key={item} className="flex gap-3 border border-white/10 p-4"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#c4f36a]"/><span className="text-sm text-white/70">{item}</span></div>)}</div></section>
        <section><p className="eyebrow">04 / EVIDENCE & SCOPE</p><h2 className="mt-4 text-3xl tracking-[-.05em]">What is known today</h2><div className="mt-5 border-l-2 border-[#c4f36a] bg-white/[.03] p-5"><p className="text-sm leading-7 text-white/65">{project.evidenceNote}</p></div></section>
        {project.slug === "servertra-funding-platform" && <section>
          <p className="eyebrow">05 / PLATFORM JOURNEYS</p>
          <h2 className="mt-4 text-3xl tracking-[-.05em]">One destination. Multiple business journeys.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/55">The live platform connects service discovery with a government-scheme explorer, a preliminary eligibility checker and a dedicated technology-services journey. The experience is designed to help businesses understand where to start, what support may be relevant and where to take the next step.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a href="https://servertra.com/services" target="_blank" rel="noreferrer" className="border border-white/10 p-4 transition hover:border-[#c4f36a]/50"><span className="eyebrow">01 / SERVICES</span><span className="mt-3 block text-sm text-white">Business setup & compliance ↗</span></a>
            <a href="https://servertra.com/government-schemes" target="_blank" rel="noreferrer" className="border border-white/10 p-4 transition hover:border-[#c4f36a]/50"><span className="eyebrow">02 / GOVTECH</span><span className="mt-3 block text-sm text-white">Government scheme explorer ↗</span></a>
            <a href="https://servertra.com/eligibility-checker" target="_blank" rel="noreferrer" className="border border-white/10 p-4 transition hover:border-[#c4f36a]/50"><span className="eyebrow">03 / ELIGIBILITY</span><span className="mt-3 block text-sm text-white">Eligibility checker ↗</span></a>
          </div>
        </section>}
        {project.slug === "servertra-funding-platform" ? <section>
          <p className="eyebrow">06 / CONTINUOUS IMPROVEMENT</p>
          <h2 className="mt-4 text-3xl tracking-[-.05em]">Make guidance easier to trust and act on</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/55">The next product priorities are to keep scheme references current, make source and last-reviewed information easy to understand, test the eligibility journey with real business profiles, and measure how effectively visitors move from discovery to a useful enquiry.</p>
        </section> : <section>
          <p className="eyebrow">05 / NEXT STEPS</p>
          <h2 className="mt-4 text-3xl tracking-[-.05em]">From concept to validated product</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/55">The next stage is to validate assumptions with the people who experience the problem, define measurable success criteria, test the highest-risk workflow and then plan delivery against real technical and operational constraints.</p>
        </section>}
      </div>
      <aside className="h-fit border-t border-white/15 pt-5">
        <p className="eyebrow">RELATED PROJECT</p><p className="mt-3 text-lg">{next.title}</p><Link href={`/work/${next.slug}`} className="mt-4 inline-flex items-center gap-2 text-xs text-[#c4f36a]">Next case study <ArrowUpRight size={14}/></Link>
      </aside>
    </div>
  </article>;
}
