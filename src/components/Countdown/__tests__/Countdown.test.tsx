import { render, screen, act } from "@testing-library/react";

import Countdown from "../Countdown";

jest.useFakeTimers();

describe("Countdown Component", () => {
  it("should display the initial time and then finish the countdown", () => {
    const onFinishMock = jest.fn();

    render(<Countdown minutes={1} seconds={30} onFinish={onFinishMock} />);

    expect(screen.getByText("01:30")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText("01:29")).toBeInTheDocument();
  });
});
