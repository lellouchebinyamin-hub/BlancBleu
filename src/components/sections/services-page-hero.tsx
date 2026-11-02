import { CtaButtons } from "@/components/sections/cta-buttons";
import { FactsMarquee } from "@/components/sections/hero/facts-marquee";
import { HeroCube } from "@/components/sections/hero/hero-cube";
import { SplitWords } from "@/components/sections/hero/split-words";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ServicesPageHeroProps = {
  locale: Locale;
  copy: Dictionary["servicesPage"];
  hero: Dictionary["hero"];
  facts: Dictionary["facts"];
};

/** Top of the services page: headline, call to action and the facts ticker. The jump links follow as a floating bar. */
export function ServicesPageHero({ locale, copy, hero, facts }: ServicesPageHeroProps) {
  return (
    <section
      aria-labelledby="services-page-title"
      className="relative isolate overflow-clip pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4rem)]"
    >
      <div className="mx-auto grid max-w-[75rem] items-center gap-6 px-5 pb-10 sm:px-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-8 md:pb-16">
        <HeroCube className="max-md:hidden" />

        <div>
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border bg-white/70 py-1.5 ps-3.5 pe-4 text-sm text-muted-foreground backdrop-blur-sm motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_150ms)]">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-brand/60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            {copy.eyebrow}
          </p>

          <h1
            id="services-page-title"
            className={cn(
              "mb-6 font-serif font-normal text-balance md:mb-7",
              locale === "fr"
                ? "text-display-fr tracking-[-0.025em]"
                : "text-display tracking-[-0.01em]",
            )}
          >
            <SplitWords
              segments={[{ text: copy.title.lead }, { text: copy.title.accent, accent: true }]}
            />
          </h1>

          <p className="mb-9 max-w-[33rem] text-[1.0625rem] leading-relaxed text-muted-foreground motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_750ms)] md:text-[1.1875rem]">
            {copy.intro}
          </p>

          <CtaButtons
            locale={locale}
            primary={hero.primaryCta}
            secondary={hero.secondaryCta}
            className="motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_900ms)]"
          />
        </div>
      </div>

      <FactsMarquee facts={facts} />
    </section>
  );
}
