"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, contactWhatsAppUrl } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalogue" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-hairline">
      <div className="mx-auto max-w-content px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg md:text-xl tracking-wordmark uppercase">
          Singh&nbsp;Sabha
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[13px] text-ink/80">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={contactWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center h-9 px-5 text-[12px] tracking-wide uppercase border border-ink/80 hover:bg-ink hover:text-cream transition-colors"
        >
          WhatsApp
        </a>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-px bg-ink mb-[5px]" />
          <span className="block w-5 h-px bg-ink mb-[5px]" />
          <span className="block w-5 h-px bg-ink" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-cream">
          <div className="px-6 py-4 flex flex-col gap-3 text-[14px]">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1.5"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={contactWhatsAppUrl()}
              className="mt-2 inline-flex items-center justify-center h-10 border border-ink"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
