import heroPets from "@/assets/hero-pets-dog-cat.jpg";
import heroPetsMobile from "@/assets/hero-pets-dog-cat-mobile.jpg";
import { HOME_WHATSAPP_URL } from "@/lib/home";

const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden scroll-mt-20">
    <picture>
      <source media="(max-width: 767px)" srcSet={heroPetsMobile} />
      <img
        src={heroPets}
        alt="Perro y gato descansando juntos en un living luminoso"
        className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
        width={1376}
        height={768}
        fetchPriority="high"
      />
    </picture>
    <div aria-hidden className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-foreground/75 via-foreground/45 to-foreground/10" />
    <div className="relative container px-5 py-16 sm:py-20 md:py-28 lg:py-32 min-h-[520px] md:min-h-[600px] flex items-center">
      <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/85 mb-4">
          Desarrollo · Importación · Distribución
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-5">
          Marcas que impulsan el mundo de las mascotas.
        </h1>
        <p className="text-base sm:text-lg text-primary-foreground/90 mb-8">
          En Pet Planet desarrollamos, importamos y distribuimos marcas de productos para mascotas, conectando propuestas de calidad con comercios y personas que buscan lo mejor para sus animales.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a
            href="#productos"
            className="inline-flex justify-center rounded-lg bg-crystal hover:bg-crystal-dark px-7 py-3 font-heading font-bold text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
          >
            Conocé nuestras marcas
          </a>
          <a
            href={HOME_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-lg border border-primary-foreground/60 px-7 py-3 font-heading font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
          >
            Contactar a Pet Planet
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
