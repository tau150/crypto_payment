import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PAYMENT_PROCESS_STATUS } from "@/domain/Payment";

import StatusCard from "../StatusCard";

const mockedPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: mockedPush,
    };
  },
}));

describe("StatusCard component", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  const title = "fake title";

  it("renders properly when status is success", () => {
    render(<StatusCard status={PAYMENT_PROCESS_STATUS.SUCCESS} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId("success-icon")).toBeInTheDocument();
  });

  it("renders properly status when is cancel", () => {
    render(<StatusCard status={PAYMENT_PROCESS_STATUS.CANCEL} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId("cancel-icon")).toBeInTheDocument();
  });

  it("calls the correct action when button is clicked", async () => {
    const user = userEvent.setup();

    render(<StatusCard status={PAYMENT_PROCESS_STATUS.CANCEL} title={title} />);

    const button = screen.getByRole("button", { name: "Crear nuevo pago" });

    act(async () => {
      await user.click(button);
      expect(mockedPush).toHaveBeenCalledWith("/");
    });
  });
});
