import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder – no backend yet
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center mb-4">
          Contacto
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          ¿Querés vender nuestros productos o hacer una consulta? Escribinos
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-6 justify-center">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border p-4 hover:shadow-sm transition-shadow"
            >
              <MessageCircle className="w-6 h-6 text-whatsapp" />
              <div>
                <p className="font-heading font-bold text-sm">WhatsApp</p>
                <p className="text-xs text-muted-foreground">Chateá con nosotros</p>
              </div>
            </a>

            <a
              href="mailto:info@petplanet.com"
              className="flex items-center gap-3 rounded-lg border p-4 hover:shadow-sm transition-shadow"
            >
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="font-heading font-bold text-sm">Email</p>
                <p className="text-xs text-muted-foreground">info@petplanet.com</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Mensaje"
              required
              rows={4}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="rounded-lg border bg-card px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading font-bold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
