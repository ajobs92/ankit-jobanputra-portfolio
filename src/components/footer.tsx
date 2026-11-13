import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="mt-24 border-t border-white/10">
    <div className="container-shell grid gap-10 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
      <div>
        <p className="eyebrow">OPEN TO THOUGHTFUL COLLABORATION</p>
        <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[.98] tracking-[-.04em] md:text-7xl">Let's make the complex <span className="text-[#d3bd91]">clear.</span></h2>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.14em] text-[#d3bd91]">Start a conversation <ArrowUpRight size={14}/></Link>
      </div>
      <div className="flex flex-col gap-3 text-[11px] text-white/50 md:text-right">
        <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#d3bd91] md:justify-end">GitHub <ArrowUpRight size={12}/></a>
        {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#d3bd91] md:justify-end">LinkedIn <ArrowUpRight size={12}/></a>}
        <span className="font-mono text-[9px] uppercase tracking-[.13em] text-white/30">India · {site.availability}</span>
      </div>
    </div>
    <div className="container-shell flex flex-col justify-between gap-2 border-t border-white/10 py-5 text-[9px] uppercase tracking-[.15em] text-white/30 sm:flex-row">
      <span>© {new Date().getFullYear()} Ankit Jobanputra</span>
      <span>Business · Product · Engineering</span>
    </div>
  </footer>;
}
