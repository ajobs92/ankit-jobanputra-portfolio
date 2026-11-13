"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111312]/90 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <Link href="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="text-[15px] font-semibold tracking-[.13em]">ANKIT<span className="accent-text">.</span></span>
          <span className="mt-1 text-[9px] tracking-[.19em] text-white/45">JOBANPUTRA</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map(item => <Link key={item.href} href={item.href} className="text-[12px] text-white/65 transition hover:text-[#c4f36a]">{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-[#c4f36a] px-5 py-3 text-[11px] font-semibold tracking-wide text-[#111312] transition hover:bg-[#d7ff8b] md:inline-flex">
          LET'S TALK <ArrowUpRight size={14}/>
        </Link>
        <button aria-label={open ? "Close menu" : "Open menu"} className="text-white md:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="border-t border-white/10 bg-[#151917] px-6 py-5 md:hidden">
        {[{label:"Home",href:"/"},...navigation,{label:"Contact",href:"/contact"}].map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-lg">{item.label}</Link>)}
        <p className="pt-5 text-xs text-white/40">{site.availability}</p>
      </nav>}
    </header>
  );
}
