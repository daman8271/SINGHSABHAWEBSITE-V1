"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    id: 1,
    name: "Royal Heritage Trophy",
    price: "₹850",
    category: "Royal Series",
    aspect: "aspect-[3/4]",
    image: "/1.png",
  },
  {
    id: 2,
    name: "Crystal Prestige Award",
    price: "₹650",
    category: "Crystal",
    aspect: "aspect-square",
    image: "/2.png",
  },
  {
    id: 3,
    name: "Champion Metal Cup",
    price: "₹420",
    category: "Metal Cups",
    aspect: "aspect-[4/5]",
    image: "/3.jpeg",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof PRODUCTS)[0];
  index: number;
}) {
  /* Floria stagger: card 0 flush, card 1 pushed down, card 2 mid */
  const staggerClass =
    index === 0 ? "md:mt-0" : index === 1 ? "md:mt-24" : "md:mt-12";

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.75,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={`md:col-span-4 group cursor-pointer ${staggerClass}`}
    >
      {/* Card image area */}
      <div
        className={`w-full relative overflow-hidden rounded-[2rem] mb-6 ${product.aspect} bg-card-dark`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Darkening overlay that lifts on hover */}
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-500" />

        {/* "Quick Enquire" pill — slides up from bottom on hover */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
          <span className="bg-cream/95 backdrop-blur-md text-ink text-sm font-semibold px-6 py-3 rounded-full shadow-lg">
            Quick Enquire
          </span>
        </div>

        {/* Inner highlight (Liquid Glass) */}
        <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] pointer-events-none" />
      </div>

      {/* Below card — name */}
      <h3 className="text-xl font-medium tracking-tight text-cream group-hover:text-amber transition-colors">
        {product.name}
      </h3>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-ink-dark py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 md:mb-20"
        >
          <div>
            <span className="text-[10px] tracking-[0.32em] uppercase text-cream/35 block mb-3">
              For Every Occasion
            </span>
            <h2 className="font-sans font-black text-[38px] md:text-[54px] leading-none tracking-tight text-cream">
              Trophies for Every Occasion
            </h2>
          </div>
          <Link
            href="/catalog"
            className="hidden md:inline-flex items-center text-[10px] tracking-[0.22em] uppercase text-cream/35 hover:text-cream/70 transition-colors gap-1"
          >
            View All&nbsp;&nbsp;↗
          </Link>
        </motion.div>

        {/* 3 staggered cards — Floria 12-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-12 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center h-11 px-8 rounded-full border border-white/12 text-[10px] tracking-[0.22em] uppercase text-cream/50 hover:border-white/25 hover:text-cream/80 transition-all"
          >
            View All &nbsp;↗
          </Link>
        </div>
      </div>
    </section>
  );
}
