export interface Currency {
  blockchain: string;
  image: string;
  max_amount: string;
  min_amount: string;
  name: string;
  symbol: string;
}

export enum CURRENCY_CODE {
  BTC = "BTC",
  BCH = "BCH",
  ETH = "ETH",
  XRP = "XRP",
  USDC = "USDC",
}
