import Link from "next/link";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tokenomics", label: "Tokenomics" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/trade", label: "Trade" },
  { href: "/community", label: "Community" },
];

const RESOURCES = [
  { href: "#", label: "Whitepaper" },
  { href: "/faq", label: "FAQ" },
  { href: "#", label: "Audit Report" },
  { href: "#", label: "Buy $ARK" },
];

const SOCIALS = [
  {
    name: "Telegram",
    href: "https://t.me/THEARK3699",
    icon: FaTelegramPlane,
  },
  {
    name: "X",
    href: "https://x.com/The_Ark_369",
    icon: FaXTwitter,
  },
  {
    name: "Discord",
    href: null,
    icon: FaDiscord,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-[#07050d]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-crown text-lg text-white">
              <span className="text-violet-400">$</span>ARK
            </p>

            <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-mist">
              Not just a token. It&apos;s a movement built by the community, for
              the community.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;

                if (!social.href) {
                  return (
                    <button
                      key={social.name}
                      type="button"
                      disabled
                      aria-label={`${social.name} coming soon`}
                      title={`${social.name} coming soon`}
                      className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-line text-mist/40 opacity-60"
                    >
                      <Icon size={17} />
                    </button>
                  );
                }

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-mist transition-all duration-200 hover:border-violet-400 hover:bg-violet-400/10 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links + Resources */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            {/* Quick Links */}
            <div>
              <p className="font-crown text-sm text-white">Quick Links</p>

              <ul className="mt-4 space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="font-crown text-sm text-white">Resources</p>

              <ul className="mt-4 space-y-2.5">
                {RESOURCES.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-crown text-sm text-white">Newsletter</p>

            <p className="mt-4 text-sm text-mist">
              Get the latest updates, news and exclusive drops.
            </p>

            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full min-w-0 rounded border border-line bg-panel px-3 py-2 text-sm text-white placeholder:text-mist/60 focus:border-violet-400 focus:outline-none"
              />

              <button
                type="submit"
                className="btn-royal whitespace-nowrap !px-4 !py-2 text-xs"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-line mt-12" />

        {/* Bottom Footer */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-mist/70 sm:flex-row">
          <p className="text-center sm:text-left">
            © 2026 $ARK. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>

            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>

            <Link href="#" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
