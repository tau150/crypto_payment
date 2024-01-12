import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "../Modal";

describe("Modal component", () => {
  const root = document.createElement("div");
  const content = "some test text";

  root.setAttribute("id", "modal-root");

  beforeEach(() => {
    document.body.appendChild(root);
  });

  it("renders correctly when open and closes when close button is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();

    render(
      <Modal handleClose={handleClose} isOpen={true}>
        <p>{content}</p>
      </Modal>,
      { container: root },
    );

    expect(screen.getByText(content)).toBeInTheDocument();

    const closeButton = screen.getByTestId("close-icon");

    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalled();
  });

  it("does not render when not open", () => {
    render(
      <Modal isOpen={false}>
        <div>Modal Content</div>
      </Modal>,
    );

    expect(screen.queryByText(content)).toBeNull();
  });
});
