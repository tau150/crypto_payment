import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Label from "../Label";

describe("Label component", () => {
  const text = "some fake text";
  const mockedOnClick = jest.fn();

  it("renders properly", () => {
    render(<Label isActive text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("calls on click action", async () => {
    const user = userEvent.setup();

    render(<Label isActive text={text} onClick={mockedOnClick} />);

    const element = screen.getByText(text);

    await user.click(element);

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
