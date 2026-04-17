import Link from "next/link";
import Image from "next/image";

type Chip = { name: string; slug: string; image: string };

export default function CategoryChips({ chips }: { chips: Chip[] }) {
  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-24">
      <div className="flex items-center justify-between mb-10">
        <div className="text-[11px] tracking-[0.3em] uppercase text-muted">
          Categories
        </div>
        <Link
          href="/catalog"
          className="text-[11px] tracking-[0.2em] uppercase text-ink hover:underline underline-offset-4"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-x-4 gap-y-8">
        {chips.map((c) => (
          <Link
            key={c.slug}
            href={`/catalog?cat=${c.slug}`}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-taupe-light/50 border border-hairline group-hover:border-ink/40 transition-colors">
              {c.image ? (
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                />
              ) : null}
            </div>
            <div className="mt-3 text-[12px] md:text-[13px] text-ink/85">
              {c.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
