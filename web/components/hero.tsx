"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactWhatsAppUrl } from "@/lib/site";

export default function Hero({ image }: { image: string }) {
  return (
    <section className="relative bg-taupe">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.35] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-taupe/20 via-transparent to-taupe/60" />
      </div>

      <div className="relative mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-28 pb-20 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px]"
        >
          <div className="text-[11px] tracking-[0.3em] uppercase text-ink/70 mb-8">
            Est. Delhi · The 2023–24 Catalogue
          </div>
          <h1 className="font-serif text-[44px] sm:text-[64px] md:text-[88px] leading-[0.95] text-ink text-balance">
            Crafted
            <br />
            to be
            <br />
            <em className="italic">remembered.</em>
          </h1>
          <p className="mt-8 max-w-[46ch] text-[15px] md:text-base text-ink/75 leading-relaxed">
            Trophies, medals, mementos and frames for schools, colleges and
            corporates across Delhi. Five hundred pieces. Eighteen categories.
            One legacy.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/catalog"
              className="inline-flex items-center h-12 px-7 bg-ink text-cream text-[12px] tracking-[0.2em] uppercase hover:bg-ink/90 transition-colors"
            >
              Browse the Catalogue
            </Link>
            <a
              href={contactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-12 px-7 border border-ink/80 text-ink text-[12px] tracking-[0.2em] uppercase hover:bg-ink hover:text-cream transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
