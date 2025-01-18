import React, { useEffect, useState } from "react";

function CountDown({ duration, startAt, handleFinish }) {
  // Calculate the end time based on startAt and duration
  const timeFromString = (time) => new Date(time).getTime();
  const endTime = timeFromString(startAt) + duration * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));
  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = calculateTimeLeft(endTime);

      if (timeRemaining.total <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        if (handleFinish) handleFinish(); // Call the finish handler
      } else {
        setTimeLeft(timeRemaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, handleFinish]);

  return (
    <div>
      <h1>{formatTime(timeLeft)}</h1>
    </div>
  );
}

// Helper function to calculate the time left
function calculateTimeLeft(endTime) {
  const now = new Date().getTime();
  const difference = endTime - now;

  return {
    total: difference,
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

// Helper function to format time as HH:MM:SS
function formatTime(time) {
  return `${String(time.hours).padStart(2, "0")}:${String(
    time.minutes
  ).padStart(2, "0")}:${String(time.seconds).padStart(2, "0")}`;
}

export default CountDown;
