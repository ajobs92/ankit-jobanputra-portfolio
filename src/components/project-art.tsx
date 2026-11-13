import type { CSSProperties, ReactNode } from "react";
import type { Project } from "@/types/project";

const palettes: Record<string, string[]> = {
  ledger: ["#c4f36a", "#6d8d5c", "#28352d"], civic: ["#b9d7c6", "#526e62", "#273630"],
  education: ["#a9c9ff", "#526a91", "#252f43"], mobility: ["#f4b183", "#876044", "#3a2c23"],
  document: ["#c4f36a", "#78934b", "#303b27"], agents: ["#b7c5ff", "#6b77a6", "#292e42"],
  crm: ["#e9b6d1", "#986b84", "#3b2933"], health: ["#9dddd1", "#527f79", "#263b38"],
  risk: ["#f2a79b", "#96645c", "#3b2b2a"], copilot: ["#c4f36a", "#7e9952", "#293324"],
  supply: ["#e7c77d", "#887348", "#3b3426"], workflow: ["#b7c5ff", "#6679b0", "#252f45"],
  analytics: ["#a7d5b8", "#5f8b70", "#26382d"], talent: ["#d7b9ff", "#846c9f", "#342d40"],
  security: ["#e6a5a5", "#916565", "#39292c"], city: ["#9bc9d9", "#5c8290", "#263940"],
  finance: ["#c4f36a", "#819e44", "#2c3821"]
};

function MockWindow({children,tint}:{children:ReactNode;tint:string}) {
  return <div className="absolute right-[5%] top-[12%] w-[61%] overflow-hidden rounded-md border border-white/20 bg-[#101411]/95 shadow-2xl">
    <div className="flex h-5 items-center gap-1.5 border-b border-white/10 px-2">
      <i className="h-1.5 w-1.5 rounded-full bg-white/30"/><i className="h-1.5 w-1.5 rounded-full bg-white/20"/><i className="h-1.5 w-1.5 rounded-full bg-white/20"/>
      <span className="ml-auto font-mono text-[5px] tracking-widest text-white/30">WORKSPACE / LIVE VIEW</span>
    </div>
    <div className="p-2.5" style={{"--tint":tint} as CSSProperties}>{children}</div>
  </div>;
}

function MiniBars({count=6}:{count?:number}) {
  return <div className="flex h-12 items-end gap-1">{Array.from({length:count},(_,i)=><span key={i} className="flex-1 rounded-t-[2px] bg-[var(--tint)]/80" style={{height:String(24+((i*17+13)%65))+"%"}}/>)}</div>;
}

export function ProjectArt({project,compact=false}:{project:Project;compact?:boolean}) {
  const colors=palettes[project.visual] ?? palettes.ledger;
  const v=project.visual;
  let preview:ReactNode;

  if(v==="ledger") preview=<><div className="grid grid-cols-3 gap-1">{["Revenue","Expenses","Cash"].map((x,i)=><div key={x} className="rounded-sm bg-white/[.06] p-1"><p className="text-[5px] text-white/40">{x}</p><p className="mt-1 text-[8px] text-white">$ {["82.4k","31.8k","50.6k"][i]}</p></div>)}</div><div className="mt-2 space-y-1">{["Northstar Supplies","Studio Services","Office Systems"].map((x,i)=><div key={x} className="flex justify-between border-b border-white/10 py-1 text-[6px] text-white/60"><span>{x}</span><span style={{color:colors[0]}}>{["+$4,200","-$1,840","+$980"][i]}</span></div>)}</div></>;
  else if(v==="civic") preview=<div className="grid grid-cols-[1fr_.85fr] gap-2"><div className="relative h-20 overflow-hidden rounded-sm bg-[#273a33]"><div className="absolute left-[25%] top-[12%] h-14 w-20 rotate-12 rounded-[45%] border border-[#b9d7c6]/60"/><div className="absolute left-[47%] top-[23%] h-2 w-2 rounded-full bg-[#c4f36a]"/><div className="absolute left-[60%] top-[60%] h-1.5 w-1.5 rounded-full bg-white"/></div><div className="space-y-1">{["MSME support","Digital adoption","Export assistance"].map(x=><div key={x} className="border-b border-white/10 py-1 text-[6px] text-white/65">{x}<span className="float-right text-[#b9d7c6]">→</span></div>)}</div></div>;
  else if(v==="education") preview=<><div className="grid grid-cols-3 gap-1">{["Students","Attendance","Progress"].map((x,i)=><div key={x} className="bg-white/[.06] p-1"><p className="text-[5px] text-white/40">{x}</p><p className="text-[8px] text-white">{["1,248","94.2%","82%"][i]}</p></div>)}</div><div className="mt-2 space-y-1">{["Mathematics · 09:00","Science · 10:30","Design · 12:00"].map(x=><div key={x} className="rounded-sm border border-white/10 px-1.5 py-1 text-[6px] text-white/65">{x}</div>)}</div></>;
  else if(v==="mobility") preview=<><div className="relative h-20 overflow-hidden rounded-sm bg-[#24342e]"><svg viewBox="0 0 180 80" className="h-full w-full"><path d="M4 62 C34 12 70 72 102 33 S148 8 176 18" fill="none" stroke={colors[0]} strokeWidth="2" strokeDasharray="4 3"/><circle cx="32" cy="37" r="4" fill={colors[0]}/><circle cx="102" cy="33" r="4" fill="#fff"/><circle cx="164" cy="18" r="4" fill={colors[0]}/></svg></div><div className="mt-2 flex justify-between text-[6px] text-white/55"><span>Fleet active <b className="text-white">28</b></span><span>On route <b className="text-white">19</b></span></div></>;
  else if(v==="document") preview=<><div className="flex items-center justify-between"><span className="text-[7px] text-white">RFP / REQUIREMENTS</span><span className="rounded-sm bg-[#c4f36a]/15 px-1 py-0.5 text-[5px] text-[#c4f36a]">ANALYSIS</span></div><div className="mt-2 space-y-1.5">{["Submission deadline","Mandatory experience","Security compliance","Pricing schedule"].map((x,i)=><div key={x} className="flex gap-1.5 text-[6px] text-white/60"><span style={{color:colors[0]}}>0{i+1}</span>{x}</div>)}</div></>;
  else if(v==="agents"||v==="workflow") preview=<><div className="flex items-center justify-between text-[6px] text-white/50"><span>ORCHESTRATION GRAPH</span><span>4 NODES</span></div><div className="relative mt-3 grid grid-cols-2 gap-3">{["Research","Analyse","Approve","Execute"].map(x=><div key={x} className="rounded-sm border border-white/20 bg-white/[.05] p-2 text-center text-[6px] text-white/80"><span className="mb-1 block text-[8px]" style={{color:colors[0]}}>◇</span>{x}</div>)}</div></>;
  else if(v==="crm"||v==="talent") preview=<div className="grid grid-cols-3 gap-1">{["New","Review","Next"].map(x=><div key={x} className="space-y-1"><p className="text-[6px] text-white/50">{x}</p>{[0,1].map(j=><div key={j} className="h-6 rounded-sm border border-white/10 bg-white/[.06] p-1"><div className="h-1 w-3/4 rounded bg-white/30"/><div className="mt-1 h-1 w-1/2 rounded" style={{background:colors[0]}}/></div>)}</div>)}</div>;
  else if(v==="health"||v==="risk"||v==="security") preview=<><div className="flex items-center justify-between"><span className="text-[6px] text-white/65">{v==="health"?"OPERATIONS QUEUE":"ALERT PRIORITY"}</span><span className="text-[6px]" style={{color:colors[0]}}>● MONITORED</span></div><div className="mt-2 space-y-1.5">{["Priority review","Requires owner","Pending validation","Resolved today"].map((x,i)=><div key={x} className="flex items-center gap-2 border-b border-white/10 pb-1 text-[6px] text-white/65"><span className="h-1.5 w-1.5 rounded-full" style={{background:colors[0],opacity:1-i*.18}}/>{x}<span className="ml-auto text-white/35">{["High","Med","Low","Done"][i]}</span></div>)}</div></>;
  else if(v==="copilot") preview=<><div className="text-[6px] text-white/60">KNOWLEDGE ASSISTANT</div><div className="mt-2 ml-5 rounded-sm bg-white/[.07] p-2 text-[6px] text-white/55">Where is the onboarding policy?</div><div className="mt-1 mr-4 rounded-sm border border-white/10 p-2 text-[6px] leading-4 text-white/70">Found 3 relevant sources. The current policy is in the People Operations handbook.</div><div className="mt-1 text-[5px]" style={{color:colors[0]}}>SOURCE · PEOPLE OPS / 2025</div></>;
  else if(v==="supply"||v==="city") preview=<><div className="grid grid-cols-4 gap-1">{Array.from({length:16},(_,i)=><div key={i} className="h-5 rounded-[2px]" style={{background:colors[i%3]+"55",border:"1px solid rgba(255,255,255,.1)"}}/>)}</div><div className="mt-2 flex justify-between text-[6px] text-white/55"><span>Network status</span><span style={{color:colors[0]}}>Operational</span></div></>;
  else preview=<><div className="grid grid-cols-2 gap-2"><div className="bg-white/[.06] p-2"><p className="text-[5px] text-white/40">PERIOD VALUE</p><p className="text-[9px] text-white">{v==="finance"?"₹ 84,250":"₹ 8.42 Cr"}</p></div><div className="bg-white/[.06] p-2"><p className="text-[5px] text-white/40">CHANGE</p><p className="text-[9px]" style={{color:colors[0]}}>+12.8%</p></div></div><div className="mt-2"><MiniBars/></div></>;

  return <div className={"relative isolate overflow-hidden rounded-[3px] border border-white/10 "+(compact?"h-32":"h-56 md:h-72")} style={{background:"radial-gradient(circle at 70% 20%, "+colors[1]+"55 0, transparent 38%),linear-gradient(135deg,"+colors[2]+",#121513 80%)"}}>
    <div className="absolute inset-0 opacity-[.12]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px)",backgroundSize:"28px 28px"}}/>
    <div className="absolute left-[7%] top-[17%] max-w-[34%]">
      <p className="font-mono text-[7px] tracking-[.2em]" style={{color:colors[0]}}>PRODUCT STUDY / {project.number}</p>
      {!compact && <p className="mt-4 text-3xl leading-[1.02] tracking-[-.06em] text-white/90">{project.title}</p>}
      {!compact && <p className="mt-3 max-w-[180px] text-[10px] leading-5 text-white/45">{project.category}</p>}
    </div>
    <MockWindow tint={colors[0]}>{preview}</MockWindow>
    {!compact && <div className="absolute bottom-5 left-[7%] max-w-[34%]"><p className="font-mono text-[8px] text-white/35">BUSINESS × PRODUCT × ENGINEERING</p><div className="mt-2 h-px w-14" style={{background:colors[0]}}/></div>}
    <div className="absolute bottom-3 right-4 font-mono text-[9px] text-white/35">AJ / {project.number}</div>
  </div>;
}
