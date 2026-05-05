import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvybpvo";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nombre = form.nombre.trim();
    const email = form.email.trim();
    const mensaje = form.mensaje.trim();

    if (!nombre || !email || !mensaje) {
      setStatus("error");
      setErrorMessage("Por favor completá todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Por favor ingresá un email válido.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ nombre: "", email: "", mensaje: "" });
      } else {
        setStatus("error");
        setErrorMessage("Hubo un problema al enviar el mensaje. Intentá nuevamente.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("No pudimos enviar tu mensaje. Verificá tu conexión e intentá de nuevo.");
    }
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
              href="mailto:info@petplanet.com.ar"
              className="flex items-center gap-3 rounded-lg border p-4 hover:shadow-sm hover:border-crystal/30 transition-all"
            >
              <Mail className="w-6 h-6 text-crystal" />
              <div>
                <p className="font-heading font-bold text-sm">Email</p>
                <p className="text-xs text-muted-foreground">info@petplanet.com.ar</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-crystal/50 focus:border-crystal/50"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-crystal/50 focus:border-crystal/50"
            />
            <textarea
              placeholder="Contanos sobre tu negocio o consulta"
              name="mensaje"
              required
              rows={4}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="rounded-lg border bg-card px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-crystal/50 focus:border-crystal/50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 font-heading font-bold text-white hover:bg-brand-green/90 shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {status === "loading" ? "Enviando..." : "Quiero recibir más información"}
            </button>

            {status === "success" && (
              <p className="text-sm text-center rounded-lg border border-brand-green/40 bg-brand-green/10 text-brand-green px-4 py-3">
                Mensaje enviado correctamente
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-center rounded-lg border border-destructive/40 bg-destructive/10 text-destructive px-4 py-3">
                {errorMessage}
              </p>
            )}

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
