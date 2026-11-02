import { BlogHero } from "@/components/blog/blog-hero";
import { FeaturedPost } from "@/components/blog/featured-post";
import { PostCard } from "@/components/blog/post-card";
import { PageShell } from "@/components/layout/page-shell";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { getDictionary } from "@/content";
import { localizedPath, routes, type Locale } from "@/lib/i18n";
import { readingMinutes } from "@/lib/posts";

export function BlogPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [featured, ...others] = t.blog.posts;
  const blogHref = localizedPath(locale, routes.blog);
  const minutes = (post: (typeof t.blog.posts)[number]) =>
    `${readingMinutes(post)} ${t.blog.minutes}`;

  return (
    <PageShell locale={locale} path={routes.blog}>
      <BlogHero locale={locale} copy={t.blog} facts={t.facts} />

      <section
        aria-label={t.blog.eyebrow}
        className="mx-auto max-w-[75rem] px-5 pb-16 sm:px-6 md:pb-28"
      >
        <FeaturedPost
          post={featured}
          href={`${blogHref}/${featured.slug}`}
          badge={t.blog.featured}
          number="01"
          readLabel={t.articles.readMore}
          minutes={minutes(featured)}
        />

        <RevealGroup
          as="ul"
          gap={0.12}
          className="mt-4 grid gap-4 md:mt-6 md:grid-cols-2 md:gap-5 md:pb-12 lg:gap-6"
        >
          {others.map((post, i) => (
            <RevealItem as="li" key={post.slug} className="md:even:translate-y-12">
              <PostCard
                post={post}
                href={`${blogHref}/${post.slug}`}
                readLabel={t.articles.readMore}
                minutes={minutes(post)}
                number={String(i + 2).padStart(2, "0")}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <FinalCta locale={locale} copy={t.finalCta} />
    </PageShell>
  );
}
