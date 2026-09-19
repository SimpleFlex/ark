"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tokenomics", label: "Tokenomics" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/trade", label: "Trade" },
  {
    href: "/community",
    label: "Community",
  },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line/60 bg-[#07050d]/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-crown text-xl tracking-wide text-white"
        >
          <span className="text-violet-400">$</span>ARK
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-mist transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="https://www.meteora.ag/dammv2/J6hZuN1sHNysdjQw9iW9VV54YmQnsCEbxDgRH3Xfrz65?referrer=universal-search"
            target="_blank"
            className="btn-royal"
          >
            Buy $Ark
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded border border-line lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-[1px] block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                open ? "translate-y-[6.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7.25px] block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[13.5px] block h-[1.5px] bg-white transition-all duration-300 ${
                open ? "w-5 -translate-y-[6.25px] -rotate-45" : "w-3.5"
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-line/60 bg-[#07050d] px-6 py-6 shadow-lg shadow-black/40 lg:hidden">
          <div className="flex flex-col items-center gap-4 text-center">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full text-center text-sm text-mist transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.meteora.ag/dammv2/J6hZuN1sHNysdjQw9iW9VV54YmQnsCEbxDgRH3Xfrz65?referrer=universal-search"
              target="_blank"
              className="btn-royal flex w-full items-center justify-center text-center"
            >
              Buy $Ark
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
