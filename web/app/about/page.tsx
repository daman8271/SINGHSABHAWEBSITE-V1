import Link from "next/link";
import { contactWhatsAppUrl } from "@/lib/site";

export const metadata = {
  title: "About — Singh Sahib Enterprise",
  description: "The story behind Singh Sahib Enterprise — awards crafted in Delhi.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="text-[11px] tracking-[0.3em] uppercase text-muted mb-5">
              About
            </div>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              The legend of award products.
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-[15px] leading-relaxed text-ink/80 max-w-[44ch]">
              For years Singh Sahib Enterprise has crafted trophies, medals and
              mementos for schools, colleges and corporates across Delhi. One
              catalogue. Every piece made to be remembered.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-3 gap-12">
        <div>
          <div className="font-serif text-3xl mb-4">500+</div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
            Designs
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-[32ch]">
            Across eighteen categories — ABS, metal cups, cut glass, acrylic,
            crystal, medals, ribbons, frames and more.
          </p>
        </div>
        <div>
          <div className="font-serif text-3xl mb-4">Delhi</div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
            Crafted here
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-[32ch]">
            Designed, engraved and packed in our workshop. Pick-up available,
            delivery across NCR for event-day timelines.
          </p>
        </div>
        <div>
          <div className="font-serif text-3xl mb-4">Bulk</div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
            For institutions
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-[32ch]">
            Annual-day awards, sports-meet trophies, corporate mementos —
            negotiated pricing on volume orders.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline bg-ink text-cream">
        <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-28 text-center">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.05]">
            Planning an awards night?
          </h2>
          <p className="mt-5 max-w-[48ch] mx-auto text-[15px] text-cream/70 leading-relaxed">
            Share your event details on WhatsApp. We'll send quotes, lead times
            and size recommendations within the hour.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href={contactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-12 px-7 bg-cream text-ink text-[12px] tracking-[0.2em] uppercase hover:bg-cream/90 transition-colors"
            >
              WhatsApp Us
            </a>
            <Link
              href="/catalog"
              className="inline-flex items-center h-12 px-7 border border-cream/80 text-cream text-[12px] tracking-[0.2em] uppercase hover:bg-cream hover:text-ink transition-colors"
            >
              Browse the Catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
