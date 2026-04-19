"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CATEGORIES = [
  { name: "ABS Trophies", slug: "abs-trophies" },
  { name: "Metal Cups", slug: "metal-cups" },
  { name: "Crystal Awards", slug: "crystal" },
  { name: "Medals", slug: "medals" },
  { name: "Acrylic Awards", slug: "acrylic" },
  { name: "Frames & Mementos", slug: "frames" },
];

export default function CategoriesArchive() {
  return (
    <section className="bg-ink-dark py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex items-end justify-between mb-12 md:mb-14"
        >
          <div>
            <span className="text-[10px] tracking-[0.32em] uppercase text-cream/35 block mb-3">
              All Categories
            </span>
            <h2 className="font-sans font-black text-[38px] md:text-[54px] leading-none tracking-tight text-cream">
              The Catalogue.
            </h2>
          </div>
          <Link
            href="/catalog"
            className="hidden md:inline-flex items-center text-[10px] tracking-[0.22em] uppercase text-cream/35 hover:text-cream/70 transition-colors"
          >
            Full Catalogue&nbsp;&nbsp;↗
          </Link>
        </motion.div>

        {/* Category grid — 2×3, Floria image-card style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              <Link
                href={`/catalog?category=${cat.slug}`}
                className="group relative flex aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-card-dark block"
              >
                {/* Placeholder fill — scales on hover like Floria collections */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
                  <div className="text-center">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      className="text-cream/10 mx-auto mb-2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span className="text-[8px] tracking-[0.2em] uppercase text-cream/10">
                      Photo
                    </span>
                  </div>
                </div>

                {/* Always-visible bottom gradient (intensifies on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Inset ring */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[inherit] pointer-events-none" />

                {/* Label — lifts slightly on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-cream translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
