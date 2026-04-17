export default function PromoStrip() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-content px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="font-serif text-2xl md:text-3xl">
            The 2023–24 Collection
          </span>
        </div>
        <div className="text-[12px] tracking-[0.2em] uppercase text-cream/70">
          500+ designs · 18 categories · One catalogue
        </div>
      </div>
    </section>
  );
}
