import heroPets from "@/assets/hero-pets.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-[520px] flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroPets}
      alt="Mascotas felices"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={800}
    />
    <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.45)]" />

    <div className="relative z-10 text-center px-6 py-20 max-w-3xl animate-fade-in-up">
      <p className="text-sm md:text-base font-medium tracking-widest uppercase text-primary-foreground/70 mb-4">
        Desarrollo · Construcción · Distribución
      </p>
      <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
        Creamos marcas para el mundo pet
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl mx-auto">
        Desde el desarrollo de producto hasta la distribución, construimos marcas sólidas pensadas para crecer junto a tu negocio.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#productos"
          className="inline-block rounded-lg bg-primary px-8 py-3 font-heading font-bold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
        >
          Conocer marcas
        </a>
        <a
          href="#contacto"
          className="inline-block rounded-lg border border-primary-foreground/30 px-8 py-3 font-heading font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
        >
          Contacto
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
