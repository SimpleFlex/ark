import { PageHero } from "../../components/UI";

const PHASES = [
  {
    phase: "Phase 1",
    title: "Launch & Build",
    period: "Q1 2026",
    items: [
      "Token launch",
      "Community building",
      "Liquidity locked",
      "Social media growth",
    ],
  },
  {
    phase: "Phase 2",
    title: "Ecosystem Development",
    period: "Q2 2026",
    items: [
      "Website & dApp",
      "Utility integration",
      "Partnerships & listings",
      "Airdrop campaign",
    ],
  },
  {
    phase: "Phase 3",
    title: "Expansion",
    period: "Q3 2026",
    items: [
      "CEX listings",
      "Global marketing",
      "NFT collection",
      "Real world utility",
    ],
  },
  {
    phase: "Phase 4",
    title: "Long Term",
    period: "Q4 2026",
    items: [
      "Platform expansion",
      "DeFi integration",
      "Global adoption",
      "Becomes a top-tier community token",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title="From vision to reality."
        desc="Here's how we're building $ARK, step by step."
      />

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <ol className="relative border-l border-line/60 pl-10">
            {PHASES.map((p, i) => (
              <li
                key={p.phase}
                className={i === PHASES.length - 1 ? "pb-2" : "pb-14"}
              >
                <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-violet-400 bg-[#07050d]">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                </span>
                <p className="font-crown text-lg text-white">
                  {p.phase} — {p.title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-violet-400">
                  {p.period}
                </p>
                <ul className="panel crest mt-4 space-y-2.5 px-5 py-5">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-sm text-mist"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
