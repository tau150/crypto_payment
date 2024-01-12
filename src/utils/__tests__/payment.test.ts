import { CURRENCY_CODE } from "@/domain/Currency";

import { generateQRCode } from "../payment";

describe("generateQRCode", () => {
  it("genera el código QR correctamente con tag", () => {
    const params = {
      address: "dirección-de-prueba",
      amount: 10,
      symbol: CURRENCY_CODE.BTC,
      tag: "tag-de-prueba",
    };

    const result = generateQRCode(params);

    expect(result).toBe(
      "https://link.trustwallet.com/send?asset=c0&address=dirección-de-prueba&amount=10&memo=tag-de-prueba",
    );
  });

  it("genera el código QR correctamente sin tag", () => {
    const params = {
      address: "dirección-de-prueba",
      amount: 10,
      symbol: CURRENCY_CODE.BTC,
    };

    const result = generateQRCode(params);

    expect(result).toBe(
      "https://link.trustwallet.com/send?asset=c0&address=dirección-de-prueba&amount=10",
    );
  });
});
