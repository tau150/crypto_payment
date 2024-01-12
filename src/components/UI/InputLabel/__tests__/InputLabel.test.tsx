import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import InputLabel from "../InputLabel";

describe("InputLabel component", () => {
  const text = "some fake text";
  const name = "fake name";

  it("renders properly", () => {
    render(<InputLabel name={name} text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
