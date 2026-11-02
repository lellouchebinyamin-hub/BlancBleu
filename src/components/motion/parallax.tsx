"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ParallaxProps = {
  /** 0.1 is a drift of 10px either side of centre; keep it at or below 0.4. */
  speed?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Moves its content slightly slower than the page while it crosses the viewport.
 * Reserved for one visual per screen (the cube, a photograph), never for text.
 */
export function Parallax({ speed = 0.2, className, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = Math.min(speed, 0.4) * 100;
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduceMotion ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}
