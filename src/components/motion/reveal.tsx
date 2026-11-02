"use client";

import { motion } from "motion/react";

import { fadeUp, stagger, staggerChildren, viewport } from "@/lib/motion";

const tags = {
  div: motion.div,
  p: motion.p,
  section: motion.section,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
} as const;

type RevealProps = {
  as?: "div" | "p" | "section" | "li";
  /** Travel distance in px. */
  y?: number;
  /** Seconds to wait once the element is in view. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/** Fades and lifts a single block into place when it scrolls into view. Plays once. */
export function Reveal({ as = "div", y, delay, className, children }: RevealProps) {
  const Component = tags[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp({ y, delay })}
    >
      {children}
    </Component>
  );
}

type RevealGroupProps = {
  as?: "div" | "ul" | "ol";
  /** Seconds between siblings. */
  gap?: number;
  /** Seconds before the first child starts. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/** Reveals its `RevealItem` children one after another when the group scrolls into view. */
export function RevealGroup({
  as = "div",
  gap = stagger.base,
  delay,
  className,
  children,
}: RevealGroupProps) {
  const Component = tags[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerChildren({ gap, delay })}
    >
      {children}
    </Component>
  );
}

type RevealItemProps = {
  as?: "div" | "p" | "li";
  y?: number;
  className?: string;
  children: React.ReactNode;
};

export function RevealItem({ as = "div", y, className, children }: RevealItemProps) {
  const Component = tags[as];
  return (
    <Component className={className} variants={fadeUp({ y })}>
      {children}
    </Component>
  );
}
