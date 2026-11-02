import { ArrowRightIcon, ClockIcon } from "lucide-react";
import Link from "next/link";

import { ArticleVisual } from "@/components/sections/article-visuals";
import type { Post } from "@/content";

type PostLinkProps = {
  post: Post;
  href: string;
  readLabel: string;
  /** Reading time, already worded: "3 דקות קריאה". */
  minutes: string;
};

/** "Read" with a round arrow that fills with navy when the card around it is hovered. */
export function PostReadMore({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-3 text-[0.9375rem] font-medium">
      {label}
      <span
        aria-hidden
        className="grid size-10 place-items-center rounded-full border border-navy/20 text-navy transition-colors duration-500 ease-brand group-hover/post:border-navy group-hover/post:bg-navy group-hover/post:text-paper"
      >
        <ArrowRightIcon
          strokeWidth={1.5}
          className="transition-transform duration-500 ease-brand group-hover/post:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/post:-translate-x-0.5"
        />
      </span>
    </span>
  );
}

export function PostMeta({ minutes }: { minutes: string }) {
  return (
    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <ClockIcon aria-hidden strokeWidth={1.5} className="size-3.5" />
      {minutes}
    </span>
  );
}

type PostCardProps = PostLinkProps & {
  /** The position of the article in the list, shown in the corner: "02". */
  number?: string;
};

/** An article in a list: illustration on a mist panel, then reading time, title, excerpt. */
export function PostCard({ post, href, readLabel, minutes, number }: PostCardProps) {
  return (
    <Link
      href={href}
      className="group/post flex h-full flex-col rounded-[2rem] border bg-white p-3 transition-[translate,border-color,box-shadow] duration-500 ease-brand hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_28px_56px_-30px_rgb(10_30_63/0.35)] md:p-4"
    >
      <div className="relative isolate grid h-48 place-items-center overflow-hidden rounded-[1.5rem] bg-mist md:h-56">
        <span className="absolute start-4 top-4 rounded-full bg-white px-3.5 py-1.5 text-sm text-navy">
          {post.category}
        </span>
        {number ? (
          <span
            aria-hidden
            className="absolute end-5 top-2 font-serif text-[4.25rem] leading-none text-transparent [-webkit-text-stroke:1px_rgb(11_74_148/0.28)]"
          >
            {number}
          </span>
        ) : null}
        <div className="h-28 transition-transform duration-700 ease-brand group-hover/post:scale-105 md:h-36">
          <ArticleVisual slug={post.slug} />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3 pt-6 pb-2 md:px-4">
        <PostMeta minutes={minutes} />
        <h3 className="mt-3 font-serif text-[1.5rem] leading-[1.2] font-normal text-balance transition-colors duration-300 group-hover/post:text-brand md:text-[1.75rem]">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="mt-auto pt-7">
          <PostReadMore label={readLabel} />
        </div>
      </div>
    </Link>
  );
}
