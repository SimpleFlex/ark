'use client';

import { useState } from 'react';
import { PageHero } from '../../components/UI';

const FAQS = [
  { q: 'What is $ARK?', a: '$ARK is a community-driven token built around transparency, real utility, and long-term ecosystem growth.' },
  { q: 'How can I buy $ARK?', a: 'You can buy $ARK on any of our listed DEXs or CEXs — see the Trade page for direct links.' },
  { q: 'Is there a presale?', a: 'No. $ARK launched fair, with no presale and no hidden allocations for insiders.' },
  { q: 'What is the total supply?', a: 'The total supply is fixed at 1,200,000,000,000 $ARK, as outlined on the Tokenomics page.' },
  { q: 'Are there any taxes?', a: 'There is a 0% buy and 0% sell tax — what you trade is what you keep.' },
  { q: 'Where can I store $ARK?', a: 'Any wallet that supports the token standard $ARK is built on will work, including hardware wallets.' },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Everything you need to know about $ARK."
      />

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-3xl divide-y divide-line/60 panel crest">
          {FAQS.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q} className="px-6 py-5">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-crown text-sm text-white sm:text-base">{f.q}</span>
                  <span className="ml-4 shrink-0 text-lg text-violet-400">{isOpen ? '\u2212' : '+'}</span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-mist">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
