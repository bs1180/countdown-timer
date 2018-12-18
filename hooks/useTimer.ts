import { useEffect, useState } from "react";

/**
 * useTimer creates a React Hook, with countdown to the given time
 * @param endTime Function that returns the end time
 * @param startTime Function that returns the start time
 */
const useTimer = (endTime: () => number, startTime = () => Date.now()) => {
  const tick = () => endTime() - startTime();

  const [timeDiff, setTimeDiff] = useState(tick());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeDiff(tick());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default useTimer;
