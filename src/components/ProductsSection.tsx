import clasicoImg from "@/assets/crystal-cat-clasico.jpg";
import lavandaImg from "@/assets/crystal-cat-lavanda.jpg";
import ultraImg from "@/assets/crystal-cat-ultra.jpg";
import { PawPrint, Sparkles, Quote } from "lucide-react";

const crystalProducts = [
  {
    name: "Crystal Cat Clásico",
    desc: "Piedras sanitarias de sílica con máxima absorción y control de olores.",
    img: clasicoImg,
  },
  {
    name: "Crystal Cat Lavanda",
    desc: "Fórmula con fragancia a lavanda para un ambiente fresco y agradable.",
    img: lavandaImg,
  },
  {
    name: "Crystal Cat Ultra Absorbente",
    desc: "Tecnología de ultra absorción para hogares con múltiples gatos.",
    img: ultraImg,
  },
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

      {/* Brands grid – two columns like reference */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* ── Crystal Cat ── */}
        <div className="flex flex-col">
          {/* Brand header */}
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Pet Planet
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">
              Crystal Cat
            </h3>
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

          {/* Product cards */}
          <div className="grid gap-4">
            {crystalProducts.map((p) => (
              <div
                key={p.name}
                className="group flex items-center gap-4 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow p-3"
              >
                <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden shrink-0">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm mb-0.5">{p.name}</h4>
                  <p className="text-xs text-muted-foreground leading-snug">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Segunda Marca (Próximamente) ── */}
        <div className="flex flex-col">
          {/* Brand header */}
          <p className="text-xs font-semibold tracking-widest uppercase text-coming-soon mb-3">
            Pet Planet
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-coming-soon/20 flex items-center justify-center">
              <PawPrint className="w-7 h-7 text-coming-soon" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-coming-soon">
              Próximamente
            </h3>
          </div>

          {/* Quote */}
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
