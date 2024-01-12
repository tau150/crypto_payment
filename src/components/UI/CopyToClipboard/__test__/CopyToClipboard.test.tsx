import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";
import CopyToClipboard from "../CopyToClipboard";

describe("CopyToClipboard component", () => {
  const value = "fake value";

  it("call navigator copy with the correct value properly", async () => {
    const user = userEvent.setup();

    render(<CopyToClipboard value={value} />);

    const copyIcon = screen.getByTestId("copy-clipboard");

    await user.click(copyIcon);

    const clipboardText = await navigator.clipboard.readText();

    expect(clipboardText).toBe(value);
  });
});
