import { Instagram, Facebook, Twitter } from "lucide-react";
import petplanetLogo from "@/assets/petplanet-logo.png";

const Footer = () => (
  <footer className="border-t bg-card py-10 md:py-12">
    <div className="container px-5">
      <div className="grid sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <a href="#inicio" className="flex items-center gap-1 mb-2">
            <img src={petplanetLogo} alt="Pet Planet" className="h-10 sm:h-12" />
          </a>
          <p className="text-sm text-muted-foreground">
            Desarrollo y distribución de marcas para el mundo pet.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-bold text-sm mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#inicio" className="hover:text-crystal transition-colors">Inicio</a></li>
            <li><a href="#nosotros" className="hover:text-crystal transition-colors">Nosotros</a></li>
            <li><a href="#productos" className="hover:text-crystal transition-colors">Marcas</a></li>
            <li><a href="#contacto" className="hover:text-crystal transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading font-bold text-sm mb-3">Redes sociales</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-crystal transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-crystal transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-crystal transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-10 pt-6 border-t text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pet Planet. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
