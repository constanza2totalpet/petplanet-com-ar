import { Link } from "react-router-dom";
import bolsaImg from "@/assets/bolsa-crystalcat.png";
import crystalcatLogo from "@/assets/crystalcat-logo.png";
import { PawPrint, Quote, Droplets, Wind, CalendarCheck, ArrowRight } from "lucide-react";

const features = [
  { icon: Droplets, label: "Alta absorción" },
  { icon: Wind, label: "Control de olores" },
  { icon: CalendarCheck, label: "Mayor rendimiento" },
];

const ProductsSection = () => (
  <section id="productos" className="py-14 md:py-20 bg-background">
    <div className="container px-5">
      {/* Section header */}
      <p className="text-xs font-semibold tracking-widest uppercase text-crystal text-center mb-2">
        Nuestro portfolio
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-center mb-4">
        Marcas Pet Planet
      </h2>
      <p className="text-center text-muted-foreground mb-10 md:mb-16 max-w-xl mx-auto text-sm sm:text-base">
        Cada marca que desarrollamos nace con un propósito claro: ofrecer productos consistentes, confiables y pensados para el día a día.
      </p>

      {/* Brands grid */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* ── Crystal Cat ── */}
        <div className="flex flex-col">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Pet Planet presenta
          </p>

          {/* Logo */}
          <div className="mb-5 md:mb-6">
            <img
              src={crystalcatLogo}
              alt="Crystal Cat logo"
              loading="lazy"
              width={1024}
              height={512}
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Quote */}
          <div className="flex gap-3 mb-5 md:mb-6">
            <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-crystal/40 shrink-0 mt-1" />
            <p className="text-base sm:text-lg font-heading font-semibold text-foreground/80 italic">
              Piedras sanitarias de sílica premium para gatos exigentes.
            </p>
          </div>

          <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
            Crystal Cat es nuestra primera marca, desarrollada con sílica gel de alta pureza.
            Un producto liviano, higiénico y de larga duración, pensado para simplificar
            el cuidado diario de tu gato.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-crystal/10 flex items-center justify-center">
                  <f.icon className="w-4 h-4 text-crystal" />
                </div>
                <span className="font-medium">{f.label}</span>
              </div>
            ))}
          </div>

          {/* Product image card */}
          <div className="group rounded-xl border bg-card shadow-sm hover:shadow-md hover:border-crystal/30 transition-all p-4 flex flex-col items-center">
            <div className="w-full max-w-xs aspect-square rounded-lg bg-muted overflow-hidden mb-4">
              <img
                src={bolsaImg}
                alt="Crystal Cat - Piedras Sanitarias 3.8L"
                loading="lazy"
                width={400}
                height={400}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-heading font-bold text-base mb-1">Crystal Cat 3.8L</h4>
            <p className="text-sm text-muted-foreground text-center">
              Piedras sanitarias de sílica. Liviano, natural y fácil de usar.
            </p>
          </div>
        </div>

        {/* ── Próxima marca ── */}
        <div className="flex flex-col">
          <p className="text-xs font-semibold tracking-widest uppercase text-coming-soon mb-3">
            En desarrollo
          </p>
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-coming-soon/20 flex items-center justify-center">
              <PawPrint className="w-6 h-6 sm:w-7 sm:h-7 text-coming-soon" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-coming-soon">
              Próximamente
            </h3>
          </div>

          <div className="flex gap-3 mb-5 md:mb-6">
            <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-coming-soon/40 shrink-0 mt-1" />
            <p className="text-base sm:text-lg font-heading font-semibold text-foreground/60 italic">
              Nuevas marcas en camino, con la misma visión de calidad.
            </p>
          </div>

          <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
            Estamos desarrollando nuevas propuestas para sumar a nuestro portfolio.
            Cada marca que creamos pasa por un proceso de diseño, testeo y validación
            antes de llegar al mercado.
          </p>

          {/* Placeholder cards */}
          <div className="grid gap-3 sm:gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-dashed bg-muted/40 p-3 opacity-50"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-coming-soon/15 flex items-center justify-center shrink-0">
                  <span className="text-coming-soon font-heading font-bold text-xl sm:text-2xl">?</span>
                </div>
                <div className="flex-1">
                  <div className="h-3 sm:h-3.5 w-3/4 rounded bg-coming-soon/25 mb-2" />
                  <div className="h-2.5 w-1/2 rounded bg-coming-soon/15" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
