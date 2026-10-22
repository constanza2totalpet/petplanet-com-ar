import originalPack from "@/assets/crystalcat-original-pack-v2.png.asset.json";

export const CRYSTALCAT_WHATSAPP_NUMBER = "5491123190096";
export const CRYSTALCAT_WHATSAPP_MESSAGE = "Hola! Quiero consultar por Crystal Cat.";
export const CRYSTALCAT_WHATSAPP_URL = `https://wa.me/${CRYSTALCAT_WHATSAPP_NUMBER}?text=${encodeURIComponent(CRYSTALCAT_WHATSAPP_MESSAGE)}`;
export const CRYSTALCAT_RETAIL_URL = "https://www.mercadolibre.com.ar/piedras-sanitarias-silica-crystalcat-para-gatos-x-38l/p/MLA24808114#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=1&type=product&tracking_id=317415de-0866-421d-b937-875c2e239436&overlay_label_capability=not_apply&wid=MLA3927016674&sid=search";
export const CRYSTALCAT_WHOLESALE_URL = `https://wa.me/${CRYSTALCAT_WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola! Quiero consultar por las condiciones de compra mayorista de CrystalCat para mi comercio.")}`;
export const CRYSTALCAT_INSTAGRAM_URL = "https://instagram.com/crystalcat.ar";
export const CRYSTALCAT_PRESENTATIONS = [
  { name: "CrystalCat", volume: "3,8 L", image: originalPack.url, description: "Piedras sanitarias de sílice para gatos." },
];

export function crystalcatLeadUrl(form: { nombre: string; localidad: string; negocio: string; whatsapp: string }) {
  if (!form.nombre.trim() || !form.localidad.trim() || !form.whatsapp.trim()) return null;
  const message = `Hola! Quiero recibir información sobre Crystal Cat.\nNombre: ${form.nombre.trim()}\nLocalidad: ${form.localidad.trim()}\nNegocio: ${form.negocio.trim() || "-"}\nWhatsApp: ${form.whatsapp.trim()}`;
  return `https://wa.me/${CRYSTALCAT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}