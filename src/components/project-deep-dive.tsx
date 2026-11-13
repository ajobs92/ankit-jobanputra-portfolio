"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Compass, Fingerprint, GitBranch, ShieldCheck, Sparkles, Target } from "lucide-react";
import type { CaseStudyDetail } from "@/data/case-studies";
import type { Project } from "@/types/project";

type Chapter = "strategy" | "experience" | "system" | "validation";

const chapters: { id: Chapter; label: string; number: string; icon: typeof Compass }[] = [
  { id: "strategy", label: "Product strategy", number: "01", icon: Compass },
  { id: "experience", label: "Experience design", number: "02", icon: Sparkles },
  { id: "system", label: "System thinking", number: "03", icon: GitBranch },
  { id: "validation", label: "Validation plan", number: "04", icon: Target }
];

export function ProjectDeepDive({ project, detail }: { project: Project; detail: CaseStudyDetail }) {
  const [active, setActive] = useState<Chapter>("strategy");
  const reduceMotion = useReducedMotion();

  const enter = reduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 } };

  return (
    <section className="deep-dive-section mt-20 md:mt-28">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">THE PRODUCT THINKING</p>
          <h2 className="section-title mt-4 max-w-3xl">The detail behind<br/><span className="accent-text">the interface.</span></h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-white/45">A closer look at the product thesis, user journeys, system decisions and evidence needed to move this work forward.</p>
      </div>

      <div className="deep-tabs" role="tablist" aria-label={project.title + " case study chapters"}>
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          const selected = active === chapter.id;
          return (
            <button key={chapter.id} type="button" role="tab" aria-selected={selected} aria-controls={"deep-panel-" + chapter.id} onClick={() => setActive(chapter.id)} className={"deep-tab " + (selected ? "deep-tab-active" : "")}>
              <span className="flex items-center gap-2"><Icon size={14}/><span>{chapter.label}</span></span>
              <span className="deep-tab-number">{chapter.number}</span>
              {selected && <motion.span layoutId={"active-deep-tab-" + project.slug} className="deep-tab-indicator" transition={{ type: "spring", stiffness: 380, damping: 34 }}/>}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={active} id={"deep-panel-" + active} role="tabpanel" {...enter} transition={{ duration: reduceMotion ? 0 : .28, ease: [0.22, 1, 0.36, 1] }} className="deep-panel">
          {active === "strategy" && <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
            <div className="deep-feature-card">
              <div className="flex items-center justify-between"><span className="eyebrow">PRODUCT THESIS</span><Fingerprint size={18} className="text-[#d3bd91]"/></div>
              <p className="mt-8 font-serif text-3xl leading-[1.13] tracking-[-.045em] text-[#eeece4] md:text-4xl">“{detail.thesis}”</p>
              <div className="mt-9 border-t border-white/10 pt-5">
                <p className="eyebrow">CASE STUDY LENS</p>
                <p className="mt-2 text-sm leading-6 text-white/55">{detail.chapter}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow">01 / CONTEXT & OPPORTUNITY</p>
              <h3 className="mt-4 text-2xl tracking-[-.04em]">Why this product needs to exist</h3>
              <p className="mt-5 text-sm leading-8 text-white/55">{detail.context}</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="border-t border-white/15 pt-3"><p className="eyebrow">CURRENT MODE</p><p className="mt-2 text-xs text-white/65">{project.status === "Concept" ? "Independent product exploration" : project.status === "In progress" ? "Active product initiative" : "Professional delivery perspective"}</p></div>
                <div className="border-t border-white/15 pt-3"><p className="eyebrow">CORE DISCIPLINE</p><p className="mt-2 text-xs text-white/65">{project.category}</p></div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-5 flex items-center justify-between"><p className="eyebrow">THE PEOPLE IN THE SYSTEM</p><span className="font-mono text-[9px] text-white/30">USERS / NEEDS</span></div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {detail.users.map((user, index) => <motion.div key={user.role} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : index * .055 }} className="deep-user-card">
                  <span className="font-mono text-[9px] text-[#d3bd91]">0{index + 1}</span>
                  <h4 className="mt-4 text-sm font-semibold text-white">{user.role}</h4>
                  <p className="mt-2 text-xs leading-6 text-white/45">{user.need}</p>
                </motion.div>)}
              </div>
            </div>
          </div>}

          {active === "experience" && <div>
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="eyebrow">02 / THE EXPERIENCE</p>
                <h3 className="mt-4 text-3xl tracking-[-.05em]">From first signal<br/>to useful action.</h3>
                <p className="mt-5 text-sm leading-7 text-white/50">The journey is designed around the work a person is trying to complete. Each stage has an explicit state, a clear handoff and enough context to understand what happens next.</p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d3bd91]/35 text-[#d3bd91]"><Compass size={15}/></span><p className="text-xs leading-5 text-white/50">A workflow should make progress visible, not make people guess where they are.</p></div>
              </div>
              <div className="journey-track">
                {detail.workflow.map((step, index) => <motion.div key={step.title} initial={reduceMotion ? false : { opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : index * .07 }} className="journey-step">
                  <div className="journey-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="min-w-0 pb-7">
                    <div className="flex flex-wrap items-center gap-3"><h4 className="text-base font-semibold tracking-[-.02em] text-white">{step.title}</h4>{index === detail.workflow.length - 1 && <span className="rounded-full border border-[#d3bd91]/30 px-2 py-1 text-[8px] uppercase tracking-wider text-[#d3bd91]">Outcome</span>}</div>
                    <p className="mt-2 max-w-2xl text-xs leading-6 text-white/45">{step.detail}</p>
                  </div>
                  {index < detail.workflow.length - 1 && <ArrowDownRight size={14} className="journey-arrow"/>}
                </motion.div>)}
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="eyebrow">DESIGN DECISIONS</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {detail.decisions.map((decision, index) => <div key={decision.title} className="deep-decision-card">
                  <div className="flex items-start justify-between gap-3"><h4 className="text-sm font-semibold text-white">{decision.title}</h4><span className="font-mono text-[9px] text-[#d3bd91]">D{index + 1}</span></div>
                  <p className="mt-3 text-xs leading-6 text-white/55">{decision.rationale}</p>
                  <div className="mt-4 border-t border-white/[.08] pt-3"><p className="eyebrow !text-[8px] !text-white/35">THE TRADE-OFF</p><p className="mt-2 text-[11px] leading-5 text-white/40">{decision.tradeoff}</p></div>
                </div>)}
              </div>
            </div>
          </div>}

          {active === "system" && <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow">03 / SYSTEM DESIGN</p>
              <h3 className="mt-4 text-3xl tracking-[-.05em]">A product is more than its screens.</h3>
              <p className="mt-5 text-sm leading-7 text-white/50">The experience depends on clear ownership between data, domain rules, workflows and the interface. These layers describe the proposed system boundaries and the questions that need engineering validation.</p>
              <div className="mt-8 rounded-sm border border-[#d3bd91]/20 bg-[#d3bd91]/[.04] p-4">
                <div className="flex items-center gap-2 text-[#d3bd91]"><ShieldCheck size={15}/><span className="text-[10px] font-semibold uppercase tracking-wider">Trust is a system property</span></div>
                <p className="mt-2 text-xs leading-6 text-white/50">Permissions, provenance, failure handling and auditability need to be designed alongside the happy path.</p>
              </div>
            </div>
            <div className="architecture-stack">
              {detail.architecture.map((layer, index) => <motion.div key={layer.layer} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : index * .07 }} className="architecture-layer">
                <div className="architecture-layer-index">0{index + 1}</div>
                <div className="min-w-0 flex-1"><h4 className="text-sm font-semibold text-white">{layer.layer}</h4><p className="mt-2 text-xs leading-6 text-white/45">{layer.detail}</p></div>
                <div className="architecture-layer-signal"/>
              </motion.div>)}
            </div>
            <div className="lg:col-span-2 grid gap-5 border-t border-white/10 pt-7 md:grid-cols-[.4fr_1fr]">
              <div><p className="eyebrow">BOUNDARIES & ASSUMPTIONS</p><h4 className="mt-3 text-xl tracking-tight">What this work does not claim</h4></div>
              <p className="text-sm leading-7 text-white/50">{detail.guardrail}</p>
            </div>
          </div>}

          {active === "validation" && <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow">04 / VALIDATION & LEARNING</p>
              <h3 className="mt-4 text-3xl tracking-[-.05em]">Measure behaviour.<br/>Then make claims.</h3>
              <p className="mt-5 text-sm leading-7 text-white/50">These are the signals I would instrument or study to determine whether the product solves the intended problem. They are proposed validation measures, not reported outcomes.</p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d3bd91]/35 text-[#d3bd91]"><Target size={15}/></span><p className="text-xs leading-5 text-white/50">Success criteria should be agreed before launch, with a baseline and a clear owner.</p></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {detail.signals.map((signal, index) => <div key={signal.name} className="deep-signal-card">
                <span className="font-mono text-[9px] text-[#d3bd91]">SIGNAL / 0{index + 1}</span>
                <h4 className="mt-3 text-sm font-semibold text-white">{signal.name}</h4>
                <p className="mt-2 text-xs leading-6 text-white/45">{signal.method}</p>
              </div>)}
            </div>
            <div className="lg:col-span-2 rounded-sm border border-white/10 bg-white/[.025] p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="eyebrow">THE NEXT PRODUCT MOVE</p><h4 className="mt-3 text-xl tracking-[-.035em]">What I would validate next</h4></div><ArrowUpRight size={19} className="text-[#d3bd91]"/></div>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/55">{detail.nextStep}</p>
            </div>
          </div>}
        </motion.div>
      </AnimatePresence>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
        <p className="text-[10px] text-white/30">CASE STUDY / {project.number} · {project.status.toUpperCase()}</p>
        <div className="flex items-center gap-2">{chapters.map((chapter) => <button key={chapter.id} type="button" aria-label={"Open " + chapter.label} onClick={() => setActive(chapter.id)} className={"h-1.5 rounded-full transition-all " + (active === chapter.id ? "w-8 bg-[#d3bd91]" : "w-1.5 bg-white/20 hover:bg-white/45")}/>)}</div>
      </div>
    </section>
  );
}
