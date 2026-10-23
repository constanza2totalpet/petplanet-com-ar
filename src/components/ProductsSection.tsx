import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import crystalcatLogo from "@/assets/crystalcat-logo-transparent.png";
import crystalcatScene from "@/assets/crystalcat-home-banner.jpg.asset.json";
import cativaLogoGreen from "@/assets/cativa-logo-green.png";
import cativaBag from "@/assets/cativa-bag-medio.jpg";
import cativaCat from "@/assets/cativa-cat-tray.jpg";
import furacaoLogo from "@/assets/furacao-pet-logo-transparent.png";
import furacaoScene from "@/assets/furacao-scene.jpg";
import { HOME_BRAND_LINKS } from "@/lib/home";

type Brand = {
  key: string;
  logo: string;
  logoAlt: string;
  category: string;
  phrase: string;
  image: string;
  imageAlt: string;
  background: string;
  cta: string;
  ctaClass: string;
  href: string;
  internal: boolean;
};

const brands: Brand[] = [
  {
    key: "crystalcat",
    logo: crystalcatLogo,
    logoAlt: "CrystalCat",
    category: "Piedras sanitarias de sílice",
    phrase: "Alta absorción y control de olores.",
    image: crystalcatScene.url,
    imageAlt: "Gato blanco junto a una bandeja con cristales de sílice y el envase original CrystalCat de 3,8 L",
    background: "bg-crystal-light",
    cta: "Conocé CrystalCat",
    ctaClass: "bg-crystal hover:bg-crystal-dark",
    href: HOME_BRAND_LINKS.crystalcat,
    internal: true,
  },
  {
    key: "cativa",
    logo: cativaLogoGreen,
    logoAlt: "Cativa",
    category: "Arena sanitaria de mandioca",
    phrase: "Higiene natural para gatos. Una nueva forma de cuidar su espacio.",
    image: cativaBag,
    imageAlt: "Envase de arena sanitaria de mandioca Cativa",
    background: "bg-cativa-cream",
    cta: "Conocé Cativa",
    ctaClass: "bg-cativa hover:bg-cativa/90",
    href: HOME_BRAND_LINKS.cativa,
    internal: true,
  },
  {
    key: "furacao",
    logo: furacaoLogo,
    logoAlt: "Furação Pet",
    category: "Juguetes y accesorios para mascotas",
    phrase: "Diversión y juego para todos los días.",
    image: furacaoScene,
    imageAlt: "Escena de apoyo: perro jugando con una soga junto a juguetes para mascotas",
    background: "bg-brand-orange-light",
    cta: "Conocé Furação Pet",
    ctaClass: "bg-brand-pink hover:bg-brand-pink/90",
    href: HOME_BRAND_LINKS.furacao,
    internal: false,
  },
];

const ProductsSection = () => (
  <section id="productos" className="py-16 md:py-24 bg-background scroll-mt-20">
    <div className="container px-5">
      <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crystal mb-3">Nuestras marcas</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-4">
          Conocé nuestras marcas
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Como distribuidora de productos para mascotas, presentamos marcas con identidad propia. Conocé qué ofrece cada una.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8">
        {brands.map((b) => (
          <article key={b.key} className={`grid overflow-hidden rounded-lg border md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] ${b.background}`}>
            <div className="flex flex-col items-start justify-center p-6 sm:p-8 lg:p-10">
              <h3 className="mb-5 flex h-14 items-center">
                <img src={b.logo} alt={b.logoAlt} loading="lazy" className="max-h-14 max-w-[220px] object-contain" />
              </h3>
              <p className="mb-2 max-w-sm font-heading text-lg font-bold leading-snug sm:text-xl">{b.category}</p>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{b.phrase}</p>
              <Button asChild size="lg" className={`min-h-12 max-w-full rounded-lg px-6 font-heading font-bold text-primary-foreground ${b.ctaClass}`}>
                {b.internal ? (
                  <Link to={b.href}>{b.cta}<ArrowRight aria-hidden="true" /></Link>
                ) : (
                  <a href={b.href} target="_blank" rel="noopener noreferrer">{b.cta}<ArrowRight aria-hidden="true" /></a>
                )}
              </Button>
            </div>
            <div className="relative min-w-0 aspect-[16/9] md:aspect-auto md:min-h-[330px]">
              {b.key === "cativa" ? (
                <div className="grid h-full grid-cols-[0.85fr_1.15fr] bg-card">
                  <img src={b.image} alt={b.imageAlt} loading="lazy" decoding="async" className="h-full max-h-[330px] w-full object-contain p-3 sm:p-5" />
                  <img src={cativaCat} alt="Gato junto a una bandeja sanitaria en un ambiente luminoso" loading="lazy" decoding="async" className="h-full max-h-[330px] w-full object-cover object-center" />
                </div>
              ) : (
                <img src={b.image} alt={b.imageAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-right" />
              )}
              </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
