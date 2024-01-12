import React from "react";
import { render } from "@testing-library/react";

import LoadingSection from "../LoadingSection";

test("renders LoadingSection correctly", () => {
  const { container } = render(<LoadingSection />);

  expect(container.firstChild).toMatchSnapshot();
});
