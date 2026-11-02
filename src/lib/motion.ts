import type { Variants } from "motion/react";

/**
 * Motion tokens. Keep them in step with --ease-brand and the durations in docs/motion-system.md.
 * Interactions use `fast` and `base`; scroll reveals use `slow`; only the hero goes longer.
 */
export const duration = { fast: 0.3, base: 0.6, slow: 0.9 } as const;

type Bezier = [number, number, number, number];
export const ease: Record<"out" | "inOut", Bezier> = {
  out: [0.22, 0.7, 0.2, 1],
  inOut: [0.65, 0, 0.35, 1],
};

/** Travel distance in px for entrance moves. Nothing in the system moves further than `lg`. */
export const distance = { sm: 12, md: 20, lg: 32 } as const;

/** Gap between siblings that animate in sequence, in seconds. */
export const stagger = { tight: 0.055, base: 0.09, loose: 0.14 } as const;

/** Reveals fire once, when the element is 12% inside the viewport. */
export const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

/**
 * `delay` is only written when set: an explicit delay in a child variant would cancel
 * the stagger its parent group applies.
 */
export function fadeUp({
  y = distance.md,
  delay,
}: { y?: number; delay?: number } = {}): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration.slow,
        ease: ease.out,
        ...(delay ? { delay } : {}),
      },
    },
  };
}

export function staggerChildren({
  gap = stagger.base,
  delay = 0,
}: { gap?: number; delay?: number } = {}): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: gap, delayChildren: delay } },
  };
}

/** A word rising out of its own overflow-hidden mask. */
export const riseFromMask: Variants = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 1.05, ease: ease.out } },
};
