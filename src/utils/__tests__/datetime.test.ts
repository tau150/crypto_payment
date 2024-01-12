import { formatDateTime, getExpireTime } from "../datetimes";

describe("formatDateTime", () => {
  const mockDate = "2024-01-12T10:10:40.731832+01:00";

  it("formats date and time correctly", () => {
    const formattedDateTime = formatDateTime(mockDate);

    expect(formattedDateTime).toEqual("12/01/2024 10:10");
  });

  it("formats date and time correctly with a different locale", () => {
    const formattedDateTime = formatDateTime(mockDate, "en-US");

    expect(formattedDateTime).toEqual("01/12/2024 10:10 AM");
  });
});
