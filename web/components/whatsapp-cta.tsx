"use client";

import { motion } from "framer-motion";
import { contactWhatsAppUrl } from "@/lib/site";

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.564 4.14 1.546 5.871L.057 23.49a.5.5 0 00.614.614l5.62-1.489A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.014-1.378l-.36-.213-3.732.988.988-3.73-.214-.362A9.793 9.793 0 012.182 12C2.182 6.567 6.568 2.182 12 2.182S21.818 6.567 21.818 12 17.432 21.818 12 21.818z" />
    </svg>
  );
}

export default function WhatsAppCTA() {
  return (
    <section className="relative bg-ink-dark py-24 md:py-28 overflow-hidden">

      {/* Amber radial glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[220px] pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(212,130,10,0.11) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-content px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {/* Eyebrow */}
          <span className="inline-block text-[10px] tracking-[0.32em] uppercase text-cream/35 mb-6">
            Stay Connected
          </span>

          {/* Heading */}
          <h2 className="font-sans font-black text-[38px] md:text-[58px] leading-[1.0] tracking-tight text-cream mb-3">
            Join Our
            <br />
            <em className="font-serif font-normal italic not-italic text-amber">
              WhatsApp Community.
            </em>
          </h2>

          {/* Subtext */}
          <p className="mt-5 max-w-[42ch] mx-auto text-[14px] text-cream/50 leading-relaxed">
            Get updates on new arrivals, seasonal offers, and bulk deal
            announcements. Schools and colleges — be the first to know.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={contactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-14 px-8 rounded-full bg-amber text-cream text-sm tracking-tight font-medium hover:bg-amber-light active:scale-[0.97] transition-colors shadow-[0_0_28px_rgba(212,130,10,0.25)]"
            >
              <WhatsAppIcon />
              Join the Group
            </a>
            <a
              href={contactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-14 px-2 text-sm tracking-tight text-cream/50 hover:text-cream transition-colors"
            >
              Or message us directly&nbsp;&nbsp;→
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
