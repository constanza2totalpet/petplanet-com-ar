import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import petplanetLogo from "@/assets/petplanet-logo.png";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Marcas", href: "/#productos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/5491123190096?text=" +
  encodeURIComponent("Hola! Quiero recibir más información sobre los productos de Pet Planet.");

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 md:h-20 px-5 gap-4">
        <a href="/" className="flex items-center">
          <img
            src={petplanetLogo}
            alt="Pet Planet"
            className="h-12 md:h-16 w-auto shrink-0"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-crystal transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 font-heading font-bold text-sm text-white shadow hover:brightness-95 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          Consultar por WhatsApp
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t bg-card px-5 pb-4 pt-2 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-crystal transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 font-heading font-bold text-sm text-white shadow"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
