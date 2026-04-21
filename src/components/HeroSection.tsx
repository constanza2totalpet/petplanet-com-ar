import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import heroCrystal from "@/assets/hero-crystalcat.jpg";
import heroBusiness from "@/assets/hero-business.jpg";
import heroFuracao from "@/assets/hero-furacao.jpg";

type Slide = {
  image: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  accent: string;
  cta: { label: string; href: string };
};

const slides: Slide[] = [
  {
    image: heroPets,
    eyebrow: "PET PLANET",
    titleLine1: "Creamos marcas",
    titleLine2: "para el mundo pet",
    subtitle: "Desarrollo, identidad y distribución",
    accent: "bg-crystal hover:bg-crystal-dark",
    cta: { label: "Conocer marcas", href: "#productos" },
  },
  {
    image: heroCrystal,
    eyebrow: "CRYSTAL CAT",
    titleLine1: "Piedras sanitarias",
    titleLine2: "de sílica",
    subtitle: "Alta absorción. Mayor duración. Control de olores",
    accent: "bg-brand-orange hover:bg-brand-orange/90",
    cta: { label: "Ver más", href: "/crystal-cat" },
  },
  {
    image: heroFuracao,
    eyebrow: "FURAÇAO PET",
    titleLine1: "Juguetes importados",
    titleLine2: "para mascotas",
    subtitle: "Diseñados para el juego y la actividad",
    accent: "bg-brand-pink hover:bg-brand-pink/90",
    cta: { label: "Conocer más", href: "#productos" },
  },
  {
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
              <img
                src={s.image}
                alt={s.title}
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
                  {s.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 mb-6 md:mb-8 max-w-xl mx-auto">
                  {s.subtitle}
                </p>
                {s.cta && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Anterior"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur hover:bg-white/30 text-white items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Siguiente"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur hover:bg-white/30 text-white items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
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
            className="w-2.5 h-2.5 rounded-full bg-white/40 data-[active=true]:bg-white data-[active=true]:w-7 transition-all"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
