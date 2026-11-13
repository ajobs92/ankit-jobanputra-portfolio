"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, CircleHelp, ExternalLink, Landmark, MapPin, ShieldAlert } from "lucide-react";

const states = ["Andhra Pradesh","Assam","Bihar","Delhi","Goa","Gujarat","Haryana","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Odisha","Punjab","Rajasthan","Tamil Nadu","Telangana","Uttar Pradesh","West Bengal"];
const stages = ["Idea / pre-registration","Newly registered","Operating business","Scaling / expansion"];
const sectors = ["Manufacturing","Services","Trading","Technology / software","Food processing","Other"];

type Route = { title:string; group:string; reason:string; next:string; fit:string };

export default function ServertraFundingPrototype() {
  const [state,setState] = useState("Gujarat");
  const [sector,setSector] = useState("Manufacturing");
  const [stage,setStage] = useState("Operating business");
  const [udyam,setUdyam] = useState("yes");
  const [entity,setEntity] = useState("Private limited company");
  const [turnover,setTurnover] = useState("Below ₹1 crore");
  const [submitted,setSubmitted] = useState(false);

  const routes = useMemo<Route[]>(() => {
    const result:Route[] = [];
    if (udyam === "yes") result.push({
      title:"MSME support and credit pathways",
      group:"Central-level discovery",
      reason:"You indicated that the business has Udyam registration. That makes MSME-focused support and credit information a sensible category to investigate; individual programme rules still apply.",
      next:"Confirm the activity, enterprise classification, lender requirements and current programme guidelines.",
      fit:"Profile signal"
    });
    if (sector === "Manufacturing" || sector === "Food processing") result.push({
      title:"Manufacturing and sector incentive discovery",
      group:state+" · State-level discovery",
      reason:"Your selected activity suggests reviewing state industrial, investment and sector-specific incentive information for "+state+".",
      next:"Check the relevant state department's current policy, location conditions, investment thresholds and application window.",
      fit:"Sector signal"
    });
    if (stage === "Idea / pre-registration" || stage === "Newly registered") result.push({
      title:"Startup and early-stage support discovery",
      group:"Central and state-level discovery",
      reason:"Your business stage indicates that startup recognition, incubation, seed-support and early-stage enablement information may be useful to review.",
      next:"Validate incorporation date, recognition conditions, founder criteria and whether the application window is open.",
      fit:"Stage signal"
    });
    if (sector === "Technology / software" || sector === "Services") result.push({
      title:"Digital adoption and service-business support",
      group:state+" · Sector-level discovery",
      reason:"Your activity suggests checking current digitalisation, service-sector and technology enablement programmes relevant to "+state+".",
      next:"Review eligible activities, geographic restrictions and whether support is a grant, reimbursement, subsidy or loan.",
      fit:"Activity signal"
    });
    if (result.length === 0) result.push({
      title:"General business support discovery",
      group:"Central and state-level discovery",
      reason:"Your profile is broad, so begin with business registration, enterprise classification and the official state industry portal.",
      next:"Clarify the business activity and investment plan before shortlisting any programme.",
      fit:"Initial review"
    });
    return result;
  },[state,sector,stage,udyam]);

  return <main className="container-shell py-14 md:py-20">
    <Link href="/work/servertra-funding-platform" className="mb-10 inline-flex items-center gap-2 text-xs text-white/45 hover:text-[#c4f36a]"><ArrowLeft size={14}/> Back to Servertra case study</Link>
    <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
      <section>
        <p className="eyebrow">SERVERTRA / PRODUCT CONCEPT 01</p>
        <h1 className="mt-6 max-w-xl text-5xl leading-[.98] tracking-[-.07em] md:text-7xl">Find the right <span className="text-[#c4f36a]">support pathway.</span></h1>
        <p className="mt-7 max-w-lg text-sm leading-7 text-white/55">A guided discovery prototype exploring how a business profile can organise the next research steps across central and state support programmes.</p>
        <div className="mt-8 flex items-start gap-3 border border-[#c4f36a]/25 bg-[#c4f36a]/[.05] p-4">
          <ShieldAlert size={17} className="mt-0.5 shrink-0 text-[#c4f36a]"/>
          <p className="text-xs leading-6 text-white/65">Prototype only. These are illustrative discovery pathways, not official scheme matches, eligibility decisions or funding promises. No government portal or live scheme database is connected.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="https://servertra.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#c4f36a] px-5 py-3 text-xs font-semibold text-[#111312]">Visit Servertra live <ExternalLink size={13}/></a>
          <a href="https://www.udyamregistration.gov.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs text-white/65 hover:border-white/50">Udyam portal <ExternalLink size={13}/></a>
        </div>
      </section>

      <section className="panel p-5 md:p-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div><p className="eyebrow">BUSINESS PROFILE</p><h2 className="mt-2 text-2xl tracking-[-.05em]">Tell us about the business.</h2></div>
          <span className="font-mono text-xs text-white/35">01 / 01</span>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <label className="block"><span className="mb-2 block text-xs text-white/55">Business location</span><span className="relative block"><MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/35"/><select value={state} onChange={e=>{setState(e.target.value);setSubmitted(false)}} className="w-full appearance-none border border-white/15 bg-[#111312] px-9 py-3 text-sm outline-none focus:border-[#c4f36a]">{states.map(x=><option key={x}>{x}</option>)}</select></span></label>
          <label className="block"><span className="mb-2 block text-xs text-white/55">Business activity</span><select value={sector} onChange={e=>{setSector(e.target.value);setSubmitted(false)}} className="w-full border border-white/15 bg-[#111312] px-3 py-3 text-sm outline-none focus:border-[#c4f36a]">{sectors.map(x=><option key={x}>{x}</option>)}</select></label>
          <label className="block"><span className="mb-2 block text-xs text-white/55">Business stage</span><select value={stage} onChange={e=>{setStage(e.target.value);setSubmitted(false)}} className="w-full border border-white/15 bg-[#111312] px-3 py-3 text-sm outline-none focus:border-[#c4f36a]">{stages.map(x=><option key={x}>{x}</option>)}</select></label>
          <label className="block"><span className="mb-2 block text-xs text-white/55">Legal structure</span><select value={entity} onChange={e=>{setEntity(e.target.value);setSubmitted(false)}} className="w-full border border-white/15 bg-[#111312] px-3 py-3 text-sm outline-none focus:border-[#c4f36a]">{["Proprietorship","Partnership","LLP","Private limited company","Other / not yet registered"].map(x=><option key={x}>{x}</option>)}</select></label>
          <label className="block"><span className="mb-2 block text-xs text-white/55">Udyam registration</span><select value={udyam} onChange={e=>{setUdyam(e.target.value);setSubmitted(false)}} className="w-full border border-white/15 bg-[#111312] px-3 py-3 text-sm outline-none focus:border-[#c4f36a]"><option value="yes">Yes</option><option value="no">No / not sure</option></select></label>
          <label className="block"><span className="mb-2 block text-xs text-white/55">Annual turnover (approx.)</span><select value={turnover} onChange={e=>{setTurnover(e.target.value);setSubmitted(false)}} className="w-full border border-white/15 bg-[#111312] px-3 py-3 text-sm outline-none focus:border-[#c4f36a]">{["Pre-revenue","Below ₹1 crore","₹1–5 crore","₹5–25 crore","Above ₹25 crore","Prefer not to say"].map(x=><option key={x}>{x}</option>)}</select></label>
        </div>
        <button onClick={()=>setSubmitted(true)} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c4f36a] px-5 py-4 text-xs font-semibold uppercase tracking-[.1em] text-[#111312] transition hover:bg-[#d8ff8c]">Explore possible pathways <ArrowRight size={15}/></button>
        <p className="mt-3 text-[10px] leading-5 text-white/35">No personal or business information is transmitted. This demo runs locally in your browser.</p>
      </section>
    </div>

    {submitted && <section className="mt-16 border-t border-white/15 pt-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="eyebrow">DISCOVERY OUTPUT / ILLUSTRATIVE</p><h2 className="mt-3 text-3xl tracking-[-.06em] md:text-5xl">Your research starting points.</h2></div>
        <p className="max-w-sm text-xs leading-6 text-white/40">Based on the profile you entered: {entity} · {turnover} turnover · {state}.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {routes.map((route,i)=><article key={route.title} className="panel p-6">
          <div className="flex items-center justify-between gap-3"><span className="eyebrow">{route.group}</span><span className="font-mono text-[9px] text-white/35">PATH 0{i+1}</span></div>
          <h3 className="mt-5 text-2xl tracking-[-.05em]">{route.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/55">{route.reason}</p>
          <div className="mt-5 border-t border-white/10 pt-4"><p className="text-[10px] uppercase tracking-[.12em] text-[#c4f36a]">What to verify next</p><p className="mt-2 text-xs leading-6 text-white/50">{route.next}</p></div>
          <span className="mt-5 inline-flex items-center gap-2 text-[10px] text-white/35"><CheckCircle2 size={12}/> {route.fit}</span>
        </article>)}
      </div>
      <div className="mt-7 flex items-start gap-3 border border-white/10 p-5"><CircleHelp size={17} className="mt-0.5 text-[#c4f36a]"/><p className="text-xs leading-6 text-white/50">The next product iteration would connect verified scheme records, official source links, publication dates and rule-level eligibility checks. Until those sources are integrated and reviewed, this prototype only helps organise research; it cannot confirm eligibility.</p></div>
    </section>}
    <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35"><span>SERVERTRA FUNDING INTELLIGENCE · PRODUCT CONCEPT</span><Link href="/work/servertra-funding-platform" className="text-[#c4f36a]">View case study →</Link></div>
  </main>;
}
