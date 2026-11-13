import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="mt-24 border-t border-white/10">
    <div className="container-shell grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="eyebrow">HAVE A COMPLEX PROBLEM?</p>
        <h2 className="mt-4 max-w-2xl text-4xl leading-[1.02] tracking-[-.06em] md:text-6xl">Let's turn it into a product.</h2>
        <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm text-[#c4f36a]">Start a conversation <ArrowUpRight size={15}/></Link>
      </div>
      <div className="flex flex-col gap-3 text-sm text-white/55 md:text-right">
        <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub ↗</a>
        {site.linkedin ? <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn ↗</a> : <span>LinkedIn link to be added</span>}
        <span>{site.domain}</span>
      </div>
    </div>
    <div className="container-shell flex flex-col justify-between gap-2 border-t border-white/10 py-5 text-[10px] uppercase tracking-[.14em] text-white/35 sm:flex-row">
      <span>© {new Date().getFullYear()} Ankit Jobanputra</span>
      <span>Business × Product × Engineering</span>
    </div>
  </footer>;
}
