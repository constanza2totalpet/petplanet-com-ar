import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Helmet>
      <title>Pet Planet | Marcas para el mundo pet</title>
      <link rel="canonical" href="https://petplanet.com.ar/" />
      <meta property="og:url" content="https://petplanet.com.ar/" />
    </Helmet>
    <Header />
    <main className="flex-1">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
