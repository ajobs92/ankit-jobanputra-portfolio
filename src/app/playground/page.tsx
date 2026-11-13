"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Bot, FileSearch, GitBranch, Play, ShieldCheck } from "lucide-react";

const tasks = [
  {id:"01",name:"Research agent",detail:"Collects context and source material",status:"Complete"},
  {id:"02",name:"Product analyst",detail:"Structures findings into requirements",status:"Complete"},
  {id:"03",name:"Solution architect",detail:"Maps systems, data and integrations",status:"Awaiting approval"},
  {id:"04",name:"Delivery planner",detail:"Creates milestones and validation steps",status:"Queued"}
];

export default function PlaygroundPage() {
  const [run,setRun] = useState(false);
  const [approved,setApproved] = useState(false);
  const [doc,setDoc] = useState("The selected supplier must demonstrate relevant experience, provide a security plan and submit a response by 30 September. Questions are due 15 September.");
  const extracted = useMemo(() => {
    const date = doc.match(/\b\d{1,2}\s+[A-Za-z]+\b/g) ?? [];
    const terms = ["experience","security","accessibility","insurance","budget","implementation"].filter(t => doc.toLowerCase().includes(t));
    return {dates:date,terms};
  },[doc]);

  return <div className="container-shell py-20 md:py-28">
    <p className="eyebrow">EXPERIMENTS / INTERACTIVE STUDIES</p>
    <h1 className="display-title mt-6 max-w-5xl">Product <span className="text-[#d3bd91]">playground.</span></h1>
    <p className="mt-8 max-w-2xl text-base leading-8 text-white/50">A place to explore product workflows and interaction models. These demonstrations run locally in your browser using illustrative logic and sample content; they are not connected to live AI services.</p>
    <div className="mt-16 grid gap-5 lg:grid-cols-2">
      <section className="panel p-6 md:p-8">
        <div className="flex items-center justify-between"><Bot className="text-[#d3bd91]"/><span className="eyebrow">DEMO 01 / AGENT FLOW</span></div>
        <h2 className="mt-6 text-2xl tracking-[-.05em]">Human-governed orchestration</h2>
        <p className="mt-3 text-sm leading-6 text-white/45">Simulate a multi-role workflow with a visible approval checkpoint.</p>
        <div className="mt-7 space-y-3">{tasks.map((task,i)=><div key={task.id} className="flex items-center gap-4 border border-white/10 p-4"><span className="font-mono text-xs text-[#d3bd91]">{task.id}</span><div className="flex-1"><p className="text-sm">{task.name}</p><p className="mt-1 text-xs text-white/40">{task.detail}</p></div><span className="text-[10px] text-white/45">{run && (i<2 || (i===2 && approved) || (i===3 && approved)) ? "Complete" : task.status}</span></div>)}</div>
        {run && !approved && <button onClick={()=>setApproved(true)} className="mt-4 w-full border border-[#d3bd91]/50 py-3 text-xs text-[#d3bd91] hover:bg-[#d3bd91]/10">Approve architecture step</button>}
        <button onClick={()=>{setRun(true);setApproved(false)}} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#d3bd91] px-5 py-3 text-xs font-semibold text-[#111312]"><Play size={13}/> Run simulation</button>
        {run && approved && <button onClick={()=>{setRun(false);setApproved(false)}} className="ml-3 text-xs text-white/45">Reset</button>}
      </section>

      <section className="panel p-6 md:p-8">
        <div className="flex items-center justify-between"><FileSearch className="text-[#d3bd91]"/><span className="eyebrow">DEMO 02 / RFP REVIEW</span></div>
        <h2 className="mt-6 text-2xl tracking-[-.05em]">Requirement signal extractor</h2>
        <p className="mt-3 text-sm leading-6 text-white/45">Edit the sample text and inspect simple browser-based keyword and date extraction.</p>
        <textarea value={doc} onChange={e=>setDoc(e.target.value)} className="mt-6 min-h-36 w-full resize-y border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/70 outline-none focus:border-[#d3bd91]/50"/>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="border border-white/10 p-4"><p className="eyebrow">DATE SIGNALS</p><p className="mt-2 text-sm">{extracted.dates.length ? extracted.dates.join(", ") : "No date pattern found"}</p></div>
          <div className="border border-white/10 p-4"><p className="eyebrow">KEYWORD SIGNALS</p><p className="mt-2 text-sm">{extracted.terms.length ? extracted.terms.join(", ") : "No known terms found"}</p></div>
        </div>
        <p className="mt-4 text-[10px] leading-5 text-white/35">Illustrative extraction only. Not an AI model, legal review or compliance assessment.</p>
      </section>

      <section className="panel p-6 md:p-8 lg:col-span-2">
        <div className="flex items-center justify-between"><GitBranch className="text-[#d3bd91]"/><span className="eyebrow">DEMO 03 / DELIVERY GOVERNANCE</span></div>
        <h2 className="mt-6 text-2xl tracking-[-.05em]">A prototype is not a production system.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{[{t:"Discovery",d:"Problem validation, user evidence and success criteria."},{t:"Implementation",d:"Security, integrations, reliability and operational ownership."},{t:"Production",d:"Monitoring, support, access controls and continuous improvement."}].map((x,i)=><div className="border-t border-white/15 pt-4" key={x.t}><p className="font-mono text-xs text-[#d3bd91]">0{i+1}</p><h3 className="mt-3 text-lg">{x.t}</h3><p className="mt-2 text-sm leading-6 text-white/45">{x.d}</p></div>)}</div>
      </section>
    </div>
  </div>;
}
