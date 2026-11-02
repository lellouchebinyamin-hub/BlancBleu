import Image from "next/image";

/** Marks the visit as seen. Runs before the splash is parsed, so a return visit never shows it. */
const markSeen =
  'try{var d=document.documentElement;if(sessionStorage.getItem("bb-intro")){d.classList.add("no-splash")}else{sessionStorage.setItem("bb-intro","1")}}catch(e){}';

/**
 * About three seconds of intro on the first visit of a session: the logo is revealed from the cube
 * outward, a thin line fills beneath it, then the screen lifts away.
 * Pure CSS, so it needs no script to finish and it is skipped for reduced motion.
 * The page's entrance animations wait for it through --intro.
 */
export function IntroSplash() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: markSeen }} />
      <div
        aria-hidden
        data-splash
        className="fixed inset-0 z-[100] grid place-items-center bg-paper text-navy motion-safe:animate-splash-exit motion-reduce:hidden [.no-splash_&]:hidden"
      >
        <div className="motion-safe:animate-splash-out">
          <Image
            src="/brand/logo.png"
            alt=""
            width={640}
            height={215}
            unoptimized
            priority
            className="h-auto w-[min(78vw,26rem)] motion-safe:animate-logo-reveal"
          />
        </div>

        <div className="absolute inset-x-0 bottom-14 mx-auto h-px w-40 overflow-hidden bg-navy/15">
          <div className="h-full origin-left bg-brand motion-safe:animate-splash-progress" />
        </div>
      </div>
    </>
  );
}
