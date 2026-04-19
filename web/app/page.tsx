import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import ProcessSection from "@/components/process-section";
import CategoriesArchive from "@/components/categories-archive";
import NeverGeneric from "@/components/never-generic";
import Testimonials from "@/components/testimonials";
import WhatsAppCTA from "@/components/whatsapp-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ProcessSection />
      <CategoriesArchive />
      <NeverGeneric />
      <Testimonials />
      <WhatsAppCTA />
    </>
  );
}
