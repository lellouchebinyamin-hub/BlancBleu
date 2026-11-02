"use client";

import { useReducedMotion } from "motion/react";

import { viewport } from "@/lib/motion";

/**
 * Props that make a Motion element play its "visible" variant once it scrolls into view.
 * With reduced motion it starts visible, so nothing is hidden or animated.
 */
export function useRevealProps() {
  const reduceMotion = useReducedMotion();
  return {
    initial: reduceMotion ? "visible" : "hidden",
    whileInView: "visible",
    viewport,
  } as const;
}
