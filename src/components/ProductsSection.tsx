import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import crystalcatLogo from "@/assets/crystalcat-logo-transparent.png";
import crystalcatPack from "@/assets/crystalcat-original-pack-v2.png.asset.json";
import cativaLogoGreen from "@/assets/cativa-logo-green.png";
import cativaBag from "@/assets/cativa-bag-medio.jpg";
import furacaoLogo from "@/assets/furacao-pet-logo-transparent.png";
import furacaoProducts from "@/assets/furacao-products-card.png";
import { HOME_BRAND_LINKS } from "@/lib/home";

type Brand = {
  key: string;
  logo: string;
  logoAlt: string;
  category: string;
  categoryClass: string;
  phrase: string;
  image: string;
  imageAlt: string;
  imageBg: string;
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
    categoryClass: "text-brand-orange",
    phrase: "Piedras sanitarias de sílice para gatos en presentación de 3,8 L.",
    image: crystalcatPack.url,
    imageAlt: "Envase de piedras sanitarias de sílice CrystalCat de 3,8 L",
    imageBg: "bg-card",
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
    categoryClass: "text-cativa",
    phrase: "Higiene natural para gatos, a base de mandioca.",
    image: cativaBag,
    imageAlt: "Envase de arena sanitaria de mandioca Cativa",
    imageBg: "bg-card",
    cta: "Conocé Cativa",
    ctaClass: "bg-cativa hover:bg-cativa/90",
    href: HOME_BRAND_LINKS.cativa,
    internal: true,
  },
  {
    key: "furacao",
    logo: furacaoLogo,
    logoAlt: "Furaçao Pet",
    category: "Juguetes para mascotas",
    categoryClass: "text-brand-pink",
    phrase: "Juguetes importados de goma, soga y estimulación para el juego activo.",
    image: furacaoProducts,
    imageAlt: "Juguetes de goma Furaçao Pet: pelota, mancuerna y hueso",
    imageBg: "bg-card",
    cta: "Consultar por Furaçao Pet",
    ctaClass: "bg-brand-pink hover:bg-brand-pink/90",
    href: HOME_BRAND_LINKS.furacao,
    internal: false,
  },
];

const ctaBase =
  "mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-heading font-bold text-sm text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const ProductsSection = () => (
  <section id="productos" className="py-16 md:py-24 bg-background scroll-mt-20">
    <div className="container px-5">
      <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crystal mb-3">Nuestras marcas</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-4">
          Marcas de productos para mascotas en Argentina
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Como distribuidora de productos para mascotas, presentamos marcas con identidad propia. Conocé qué ofrece cada una.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {brands.map((b) => (
          <article key={b.key} className="flex flex-col rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className={`${b.imageBg} aspect-[4/3] flex items-center justify-center p-6 border-b`}>
              <img
                src={b.image}
                alt={b.imageAlt}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <div className="h-12 mb-4 flex items-center">
                <img src={b.logo} alt={b.logoAlt} loading="lazy" className="max-h-12 w-auto object-contain" />
              </div>
              <h3 className={`text-xs font-semibold tracking-widest uppercase mb-2 ${b.categoryClass}`}>{b.category}</h3>
              <p className="text-sm text-muted-foreground mb-6">{b.phrase}</p>
              {b.internal ? (
                <Link to={b.href} className={`${ctaBase} ${b.ctaClass}`}>
                  {b.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <a href={b.href} target="_blank" rel="noopener noreferrer" className={`${ctaBase} ${b.ctaClass}`}>
                  <MessageCircle className="w-4 h-4" /> {b.cta}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
