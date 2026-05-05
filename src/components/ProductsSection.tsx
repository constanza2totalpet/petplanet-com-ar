import { Link } from "react-router-dom";
import crystalcatScene from "@/assets/crystalcat-scene.jpg";
import crystalcatLogo from "@/assets/crystalcat-logo-transparent.png";
import furacaoLogo from "@/assets/furacao-pet-logo-transparent.png";
import furacaoScene from "@/assets/furacao-scene.jpg";
import {
  PawPrint,
  Droplets,
  Wind,
  CalendarCheck,
  ArrowRight,
  Sparkles,
  Check,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";

const ML_URL =
  "https://www.mercadolibre.com.ar/piedras-sanitarias-silica-crystalcat-para-gatos-x-38l/p/MLA24808114?pdp_filters=item_id:MLA1757027613";

const features = [
  { icon: Droplets, label: "Alta absorción" },
  { icon: Wind, label: "Control de olores" },
  { icon: CalendarCheck, label: "Mayor rendimiento" },
];

const ProductsSection = () => (
  <section id="productos" className="py-14 md:py-20 bg-gradient-to-b from-crystal-light/50 via-background to-brand-orange-light/40 relative">
    <div aria-hidden className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-green via-brand-orange to-crystal" />
    <div className="container px-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-center mb-4">
        Nuestras marcas
      </h2>
      <p className="text-center text-muted-foreground mb-10 md:mb-16 max-w-xl mx-auto text-sm sm:text-base">
        Cada marca que desarrollamos o distribuimos nace con un propósito claro: ofrecer productos consistentes, confiables y pensados para el día a día.
      </p>

      {/* Grid 3 marcas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* ── Crystal Cat ── */}
        <Link
          to="/crystal-cat"
          className="group rounded-2xl border bg-gradient-to-br from-crystal/10 via-card to-brand-orange/5 p-6 sm:p-7 flex flex-col hover:shadow-xl hover:border-crystal/40 transition-all"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
            Marca importada
          </p>
          <div className="mb-5 py-2">
            <img
              src={crystalcatLogo}
              alt="Crystal Cat"
              loading="lazy"
              className="h-12 sm:h-14 w-auto drop-shadow-sm"
            />
          </div>

          <div className="mb-4">
            <p className="text-sm sm:text-base font-heading font-semibold text-foreground/80">
              Piedras sanitarias de sílica
            </p>
            <p className="text-sm text-muted-foreground">
              Desarrollo e importación
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-1.5 text-xs text-muted-foreground bg-crystal/8 rounded-full px-3 py-1.5"
              >
                <f.icon className="w-3.5 h-3.5 text-crystal" />
                <span className="font-medium">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="aspect-square rounded-xl overflow-hidden mb-4 flex-1 shadow-md ring-1 ring-black/5">
            <img
              src={crystalcatScene}
              alt="Crystal Cat piedras de sílica en uso"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-sm font-heading font-bold text-crystal group-hover:gap-2 transition-all">
              Ver producto <ArrowRight className="w-4 h-4" />
            </span>
            <a
              href={ML_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-yellow px-4 py-2.5 font-heading font-bold text-sm text-foreground shadow hover:brightness-95 transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              Comprar en Mercado Libre
            </a>
          </div>
        </Link>

        {/* ── Furaçao Pet ── */}
        <div className="group rounded-2xl border bg-gradient-to-br from-brand-orange/10 via-card to-brand-pink/5 p-6 sm:p-7 flex flex-col hover:shadow-xl hover:border-brand-pink/40 transition-all">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-pink mb-3">
            Marca importada
          </p>

          <div className="mb-5 py-2">
            <img
              src={furacaoLogo}
              alt="Furaçao Pet"
              loading="lazy"
              className="h-12 sm:h-14 w-auto drop-shadow-sm"
            />
          </div>

          <div className="mb-4">
            <p className="text-sm sm:text-base font-heading font-semibold text-foreground/80">
              Juguetes importados para mascotas
            </p>
            <p className="text-sm text-muted-foreground">
              Importación directa
            </p>
          </div>

          <p className="text-sm text-foreground/70 mb-4">
            Juguetes de goma, soga y estimulación
          </p>

          <ul className="space-y-2 mb-5">
            {[
              "Alta resistencia",
              "Diseñados para el juego activo",
              "Variedad de formatos y tamaños",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="aspect-square rounded-xl overflow-hidden mb-4 flex-1 shadow-md ring-1 ring-black/5">
            <img
              src={furacaoScene}
              alt="Juguetes Furaçao Pet en escena de hogar"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <a
            href="https://wa.me/5491123190096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 font-heading font-bold text-sm text-white shadow hover:brightness-95 transition-all mb-2"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar por WhatsApp
          </a>

          <p className="text-xs text-muted-foreground italic">
            Ideal para pet shops
          </p>
        </div>

        {/* ── Marca en desarrollo ── */}
        <div className="rounded-2xl border border-dashed bg-gradient-to-br from-muted/40 to-muted/10 p-6 sm:p-7 flex flex-col">
          <p className="text-xs font-semibold tracking-widest uppercase text-coming-soon mb-3">
            En desarrollo
          </p>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-coming-soon/15 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-coming-soon" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-foreground/70">
              Marca en desarrollo
            </h3>
          </div>

          <p className="text-sm sm:text-base font-heading font-semibold text-foreground/70 mb-5">
            Próximamente
          </p>

          <div className="grid gap-3 flex-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-dashed bg-background/40 p-3 opacity-70"
              >
                <div className="w-12 h-12 rounded-lg bg-coming-soon/10 flex items-center justify-center shrink-0">
                  <PawPrint className="w-5 h-5 text-coming-soon" />
                </div>
                <div className="flex-1">
                  <div className="h-2.5 w-3/4 rounded bg-coming-soon/20 mb-2" />
                  <div className="h-2 w-1/2 rounded bg-coming-soon/15" />
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
