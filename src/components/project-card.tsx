import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectArt } from "@/components/project-art";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link href={`/work/${project.slug}`} className={`project-card group panel block overflow-hidden ${featured ? "md:col-span-2" : ""}`}>
    <ProjectArt project={project} compact={!featured}/>
    <div className="flex items-start justify-between gap-4 px-1 pb-2 pt-6">
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[9px] text-[#d3bd91]">{project.number}</span>
          <span className="text-[9px] uppercase tracking-[.14em] text-white/35">{project.category}</span>
        </div>
        <h3 className="font-serif text-2xl tracking-[-.025em] text-[#f0ece2] transition group-hover:text-[#d3bd91] md:text-3xl">{project.title}</h3>
        <p className="mt-3 max-w-2xl text-xs leading-6 text-white/45">{project.summary}</p>
      </div>
      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#d3bd91]/50 group-hover:text-[#d3bd91]"><ArrowUpRight size={16}/></span>
    </div>
    <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 px-1 pt-4">
      <span className="text-[9px] uppercase tracking-[.13em] text-white/40">{project.status}</span>
      <span className="font-mono text-[8px] tracking-[.12em] text-white/25">OPEN CASE STUDY ↗</span>
    </div>
  </Link>;
}
