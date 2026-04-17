import Link from "next/link";
import ProductCard, { Product } from "./product-card";

export default function FeaturedGrid({ products }: { products: Product[] }) {
  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-24 border-t border-hairline">
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">
            The Collection
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.05]">
            Featured Pieces
          </h2>
        </div>
        <Link
          href="/catalog"
          className="hidden md:inline text-[12px] tracking-[0.2em] uppercase text-ink hover:underline underline-offset-4"
        >
          Explore All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="md:hidden mt-10 text-center">
        <Link
          href="/catalog"
          className="inline-flex items-center h-11 px-6 border border-ink/80 text-[12px] tracking-[0.2em] uppercase"
        >
          Explore All →
        </Link>
      </div>
    </section>
  );
}
