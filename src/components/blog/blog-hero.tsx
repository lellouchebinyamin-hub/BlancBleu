import { BlogHeroArt } from "@/components/blog/blog-hero-art";
import { FactsMarquee } from "@/components/sections/hero/facts-marquee";
import { SplitWords } from "@/components/sections/hero/split-words";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type BlogHeroProps = {
  locale: Locale;
  copy: Dictionary["blog"];
  facts: Dictionary["facts"];
};

/** Top of the blog: the headline beside a navy panel that draws a falling rate, and the facts ticker below. */
export function BlogHero({ locale, copy, facts }: BlogHeroProps) {
  const chips = copy.posts.slice(0, 3).map((post) => post.category);

  return (
    <section
      aria-labelledby="blog-title"
      className="relative isolate overflow-clip pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4rem)]"
    >
      <div className="mx-auto grid max-w-[75rem] items-center gap-10 px-5 pb-12 sm:px-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-14 lg:gap-20 md:pb-20">
        <div>
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border bg-white/70 py-1.5 ps-3.5 pe-4 text-sm text-muted-foreground backdrop-blur-sm motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_150ms)]">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-brand/60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            {copy.eyebrow}
          </p>

          <h1
            id="blog-title"
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

          <p className="max-w-[33rem] text-[1.0625rem] leading-relaxed text-muted-foreground motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_750ms)] md:text-[1.1875rem]">
            {copy.intro}
          </p>
        </div>

        <BlogHeroArt label={copy.eyebrow} chips={chips} />
      </div>

      <FactsMarquee facts={facts} />
    </section>
  );
}
