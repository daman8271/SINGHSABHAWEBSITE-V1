"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollFrames from "./scroll-frames";

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
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 md:py-40 bg-ink-dark text-cream relative overflow-x-clip z-20"
    >
      {/* Amber ambient glow (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-amber/5 blur-[120px] pointer-events-none z-0" />

      {/* Subtle scroll-driven video background — sits behind all text */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-25 md:opacity-30"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      >
        <ScrollFrames
          targetRef={sectionRef}
          frameCount={100}
          offset={["start end", "end start"]}
        />
      </div>

      {/* Darkening overlay to keep text fully legible over the video */}
      <div className="absolute inset-0 z-0 bg-ink-dark/60 pointer-events-none" />

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
