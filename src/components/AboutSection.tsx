const AboutSection = () => (
  <section id="nosotros" className="py-16 md:py-24 bg-crystal-light/40 scroll-mt-20">
    <div className="container px-5 grid md:grid-cols-5 gap-6 md:gap-12 items-start max-w-5xl">
      <div className="md:col-span-2">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crystal mb-3">Quiénes somos</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold leading-tight">
          Un socio para desarrollar y hacer crecer marcas del mundo pet.
        </h2>
      </div>
      <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
        <p>
          En Pet Planet trabajamos en el desarrollo, la importación y la distribución de marcas de productos para mascotas. Acompañamos cada propuesta desde su identidad y desarrollo comercial hasta su llegada al mercado.
        </p>
        <p>
          Trabajamos para construir marcas con una identidad clara, una propuesta de valor definida y oportunidades de crecimiento dentro del sector.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
