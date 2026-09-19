import Image from "next/image";
import Link from "next/link";
import { PageHero, SectionTitle, Eyebrow } from "../../components/UI";

const VALUES = [
  { title: "Community First", desc: "For the people are our greatest asset." },
  { title: "Innovation", desc: "Always evolving, always building." },
  { title: "Transparency", desc: "Open, honest and ready to grow." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About $ARK"
        title="The vision. The people. The movement."
        desc="$ARK was created with a simple idea community, to prevent scams and also to retrieve assets sent to wrong adress,culture and long-term value. We're not just building a token, we're building a movement that brings people together, rewards loyalty, and creates real opportunities for the future."
      />

      <section className="border-b border-line/60 px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full bg-violet-600/20 blur-[90px]" />
            <Image
              src="/images/mission-figure.jpg"
              alt="The $ARK founder setting a glowing coin on the table"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="rounded-sm object-cover crest"
            />
          </div>
          <div>
            <Eyebrow>Our Mission</Eyebrow>
            <h2 className="mt-4 font-crown text-3xl text-white sm:text-4xl">
              To build a sustainable ecosystem around $ARK.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              An ecosystem that empowers our community, creates real utility,
              and drives long-term value in the crypto space.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-1">
              {VALUES.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                  <div>
                    <p className="font-crown text-sm text-white">{v.title}</p>
                    <p className="mt-1 text-sm text-mist">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 font-crown text-3xl text-white sm:text-4xl">
              It started as a simple idea.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              A community meme coin with a bigger purpose. What began as a small
              group of dreamers is now a growing movement, and we&apos;re just
              getting started.
            </p>
            <Link href="/community" className="btn-royal mt-8 inline-flex">
              Join Our Community
            </Link>
          </div>
          <div className="order-1 mx-auto aspect-[4/5] w-full max-w-sm lg:order-2">
            <div className="relative h-full w-full">
              <Image
                src="/images/hero-king.jpg"
                alt="The $ARK king on his throne, silhouetted in violet light"
                fill
                sizes="(max-width: 1024px) 90vw, 400px"
                className="rounded-sm object-cover object-top crest"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
