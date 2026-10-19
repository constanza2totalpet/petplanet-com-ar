import { describe, expect, it } from "vitest";
import { CATIVA_MERCADO_LIBRE_URL, CATIVA_WHOLESALE_WHATSAPP_URL } from "./cativa-purchase";

describe("Cativa purchase destinations", () => {
  it("uses the existing Crystal Cat WhatsApp number", () => {
    expect(new URL(CATIVA_WHOLESALE_WHATSAPP_URL).pathname).toBe("/5491123190096");
  });

  it("prefills the requested wholesale inquiry", () => {
    expect(new URL(CATIVA_WHOLESALE_WHATSAPP_URL).searchParams.get("text")).toBe(
      "¡Hola! Quiero recibir información sobre la compra mayorista de Cativa para mi comercio.",
    );
  });

  it("keeps retail buying unavailable until an official URL is supplied", () => {
    expect(CATIVA_MERCADO_LIBRE_URL).toBeNull();
  });
});