import React, { useEffect, useState } from "react";

const ClockTimer = () => {
  const [date, setDate] = useState();
  function refreshClock() {
    setDate(new Date());
  }

  const DateTimes = () => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  };
  useEffect(() => {
    DateTimes(new Date());
  }, []);

  return (
    <>
      <span className="text-4xl dark:text-gray-500 italic font-bold md:text-3xl">
        {date?.toLocaleTimeString(`en-US`)}
      </span>
    </>
  );
};

export default ClockTimer;
