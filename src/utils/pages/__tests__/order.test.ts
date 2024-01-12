import { getIconUrlBasedOnSymbol, formatSymbolName, ICONS_MAP } from "../order";

describe("getIconUrlBasedOnSymbol", () => {
  it("returns the correct icon URL for a given symbol", () => {
    const symbols = Object.keys(ICONS_MAP);

    symbols.forEach((symbol) => {
      expect(getIconUrlBasedOnSymbol(symbol)).toEqual(ICONS_MAP[symbol]);
    });
  });

  it("returns undefined for an unknown symbol", () => {
    const unknownSymbol = "UNKNOWN_SYMBOL";

    expect(getIconUrlBasedOnSymbol(unknownSymbol)).toBeUndefined();
  });
});

describe("formatSymbolName", () => {
  it("formats the symbol name correctly", () => {
    const testCases = [
      { input: "BCH_TEST", expectedOutput: "BCH" },
      { input: "BTC_TEST", expectedOutput: "BTC" },
      { input: "ETH_TEST3", expectedOutput: "ETH" },
      { input: "XRP_TEST", expectedOutput: "XRP" },
      { input: "USDC_TEST3", expectedOutput: "USDC" },
    ];

    testCases.forEach(({ input, expectedOutput }) => {
      expect(formatSymbolName(input)).toEqual(expectedOutput);
    });
  });
});
