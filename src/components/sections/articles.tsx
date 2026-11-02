import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ArticleVisual } from "@/components/sections/article-visuals";
import { Eyebrow } from "@/components/sections/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/content";
import { localizedPath, routes, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const arrowIcon = "transition-transform duration-500 ease-brand rtl:-scale-x-100";

const card =
  "group/article flex h-full rounded-[2rem] border bg-white p-3 transition-[translate,border-color] duration-500 ease-brand hover:-translate-y-1 hover:border-navy/30 md:p-4";

function ReadMore({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-3 text-[0.9375rem] font-medium">
      {label}
      <span
        aria-hidden
        className="grid size-10 place-items-center rounded-full border border-navy/20 text-navy transition-colors duration-500 ease-brand group-hover/article:border-navy group-hover/article:bg-navy group-hover/article:text-paper"
      >
        <ArrowRightIcon
          strokeWidth={1.5}
          className={cn(
            arrowIcon,
            "group-hover/article:translate-x-0.5 rtl:group-hover/article:-translate-x-0.5",
          )}
        />
      </span>
    </span>
  );
}

/** Section 6: three articles from the blog, the first one featured. */
export function Articles({ locale, copy }: { locale: Locale; copy: Dictionary["articles"] }) {
  const blogHref = localizedPath(locale, routes.blog);
  const [featured, ...others] = copy.items;

  return (
    <section
      aria-labelledby="articles-title"
      className="mx-auto max-w-[75rem] px-5 py-16 sm:px-6 md:py-36"
    >
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end md:gap-16">
        <div>
          <Eyebrow className="mb-6">{copy.eyebrow}</Eyebrow>
          <TextReveal
            id="articles-title"
            className="font-serif text-[clamp(2.25rem,1.2rem+4vw,4.25rem)] leading-[1.06] font-normal text-balance"
            segments={[{ text: copy.title.lead }, { text: copy.title.accent, accent: true }]}
          />
        </div>
        <Reveal delay={0.2} className="md:justify-self-end">
          <Link
            href={blogHref}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group/all")}
          >
            {copy.allArticles}
            <ArrowRightIcon
              strokeWidth={1.5}
              className={cn(
                arrowIcon,
                "group-hover/all:translate-x-0.5 rtl:group-hover/all:-translate-x-0.5",
              )}
            />
          </Link>
        </Reveal>
      </header>

      <RevealGroup as="ul" gap={0.12} className="mt-10 grid gap-3 md:mt-20 md:gap-4 lg:grid-cols-12 lg:gap-5">
        <RevealItem as="li" className="lg:col-span-7 lg:row-span-2">
          <Link href={`${blogHref}/${featured.slug}`} className={cn(card, "flex-col")}>
            <div className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-[1.5rem] bg-mist">
              <span className="absolute start-5 top-5 rounded-full bg-white px-3.5 py-1.5 text-sm text-navy">
                {featured.category}
              </span>
              <div className="h-40 transition-transform duration-700 ease-brand group-hover/article:scale-105 md:h-56">
                <ArticleVisual slug={featured.slug} />
              </div>
            </div>
            <div className="flex flex-1 flex-col px-3 pt-7 pb-2 md:px-5">
              <h3 className="max-w-[34rem] font-serif text-[1.75rem] leading-[1.15] font-normal transition-colors duration-300 group-hover/article:text-brand md:text-[2.25rem]">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-[32rem] leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <div className="mt-auto pt-8">
                <ReadMore label={copy.readMore} />
              </div>
            </div>
          </Link>
        </RevealItem>

        {others.map((article) => (
          <RevealItem as="li" key={article.slug} className="lg:col-span-5">
            <Link
              href={`${blogHref}/${article.slug}`}
              className={cn(card, "items-center gap-4 md:gap-6")}
            >
              <div className="grid size-28 shrink-0 place-items-center overflow-hidden rounded-[1.5rem] bg-mist md:size-40 [&_path]:stroke-[4] [&_rect]:stroke-[4]">
                <div className="h-14 transition-transform duration-700 ease-brand group-hover/article:scale-110 md:h-[4.5rem]">
                  <ArticleVisual slug={article.slug} />
                </div>
              </div>
              <div className="py-2 pe-2 md:pe-4">
                <span className="text-sm text-muted-foreground">{article.category}</span>
                <h3 className="mt-1.5 font-serif text-[1.25rem] leading-snug font-normal transition-colors duration-300 group-hover/article:text-brand md:text-[1.5rem]">
                  {article.title}
                </h3>
                <div className="mt-4 max-md:hidden">
                  <ReadMore label={copy.readMore} />
                </div>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
