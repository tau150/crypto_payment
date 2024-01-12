export interface OrderParams {
  expected_output_amount: number;
  input_currency: string;
  notes?: string;
}

export interface OrderDetails {
  address: string;
  balance_based: string;
  confirmed_amount: number;
  created_at: string;
  crypto_amount: number;
  currency_id: string;
  edited_at: string;
  expired_time: string;
  fiat: string;
  fiat_amount: number;
  good_fee: false;
  identifier: string;
  internal_data: null;
  language: string;
  merchant_device_id: 1;
  notes: string | null;
  percentage: number;
  rbf: false;
  received_amount: number;
  reference: null;
  safe: false;
  status: string;
  tag_memo: string;
  transactions: string[];
  unconfirmed_amount: number;
  url_ko: string;
  url_ok: string;
  url_standby: string;
}
export type OrderDetailsResponse = OrderDetails[];

export interface CreateOrderResponse {
  payment_uri: string;
  identifier: string;
  web_url: string;
  address: string;
  tag_memo: string;
  input_currency: string;
  expected_input_amount: number;
  rate: number;
  notes: string | null;
  reference: string | null;
  fiat: string;
  language: string;
}
