"use client";

import { motion, type Variants } from "motion/react";

import { useRevealProps } from "@/components/motion/use-reveal-props";
import { ease, staggerChildren } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Three small illustrations, one per point of the "why not the bank" section.
 * They are diagrams, not data: no numbers, nothing that reads as a claim.
 */

const grow: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.1, ease: ease.out } },
};

const draw: Variants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1.8, ease: ease.out, delay: 0.3 } },
};

const appear: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay: 1.9 } },
};

const offers = [0.94, 0.8, 0.66, 0.52];

/** Several offers side by side; the best one is picked out. */
export function CompareVisual() {
  const reveal = useRevealProps();
  return (
    <motion.div
      aria-hidden
      {...reveal}
      variants={staggerChildren({ gap: 0.14, delay: 0.25 })}
      className="flex w-full flex-col gap-3.5"
    >
      {offers.map((width, i) => (
        <div key={width} className="h-3 rounded-full bg-paper/10">
          <motion.div
            variants={grow}
            style={{ width: `${width * 100}%` }}
            className={cn(
              "h-full origin-left rounded-full rtl:origin-right",
              i === offers.length - 1 ? "bg-sky" : "bg-paper/35",
            )}
          />
        </div>
      ))}
    </motion.div>
  );
}

const segments = [
  { basis: 46, className: "bg-sky" },
  { basis: 34, className: "bg-paper/60" },
  { basis: 20, className: "bg-paper/25" },
];

/** A mortgage split across three tracks. */
export function MixVisual({ labels }: { labels: readonly [string, string, string] }) {
  const reveal = useRevealProps();
  return (
    <motion.div
      aria-hidden
      {...reveal}
      variants={staggerChildren({ gap: 0.16, delay: 0.25 })}
      className="w-full"
    >
      <div className="flex gap-1.5">
        {segments.map((segment) => (
          <div key={segment.basis} style={{ flexBasis: `${segment.basis}%` }}>
            <motion.div
              variants={grow}
              className={cn("h-14 origin-left rounded-2xl rtl:origin-right", segment.className)}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-1.5 text-[0.8125rem] text-paper/60">
        {labels.map((label, i) => (
          <span key={label} style={{ flexBasis: `${segments[i].basis}%` }} className="truncate">
            {label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/** A repayment curve that rises and falls, with a dashed line marking what you can carry. */
export function RiskVisual() {
  const reveal = useRevealProps();
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 300 120"
      {...reveal}
      className="h-auto w-full overflow-visible"
    >
      <line
        x1="0"
        y1="76"
        x2="300"
        y2="76"
        strokeDasharray="4 6"
        className="stroke-paper/25"
      />
      <motion.path
        variants={draw}
        d="M0 92 C 40 90 62 58 104 62 S 168 98 206 54 S 262 22 300 30"
        className="fill-none stroke-sky"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <motion.circle variants={appear} cx="300" cy="30" r="5" className="fill-sky" />
    </motion.svg>
  );
}
