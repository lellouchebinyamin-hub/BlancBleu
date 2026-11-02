import Link from "next/link";

import { ArticleBody } from "@/components/blog/article-body";
import { ArticleHero } from "@/components/blog/article-hero";
import { ArticleToc } from "@/components/blog/article-toc";
import { PostCard } from "@/components/blog/post-card";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { PageShell } from "@/components/layout/page-shell";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, type Post } from "@/content";
import { localizedPath, routes, type Locale } from "@/lib/i18n";
import { readingMinutes, sectionId } from "@/lib/posts";

type ArticlePageProps = { locale: Locale; post: Post };

export function ArticlePage({ locale, post }: ArticlePageProps) {
  const t = getDictionary(locale);
  const blogHref = localizedPath(locale, routes.blog);
  const minutes = (item: Post) => `${readingMinutes(item)} ${t.blog.minutes}`;

  const index = t.blog.posts.findIndex((item) => item.slug === post.slug);
  const related = [1, 2].map((step) => t.blog.posts[(index + step) % t.blog.posts.length]);

  return (
    <PageShell locale={locale} path={`${routes.blog}/${post.slug}`}>
      <ReadingProgress />

      <ArticleHero
        locale={locale}
        post={post}
        blogHref={blogHref}
        backLabel={t.blog.back}
        minutes={minutes(post)}
      />

      <div className="mx-auto grid max-w-[75rem] gap-12 px-5 pb-20 sm:px-6 md:pb-32 lg:grid-cols-[14rem_minmax(0,46rem)] lg:justify-center lg:gap-20">
        <ArticleToc
          title={t.blog.contentsTitle}
          items={post.sections.map((section, i) => ({
            id: sectionId(i),
            heading: section.heading,
          }))}
        />
        <ArticleBody
          post={post}
          copy={t.blog}
          contactHref={localizedPath(locale, routes.contact)}
          ctaLabel={t.hero.primaryCta}
        />
      </div>

      <section
        aria-labelledby="related-title"
        className="mx-auto max-w-[75rem] px-5 pb-20 sm:px-6 md:pb-32"
      >
        <header className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-12">
          <TextReveal
            as="h2"
            id="related-title"
            className="max-w-[34rem] font-serif text-[clamp(1.875rem,1.2rem+2.4vw,3rem)] leading-[1.1] font-normal text-balance"
            segments={[{ text: t.blog.relatedTitle }]}
          />
          <Reveal delay={0.15}>
            <Link href={blogHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
              {t.articles.allArticles}
            </Link>
          </Reveal>
        </header>

        <RevealGroup as="ul" gap={0.12} className="grid gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
          {related.map((item) => (
            <RevealItem as="li" key={item.slug}>
              <PostCard
                post={item}
                href={`${blogHref}/${item.slug}`}
                readLabel={t.articles.readMore}
                minutes={minutes(item)}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <FinalCta locale={locale} copy={t.finalCta} />
    </PageShell>
  );
}
