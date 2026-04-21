"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard, { Product } from "./product-card";

const VISIBLE_STEP = 36;

const CATEGORIES_ORDER = [
  "All",
  "ABS Trophies",
  "Metal Cups",
  "Cut Glass",
  "Acrylic",
  "Crystal",
  "Corporate Mementos",
  "Royal Series",
  "Economy",
  "Medals",
  "Ribbons",
  "Frames",
  "Keychains & Badges",
  "Loose Cups",
  "Bases",
  "Foils",
  "Magnets & Nuts",
];

export default function CatalogBrowser({ products }: { products: Product[] }) {
  const params = useSearchParams();
  const initialCat = params.get("cat") ?? "All";
  const [cat, setCat] = useState<string>(initialCat);
  const [q, setQ] = useState("");
  const [visible, setVisible] = useState(VISIBLE_STEP);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase().replace(/\s+/g, "");
    return products.filter((p) => {
      if (cat !== "All") {
        // match by category name OR slug (for ?cat=abs etc.)
        if (
          p.category !== cat &&
          p.categorySlug !== cat.toLowerCase()
        )
          return false;
      }
      if (!qq) return true;
      const needle = `${p.code}${p.category}`.toLowerCase().replace(/\s+/g, "");
      return needle.includes(qq);
    });
  }, [products, cat, q]);

  const slice = filtered.slice(0, visible);

  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-10 md:py-16">
      <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-10 mb-10">
        <div className="flex-1">
          <label htmlFor="search-input" className="block text-[11px] tracking-[0.2em] uppercase text-muted mb-3">
            Search by code
          </label>
          <input
            id="search-input"
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setVisible(VISIBLE_STEP);
            }}
            placeholder="e.g. J1004, MM 32, ABS 15"
            className="w-full max-w-md h-11 border border-hairline bg-transparent px-4 text-[14px] placeholder:text-muted/60 focus:outline-none focus:border-ink"
          />
        </div>
        <div className="text-[12px] text-muted">
          {filtered.length.toLocaleString()} pieces
        </div>
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-2 mb-12 -mx-1">
        {CATEGORIES_ORDER.map((c) => {
          const active = c === cat || (cat.toLowerCase() === c.toLowerCase());
          return (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setVisible(VISIBLE_STEP);
              }}
              className={`h-9 px-4 text-[12px] tracking-wide border transition-colors ${
                active
                  ? "bg-ink text-cream border-ink"
                  : "border-hairline text-ink/80 hover:border-ink/50"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {slice.length === 0 ? (
        <div className="py-24 text-center text-muted">
          No pieces match that search. Try a shorter code.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
          {slice.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      {visible < filtered.length ? (
        <div className="mt-14 text-center">
          <button
            onClick={() => setVisible((v) => v + VISIBLE_STEP)}
            className="inline-flex items-center h-12 px-8 border border-ink/80 text-[12px] tracking-[0.2em] uppercase hover:bg-ink hover:text-cream transition-colors"
          >
            Load more ({filtered.length - visible} remaining)
          </button>
        </div>
      ) : null}
    </section>
  );
}
