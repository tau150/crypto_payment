import { CURRENCY_CODE } from "@/domain/Currency";

const COINS_MAP: Record<CURRENCY_CODE, string> = {
  [CURRENCY_CODE.BTC]: "0",
  [CURRENCY_CODE.BCH]: "145",
  [CURRENCY_CODE.ETH]: "60",
  [CURRENCY_CODE.XRP]: "144",
  [CURRENCY_CODE.USDC]: "18000118",
};

interface GenerateQrCodeParams {
  address: string;
  amount: number;
  symbol: CURRENCY_CODE;
  tag?: string;
}

const getCoinCode = (symbol: CURRENCY_CODE) => {
  return COINS_MAP[symbol];
};

export const generateQRCode = ({ address, amount, symbol, tag }: GenerateQrCodeParams): string => {
  const code = getCoinCode(symbol);

  return `https://link.trustwallet.com/send?asset=c${code}&address=${address}&amount=${amount}${
    tag ? `&memo=${tag}` : ""
  }`;
};
