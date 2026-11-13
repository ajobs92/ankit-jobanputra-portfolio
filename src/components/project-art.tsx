import type { ReactNode } from "react";
import type { Project } from "@/types/project";

const palettes: Record<string, { ink: string; mid: string; glow: string }> = {
  ledger: { ink: "#18271f", mid: "#486b54", glow: "#c4f36a" },
  civic: { ink: "#25203a", mid: "#776b9e", glow: "#d6c8ff" },
  education: { ink: "#172d46", mid: "#476d9b", glow: "#a9c9ff" },
  mobility: { ink: "#31251e", mid: "#8b6344", glow: "#f4b183" },
  document: { ink: "#252c20", mid: "#647b43", glow: "#c4f36a" },
  agents: { ink: "#22263c", mid: "#6975a6", glow: "#b7c5ff" },
  crm: { ink: "#392532", mid: "#8e6079", glow: "#e9b6d1" },
  health: { ink: "#18312e", mid: "#4e807a", glow: "#9dddd1" },
  risk: { ink: "#382522", mid: "#915f56", glow: "#f2a79b" },
  copilot: { ink: "#1d2d2c", mid: "#537d75", glow: "#a9ded2" },
  supply: { ink: "#332c1e", mid: "#8a764b", glow: "#e7c77d" },
  workflow: { ink: "#232942", mid: "#6576ad", glow: "#b7c5ff" },
  analytics: { ink: "#1e3027", mid: "#5c8069", glow: "#a7d5b8" },
  talent: { ink: "#30253c", mid: "#806998", glow: "#d7b9ff" },
  security: { ink: "#302326", mid: "#895b61", glow: "#e6a5a5" },
  city: { ink: "#1c3039", mid: "#537e8d", glow: "#9bc9d9" },
  finance: { ink: "#202c21", mid: "#718b50", glow: "#c4f36a" }
};

function Dot({ color = "rgba(255,255,255,.28)" }: { color?: string }) {
  return <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: color }}/>;
}

function Tag({ children, color = "#c4f36a" }: { children: ReactNode; color?: string }) {
  return <span className="inline-flex items-center gap-1 rounded-sm border px-1.5 py-1 text-[8px] leading-none" style={{ color, borderColor: color + "55", background: color + "12" }}>{children}</span>;
}

function Bar({ width, color = "rgba(255,255,255,.23)" }: { width: string; color?: string }) {
  return <span className="block h-1.5 rounded-full" style={{ width, background: color }}/>;
}

function ScreenFrame({ children, label, accent }: { children: ReactNode; label: string; accent: string }) {
  return <div className="screen-window absolute right-[4%] top-[8%] w-[64%] overflow-hidden rounded-md border border-white/20 bg-[#101512]/95 shadow-2xl backdrop-blur-md">
    <div className="flex h-7 items-center gap-1.5 border-b border-white/10 px-3">
      <Dot color="#eb8d83"/><Dot color="#e9ca83"/><Dot color="#8ecb9a"/>
      <span className="ml-3 font-mono text-[8px] tracking-[.16em] text-white/35">{label}</span>
      <span className="ml-auto rounded-sm px-1.5 py-1 font-mono text-[7px] tracking-widest" style={{ color: accent, background: accent + "15" }}>SAMPLE UI</span>
    </div>
    <div className="screen-content p-3 md:p-4">{children}</div>
  </div>;
}

function Sidebar({ items, accent }: { items: string[]; accent: string }) {
  return <div className="hidden w-[23%] shrink-0 border-r border-white/[.08] pr-2 sm:block">
    <div className="mb-5 flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm" style={{ background: accent }}/><Bar width="46%" color="rgba(255,255,255,.7)"/></div>
    <div className="space-y-3">{items.map((item, i) => <div key={item} className="flex items-center gap-1.5 text-[8px]" style={{ color: i === 0 ? accent : "rgba(255,255,255,.36)" }}><span className="h-1 w-1 rounded-[1px]" style={{ background: i === 0 ? accent : "rgba(255,255,255,.2)" }}/>{item}</div>)}</div>
  </div>;
}

function PanelTitle({ title, sub }: { title: string; sub?: string }) {
  return <div className="mb-3 flex items-end justify-between gap-2"><div><p className="text-[10px] font-semibold text-white/85">{title}</p>{sub && <p className="mt-1 text-[8px] text-white/35">{sub}</p>}</div><span className="text-[8px] text-white/30">↗</span></div>;
}

function LedgerScreen({ accent }: { accent: string }) {
  return <div className="flex gap-3"><Sidebar accent={accent} items={["Overview","Sales","Purchases","Banking","Inventory","Tax & reports"]}/><div className="min-w-0 flex-1">
    <PanelTitle title="Finance overview" sub="A connected view of the books" />
    <div className="grid grid-cols-3 gap-1.5">{["Cash position","Receivables","Payables"].map((x,i)=><div key={x} className="rounded-sm border border-white/10 bg-white/[.035] p-2"><p className="text-[8px] text-white/35">{x}</p><p className="mt-2 font-mono text-[11px] text-white/85">— — —</p><div className="mt-2 h-px" style={{ background: accent, opacity: .65 }}/></div>)}</div>
    <div className="mt-3 grid grid-cols-[1.25fr_.75fr] gap-2">
      <div className="rounded-sm border border-white/10 p-2"><PanelTitle title="Cash movement" sub="Illustrative trend view"/><svg viewBox="0 0 220 58" className="h-12 w-full overflow-visible"><path d="M2 42 C26 38 30 14 54 23 S85 45 108 28 S145 8 165 20 S192 12 218 5" fill="none" stroke={accent} strokeWidth="2" className="screen-line"/><path d="M2 42 C26 38 30 14 54 23 S85 45 108 28 S145 8 165 20 S192 12 218 5 L218 58 L2 58Z" fill={accent} opacity=".08"/></svg></div>
      <div className="rounded-sm border border-white/10 p-2"><PanelTitle title="To review"/>{["Unmatched bank line","Draft invoice","Tax detail missing"].map(x=><div key={x} className="mb-2 flex items-center gap-1 text-[8px] text-white/55"><Dot color={accent}/>{x}</div>)}</div>
    </div>
    <div className="mt-2 flex justify-between border-t border-white/10 pt-2 text-[8px] text-white/35"><span>Posting controls</span><span>Audit trail available</span></div>
  </div></div>;
}

function EducationScreen({ accent }: { accent: string }) {
  return <div className="flex gap-3"><Sidebar accent={accent} items={["My classroom","Timetable","Attendance","Assignments","Learning","Messages"]}/><div className="min-w-0 flex-1">
    <PanelTitle title="Good morning, educator" sub="Your day at a glance · Demo institution"/>
    <div className="grid grid-cols-[1.3fr_.7fr] gap-2">
      <div className="rounded-sm border border-white/10 p-2"><PanelTitle title="Today’s timetable"/>{["09:00  Mathematics · Room 04","10:30  Science · Lab 02","12:00  Design · Studio"].map((x,i)=><div key={x} className="mb-1.5 flex gap-2 rounded-sm bg-white/[.035] p-2 text-[8px] text-white/65"><span style={{ color: accent }}>0{i+1}</span>{x}</div>)}</div>
      <div className="rounded-sm border border-white/10 p-2"><PanelTitle title="Class pulse"/><div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-full border-[5px] text-center font-mono text-[9px]" style={{ borderColor: accent + "55", borderTopColor: accent, color: accent }}>TODAY</div><p className="mt-2 text-center text-[8px] text-white/35">Attendance review</p></div>
    </div>
    <div className="mt-2 rounded-sm border border-white/10 p-2"><PanelTitle title="Recent learning activity"/>{["Assignment feedback","New class material","Guardian acknowledgement"].map(x=><div key={x} className="mb-2 flex items-center justify-between text-[8px] text-white/55"><span>{x}</span><Tag color={accent}>Updated</Tag></div>)}</div>
  </div></div>;
}

function MobilityScreen({ accent }: { accent: string }) {
  return <div className="flex gap-3"><div className="min-w-0 flex-1">
    <PanelTitle title="Fleet command" sub="Operational map · Illustrative routes"/>
    <div className="relative h-[142px] overflow-hidden rounded-sm border border-white/10 bg-[#192b2a]">
      <svg viewBox="0 0 360 160" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-40"><path d="M0 35 L95 20 L152 55 L220 18 L360 40 M0 95 L75 75 L135 110 L215 80 L360 120 M40 0 L55 160 M150 0 L170 160 M275 0 L250 160" stroke="#d6e3d7" strokeWidth="1" fill="none"/><path d="M-10 142 C60 95 86 126 142 70 S248 80 365 12" stroke={accent} strokeWidth="2.5" strokeDasharray="6 4" fill="none" className="screen-route"/></svg>
      <span className="absolute left-[17%] top-[52%] h-3 w-3 rounded-full border-2 border-white bg-[#d9a56f] shadow-[0_0_0_5px_rgba(217,165,111,.15)]"/>
      <span className="screen-pulse absolute left-[52%] top-[37%] h-3 w-3 rounded-full border-2 border-white shadow-[0_0_0_5px_rgba(255,255,255,.12)]" style={{ background: accent }}/>
      <span className="absolute right-[14%] top-[18%] h-3 w-3 rounded-full border-2 border-white bg-[#94b8a1]"/>
      <span className="absolute bottom-2 left-2 rounded-sm bg-black/35 px-2 py-1 font-mono text-[8px] text-white/60">ZONE / NORTH SECTOR</span>
      <span className="absolute right-2 top-2 rounded-sm bg-black/35 px-2 py-1 text-[8px] text-white/55">Map layers · 03</span>
    </div>
    <div className="mt-2 flex flex-wrap gap-1.5"><Tag color={accent}>On route</Tag><Tag color="#e7c77d">Needs review</Tag><Tag color="#a9c9ff">Signal stale</Tag></div>
  </div><div className="w-[30%] shrink-0"><PanelTitle title="Dispatch queue" sub="Priority exceptions"/>{["Late arrival","Vehicle service","Reassignment"].map((x,i)=><div key={x} className="mb-2 rounded-sm border border-white/10 p-2"><Dot color={[accent,"#e7c77d","#b7c5ff"][i]}/><p className="mt-1 text-[9px] text-white/75">{x}</p><p className="mt-1 text-[8px] text-white/30">Review details →</p></div>)}</div></div>;
}

function CivicScreen({ accent }: { accent: string }) {
  return <div className="overflow-hidden rounded-sm border border-white/10 bg-[#f0eee8] text-[#252337]">
    <div className="flex items-center justify-between border-b border-[#252337]/10 px-3 py-2"><div className="flex items-center gap-2"><span className="h-4 w-4 rounded-sm" style={{ background: accent }}/><span className="text-[9px] font-semibold">CITY SERVICES</span></div><div className="flex gap-2 text-[8px] text-[#55536b]"><span>Services</span><span>Residents</span><span>Contact</span><span className="rounded border border-[#252337]/20 px-1">A+</span></div></div>
    <div className="grid grid-cols-[1.05fr_.95fr] gap-2 px-3 py-4">
      <div className="flex flex-col justify-center"><p className="text-[8px] uppercase tracking-[.16em]" style={{ color: "#76668f" }}>Your city. Your services.</p><p className="mt-2 font-serif text-lg leading-tight">Information and support, made easier to find.</p><p className="mt-2 max-w-[180px] text-[8px] leading-4 text-[#666274]">A task-first public information experience with clear paths to essential services.</p><div className="mt-3 inline-flex w-fit items-center gap-1 rounded-sm px-2 py-1 text-[8px] text-white" style={{ background: "#302b43" }}>Explore services ↗</div></div>
      <div className="relative min-h-[110px] overflow-hidden rounded-sm" style={{ background: "linear-gradient(145deg," + accent + "55,#363047)" }}><div className="absolute -right-3 -top-4 h-24 w-24 rounded-full border border-white/40"/><div className="absolute right-4 top-6 h-20 w-20 rounded-full border border-white/30"/><div className="absolute bottom-3 left-3 right-3 flex justify-between text-[8px] text-white/80"><span>Community</span><span>Public access</span></div></div>
    </div>
    <div className="grid grid-cols-3 gap-1.5 px-3 pb-3">{["Residents","Businesses","Public records"].map(x=><div key={x} className="rounded-sm border border-[#252337]/10 bg-white p-2 text-[8px] font-semibold">{x}<span className="float-right" style={{ color: "#76668f" }}>↗</span></div>)}</div>
  </div>;
}

function RfpScreen({ accent }: { accent: string }) {
  return <div className="flex gap-3"><div className="w-[38%] shrink-0 rounded-sm border border-white/10 bg-[#e9e6dc] p-2 text-[#34372f]"><div className="flex items-center justify-between border-b border-[#34372f]/15 pb-2"><span className="text-[8px] font-semibold">SOLICITATION.PDF</span><span className="font-mono text-[7px]">12 PAGES</span></div><div className="mt-3 space-y-2">{[0,1,2,3,4,5,6].map(i=><div key={i} className="h-1 rounded-full bg-[#777b6e]/25" style={{ width: (65 + (i * 13) % 34) + "%" }}/>)}</div><div className="mt-4 rounded-sm border border-[#89744a]/30 bg-[#c2a96d]/20 p-2"><p className="text-[7px] uppercase tracking-wider">Highlighted clause</p><p className="mt-1 text-[8px] leading-3">Mandatory response evidence and delivery requirements.</p></div><p className="mt-3 text-right font-mono text-[7px] text-[#55594e]">PAGE / 07</p></div>
    <div className="min-w-0 flex-1"><PanelTitle title="Requirement workspace" sub="Evidence-linked extraction · sample pack"/>{[["Submission instructions","Mandatory"],["Relevant project experience","Evidence needed"],["Security approach","Review"],["Pricing response","Required"],["Contract terms","Legal review"]].map(([x,y],i)=><div key={x} className="mb-1.5 flex items-center gap-2 rounded-sm border border-white/10 px-2 py-2"><span className="font-mono text-[8px]" style={{ color: accent }}>0{i+1}</span><span className="min-w-0 flex-1 text-[8px] text-white/75">{x}</span><Tag color={i===0||i===3?accent:"#d7b9ff"}>{y}</Tag></div>)}
    <div className="mt-2 flex items-center justify-between text-[8px] text-white/30"><span>Source trace attached</span><span>Reviewer confirmation required</span></div></div></div>;
}

function AgentScreen({ accent }: { accent: string }) {
  const nodes = [{ x: 8, y: 45, label: "INTAKE" }, { x: 39, y: 18, label: "RESEARCH" }, { x: 39, y: 72, label: "ANALYSE" }, { x: 72, y: 45, label: "APPROVE" }];
  return <div className="flex gap-3"><div className="min-w-0 flex-1"><PanelTitle title="Workflow orchestration" sub="Run / 0041 · Human approval enabled"/>
    <div className="relative h-[135px] overflow-hidden rounded-sm border border-white/10 bg-[#171c2c]">
      <svg viewBox="0 0 340 150" preserveAspectRatio="none" className="absolute inset-0 h-full w-full"><path d="M44 76 L130 42 L130 110 L245 76" stroke={accent} strokeWidth="1.4" strokeDasharray="4 4" fill="none" opacity=".8"/><path d="M245 76 L305 76" stroke="white" strokeWidth="1" fill="none" opacity=".2"/></svg>
      {nodes.map((n,i)=><div key={n.label} className="absolute w-[24%] -translate-y-1/2 rounded-sm border bg-[#252b42] p-2 text-center shadow-lg" style={{ left: n.x + "%", top: n.y + "%", borderColor: accent + (i===3?"aa":"55") }}><Dot color={i===3?"#e9ca83":accent}/><p className="mt-1 text-[8px] font-semibold tracking-wide text-white/80">{n.label}</p><p className="mt-1 text-[7px] text-white/30">{i===3?"Awaiting review":"Completed"}</p></div>)}
    </div>
  </div><div className="w-[28%] shrink-0"><PanelTitle title="Run trace"/>{["Input validated","Agent invoked","Output checked","Approval gate"].map((x,i)=><div key={x} className="mb-3 flex gap-2"><Dot color={i===3?"#e9ca83":accent}/><div><p className="text-[8px] text-white/70">{x}</p><p className="mt-1 text-[7px] text-white/30">Event recorded</p></div></div>)}</div></div>;
}

function CrmScreen({ accent }: { accent: string }) {
  const columns = [["New","Inbound request","Partner referral"],["Qualified","Discovery call","Needs review"],["Proposal","Scope shared","Decision pending"]];
  return <div><PanelTitle title="Revenue workspace" sub="Pipeline board · Example records"/>
    <div className="grid grid-cols-3 gap-2">{columns.map((col,i)=><div key={col[0]} className="min-w-0 rounded-sm border border-white/10 bg-white/[.025] p-2"><div className="mb-2 flex items-center justify-between"><p className="text-[8px] font-semibold text-white/70">{col[0]}</p><span className="font-mono text-[7px] text-white/30">0{i+1}</span></div>{col.slice(1).map((item,j)=><div key={item} className="mb-1.5 rounded-sm border border-white/10 bg-[#1c231f] p-2"><div className="h-1 w-1/3 rounded" style={{ background: accent }}/><p className="mt-2 text-[8px] text-white/75">{item}</p><div className="mt-2 flex items-center justify-between"><span className="text-[7px] text-white/30">Owner · Team</span><span className="h-3 w-3 rounded-full border border-white/20"/></div></div>)}</div>)}</div>
    <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2 text-[8px] text-white/35"><span>Priority queue</span><span>Next best action · Explainable</span></div>
  </div>;
}

function HealthScreen({ accent }: { accent: string }) {
  const times = ["09:00","09:30","10:00","10:30","11:00"];
  return <div className="flex gap-3"><Sidebar accent={accent} items={["Schedule","Appointments","Rooms","Team","Reports"]}/><div className="min-w-0 flex-1"><PanelTitle title="Clinic operations" sub="Daily schedule · Synthetic appointments"/>
    <div className="grid grid-cols-[42px_repeat(3,1fr)] gap-1 text-[8px]">{["Room 01","Room 02","Room 03"].map((r,i)=><div key={r} className="text-center text-[8px] text-white/35">{r}</div>)}
      {times.map((t,i)=><div key={t} className="contents"><div className="py-2 text-white/35">{t}</div>{[0,1,2].map(j=><div key={j} className="flex min-h-7 items-center rounded-sm border-l-2 px-1.5" style={{ borderColor: (i+j)%3===0?"#e7c77d":accent, background: (i+j)%3===0?"rgba(231,199,125,.08)":accent+"12" }}><span className="truncate text-[7px] text-white/60">{(i+j)%3===0?"Review":"Visit block"}</span></div>)}</div>)}
    </div>
    <div className="mt-3 flex flex-wrap gap-1.5"><Tag color={accent}>Confirmed</Tag><Tag color="#e7c77d">Needs attention</Tag><Tag color="#b7c5ff">Available slot</Tag></div>
  </div></div>;
}

function RiskScreen({ accent }: { accent: string }) {
  return <div className="grid grid-cols-[.8fr_1.2fr] gap-3"><div><PanelTitle title="Investigation queue" sub="Prioritised review"/>{["Unusual velocity","Location mismatch","New device pattern","Manual referral"].map((x,i)=><div key={x} className="mb-2 rounded-sm border border-white/10 p-2"><div className="flex items-center justify-between"><Dot color={i===0?accent:"#e7c77d"}/><span className="text-[7px] text-white/30">CASE 0{i+1}</span></div><p className="mt-1 text-[8px] text-white/70">{x}</p></div>)}</div>
    <div><PanelTitle title="Case review" sub="Example event · Analyst decision required"/><div className="rounded-sm border border-white/10 bg-white/[.025] p-3"><Tag color={accent}>Flagged for review</Tag><p className="mt-3 text-[10px] font-semibold text-white/85">Transaction pattern requires context</p><div className="mt-3 grid grid-cols-2 gap-2">{["Event source","Time window","Related activity","Rule version"].map(x=><div key={x} className="border-t border-white/10 pt-2"><p className="text-[7px] text-white/35">{x}</p><p className="mt-1 text-[8px] text-white/65">Review detail</p></div>)}</div><div className="mt-3 border-t border-white/10 pt-2"><p className="text-[8px] text-white/50">Analyst notes</p><Bar width="88%" color="rgba(255,255,255,.16)"/><Bar width="68%" color="rgba(255,255,255,.16)"/></div></div></div>
  </div>;
}

function CopilotScreen({ accent }: { accent: string }) {
  return <div className="grid grid-cols-[.8fr_1.2fr] gap-3"><div className="border-r border-white/10 pr-2"><PanelTitle title="Knowledge sources"/>{["People handbook","Product guide","Service policy","Support archive"].map((x,i)=><div key={x} className="mb-2 flex items-center gap-1.5 text-[8px] text-white/55"><span className="flex h-4 w-4 items-center justify-center rounded-sm" style={{ background: accent+"20", color: accent }}>↗</span>{x}</div>)}</div>
    <div><PanelTitle title="Knowledge assistant" sub="Grounded answer · Sample conversation"/><div className="ml-auto max-w-[85%] rounded-sm bg-white/[.07] p-2 text-[8px] text-white/60">Where can I find the current onboarding policy?</div><div className="mt-2 rounded-sm border border-white/10 p-2.5"><div className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full" style={{ background: accent+"35" }}/><p className="text-[8px] font-semibold text-white/75">Response with sources</p></div><p className="mt-2 text-[8px] leading-4 text-white/55">The current process is described in the onboarding guide. Check the access and equipment sections for role-specific steps.</p><div className="mt-2 flex flex-wrap gap-1"><Tag color={accent}>People handbook · section 02</Tag><Tag color={accent}>Reviewed source</Tag></div></div><div className="mt-2 flex items-center justify-between text-[8px] text-white/35"><span>Was this useful?</span><span>Escalate to a person ↗</span></div></div>
  </div>;
}

function SupplyScreen({ accent }: { accent: string }) {
  return <div><PanelTitle title="Supply network control" sub="Shipment and supplier visibility · Sample network"/>
    <div className="grid grid-cols-[1fr_.72fr] gap-2">
      <div className="relative h-[130px] overflow-hidden rounded-sm border border-white/10 bg-[#242a22]">
        <svg viewBox="0 0 320 150" className="absolute inset-0 h-full w-full"><path d="M15 100 L82 42 L152 68 L220 28 L300 86" stroke="rgba(255,255,255,.14)" strokeWidth="20" fill="none"/><path d="M15 100 L82 42 L152 68 L220 28 L300 86" stroke={accent} strokeWidth="1.6" strokeDasharray="5 5" fill="none" className="screen-route"/>{[[15,100],[82,42],[152,68],[220,28],[300,86]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="6" fill={accent} opacity=".15"/><circle cx={x} cy={y} r="2.5" fill={accent}/></g>)}</svg>
        <span className="absolute bottom-2 left-2 rounded-sm bg-black/35 px-2 py-1 text-[7px] text-white/50">NETWORK / LANE VIEW</span>
      </div>
      <div className="rounded-sm border border-white/10 p-2"><PanelTitle title="Exceptions"/>{["Inbound delay","Supplier update","Inventory shortfall"].map((x,i)=><div key={x} className="mb-2 flex items-start gap-1.5"><Dot color={i===0?accent:"#e7c77d"}/><span className="text-[8px] text-white/60">{x}</span></div>)}</div>
    </div>
    <div className="mt-2 flex flex-wrap gap-1.5">{["Origin","In transit","Facility","Destination"].map((x,i)=><div key={x} className="flex items-center gap-1 text-[8px] text-white/40"><span className="h-1.5 w-1.5 rounded-full" style={{ background: i===2?accent:"rgba(255,255,255,.25)" }}/>{x}{i!==3&&<span className="ml-1 text-white/20">→</span>}</div>)}</div>
  </div>;
}

function WorkflowScreen({ accent }: { accent: string }) {
  return <div><PanelTitle title="Automation canvas" sub="New workflow · Draft version"/>
    <div className="relative grid grid-cols-4 gap-2 py-5">
      <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full"><path d="M58 50 C95 50 95 50 128 50 S210 50 248 50 S330 50 368 50 S440 50 465 50" stroke={accent} strokeWidth="2" strokeDasharray="5 5" fill="none" className="screen-route"/></svg>
      {["TRIGGER","VALIDATE","CONDITION","ACTION"].map((x,i)=><div key={x} className="relative z-10 rounded-sm border bg-[#202635] p-2 text-center" style={{ borderColor: i===2?"#e7c77d":accent+"55" }}><span className="mx-auto flex h-6 w-6 items-center justify-center rounded-sm text-[11px]" style={{ background: accent+"20", color: accent }}>{["⚡","✓","◇","↗"][i]}</span><p className="mt-2 text-[7px] font-semibold tracking-wide text-white/75">{x}</p><p className="mt-1 text-[7px] text-white/35">{["New event","Check input","If / else","Create record"][i]}</p></div>)}
    </div>
    <div className="flex items-center justify-between border-t border-white/10 pt-2"><span className="text-[8px] text-white/35">Dry-run before publishing</span><Tag color={accent}>Approval required</Tag></div>
  </div>;
}

function AnalyticsScreen({ accent }: { accent: string }) {
  return <div className="flex gap-3"><Sidebar accent={accent} items={["Overview","Revenue","Customers","Operations","Reports"]}/><div className="min-w-0 flex-1"><PanelTitle title="Executive pulse" sub="Decision dashboard · Illustrative data"/>
    <div className="grid grid-cols-3 gap-1.5">{["Growth","Retention","Efficiency"].map(x=><div key={x} className="rounded-sm border border-white/10 p-2"><p className="text-[7px] text-white/40">{x}</p><p className="mt-2 font-mono text-[11px] text-white/80">— —</p><Bar width="75%" color={accent}/></div>)}</div>
    <div className="mt-2 grid grid-cols-[1.35fr_.65fr] gap-2"><div className="rounded-sm border border-white/10 p-2"><PanelTitle title="Performance trend" sub="Illustrative signal only"/><svg viewBox="0 0 220 75" className="h-14 w-full"><path d="M0 58 L35 48 L70 51 L105 28 L140 38 L175 16 L220 23" stroke={accent} fill="none" strokeWidth="2"/><path d="M0 58 L35 48 L70 51 L105 28 L140 38 L175 16 L220 23 L220 75 L0 75Z" fill={accent} opacity=".08"/></svg></div><div className="rounded-sm border border-white/10 p-2"><PanelTitle title="Segments"/>{["Core","New","Returning"].map((x,i)=><div key={x} className="mb-2"><div className="mb-1 flex justify-between text-[7px] text-white/45"><span>{x}</span><span>—</span></div><Bar width={["84%","56%","68%"][i]} color={accent}/></div>)}</div></div>
  </div></div>;
}

function TalentScreen({ accent }: { accent: string }) {
  return <div className="grid grid-cols-[.9fr_1.1fr] gap-3"><div><PanelTitle title="Hiring pipeline" sub="Role / Product manager"/>{["Applied","Screening","Interview","Decision"].map((x,i)=><div key={x} className="mb-2 flex items-center justify-between rounded-sm border border-white/10 p-2"><span className="text-[8px] text-white/60">{x}</span><span className="h-1.5 w-1.5 rounded-full" style={{ background: i===2?accent:"rgba(255,255,255,.2)" }}/></div>)}</div><div><PanelTitle title="Structured scorecard" sub="Candidate A · Illustrative profile"/><div className="rounded-sm border border-white/10 p-3"><div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full text-[9px]" style={{ color: accent, background: accent+"20" }}>CA</span><div><p className="text-[9px] text-white/80">Candidate A</p><p className="mt-1 text-[7px] text-white/35">Interview feedback pending</p></div></div><div className="mt-3 space-y-2">{["Product judgement","Communication","Role-specific skills"].map(x=><div key={x}><div className="mb-1 text-[8px] text-white/55">{x}</div><Bar width="100%" color="rgba(255,255,255,.1)"/></div>)}</div><div className="mt-3 border-t border-white/10 pt-2 text-[8px] text-white/35">Evidence-led review · Human decision</div></div></div></div>;
}

function SecurityScreen({ accent }: { accent: string }) {
  return <div className="grid grid-cols-[.85fr_1.15fr] gap-3"><div><PanelTitle title="Security queue" sub="Alert triage"/>{["Identity anomaly","Endpoint signal","Cloud policy event","Access review"].map((x,i)=><div key={x} className="mb-2 flex items-center gap-2 rounded-sm border border-white/10 p-2"><Dot color={i===0?accent:"#e7c77d"}/><span className="text-[8px] text-white/60">{x}</span></div>)}</div><div><PanelTitle title="Incident response" sub="Investigation timeline · Example event"/><div className="relative ml-1 border-l border-white/15 pl-4">{["Alert received","Analyst triage","Incident assigned","Containment review"].map((x,i)=><div key={x} className="relative mb-4"><span className="absolute -left-[21px] top-0.5 h-2 w-2 rounded-full border" style={{ background: i===3?"transparent":accent, borderColor: accent }}/><p className="text-[9px] text-white/70">{x}</p><p className="mt-1 text-[7px] text-white/35">{i===3?"Awaiting approval":"Recorded in incident log"}</p></div>)}</div><div className="rounded-sm border border-white/10 p-2 text-[8px] text-white/45">Response playbook · Owner · Audit trail</div></div></div>;
}

function CityScreen({ accent }: { accent: string }) {
  return <div className="flex gap-3"><div className="min-w-0 flex-1"><PanelTitle title="City systems view" sub="Spatial operations · Illustrative district"/>
    <div className="relative h-[145px] overflow-hidden rounded-sm border border-white/10 bg-[#1c3038]"><svg viewBox="0 0 360 170" className="absolute inset-0 h-full w-full"><path d="M-10 20 L370 140 M40 -10 L300 190 M-10 120 L370 45 M120 -10 L130 185 M280 -10 L240 185" stroke="rgba(255,255,255,.15)" strokeWidth="6" fill="none"/><path d="M15 90 C85 35 105 140 165 86 S255 35 345 70" stroke={accent} strokeWidth="2" fill="none" strokeDasharray="4 4"/>{[[70,55],[165,85],[265,53],[300,125],[115,135]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="9" fill={accent} opacity=".12"/><circle cx={x} cy={y} r="3" fill={accent}/></g>)}</svg><span className="absolute bottom-2 left-2 rounded-sm bg-black/35 px-2 py-1 font-mono text-[7px] text-white/50">DISTRICT / 04 · DEMO LAYER</span></div>
  </div><div className="w-[28%] shrink-0"><PanelTitle title="Map layers"/>{["Mobility","Utilities","Environment","Public assets"].map((x,i)=><div key={x} className="mb-3 flex items-center gap-1.5 text-[8px] text-white/60"><span className="flex h-3 w-3 items-center justify-center rounded-[2px] border" style={{ borderColor: accent+"80", color: accent }}>{i<3?"✓":""}</span>{x}</div>)}<div className="mt-3 border-t border-white/10 pt-2 text-[7px] leading-4 text-white/30">Source time and owner shown per layer</div></div></div>;
}

function FinanceScreen({ accent }: { accent: string }) {
  return <div className="flex gap-3"><Sidebar accent={accent} items={["My money","Transactions","Budgets","Goals","Scenarios"]}/><div className="min-w-0 flex-1"><PanelTitle title="Your money, in context" sub="Personal finance planner · Sample profile"/>
    <div className="grid grid-cols-[1fr_.85fr] gap-2"><div className="rounded-sm border border-white/10 p-2"><p className="text-[8px] text-white/40">AVAILABLE THIS MONTH</p><p className="mt-2 font-mono text-[11px] text-white/85">₹ — — —</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[64%] rounded-full" style={{ background: accent }}/></div><p className="mt-2 text-[7px] text-white/35">Committed · Flexible · Buffer</p></div><div className="rounded-sm border border-white/10 p-2"><PanelTitle title="Goal progress"/><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-[5px] text-[8px]" style={{ borderColor: accent+"55", borderTopColor: accent, color: accent }}>GOAL</div><p className="mt-2 text-center text-[7px] text-white/35">Your target, your pace</p></div></div>
    <div className="mt-2 rounded-sm border border-white/10 p-2"><PanelTitle title="Spending rhythm" sub="Illustrative category view"/>{["Home","Food","Transport"].map((x,i)=><div key={x} className="mb-2 grid grid-cols-[60px_1fr_18px] items-center gap-2"><span className="text-[8px] text-white/45">{x}</span><div className="h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: ["78%","52%","35%"][i], background: accent }}/></div><span className="text-[7px] text-white/30">—</span></div>)}</div>
  </div></div>;
}

function ProductScreen({ project, accent }: { project: Project; accent: string }) {
  switch (project.visual) {
    case "ledger": return <LedgerScreen accent={accent}/>;
    case "education": return <EducationScreen accent={accent}/>;
    case "mobility": return <MobilityScreen accent={accent}/>;
    case "civic": return <CivicScreen accent={accent}/>;
    case "document": return <RfpScreen accent={accent}/>;
    case "agents": return <AgentScreen accent={accent}/>;
    case "crm": return <CrmScreen accent={accent}/>;
    case "health": return <HealthScreen accent={accent}/>;
    case "risk": return <RiskScreen accent={accent}/>;
    case "copilot": return <CopilotScreen accent={accent}/>;
    case "supply": return <SupplyScreen accent={accent}/>;
    case "workflow": return <WorkflowScreen accent={accent}/>;
    case "analytics": return <AnalyticsScreen accent={accent}/>;
    case "talent": return <TalentScreen accent={accent}/>;
    case "security": return <SecurityScreen accent={accent}/>;
    case "city": return <CityScreen accent={accent}/>;
    case "finance": return <FinanceScreen accent={accent}/>;
    default: return <LedgerScreen accent={accent}/>;
  }
}

export function ProjectArt({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.visual === "servertra") {
    return <div className={"relative isolate overflow-hidden rounded-[3px] border border-[#123b32]/25 bg-[#f6f3eb] " + (compact ? "h-32" : "h-56 md:h-72")}>
      <div className="absolute inset-y-0 right-0 w-[64%]"><img src="https://servertra.com/img/hero/hero-arches-1200.webp" alt="Original Servertra website hero artwork" className="h-full w-full object-cover object-center" loading="lazy"/></div>
      <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-[#123b32] via-[#123b32]/95 to-[#123b32]/0"/>
      <div className="absolute left-[7%] top-[16%] max-w-[62%]"><p className="font-mono text-[9px] tracking-[.2em] text-[#d7c28c]">LIVE WEBSITE / SERVERTRA</p><p className={"mt-3 font-serif leading-[.98] tracking-[-.055em] text-[#f6f3eb] " + (compact ? "text-xl" : "text-3xl md:text-4xl")}>Build.<br/>Comply.<br/>Fund. Grow.</p>{!compact && <p className="mt-3 max-w-[250px] text-[10px] leading-5 text-[#f6f3eb]/70">A unified advisory and technology partner for businesses across India.</p>}</div>
      <div className="absolute bottom-3 left-[7%] font-mono text-[9px] tracking-[.15em] text-[#f6f3eb]/50">SECURE · SWIFT · SCALABLE</div><div className="absolute bottom-3 right-4 font-mono text-[11px] text-[#123b32]/70">SERVERTRA.COM</div>
    </div>;
  }
  const palette = palettes[project.visual] ?? palettes.ledger;
  return <div className={"project-art relative isolate overflow-hidden rounded-[3px] border border-white/10 " + (compact ? "h-32" : "h-[330px] md:h-[440px]")} style={{ background: "radial-gradient(ellipse at 76% 20%, " + palette.mid + "72 0%, transparent 37%), linear-gradient(135deg," + palette.ink + ",#111513 76%)" }}>
    <div className="absolute inset-0 opacity-[.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px)", backgroundSize: "32px 32px" }}/>
    <div className="absolute inset-0 noise"/>
    <div className={"absolute left-[6%] z-10 max-w-[32%] " + (compact ? "top-[19%]" : "top-[16%]")}>
      <p className="font-mono text-[9px] tracking-[.2em]" style={{ color: palette.glow }}>PRODUCT STUDY / {project.number}</p>
      <p className={"mt-3 leading-[1.02] tracking-[-.06em] text-white/95 " + (compact ? "text-sm" : "text-3xl md:text-5xl")}>{project.title}<span style={{ color: palette.glow }}>.</span></p>
      {!compact && <p className="mt-4 max-w-[220px] text-[10px] leading-5 text-white/45">{project.category}</p>}
      {!compact && <div className="mt-7 flex items-center gap-2"><span className="h-px w-8" style={{ background: palette.glow }}/><span className="font-mono text-[9px] tracking-[.15em] text-white/35">INTERFACE / SYSTEM / FLOW</span></div>}
    </div>
    <ScreenFrame label={project.title.toUpperCase() + " / WORKSPACE"} accent={palette.glow}><ProductScreen project={project} accent={palette.glow}/></ScreenFrame>
    <div className="absolute bottom-3 left-[6%] font-mono text-[8px] tracking-[.16em] text-white/25">AN EXPLORATORY PRODUCT DESIGN / SAMPLE DATA</div>
    <div className="absolute bottom-3 right-4 font-mono text-[10px] text-white/30">AJ / {project.number}</div>
    <div className="absolute right-[8%] top-[7%] h-16 w-16 rounded-full border opacity-20 screen-orbit" style={{ borderColor: palette.glow }}/>
  </div>;
}
