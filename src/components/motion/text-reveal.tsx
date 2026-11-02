"use client";

import { motion } from "motion/react";
import { Fragment } from "react";

import { riseFromMask, stagger, staggerChildren, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

type Segment = {
  text: string;
  /** Sets the segment in the accent colour (`accentClassName`). */
  accent?: boolean;
  /** Any other per-segment styling, for example a dimmed first sentence. */
  className?: string;
};

type TextRevealProps = {
  segments: Segment[];
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
  /** Seconds before the first word starts, once the heading is in view. */
  delay?: number;
  /** Colour for accented segments. Use a light colour on dark backgrounds. */
  accentClassName?: string;
  className?: string;
};

/**
 * Section headline whose words rise out of a mask when it scrolls into view.
 * The scroll-triggered counterpart of the hero's load animation (SplitWords).
 * Screen readers get the plain sentence.
 */
export function TextReveal({
  segments,
  as = "h2",
  id,
  delay = 0,
  accentClassName = "text-brand",
  className,
}: TextRevealProps) {
  const Component = tags[as];
  const words = segments.flatMap((segment) =>
    segment.text
      .trim()
      .split(/\s+/)
      .map((word) => ({
        word,
        className: cn(segment.accent && accentClassName, segment.className),
      })),
  );
  const sentence = segments.map((s) => s.text.trim()).join(" ");

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerChildren({ gap: stagger.tight, delay })}
    >
      <span className="sr-only">{sentence}</span>
      {words.map(({ word, className: wordClass }, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            aria-hidden
            className="-my-[0.14em] inline-block overflow-hidden py-[0.14em] align-top"
          >
            <motion.span className={cn("inline-block", wordClass)} variants={riseFromMask}>
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Component>
  );
}
