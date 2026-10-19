import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sprout, Sparkles, Hand, Globe2, Menu, X, MessageCircle, Instagram, Store } from "lucide-react";
import cativaLogoGreen from "@/assets/cativa-logo-green.png";
import cativaScene from "@/assets/cativa-scene.jpg";
import cativaSceneMobile from "@/assets/cativa-scene-mobile.jpg";
import cativaCard from "@/assets/cativa-card.png.asset.json";

const WHATSAPP_URL =
  "https://wa.me/5491123190096?text=" +
  encodeURIComponent("Hola! Quiero recibir más información sobre Cativa.");

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Conocé Cativa", href: "#conoce" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Dónde comprar", href: "#donde-comprar" },
];

const benefits = [
  { icon: Sprout, title: "Origen vegetal", text: "Elaboradas a base de mandioca." },
  { icon: Sparkles, title: "Higiene cotidiana", text: "Pensadas para acompañar la rutina diaria de tu gato." },
  { icon: Hand, title: "Practicidad", text: "Fáciles de usar y de mantener en casa." },
  { icon: Globe2, title: "Consideración por el ambiente", text: "Una alternativa natural para un hogar más consciente." },
];

// Presentaciones visibles en el packaging oficial
const presentations = [
  { name: "Granulado grueso", dot: "bg-cativa" },
  { name: "Granulado fino", dot: "bg-brand-orange" },
  { name: "Mixto", dot: "bg-crystal" },
];

// Completar con las URLs oficiales cuando estén disponibles
const stores: { name: string; url: string | null }[] = [
  { name: "Tienda online oficial", url: null },
  { name: "Mercado Libre", url: null },
  { name: "Pet shops adheridos", url: null },
];

const Logo = ({ className = "" }: { className?: string }) => (
  <img src={cativaLogoGreen} alt="Cativa" className={`w-auto object-contain ${className}`} />
);

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-cativa px-7 py-3 font-heading font-bold text-primary-foreground shadow-md hover:bg-cativa/90 transition-colors";
const btnSecondary =
  "inline-flex items-center justify-center rounded-full border border-cativa/40 px-7 py-3 font-heading font-bold text-cativa hover:bg-cativa/5 transition-colors";

const Cativa = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-cativa-cream text-foreground">
      <Helmet>
        <title>Cativa | Piedras sanitarias de mandioca para gatos</title>
        <meta
          name="description"
          content="Cativa: piedras sanitarias para gatos a base de mandioca. Una forma más natural de cuidar su higiene. Naturalmente, Cativa."
        />
        <link rel="canonical" href="https://petplanet.com.ar/cativa" />
        <meta property="og:title" content="Cativa | Naturalmente, Cativa." />
        <meta property="og:description" content="Piedras sanitarias para gatos a base de mandioca." />
        <meta property="og:url" content="https://petplanet.com.ar/cativa" />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-cativa-cream/90 backdrop-blur-md border-b border-cativa/10">
        <div className="container flex items-center justify-between h-16 md:h-20 px-5">
          <a href="#inicio" aria-label="Cativa, inicio"><Logo className="h-8 md:h-10" /></a>
          <nav className="hidden md:flex gap-8">
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-cativa-stone hover:text-cativa transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#donde-comprar" className={`hidden md:inline-flex ${btnPrimary} !py-2.5 !px-5 text-sm`}>Dónde comprar</a>
          <button className="md:hidden text-cativa" onClick={() => setOpen(!open)} aria-label="Abrir menú">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t border-cativa/10 px-5 pb-4 pt-2 flex flex-col gap-3">
            {nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-cativa-stone py-1">
                {l.label}
              </a>
            ))}
            <a href="#donde-comprar" onClick={() => setOpen(false)} className={btnPrimary}>Dónde comprar</a>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section id="inicio" className="relative min-h-[80svh] md:min-h-[620px] flex items-center overflow-hidden">
          <picture>
            <source media="(max-width: 767px)" srcSet={cativaSceneMobile} />
            <img src={cativaScene} alt="Gato junto a su bandeja con el packaging de Cativa" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
          </picture>
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-cativa-cream/95 via-cativa-cream/60 to-transparent" />
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-cativa-cream/95 via-cativa-cream/60 to-transparent" />
          <div className="relative z-10 container px-6 md:px-12 py-12 animate-fade-in-up">
            <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-cativa mb-4">Naturalmente, Cativa.</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-cativa leading-tight mb-4">
                Una forma más natural de cuidar su higiene.
              </h1>
              <p className="text-base md:text-lg text-cativa-stone mb-8">
                Conocé Cativa, piedras sanitarias a base de mandioca, pensadas para acompañar el bienestar de tu gato y tu hogar.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a href="#conoce" className={btnPrimary}>Descubrí Cativa</a>
                <a href="#donde-comprar" className={`${btnSecondary} bg-cativa-cream/70`}>Dónde comprar</a>
              </div>
            </div>
          </div>
        </section>

        {/* Conocé Cativa */}
        <section id="conoce" className="py-16 md:py-24">
          <div className="container max-w-3xl px-5 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-cativa-sage mb-3">Conocé Cativa</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa mb-6">
              La naturaleza también forma parte de su cuidado
            </h2>
            <div className="space-y-4 text-cativa-stone leading-relaxed">
              <p>Cativa nace de una idea simple: que la higiene de tu gato puede ser más natural.</p>
              <p>Por eso elegimos la mandioca como base de nuestras piedras sanitarias, una materia prima de origen vegetal que nos permite ofrecer una alternativa cálida y consciente para el día a día en casa.</p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="py-16 md:py-24 bg-card">
          <div className="container px-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa text-center mb-10 md:mb-14">
              Pensadas para su bienestar
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-cativa/10 bg-cativa-cream p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="mx-auto mb-4 w-14 h-14 rounded-full border border-cativa/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cativa" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-cativa mb-2">{title}</h3>
                  <p className="text-sm text-cativa-stone">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifestyle */}
        <section className="py-16 md:py-24">
          <div className="container px-5 grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={cativaScene} alt="Gato en un hogar luminoso" className="w-full h-full object-cover object-right" loading="lazy" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa mb-5">
                Un cuidado que se siente natural
              </h2>
              <p className="text-cativa-stone leading-relaxed">
                Un hogar limpio, un gato tranquilo y una convivencia en armonía. Cativa acompaña ese equilibrio con una propuesta simple y natural.
              </p>
            </div>
          </div>
        </section>

        {/* Producto */}
        <section id="producto" className="py-16 md:py-24 bg-card">
          <div className="container px-5 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-xs font-semibold tracking-widest uppercase text-cativa-sage mb-3">El producto</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa mb-5">
                Piedras sanitarias de mandioca
              </h2>
              <p className="text-cativa-stone mb-6">Disponibles en tres presentaciones:</p>
              <ul className="space-y-3 mb-8 inline-block text-left">
                {presentations.map((p) => (
                  <li key={p.name} className="flex items-center gap-3 font-medium">
                    <span className={`w-3 h-3 rounded-full ${p.dot}`} />
                    {p.name}
                  </li>
                ))}
              </ul>
              <div><a href="#donde-comprar" className={btnPrimary}>Encontrá tu Cativa</a></div>
            </div>
            <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-xl">
              <img src={cativaCard.url} alt="Packaging de Cativa en sus tres presentaciones" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Dónde comprar */}
        <section id="donde-comprar" className="py-16 md:py-24">
          <div className="container max-w-4xl px-5 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa mb-4">Dónde comprar</h2>
            <p className="text-cativa-stone mb-10">Encontrá Cativa en nuestros canales oficiales.</p>
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {stores.map((s) => (
                <div key={s.name} className="rounded-2xl border border-cativa/10 bg-card p-6 flex flex-col items-center gap-3">
                  <Store className="w-7 h-7 text-cativa" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-cativa">{s.name}</h3>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} !py-2 text-sm`}>Ir a comprar</a>
                  ) : (
                    <span className="text-sm text-cativa-stone">Próximamente</span>
                  )}
                </div>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3 font-heading font-bold text-primary-foreground shadow-md hover:brightness-95">
              <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-cativa/10 bg-card py-10">
        <div className="container px-5 grid sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <Logo className="h-9 mx-auto sm:mx-0 mb-2" />
            <p className="text-sm text-cativa-stone">Naturalmente, Cativa.</p>
          </div>
          <ul className="space-y-2 text-sm text-cativa-stone">
            {nav.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-cativa">{l.label}</a></li>
            ))}
          </ul>
          <div className="text-sm text-cativa-stone space-y-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center sm:justify-start hover:text-cativa">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <span className="flex items-center gap-2 justify-center sm:justify-start opacity-60"><Instagram className="w-4 h-4" /> Instagram (próximamente)</span>
            <p className="pt-2">Una marca distribuida por <Link to="/" className="font-semibold hover:text-cativa">Pet Planet</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cativa;
