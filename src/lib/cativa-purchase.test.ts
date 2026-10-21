import { describe, expect, it } from "vitest";
import { CATIVA_MERCADO_LIBRE_URL, CATIVA_WHOLESALE_WHATSAPP_URL } from "./cativa-purchase";

describe("Cativa purchase destinations", () => {
  it("uses the existing Crystal Cat WhatsApp number", () => {
    expect(new URL(CATIVA_WHOLESALE_WHATSAPP_URL).pathname).toBe("/5491123190096");
  });

  it("prefills the requested wholesale inquiry", () => {
    expect(new URL(CATIVA_WHOLESALE_WHATSAPP_URL).searchParams.get("text")).toBe(
      "¡Hola! Quiero consultar por la compra mayorista de Cativa para mi comercio.",
    );
  });

  it("links retail buying to the official Mercado Libre listing", () => {
    expect(CATIVA_MERCADO_LIBRE_URL).toBe(
      "https://www.mercadolibre.com.ar/arena-sanitaria-de-mandioca-cativa-para-gatos-4kg/up/MLAU5642849316?pdp_filters=item_id:MLA4108631228",
    );
  });
});
