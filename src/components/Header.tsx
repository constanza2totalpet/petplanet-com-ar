import { useState } from "react";
import { Menu, X } from "lucide-react";
import petplanetLogo from "@/assets/petplanet-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Marcas", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-1">
          <img src={petplanetLogo} alt="Pet Planet" className="h-14" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

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
        <nav className="md:hidden border-t bg-card px-6 pb-4 pt-2 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
