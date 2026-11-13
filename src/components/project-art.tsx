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

export function ProjectArt({ project, compact = false }: { project: Project; compact?: boolean }) {
  const colors = palettes[project.visual] ?? palettes.ledger;
  return <div className={`relative isolate overflow-hidden rounded-[3px] border border-white/10 ${compact ? "h-32" : "h-56 md:h-72"}`} style={{background: `radial-gradient(circle at 70% 25%, ${colors[1]} 0, transparent 35%), linear-gradient(135deg, ${colors[2]}, #121513 75%)`}}>
    <div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",backgroundSize:"32px 32px"}}/>
    <div className="absolute -right-10 top-1/2 aspect-square w-[55%] -translate-y-1/2 rounded-full border" style={{borderColor:colors[0],boxShadow:`0 0 80px ${colors[1]}55,inset 0 0 50px ${colors[1]}44`}}/>
    <div className="absolute right-[18%] top-1/2 aspect-square w-[28%] -translate-y-1/2 rounded-full border" style={{borderColor:colors[0],background:`radial-gradient(circle at 30% 30%, ${colors[0]}aa, transparent 65%)`}}/>
    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
      <div><p className="font-mono text-[9px] tracking-[.2em]" style={{color:colors[0]}}>PRODUCT STUDY / {project.number}</p><p className="mt-1 max-w-[220px] text-lg leading-tight tracking-[-.04em] text-white/90">{project.title}</p></div>
      <span className="font-mono text-[10px] text-white/45">0{project.number}</span>
    </div>
  </div>;
}
