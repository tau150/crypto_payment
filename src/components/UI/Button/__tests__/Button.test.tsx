import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";
import Button from "../Button";

describe("Button component", () => {
  const text = "fake text";

  it("renders properly", () => {
    render(<Button text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("handles click event", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Button text={text} onClick={handleClick} />);

    await user.click(screen.getByText(text));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables button when isDisabled is true", () => {
    render(<Button isDisabled={true} text={text} />);
    expect(screen.getByText(text)).toBeDisabled();
  });

  it("shows loading spinner when isLoading is true", () => {
    render(<Button isLoading={true} text={text} />);
    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
});
