import React from "react";
import { render } from "@testing-library/react";

import ErrorSection from "../ErrorSection";

test("renders ErrorSection correctly", () => {
  const { container } = render(<ErrorSection />);

  expect(container.firstChild).toMatchSnapshot();
});
