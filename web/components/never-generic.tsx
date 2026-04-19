"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function NeverGeneric() {
  return (
    <section className="py-32 md:py-48 bg-ink-dark relative overflow-hidden">

      {/* Placeholder dark background — will be replaced with an image */}
      <div className="absolute inset-x-0 top-32 md:top-48 bottom-0 z-0 flex items-start justify-center pointer-events-none">
        <div className="w-[90%] md:w-[70%] max-w-5xl aspect-[16/10] rounded-3xl bg-card-dark/40 border border-white/5 flex items-center justify-center opacity-40 mix-blend-screen">
          <span className="text-[10px] tracking-[0.32em] uppercase text-cream/20">
            [ Background image coming soon ]
          </span>
        </div>
        {/* Fade into bg so the placeholder blends */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-dark via-ink-dark/80 to-transparent pointer-events-none" />
      </div>

      {/* Amber ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-amber/5 blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center relative z-10">

        {/* Decorative icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: EASE }}
          className="mb-12 text-amber/50"
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="w-16 h-16 md:w-20 md:h-20"
          >
            <path d="M6 9v3a7 7 0 0 0 6 6.92V22h-3v2h6v-2h-3v-3.08A7 7 0 0 0 18 12V9" />
            <path d="M6 9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2M18 9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 4h12" />
          </svg>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: EASE }}
          className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter max-w-[20ch] leading-[1.05] mb-8 text-cream"
        >
          Never mass-produced.
          <br />
          <span className="italic font-normal text-amber">
            Always earned.
          </span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, delay: 0.15, ease: EASE }}
          className="text-lg md:text-xl text-cream/60 w-full max-w-[48ch] leading-relaxed mx-auto text-balance"
        >
          Behind every trophy is a student who stayed late, a team that ran one
          more lap, a teacher who believed first. We don&rsquo;t churn out
          awards on an assembly line — we build each piece for the moment it
          will stand for, and the hands it will finally rest in.
        </motion.p>
      </div>
    </section>
  );
}
