import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";
import { ProjectArt } from "@/components/project-art";
import { ProjectDeepDive } from "@/components/project-deep-dive";
import { ServertraPreview } from "@/components/servertra-preview";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return {
    title: project?.title ?? "Project not found",
    description: project?.summary,
    openGraph: { title: project?.title ?? "Project not found", description: project?.summary }
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex(item => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const detail = caseStudies[project.slug];
  const isServertra = project.slug === "servertra-funding-platform";

  return (
    <article className="container-shell py-12 md:py-20">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <Link href="/work" className="inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-[#c4f36a]"><ArrowLeft size={14}/> All projects</Link>
        <p className="font-mono text-[9px] uppercase tracking-[.16em] text-white/30">CASE FILE / {project.number} OF 18</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div>
          <p className="eyebrow">PROJECT {project.number} / {project.category}</p>
          <h1 className="display-title mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)]">{project.title}<span className="accent-text">.</span></h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">{project.summary}</p>
          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#c4f36a]/30 bg-[#c4f36a]/[.06] px-3 py-1.5 text-[9px] uppercase tracking-[.12em] text-[#c4f36a]">{project.status}</span>
            {project.discipline.map(item => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-white/45">{item}</span>)}
          </div>
        </div>
        <aside className="h-fit border border-white/10 bg-white/[.018] p-5">
          <p className="eyebrow">PROJECT SNAPSHOT</p>
          <div className="mt-4"><p className="text-[9px] uppercase tracking-[.14em] text-white/30">Status</p><p className="mt-1 text-sm text-white/80">{project.status}</p></div>
          <div className="my-4 border-t border-white/10"/>
          <div><p className="text-[9px] uppercase tracking-[.14em] text-white/30">Role / contribution</p><p className="mt-2 text-xs leading-6 text-white/60">{project.role}</p></div>
          <div className="my-4 border-t border-white/10"/>
          <div><p className="text-[9px] uppercase tracking-[.14em] text-white/30">Portfolio lens</p><p className="mt-2 text-xs leading-6 text-white/60">{detail ? "Product strategy · UX · System design" : "Live website · Digital platform"}</p></div>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c4f36a] px-4 py-3 text-[10px] font-semibold text-[#111312] transition hover:bg-[#d8ff8c]">Visit live website <ExternalLink size={13}/></a>}
        </aside>
      </div>

      <div className="mt-12 md:mt-16">
        {isServertra ? <ServertraPreview/> : <ProjectArt project={project}/>}
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="eyebrow">01 / THE OPPORTUNITY</p>
          <h2 className="mt-4 text-3xl tracking-[-.05em]">Start with the problem, not the feature list.</h2>
        </div>
        <div className="space-y-8">
          <div><p className="text-sm leading-8 text-white/60">{project.problem}</p></div>
          <div className="border-l border-[#c4f36a]/50 pl-5">
            <p className="eyebrow">PRODUCT DIRECTION</p>
            <p className="mt-3 text-base leading-8 text-white/75">{project.solution}</p>
          </div>
        </div>
      </div>

      <section className="mt-16 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">02 / PRODUCT CAPABILITIES</p><h2 className="mt-3 text-3xl tracking-[-.05em]">What the experience needs to support.</h2></div>
          <p className="max-w-xs text-xs leading-6 text-white/35">The capability map is organised around user work, not a flat feature checklist.</p>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {project.capabilities.map((item, i) => <div key={item} className="group flex gap-3 border border-white/10 bg-white/[.018] p-4 transition hover:border-[#c4f36a]/30">
            <span className="font-mono text-[9px] text-[#c4f36a]">0{i + 1}</span><span className="text-xs leading-6 text-white/65">{item}</span>
          </div>)}
        </div>
      </section>

      {detail && <ProjectDeepDive project={project} detail={detail}/>}

      {isServertra && <section className="mt-20 border-t border-white/10 pt-10">
        <p className="eyebrow">03 / PLATFORM JOURNEYS</p>
        <h2 className="mt-4 text-3xl tracking-[-.05em]">One destination. Multiple business journeys.</h2>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-white/55">The live platform connects service discovery with a government-scheme explorer, a preliminary eligibility checker and a dedicated technology-services journey. The experience is designed to help businesses understand where to start, what support may be relevant and where to take the next step.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01 / SERVICES","Business setup & compliance","https://servertra.com/services"],
            ["02 / GOVTECH","Government scheme explorer","https://servertra.com/government-schemes"],
            ["03 / ELIGIBILITY","Eligibility checker","https://servertra.com/eligibility-checker"],
            ["04 / TECHNOLOGY","IT solutions","https://servertra.com/it-solutions"]
          ].map(([label,title,url]) => <a key={label} href={url} target="_blank" rel="noreferrer" className="border border-white/10 p-4 transition hover:border-[#c4f36a]/50"><span className="eyebrow">{label}</span><span className="mt-3 block text-sm text-white">{title} ↗</span></a>)}
        </div>
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[.65fr_1.35fr]">
          <div><p className="eyebrow">04 / CONTINUOUS IMPROVEMENT</p><h3 className="mt-3 text-2xl tracking-[-.04em]">Make guidance easier to trust and act on.</h3></div>
          <p className="text-sm leading-8 text-white/55">The next product priorities are to keep scheme references current, make source and last-reviewed information easy to understand, test the eligibility journey with real business profiles, and measure how effectively visitors move from discovery to a useful enquiry.</p>
        </div>
      </section>}

      <section className="mt-16 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-[.45fr_1.55fr]">
        <div><p className="eyebrow">EVIDENCE & SCOPE</p><h2 className="mt-3 text-xl tracking-[-.04em]">What is known today.</h2></div>
        <div className="flex gap-3 border border-white/10 bg-white/[.02] p-5">
          <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#c4f36a]"/>
          <p className="text-xs leading-7 text-white/55">{project.evidenceNote}</p>
        </div>
      </section>

      <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end">
        <div><p className="eyebrow">UP NEXT / {next.number}</p><h2 className="mt-3 max-w-xl text-3xl tracking-[-.05em]">{next.title}<span className="accent-text">.</span></h2></div>
        <Link href={`/work/${next.slug}`} className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-5 py-3 text-xs text-white/65 transition hover:border-[#c4f36a] hover:text-[#c4f36a] sm:self-auto">Explore next case study <ArrowUpRight size={14}/></Link>
      </div>
    </article>
  );
}
