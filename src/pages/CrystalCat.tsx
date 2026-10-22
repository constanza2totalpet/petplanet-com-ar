import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ArrowUpRight, Menu, X, MessageCircle, Instagram, Package, ShoppingBag, Droplets, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import crystalcatLogo from "@/assets/crystalcat-logo-transparent.png";
import petplanetLogo from "@/assets/petplanet-logo-trimmed.png";
import mercadoLibreLogo from "@/assets/mercado-libre-wordmark.svg";
import heroHome from "@/assets/crystalcat-hero-home.png.asset.json";
import originalPack from "@/assets/crystalcat-original-pack-v2.png.asset.json";
import { CRYSTALCAT_WHATSAPP_URL, CRYSTALCAT_RETAIL_URL, CRYSTALCAT_WHOLESALE_URL, CRYSTALCAT_INSTAGRAM_URL, CRYSTALCAT_INSTAGRAM_FLOATING_URL, crystalcatLeadUrl } from "@/lib/crystalcat";
import "./CrystalCat.css";

const nav = [
  { label: "Conocé CrystalCat", href: "#conoce" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Dónde comprar", href: "#donde-comprar" },
];
const headerNav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Conocé CrystalCat", href: "#conoce" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Dónde comprar", href: "#donde-comprar" },
];
const heroPrimary = "h-auto min-h-11 rounded-full bg-brand-orange px-6 py-3 text-primary-foreground font-heading font-bold hover:bg-brand-orange/90";
const primary = "h-auto min-h-11 rounded-full bg-crystal-dark px-6 py-3 text-primary-foreground font-heading font-bold hover:bg-crystal";
const secondary = "h-auto min-h-11 rounded-full border-crystal/30 bg-background/80 px-6 py-3 text-crystal-dark font-heading font-bold hover:bg-crystal-light";
const benefits = [
  { icon: Droplets, title: "Absorción", text: "Cristales de sílice diseñados para absorber la humedad en la bandeja sanitaria." },
  { icon: Wind, title: "Control de olores", text: "Una opción para ayudar a controlar los olores en el espacio de higiene de tu gato." },
  { icon: Package, title: "Presentación de 3,8 L", text: "Un formato práctico para incorporar CrystalCat a la rutina de higiene de tu gato." },
];

const WhatsAppCTA = ({ children = "Consultar por WhatsApp", className = "" }: { children?: React.ReactNode; className?: string }) => (
  <Button asChild className={`${primary} whitespace-normal ${className}`}>
    <a href={CRYSTALCAT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle />{children}</a>
  </Button>
);

const InstagramGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="crystalcat-instagram-gradient" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FEDA75" />
        <stop offset=".25" stopColor="#FA7E1E" />
        <stop offset=".5" stopColor="#D62976" />
        <stop offset=".75" stopColor="#962FBF" />
        <stop offset="1" stopColor="#4F5BD5" />
      </linearGradient>
    </defs>
    <path fill="url(#crystalcat-instagram-gradient)" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.072 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.255 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.255-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.816.42-2.236.21-.57.479-.96.9-1.379.419-.419.819-.69 1.379-.898.42-.165 1.051-.36 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

const FloatingContacts = () => (
  <div className="crystalcat-floats">
    <a href={CRYSTALCAT_INSTAGRAM_FLOATING_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram de CrystalCat" className="crystalcat-float crystalcat-float-ig">
      <InstagramGlyph />
    </a>
    <a href={CRYSTALCAT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp" className="crystalcat-float crystalcat-float-wa">
      <MessageCircle className="h-7 w-7" />
    </a>
  </div>
);

function LeadForm() {
  const [form, setForm] = useState({ nombre: "", localidad: "", negocio: "", whatsapp: "" });
  const [opened, setOpened] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = crystalcatLeadUrl(form);
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpened(true);
  };
  return (
    <section id="contacto" className="py-14 md:py-16 bg-muted/40 border-t">
      <div className="container px-5 max-w-5xl grid md:grid-cols-2 gap-8 lg:gap-14 items-start">
        <div>
          <p className="crystalcat-kicker text-crystal-dark">Contacto comercial</p>
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-4">Sumá CrystalCat a tu negocio</h2>
          <p className="text-muted-foreground leading-relaxed max-w-md mb-7">Contanos sobre tu comercio y consultá las condiciones de compra con el equipo de Pet Planet.</p>
          <a href={CRYSTALCAT_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-crystal-dark hover:text-brand-orange transition-colors"><Instagram className="w-5 h-5" /> @crystalcat.ar <ArrowUpRight className="w-4 h-4" /></a>
        </div>
        <form onSubmit={submit} className="grid sm:grid-cols-2 gap-5">
          {[
            { key: "nombre", label: "Nombre y apellido", required: true, type: "text", autoComplete: "name" },
            { key: "localidad", label: "Localidad", required: true, type: "text", autoComplete: "address-level2" },
            { key: "negocio", label: "Nombre del negocio (opcional)", required: false, type: "text", autoComplete: "organization" },
            { key: "whatsapp", label: "Número de WhatsApp", required: true, type: "tel", autoComplete: "tel" },
          ].map(field => (
            <label key={field.key} className="text-sm font-medium flex flex-col gap-2">
              {field.label}
              <input name={field.key} type={field.type} autoComplete={field.autoComplete} required={field.required} value={form[field.key as keyof typeof form]} onChange={e => { setForm({ ...form, [field.key]: e.target.value }); setOpened(false); }} className="w-full min-w-0 rounded-lg border border-crystal/20 bg-background px-4 py-3 font-normal" />
            </label>
          ))}
          <Button type="submit" className={`${primary} sm:col-span-2`}><MessageCircle /> Quiero más información</Button>
          {opened && <p role="status" className="sm:col-span-2 text-sm text-crystal-dark">Tu consulta está lista en WhatsApp. Enviá el mensaje para contactar al equipo.</p>}
        </form>
      </div>
    </section>
  );
}

export default function CrystalCat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="crystalcat-page min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Piedras Sanitarias de Sílice para Gatos | CrystalCat</title>
        <meta name="description" content="Conocé CrystalCat, piedras sanitarias de sílice para gatos en presentación de 3,8 L. Descubrí el producto y encontrá dónde comprarlo." />
        <link rel="canonical" href="https://www.petplanet.com.ar/crystal-cat" />
        <meta property="og:title" content="Piedras Sanitarias de Sílice para Gatos | CrystalCat" />
        <meta property="og:description" content="Conocé CrystalCat, piedras sanitarias de sílice para gatos en presentación de 3,8 L. Descubrí el producto y encontrá dónde comprarlo." />
        <meta property="og:url" content="https://www.petplanet.com.ar/crystal-cat" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: "CrystalCat 3,8 L", description: "Piedras sanitarias de sílice para gatos en presentación de 3,8 L", image: new URL(originalPack.url, "https://www.petplanet.com.ar").href, brand: { "@type": "Brand", name: "CrystalCat" }, url: "https://www.petplanet.com.ar/crystal-cat" })}</script>
      </Helmet>
      <header className="sticky top-0 z-50 border-b border-crystal/10 bg-background/95 backdrop-blur-md">
        <div className="crystalcat-header-row container h-20 px-5 gap-4">
          <div className="flex items-center gap-3 md:gap-4 min-w-0 shrink-0">
            <a href="https://www.petplanet.com.ar/" aria-label="Pet Planet, volver al sitio principal" className="shrink-0 opacity-80 hover:opacity-100 transition-opacity"><img src={petplanetLogo} alt="Pet Planet" className="h-6 md:h-[30px] w-auto" /></a>
            <span aria-hidden="true" className="h-8 w-px shrink-0 bg-crystal/20" />
            <a href="#inicio" aria-label="CrystalCat, inicio" className="shrink-0"><img src={crystalcatLogo} alt="CrystalCat" className="crystalcat-wordmark" /></a>
          </div>
          <nav aria-label="Navegación principal" className="hidden lg:flex justify-center gap-6">{headerNav.map(l => <a key={l.href} href={l.href} className="text-sm whitespace-nowrap text-muted-foreground hover:text-crystal-dark transition-colors">{l.label}</a>)}</nav>
          <Button asChild className={`${primary} hidden lg:inline-flex justify-self-end text-sm`}><a href="#donde-comprar"><ShoppingBag />Dónde comprar</a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden shrink-0 text-crystal-dark" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="crystalcat-menu">{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav id="crystalcat-menu" aria-label="Navegación móvil" className="lg:hidden border-t bg-background px-5 py-5 flex flex-col gap-4">{headerNav.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-foreground">{l.label}</a>)}<Button asChild className={`${primary} self-start`}><a href="#donde-comprar" onClick={() => setOpen(false)}><ShoppingBag />Dónde comprar</a></Button></nav>}
      </header>
      <main>
        <section id="inicio" className="crystalcat-hero relative overflow-hidden">
          <img src={heroHome.url} alt="Gato junto a su bandeja sanitaria con piedras de sílice CrystalCat de 3,8 L" className="crystalcat-hero-bg" width={1672} height={941} fetchPriority="high" />
          <div aria-hidden="true" className="crystalcat-hero-fade" />
          <div className="crystalcat-hero-layout relative container px-5 md:px-8 lg:px-12">
            <div className="crystalcat-hero-copy min-w-0 text-left">
              <p className="crystalcat-kicker text-brand-orange">Higiene felina</p>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-[1.12] mb-6">Piedras sanitarias de <span className="text-crystal">sílice</span> para gatos</h1>
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-8 max-w-md">Cristales de sílice para la higiene cotidiana de tu gato. Conocé CrystalCat en su presentación de 3,8 L.</p>
              <div className="flex flex-wrap justify-start gap-3"><Button asChild className={heroPrimary}><a href="#donde-comprar">Dónde comprar <ArrowRight /></a></Button><Button asChild variant="outline" className={secondary}><a href="#beneficios">Conocé sus beneficios</a></Button></div>
            </div>
          </div>
        </section>
        <section id="conoce" className="crystalcat-section">
          <div className="container px-5 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl"><p className="crystalcat-kicker text-brand-orange">El producto</p><h2 className="crystalcat-title mb-6">Conocé CrystalCat</h2><div className="space-y-4 text-muted-foreground leading-relaxed md:text-lg"><p>CrystalCat ofrece piedras sanitarias de sílice para gatos, compuestas por cristales que se colocan en la bandeja sanitaria para acompañar su rutina de higiene.</p><p>Se distribuye en Argentina a través de Pet Planet.</p></div></div>
            <div className="rounded-lg bg-crystal-light border border-crystal/10 p-6 md:p-10 flex items-center justify-center"><img src={originalPack.url} alt="Envase original de piedras sanitarias de sílice CrystalCat de 3,8 L" className="w-full max-h-[420px] object-contain" loading="lazy" /></div>
          </div>
        </section>
        <section id="beneficios" className="crystalcat-section bg-crystal-light border-y border-crystal/10">
          <div className="container px-5"><div className="text-center mb-10"><p className="crystalcat-kicker text-brand-orange">Por qué elegirla</p><h2 className="crystalcat-title">Beneficios de las piedras sanitarias de sílice</h2></div><div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">{benefits.map(b => <article key={b.title} className="h-full rounded-lg border border-crystal/15 bg-background p-6 md:p-7"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-crystal-light"><b.icon className="h-6 w-6 text-crystal-dark" strokeWidth={1.75} /></div><h3 className="font-heading font-bold text-lg mb-2 text-foreground">{b.title}</h3><div className="mb-3 h-0.5 w-8 rounded-full bg-brand-orange" /><p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p></article>)}</div></div>
        </section>
        <section id="donde-comprar" className="crystalcat-section">
          <div className="container px-5 max-w-5xl">
            <div className="text-center mb-10"><p className="crystalcat-kicker text-brand-orange">Nuestros canales</p><h2 className="crystalcat-title mb-4">Dónde comprar piedras sanitarias CrystalCat</h2><p className="text-muted-foreground">Elegí la opción que mejor se adapta a vos.</p></div>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="rounded-lg border border-crystal/20 p-7 md:p-8 flex flex-col">
                <p className="crystalcat-kicker text-crystal-dark">Para tu gato</p>
                <h3 className="text-2xl font-heading font-bold mb-4">¿Buscás CrystalCat para tu gato?</h3>
                <p className="text-muted-foreground leading-relaxed mb-7">Comprá CrystalCat en Mercado Libre y recibí tus piedras sanitarias en tu casa.</p>
                <Button asChild className={`${primary} mt-auto min-h-[52px] whitespace-normal text-sm`}>
                  <a href={CRYSTALCAT_RETAIL_URL} target="_blank" rel="noopener noreferrer"><span className="shrink-0 rounded-sm bg-background px-1.5 py-1"><img src={mercadoLibreLogo} alt="" className="h-5 w-12 object-contain" /></span><span>COMPRAR EN MERCADO LIBRE</span></a>
                </Button>
              </article>
              <article className="rounded-lg border border-crystal/20 bg-crystal-light p-7 md:p-8 flex flex-col">
                <p className="crystalcat-kicker text-crystal-dark">Para tu negocio</p>
                <h3 className="text-2xl font-heading font-bold mb-4">Compras mayoristas</h3>
                <p className="text-muted-foreground leading-relaxed mb-7">¿Tenés un pet shop o una veterinaria? Contactanos para conocer las condiciones comerciales de CrystalCat.</p>
                <Button asChild className={`${primary} mt-auto min-h-[52px] whitespace-normal text-sm`}><a href={CRYSTALCAT_WHOLESALE_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="shrink-0" /><span>CONSULTAR POR MAYORISTA</span></a></Button>
              </article>
            </div>
          </div>
        </section>
        <LeadForm />
      </main>
      <footer className="pt-12 pb-24 md:pb-12 border-t bg-background"><div className="container px-5 grid sm:grid-cols-3 gap-8"><div><img src={crystalcatLogo} alt="CrystalCat" className="h-8 w-auto mb-4" loading="lazy" /><p className="text-sm text-muted-foreground">Piedras sanitarias de sílice para gatos.</p><p className="text-sm text-muted-foreground mt-3">Distribuida por <Link to="/" className="font-semibold text-foreground hover:text-crystal-dark">Pet Planet</Link>.</p></div><nav aria-label="Navegación del pie" className="flex flex-col items-start gap-3 text-sm text-muted-foreground">{nav.map(l => <a key={l.href} href={l.href} className="hover:text-crystal-dark">{l.label}</a>)}</nav><div className="space-y-4 text-sm"><a href={CRYSTALCAT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-crystal-dark hover:text-brand-orange transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a><a href={CRYSTALCAT_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-crystal-dark hover:text-brand-orange transition-colors"><Instagram className="w-4 h-4" /> @crystalcat.ar</a></div></div></footer>
      <FloatingContacts />
    </div>
  );
}
