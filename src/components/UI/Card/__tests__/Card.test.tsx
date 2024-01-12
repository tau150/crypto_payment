import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Card from "../Card";

describe("Card component", () => {
  const text = "some fake text";

  it("renders properly", () => {
    render(
      <Card>
        <p>{text}</p>{" "}
      </Card>,
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
