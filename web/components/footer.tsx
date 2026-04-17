import Link from "next/link";
import { SITE, contactWhatsAppUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 md:mt-32 border-t border-hairline bg-cream">
      <div className="mx-auto max-w-content px-6 md:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-serif text-lg tracking-wordmark uppercase">
            Singh&nbsp;Sabha
          </div>
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-[22ch]">
            The legend of award products. Crafted in Delhi, trusted by schools
            and colleges since decades.
          </p>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-4">
            Explore
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/catalog">Catalogue</Link></li>
            <li><Link href="/gallery">Full 2023–24 Gallery</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-4">
            Reach us
          </div>
          <ul className="space-y-2 text-sm">
            <li>{SITE.address}</li>
            <li>
              <a href={contactWhatsAppUrl()} className="underline underline-offset-4 decoration-hairline hover:decoration-ink">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="underline underline-offset-4 decoration-hairline hover:decoration-ink">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-4">
            Bulk orders
          </div>
          <p className="text-sm text-muted leading-relaxed">
            Schools, colleges and corporates — write in for quotes on annual-day
            awards, sports trophies and memento orders.
          </p>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto max-w-content px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} Singh Sabha Enterprise</span>
          <span>Made in Delhi</span>
        </div>
      </div>
    </footer>
  );
}
