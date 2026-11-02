const letters = "BlancBleu".split("");

/** Marks the visit as seen. Runs before the splash is parsed, so a return visit never shows it. */
const markSeen =
  'try{var d=document.documentElement;if(sessionStorage.getItem("bb-intro")){d.classList.add("no-splash")}else{sessionStorage.setItem("bb-intro","1")}}catch(e){}';

const strokes = [
  { d: "M50 10 89.8 33V79L50 102 10.2 79V33Z", delay: 250 },
  { d: "M10.2 33 50 56 89.8 33", delay: 600 },
  { d: "M50 56V102", delay: 800 },
];

/**
 * About three seconds of intro on the first visit of a session: the logo cube draws itself,
 * the name rises letter by letter, a thin line fills, then the screen lifts away.
 * Pure CSS, so it needs no script to finish and it is skipped for reduced motion.
 * The page's entrance animations wait for it through --intro.
 */
export function IntroSplash() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: markSeen }} />
      <div
        aria-hidden
        className="fixed inset-0 z-[100] grid place-items-center bg-navy text-paper motion-safe:animate-splash-exit motion-reduce:hidden [.no-splash_&]:hidden"
      >
        <div className="flex flex-col items-center gap-9 motion-safe:animate-splash-out">
          <svg viewBox="0 0 100 108" className="h-24 w-[5.5rem] overflow-visible">
            <path
              d="M50 10 89.8 33 50 56 10.2 33Z"
              className="fill-paper/10 motion-safe:animate-fade-in"
              style={{ animationDelay: "1100ms" }}
            />
            {strokes.map(({ d, delay }) => (
              <path
                key={d}
                d={d}
                pathLength={1}
                className="fill-none stroke-sky [stroke-dasharray:1_1] motion-safe:animate-draw"
                strokeWidth={3}
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{ animationDuration: "1.3s", animationDelay: `${delay}ms` }}
              />
            ))}
          </svg>

          <div className="flex flex-col items-center gap-3">
            <p dir="ltr" className="flex text-[2.25rem] leading-none font-medium tracking-tight md:text-5xl">
              {letters.map((letter, i) => (
                <span key={i} className="-my-[0.1em] inline-block overflow-hidden py-[0.1em]">
                  <span
                    className="inline-block motion-safe:animate-rise"
                    style={{ animationDelay: `${850 + i * 60}ms` }}
                  >
                    {letter}
                  </span>
                </span>
              ))}
            </p>
            <p
              dir="ltr"
              className="text-xs tracking-[0.28em] text-paper/60 uppercase motion-safe:animate-fade-up"
              style={{ animationDelay: "1500ms" }}
            >
              Crédit immobilier
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-14 mx-auto h-px w-40 overflow-hidden bg-paper/15">
          <div className="h-full origin-left bg-sky motion-safe:animate-splash-progress" />
        </div>
      </div>
    </>
  );
}
