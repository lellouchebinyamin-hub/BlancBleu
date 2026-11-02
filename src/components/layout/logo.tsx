import Image from "next/image";

import { cn } from "@/lib/utils";

type Tone = "default" | "inverse";

/**
 * The BlancBleu cube mark, drawn as a vector. Used small, for example between the facts in the ticker.
 * `inverse` is for dark backgrounds.
 */
export function LogoMark({ className, tone = "default" }: { className?: string; tone?: Tone }) {
  const inverse = tone === "inverse";
  return (
    <svg viewBox="0 0 100 108" aria-hidden="true" className={className}>
      <path
        d="M10.2 33 50 56 89.8 33 50 10Z M10.2 33V79L50 102 89.8 79V33"
        className={inverse ? "fill-paper/10" : "fill-white"}
      />
      <path
        d="M10.2 33 50 10 89.8 33M10.2 33 50 56 89.8 33M50 56V102"
        className={cn("fill-none", inverse ? "stroke-sky" : "stroke-brand")}
        strokeWidth="9"
        strokeLinejoin="miter"
      />
      <path
        d="M10.2 33V79L50 102 89.8 79V33"
        className={cn("fill-none", inverse ? "stroke-sky" : "stroke-brand")}
        strokeWidth="1.4"
      />
    </svg>
  );
}

/**
 * The full logo: cube, name and "Crédit immobilier", from the supplied artwork (public/brand).
 * Its colours are fixed, so on a dark background it sits on a light pill. Size it with a height.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="BlancBleu"
      width={640}
      height={215}
      unoptimized
      priority
      className={cn("h-11 w-auto shrink-0 lg:h-[3.25rem]", className)}
    />
  );
}
