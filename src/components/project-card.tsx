import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectArt } from "@/components/project-art";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link href={`/work/${project.slug}`} className={`project-card group panel block overflow-hidden p-3 ${featured ? "md:col-span-2" : ""}`}>
    <ProjectArt project={project} compact={!featured}/>
    <div className="flex items-start justify-between gap-4 px-1 pb-2 pt-5">
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] text-[#c4f36a]">{project.number}</span>
          <span className="text-[10px] uppercase tracking-[.12em] text-white/40">{project.category}</span>
        </div>
        <h3 className="text-xl tracking-[-.04em] transition group-hover:text-[#c4f36a]">{project.title}</h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/50">{project.summary}</p>
      </div>
      <ArrowUpRight size={18} className="mt-1 shrink-0 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c4f36a]"/>
    </div>
    <div className="mt-3 border-t border-white/10 px-1 pt-3">
      <span className="text-[10px] uppercase tracking-[.12em] text-white/40">{project.status}</span>
    </div>
  </Link>;
}
