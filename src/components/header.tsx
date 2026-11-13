"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/[.08] bg-[#0d100e]/90 backdrop-blur-2xl">
      <div className="container-shell flex h-[82px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Ankit Jobanputra, home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d3bd91]/40 font-serif text-xl text-[#d3bd91] transition group-hover:bg-[#d3bd91] group-hover:text-[#111312]">A</span>
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold tracking-[.16em] text-[#f0ece2]">ANKIT JOBANPUTRA</span>
            <span className="mt-1.5 font-mono text-[8px] tracking-[.18em] text-white/35">PRODUCT / SYSTEMS / DELIVERY</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 xl:flex">
          {navigation.map(item => <Link key={item.href} href={item.href} className="text-[11px] tracking-[.04em] text-white/55 transition hover:text-[#d3bd91]">{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="hidden items-center gap-2 rounded-full border border-[#d3bd91]/55 px-5 py-3 text-[9px] font-semibold tracking-[.15em] text-[#d3bd91] transition hover:bg-[#d3bd91] hover:text-[#111312] xl:inline-flex">
          LET'S TALK <ArrowUpRight size={13}/>
        </Link>
        <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="text-white xl:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="border-t border-white/10 bg-[#121713] px-6 py-5 xl:hidden">
        {[{label:"Home",href:"/"},...navigation,{label:"Contact",href:"/contact"}].map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-white/[.08] py-4 font-serif text-2xl text-white/80 transition hover:text-[#d3bd91]">{item.label}</Link>)}
        <p className="pt-5 text-[9px] uppercase tracking-[.14em] text-white/35">{site.availability}</p>
      </nav>}
    </header>
  );
}
