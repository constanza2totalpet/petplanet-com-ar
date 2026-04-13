import { Instagram, Facebook, Twitter } from "lucide-react";
import petplanetLogo from "@/assets/petplanet-logo.png";

const Footer = () => (
  <footer className="border-t bg-card py-12">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <a href="#inicio" className="flex items-center gap-1 mb-2">
            <img src={petplanetLogo} alt="Pet Planet" className="h-12" />
          </a>
          <p className="text-sm text-muted-foreground">Distribuidora de productos para mascotas</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-bold text-sm mb-3">Enlaces</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#productos" className="hover:text-primary transition-colors">Productos</a></li>
            <li><a href="#marcas" className="hover:text-primary transition-colors">Marcas</a></li>
            <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading font-bold text-sm mb-3">Redes sociales</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pet Planet. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
