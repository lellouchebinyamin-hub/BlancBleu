import Link from "next/link";

import { PostMeta, PostReadMore } from "@/components/blog/post-card";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { ArticleVisual } from "@/components/sections/article-visuals";
import type { Post } from "@/content";

type FeaturedPostProps = {
  post: Post;
  href: string;
  /** Label on the illustration: "המאמר המומלץ". */
  badge: string;
  /** The position of the article in the list, set large and outlined behind the illustration: "01". */
  number: string;
  readLabel: string;
  minutes: string;
};

/** The lead article of the blog: a wide card, illustration on one side, headline on the other. */
export function FeaturedPost({ post, href, badge, number, readLabel, minutes }: FeaturedPostProps) {
  return (
    <Reveal>
      <Link
        href={href}
        className="group/post grid gap-6 rounded-[2.25rem] border bg-white p-3 shadow-[0_40px_80px_-56px_rgb(10_30_63/0.45)] transition-[border-color,box-shadow] duration-500 ease-brand hover:border-navy/30 hover:shadow-[0_44px_80px_-48px_rgb(10_30_63/0.5)] md:p-4 lg:grid-cols-12 lg:gap-10"
      >
        <div className="relative isolate grid min-h-64 place-items-center overflow-hidden rounded-[1.75rem] bg-mist lg:col-span-6 lg:min-h-[27rem]">
          <span
            aria-hidden
            className="absolute end-6 top-3 font-serif text-[6.5rem] leading-none text-transparent [-webkit-text-stroke:1px_rgb(11_74_148/0.28)] md:text-[8rem]"
          >
            {number}
          </span>
          <span className="absolute start-5 top-5 rounded-full bg-navy px-3.5 py-1.5 text-sm text-paper">
            {badge}
          </span>
          <Parallax speed={0.1}>
            <div className="h-40 transition-transform duration-700 ease-brand group-hover/post:scale-105 md:h-60">
              <ArticleVisual slug={post.slug} />
            </div>
          </Parallax>
        </div>

        <div className="flex flex-col justify-center px-3 pb-4 md:px-6 lg:col-span-6 lg:py-10 lg:pe-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border px-3.5 py-1.5 text-sm">{post.category}</span>
            <PostMeta minutes={minutes} />
          </div>
          <h2 className="mt-6 font-serif text-[clamp(1.875rem,1.2rem+2.4vw,3rem)] leading-[1.1] font-normal text-balance transition-colors duration-300 group-hover/post:text-brand">
            {post.title}
          </h2>
          <p className="mt-5 max-w-[32rem] text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg">
            {post.excerpt}
          </p>
          <div className="mt-8">
            <PostReadMore label={readLabel} />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
