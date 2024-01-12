import type { Currency } from "@/domain/Currency";

export const formatCurrenciesForSelect = (currencies: Currency[]) => {
  return currencies.map((currency) => ({
    label: (
      <div className="pl-2">
        <p className="font-semibold text-sm">{currency.name.split(" ")[0]}</p>
        <p className="text-xs text-gray-500">{currency.name.split(" ")[2]}</p>
      </div>
    ),
    value: currency.symbol,
    imageSrc: currency.image,
  }));
};
