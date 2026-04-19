"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TESTIMONIALS = [
  {
    quote:
      "Singh Sahib delivered 200 trophies for our Annual Sports Day without a single defect. The engraving, the weight, the finish — every piece felt considered. Our students noticed.",
    name: "Mrs. Anita Sharma",
    role: "Principal, Delhi Public School",
    initial: "A",
    colSpan: "md:col-span-4 md:mt-12",
    align: "",
  },
  {
    quote:
      "Their structural approach to awards is unlike anyone else in Delhi. Not a bouquet of generic cups — actual pieces of craft that belong on a shelf for decades.",
    name: "Mr. Rajiv Bhatia",
    role: "Sports Director, Hindu College",
    initial: "R",
    colSpan: "md:col-span-5 md:-mt-8",
    align: "",
  },
  {
    quote:
      "Bulk order of 350 medals, delivered two days before our inter-school tournament. Quality we needed, at a price that fit the budget. No excuses, no delays.",
    name: "Coach Sanjay Malik",
    role: "Head Coach, Delhi FC",
    initial: "S",
    colSpan: "md:col-span-5 md:col-start-2 md:mt-0",
    align: "",
  },
  {
    quote:
      "Elegant, quietly premium, brilliantly executed. The crystal awards for our farewell ceremony stood out by whispering instead of shouting. A complete shift from what we used to order.",
    name: "Ms. Priya Verma",
    role: "Student Affairs Head, Amity International",
    initial: "P",
    colSpan: "md:col-span-6 md:col-start-7 md:-mt-24",
    align: "",
  },
  {
    quote:
      "The attention to the smallest detail — the stitching on the presentation box, the padding inside — makes every piece feel rewarding to hand over. Our board members still bring it up.",
    name: "Dr. Kavita Nair",
    role: "Academic Dean, Modern School",
    initial: "K",
    colSpan: "md:col-span-5 md:col-start-8 md:-mt-12",
    align: "items-center text-center",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-8 text-cream/40">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21.2l1.6-7L2 9.5l7.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className="absolute top-6 left-6 w-12 h-12 text-cream/5 group-hover:text-cream/10 transition-colors"
    >
      <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 md:py-48 bg-ink-dark relative overflow-hidden flex flex-col items-center">

      {/* "Clarity." style heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: EASE }}
        className="mb-20 md:mb-24 text-center z-10"
      >
        <h2 className="font-serif italic text-5xl md:text-7xl text-cream mb-4">
          Legacy.
        </h2>
        <p className="text-[10px] tracking-[0.32em] uppercase text-cream/35">
          What institutions say about us
        </p>
      </motion.div>

      {/* Amber ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber/5 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: EASE,
              }}
              className={`relative p-8 md:p-10 rounded-3xl bg-card-dark/40 backdrop-blur-sm border border-white/5 hover:border-white/10 hover:bg-card-dark/60 transition-colors group flex flex-col justify-between ${t.colSpan}`}
            >
              <QuoteMark />

              <div className={`relative z-10 flex flex-col h-full ${t.align}`}>
                <Stars />

                <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                  {t.quote}
                </p>

                <div
                  className={`flex mt-auto gap-4 ${
                    t.align ? "flex-col items-center gap-2" : "items-center"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber/60 to-amber/30 border border-white/10 flex items-center justify-center text-xs font-medium text-cream shadow-inner shrink-0">
                    {t.initial}
                  </div>
                  <div
                    className={`flex flex-col ${
                      t.align ? "items-center" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold text-cream">
                      {t.name}
                    </span>
                    <span className="text-xs text-cream/40 uppercase tracking-wider mt-0.5">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real reviews coming soon */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center text-[10px] tracking-[0.32em] uppercase text-cream/25"
        >
          Real reviews coming soon
        </motion.p>
      </div>
    </section>
  );
}
