import { describe, it, expect } from "vitest";
import { CRYSTALCAT_WHATSAPP_URL, CRYSTALCAT_RETAIL_URL, CRYSTALCAT_WHOLESALE_URL, CRYSTALCAT_INSTAGRAM_URL, CRYSTALCAT_INSTAGRAM_FLOATING_URL, CRYSTALCAT_PRESENTATIONS, crystalcatLeadUrl } from "./crystalcat";

describe("CrystalCat original product and contacts", () => {
  it("uses the exact supplied retail listing including its tracking fragment", () => {
    expect(CRYSTALCAT_RETAIL_URL).toBe("https://www.mercadolibre.com.ar/piedras-sanitarias-silica-crystalcat-para-gatos-x-38l/p/MLA24808114#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=1&type=product&tracking_id=317415de-0866-421d-b937-875c2e239436&overlay_label_capability=not_apply&wid=MLA3927016674&sid=search");
  });
  it("keeps the existing wholesale contact with the requested business message", () => {
    const url = new URL(CRYSTALCAT_WHOLESALE_URL);
    expect(url.pathname).toBe("/5491123190096");
    expect(url.searchParams.get("text")).toBe("¡Hola! Quiero consultar por las condiciones de compra mayorista de CrystalCat para mi comercio.");
  });
  it("preserves the existing WhatsApp number and message", () => {
    const url = new URL(CRYSTALCAT_WHATSAPP_URL);
    expect(url.pathname).toBe("/5491123190096");
    expect(url.searchParams.get("text")).toBe("Hola! Quiero consultar por Crystal Cat.");
  });
  it("keeps CrystalCat's own Instagram", () => {
    expect(CRYSTALCAT_INSTAGRAM_URL).toBe("https://instagram.com/crystalcat.ar");
  });
  it("opens the floating Instagram button at the exact supplied profile link", () => {
    expect(CRYSTALCAT_INSTAGRAM_FLOATING_URL).toBe("https://www.instagram.com/crystalcat.ar?exln=MXQ1cmw2OXFibDRrdQ==");
  });
  it("lists only the confirmed 3.8 litre presentation", () => {
    expect(CRYSTALCAT_PRESENTATIONS.map(p => p.volume)).toEqual(["3,8 L"]);
  });
  it("sends business lead details to the existing WhatsApp number", () => {
    const result = crystalcatLeadUrl({ nombre: " Ana ", localidad: "Rosario", negocio: "Pet Shop", whatsapp: "3411234567" });
    expect(result).not.toBeNull();
    const url = new URL(result ?? "https://invalid.test");
    expect(url.pathname).toBe("/5491123190096");
    expect(url.searchParams.get("text")).toBe("Hola! Quiero recibir información sobre Crystal Cat.\nNombre: Ana\nLocalidad: Rosario\nNegocio: Pet Shop\nWhatsApp: 3411234567");
  });
  it("does not open an incomplete inquiry", () => {
    expect(crystalcatLeadUrl({ nombre: " ", localidad: "Rosario", negocio: "", whatsapp: "123" })).toBeNull();
  });
});