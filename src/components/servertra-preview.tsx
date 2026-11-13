const home = "https://servertra.com";
const image = (path: string) => `https://servertra.com/${path}`;

const journeys = [
  {
    number: "01",
    title: "Government scheme explorer",
    description: "Central and state support pathways, organised for business discovery.",
    href: `${home}/government-schemes`,
    image: image("img/pages/parliament-830.webp"),
    alt: "Parliament of India, used on the government schemes page"
  },
  {
    number: "02",
    title: "Eligibility checker",
    description: "A preliminary business-profile journey to identify schemes worth reviewing.",
    href: `${home}/eligibility-checker`,
    image: image("img/pages/eligibility-860.webp"),
    alt: "Eligibility checklist artwork from the Servertra website"
  },
  {
    number: "03",
    title: "IT solutions",
    description: "Websites, apps, SaaS platforms, automation and digital transformation.",
    href: `${home}/it-solutions`,
    image: image("img/pages/it-hero-1030.webp"),
    alt: "IT solutions hero artwork from the Servertra website"
  }
];

export function ServertraPreview() {
  return <section className="overflow-hidden rounded-[4px] border border-[#d9dfd2] bg-[#f6f3eb] text-[#18271f] shadow-[0_24px_80px_rgba(0,0,0,.24)]">
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#123b32]/10 px-5 py-4 md:px-7">
      <a href={home} target="_blank" rel="noreferrer" className="flex items-center gap-3">
        <img src={image("assets/logo-wordmark-CfLlV2qe.webp")} alt="Servertra" className="h-10 w-auto object-contain" />
        <span className="text-sm font-semibold tracking-tight text-[#123b32]">Servertra Advisory</span>
      </a>
      <nav aria-label="Servertra website preview navigation" className="hidden items-center gap-5 text-[11px] font-medium text-[#315246] lg:flex">
        <a href={`${home}/services`} target="_blank" rel="noreferrer" className="hover:text-[#9a7a35]">Services</a>
        <a href={`${home}/government-schemes`} target="_blank" rel="noreferrer" className="hover:text-[#9a7a35]">Government Schemes</a>
        <a href={`${home}/it-solutions`} target="_blank" rel="noreferrer" className="hover:text-[#9a7a35]">IT Solutions</a>
        <a href={`${home}/about`} target="_blank" rel="noreferrer" className="hover:text-[#9a7a35]">About</a>
      </nav>
      <a href={`${home}/contact`} target="_blank" rel="noreferrer" className="rounded-full bg-[#123b32] px-4 py-2.5 text-[10px] font-semibold text-white transition hover:bg-[#245b48]">Enquire now ↗</a>
    </div>

    <div className="grid lg:grid-cols-[.85fr_1.15fr]">
      <div className="flex flex-col justify-center px-6 py-9 md:px-9 md:py-12">
        <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#8f794b]">Independent business advisory</p>
        <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-.045em] text-[#123b32] md:text-5xl">Build. Comply.<br/>Fund. Grow.</h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-[#4d5f55]">A unified advisory and technology partner for businesses and entrepreneurs across India.</p>
        <div className="mt-7 flex flex-wrap gap-2">
          <a href={`${home}/services`} target="_blank" rel="noreferrer" className="rounded-full bg-[#123b32] px-4 py-3 text-[10px] font-semibold text-white hover:bg-[#245b48]">Explore our services ↗</a>
          <a href={`${home}/government-schemes`} target="_blank" rel="noreferrer" className="rounded-full border border-[#123b32]/25 px-4 py-3 text-[10px] font-semibold text-[#123b32] hover:bg-[#123b32]/5">Find government schemes ↗</a>
        </div>
      </div>
      <div className="relative min-h-[250px] overflow-hidden bg-[#e8e1d2] md:min-h-[340px]">
        <img src={image("img/hero/hero-arches-1200.webp")} alt="Original Servertra homepage hero artwork showing architectural arches and a growth motif" className="absolute inset-0 h-full w-full object-cover" loading="lazy"/>
        <div className="absolute bottom-5 right-5 rounded-sm border border-white/60 bg-[#f6f3eb]/90 px-4 py-3 text-right shadow-lg backdrop-blur-sm">
          <p className="font-serif text-xl leading-none text-[#123b32]">Servertra</p>
          <p className="mt-1 text-[8px] uppercase tracking-[.18em] text-[#52665b]">Advisory Pvt. Ltd.</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 border-y border-[#123b32]/10 bg-white/45 md:grid-cols-4">
      {[["36","States & UTs"],["18","Schemes listed"],["8","Official sources"],["6","Service categories"]].map(([value,label])=><div key={label} className="border-b border-r border-[#123b32]/10 px-5 py-4 last:border-r-0 md:border-b-0">
        <p className="font-serif text-2xl text-[#123b32]">{value}</p>
        <p className="mt-1 text-[9px] uppercase tracking-[.12em] text-[#68766d]">{label}</p>
      </div>)}
    </div>

    <div className="p-5 md:p-7">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#8f794b]">Explore the platform</p>
          <h3 className="mt-2 font-serif text-2xl tracking-[-.03em] text-[#123b32]">Three key digital journeys</h3>
        </div>
        <a href={home} target="_blank" rel="noreferrer" className="text-[10px] font-semibold text-[#123b32] underline decoration-[#b99a57] underline-offset-4">Visit the live website ↗</a>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {journeys.map(item=><a key={item.number} href={item.href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-sm border border-[#123b32]/10 bg-white/70 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="h-32 overflow-hidden bg-[#e9e5d9]">
            <img src={item.image} alt={item.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy"/>
          </div>
          <div className="p-4">
            <p className="font-mono text-[9px] text-[#9a7a35]">{item.number} / SERVERTRA</p>
            <h4 className="mt-2 text-sm font-semibold text-[#123b32]">{item.title} ↗</h4>
            <p className="mt-2 text-[11px] leading-5 text-[#637168]">{item.description}</p>
          </div>
        </a>)}
      </div>
      <p className="mt-5 text-[9px] leading-5 text-[#7c887f]">Portfolio preview assembled from the original visual assets and public page structure in the supplied Servertra website build. Links open the corresponding live pages.</p>
    </div>
  </section>;
}
