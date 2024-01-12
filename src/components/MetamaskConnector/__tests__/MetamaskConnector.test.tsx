import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { requestAccount } from "@/services/metamask";

import MetamaskConnector from "../MetamaskConnector";

jest.mock("@/services/metamask", () => ({
  requestAccount: jest.fn(),
}));

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("MetamaskConnector", () => {
  const address = "testAddress";
  const amount = "10";

  it("renders the component correctly", () => {
    render(<MetamaskConnector address={address} amount={amount} />);
    const metamaskImage = screen.getByAltText("metamask logo");

    expect(metamaskImage).toBeInTheDocument();
  });

  it("calls requestAccount when clicked and handles success", async () => {
    render(<MetamaskConnector address={address} amount={amount} />);
    const metamaskImage = screen.getByAltText("metamask logo");

    (requestAccount as jest.Mock).mockReturnValue("Success Message");

    await userEvent.click(metamaskImage);

    expect(requestAccount).toHaveBeenCalledWith(
      address,
      amount,
      expect.any(Function),
      expect.any(Function),
    );
  });
});
