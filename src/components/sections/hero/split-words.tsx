import { Fragment } from "react";

import { cn } from "@/lib/utils";

type Segment = { text: string; accent?: boolean };

type SplitWordsProps = {
  segments: Segment[];
  /** Delay before the first word starts rising, in ms. */
  delay?: number;
  /** Extra delay between consecutive words, in ms. */
  step?: number;
};

/**
 * Renders a headline word by word, each word rising out of its own mask.
 * Pure CSS (see --animate-rise), so it plays at first paint without waiting for hydration.
 * Screen readers get the plain sentence.
 */
export function SplitWords({ segments, delay = 260, step = 55 }: SplitWordsProps) {
  const words = segments.flatMap((segment) =>
    segment.text
      .trim()
      .split(/\s+/)
      .map((word) => ({ word, accent: Boolean(segment.accent) })),
  );
  const sentence = segments.map((s) => s.text.trim()).join(" ");

  return (
    <>
      <span className="sr-only">{sentence}</span>
      {words.map(({ word, accent }, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            aria-hidden
            className="-my-[0.14em] inline-block overflow-hidden py-[0.14em] align-top"
          >
            <span
              className={cn(
                "inline-block motion-safe:animate-rise",
                accent && "text-brand",
              )}
              style={{ animationDelay: `calc(var(--intro) + ${delay + i * step}ms)` }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
