import fetchMock from "jest-fetch-mock";

import { BASE_HOST } from "../constants";
import { createOrder, getOrderDetails } from "../orders";
import { OrderParams } from "../types/order.types";
import { orderDetailsResponseFixture, createOrderResponseFixture } from "../__fixtures__/orders";

const originalEnv = process.env;
const DEVICE_ID = "1234";

beforeAll(() => {
  fetchMock.enableMocks();
  process.env = {
    ...originalEnv,
    NEXT_PUBLIC_DEVICE_ID: DEVICE_ID,
  };
});

afterEach(() => {
  fetchMock.resetMocks();
});

describe("Order API functions", () => {
  const amount = 100;
  const currency = "XRP";
  const notes = "test note";

  it("creates an order successfully", async () => {
    const mockOrderParams: OrderParams = {
      expected_output_amount: amount,
      input_currency: currency,
      notes: notes,
    };

    fetchMock.mockResponseOnce(JSON.stringify(createOrderResponseFixture));

    const result = await createOrder(mockOrderParams);

    expect(result).toEqual(createOrderResponseFixture);
    expect(fetchMock).toHaveBeenCalledWith(`${BASE_HOST}/orders/`, {
      method: "POST",
      body: JSON.stringify(mockOrderParams),
      headers: { "Content-Type": "application/json", "X-Device-Id": DEVICE_ID },
    });
  });

  it("fetches order details successfully", async () => {
    const identifier = "123";

    fetchMock.mockResponseOnce(JSON.stringify(orderDetailsResponseFixture));

    const result = await getOrderDetails(identifier);

    expect(result).toEqual(orderDetailsResponseFixture);
  });
});
