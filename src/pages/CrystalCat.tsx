import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ArrowUpRight, Menu, X, MessageCircle, Instagram, Package, ShoppingBag, Ruler, MapPin, Trash2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import crystalcatLogo from "@/assets/crystalcat-logo-transparent.png";
import petplanetLogo from "@/assets/petplanet-logo-trimmed.png";
import mercadoLibreLogo from "@/assets/mercado-libre-wordmark.svg";
import heroHome from "@/assets/crystalcat-hero-home.png.asset.json";
import originalPack from "@/assets/crystalcat-original-pack-v2.png.asset.json";
import lifestyle from "@/assets/crystalcat-lifestyle.jpg.asset.json";
import crystals from "@/assets/crystalcat-crystals.jpg.asset.json";
import tray from "@/assets/crystalcat-tray.jpg.asset.json";
import iconDrops from "@/assets/icon-drops.png";
import iconLeaf from "@/assets/icon-leaf.png";
import iconWaves from "@/assets/icon-waves.png";
import { CRYSTALCAT_WHATSAPP_URL, CRYSTALCAT_RETAIL_URL, CRYSTALCAT_WHOLESALE_URL, CRYSTALCAT_INSTAGRAM_URL, CRYSTALCAT_PRESENTATIONS, crystalcatLeadUrl } from "@/lib/crystalcat";
import "./CrystalCat.css";

const nav = [
  { label: "Conocé CrystalCat", href: "#conoce" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Cómo se usa", href: "#uso" },
  { label: "Presentación", href: "#producto" },
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
const steps = [
  { icon: Ruler, title: "Prepará la bandeja", text: "Colocá el producto en una bandeja limpia. Seguí las indicaciones del envase para la cantidad de uso." },
  { icon: MapPin, title: "Elegí su lugar", text: "Ubicá la bandeja en un lugar seco y ventilado, de fácil acceso para tu gato." },
  { icon: Trash2, title: "Cuidala cada día", text: "Retirá los desechos sólidos diariamente para mantener su espacio de higiene." },
  { icon: RefreshCw, title: "Renová el contenido", text: "Revisá el estado de los cristales y renovalos según el uso y las indicaciones del envase." },
];
const benefits = [
  { image: iconDrops, title: "Absorción", text: "Cristales de sílice para absorber la humedad en la bandeja.", accent: "text-brand-orange" },
  { image: iconWaves, title: "Control de olores", text: "Una propuesta para el cuidado de los olores en su espacio de higiene.", accent: "text-brand-purple" },
  { image: iconLeaf, title: "100% natural", text: "Una característica indicada en el packaging de CrystalCat.", accent: "text-brand-green" },
  { title: "Presentación de 3,8 L", text: "El formato de CrystalCat para la rutina de higiene de tu gato.", accent: "text-crystal-dark" },
];

const WhatsAppCTA = ({ children = "Consultar por WhatsApp", className = "" }: { children?: React.ReactNode; className?: string }) => (
  <Button asChild className={`${primary} whitespace-normal ${className}`}>
    <a href={CRYSTALCAT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle />{children}</a>
  </Button>
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
    <section id="contacto" className="crystalcat-section bg-crystal-light border-t border-crystal/10">
      <div className="container px-5 grid md:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div>
          <p className="crystalcat-kicker text-crystal-dark">Contacto comercial</p>
          <h2 className="crystalcat-title mb-5">Sumá CrystalCat<br />a tu negocio.</h2>
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
          <div className="container px-5 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div><p className="crystalcat-kicker text-brand-orange">Su higiene también forma parte de tu hogar</p><h2 className="crystalcat-title mb-6">Conocé CrystalCat</h2><div className="space-y-4 text-muted-foreground leading-relaxed md:text-lg"><p>CrystalCat ofrece piedras sanitarias de sílice para gatos: cristales que se utilizan en su bandeja para acompañar la rutina de higiene.</p><p>Una propuesta distribuida por Pet Planet, con una presentación de 3,8 L y una identidad que reconocés desde su envase.</p></div><Button asChild variant="link" className="px-0 mt-5 text-crystal-dark"><a href="#producto">Conocé el producto <ArrowRight /></a></Button></div>
            <img src={lifestyle.url} alt="Gato descansando en un living junto a su espacio de higiene" className="w-full aspect-[4/3] object-cover rounded-lg" loading="lazy" />
          </div>
        </section>
        <section id="silice" className="crystalcat-section bg-crystal-light border-y border-crystal/10">
          <div className="container px-5 grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
            <figure className="md:col-span-2"><img src={crystals.url} alt="Detalle de los cristales de sílice de la escena CrystalCat" className="w-full aspect-[4/3] object-cover rounded-lg" loading="lazy" /><figcaption className="text-xs text-crystal-dark mt-3">Cristales de sílice · CrystalCat</figcaption></figure>
            <div className="md:col-span-3"><p className="crystalcat-kicker text-crystal-dark">El material</p><h2 className="crystalcat-title mb-6">¿Qué son las piedras<br />sanitarias de sílice?</h2><p className="text-muted-foreground leading-relaxed mb-6">Son piedras sanitarias compuestas por cristales de sílice. Se colocan en la bandeja de tu gato para absorber la humedad durante el uso cotidiano.</p><div className="border-t border-crystal/20 pt-5"><h3 className="font-heading font-bold text-lg mb-2">Una rutina sencilla</h3><p className="text-muted-foreground leading-relaxed">Prepará la bandeja, retirá los desechos sólidos cada día y renová el contenido siguiendo las indicaciones del envase.</p></div></div>
          </div>
        </section>
        <section id="beneficios" className="crystalcat-section bg-crystal-dark">
          <div className="container px-5"><div className="text-center mb-10"><p className="crystalcat-kicker text-primary-foreground/75">Los atributos del producto</p><h2 className="crystalcat-title text-primary-foreground">Beneficios de las piedras sanitarias de sílice</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{benefits.map(b => <article key={b.title} className="rounded-lg bg-background p-6 md:p-7"><div className="h-16 mb-5 flex items-center">{b.image ? <img src={b.image} alt="" className="w-14 h-14 object-contain" loading="lazy" /> : <Package className="w-12 h-12 text-crystal-dark" strokeWidth={1.5} />}</div><h3 className={`font-heading font-bold text-lg mb-3 ${b.accent}`}>{b.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p></article>)}</div></div>
        </section>
        <section id="uso" className="crystalcat-section">
          <div className="container px-5"><div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10"><div><p className="crystalcat-kicker text-brand-orange">Uso y experiencia</p><h2 className="crystalcat-title">Un espacio para su rutina.</h2></div><p className="max-w-sm text-muted-foreground leading-relaxed">Pequeños cuidados cotidianos para mantener su bandeja en casa.</p></div><div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"><img src={tray.url} alt="Bandeja sanitaria con cristales en un ambiente doméstico" className="w-full aspect-[4/3] rounded-lg object-cover" loading="lazy" /><div>{steps.map((step,i) => <div key={step.title} className="flex gap-4 py-5 border-b border-border first:pt-0"><span className="text-crystal/50 text-sm font-bold pt-1">0{i+1}</span><div><h3 className="font-heading font-bold text-lg mb-1 flex items-center gap-2"><step.icon className="w-4 h-4 text-crystal-dark" />{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p></div></div>)}</div></div></div>
        </section>
        <section id="producto" className="crystalcat-section bg-muted/40 border-y">
          <div className="container px-5"><div className="text-center mb-10"><p className="crystalcat-kicker text-brand-orange">La presentación</p><h2 className="crystalcat-title">Tu CrystalCat de siempre.</h2></div>{CRYSTALCAT_PRESENTATIONS.map(p => <article key={p.name} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center rounded-lg border bg-background p-6 md:p-10"><img src={p.image} alt="Envase original CrystalCat 3,8 L" className="w-full h-80 md:h-96 object-contain" loading="lazy" /><div><span className="inline-flex items-center gap-2 text-sm font-semibold text-crystal-dark"><Package className="w-4 h-4" /> {p.volume}</span><h3 className="text-3xl font-heading font-extrabold mt-3 mb-4">{p.name}</h3><p className="text-muted-foreground leading-relaxed mb-7">{p.description}</p><Button asChild className={primary}><a href="#donde-comprar">Dónde comprar <ArrowRight /></a></Button></div></article>)}</div>
        </section>
        <section className="bg-brand-orange-light border-b border-brand-orange/15 py-16 md:py-20"><div className="container px-5 text-center"><img src={crystalcatLogo} alt="CrystalCat" className="h-10 md:h-14 w-auto max-w-full mx-auto mb-6" loading="lazy" /><h2 className="crystalcat-title mb-4">El cuidado empieza en casa.</h2><p className="text-muted-foreground mb-7">Conocé CrystalCat y encontrá tu próximo punto de compra.</p><Button asChild className={primary}><a href="#donde-comprar">Dónde comprar <ArrowRight /></a></Button></div></section>
        <section id="donde-comprar" className="crystalcat-section">
          <div className="container px-5 max-w-5xl">
            <div className="text-center mb-10"><p className="crystalcat-kicker text-brand-orange">Nuestros canales</p><h2 className="crystalcat-title mb-4">Dónde comprar piedras sanitarias CrystalCat</h2><p className="text-muted-foreground">Consultá con Pet Planet y encontrá la opción para vos.</p></div>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="rounded-lg border border-crystal/20 p-7 md:p-8 flex flex-col">
                <p className="crystalcat-kicker text-crystal-dark">Para tu gato</p>
                <h3 className="text-2xl font-heading font-bold mb-4">¿Buscás CrystalCat?</h3>
                <p className="text-muted-foreground leading-relaxed mb-7">Comprá CrystalCat en Mercado Libre y recibí tus piedras sanitarias para gatos en tu casa.</p>
                <Button asChild className={`${primary} mt-auto min-h-[52px] whitespace-normal text-sm`}>
                  <a href={CRYSTALCAT_RETAIL_URL} target="_blank" rel="noopener noreferrer"><span className="shrink-0 rounded-sm bg-background px-1.5 py-1"><img src={mercadoLibreLogo} alt="" className="h-5 w-12 object-contain" /></span><span>COMPRAR EN MERCADO LIBRE</span></a>
                </Button>
              </article>
              <article className="rounded-lg border border-crystal/20 bg-crystal-light p-7 md:p-8 flex flex-col">
                <p className="crystalcat-kicker text-crystal-dark">Para tu negocio</p>
                <h3 className="text-2xl font-heading font-bold mb-4">Compras mayoristas</h3>
                <p className="text-muted-foreground leading-relaxed mb-7">¿Tenés un pet shop o una veterinaria? Contactanos por WhatsApp para conocer las condiciones comerciales de CrystalCat.</p>
                <Button asChild className={`${primary} mt-auto min-h-[52px] whitespace-normal text-sm`}><a href={CRYSTALCAT_WHOLESALE_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="shrink-0" /><span>CONSULTAR POR MAYORISTA</span></a></Button>
              </article>
            </div>
          </div>
        </section>
        <LeadForm />
      </main>
      <footer className="py-12 border-t bg-background"><div className="container px-5 grid sm:grid-cols-3 gap-8"><div><img src={crystalcatLogo} alt="CrystalCat" className="h-8 w-auto mb-4" loading="lazy" /><p className="text-sm text-muted-foreground">Piedras sanitarias de sílice para gatos.</p><p className="text-sm text-muted-foreground mt-3">Distribuida por <Link to="/" className="font-semibold text-foreground hover:text-crystal-dark">Pet Planet</Link>.</p></div><nav aria-label="Navegación del pie" className="flex flex-col items-start gap-3 text-sm text-muted-foreground">{nav.map(l => <a key={l.href} href={l.href} className="hover:text-crystal-dark">{l.label}</a>)}<a href="#donde-comprar" className="hover:text-crystal-dark">Dónde comprar</a></nav><div className="space-y-4 text-sm"><a href={CRYSTALCAT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-crystal-dark hover:text-brand-orange transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a><a href={CRYSTALCAT_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-crystal-dark hover:text-brand-orange transition-colors"><Instagram className="w-4 h-4" /> @crystalcat.ar</a></div></div></footer>
    </div>
  );
}
