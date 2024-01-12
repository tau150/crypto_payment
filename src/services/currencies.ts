import type { CurrenciesResponse } from "./types/currencies.types";

import fetcher from "@/utils/fetcher";

import { BASE_HOST } from "./constants";

export const getCurrencies = (): Promise<CurrenciesResponse> => {
  return fetcher<CurrenciesResponse>(`${BASE_HOST}/currencies`);
};
