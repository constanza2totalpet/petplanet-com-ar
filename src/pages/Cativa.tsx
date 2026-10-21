import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sprout, Sparkles, Hand, Globe2, Menu, X, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import mlWordmark from "@/assets/mercado-libre-wordmark.svg";
import { CATIVA_MERCADO_LIBRE_URL, CATIVA_WHOLESALE_WHATSAPP_URL } from "@/lib/cativa-purchase";
import cativaLogoGreen from "@/assets/cativa-logo-green.png";
import cativaLogoWhite from "@/assets/cativa-logo-white.png.asset.json";
import cativaScene from "@/assets/cativa-scene.jpg";
import cativaSceneMobile from "@/assets/cativa-scene-mobile.jpg";
import cativaLifestyle from "@/assets/cativa-lifestyle.jpg";
import cativaTexture from "@/assets/cativa-texture.jpg";
import cativaTray from "@/assets/cativa-tray.jpg";
import cativaCatTray from "@/assets/cativa-cat-tray.jpg";
import cativaBagGrueso from "@/assets/cativa-bag-grueso.jpg";
import cativaBagFino from "@/assets/cativa-bag-fino.jpg";
import cativaBagMixto from "@/assets/cativa-bag-mixto.jpg";
import petplanetLogo from "@/assets/petplanet-logo-trimmed.png";

const WHATSAPP_URL =
  "https://wa.me/5491123190096?text=" +
  encodeURIComponent("Hola! Quiero consultar por Cativa.");

const INSTAGRAM_URL = "https://www.instagram.com/cativa.ar/";

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Conocé Cativa", href: "#conoce" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Dónde comprar", href: "#donde-comprar" },
];

const benefits = [
  { icon: Sprout, title: "Origen vegetal", text: "Elaborada a base de mandioca." },
  { icon: Sparkles, title: "Higiene cotidiana", text: "Pensada para acompañar la rutina diaria de tu gato." },
  { icon: Hand, title: "Practicidad", text: "Fáciles de usar y de mantener en casa." },
  { icon: Globe2, title: "Consideración por el ambiente", text: "Una alternativa natural para un hogar más consciente." },
];

// Presentaciones visibles en el packaging oficial
const presentations = [
  {
    name: "Granulado grueso",
    description: "Gránulos de tamaño grueso.",
    image: cativaBagGrueso,
    alt: "Packaging de Cativa granulado grueso",
    accent: "bg-cativa",
  },
  {
    name: "Granulado fino",
    description: "Gránulos de tamaño fino.",
    image: cativaBagFino,
    alt: "Packaging de Cativa granulado fino junto a un gato",
    accent: "bg-brand-orange",
  },
  {
    name: "Mixto",
    description: "Combinación de gránulos gruesos y finos.",
    image: cativaBagMixto,
    alt: "Packaging de Cativa mixto",
    accent: "bg-crystal",
  },
];

const Logo = ({ className = "" }: { className?: string }) => (
  <img src={cativaLogoGreen} alt="Cativa" className={`w-auto object-contain ${className}`} />
);

const PETPLANET_URL = "https://www.petplanet.com.ar/";

// Logo oficial de Pet Planet (archivo original del proyecto, sin retocar).
// La única diferencia con el PNG de origen es el recorte del borde transparente vacío:
// los píxeles del logo, su proporción y sus colores son exactamente los mismos.
const PetPlanetLink = ({ imgClassName = "" }: { imgClassName?: string }) => (
  <a
    href={PETPLANET_URL}
    title="Pet Planet — sitio principal"
    aria-label="Pet Planet, ir al sitio principal de Pet Planet"
    className="group inline-flex shrink-0 cursor-pointer items-center opacity-80 transition-opacity duration-200 hover:opacity-100"
  >
    <img
      src={petplanetLogo}
      alt="Pet Planet"
      className={`w-auto origin-center transition-transform duration-200 group-hover:scale-[1.03] ${imgClassName}`}
    />
  </a>
);

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-cativa px-7 py-3 font-heading font-bold text-primary-foreground shadow-md hover:bg-cativa/90 transition-colors";
const btnSecondary =
  "inline-flex items-center justify-center rounded-full border border-cativa/40 px-7 py-3 font-heading font-bold text-cativa hover:bg-cativa/5 transition-colors";

const whatsappIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z"/></svg>
);

const Cativa = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-cativa-cream text-foreground">
      <Helmet>
        <title>Cativa | Arena sanitaria para gatos a base de mandioca</title>
        <meta
          name="description"
          content="Cativa: arena sanitaria para gatos a base de mandioca. Una forma más natural de cuidar su higiene. Naturalmente, Cativa."
        />
        <link rel="canonical" href="https://petplanet.com.ar/cativa" />
        <meta property="og:title" content="Cativa | Naturalmente, Cativa." />
        <meta property="og:description" content="Arena sanitaria para gatos a base de mandioca." />
        <meta property="og:url" content="https://petplanet.com.ar/cativa" />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-cativa-cream/90 backdrop-blur-md border-b border-cativa/10">
        {/* Mobile: la marca madre ocupa una franja superior propia para no competir con la fila principal */}
        <div className="md:hidden border-b border-cativa/10 bg-cativa/5">
          <div className="container flex items-center h-12 px-5">
            <PetPlanetLink imgClassName="h-6" />
          </div>
        </div>

        <div className="container flex items-center justify-between h-16 md:h-20 px-5">
          <div className="flex min-w-0 items-center gap-4 md:gap-6">
            {/* Marca madre: identificación y acceso de regreso al sitio principal */}
            <PetPlanetLink imgClassName="hidden md:block h-[30px]" />
            <a href="#inicio" aria-label="Cativa, inicio" className="shrink-0">
              <Logo className="h-8 md:h-10" />
            </a>
          </div>
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
                Conocé Cativa, arena sanitaria para gatos a base de mandioca, pensada para acompañar el bienestar de tu gato y tu hogar.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a href="#conoce" className={btnPrimary}>Descubrí Cativa</a>
                <a href="#donde-comprar" className={`${btnSecondary} bg-cativa-cream/70`}>Dónde comprar</a>
              </div>
            </div>
          </div>
          {/* Detalle orgánico inspirado en las curvas del logo */}
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-cativa-cream">
            <path d="M0,64 C240,110 480,20 760,50 C1040,80 1240,110 1440,60 L1440,120 L0,120 Z" fill="currentColor" />
          </svg>
        </section>

        {/* Conocé Cativa — composición editorial */}
        <section id="conoce" className="py-16 md:py-28 scroll-mt-24">
          <div className="container px-5 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold tracking-widest uppercase text-cativa-sage mb-4">Conocé Cativa</p>
              <h2 className="text-2xl sm:text-3xl md:text-[2.75rem] md:leading-[1.15] font-heading font-extrabold text-cativa mb-6">
                La naturaleza también forma parte de su cuidado
              </h2>
              <div className="space-y-4 text-cativa-stone leading-relaxed md:text-lg">
                <p>Cativa nace de una idea simple: que la higiene de tu gato puede ser más natural.</p>
                <p>Por eso elegimos la mandioca como base de nuestra arena sanitaria, una materia prima de origen vegetal que nos permite ofrecer una alternativa cálida y consciente para el día a día en casa.</p>
              </div>
            </div>
            <div className="relative max-w-md mx-auto md:max-w-none w-full pb-4 pl-4 md:pb-6 md:pl-6">
              <div aria-hidden="true" className="absolute inset-0 rounded-[2rem] border border-cativa/20" />
              <img
                src={cativaLifestyle}
                alt="Gato relajado en un living luminoso con plantas"
                className="relative w-full h-auto rounded-[2rem] object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
          </div>
        </section>

        {/* ¿Qué es la arena sanitaria de mandioca? — composición asimétrica */}
        <section id="arena-de-mandioca" aria-labelledby="arena-de-mandioca-title" className="bg-card border-y border-cativa/10 py-16 md:py-28">
          <div className="container px-5 grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
            <figure className="relative md:col-span-2 min-w-0">
              <img
                src={cativaTexture}
                alt="Detalle de la textura de la arena sanitaria de mandioca"
                className="w-full h-auto rounded-[2rem] object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-cativa-cream/90 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-cativa">
                Arena de mandioca
              </figcaption>
            </figure>
            <div className="md:col-span-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-cativa-sage mb-4">El producto</p>
              <h2 id="arena-de-mandioca-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa mb-8">
                ¿Qué es la arena sanitaria de mandioca?
              </h2>
              <div className="space-y-0">
                <div className="border-t border-cativa/15 py-6 flex gap-5">
                  <span aria-hidden="true" className="font-heading font-extrabold text-cativa/25 text-2xl leading-none pt-1">01</span>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-cativa mb-2">¿Qué es?</h3>
                    <p className="text-cativa-stone leading-relaxed">
                      Cativa es una arena sanitaria para gatos elaborada a base de mandioca, una materia prima de origen vegetal. Es una alternativa a las arenas sanitarias tradicionales que invita a descubrir una nueva forma de cuidar la higiene diaria de tu gato.
                    </p>
                  </div>
                </div>
                <div className="border-t border-cativa/15 py-6 flex gap-5">
                  <span aria-hidden="true" className="font-heading font-extrabold text-cativa/25 text-2xl leading-none pt-1">02</span>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-cativa mb-2">¿Cómo funciona?</h3>
                    <p className="text-cativa-stone leading-relaxed">
                      La arena sanitaria se utiliza en la bandeja de tu gato para acompañar su rutina de higiene. Su composición a base de mandioca es el punto de partida de una propuesta que busca integrar practicidad y origen vegetal en el cuidado cotidiano.
                    </p>
                  </div>
                </div>
                <div className="border-t border-b border-cativa/15 py-6 flex gap-5">
                  <span aria-hidden="true" className="font-heading font-extrabold text-cativa/25 text-2xl leading-none pt-1">03</span>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-cativa mb-2">¿Por qué elegir Cativa?</h3>
                    <p className="text-cativa-stone leading-relaxed">
                      Porque la elección de la arena sanitaria también forma parte del bienestar diario de tu gato. Con Cativa, incorporás una alternativa de origen vegetal a su rutina de higiene.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios — bloque verde oscuro */}
        <section id="beneficios" className="bg-cativa py-16 md:py-28 scroll-mt-24">
          <div className="container px-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-cativa-cream/70 text-center mb-4">Beneficios</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa-cream text-center mb-12 md:mb-16">
              Pensada para su bienestar
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-3xl bg-cativa-cream p-7 text-center hover:-translate-y-1 transition-transform">
                  <div className="mx-auto mb-5 w-14 h-14 rounded-full border border-cativa/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cativa" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-cativa text-lg mb-2">{title}</h3>
                  <p className="text-sm text-cativa-stone leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Uso y experiencia */}
        <section id="uso" aria-labelledby="uso-title" className="py-16 md:py-28">
          <div className="container px-5">
            <div className="max-w-2xl mb-12 md:mb-16 text-center mx-auto">
              <p className="text-xs font-semibold tracking-widest uppercase text-cativa-sage mb-4">Uso y experiencia</p>
              <h2 id="uso-title" className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa">
                Parte de la rutina de tu hogar
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <img
                src={cativaCatTray}
                alt="Gato entrando naturalmente a su bandeja sanitaria"
                className="w-full h-full min-h-[320px] rounded-[2rem] object-cover md:row-span-2"
                loading="lazy"
                width={1024}
                height={1280}
              />
              <img
                src={cativaTray}
                alt="Bandeja sanitaria con arena de mandioca en un ambiente doméstico limpio"
                className="w-full h-64 md:h-auto rounded-[2rem] object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="rounded-[2rem] border border-cativa/15 bg-card p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-cativa mb-3">El gesto de todos los días</h3>
                <p className="text-cativa-stone leading-relaxed">
                  Servir, mantener y renovar la arena de la bandeja es parte del cuidado diario. Cativa acompaña esa rutina con una propuesta de origen vegetal, simple de integrar a tu hogar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Variedades */}
        <section id="producto" className="bg-card border-y border-cativa/10 py-16 md:py-28 scroll-mt-24">
          <div className="container px-5">
            <div className="max-w-2xl mb-12 md:mb-16 text-center mx-auto">
              <p className="text-xs font-semibold tracking-widest uppercase text-cativa-sage mb-4">Las variedades</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa mb-4">
                Arena sanitaria para gatos a base de mandioca
              </h2>
              <p className="text-cativa-stone">Disponible en tres presentaciones.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {presentations.map((p) => (
                <article key={p.name} className="rounded-3xl border border-cativa/15 bg-cativa-cream overflow-hidden flex flex-col hover:-translate-y-1 transition-transform">
                  <div className={`h-1.5 ${p.accent}`} />
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full aspect-[3/5] object-cover object-top"
                    loading="lazy"
                  />
                  <div className="p-6 md:p-7 text-center">
                    <h3 className="font-heading font-bold text-cativa text-xl mb-2">{p.name}</h3>
                    <p className="text-sm text-cativa-stone">{p.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="#donde-comprar" className={btnPrimary}>Encontrá tu Cativa</a>
            </div>
          </div>
        </section>

        {/* Franja de cierre de marca */}
        <section aria-label="Naturalmente, Cativa" className="relative bg-cativa overflow-hidden">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true" className="absolute -bottom-10 -right-24 w-[480px] h-[320px] text-cativa-cream/5 rotate-12">
            <path d="M720,20 C1000,20 1220,160 1220,320 C1220,480 1000,620 720,620 C440,620 220,480 220,320 C220,160 440,20 720,20 Z" fill="currentColor" />
          </svg>
          <div className="relative container px-5 py-16 md:py-24 text-center">
            <img src={cativaLogoWhite.url} alt="Cativa" className="h-10 md:h-14 w-auto mx-auto mb-6" loading="lazy" />
            <p className="font-heading font-extrabold text-cativa-cream text-2xl sm:text-3xl md:text-4xl mb-3">Naturalmente, Cativa.</p>
            <p className="text-cativa-cream/80 mb-8 max-w-md mx-auto">Descubrí una forma más natural de cuidar la higiene de tu gato.</p>
            <a href="#donde-comprar" className="inline-flex items-center justify-center rounded-full bg-cativa-cream px-7 py-3 font-heading font-bold text-cativa shadow-md hover:bg-white transition-colors">
              Dónde comprar
            </a>
          </div>
        </section>

        {/* Dónde comprar */}
        <section id="donde-comprar" className="py-16 md:py-24 scroll-mt-32 md:scroll-mt-24">
          <div className="container max-w-4xl px-5 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-cativa mb-4">Dónde comprar</h2>
            <p className="text-cativa-stone mb-10">Encontrá Cativa en nuestros canales oficiales.</p>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10 text-left">
              <div className="rounded-3xl border border-cativa/15 bg-card p-6 md:p-8 flex flex-col shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-cativa-stone mb-4">Compras minoristas</p>
                <h3 className="text-xl font-heading font-bold text-cativa mb-3">¿Querés Cativa para tu gato?</h3>
                <p className="text-cativa-stone leading-relaxed mb-6">Comprá Cativa en Mercado Libre y recibila en tu casa.</p>
                <div className="mt-auto">
                  {CATIVA_MERCADO_LIBRE_URL ? (
                    <Button asChild className={`${btnPrimary} h-auto w-full whitespace-normal text-center text-xs sm:text-sm`}>
                      <a href={CATIVA_MERCADO_LIBRE_URL} target="_blank" rel="noopener noreferrer">
                        <span className="inline-flex items-center rounded-md bg-white px-2 py-1 shadow-sm">
                          <img src={mlWordmark} alt="" aria-hidden="true" className="h-4 w-auto" />
                        </span>
                        COMPRAR EN MERCADO LIBRE
                      </a>
                    </Button>
                  ) : (
                    <>
                      <Button disabled aria-describedby="cativa-retail-pending" className={`${btnPrimary} h-auto w-full whitespace-normal text-center text-xs sm:text-sm`}>
                        <span className="inline-flex items-center rounded-md bg-white px-2 py-1 shadow-sm">
                          <img src={mlWordmark} alt="" aria-hidden="true" className="h-4 w-auto" />
                        </span>
                        COMPRAR EN MERCADO LIBRE
                      </Button>
                      <p id="cativa-retail-pending" className="text-sm text-cativa-stone mt-3">Próximamente en Mercado Libre.</p>
                    </>
                  )}
                </div>
              </div>
              <div className="rounded-3xl border border-cativa/15 bg-cativa/5 p-6 md:p-8 flex flex-col shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-cativa-stone mb-4">Compras mayoristas</p>
                <h3 className="text-xl font-heading font-bold text-cativa mb-3">¿Tenés un pet shop o una veterinaria?</h3>
                <p className="text-cativa-stone leading-relaxed mb-6">Sumá Cativa a tu negocio. Escribinos por WhatsApp para conocer las condiciones comerciales y realizar consultas sobre compras mayoristas.</p>
                <Button asChild className={`${btnPrimary} h-auto mt-auto w-full whitespace-normal text-center text-xs sm:text-sm`}>
                  <a href={CATIVA_WHOLESALE_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    {whatsappIcon} CONSULTAR POR MAYORISTA
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Cativa, @cativa.ar" className="inline-flex items-center gap-2 rounded-full border border-cativa/30 px-5 py-2 text-sm font-medium text-cativa hover:bg-cativa/5 transition-colors">
                <Instagram className="w-4 h-4" /> @cativa.ar
              </a>
            </div>
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
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Cativa, @cativa.ar" className="flex items-center gap-2 justify-center sm:justify-start hover:text-cativa">
              <Instagram className="w-4 h-4" /> @cativa.ar
            </a>
            <p className="pt-2">Una marca distribuida por <Link to="/" className="font-semibold hover:text-cativa">Pet Planet</Link></p>
          </div>
        </div>
      </footer>

      {/* Acceso flotante secundario: Instagram. WhatsApp sigue siendo el acceso principal (botón global). */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de Cativa, @cativa.ar"
        className="fixed bottom-24 right-6 z-50 flex w-11 h-11 items-center justify-center rounded-full border border-cativa/25 bg-card text-cativa shadow-lg transition-transform duration-200 hover:scale-110 hover:border-cativa/50"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Cativa;
