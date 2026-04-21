import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import heroBusiness from "@/assets/hero-business-shelf.jpg";
import crystalCatScene from "@/assets/crystal-cat-scene.jpg";
import furacaoScene from "@/assets/furacao-scene.jpg";

type Slide = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  accent: string;
  cta: { label: string; href: string };
  // Layout variant
  variant: "centered" | "split" | "scene";
  // For centered & scene variant
  image?: string;
  // For split variant
  productImage?: string;
  productAlt?: string;
  bgClass?: string; // background for split variant
};

const slides: Slide[] = [
  {
    variant: "centered",
    image: heroPets,
    eyebrow: "PET PLANET",
    titleLine1: "Creamos marcas",
    titleLine2: "para el mundo pet",
    subtitle: "Desarrollo, identidad y distribución",
    accent: "bg-crystal hover:bg-crystal-dark",
    cta: { label: "Conocer marcas", href: "#productos" },
  },
  {
    variant: "scene",
    image: crystalCatScene,
    eyebrow: "CRYSTAL CAT",
    titleLine1: "Piedras sanitarias",
    titleLine2: "de sílica",
    subtitle: "Alta absorción. Mayor duración. Control de olores",
    accent: "bg-brand-orange hover:bg-brand-orange/90",
    cta: { label: "Ver más", href: "/crystal-cat" },
  },
  {
    variant: "scene",
    image: furacaoScene,
    eyebrow: "FURAÇAO PET",
    titleLine1: "Juguetes importados",
    titleLine2: "para mascotas",
    subtitle: "Diseñados para el juego y la actividad",
    accent: "bg-brand-pink hover:bg-brand-pink/90",
    cta: { label: "Conocer más", href: "#productos" },
  },
  {
    variant: "centered",
    image: heroBusiness,
    eyebrow: "PARA TU NEGOCIO",
    titleLine1: "Sumá nuevas propuestas",
    titleLine2: "a tu negocio",
    subtitle: "Marcas pensadas para crecer en el mercado pet",
    accent: "bg-brand-green hover:bg-brand-green/90",
    cta: { label: "Quiero más información", href: "#contacto" },
  },
];

const HeroSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      document.querySelectorAll("[data-hero-dot]").forEach((el, idx) => {
        el.setAttribute(
          "data-active",
          idx === emblaApi.selectedScrollSnap() ? "true" : "false",
        );
      });
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="inicio"
      className="relative min-h-[80svh] md:min-h-[560px] overflow-hidden"
    >
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative flex-[0_0_100%] min-h-[80svh] md:min-h-[560px] flex items-center justify-center"
            >
              {s.variant === "centered" && (
                <>
                  <img
                    src={s.image}
                    alt={`${s.titleLine1} ${s.titleLine2}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    width={1920}
                    height={1080}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.5)]" />
                  <div className="relative z-10 text-center px-5 py-10 md:py-20 max-w-3xl mx-auto animate-fade-in-up">
                    <p className="text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase text-primary-foreground/80 mb-3 md:mb-4">
                      {s.eyebrow}
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-3 md:mb-4">
                      <span className="block">{s.titleLine1}</span>
                      <span className="block">{s.titleLine2}</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 mb-6 md:mb-8 max-w-xl mx-auto">
                      {s.subtitle}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                      <a
                        href={s.cta.href}
                        className={`inline-block rounded-lg ${s.accent} px-7 py-3 font-heading font-bold text-white shadow-lg transition-colors`}
                      >
                        {s.cta.label}
                      </a>
                      <a
                        href="#contacto"
                        className="inline-block rounded-lg border border-primary-foreground/30 px-7 py-3 font-heading font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                      >
                        Contacto
                      </a>
                    </div>
                  </div>
                </>
              )}

              {s.variant === "scene" && (
                <>
                  {/* Full-bleed lifestyle scene */}
                  <img
                    src={s.image}
                    alt={`${s.titleLine1} ${s.titleLine2}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    width={1920}
                    height={1080}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  {/* Side gradient: dark on the left for legibility, transparent on the right to keep the product visible */}
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent md:from-foreground/65 md:via-foreground/25 md:to-transparent" />
                  {/* Mobile gets a softer top-to-bottom overlay for readability over the scene */}
                  <div className="absolute inset-0 md:hidden bg-foreground/30" />
                  <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center animate-fade-in-up">
                    <div className="text-center md:text-left">
                      <p className="text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase text-primary-foreground/85 mb-3 md:mb-4">
                        {s.eyebrow}
                      </p>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-3 md:mb-4 [text-shadow:0_2px_12px_rgb(0_0_0_/_0.35)]">
                        <span className="block">{s.titleLine1}</span>
                        <span className="block">{s.titleLine2}</span>
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 [text-shadow:0_1px_8px_rgb(0_0_0_/_0.35)]">
                        {s.subtitle}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                        <a
                          href={s.cta.href}
                          className={`inline-block rounded-lg ${s.accent} px-7 py-3 font-heading font-bold text-white shadow-lg transition-colors`}
                        >
                          {s.cta.label}
                        </a>
                        <a
                          href="#contacto"
                          className="inline-block rounded-lg border border-primary-foreground/40 px-7 py-3 font-heading font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                        >
                          Contacto
                        </a>
                      </div>
                    </div>
                    {/* Right column intentionally empty so the scene's product remains visible */}
                    <div aria-hidden className="hidden md:block" />
                  </div>
                </>
              )}

              {s.variant === "split" && (
                <>
                  <div className={`absolute inset-0 ${s.bgClass}`} />
                  <div className="relative z-10 w-full max-w-6xl mx-auto px-12 md:px-20 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center animate-fade-in-up">
                    {/* Text side */}
                    <div className="text-center md:text-left order-2 md:order-1">
                      <p className="text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase text-foreground/60 mb-3 md:mb-4">
                        {s.eyebrow}
                      </p>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground leading-tight mb-3 md:mb-4">
                        <span className="block">{s.titleLine1}</span>
                        <span className="block">{s.titleLine2}</span>
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-foreground/75 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
                        {s.subtitle}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                        <a
                          href={s.cta.href}
                          className={`inline-block rounded-lg ${s.accent} px-7 py-3 font-heading font-bold text-white shadow-lg transition-colors`}
                        >
                          {s.cta.label}
                        </a>
                        <a
                          href="#contacto"
                          className="inline-block rounded-lg border border-foreground/20 px-7 py-3 font-heading font-bold text-foreground hover:bg-foreground/5 transition-colors"
                        >
                          Contacto
                        </a>
                      </div>
                    </div>
                    {/* Product side - integrated, no frame */}
                    <div className="order-1 md:order-2 relative flex items-center justify-center md:justify-end">
                      <div
                        aria-hidden
                        className="absolute bottom-2 md:bottom-4 left-1/2 md:left-auto md:right-8 -translate-x-1/2 md:translate-x-0 w-[60%] md:w-[55%] h-4 md:h-6 rounded-[50%] bg-foreground/25 blur-2xl"
                      />
                      <img
                        src={s.productImage}
                        alt={s.productAlt}
                        className="relative max-h-[220px] sm:max-h-[320px] md:max-h-[440px] w-auto object-contain"
                        style={{
                          filter:
                            "drop-shadow(0 18px 18px rgb(0 0 0 / 0.18)) drop-shadow(0 6px 6px rgb(0 0 0 / 0.12))",
                        }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows - placed at the very edges so they don't overlap content */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Anterior"
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur hover:bg-foreground/40 text-white items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Siguiente"
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur hover:bg-foreground/40 text-white items-center justify-center transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            data-hero-dot
            data-active={i === 0 ? "true" : "false"}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className="w-2.5 h-2.5 rounded-full bg-foreground/30 data-[active=true]:bg-foreground data-[active=true]:w-7 transition-all"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
