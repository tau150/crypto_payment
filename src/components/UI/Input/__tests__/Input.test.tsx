import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "../Input";

describe("Input Component", () => {
  const label = "fake label";
  const name = "fake name";
  const value = "Test Value";

  it("renders properly", () => {
    render(<Input label={label} name={name} />);
    expect(screen.getByText("fake label")).toBeInTheDocument();
  });

  it("handle input change properly", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input label={label} name={name} onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox", { name: label });

    await user.type(inputElement, "122");

    expect(handleChange).toHaveBeenCalled();
    expect(inputElement).toHaveValue("122");
  });

  it("render icon when it is received", () => {
    const icon = <span data-testid="input-icon" />;

    render(<Input icon={icon} label={label} name={name} />);

    expect(screen.getByTestId("input-icon")).toBeInTheDocument();
  });

  it("show a value when it is received ", () => {
    render(<Input label={label} name={name} value={value} />);

    const inputElement = screen.getByRole("textbox", { name: label });

    expect(inputElement).toHaveValue(value);
  });
});
