import { Link } from "react-router-dom";
import bolsaImg from "@/assets/bolsa-crystalcat.png";
import crystalcatLogo from "@/assets/crystalcat-logo.png";
import furacaoLogo from "@/assets/furacao-pet-logo.png";
import {
  PawPrint,
  Quote,
  Droplets,
  Wind,
  CalendarCheck,
  ArrowRight,
  Gamepad2,
  Sparkles,
} from "lucide-react";

const features = [
  { icon: Droplets, label: "Alta absorción" },
  { icon: Wind, label: "Control de olores" },
  { icon: CalendarCheck, label: "Mayor rendimiento" },
];

const ProductsSection = () => (
  <section id="productos" className="py-14 md:py-20 bg-background">
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
          className="group rounded-2xl border bg-card p-6 sm:p-7 flex flex-col hover:shadow-lg hover:border-crystal/40 transition-all"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
            Marca propia
          </p>
          <div className="mb-5">
            <img
              src={crystalcatLogo}
              alt="Crystal Cat"
              loading="lazy"
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          <div className="flex gap-2 mb-4">
            <Quote className="w-6 h-6 text-crystal/40 shrink-0" />
            <p className="text-sm sm:text-base font-heading font-semibold text-foreground/80 italic">
              Piedras sanitarias de sílica premium para gatos exigentes.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Sílica gel de alta pureza. Liviano, higiénico y de larga duración.
          </p>

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

          <div className="aspect-square rounded-xl bg-gradient-to-br from-crystal/5 to-brand-orange/5 overflow-hidden mb-4 flex-1 flex items-center justify-center p-4">
            <img
              src={bolsaImg}
              alt="Crystal Cat 3.8L"
              loading="lazy"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <span className="inline-flex items-center gap-1 text-sm font-heading font-bold text-crystal group-hover:gap-2 transition-all">
            Ver producto <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        {/* ── Furaçao Pet ── */}
        <div className="rounded-2xl border bg-card p-6 sm:p-7 flex flex-col">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-pink mb-3">
            Marca importada
          </p>

          <div className="mb-5">
            <img
              src={furacaoLogo}
              alt="Furaçao Pet"
              loading="lazy"
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          <div className="flex gap-2 mb-4">
            <Quote className="w-6 h-6 text-brand-pink/40 shrink-0" />
            <p className="text-sm sm:text-base font-heading font-semibold text-foreground/80 italic">
              Diversión y juego para acompañar cada momento.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Importamos y distribuimos juguetes para mascotas, sumando variedad y color al rubro pet.
          </p>

          <div className="aspect-square rounded-xl bg-gradient-to-br from-brand-pink/10 via-brand-yellow/10 to-brand-orange/10 mb-4 flex-1 flex items-center justify-center relative overflow-hidden p-6">
            <img
              src={furacaoLogo}
              alt="Furaçao Pet"
              loading="lazy"
              className="w-3/4 h-auto object-contain relative z-10"
            />
          </div>

          <span className="inline-flex items-center gap-1 text-sm font-heading font-bold text-brand-pink">
            Próximamente más info
          </span>
        </div>

        {/* ── Marca en desarrollo ── */}
        <div className="rounded-2xl border border-dashed bg-muted/20 p-6 sm:p-7 flex flex-col">
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

          <div className="flex gap-2 mb-4">
            <Quote className="w-6 h-6 text-coming-soon/40 shrink-0" />
            <p className="text-sm sm:text-base font-heading font-semibold text-foreground/60 italic">
              Nuevas propuestas en camino, con la misma visión de calidad.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Estamos diseñando, testeando y validando nuevas marcas para sumar a nuestro portfolio.
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
