"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ end, suffix = "", className, duration = 2 }: AnimatedCounterProps) {
  const { count, ref } = useCountUp(end, duration);

  // Format number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <span ref={ref} className={cn("inline-block tabular-nums", className)}>
      {formattedCount}{suffix}
    </span>
  );
}
