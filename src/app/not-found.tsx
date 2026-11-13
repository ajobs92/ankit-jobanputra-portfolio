import Link from "next/link";
export default function NotFound() {
  return <div className="container-shell py-32"><p className="eyebrow">404 / NOT FOUND</p><h1 className="mt-6 max-w-3xl text-5xl leading-tight tracking-[-.07em] md:text-7xl">This page took a different route.</h1><p className="mt-6 max-w-lg text-sm leading-7 text-white/50">The page may have moved, or the link may be incomplete.</p><Link href="/" className="mt-8 inline-block text-sm text-[#d3bd91]">Return home →</Link></div>;
}