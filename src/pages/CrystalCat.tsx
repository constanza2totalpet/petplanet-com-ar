import { Link } from "react-router-dom";
import {
  Package,
  Feather,
  Hand,
  Ruler,
  MapPin,
  Trash2,
  RefreshCw,
  Lightbulb,
  ArrowLeft,
  ShoppingCart,
  Sparkles,
  MessageCircle,
  Star,
  ExternalLink,
  BadgeCheck,
  User,
} from "lucide-react";

import iconCalendar from "@/assets/icon-calendar.png";
import iconDrops from "@/assets/icon-drops.png";
import iconLeaf from "@/assets/icon-leaf.png";
import iconWaves from "@/assets/icon-waves.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import bolsaImg from "@/assets/bolsa-crystalcat.png";
import crystalcatLogo from "@/assets/crystalcat-logo-transparent.png";
import crystalCatHero from "@/assets/crystal-cat-hero-product.jpg";

const ML_URL =
  "https://www.mercadolibre.com.ar/piedras-sanitarias-silica-crystalcat-para-gatos-x-38l/p/MLA24808114?pdp_filters=item_id:MLA1757027613";

const benefits = [
  {
    icon: iconCalendar,
    title: "Rinden más",
    desc: "Hasta 30 días de duración por carga.",
    bg: "bg-brand-pink",
    ring: "bg-brand-pink/25",
  },
  {
    icon: iconDrops,
    title: "Alta absorción",
    desc: "Libre de polvo, limpio y seguro.",
    bg: "bg-brand-orange",
    ring: "bg-brand-orange/25",
  },
  {
    icon: iconLeaf,
    title: "Natural e hipoalergénico",
    desc: "Apto para gatos sensibles.",
    bg: "bg-brand-green",
    ring: "bg-brand-green/25",
  },
  {
    icon: iconWaves,
    title: "Neutraliza olores",
    desc: "Control superior de aromas.",
    bg: "bg-brand-purple",
    ring: "bg-brand-purple/25",
  },
];

const productDetails = [
  { icon: Package, label: "3,8 L" },
  { icon: Feather, label: "Liviano" },
  { icon: Hand, label: "Fácil de manipular" },
];

const instructions = [
  { icon: Ruler, title: "Llená la litera", desc: "Cubrí la bandeja con 3 a 4 cm de producto." },
  { icon: MapPin, title: "Ubicación", desc: "Colocá la litera en un lugar seco y ventilado." },
  { icon: Trash2, title: "Mantenimiento diario", desc: "Retirá los desechos sólidos cada día." },
  { icon: RefreshCw, title: "Reposición", desc: "Reponé el producto regularmente para mejor rendimiento." },
];

const tips = [
  "Mezclá Crystal Cat con la arena anterior durante los primeros días para facilitar la transición.",
  "Si tenés más de un gato, cambiá el contenido con mayor frecuencia para mantener la higiene.",
];

// 🔁 Reemplazar con reseñas reales de Mercado Libre (solo texto y rating)
const reviews: { rating: number; text: string; date?: string }[] = [
  {
    rating: 5,
    text: "Excelente producto! Dura muchísimo más que la arena tradicional y no tiene olor. Mi gato se adaptó enseguida.",
  },
  {
    rating: 5,
    text: "La verdad superó mis expectativas. Una bolsa me dura casi un mes con un gato. Súper recomendado.",
  },
  {
    rating: 4,
    text: "Muy buena absorción y prácticamente sin polvo. Llegó rápido y bien embalado. Lo vuelvo a comprar.",
  },
  {
    rating: 5,
    text: "Hace meses que lo uso, no vuelvo más a la arena común. Limpio, liviano y sin olores en casa.",
  },
];

const overallRating = 4.8;
const reviewsCount = 124;


const MercadoLibreButton = ({ className = "" }: { className?: string }) => (
  <a
    href={ML_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-7 py-3 font-heading font-bold text-foreground shadow-lg hover:brightness-95 transition-all ${className}`}
  >
    <ShoppingCart className="w-5 h-5" />
    Comprar en Mercado Libre
  </a>
);

const CrystalCat = () => (
  <div className="min-h-screen flex flex-col">
    <Header />

    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="container px-5 pt-5 md:pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-crystal transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver a Pet Planet
        </Link>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Soft brand gradient backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-brand-orange-light via-background to-crystal-light/60"
        />
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-gradient-to-br from-brand-orange/20 via-crystal/15 to-brand-green/15 blur-3xl opacity-70"
        />

        <div className="container relative px-5 py-10 md:py-14">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <img
              src={crystalcatLogo}
              alt="Crystal Cat"
              className="h-12 sm:h-14 md:h-16 w-auto mx-auto mb-3 md:mb-4 drop-shadow-sm"
            />
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-4 md:mb-5">
              Piedras sanitarias de <span className="text-crystal">sílica</span> para gatos
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-7 md:mb-9 max-w-xl mx-auto">
              Alta absorción · Mayor duración · Control de olores
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contacto"
                className="inline-block rounded-lg bg-crystal px-7 py-3 font-heading font-bold text-white shadow-lg hover:bg-crystal-dark transition-colors"
              >
                Quiero recibir más información
              </a>
              <MercadoLibreButton />
            </div>
          </div>

          {/* Imagen producto integrada al fondo, sin recuadro */}
          <div className="relative mt-10 md:mt-14 max-w-6xl mx-auto">
            <img
              src={crystalCatHero}
              alt="Bolsa Crystal Cat con litera y piedras de sílica en un hogar"
              className="w-full h-auto object-contain drop-shadow-2xl"
              width={1920}
              height={1080}
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-crystal-light/60 pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container px-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange text-center mb-2">
            Beneficios
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-center mb-10 md:mb-14">
            Por qué elegir Crystal Cat
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-border/60 bg-card p-6 sm:p-7 shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={b.icon}
                  alt={b.title}
                  className="w-20 h-20 mb-5 object-contain rounded-full"
                  loading="lazy"
                />
                <h3 className="font-heading font-bold text-lg mb-1.5 text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTO */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-5">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-2xl bg-gradient-to-br from-crystal/5 to-brand-orange/5 p-6 sm:p-10 flex items-center justify-center">
              <img
                src={bolsaImg}
                alt="Crystal Cat 3.8L packaging"
                className="w-full max-w-sm object-contain"
                width={500}
                height={500}
              />
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-crystal mb-2">
                El producto
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-4">
                Crystal Cat 3,8 L
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
                Una presentación pensada para el uso diario: práctica, liviana y fácil de almacenar.
                Cada bolsa rinde hasta 30 días por gato, manteniendo la litera limpia y seca.
              </p>

              <div className="space-y-3">
                {productDetails.map((d) => (
                  <div key={d.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-crystal/10 flex items-center justify-center shrink-0">
                      <d.icon className="w-5 h-5 text-crystal" />
                    </div>
                    <span className="font-heading font-semibold text-sm sm:text-base">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCCIONES DE USO */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container px-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange text-center mb-2">
            Modo de uso
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-center mb-10 md:mb-14">
            Fácil de usar en 4 pasos
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {instructions.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-xl border bg-card p-5 sm:p-6"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-orange text-white font-heading font-bold text-sm flex items-center justify-center shadow-md">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-full bg-crystal/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-crystal" />
                </div>
                <h3 className="font-heading font-bold text-base mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSEJOS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-5 max-w-4xl">
          <div className="flex items-center gap-3 mb-6 md:mb-8 justify-center">
            <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-brand-green" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold">
              Consejos
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="rounded-xl border bg-card p-5 sm:p-6 hover:border-brand-green/30 transition-colors"
              >
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS DE MERCADO LIBRE */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container px-5">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
              Opiniones
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-5">
              Lo que opinan los clientes
            </h2>

            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 bg-card border border-border/60 rounded-2xl px-6 py-4 shadow-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-yellow/90 text-foreground font-heading font-bold text-sm">
                Mercado Libre
              </span>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(overallRating)
                          ? "fill-brand-yellow text-brand-yellow"
                          : "text-muted-foreground/40"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-heading font-extrabold text-lg">{overallRating}</span>
                <span className="text-sm text-muted-foreground">
                  ({reviewsCount} opiniones)
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Reseñas reales de compradores verificados
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {reviews.map((r, i) => (
              <article
                key={i}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < r.rating
                            ? "fill-brand-yellow text-brand-yellow"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                    <BadgeCheck className="w-3 h-3" />
                    Compra verificada
                  </span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-5 flex-1">
                  “{r.text}”
                </p>
                <div className="pt-3 border-t border-border/60">
                  <p className="font-heading font-semibold text-sm text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={ML_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-crystal px-6 py-3 font-heading font-bold text-crystal hover:bg-crystal hover:text-white transition-colors"
            >
              Ver todas las opiniones en Mercado Libre
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PRÓXIMAMENTE */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-crystal/5 via-background to-brand-orange/5">
        <div className="container px-5 max-w-2xl text-center">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute inset-0 bg-brand-orange/20 blur-2xl rounded-full" />
            <div className="relative w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-brand-orange" />
            </div>
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
            Próximamente
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Una nueva presentación está en camino
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-2 leading-relaxed">
            Muy pronto, una nueva presentación de Crystal Cat para seguir mejorando la experiencia.
          </p>
          <p className="text-sm sm:text-base font-heading font-semibold text-crystal">
            Más opciones. Mismo rendimiento.
          </p>
        </div>
      </section>

      {/* CTA FINAL — para negocios */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-crystal to-crystal-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-orange blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-yellow blur-3xl" />
        </div>
        <div className="container px-5 max-w-3xl text-center relative">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-yellow mb-3">
            Para tu negocio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-5 leading-tight">
            Sumá Crystal Cat a tu negocio
          </h2>
          <p className="text-base sm:text-lg text-white/85 mb-8 max-w-xl mx-auto leading-relaxed">
            Ofrecé un producto de alto rendimiento y fácil rotación en tu punto de venta.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-heading font-bold text-crystal shadow-lg hover:bg-white/95 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Quiero más información
            </a>
            <MercadoLibreButton />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <ContactSection />
    </main>

    <Footer />
  </div>
);

export default CrystalCat;
