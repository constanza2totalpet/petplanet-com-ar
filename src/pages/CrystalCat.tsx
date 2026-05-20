import { useState } from "react";
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
import bolsaImg from "@/assets/bolsa-crystalcat.png";
import crystalcatLogo from "@/assets/crystalcat-logo-transparent.png";
import crystalCatHero from "@/assets/crystal-cat-hero-product.jpg";




const WHATSAPP_NUMBER = "5491123190096";
const WHATSAPP_DEFAULT_MSG = "Hola! Quiero consultar por Crystal Cat.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

const benefits = [
  { icon: iconCalendar, title: "Rinden más", desc: "Hasta 30 días de duración por carga.", bg: "bg-brand-pink", ring: "bg-brand-pink/25" },
  { icon: iconDrops, title: "Alta absorción", desc: "Libre de polvo, limpio y seguro.", bg: "bg-brand-orange", ring: "bg-brand-orange/25" },
  { icon: iconLeaf, title: "Natural e hipoalergénico", desc: "Apto para gatos sensibles.", bg: "bg-brand-green", ring: "bg-brand-green/25" },
  { icon: iconWaves, title: "Neutraliza olores", desc: "Control superior de aromas.", bg: "bg-brand-purple", ring: "bg-brand-purple/25" },
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

const reviews: { rating: number; text: string; date?: string }[] = [
  { rating: 5, text: "Excelente producto! Dura muchísimo más que la arena tradicional y no tiene olor. Mi gato se adaptó enseguida." },
  { rating: 5, text: "La verdad superó mis expectativas. Una bolsa me dura casi un mes con un gato. Súper recomendado." },
  { rating: 4, text: "Muy buena absorción y prácticamente sin polvo. Llegó rápido y bien embalado. Lo vuelvo a comprar." },
  { rating: 5, text: "Hace meses que lo uso, no vuelvo más a la arena común. Limpio, liviano y sin olores en casa." },
];

const overallRating = 4.8;
const reviewsCount = 124;

// WhatsApp icon (oficial)
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
  </svg>
);

const WhatsAppCTA = ({ className = "", children = "Consultar por WhatsApp" }: { className?: string; children?: React.ReactNode }) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-lg bg-whatsapp px-7 py-3 font-heading font-bold text-white shadow-lg hover:brightness-110 hover:shadow-xl transition-all ${className}`}
  >
    <WhatsAppIcon className="w-5 h-5" />
    {children}
  </a>
);

const LeadFormSection = () => {
  const [form, setForm] = useState({ nombre: "", localidad: "", negocio: "", whatsapp: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, localidad, negocio, whatsapp } = form;
    if (!nombre.trim() || !localidad.trim() || !whatsapp.trim()) return;
    const msg = `Hola! Quiero recibir información sobre Crystal Cat.\nNombre: ${nombre}\nLocalidad: ${localidad}\nNegocio: ${negocio || "-"}\nWhatsApp: ${whatsapp}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-crystal/50 focus:border-crystal/50";

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-background via-crystal-light/40 to-brand-orange-light/30 relative">
      <div aria-hidden className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crystal via-brand-green to-brand-orange" />
      <div className="container max-w-2xl px-5">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-3">
            ¿Querés vender Crystal Cat en tu negocio?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            Dejanos tus datos y te contactamos por WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:gap-4 bg-card border rounded-2xl p-5 sm:p-8 shadow-sm"
        >
          <input
            type="text"
            placeholder="Nombre y apellido *"
            required
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className={inputCls}
          />
          <input
            type="text"
            placeholder="Localidad *"
            required
            value={form.localidad}
            onChange={(e) => setForm({ ...form, localidad: e.target.value })}
            className={inputCls}
          />
          <input
            type="text"
            placeholder="Nombre del negocio (opcional)"
            value={form.negocio}
            onChange={(e) => setForm({ ...form, negocio: e.target.value })}
            className={inputCls}
          />
          <input
            type="tel"
            placeholder="Número de WhatsApp *"
            required
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className={inputCls}
          />
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-heading font-bold text-white shadow-md hover:brightness-110 hover:shadow-lg transition-all"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Quiero más información
          </button>
          <p className="text-xs text-muted-foreground text-center mt-1">
            Al enviar abrimos WhatsApp con tu mensaje listo.
          </p>
        </form>
      </div>
    </section>
  );
};

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
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-brand-orange-light via-background to-crystal-light/60" />
        <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-gradient-to-br from-brand-orange/20 via-crystal/15 to-brand-green/15 blur-3xl opacity-70" />

        <div className="container relative px-5 py-10 md:py-14">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <img src={crystalcatLogo} alt="Crystal Cat" className="h-12 sm:h-14 md:h-16 w-auto mx-auto mb-3 md:mb-4 drop-shadow-sm" />
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
              <WhatsAppCTA />
            </div>
          </div>

          <div className="relative mt-10 md:mt-14 max-w-6xl mx-auto">
            <img
              src={crystalCatHero}
              alt="Bolsa Crystal Cat con litera y piedras de sílica en un hogar"
              className="w-full h-auto object-contain drop-shadow-2xl"
              width={1920}
              height={1080}
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-crystal-light/60 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container px-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange text-center mb-2">Beneficios</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-center mb-10 md:mb-14">
            Por qué elegir Crystal Cat
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="group rounded-2xl border border-border/60 bg-card p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
                <img src={b.icon} alt={b.title} className="w-20 h-20 mb-5 object-contain rounded-full" loading="lazy" />
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
              <img src={bolsaImg} alt="Crystal Cat 3.8L packaging" className="w-full max-w-sm object-contain" width={500} height={500} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-crystal mb-2">El producto</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-4">Crystal Cat 3,8 L</h2>
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

      {/* INSTRUCCIONES */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container px-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange text-center mb-2">Modo de uso</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-center mb-10 md:mb-14">
            Fácil de usar en 4 pasos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {instructions.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border bg-card p-5 sm:p-6">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold">Consejos</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {tips.map((tip, i) => (
              <div key={i} className="rounded-xl border bg-card p-5 sm:p-6 hover:border-brand-green/30 transition-colors">
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container px-5">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">Opiniones</p>
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
                      className={`w-5 h-5 ${i < Math.round(overallRating) ? "fill-brand-yellow text-brand-yellow" : "text-muted-foreground/40"}`}
                    />
                  ))}
                </div>
                <span className="font-heading font-extrabold text-lg">{overallRating}</span>
                <span className="text-sm text-muted-foreground">({reviewsCount} opiniones)</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Reseñas reales de compradores verificados</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {reviews.map((r, i) => (
              <article key={i} className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className={`w-4 h-4 ${idx < r.rating ? "fill-brand-yellow text-brand-yellow" : "text-muted-foreground/30"}`} />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                    <BadgeCheck className="w-3 h-3" />
                    Compra verificada
                  </span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-5 flex-1">“{r.text}”</p>
                <div className="pt-3 border-t border-border/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-crystal/10 text-crystal flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">Comprador verificado</p>
                    {r.date && <p className="text-xs text-muted-foreground">{r.date}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={"https://wa.me/5491123190096?text=" + encodeURIComponent("Hola! Quiero recibir más información sobre los productos de Pet Planet.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-heading font-bold text-white shadow hover:brightness-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar por WhatsApp
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
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">Próximamente</p>
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
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-yellow mb-3">Para tu negocio</p>
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
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* LEAD FORM (WhatsApp) */}
      <LeadFormSection />
    </main>

    <Footer />
  </div>
);

export default CrystalCat;
