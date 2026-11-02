"use client";

import { UserRoundCheckIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/** How long each card stays before the row moves on. */
const INTERVAL_MS = 3000;

/**
 * Who a service suits. From the medium breakpoint a grid of cards; on phones a row of cards that
 * snap and swipe. While it is on screen the row moves to the next card every few seconds: the card in
 * view is full size, its neighbours step back, and the dot under the row stretches into a line that
 * fills as the time runs out. Touching the row holds it; reduced motion turns the autoplay off.
 */
export function AudienceCarousel({ items }: { items: ReadonlyArray<string> }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const frame = useRef(0);
  const settle = useRef(0);
  const driving = useRef(false);
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [touching, setTouching] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.6,
    });
    observer.observe(wrap);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
      window.clearTimeout(settle.current);
    };
  }, []);

  const onScroll = () => {
    if (driving.current) return;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const list = listRef.current;
      if (!list) return;
      const box = list.getBoundingClientRect();
      const centre = box.left + box.width / 2;
      let nearest = 0;
      let distance = Infinity;
      Array.from(list.children).forEach((child, i) => {
        const rect = child.getBoundingClientRect();
        const d = Math.abs(rect.left + rect.width / 2 - centre);
        if (d < distance) {
          distance = d;
          nearest = i;
        }
      });
      setIndex(nearest);
    });
  };

  /**
   * Slide to the next card. The dot switches at once, in step with the slide. After the last card the
   * row fades out and comes back at the first, rather than sweeping back the way it came.
   */
  const advance = () => {
    const list = listRef.current;
    const next = (index + 1) % items.length;
    const card = list?.children[next];
    if (!list || !card) return;

    const centreOnCard = (behavior: ScrollBehavior) => {
      const box = list.getBoundingClientRect();
      const rect = card.getBoundingClientRect();
      list.scrollBy({
        left: rect.left + rect.width / 2 - (box.left + box.width / 2),
        behavior,
      });
    };

    driving.current = true;
    window.clearTimeout(settle.current);

    if (next === 0) {
      setFading(true);
      settle.current = window.setTimeout(() => {
        centreOnCard("instant");
        setIndex(0);
        setFading(false);
        settle.current = window.setTimeout(() => {
          driving.current = false;
        }, 100);
      }, 350);
      return;
    }

    settle.current = window.setTimeout(() => {
      driving.current = false;
    }, 800);
    centreOnCard("smooth");
    setIndex(next);
  };

  const hold = () => {
    driving.current = false;
    setTouching(true);
  };

  return (
    <div ref={wrapRef}>
      {/* Phones and small tablets: a row of cards that snaps, swipes and moves on its own. */}
      <div className="md:hidden">
        <ul
          ref={listRef}
          onScroll={onScroll}
          onTouchStart={hold}
          onTouchEnd={() => setTouching(false)}
          onTouchCancel={() => setTouching(false)}
          className={cn(
            "-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-1 transition-opacity duration-300 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 [&::-webkit-scrollbar]:hidden",
            fading && "opacity-0",
          )}
        >
          {items.map((line, i) => (
            <li
              key={line}
              className={cn(
                "basis-[72%] shrink-0 snap-center rounded-[1.5rem] border bg-white p-5 transition-[transform,opacity,border-color] duration-700 ease-brand sm:basis-[46%]",
                index === i ? "border-navy/25" : "scale-[0.94] opacity-60",
              )}
            >
              <span aria-hidden className="mb-3 block font-serif text-sm text-brand/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="block text-[1.0625rem] leading-snug">{line}</span>
            </li>
          ))}
        </ul>

        <div aria-hidden className="flex justify-center gap-1.5 pt-4">
          {items.map((line, i) => (
            <span
              key={line}
              className={cn(
                "relative h-1.5 overflow-hidden rounded-full bg-navy/20 transition-[width] duration-500 ease-brand",
                index === i ? "w-6" : "w-1.5",
              )}
            >
              {index === i ? (
                <span
                  onAnimationEnd={advance}
                  style={{
                    animationDuration: `${INTERVAL_MS}ms`,
                    animationTimingFunction: "linear",
                    animationPlayState: inView && !touching ? "running" : "paused",
                  }}
                  className="absolute inset-0 origin-left rounded-full bg-navy motion-safe:animate-grow-x rtl:origin-right"
                />
              ) : null}
            </span>
          ))}
        </div>
      </div>

      {/* From the medium breakpoint: all of them at once, as cards that rise into place one after another. */}
      <RevealGroup
        as="ul"
        gap={0.12}
        className="hidden grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-3 md:grid lg:gap-4"
      >
        {items.map((line, i) => (
          <RevealItem
            as="li"
            key={line}
            className="group/aud relative isolate flex min-h-[11rem] flex-col justify-between overflow-hidden rounded-[1.75rem] border bg-white p-5 transition-[translate,border-color,box-shadow] duration-500 ease-brand hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_24px_48px_-28px_rgb(10_30_63/0.3)]"
          >
            <span
              aria-hidden
              className="absolute end-4 top-1 -z-10 font-serif text-[4.5rem] leading-none text-transparent [-webkit-text-stroke:1px_rgb(11_74_148/0.22)]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden
              className="grid size-11 place-items-center rounded-full bg-mist text-brand transition-colors duration-500 ease-brand group-hover/aud:bg-navy group-hover/aud:text-paper"
            >
              <UserRoundCheckIcon strokeWidth={1.5} className="size-5" />
            </span>
            <span className="mt-6 block text-base leading-snug lg:text-[1.0625rem]">{line}</span>
            <span
              aria-hidden
              className="absolute inset-x-5 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand transition-transform duration-500 ease-brand group-hover/aud:scale-x-100 rtl:origin-right"
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
