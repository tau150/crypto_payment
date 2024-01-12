import { useEffect, useState } from "react";

interface Props {
  minutes: number;
  seconds: number;
  onFinish?: VoidFunction;
}

const Countdown = ({ minutes, seconds, onFinish }: Props) => {
  const [time, setTime] = useState({
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
        onFinish?.();
        clearInterval(timer);
      } else {
        setTime((prevTime) => {
          if (prevTime.seconds === 0) {
            return {
              minutes: prevTime.minutes - 1,
              seconds: 59,
            };
          } else {
            return {
              minutes: prevTime.minutes,
              seconds: prevTime.seconds - 1,
            };
          }
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onFinish, time]);

  return (
    <div>
      <p>{`${time.minutes.toString().padStart(2, "0")}:${time.seconds
        .toString()
        .padStart(2, "0")}`}</p>
    </div>
  );
};

export default Countdown;
