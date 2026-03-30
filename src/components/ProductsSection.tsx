import bolsaImg from "@/assets/bolsa-crystalcat.png";
import crystalcatLogo from "@/assets/crystalcat-logo.png";
import { PawPrint, Quote, Droplets, Wind, CalendarCheck } from "lucide-react";

const features = [
  { icon: Droplets, label: "Alta absorción" },
  { icon: Wind, label: "Neutraliza olores" },
  { icon: CalendarCheck, label: "Mayor rendimiento" },
];

const ProductsSection = () => (
  <section id="productos" className="py-20 bg-background">
    <div className="container">
      {/* Section header */}
      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center mb-4">
        Nuestros Productos
      </h2>
      <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
        Trabajamos con marcas líderes para ofrecer lo mejor en cuidado de mascotas.
      </p>

      {/* Brands grid */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* ── Crystal Cat ── */}
        <div className="flex flex-col">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Pet Planet
          </p>

          {/* Logo */}
          <div className="mb-6">
            <img
              src={crystalcatLogo}
              alt="Crystalcat logo"
              loading="lazy"
              width={1024}
              height={512}
              className="h-12 w-auto"
            />
          </div>

          {/* Quote */}
          <div className="flex gap-3 mb-6">
            <Quote className="w-8 h-8 text-primary/40 shrink-0 mt-1" />
            <p className="text-lg font-heading font-semibold text-foreground/80 italic">
              Piedras sanitarias de sílica de alta absorción para gatos.
            </p>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Crystal Cat es un producto de calidad premium, elaborado con sílica gel de alta pureza.
            Su gran poder de absorción y control de olores lo convierte en la mejor opción para el
            cuidado e higiene de tu gato.
          </p>

          {/* Features */}
          <div className="flex gap-4 mb-8">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{f.label}</span>
              </div>
            ))}
          </div>

          {/* Product image card */}
          <div className="group rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center">
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
              Piedras sanitarias de sílica. Liviano y fácil de manipular. 100% natural.
            </p>
          </div>
        </div>

        {/* ── Segunda Marca (Próximamente) ── */}
        <div className="flex flex-col">
          <p className="text-xs font-semibold tracking-widest uppercase text-coming-soon mb-3">
            Pet Planet
          </p>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-full bg-coming-soon/20 flex items-center justify-center">
              <PawPrint className="w-7 h-7 text-coming-soon" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-coming-soon">
              Próximamente
            </h3>
          </div>

          <div className="flex gap-3 mb-6">
            <Quote className="w-8 h-8 text-coming-soon/40 shrink-0 mt-1" />
            <p className="text-lg font-heading font-semibold text-foreground/60 italic">
              Nueva marca en desarrollo para nuestro catálogo.
            </p>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Estamos trabajando para incorporar nuevas marcas a nuestro catálogo. Pronto tendrás
            más opciones de productos de calidad para el cuidado de tus mascotas.
          </p>

          {/* Placeholder cards */}
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-dashed bg-muted/40 p-3 opacity-50"
              >
                <div className="w-20 h-20 rounded-lg bg-coming-soon/15 flex items-center justify-center shrink-0">
                  <span className="text-coming-soon font-heading font-bold text-2xl">?</span>
                </div>
                <div className="flex-1">
                  <div className="h-3.5 w-3/4 rounded bg-coming-soon/25 mb-2" />
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
