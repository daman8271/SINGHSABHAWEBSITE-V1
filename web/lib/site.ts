export const SITE = {
  name: "Singh Sabha Enterprise",
  tagline: "Awards & Trophies · Delhi · Est. 2023",
  whatsappNumber: "919999999999",
  email: "hello@singhsabha.example",
  address: "Delhi, India",
} as const;

export function quoteWhatsAppUrl(code: string, category?: string) {
  const message = category
    ? `Hi Singh Sabha, I'd like a quote for ${code} (${category}).`
    : `Hi Singh Sabha, I'd like a quote for ${code}.`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function contactWhatsAppUrl() {
  const message = `Hi Singh Sabha, I'd like to inquire about your 2023-24 catalogue.`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
