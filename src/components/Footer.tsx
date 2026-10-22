import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import petplanetLogo from "@/assets/petplanet-logo.png";
import { HOME_EMAIL, HOME_FACEBOOK_URL, HOME_INSTAGRAM_URL, HOME_WHATSAPP_URL } from "@/lib/home";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Marcas", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const iconLink = "text-muted-foreground hover:text-crystal transition-colors";

const Footer = () => (
  <footer className="border-t bg-card pt-10 pb-24 md:pb-10">
    <div className="container px-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <a href="#inicio" className="inline-block mb-2">
          <img src={petplanetLogo} alt="Pet Planet" className="h-10" loading="lazy" />
        </a>
        <p className="text-sm text-muted-foreground">Desarrollo, importación y distribución de marcas para el mundo pet</p>
      </div>
      <nav aria-label="Pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-crystal transition-colors">{l.label}</a>
        ))}
      </nav>
      <div className="flex gap-4">
        <a href={HOME_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={iconLink}><MessageCircle className="w-5 h-5" /></a>
        <a href={`mailto:${HOME_EMAIL}`} aria-label="Email" className={iconLink}><Mail className="w-5 h-5" /></a>
        <a href={HOME_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram @crystalcat.ar" className={iconLink}><Instagram className="w-5 h-5" /></a>
        <a href={HOME_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={iconLink}><Facebook className="w-5 h-5" /></a>
      </div>
    </div>
    <div className="container px-5 mt-8 pt-5 border-t text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Pet Planet. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
