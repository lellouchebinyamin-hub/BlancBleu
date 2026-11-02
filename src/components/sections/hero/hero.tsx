import { CtaButtons } from "@/components/sections/cta-buttons";
import { FactsMarquee } from "@/components/sections/hero/facts-marquee";
import { HeroCube } from "@/components/sections/hero/hero-cube";
import { SplitWords } from "@/components/sections/hero/split-words";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type HeroProps = {
  locale: Locale;
  copy: Dictionary["hero"];
  facts: Dictionary["facts"];
};

export function Hero({ locale, copy, facts }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col overflow-hidden pt-(--header-h)"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-40 end-[-10%] size-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(226,235,247,0.9),transparent)]" />
      </div>

      <div className="flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-[75rem] items-center px-5 pt-2 pb-8 sm:px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-8 md:py-20">
          <HeroCube className="md:order-2" />

          <div className="md:order-1">
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border bg-white/70 py-1.5 ps-3.5 pe-4 text-sm text-muted-foreground backdrop-blur-sm motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_150ms)]">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-brand/60 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              {copy.eyebrow}
            </p>

            <h1
              id="hero-title"
              className={cn(
                "mb-6 font-serif font-normal text-balance md:mb-7",
                locale === "fr"
                  ? "text-display-fr tracking-[-0.025em]"
                  : "text-display tracking-[-0.01em]",
              )}
            >
              <SplitWords
                segments={[
                  { text: copy.title.lead },
                  { text: copy.title.accent, accent: true },
                ]}
              />
            </h1>

            <p className="mb-9 max-w-[33rem] text-[1.0625rem] leading-relaxed text-muted-foreground motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_750ms)] md:mb-11 md:text-[1.1875rem]">
              {copy.lead}
            </p>

            <CtaButtons
              locale={locale}
              primary={copy.primaryCta}
              secondary={copy.secondaryCta}
              className="motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_900ms)]"
            />
          </div>
        </div>
      </div>

      <FactsMarquee facts={facts} />
    </section>
  );
}
