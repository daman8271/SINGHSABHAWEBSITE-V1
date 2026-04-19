"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const STEPS = [
  {
    number: "01",
    title: "Consultation & Vision",
    desc: "We begin with a conversation. Your institution, the occasion, the emotion you want the piece to carry — every commission starts by understanding intent before material.",
  },
  {
    number: "02",
    title: "Handcrafted Execution",
    desc: "Each trophy, medal, and memento is shaped by our artisans in Delhi — metal finished, crystal polished, engravings cut by hand. No conveyor belts. No shortcuts.",
  },
  {
    number: "03",
    title: "Considered Delivery",
    desc: "Every piece is individually inspected, padded, and dispatched to arrive ceremony-ready. Bulk orders coordinated with the care of a single commission.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 md:py-40 bg-ink-dark text-cream relative overflow-x-clip z-20"
    >
      {/* Amber ambient glow (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-amber/5 blur-[120px] pointer-events-none" />

      {/* Subtle dark flora/trophy image on the left (placeholder) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
        className="absolute -left-10 md:-left-32 -top-10 md:-top-32 w-[80%] md:w-[55vw] max-w-[1000px] z-0 pointer-events-none"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at center left, black 30%, transparent 100%)",
          maskImage:
            "radial-gradient(circle at center left, black 30%, transparent 100%)",
        }}
      >
        {/* Placeholder — will be replaced with process-bg.webp */}
        <div className="w-full aspect-square flex items-center justify-center opacity-30">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(212,130,10,0.35)"
            strokeWidth="0.3"
            className="w-[70%] h-[70%] mix-blend-lighten"
          >
            <path d="M6 9v3a7 7 0 0 0 6 6.92V22h-3v2h6v-2h-3v-3.08A7 7 0 0 0 18 12V9M6 9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2M18 9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 4h12" />
          </svg>
        </div>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Left: sticky headline + paragraph ── */}
          <div className="lg:sticky lg:top-40 self-start h-fit relative">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE }}
              className="font-sans font-bold text-4xl md:text-6xl tracking-tighter leading-[0.95] mb-6 relative z-10 text-cream drop-shadow-2xl"
            >
              The Art of
              <br />
              <span className="italic font-normal text-amber">Recognition.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
              className="text-cream/55 text-lg max-w-[42ch] leading-relaxed"
            >
              Every trophy, every medal, every memento that leaves our atelier
              is made by hand — not stamped, not mass-produced. We believe an
              award should carry the same intention as the achievement it
              honours. That belief shapes everything we do.
            </motion.p>
          </div>

          {/* ── Right: numbered steps ── */}
          <div className="flex flex-col gap-12 md:gap-24">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.1,
                  ease: EASE,
                }}
                className={`relative pl-8 md:pl-16 border-l border-white/10 ${
                  i === 1 ? "md:ml-24" : ""
                }`}
              >
                {/* Number badge */}
                <div className="absolute top-0 -left-[18px] md:-left-[24px]">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-ink-dark border border-white/10 flex items-center justify-center text-xs md:text-sm font-mono text-cream/55">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-cream">
                  {step.title}
                </h3>
                <p className="text-cream/55 leading-relaxed max-w-[45ch]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
