import { describe, it, expect } from "vitest";
import { CRYSTALCAT_WHATSAPP_URL, CRYSTALCAT_INSTAGRAM_URL, CRYSTALCAT_PRESENTATIONS, crystalcatLeadUrl } from "./crystalcat";

describe("CrystalCat original product and contacts", () => {
  it("preserves the existing WhatsApp number and message", () => {
    const url = new URL(CRYSTALCAT_WHATSAPP_URL);
    expect(url.pathname).toBe("/5491123190096");
    expect(url.searchParams.get("text")).toBe("Hola! Quiero consultar por Crystal Cat.");
  });
  it("keeps CrystalCat's own Instagram", () => {
    expect(CRYSTALCAT_INSTAGRAM_URL).toBe("https://instagram.com/crystalcat.ar");
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