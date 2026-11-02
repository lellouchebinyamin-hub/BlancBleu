import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { CtaButtons } from "@/components/sections/cta-buttons";
import { Eyebrow } from "@/components/sections/eyebrow";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";

type ProcessProps = {
  locale: Locale;
  /** `cta` is left out where the page already is the way in, as on the contact page. */
  copy: Omit<Dictionary["process"], "cta"> & Partial<Pick<Dictionary["process"], "cta">>;
};

/** Section 5: the steps from the first call to the signature, and the second call to action. */
export function Process({ locale, copy }: ProcessProps) {
  return (
    <section aria-labelledby="process-title" className="py-3 md:px-5 md:py-5">
      {/* Edge to edge on phones, like the dark bands. */}
      <div className="mx-auto max-w-[90rem] bg-mist md:rounded-[3rem]">
        <div className="mx-auto max-w-[75rem] px-5 py-16 sm:px-6 md:py-32">
          <header className="mx-auto flex max-w-[44rem] flex-col items-center text-center">
            <Eyebrow className="mb-7">{copy.eyebrow}</Eyebrow>

            <TextReveal
              id="process-title"
              className="font-serif text-[clamp(2.25rem,1.2rem+4vw,4.25rem)] leading-[1.06] font-normal text-balance"
              segments={[{ text: copy.title.lead }, { text: copy.title.accent, accent: true }]}
            />

            <Reveal
              as="p"
              delay={0.2}
              className="mt-7 max-w-[32rem] text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg"
            >
              {copy.intro}
            </Reveal>
          </header>

          <ProcessTimeline steps={copy.steps} className="mt-12 md:mt-20" />

          {copy.cta ? (
            <Reveal className="mt-12 flex justify-center md:mt-24">
              <CtaButtons locale={locale} primary={copy.cta.primary} secondary={copy.cta.secondary} />
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
