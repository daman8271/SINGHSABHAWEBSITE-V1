import Image from "next/image";
import { quoteWhatsAppUrl } from "@/lib/site";

export type Product = {
  id: number;
  code: string;
  category: string;
  categorySlug: string;
  page: number;
  heights: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const href = product.image ? quoteWhatsAppUrl(product.code, product.category) : "#";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-taupe-light/40 border border-hairline">
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.code} — ${product.category}`}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-muted text-xs">
            Catalogue page {product.page}
          </div>
        )}
        <div className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-muted bg-cream/80 backdrop-blur px-2 py-1">
          {product.category}
        </div>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <div className="font-serif text-[15px] text-ink">
            {product.code || `Page ${product.page}`}
          </div>
          {product.heights ? (
            <div className="text-[12px] text-muted mt-0.5 leading-snug">
              {product.heights}
            </div>
          ) : null}
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] tracking-wide uppercase text-ink whitespace-nowrap">
          Quote →
        </span>
      </div>
    </a>
  );
}
