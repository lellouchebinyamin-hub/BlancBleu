"use client";

import { motion, type Variants } from "motion/react";

import { useRevealProps } from "@/components/motion/use-reveal-props";
import { ease, staggerChildren } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Building blocks for the line illustrations (services, articles).
 * Strokes draw in when the illustration scrolls into view, then the filled accents fade up.
 * They are diagrams, not data.
 */

const draw: Variants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1.3, ease: ease.out } },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, delay: 0.8 } },
};

const strokeProps = {
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function Line({ d, className }: { d: string; className?: string }) {
  return (
    <motion.path
      variants={draw}
      d={d}
      className={cn("fill-none stroke-brand", className)}
      {...strokeProps}
    />
  );
}

export function Box({
  x,
  y,
  width,
  height,
  rx,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
}) {
  return (
    <motion.rect
      variants={draw}
      x={x}
      y={y}
      width={width}
      height={height}
      rx={rx}
      className="fill-none stroke-brand"
      {...strokeProps}
    />
  );
}

export function Fill({ d, className }: { d: string; className: string }) {
  return <motion.path variants={fade} d={d} className={className} />;
}

/** A 200 by 120 drawing board that starts drawing once it is in view. */
export function Canvas({ children }: { children: React.ReactNode }) {
  const reveal = useRevealProps();
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 120"
      {...reveal}
      variants={staggerChildren({ gap: 0.1, delay: 0.15 })}
      className="h-full w-auto overflow-visible"
    >
      {children}
    </motion.svg>
  );
}
