import type { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";
export const metadata: Metadata = { title: "Approach" };
const steps = [
  ["01","Discover","Get close to the people and process. Understand the current workflow, incentives, constraints and failure points."],
  ["02","Define","Turn observations into a clear problem statement, measurable outcomes and explicit assumptions."],
  ["03","Design","Map journeys, prioritise requirements and create a solution that fits the operating context."],
  ["04","Prototype","Make the riskiest part tangible. Test the workflow before investing in full implementation."],
  ["05","Deliver","Align stakeholders and engineering around scope, dependencies, quality and rollout."],
  ["06","Iterate","Use feedback and evidence to improve the product and its operating model."]
];
export default function ApproachPage() {
 return <div className="container-shell py-20 md:py-28"><p className="eyebrow">A PRACTICAL OPERATING MODEL</p><h1 className="display-title mt-6 max-w-5xl">Clarity before <span className="text-[#c4f36a]">complexity.</span></h1><p className="mt-8 max-w-2xl text-base leading-8 text-white/50">Forward-deployed product work starts with context. The goal is not to force a solution into a business, but to understand how the work happens and build what makes it better.</p><div className="mt-20">{steps.map(([n,t,d])=><section key={n} className="grid gap-5 border-t border-white/15 py-8 md:grid-cols-[100px_1fr_1fr]"><span className="font-mono text-sm text-[#c4f36a]">{n} / 06</span><h2 className="text-3xl tracking-[-.05em]">{t}</h2><div><p className="max-w-xl text-sm leading-7 text-white/50">{d}</p><ArrowDownRight className="mt-5 text-white/25"/></div></section>)}</div></div>;
}