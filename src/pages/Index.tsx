import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const TITLE = "Pet Planet | Desarrollo, Importación y Distribución Pet";
const DESCRIPTION =
  "Conocé Pet Planet: desarrollamos, importamos y distribuimos marcas de productos para mascotas. Descubrí nuestras marcas y contactanos para consultas comerciales.";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href="https://www.petplanet.com.ar/" />
      <meta property="og:url" content="https://www.petplanet.com.ar/" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
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
