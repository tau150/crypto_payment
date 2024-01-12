import { CurrenciesResponse } from "../types/currencies.types";

export const currenciesResponseFixture: CurrenciesResponse = [
  {
    symbol: "BTC_TEST",
    name: "Bitcoin Test BTC",
    min_amount: "0.01",
    max_amount: "10000.00",
    image: "https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyBTC_Size36_px_StrokeON.png",
    blockchain: "BTC_TEST",
  },
  {
    symbol: "ETH_TEST3",
    name: "Ethereum Goerli ETH",
    min_amount: "0.05",
    max_amount: "20000.00",
    image: "https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyETH_Size36_px_StrokeON.png",
    blockchain: "ETH_TEST3",
  },
];
