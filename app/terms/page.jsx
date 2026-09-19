import { PageHero } from '../../components/UI';

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and using the $ARK website, you agree to be bound by these Terms of Service.',
  },
  {
    title: '2. Use of the Website',
    body: 'You agree to use the website for lawful purposes only, and not to attempt to disrupt or compromise its operation.',
  },
  {
    title: '3. Intellectual Property',
    body: 'All content, art, and trademarks on this site belong to $ARK and may not be reproduced or used elsewhere without permission.',
  },
  {
    title: '4. No Financial Advice',
    body: 'Nothing on this site constitutes financial, investment, or legal advice. Always do your own research before buying any token.',
  },
  {
    title: '5. Risk Disclosure',
    body: 'Cryptocurrency is volatile and speculative. You are solely responsible for any decision to buy, hold, or sell $ARK.',
  },
  {
    title: '6. Privacy',
    body: 'We collect minimal data — only what is necessary to operate the newsletter and community channels you opt into.',
  },
  {
    title: '7. Changes to These Terms',
    body: 'We may update these terms from time to time. Continued use of the site means you accept the current version.',
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms & Privacy" title="Your trust matters." />

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <p className="font-crown text-lg text-white">{s.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
