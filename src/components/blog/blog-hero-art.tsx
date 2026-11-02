import { cn } from "@/lib/utils";

const chipSpots = [
  { place: "start-5 top-[17%] md:top-[20%]", phase: "[animation-delay:-1s]", enter: 1000 },
  { place: "end-5 top-[31%] md:top-[38%]", phase: "[animation-delay:-4s]", enter: 1150 },
  { place: "start-[14%] top-[45%] md:top-[58%]", phase: "[animation-delay:-6.5s]", enter: 1300 },
] as const;

type BlogHeroArtProps = {
  /** Small label at the top of the panel. */
  label: string;
  /** Three short words that drift over the chart, for example article categories. */
  chips: ReadonlyArray<string>;
};

/**
 * The blog's opening visual: a navy panel with fine rings, a rate curve that draws itself and settles
 * on a pulsing point, and a few labels drifting on top. Entrance is CSS, so it waits for the intro on its own.
 */
export function BlogHeroArt({ label, chips }: BlogHeroArtProps) {
  return (
    <div
      aria-hidden
      className="relative isolate -mx-5 h-[21rem] overflow-hidden bg-navy text-paper motion-safe:animate-pop-in [animation-delay:calc(var(--intro)_+_300ms)] sm:-mx-6 md:mx-auto md:aspect-[4/5] md:h-auto md:w-full md:rounded-[2.5rem]"
    >
      <p className="absolute start-6 top-6 flex items-center gap-2.5 text-sm text-sky md:start-8 md:top-8">
        <span className="size-2 rounded-full bg-sky" />
        {label}
      </p>

      <svg
        viewBox="0 0 320 200"
        fill="none"
        className="absolute inset-x-0 bottom-5 w-full text-sky md:bottom-8"
      >
        <defs>
          <linearGradient id="rate-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[50, 100, 150].map((y) => (
          <path key={y} d={`M16 ${y}H304`} className="stroke-paper/10" strokeDasharray="2 7" />
        ))}
        <path
          d="M16 40C72 44 98 92 152 104S246 128 304 152V196H16Z"
          fill="url(#rate-fill)"
          className="motion-safe:animate-fade-in [animation-delay:calc(var(--intro)_+_1400ms)]"
        />
        <path
          d="M16 40C72 44 98 92 152 104S246 128 304 152"
          pathLength={1}
          strokeDasharray={1}
          strokeWidth={2.5}
          strokeLinecap="round"
          stroke="currentColor"
          className="motion-safe:animate-draw [animation-delay:calc(var(--intro)_+_700ms)]"
        />
        <circle
          cx="304"
          cy="152"
          r="6"
          className="fill-sky motion-safe:animate-pop-in [animation-delay:calc(var(--intro)_+_2400ms)]"
        />
        <circle
          cx="304"
          cy="152"
          r="6"
          className="origin-[304px_152px] fill-sky/40 motion-safe:animate-ping [animation-delay:calc(var(--intro)_+_2600ms)]"
        />
      </svg>

      {chips.slice(0, chipSpots.length).map((chip, i) => {
        const spot = chipSpots[i];
        return (
          <div
            key={chip}
            style={{ animationDelay: `calc(var(--intro) + ${spot.enter}ms)` }}
            className={cn("absolute motion-safe:animate-fade-up", spot.place)}
          >
            <span
              className={cn(
                "block rounded-full border border-paper/15 bg-paper/10 px-4 py-2 text-sm backdrop-blur-sm motion-safe:animate-float",
                spot.phase,
              )}
            >
              {chip}
            </span>
          </div>
        );
      })}
    </div>
  );
}
