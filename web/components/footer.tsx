import Link from "next/link";
import { SITE, contactWhatsAppUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-dark pt-32 pb-10 px-4 md:px-8">

      {/* Giant SINGH watermark */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full flex justify-center items-start pt-10 overflow-hidden pointer-events-none select-none z-0"
        style={{ opacity: 0.04 }}
      >
        <span className="text-[22vw] font-sans font-bold leading-none tracking-tighter text-white whitespace-nowrap">
          SINGH
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">

        {/* ── Top area: brand + 3 nav columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32 mt-10">

          {/* Left: brand */}
          <div className="md:col-span-5 flex flex-col text-cream">
            <div className="flex flex-col mb-8">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-cream mb-2">
                Singh Sabha.
              </h2>
              <p className="text-xl md:text-2xl text-amber font-serif italic opacity-90">
                The Legend of Recognition.
              </p>
            </div>
            <p className="text-cream/55 max-w-[35ch] leading-relaxed text-lg">
              Handcrafted trophies, medals, and mementos for Delhi&rsquo;s
              schools, colleges, and institutions. Built for the moment, made
              to outlast the memory.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-cream font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber inline-block" />
              Explore
            </h4>
            <ul className="flex flex-col gap-4 text-cream/55">
              <li>
                <Link href="/catalog" className="hover:text-cream transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-cream transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cream transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-2">
            <h4 className="text-cream font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber inline-block" />
              Categories
            </h4>
            <ul className="flex flex-col gap-4 text-cream/55">
              <li>
                <Link href="/catalog?category=trophies" className="hover:text-cream transition-colors">
                  Trophies
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=medals" className="hover:text-cream transition-colors">
                  Medals
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=crystal" className="hover:text-cream transition-colors">
                  Crystal Awards
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=acrylic" className="hover:text-cream transition-colors">
                  Acrylic Awards
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=frames" className="hover:text-cream transition-colors">
                  Frames &amp; Mementos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-cream font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber inline-block" />
              Contact
            </h4>
            <div className="flex flex-col gap-4 text-cream/55">
              <p>{SITE.address}</p>
              <a
                href={contactWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-cream transition-colors break-all"
              >
                {SITE.email}
              </a>
              <a
                href={`tel:+91${SITE.phone}`}
                className="hover:text-cream transition-colors"
              >
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-cream/40">
          <p>© {new Date().getFullYear()} Singh Sabha Enterprise</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href={contactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors uppercase tracking-widest text-xs font-semibold"
            >
              WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Singh+Sabha+Enterprise+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors uppercase tracking-widest text-xs font-semibold"
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
