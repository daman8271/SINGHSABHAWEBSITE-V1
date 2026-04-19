export const SITE = {
  name: "Singh Sahib Enterprise",
  tagline: "Awards & Trophies · Delhi · Est. 2023",
  whatsappNumber: "917011292289",
  phone: "7011292289",
  email: "singhsahibenterprises@gmail.com",
  address: "Delhi, India",
} as const;

export function quoteWhatsAppUrl(code: string, category?: string) {
  const message = category
    ? `Hi Singh Sahib, I'd like a quote for ${code} (${category}).`
    : `Hi Singh Sahib, I'd like a quote for ${code}.`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function contactWhatsAppUrl() {
  const message = `Hi Singh Sahib, I'd like to inquire about your 2023-24 catalogue.`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
