import { describe, expect, it } from "vitest";
import { HOME_BRAND_LINKS, HOME_FORM_ENDPOINT, HOME_WHATSAPP_URL } from "./home";

describe("Home commercial links", () => {
  it("keeps the existing WhatsApp number", () => {
    expect(HOME_WHATSAPP_URL.startsWith("https://wa.me/5491123190096")).toBe(true);
  });
  it("keeps brand destinations", () => {
    expect(HOME_BRAND_LINKS.crystalcat).toBe("/crystal-cat");
    expect(HOME_BRAND_LINKS.cativa).toBe("/cativa");
  });
  it("keeps the form destination", () => {
    expect(HOME_FORM_ENDPOINT).toBe("https://formspree.io/f/mwvybpvo");
  });
  it("preserves Furação Pet's exact existing destination", () => {
    expect(HOME_BRAND_LINKS.furacao).toBe("https://wa.me/5491123190096");
  });
  it("points Rash-oN to its official site", () => {
    expect(HOME_BRAND_LINKS.rashon).toBe("https://www.rash-on.com.ar");
  });
  it("sends Nunbell enquiries through the site's own WhatsApp link", () => {
    expect(HOME_BRAND_LINKS.nunbell).toBe(HOME_WHATSAPP_URL);
  });
});
