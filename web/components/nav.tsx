"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactWhatsAppUrl } from "@/lib/site";

const LINKS = [
  { href: "/catalog", label: "Catalogue" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function LogoMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 256 256"
      className="w-8 h-8 text-amber group-hover:rotate-12 transition-transform duration-500"
    >
      <path
        d="M128,32a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,32Zm0,48a12,12,0,1,1-12,12A12,12,0,0,1,128,80Zm48,40a12,12,0,1,1-12,12A12,12,0,0,1,176,120ZM80,120a12,12,0,1,1,12,12A12,12,0,0,1,80,120Zm48,72a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"
        opacity="0.25"
      />
      <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172,92l-36,36V72a8,8,0,0,0-16,0v56L84,92a8,8,0,0,0-11.31,11.31L112,142.63V184a8,8,0,0,0,16,0V142.63l39.31-39.32A8,8,0,0,0,172,92Z" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 flex justify-center px-4 md:px-8 py-8">
      <div
        className={`w-full max-w-7xl flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "px-6 py-3 bg-ink-dark/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "px-2 py-2 bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer pl-2">
          <LogoMark />
          <span className="text-xl font-bold tracking-tighter text-cream">
            Singh Sabha<span className="text-amber">.</span>
          </span>
        </Link>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cream/55 hover:text-cream transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA pill */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center font-medium overflow-hidden transition-colors focus:outline-none px-6 py-3 text-sm tracking-tight bg-cream text-ink hover:bg-cream/90 rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2">Contact Us</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-cream"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="w-6 h-6"
          >
            {open ? (
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            ) : (
              <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-[88px] left-4 right-4 rounded-3xl bg-ink-dark/95 backdrop-blur-xl border border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5 text-[15px] text-cream/75">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-1 hover:text-cream transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-12 rounded-full bg-cream text-ink text-sm tracking-tight font-medium"
                >
                  Contact Us
                </Link>
                <a
                  href={contactWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-12 rounded-full border border-white/15 text-cream text-sm tracking-tight"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
