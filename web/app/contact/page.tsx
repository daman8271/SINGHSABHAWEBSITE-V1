import { SITE, contactWhatsAppUrl } from "@/lib/site";

export const metadata = {
  title: "Contact — Singh Sahib Enterprise",
  description: "Reach Singh Sahib Enterprise — WhatsApp, email and Delhi workshop.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-28 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-7">
        <div className="text-[11px] tracking-[0.3em] uppercase text-muted mb-5">
          Contact
        </div>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-[20ch]">
          Tell us about your event.
        </h1>
        <p className="mt-6 max-w-[52ch] text-[15px] text-ink/75 leading-relaxed">
          WhatsApp is the fastest way to reach us. Share your product codes,
          quantities and event date — we'll reply with quotes and lead times.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-muted mb-2">
              WhatsApp
            </div>
            <a
              href={contactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-2xl underline underline-offset-4 decoration-hairline hover:decoration-ink"
            >
              Chat with us →
            </a>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-muted mb-2">
              Email
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="font-serif text-2xl underline underline-offset-4 decoration-hairline hover:decoration-ink"
            >
              {SITE.email}
            </a>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-muted mb-2">
              Workshop
            </div>
            <div className="font-serif text-2xl">{SITE.address}</div>
          </div>
        </div>
      </div>

      <div className="md:col-span-5">
        <form
          action={contactWhatsAppUrl()}
          method="get"
          target="_blank"
          className="border border-hairline p-6 md:p-8"
        >
          <div className="text-[11px] tracking-[0.25em] uppercase text-muted mb-6">
            Quick inquiry
          </div>
          <label className="block text-[12px] text-muted mb-1">Your name</label>
          <input
            type="text"
            name="name"
            className="w-full h-11 border border-hairline bg-transparent px-3 mb-4 text-[14px] focus:outline-none focus:border-ink"
          />
          <label className="block text-[12px] text-muted mb-1">School / Institution</label>
          <input
            type="text"
            name="school"
            className="w-full h-11 border border-hairline bg-transparent px-3 mb-4 text-[14px] focus:outline-none focus:border-ink"
          />
          <label className="block text-[12px] text-muted mb-1">Product codes / details</label>
          <textarea
            name="text"
            rows={4}
            placeholder="e.g. 25× J1004 (large), 50× MM 32 (medium), event on 15 May"
            className="w-full border border-hairline bg-transparent px-3 py-2 mb-6 text-[14px] focus:outline-none focus:border-ink resize-none"
          />
          <button
            type="submit"
            className="w-full h-12 bg-ink text-cream text-[12px] tracking-[0.2em] uppercase"
          >
            Send via WhatsApp
          </button>
          <p className="mt-3 text-[11px] text-muted">
            Opens WhatsApp with your details pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}
