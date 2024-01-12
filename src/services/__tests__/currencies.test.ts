import fetchMock from "jest-fetch-mock";

import { getCurrencies } from "../currencies";
import { currenciesResponseFixture } from "../__fixtures__/currencies";

describe("getCurrencies", () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches currencies successfully", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(currenciesResponseFixture));

    const result = await getCurrencies();

    expect(result).toEqual(currenciesResponseFixture);
  });

  it("handles fetch error", async () => {
    const mockError = new Error("Failed to fetch currencies");

    fetchMock.mockRejectOnce(mockError);

    await expect(getCurrencies()).rejects.toThrow("Failed to fetch currencies");
  });
});
