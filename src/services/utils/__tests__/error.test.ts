import { getMetamaskErrorMessage } from "../error";

describe("getMetamaskErrorMessage", () => {
  it("returns correct error message for insufficient funds", () => {
    const errorMessage = "Transaction failed: insufficient funds";
    const result = getMetamaskErrorMessage(errorMessage);

    expect(result).toBe(
      "Fondos insuficientes, chequea el monto y la red que tienes seteada en Metamask",
    );
  });

  it("returns correct error message for invalid address", () => {
    const errorMessage = "Transaction failed: invalid address";
    const result = getMetamaskErrorMessage(errorMessage);

    expect(result).toBe(
      "Dirección inválida, verifique la dirección y que es una red soportada por Metamask",
    );
  });

  it("returns default error message for unknown error", () => {
    const errorMessage = "Some unknown error occurred";
    const result = getMetamaskErrorMessage(errorMessage);

    expect(result).toBe("Ooops, hubo un error");
  });

  it("is case-insensitive for error messages", () => {
    const errorMessage = "Transaction failed: iNsUfFiCiEnT fUnDs";
    const result = getMetamaskErrorMessage(errorMessage);

    expect(result).toBe(
      "Fondos insuficientes, chequea el monto y la red que tienes seteada en Metamask",
    );
  });
});
