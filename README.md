# $ARK — Token Website (Next.js)

A dark, royal-purple marketing site for the $ARK token, built with Next.js 14 (App Router) and Tailwind CSS.

## Pages
- `/` — Home (hero, live stats, why $ARK, CTA)
- `/about` — Mission, values, story
- `/tokenomics` — Supply, allocation donut chart, tax info
- `/roadmap` — 4-phase timeline
- `/trade` — DEX/CEX venues, community stats
- `/community` — Channels, latest updates
- `/faq` — Accordion FAQ
- `/terms` — Terms & Privacy

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm start
```

## Notes
- Numbers on stats/tokenomics pages are placeholder — swap them for live values (e.g. from your token API or a DEX aggregator) before launch.
- All imagery lives in `public/images/` — replace with your own renders any time, same filenames.
- Fonts (Cinzel + Inter) load via `next/font/google`, so no extra setup is needed — Next.js self-hosts them at build time.
- Colors, spacing, and type live in `tailwind.config.js` and `app/globals.css` if you want to retheme.
