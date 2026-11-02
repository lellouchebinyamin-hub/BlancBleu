import { ArrowLeftIcon, ClockIcon } from "lucide-react";
import Link from "next/link";

import { Parallax } from "@/components/motion/parallax";
import { ArticleVisual } from "@/components/sections/article-visuals";
import { SplitWords } from "@/components/sections/hero/split-words";
import type { Post } from "@/content";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ArticleHeroProps = {
  locale: Locale;
  post: Post;
  blogHref: string;
  backLabel: string;
  minutes: string;
};

/** Top of an article: the way back, category and reading time, the headline and its illustration. */
export function ArticleHero({ locale, post, blogHref, backLabel, minutes }: ArticleHeroProps) {
  return (
    <section
      aria-labelledby="post-title"
      className="relative isolate overflow-clip pt-[calc(var(--header-h)+1.75rem)] md:pt-[calc(var(--header-h)+3rem)]"
    >
      <div className="mx-auto max-w-[75rem] px-5 sm:px-6">
        <Link
          href={blogHref}
          className="group/back inline-flex items-center gap-2 rounded-full border bg-white/70 py-2 ps-3 pe-4 text-sm text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:text-foreground motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_100ms)]"
        >
          <ArrowLeftIcon
            aria-hidden
            strokeWidth={1.5}
            className="size-4 transition-transform duration-500 ease-brand group-hover/back:-translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/back:translate-x-0.5"
          />
          {backLabel}
        </Link>

        <div className="mt-8 grid items-center gap-10 pb-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] md:gap-12 md:pb-20">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-2.5 motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_200ms)]">
              <span className="rounded-full bg-navy px-3.5 py-1.5 text-sm text-paper">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-white/70 px-3.5 py-1.5 text-sm text-muted-foreground">
                <ClockIcon aria-hidden strokeWidth={1.5} className="size-3.5" />
                {minutes}
              </span>
            </div>

            <h1
              id="post-title"
              className={cn(
                "font-serif text-[clamp(2.125rem,1.2rem+3.4vw,3.75rem)] leading-[1.08] font-normal text-balance",
                locale === "fr" && "tracking-[-0.02em]",
              )}
            >
              <SplitWords segments={[{ text: post.title }]} />
            </h1>

            <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted-foreground motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_800ms)] md:text-[1.1875rem]">
              {post.excerpt}
            </p>
          </div>

          <div
            aria-hidden
            className="relative isolate grid h-56 place-items-center overflow-hidden rounded-[2rem] bg-mist motion-safe:animate-pop-in [animation-delay:calc(var(--intro)_+_300ms)] md:h-80 [&_path]:stroke-[1.8] [&_rect]:stroke-[1.8]"
          >
            <Parallax speed={0.12}>
              <div className="h-32 md:h-44">
                <ArticleVisual slug={post.slug} />
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}
