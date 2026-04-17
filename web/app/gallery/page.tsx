import GalleryViewer from "@/components/gallery-viewer";

export const metadata = {
  title: "Gallery — Singh Sabha Enterprise",
  description: "Flip through the entire 2023–24 catalogue, page by page.",
};

export default function GalleryPage() {
  // 134 rendered pages
  const pages = Array.from({ length: 134 }, (_, i) => i + 1);
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-24">
          <div className="text-[11px] tracking-[0.3em] uppercase text-muted mb-5">
            Gallery
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-[24ch]">
            The catalogue, page by page.
          </h1>
          <p className="mt-6 max-w-[52ch] text-[15px] text-ink/75 leading-relaxed">
            Every spread from the 2023–24 catalogue, rendered at high
            resolution. Use the arrow keys or tap to flip through.
          </p>
        </div>
      </section>
      <GalleryViewer pages={pages} />
    </>
  );
}
