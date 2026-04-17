import CatalogBrowser from "@/components/catalog-browser";
import { ALL_PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Catalogue — Singh Sabha Enterprise",
  description: "Browse the full 2023–24 catalogue of trophies, medals, mementos and frames.",
};

export default function CatalogPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-24">
          <div className="text-[11px] tracking-[0.3em] uppercase text-muted mb-5">
            2023–24 Catalogue
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-[20ch]">
            Every piece, every code.
          </h1>
          <p className="mt-6 max-w-[52ch] text-[15px] text-ink/75 leading-relaxed">
            Filter by category or search by code. Tap any piece to open a
            WhatsApp chat with a pre-filled quote request.
          </p>
        </div>
      </section>
      <CatalogBrowser products={ALL_PRODUCTS} />
    </>
  );
}
