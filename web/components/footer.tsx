import Link from "next/link";
import { SITE, contactWhatsAppUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0c0a09] pt-32 pb-10 px-6 md:px-12">

      {/* Giant SAHIB watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex justify-center items-center pointer-events-none select-none z-0"
        style={{ opacity: 0.04 }}
      >
        <span className="text-[22vw] font-sans font-bold leading-none tracking-tighter text-white whitespace-nowrap">
          SAHIB
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">

        {/* ── Top area: brand + 3 nav columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32 mt-10">

          {/* Left: brand */}
          <div className="md:col-span-6 flex flex-col">
            <h2 className="text-7xl md:text-[9rem] font-sans font-bold tracking-tighter leading-[0.9] text-white mb-4">
              Singh Sahib.
            </h2>
            <p className="text-2xl md:text-3xl text-amber font-serif italic mb-10">
              The Legend of Recognition.
            </p>
            <p className="text-white/50 max-w-[36ch] leading-relaxed text-lg">
              Handcrafted trophies and mementos, made in Delhi for the
              institutions that still believe a moment deserves a marker.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
              Explore
            </h4>
            <ul className="flex flex-col gap-4 text-white/50 text-base">
              <li>
                <Link href="/catalog" className="hover:text-white transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
              Categories
            </h4>
            <ul className="flex flex-col gap-4 text-white/50 text-base">
              <li>
                <Link href="/catalog?category=trophies" className="hover:text-white transition-colors">
                  Trophies
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=medals" className="hover:text-white transition-colors">
                  Medals
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=crystal" className="hover:text-white transition-colors">
                  Crystal Awards
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=acrylic" className="hover:text-white transition-colors">
                  Acrylic Awards
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=frames" className="hover:text-white transition-colors">
                  Frames &amp; Mementos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
              Contact
            </h4>
            <div className="flex flex-col gap-4 text-white/50 text-base">
              <p>{SITE.address}</p>
              <a
                href={contactWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-white transition-colors break-all"
              >
                {SITE.email}
              </a>
              <a
                href={`tel:+91${SITE.phone}`}
                className="hover:text-white transition-colors"
              >
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-white/40"
          style={{ borderTop: "0.5px solid rgba(255,255,255,0.1)" }}
        >
          <p>© {new Date().getFullYear()} Singh Sahib Enterprise</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href={contactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold"
            >
              WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Singh+Sahib+Enterprise+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold"
            >
              Google Maps
            </a>
            <span className="uppercase tracking-widest text-xs font-semibold">
              Made in Delhi
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
