"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function GalleryViewer({ pages }: { pages: number[] }) {
  const [i, setI] = useState(0);
  const n = pages.length;

  const prev = useCallback(() => setI((v) => (v - 1 + n) % n), [n]);
  const next = useCallback(() => setI((v) => (v + 1) % n), [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const pageNum = pages[i];
  const src = `/catalog/page-${String(pageNum).padStart(3, "0")}.webp`;

  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-10 md:py-16">
      <div className="flex items-center justify-between mb-6">
        <div className="text-[12px] tracking-[0.2em] uppercase text-muted">
          Page {pageNum} of {n}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="h-10 w-10 border border-hairline hover:border-ink/50 grid place-items-center"
            aria-label="Previous page"
          >
            ←
          </button>
          <button
            onClick={next}
            className="h-10 w-10 border border-hairline hover:border-ink/50 grid place-items-center"
            aria-label="Next page"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative w-full aspect-[8.5/11] bg-taupe-light/40 border border-hairline overflow-hidden">
        <Image
          key={src}
          src={src}
          alt={`Catalogue page ${pageNum}`}
          fill
          sizes="(min-width: 1280px) 1200px, 95vw"
          className="object-contain"
          priority={i < 2}
        />
        <button
          onClick={prev}
          className="absolute left-0 top-0 h-full w-1/3 focus:outline-none"
          aria-label="Previous"
        />
        <button
          onClick={next}
          className="absolute right-0 top-0 h-full w-1/3 focus:outline-none"
          aria-label="Next"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {pages.map((p, idx) => (
          <button
            key={p}
            onClick={() => setI(idx)}
            className={`h-6 w-6 text-[10px] border transition-colors ${
              idx === i
                ? "bg-ink text-cream border-ink"
                : "border-hairline text-muted hover:border-ink/40"
            }`}
            aria-label={`Go to page ${p}`}
          >
            {p}
          </button>
        ))}
      </div>
    </section>
  );
}
