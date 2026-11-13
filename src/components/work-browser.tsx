"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function WorkBrowser() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => projects.filter(project => {
    const categoryMatch = category === "All" || project.discipline.includes(category);
    const query = search.toLowerCase().trim();
    const searchMatch = !query || [project.title, project.category, project.summary, ...project.capabilities].join(" ").toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  }), [category, search]);

  return <div>
    <div className="mb-8 flex flex-col gap-5 border-y border-white/10 py-5">
      <div className="relative max-w-md">
        <Search size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-white/35"/>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by project, domain or capability..." className="w-full border-b border-white/20 bg-transparent py-3 pl-7 text-sm outline-none placeholder:text-white/30 focus:border-[#d3bd91]"/>
      </div>
      <div className="flex flex-wrap gap-2">
        {projectCategories.map(item => <button key={item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-[11px] transition ${category === item ? "border-[#d3bd91] bg-[#d3bd91] text-[#111312]" : "border-white/15 text-white/55 hover:border-white/40 hover:text-white"}`}>{item}</button>)}
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[.15em] text-white/40">{filtered.length} of {projects.length} projects</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {filtered.map(project => <ProjectCard key={project.slug} project={project}/>)}
    </div>
    {filtered.length === 0 && <div className="py-20 text-center text-white/45">No projects match that search. Try another term.</div>}
  </div>;
}
