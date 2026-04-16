import { Link } from "react-router-dom";
import {
  Droplets,
  Wind,
  Leaf,
  Sparkles,
  Package,
  Feather,
  Hand,
  Ruler,
  MapPin,
  Trash2,
  RefreshCw,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import bolsaImg from "@/assets/bolsa-crystalcat.png";
import crystalcatLogo from "@/assets/crystalcat-logo.png";
import heroPets from "@/assets/hero-pets.jpg";

const benefits = [
  {
    icon: CalendarIcon,
    title: "Rinden más",
    desc: "Hasta 30 días de duración por carga.",
    color: "orange",
  },
  {
    icon: Droplets,
    title: "Alta absorción",
    desc: "Libre de polvo, limpio y seguro.",
    color: "blue",
  },
  {
    icon: Leaf,
    title: "Natural e hipoalergénico",
    desc: "Apto para gatos sensibles.",
    color: "green",
  },
  {
    icon: Wind,
    title: "Neutraliza olores",
    desc: "Control superior de aromas.",
    color: "blue",
  },
];

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Sparkles {...props} />;
}

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
        <div className="container px-5 py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <img
                src={crystalcatLogo}
                alt="Crystal Cat"
                className="h-10 sm:h-12 w-auto mb-5 md:mb-6"
              />
              <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(25_95%_55%)] mb-3">
                Pet Planet presenta
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-3 md:mb-4">
                Piedras sanitarias de sílica para gatos
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg">
                Alta absorción, mayor duración y máximo control de olores.
              </p>
              <a
                href="#contacto"
                className="inline-block rounded-lg bg-crystal px-7 py-3 font-heading font-bold text-white shadow-lg hover:bg-crystal-dark transition-colors"
              >
                Quiero recibir más información
              </a>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25_95%_55%/0.1)] via-crystal/10 to-[hsl(142_60%_45%/0.1)] rounded-3xl blur-2xl" />
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={heroPets}
                  alt="Gato feliz con Crystal Cat"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container px-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-crystal text-center mb-2">
            Beneficios
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-center mb-10 md:mb-14">
            Por qué elegir Crystal Cat
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((b) => {
              const colorMap: Record<string, string> = {
                orange: "bg-[hsl(25_95%_55%/0.12)] text-[hsl(25_95%_45%)]",
                blue: "bg-crystal/10 text-crystal",
                green: "bg-[hsl(142_60%_45%/0.12)] text-[hsl(142_60%_35%)]",
              };
              return (
                <div
                  key={b.title}
                  className="rounded-xl border bg-card p-5 sm:p-6 hover:shadow-md hover:border-crystal/30 transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${colorMap[b.color]}`}
                  >
                    <b.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTO */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-5">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-2xl bg-gradient-to-br from-crystal/5 to-[hsl(25_95%_55%/0.05)] p-6 sm:p-10 flex items-center justify-center">
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
          <p className="text-xs font-semibold tracking-widest uppercase text-crystal text-center mb-2">
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
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-crystal text-white font-heading font-bold text-sm flex items-center justify-center shadow-md">
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
            <div className="w-12 h-12 rounded-full bg-[hsl(142_60%_45%/0.12)] flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-[hsl(142_60%_35%)]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold">
              Consejos
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="rounded-xl border bg-card p-5 sm:p-6 hover:border-crystal/30 transition-colors"
              >
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{tip}</p>
              </div>
            ))}
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
