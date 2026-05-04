import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-14 md:py-20 bg-gradient-to-b from-background via-brand-orange-light/40 to-crystal-light/60 relative">
      <div aria-hidden className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crystal via-brand-green to-brand-orange" />
      <div className="container max-w-4xl px-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-center mb-3 md:mb-4">
          Trabajemos juntos
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-xl mx-auto text-sm sm:text-base">
          Si te interesa conocer más sobre nuestras marcas, completá tus datos a continuación y nos ponemos en contacto.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Info */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <a
              href="https://wa.me/5491123190096"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border p-4 hover:shadow-sm hover:border-crystal/30 transition-all"
            >
              <MessageCircle className="w-6 h-6 text-whatsapp" />
              <div>
                <p className="font-heading font-bold text-sm">WhatsApp</p>
                <p className="text-xs text-muted-foreground">Escribinos por chat</p>
              </div>
            </a>

            <a
              href="mailto:info@petplanet.com"
              className="flex items-center gap-3 rounded-lg border p-4 hover:shadow-sm hover:border-crystal/30 transition-all"
            >
              <Mail className="w-6 h-6 text-crystal" />
              <div>
                <p className="font-heading font-bold text-sm">Email</p>
                <p className="text-xs text-muted-foreground">info@petplanet.com</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Nombre"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-crystal/50 focus:border-crystal/50"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-crystal/50 focus:border-crystal/50"
            />
            <textarea
              placeholder="Contanos sobre tu negocio o consulta"
              required
              rows={4}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="rounded-lg border bg-card px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-crystal/50 focus:border-crystal/50"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 font-heading font-bold text-white hover:bg-brand-green/90 shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              Quiero recibir más información
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Dejanos tus datos a continuación y te contactamos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
