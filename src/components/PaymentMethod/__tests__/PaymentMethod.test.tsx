import React from "react";
import { render, screen } from "@testing-library/react";

import { PAYMENT_METHOD } from "@/domain/Payment";
import { CURRENCY_CODE } from "@/domain/Currency";

import PaymentMethod from "../PaymentMethod";

describe("PaymentMethod component", () => {
  const amount = 100;
  const symbol = CURRENCY_CODE.BTC;
  const address = "2asd2321sdas34";

  it("renders properly when payment method is QR", () => {
    render(
      <PaymentMethod
        address={address}
        amount={amount}
        method={PAYMENT_METHOD.QR}
        symbol={symbol}
      />,
    );

    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(`${amount} ${symbol}`)).toBeInTheDocument();
    expect(screen.getByTestId("qr-payment-container")).toBeInTheDocument();
  });

  it("renders properly when payment method is WEB3", () => {
    render(
      <PaymentMethod
        address={address}
        amount={amount}
        method={PAYMENT_METHOD.WEB3}
        symbol={symbol}
      />,
    );

    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(`${amount} ${symbol}`)).toBeInTheDocument();
    expect(screen.queryByTestId("qr-payment-container")).not.toBeInTheDocument();
  });

  it("renders properly when tag is present", () => {
    const tag = "12345";

    render(
      <PaymentMethod
        address={address}
        amount={amount}
        method={PAYMENT_METHOD.WEB3}
        symbol={symbol}
        tag={tag}
      />,
    );

    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(`${amount} ${symbol}`)).toBeInTheDocument();
    expect(screen.getByText(`Etiqueta de destino: ${tag}`)).toBeInTheDocument();
  });
});
