import { LogoMark } from "@/components/layout/logo";
import type { Dictionary } from "@/content";

function FactList({ facts, hidden }: { facts: Dictionary["facts"]; hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={
        hidden
          ? "flex shrink-0 items-center motion-reduce:hidden"
          : "flex shrink-0 items-center motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3"
      }
    >
      {facts.map((fact) => (
        <li key={fact.title} className="flex items-center whitespace-nowrap">
          <strong className="font-serif text-lg font-normal md:text-[1.375rem]">
            {fact.title}
          </strong>
          <span className="ms-3 text-[0.9375rem] text-muted-foreground max-md:hidden">
            {fact.caption}
          </span>
          <LogoMark className="mx-7 h-4 w-[0.875rem] shrink-0 opacity-60 md:mx-10" />
        </li>
      ))}
    </ul>
  );
}

/** Slow ticker of the trust facts. Static and wrapped when the user prefers reduced motion. */
export function FactsMarquee({ facts }: { facts: Dictionary["facts"] }) {
  return (
    <div className="relative z-10 border-t py-5 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] md:py-7 motion-reduce:[mask-image:none]">
      <div className="group/marquee flex w-max hover:[animation-play-state:paused] motion-safe:animate-marquee motion-safe:rtl:animate-marquee-rtl motion-reduce:w-full motion-reduce:justify-center">
        <FactList facts={facts} />
        <FactList facts={facts} hidden />
      </div>
    </div>
  );
}
