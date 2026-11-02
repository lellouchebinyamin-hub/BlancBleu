"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/** A thin line across the top of the page that fills as the article is read. Decorative. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: reduceMotion ? scrollYProgress : smooth }}
      className="fixed inset-x-0 top-0 z-[45] h-[3px] origin-left bg-brand rtl:origin-right"
    />
  );
}
