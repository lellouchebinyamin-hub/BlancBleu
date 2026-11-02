"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { Dictionary } from "@/content";
import { cn } from "@/lib/utils";

type Step = Dictionary["process"]["steps"][number];

/** A numbered node that turns navy once the progress line has reached it. */
function Node({
  index,
  count,
  progress,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const threshold = index / (count - 1);
  const reached = useTransform(progress, [threshold - 0.08, threshold], [0, 1], { clamp: true });
  const background = useTransform(reached, [0, 1], ["#ffffff", "#0a1e3f"]);
  const color = useTransform(reached, [0, 1], ["#0a1e3f", "#f2f6fb"]);
  const borderColor = useTransform(reached, [0, 1], ["#d3deec", "#0a1e3f"]);

  return (
    <motion.span
      aria-hidden
      style={{ background, color, borderColor }}
      className="absolute start-0 top-0 z-10 grid size-12 place-items-center rounded-full border font-serif text-lg"
    >
      {String(index + 1).padStart(2, "0")}
    </motion.span>
  );
}

/** The vertical piece of line between two nodes, shown below the desktop breakpoint. */
function Connector({
  index,
  count,
  progress,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const from = index / (count - 1);
  const to = (index + 1) / (count - 1);
  const scaleY = useTransform(progress, [from, to], [0, 1], { clamp: true });

  return (
    <span
      aria-hidden
      className="absolute start-6 top-12 bottom-0 w-px bg-navy/15 lg:hidden"
    >
      <motion.span style={{ scaleY }} className="block size-full origin-top bg-navy" />
    </span>
  );
}

/**
 * The steps (three or four) on a line that fills as you scroll. Horizontal from the desktop breakpoint,
 * vertical below it. With reduced motion everything is shown as already reached.
 */
export function ProcessTimeline({
  steps,
  className,
}: {
  steps: ReadonlyArray<Step>;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 72%"] });
  const settled = useMotionValue(1);
  const progress = reduceMotion ? settled : scrollYProgress;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn(
          "absolute start-6 top-6 hidden h-px bg-navy/15 lg:block",
          steps.length === 3 ? "end-[calc(33.333%-1.5rem)]" : "end-[calc(25%-1.5rem)]",
        )}
      >
        <motion.div
          style={{ scaleX: progress }}
          className="size-full origin-left bg-navy rtl:origin-right"
        />
      </div>

      <RevealGroup
        as="ol"
        gap={0.14}
        className={cn("grid", steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4")}
      >
        {steps.map((step, index) => (
          <RevealItem
            as="li"
            key={step.title}
            className="relative pb-12 last:pb-0 lg:pe-8 lg:pb-0"
          >
            <Node index={index} count={steps.length} progress={progress} />
            {index < steps.length - 1 ? (
              <Connector index={index} count={steps.length} progress={progress} />
            ) : null}

            <div className="ps-16 lg:ps-0 lg:pt-[4.75rem]">
              <h3 className="pt-2 font-serif text-[1.5rem] leading-snug font-normal lg:pt-0 md:text-[1.625rem]">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
              {step.tag ? (
                <span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-[0.8125rem] font-medium text-navy">
                  {step.tag}
                </span>
              ) : null}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
