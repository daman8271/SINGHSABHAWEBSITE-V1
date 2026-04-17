const ITEMS = [
  {
    title: "Bulk orders for institutions",
    body: "Schools, colleges and corporates — negotiated pricing on volume orders.",
  },
  {
    title: "WhatsApp support",
    body: "Send us a product code. We reply with price, availability and lead time.",
  },
  {
    title: "Delhi-wide delivery",
    body: "Pick-up from our workshop or delivered across NCR for your event day.",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-hairline bg-cream">
      <div className="mx-auto max-w-content px-6 md:px-10 py-12 md:py-16 grid gap-10 md:grid-cols-3">
        {ITEMS.map((i) => (
          <div key={i.title}>
            <div className="font-serif text-xl md:text-2xl text-ink mb-2">
              {i.title}
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-[32ch]">
              {i.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
