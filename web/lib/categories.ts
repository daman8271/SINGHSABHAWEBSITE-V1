export type Category = {
  slug: string;
  name: string;
  short: string;
};

export const CATEGORIES: Category[] = [
  { slug: "abs", name: "ABS Trophies", short: "ABS" },
  { slug: "metal-cups", name: "Metal Cups", short: "Cups" },
  { slug: "cut-glass", name: "Cut Glass", short: "Glass" },
  { slug: "acrylic", name: "Acrylic", short: "Acrylic" },
  { slug: "crystal", name: "Crystal", short: "Crystal" },
  { slug: "mementos", name: "Corporate Mementos", short: "Mementos" },
  { slug: "royal", name: "Royal Series", short: "Royal" },
  { slug: "economy", name: "Economy", short: "Economy" },
  { slug: "medals", name: "Medals", short: "Medals" },
  { slug: "ribbons", name: "Ribbons", short: "Ribbons" },
  { slug: "frames", name: "Frames", short: "Frames" },
  { slug: "badges", name: "Keychains & Badges", short: "Badges" },
];
