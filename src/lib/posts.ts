import { getDictionary, type Post, type PostBlock } from "@/content";
import type { Locale } from "@/lib/i18n";

const wordsPerMinute = 200;

function blockText(block: PostBlock): string[] {
  switch (block.type) {
    case "p":
    case "h3":
    case "callout":
      return [block.text];
    case "list":
      return [...block.items];
    case "steps":
      return block.items.flatMap((item) => [item.title, item.text]);
    case "figures":
      return block.items.map((item) => item.label);
  }
}

/** Minutes to read an article, rounded up, from its own text. */
export function readingMinutes(post: Post): number {
  const text = [
    ...post.summary,
    ...post.intro,
    ...post.sections.flatMap((section) => [section.heading, ...section.blocks.flatMap(blockText)]),
    post.bottomLine.text,
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / wordsPerMinute));
}

export function getPosts(locale: Locale): ReadonlyArray<Post> {
  return getDictionary(locale).blog.posts;
}

export function getPost(locale: Locale, slug: string): Post | undefined {
  return getPosts(locale).find((post) => post.slug === slug);
}

/** Id of a section heading, shared by the article body and its table of contents. */
export function sectionId(index: number): string {
  return `section-${index + 1}`;
}
