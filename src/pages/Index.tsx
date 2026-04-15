import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
