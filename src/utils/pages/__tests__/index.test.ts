import { render } from "@testing-library/react";

import { Currency } from "@/domain/Currency";

import { formatCurrenciesForSelect } from "../index";

describe("formatCurrenciesForSelect", () => {
  const mockCurrencies: Currency[] = [
    {
      symbol: "BCH_TEST",
      name: "Bitcoin Cash Test BCH",
      min_amount: "0.05",
      max_amount: "20000.00",
      image: "https://payments.pre-bnvo.com/media/crytocurrencies/CryptoBCH_Size36_px_TT7Td9Q.png",
      blockchain: "BCH_TEST",
    },
  ];

  it("formats currencies for select correctly", () => {
    const formattedCurrencies = formatCurrenciesForSelect(mockCurrencies);

    formattedCurrencies.forEach((currency, index) => {
      const { label, value, imageSrc } = currency;
      const { container } = render(label as React.ReactElement);

      expect(value).toEqual(mockCurrencies[index].symbol);
      expect(imageSrc).toEqual(mockCurrencies[index].image);

      const currencyNameParts = mockCurrencies[index].name.split(" ");
      const renderedName = container.querySelector(".font-semibold")?.textContent;
      const renderedSubtitle = container.querySelector(".text-xs")?.textContent;

      expect(renderedName).toEqual(currencyNameParts[0]);
      expect(renderedSubtitle).toEqual(currencyNameParts[2]);
    });
  });

  it("returns an empty array for an empty currencies array", () => {
    const emptyCurrencies: Currency[] = [];
    const result = formatCurrenciesForSelect(emptyCurrencies);

    expect(result).toEqual([]);
  });
});
