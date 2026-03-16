import { Nav } from "@/components/landing/nav";
import { HeroSection } from "@/components/landing/hero-section";
import { ReframeSection } from "@/components/landing/reframe-section";
import { ScienceSection } from "@/components/landing/science-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { ProductSection } from "@/components/landing/product-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <ReframeSection />
      <ScienceSection />
      <ComparisonSection />
      <ProductSection />
      <CTASection />
      <Footer />
    </>
  );
}
