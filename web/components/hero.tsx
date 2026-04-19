"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.25 },
  },
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center pt-24 pb-12 bg-ink-dark z-20 overflow-hidden">

      {/* Full-bleed dark background layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.video
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          className="absolute inset-y-0 right-0 h-full w-full md:w-[60%] object-cover"
          style={{ objectPosition: 'center' }}
        />
        {/* Placeholder textured bg — replace with hero-bg image */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(212,130,10,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(42,37,32,0.8) 0%, transparent 60%), #0a0806",
          }}
        />
        {/* Left-to-right darkening gradient (readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-dark via-ink-dark/80 to-transparent" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 md:h-48 bg-gradient-to-t from-ink-dark to-transparent pointer-events-none" />
      </div>

      {/* Right-side rotated accent placeholder (hero-accent position) */}
      <div className="absolute top-24 md:top-32 right-0 h-[100dvh] w-[90vw] md:w-[60vw] flex items-center justify-end pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.02, rotate: -88 }}
          animate={{ opacity: 1, scale: 1.15, rotate: -92 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="relative h-[120vh] aspect-square origin-center translate-x-1/4 pointer-events-auto cursor-pointer"
          style={{ filter: "brightness(0.9) contrast(1.1)" }}
        >
        </motion.div>
      </div>

      {/* Content grid */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center z-20 pointer-events-none">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7 flex flex-col items-start pointer-events-auto"
        >
          <motion.div variants={item}>
            <span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Atelier &amp; Archive
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-cream mb-8 text-balance">
              Crafted
              <br />
              <span className="text-amber italic font-normal">
                to be remembered.
              </span>
            </h1>

            <p className="text-lg text-cream/80 leading-relaxed max-w-[40ch] mb-10 text-balance">
              Trophies, medals, mementos and frames for schools, colleges, and
              institutions across Delhi. Architectural craft, not generic awards.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/catalog"
                className="relative inline-flex items-center justify-center font-medium overflow-hidden rounded-full transition-colors focus:outline-none py-3 tracking-tight h-14 px-8 text-base bg-cream text-ink hover:bg-cream/90"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Collections
                </span>
              </Link>
              <Link
                href="/about"
                className="relative inline-flex items-center justify-center font-medium overflow-hidden rounded-full transition-colors focus:outline-none py-3 tracking-tight bg-transparent h-14 px-8 text-base text-cream hover:bg-white/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Our Manifesto
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
