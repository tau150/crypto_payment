const BASE_IMAGE_URL = "https://payments.pre-bnvo.com/media/crytocurrencies/";

import { CURRENCY_CODE } from "@/domain/Currency";

export const ICONS_MAP: { [key: string]: string } = {
  BCH_TEST: `${BASE_IMAGE_URL}CryptoBCH_Size36_px_TT7Td9Q.png`,
  BTC_TEST: `${BASE_IMAGE_URL}CurrencyBTC_Size36_px_StrokeON.png`,
  ETH_TEST3: `${BASE_IMAGE_URL}CurrencyETH_Size36_px_StrokeON.png`,
  XRP_TEST: `${BASE_IMAGE_URL}CurrencyXRP_Size36_px_StrokeON.png`,
  USDC_TEST3: `${BASE_IMAGE_URL}Property_1USDC_-_Ethereum_StrokeON.png`,
};

export const getIconUrlBasedOnSymbol = (symbol: string): string => {
  return ICONS_MAP[symbol];
};

export const formatSymbolName = (symbol: string): CURRENCY_CODE =>
  symbol.split("_")[0] as CURRENCY_CODE;
