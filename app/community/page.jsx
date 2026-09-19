import { PageHero, StatCard, Eyebrow } from "../../components/UI";

const UPDATES = [
  {
    time: "2h ago",
    text: "The community is stronger than ever. Excited for what’s next! #ARK #Community",
  },
  {
    time: "5h ago",
    text: "New partnerships coming soon. Stay tuned! #ARK #Partnerships",
  },
];

const CHANNELS = [
  {
    name: "Telegram",
    desc: "Real-time chat with the core team and fellow holders.",
    href: "https://t.me/THEARK3699",
  },
  {
    name: "X (Twitter)",
    desc: "Announcements, memes, and the pulse of the movement.",
    href: "https://x.com/The_Ark_369",
  },
  {
    name: "Discord",
    desc: "Deep dives, governance talk, and community events.",
    href: null,
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Our Community"
        title="Be part of the $ARK family."
        desc="Not just a token. It's a movement — and every believer has a seat at the table."
      />

      <section className="border-b border-line/60 px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-3 gap-5">
            <StatCard value="100" label="Telegram" />
            <StatCard value="650" label="X Followers" />
            <StatCard value="-" label="Discord" />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {CHANNELS.map((c) => (
              <div key={c.name} className="panel crest px-6 py-7">
                <p className="font-crown text-base text-white">{c.name}</p>

                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {c.desc}
                </p>

                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-5 inline-block !px-4 !py-1.5 text-xs"
                  >
                    Join {c.name}
                  </a>
                ) : (
                  <>
                    <button
                      disabled
                      className="btn-ghost mt-5 cursor-not-allowed !px-4 !py-1.5 text-xs opacity-50"
                    >
                      Coming soon
                    </button>

                    <p className="mt-2 text-xs text-mist">
                      There&apos;s no Discord community yet. We&apos;ll announce
                      it here when it launches.
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Latest Updates</Eyebrow>

          <div className="mt-6 space-y-4">
            {UPDATES.map((u) => (
              <div key={u.text} className="panel crest px-6 py-5">
                <p className="text-xs text-violet-400">{u.time}</p>

                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {u.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
