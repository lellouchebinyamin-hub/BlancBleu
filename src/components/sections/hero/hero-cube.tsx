"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

const drawn = "fill-none [stroke-dasharray:1_1] motion-safe:animate-draw";
const mainStroke = `${drawn} stroke-brand/65 stroke-[8] md:stroke-[3.4]`;
const ghostStroke = `${drawn} stroke-navy/15 stroke-[6] md:stroke-[2.6]`;

/**
 * The logo cube as an isometric line drawing, with a fainter copy offset behind it.
 * The strokes draw in on load. After that it floats and sways on its own, and the two
 * layers drift at different speeds with the pointer and the scroll position.
 */
export function HeroCube({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const bob = useMotionValue(0);
  const swing = useMotionValue(0);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 45, damping: 16, mass: 0.9 });
  const smoothY = useSpring(pointerY, { stiffness: 45, damping: 16, mass: 0.9 });

  const mainX = useTransform(smoothX, (v) => v * -14);
  const mainY = useTransform(
    [bob, smoothY, scrollY],
    ([b, py, sc]: number[]) => b + py * -10 - sc * 0.1,
  );
  const mainRotate = swing;

  const ghostX = useTransform(smoothX, (v) => v * 24);
  const ghostY = useTransform(
    [bob, smoothY, scrollY],
    ([b, py, sc]: number[]) => b * -0.7 + py * 16 - sc * 0.18,
  );
  const ghostRotate = useTransform(swing, (s) => s * -1.6);

  useEffect(() => {
    if (reduceMotion) return;

    const controls = [
      animate(bob, [0, -12, 0, 12, 0], { duration: 8, ease: "easeInOut", repeat: Infinity }),
      animate(swing, [0, 2.5, 0, -2.5, 0], {
        duration: 22,
        ease: "easeInOut",
        repeat: Infinity,
      }),
    ];

    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e: PointerEvent) => {
      pointerX.set((e.clientX / window.innerWidth) * 2 - 1);
      pointerY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      controls.forEach((c) => c.stop());
      if (fine) window.removeEventListener("pointermove", onMove);
    };
  }, [reduceMotion, bob, swing, pointerX, pointerY]);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative grid h-[calc(var(--s)*1.9)] w-full place-items-center [--s:6.5rem] max-md:mb-7 md:[--s:clamp(11rem,19vw,17rem)]",
        className,
      )}
    >
      <div className="grid size-full place-items-center motion-safe:animate-pop-in [animation-delay:calc(var(--intro)_+_300ms)]">
        <div className="relative aspect-square w-[calc(var(--s)*1.9)] max-md:-translate-y-4">
          <motion.div
            className="absolute inset-0"
            style={reduceMotion ? undefined : { x: ghostX, y: ghostY, rotate: ghostRotate }}
          >
            <svg
              viewBox="0 0 1000 1000"
              className="size-full translate-x-[4.6%] translate-y-[5.2%] overflow-visible rtl:-translate-x-[4.6%]"
            >
              <path
                pathLength={1}
                d="M500 100 864 310V730L500 940 136 730V310Z"
                className={ghostStroke}
                style={{ animationDelay: "240ms" }}
              />
              <path
                pathLength={1}
                d="M136 310 500 520 864 310M500 520V940"
                className={ghostStroke}
                style={{ animationDelay: "390ms" }}
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute inset-0"
            style={reduceMotion ? undefined : { x: mainX, y: mainY, rotate: mainRotate }}
          >
            <svg viewBox="0 0 1000 1000" className="size-full overflow-visible">
              <path
                d="M500 100 864 310 500 520 136 310Z"
                className="fill-mist motion-safe:animate-fade-in [animation-delay:1100ms]"
              />
              <path
                pathLength={1}
                d="M500 100 864 310V730L500 940 136 730V310Z"
                className={mainStroke}
                style={{ animationDelay: "540ms" }}
              />
              <path
                pathLength={1}
                d="M136 310 500 520 864 310"
                className={mainStroke}
                style={{ animationDelay: "690ms" }}
              />
              <path
                pathLength={1}
                d="M500 520V940"
                className={mainStroke}
                style={{ animationDelay: "840ms" }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
