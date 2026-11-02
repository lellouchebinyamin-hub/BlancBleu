"use client";

import { MotionConfig } from "motion/react";
import { useSyncExternalStore } from "react";

import { getServerSnapshot, getSnapshot, subscribe } from "@/lib/a11y";

/**
 * Applies the user's reduced-motion setting to every Motion component below it:
 * transform and layout animations are skipped, opacity and colour changes stay.
 * The accessibility menu's "stop animations" switch does the same, whatever the system setting.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const { still } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <MotionConfig reducedMotion={still ? "always" : "user"}>{children}</MotionConfig>;
}
