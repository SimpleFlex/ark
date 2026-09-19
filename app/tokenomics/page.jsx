import { PageHero, StatCard, Eyebrow } from '../../components/UI';

const ALLOCATION = [
  { label: 'Liquidity', value: 40, color: '#9b5cff' },
  { label: 'Marketing', value: 15, color: '#7c3aed' },
  { label: 'Development', value: 15, color: '#c084fc' },
  { label: 'Community Rewards', value: 10, color: '#5b21b6' },
  { label: 'Team', value: 10, color: '#a78bfa' },
  { label: 'CEX Listings', value: 5, color: '#6d28d9' },
  { label: 'Burn', value: 5, color: '#4c1d95' },
];

function DonutChart() {
  const size = 260;
  const stroke = 34;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto w-full max-w-[260px]">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#150f27" strokeWidth={stroke} />
      {ALLOCATION.map((a) => {
        const dash = (a.value / 100) * c;
        const circle = (
          <circle
            key={a.label}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={a.color}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${c - dash}`}
            strokeDashoffset={-offset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        );
        offset += dash;
        return circle;
      })}
      <text x="50%" y="46%" textAnchor="middle" className="fill-white font-crown" fontSize="22">
        $ARK
      </text>
      <text x="50%" y="58%" textAnchor="middle" className="fill-[#a7a0bd]" fontSize="11">
        Trust Supply
      </text>
    </svg>
  );
}

export default function TokenomicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tokenomics"
        title="Built for sustainability. Designed for growth."
        desc="$ARK's tokenomics are structured to ensure long-term stability, community rewards, and ecosystem growth."
      />

      <section className="border-b border-line/60 px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <DonutChart />
          <div className="panel crest divide-y divide-line/60">
            {ALLOCATION.map((a) => (
              <div key={a.label} className="flex items-center justify-between px-5 py-3.5">
                <span className="flex items-center gap-3 text-sm text-mist">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: a.color }} />
                  {a.label}
                </span>
                <span className="font-crown text-sm text-white">{a.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line/60 px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-3">
          <StatCard value="1,200,000,000,000" label="Total Supply" />
          <StatCard value="40%" label="Initial Liquidity" />
          <StatCard value="0% / 0%" label="Buy / Sell Tax" />
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10">
        <div className="panel mx-auto max-w-4xl px-8 py-8 text-center">
          <Eyebrow>No hidden fees. No presale. Just a fair launch.</Eyebrow>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            $ARK is a community-first token with a transparent and fully audited smart
            contract.
          </p>
        </div>
      </section>
    </>
  );
}
