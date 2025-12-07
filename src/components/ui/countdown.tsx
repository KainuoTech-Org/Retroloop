"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <motion.div
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className="text-4xl md:text-7xl font-oswald font-bold text-retro-red tracking-tighter"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <span className="text-xs md:text-sm font-sans uppercase tracking-widest mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-8">
      <TimeBlock value={timeLeft.days} label="Days" />
      <span className="text-2xl md:text-5xl font-oswald font-bold text-retro-black/20 pb-8">:</span>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <span className="text-2xl md:text-5xl font-oswald font-bold text-retro-black/20 pb-8">:</span>
      <TimeBlock value={timeLeft.minutes} label="Mins" />
      <span className="text-2xl md:text-5xl font-oswald font-bold text-retro-black/20 pb-8">:</span>
      <TimeBlock value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
