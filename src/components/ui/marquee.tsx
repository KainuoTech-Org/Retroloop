"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: number;
}

export function Marquee({
  className,
  children,
  reverse = false,
  pauseOnHover = false,
  duration = 30,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden [--gap:2rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        aria-hidden="true"
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
