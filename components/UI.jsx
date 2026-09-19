export function Eyebrow({ children }) {
  return (
    <p className="eyebrow-mark font-crown text-xs uppercase tracking-[0.25em] text-violet-400">
      {children}
    </p>
  );
}

export function StatCard({ value, label }) {
  return (
    <div className="panel crest px-5 py-4">
      <p className="font-crown text-2xl text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-mist">{label}</p>
    </div>
  );
}

export function FeatureCard({ icon, title, desc }) {
  return (
    <div className="panel crest px-6 py-7 transition-colors hover:border-violet-500/40">
      <div className="flex h-10 w-10 items-center justify-center rounded border border-line text-violet-400">
        {icon}
      </div>
      <p className="mt-4 font-crown text-base text-white">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-mist">{desc}</p>
    </div>
  );
}

export function PageHero({ eyebrow, title, desc }) {
  return (
    <section className="border-b border-line/60 px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-crown text-4xl leading-tight text-white sm:text-5xl">{title}</h1>
        {desc && <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mist">{desc}</p>}
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, desc, align = 'left' }) {
  const isCenter = align === 'center';
  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-crown text-3xl text-white sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-sm leading-relaxed text-mist">{desc}</p>}
    </div>
  );
}
