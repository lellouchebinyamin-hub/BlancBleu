import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/features/blog/article-page";
import { routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getPost, getPosts } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

/** Every article is prerendered at build time (generateStaticParams), so there is no runtime data to stream. */
export const instant = false;

export function generateStaticParams() {
  return getPosts("he").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("he", slug);
  if (!post) return {};
  return buildMetadata("he", `${routes.blog}/${slug}`, {
    title: `${post.title} | BlancBleu`,
    description: post.excerpt,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPost("he", slug);
  if (!post) notFound();
  return <ArticlePage locale="he" post={post} />;
}
