import type { Metadata } from "next";
import { ArrowUpRight, Github } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <div className="container-shell py-20 md:py-28">
    <p className="eyebrow">CONTACT / COLLABORATION</p>
    <h1 className="display-title mt-6 max-w-5xl">Let's make something <span className="text-[#d3bd91]">matter.</span></h1>
    <p className="mt-8 max-w-2xl text-base leading-8 text-white/50">For product leadership, AI-enabled operations and digital transformation opportunities, explore my work and connect through GitHub.</p>
    <div className="mt-16 max-w-xl">
      <a href={site.github} target="_blank" rel="noreferrer" className="panel flex items-center gap-5 p-7 transition hover:border-[#d3bd91]/45">
        <Github className="text-[#d3bd91]" size={21}/>
        <div className="flex-1"><p className="font-serif text-2xl text-[#f0ece2]">GitHub</p><p className="mt-1 text-xs text-white/40">Projects, product explorations and code</p></div>
        <ArrowUpRight size={17} className="text-white/40"/>
      </a>
    </div>
    <div className="mt-10 max-w-xl border-t border-white/10 pt-6">
      <p className="eyebrow">LOCATION & AVAILABILITY</p>
      <p className="mt-3 text-sm text-white/55">Based in India. {site.availability}.</p>
    </div>
  </div>;
}
