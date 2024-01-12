import type { OrderParams } from "./types/order.types";
import type { CreateOrderResponse, OrderDetailsResponse } from "./types/order.types";

import fetcher from "@/utils/fetcher";

import { BASE_HOST } from "./constants";

export const createOrder = (params: OrderParams): Promise<CreateOrderResponse> => {
  return fetcher(`${BASE_HOST}/orders/`, { method: "POST", body: params });
};

export const getOrderDetails = (identifier: string): Promise<OrderDetailsResponse> =>
  fetcher<OrderDetailsResponse>(`${BASE_HOST}/orders/info/${identifier}`);
