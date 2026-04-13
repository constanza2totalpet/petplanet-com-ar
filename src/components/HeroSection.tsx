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
      <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
        Distribuimos productos de calidad para mascotas
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/85 mb-8">
        Soluciones confiables para veterinarias, pet shops y distribuidores
      </p>
      <a
        href="#productos"
        className="inline-block rounded-lg bg-primary px-8 py-3 font-heading font-bold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
      >
        Ver productos
      </a>
    </div>
  </section>
);

export default HeroSection;
