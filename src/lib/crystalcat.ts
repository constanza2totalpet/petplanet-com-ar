import originalPack from "@/assets/crystalcat-original-pack.png.asset.json";

export const CRYSTALCAT_WHATSAPP_NUMBER = "5491123190096";
export const CRYSTALCAT_WHATSAPP_MESSAGE = "Hola! Quiero consultar por Crystal Cat.";
export const CRYSTALCAT_WHATSAPP_URL = `https://wa.me/${CRYSTALCAT_WHATSAPP_NUMBER}?text=${encodeURIComponent(CRYSTALCAT_WHATSAPP_MESSAGE)}`;
export const CRYSTALCAT_INSTAGRAM_URL = "https://instagram.com/crystalcat.ar";
export const CRYSTALCAT_PRESENTATIONS = [
  { name: "CrystalCat", volume: "3,8 L", image: originalPack.url, description: "Arena sanitaria de sílice para gatos." },
];

export function crystalcatLeadUrl(form: { nombre: string; localidad: string; negocio: string; whatsapp: string }) {
  if (!form.nombre.trim() || !form.localidad.trim() || !form.whatsapp.trim()) return null;
  const message = `Hola! Quiero recibir información sobre Crystal Cat.\nNombre: ${form.nombre.trim()}\nLocalidad: ${form.localidad.trim()}\nNegocio: ${form.negocio.trim() || "-"}\nWhatsApp: ${form.whatsapp.trim()}`;
  return `https://wa.me/${CRYSTALCAT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}