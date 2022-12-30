import React, { useEffect, useState } from "react";

function ClockTimer() {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  },[]);
  

  return(
    <>
     <span className="text-4xl dark:text-gray-900 italic font-bold md:text-6xl">{ date.toLocaleTimeString(`en-US`)}</span>
    </>
   
  )
}

export default ClockTimer;
