import clasicoImg from "@/assets/crystal-cat-clasico.jpg";
import lavandaImg from "@/assets/crystal-cat-lavanda.jpg";
import ultraImg from "@/assets/crystal-cat-ultra.jpg";
import { Sparkles } from "lucide-react";

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

const placeholderProducts = [
  { name: "Producto 1" },
  { name: "Producto 2" },
  { name: "Producto 3" },
];

const ProductsSection = () => (
  <section id="productos" className="py-20 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center mb-4">
        Nuestros Productos
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Trabajamos con marcas líderes para ofrecer lo mejor en cuidado de mascotas.
      </p>

      {/* Crystal Cat – Featured brand */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-heading font-bold text-foreground">Crystal Cat</h3>
          <span className="ml-2 rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
            Marca destacada
          </span>
        </div>
        <p className="text-muted-foreground mb-8 max-w-lg">
          Piedras sanitarias de sílica de alta absorción para gatos
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {crystalProducts.map((p) => (
            <div
              key={p.name}
              className="group rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-bold text-lg mb-1">{p.name}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming soon brand */}
      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-1">Próximamente</h3>
        <p className="text-muted-foreground mb-8 max-w-lg">
          Estamos trabajando para incorporar nuevas marcas a nuestro catálogo
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProducts.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-dashed bg-muted/50 overflow-hidden opacity-60"
            >
              <div className="aspect-square bg-coming-soon/20 flex items-center justify-center">
                <span className="text-coming-soon font-heading font-bold text-5xl">?</span>
              </div>
              <div className="p-5">
                <div className="h-4 w-3/4 rounded bg-coming-soon/30 mb-2" />
                <div className="h-3 w-1/2 rounded bg-coming-soon/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
