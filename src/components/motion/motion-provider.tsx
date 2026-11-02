"use client";

import { MotionConfig } from "motion/react";

/**
 * Applies the user's reduced-motion setting to every Motion component below it:
 * transform and layout animations are skipped, opacity and colour changes stay.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
