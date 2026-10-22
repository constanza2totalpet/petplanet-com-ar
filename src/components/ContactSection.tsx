import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { HOME_EMAIL, HOME_FORM_ENDPOINT, HOME_WHATSAPP_URL } from "@/lib/home";

const inputClass =
  "w-full rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-crystal/50 focus:border-crystal/50";

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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Por favor ingresá un email válido.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch(HOME_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
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
    <section id="contacto" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container max-w-5xl px-5 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crystal mb-3">Trabajemos juntos</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-4">Hagamos crecer tu negocio.</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-7">
            ¿Tenés un pet shop, una veterinaria o un comercio del rubro? Contactanos para conocer nuestras marcas y conversar sobre oportunidades comerciales.
          </p>
          <a
            href={HOME_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-whatsapp px-7 py-3.5 font-heading font-bold text-primary-foreground shadow hover:brightness-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
          </a>
          <a href={`mailto:${HOME_EMAIL}`} className="mt-5 flex items-center gap-2 text-sm text-muted-foreground hover:text-crystal transition-colors">
            <Mail className="w-4 h-4" /> {HOME_EMAIL}
          </a>
        </div>

        <div className="rounded-2xl border bg-muted/40 p-6 sm:p-7">
          <h3 className="font-heading font-bold text-lg mb-1">Consultas generales</h3>
          <p className="text-sm text-muted-foreground mb-5">Dejanos tus datos y te respondemos a la brevedad.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <label className="sr-only" htmlFor="home-nombre">Nombre</label>
            <input id="home-nombre" type="text" name="nombre" placeholder="Nombre" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className={inputClass} />
            <label className="sr-only" htmlFor="home-email">Email</label>
            <input id="home-email" type="email" name="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            <label className="sr-only" htmlFor="home-mensaje">Mensaje</label>
            <textarea id="home-mensaje" name="mensaje" placeholder="Tu consulta" required rows={4} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className={`${inputClass} resize-none`} />
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 rounded-lg border border-crystal text-crystal bg-card px-6 py-3 font-heading font-bold hover:bg-crystal hover:text-primary-foreground transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {status === "loading" ? "Enviando..." : "Quiero recibir más información"}
            </button>
            {status === "success" && (
              <p role="status" className="text-sm text-center rounded-lg border border-brand-green/40 bg-brand-green/10 text-brand-green px-4 py-3">
                Mensaje enviado correctamente
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm text-center rounded-lg border border-destructive/40 bg-destructive/10 text-destructive px-4 py-3">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
