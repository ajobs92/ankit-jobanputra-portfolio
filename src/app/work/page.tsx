import type { Metadata } from "next";
import { WorkBrowser } from "@/components/work-browser";

export const metadata: Metadata = { title: "Selected Work" };

export default function WorkPage() {
  return <div className="container-shell py-20 md:py-28">
    <p className="eyebrow">A PORTFOLIO OF PRODUCT THINKING & EXECUTION</p>
    <h1 className="display-title mt-6 max-w-5xl">Selected <span className="text-[#c4f36a]">work.</span></h1>
    <p className="mt-8 max-w-2xl text-base leading-8 text-white/50">A growing collection of business systems, AI-enabled product concepts and delivery case studies. Each project is labelled by its actual evidence and development status.</p>
    <div className="mt-16"><WorkBrowser/></div>
  </div>;
}
