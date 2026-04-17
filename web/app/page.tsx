import Hero from "@/components/hero";
import CategoryChips from "@/components/category-chips";
import FeaturedGrid from "@/components/featured-grid";
import TrustStrip from "@/components/trust-strip";
import PromoStrip from "@/components/promo-strip";
import { featuredProducts, realCodedProducts } from "@/lib/products";

export default function Home() {
  const featured = featuredProducts(8);
  const coded = realCodedProducts();

  const heroImage =
    coded.find((p) => p.category === "ABS Trophies" && p.heights.includes("34"))
      ?.image ?? featured[0]?.image ?? "";

  const chipCategories = [
    "ABS Trophies",
    "Metal Cups",
    "Cut Glass",
    "Acrylic",
    "Crystal",
    "Medals",
    "Frames",
    "Royal Series",
  ];
  const chips = chipCategories.map((cat) => {
    const sample = coded.find((p) => p.category === cat) ?? coded[0];
    return {
      name: cat,
      slug: sample?.categorySlug ?? "",
      image: sample?.image ?? "",
    };
  });

  return (
    <>
      <Hero image={heroImage} />
      <CategoryChips chips={chips} />
      <PromoStrip />
      <FeaturedGrid products={featured} />
      <TrustStrip />
    </>
  );
}
