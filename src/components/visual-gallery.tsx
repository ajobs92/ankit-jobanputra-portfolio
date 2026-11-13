"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Layers3, Search, Sparkles } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { ProjectArt } from "@/components/project-art";

export function VisualGallery() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();
  const liveWebsiteCount = projects.filter((project) => project.status === "Live website").length;
  const productStudyCount = projects.length - liveWebsiteCount;

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter((project) => {
      const inCategory = category === "All" || project.discipline.includes(category);
      const inSearch = !term || [project.title, project.category, project.summary, ...project.capabilities].join(" ").toLowerCase().includes(term);
      return inCategory && inSearch;
    });
  }, [category, query]);

  return <div>
    <section className="visual-hero relative overflow-hidden border border-white/10 bg-[#171c18] p-6 md:p-10">
      <div className="visual-hero-glow"/>
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
        <div>
          <div className="flex items-center gap-2"><Sparkles size={14} className="text-[#d3bd91]"/><p className="eyebrow">INTERACTIVE PRODUCT ATLAS</p></div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[.96] tracking-[-.06em] text-[#eeece4] md:text-7xl">Ideas, made<br/><span className="text-[#d3bd91]">visible.</span></h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">Explore the interfaces behind {projects.length} product stories. Each visual is composed as a responsive product study, built around the workflow, information hierarchy and decisions that define that domain.</p>
        </div>
        <div className="grid grid-cols-3 border-y border-white/15 py-5">
          <div className="pr-3"><p className="font-serif text-3xl text-white md:text-4xl">{projects.length.toString().padStart(2,"0")}</p><p className="mt-1 text-[8px] uppercase tracking-[.13em] text-white/35 md:text-[9px]">Selected projects</p></div>
          <div className="border-l border-white/10 px-3"><p className="font-serif text-3xl text-white md:text-4xl">{productStudyCount.toString().padStart(2,"0")}</p><p className="mt-1 text-[8px] uppercase tracking-[.13em] text-white/35 md:text-[9px]">Product studies</p></div>
          <div className="border-l border-white/10 pl-3"><p className="font-serif text-3xl text-white md:text-4xl">{liveWebsiteCount.toString().padStart(2,"0")}</p><p className="mt-1 text-[8px] uppercase tracking-[.13em] text-white/35 md:text-[9px]">Live website</p></div>
        </div>
      </div>
      <div className="visual-hero-orbit visual-hero-orbit-one"/>
      <div className="visual-hero-orbit visual-hero-orbit-two"/>
      <div className="absolute bottom-4 right-5 z-10 hidden items-center gap-2 font-mono text-[8px] tracking-[.18em] text-white/25 md:flex"><Layers3 size={12}/> PRODUCT / SYSTEM / EXPERIENCE</div>
    </section>

    <div className="mt-12 flex flex-col gap-5 border-y border-white/10 py-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div><p className="eyebrow">BROWSE THE VISUAL SYSTEM</p><p className="mt-2 text-sm text-white/45">Browse by discipline or search for a capability, workflow or domain.</p></div>
        <label className="relative block w-full lg:max-w-sm">
          <Search size={15} className="absolute left-0 top-1/2 -translate-y-1/2 text-white/35"/>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search all product visuals..." aria-label="Search product visuals" className="w-full border-b border-white/20 bg-transparent py-3 pl-7 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#d3bd91]"/>
        </label>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {projectCategories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={"shrink-0 rounded-full border px-4 py-2 text-[10px] transition " + (category === item ? "border-[#d3bd91] bg-[#d3bd91] text-[#111312]" : "border-white/15 text-white/50 hover:border-white/40 hover:text-white")}>{item}</button>)}
      </div>
      <div className="flex items-center justify-between">
        <p className="font-mono text-[9px] uppercase tracking-[.15em] text-white/35">{String(filtered.length).padStart(2,"0")} / {projects.length} visual studies</p>
        {(query || category !== "All") && <button type="button" onClick={() => { setQuery(""); setCategory("All"); }} className="text-[10px] text-[#d3bd91] hover:text-white">Clear filters</button>}
      </div>
    </div>

    <motion.div layout className="mt-7 grid gap-5 xl:grid-cols-2">
      <AnimatePresence mode="popLayout" initial={false}>
        {filtered.map((project, index) => <motion.article key={project.slug} layout initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: reduceMotion ? 0 : .32, delay: reduceMotion ? 0 : Math.min(index % 4, 3) * .035 }} className="visual-card group">
          <Link href={"/work/" + project.slug} className="block">
            <ProjectArt project={project}/>
            <div className="flex flex-wrap items-start justify-between gap-4 px-1 pb-1 pt-5">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[9px] text-[#d3bd91]">{project.number}</span>
                  <span className="text-[9px] uppercase tracking-[.13em] text-white/35">{project.category}</span>
                </div>
                <h2 className="text-xl tracking-[-.045em] text-white transition group-hover:text-[#d3bd91] md:text-2xl">{project.title}</h2>
                <p className="mt-2 max-w-xl text-xs leading-6 text-white/45">{project.summary}</p>
              </div>
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/45 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#d3bd91]/50 group-hover:text-[#d3bd91]"><ArrowUpRight size={16}/></span>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-1 pt-3">
              <span className={"rounded-full border px-2.5 py-1 text-[8px] uppercase tracking-[.12em] " + (project.status === "Live website" ? "border-[#d3bd91]/35 text-[#d3bd91]" : project.status === "Concept" ? "border-white/10 text-white/35" : "border-white/15 text-white/50")}>{project.status}</span>
              <span className="text-[9px] text-white/30 transition group-hover:text-white/65">Open product story ↗</span>
            </div>
          </Link>
        </motion.article>)}
      </AnimatePresence>
    </motion.div>

    {filtered.length === 0 && <div className="border border-white/10 py-20 text-center"><p className="text-lg text-white/75">No visuals found.</p><p className="mt-2 text-sm text-white/35">Try a different search or clear the selected filter.</p><button type="button" onClick={() => { setQuery(""); setCategory("All"); }} className="mt-5 rounded-full border border-[#d3bd91]/40 px-4 py-2 text-xs text-[#d3bd91]">Show all projects</button></div>}

    <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center">
      <div><p className="eyebrow">BEHIND EVERY SCREEN</p><p className="mt-2 max-w-2xl text-xs leading-6 text-white/40">Interface concepts use illustrative sample data unless a project is explicitly marked as a live website. Open any project to explore its product strategy, user journey, design trade-offs, system boundaries and validation plan.</p></div>
      <Link href="/work" className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-5 py-3 text-[10px] text-white/65 transition hover:border-[#d3bd91] hover:text-[#d3bd91]">Read all case studies <ArrowUpRight size={14}/></Link>
    </div>
  </div>;
}
