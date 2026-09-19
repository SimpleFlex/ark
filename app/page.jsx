import Image from "next/image";
import Link from "next/link";
import { Eyebrow, StatCard, FeatureCard, SectionTitle } from "../components/UI";

const STATS = [
  { value: "3k", label: "Market Cap" },
  { value: "$0..312", label: "Current Price" },
  { value: "50", label: "Holders" },
  { value: "1.2B", label: "Total Supply" },
];

const FEATURES = [
  {
    title: "Community Driven",
    desc: "Built by the people, for the people. Your voice matters in every decision.",
    icon: "◈",
  },
  {
    title: "Real Utility",
    desc: "More than a meme  $ARK powers a future ecosystem of products.",
    icon: "⬡",
  },
  {
    title: "Secure & Transparent",
    desc: "A Memecoin built in the solana network .",
    icon: "⛨",
  },
  {
    title: "Global Movement",
    desc: "One community, one goal, spread across every timezone.",
    icon: "◎",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/60 px-6 pt-16 lg:px-10 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>The $ARK Movement</Eyebrow>
            <h1 className="mt-6 font-crown text-3xl leading-[1.08] text-white sm:text-6xl">
              More Than a Coin.
              <br />
              It&apos;s a Movement.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
              $ARK is a community-driven token where we&apos;re not just
              building a token we&apos;re building a legacy for the believers,
              the dreamers, and the ones who move first.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://www.meteora.ag/dammv2/J6hZuN1sHNysdjQw9iW9VV54YmQnsCEbxDgRH3Xfrz65?referrer=universal-search"
                target="_blank"
                className="btn-royal"
              >
                Buy $ARK
              </Link>
              <Link href="/community" className="btn-ghost">
                Community
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full bg-violet-600/25 blur-[100px]" />
            <Image
              src="/images/hero-king.jpg"
              alt="The $ARK king, seated on a violet-lit throne"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="rounded-sm object-cover object-top crest"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line/60 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Why $ARK"
            title="A growing community, real utility, a vision for the future."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 lg:px-10">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/king-stairs.jpg"
            alt="The $ARK king ascending stairs beneath a glowing sigil"
            fill
            sizes="100vw"
            className="object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07050d] via-[#07050d]/85 to-[#07050d]/60" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-crown text-3xl text-white sm:text-4xl">
            Join the $ARK Revolution
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Be part of something bigger. Buy, hold, and grow with us.
          </p>
          <Link
            href="https://www.meteora.ag/dammv2/J6hZuN1sHNysdjQw9iW9VV54YmQnsCEbxDgRH3Xfrz65?referrer=universal-search"
            target="_blank"
            className="btn-royal mt-8"
          >
            Buy $ARK
          </Link>
        </div>
      </section>
    </>
  );
}
