import React from "react";
import { render } from "@testing-library/react";

import Footer from "../Footer";

test("renders Footer correctly", () => {
  const { container } = render(<Footer />);

  expect(container.firstChild).toMatchSnapshot();
});
