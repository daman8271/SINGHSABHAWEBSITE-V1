import data from "@/data/products.json";
import type { Product } from "@/components/product-card";

export const ALL_PRODUCTS = data as Product[];

export function realCodedProducts(): Product[] {
  return ALL_PRODUCTS.filter((p) => p.code && !p.code.startsWith("Page "));
}

export function featuredProducts(limit = 8): Product[] {
  // one per major category, preferring items with a clear code + heights
  const wanted = [
    "ABS Trophies",
    "Metal Cups",
    "Acrylic",
    "Crystal",
    "Corporate Mementos",
    "Medals",
    "Frames",
    "Royal Series",
  ];
  const coded = realCodedProducts();
  const picks: Product[] = [];
  for (const cat of wanted) {
    const match = coded.find(
      (p) => p.category === cat && p.heights && !picks.includes(p),
    );
    if (match) picks.push(match);
    if (picks.length >= limit) break;
  }
  // pad if fewer than limit
  if (picks.length < limit) {
    for (const p of coded) {
      if (picks.length >= limit) break;
      if (!picks.includes(p)) picks.push(p);
    }
  }
  return picks.slice(0, limit);
}

export function byCategory() {
  const map = new Map<string, Product[]>();
  for (const p of ALL_PRODUCTS) {
    const arr = map.get(p.category) ?? [];
    arr.push(p);
    map.set(p.category, arr);
  }
  return map;
}
