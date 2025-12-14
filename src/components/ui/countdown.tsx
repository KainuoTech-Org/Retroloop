"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let difference = +targetDate - +now;

      // Demo Mode: If time has passed, automatically reset to 3 days from now
      if (difference <= 0) {
        const futureDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days later
        difference = +futureDate - +now;
      }

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
      <TimeBlock value={timeLeft.days} label={t.countdown.days} />
      <span className="text-2xl md:text-5xl font-oswald font-bold text-retro-black/20 pb-8">:</span>
      <TimeBlock value={timeLeft.hours} label={t.countdown.hours} />
      <span className="text-2xl md:text-5xl font-oswald font-bold text-retro-black/20 pb-8">:</span>
      <TimeBlock value={timeLeft.minutes} label={t.countdown.mins} />
      <span className="text-2xl md:text-5xl font-oswald font-bold text-retro-black/20 pb-8">:</span>
      <TimeBlock value={timeLeft.seconds} label={t.countdown.secs} />
    </div>
  );
}
