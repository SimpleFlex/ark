import Image from 'next/image';
import { PageHero, StatCard, Eyebrow } from '../../components/UI';

const VENUES = [
  { name: 'Uniswap', type: 'DEX' },
  { name: 'Raydium', type: 'DEX' },
  { name: 'Jupiter', type: 'DEX' },
  { name: 'Binance', type: 'CEX' },
  { name: 'OKX', type: 'CEX' },
];

export default function TradePage() {
  return (
    <>
      <PageHero
        eyebrow="Trade $ARK"
        title="Buy. Sell. Be part of the movement."
        desc="Trade $ARK on the leading DEXs and CEXs."
      />

      <section className="border-b border-line/60 px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div className="panel crest divide-y divide-line/60">
            {VENUES.map((v) => (
              <div key={v.name} className="flex items-center justify-between px-5 py-4">
                <span className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-xs text-violet-400">
                    {v.type}
                  </span>
                  <span className="text-sm text-white">{v.name}</span>
                </span>
                <button className="btn-ghost !px-4 !py-1.5 text-xs">Trade Now</button>
              </div>
            ))}
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 -z-10 rounded-full bg-violet-600/20 blur-[90px]" />
            <Image
              src="/images/coin-hand.jpg"
              alt="An open hand offering the $ARK coin"
              fill
              sizes="(max-width: 1024px) 90vw, 400px"
              className="rounded-sm object-cover crest"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Our Community</Eyebrow>
          <div className="mt-6 grid grid-cols-3 gap-5">
            <StatCard value="38.7K" label="Telegram Members" />
            <StatCard value="12.5K" label="X Followers" />
            <StatCard value="4.1K" label="Discord Members" />
          </div>
        </div>
      </section>
    </>
  );
}
