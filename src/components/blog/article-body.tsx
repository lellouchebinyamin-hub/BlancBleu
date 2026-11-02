import { ArrowRightIcon, CheckIcon, QuoteIcon } from "lucide-react";
import Link from "next/link";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary, Post, PostBlock } from "@/content";
import { sectionId } from "@/lib/posts";
import { cn } from "@/lib/utils";

const body = "text-[1.125rem] leading-[1.85] md:text-[1.1875rem]";

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "p":
      return (
        <Reveal as="p" className={body}>
          {block.text}
        </Reveal>
      );

    case "h3":
      return (
        <TextReveal
          as="h3"
          className="pt-4 font-serif text-[1.5rem] leading-snug font-normal"
          segments={[{ text: block.text }]}
        />
      );

    case "list":
      return (
        <RevealGroup as="ul" gap={0.1} className="flex flex-col gap-4">
          {block.items.map((item) => (
            <RevealItem as="li" key={item} className={cn("flex items-start gap-4", body, "leading-[1.7]")}>
              <span
                aria-hidden
                className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-navy text-paper"
              >
                <CheckIcon strokeWidth={2} className="size-3.5" />
              </span>
              {item}
            </RevealItem>
          ))}
        </RevealGroup>
      );

    case "steps":
      return (
        <RevealGroup as="ol" gap={0.14} className="flex flex-col">
          {block.items.map((item, i) => (
            <RevealItem
              as="li"
              key={item.title}
              className="relative flex items-start gap-5 pb-8 last:pb-0 before:absolute before:start-[1.1875rem] before:top-12 before:bottom-2 before:w-px before:bg-hairline last:before:hidden"
            >
              <span
                aria-hidden
                className="grid size-10 shrink-0 place-items-center rounded-full bg-navy font-serif text-paper"
              >
                {i + 1}
              </span>
              <div className="min-w-0 pt-1">
                <p className="text-[1.1875rem] leading-snug font-medium">{item.title}</p>
                <p className="mt-2 leading-[1.75] text-muted-foreground">{item.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      );

    case "callout":
      return (
        <Reveal className="rounded-[2rem] bg-mist p-7 md:p-10">
          <QuoteIcon
            aria-hidden
            strokeWidth={1.5}
            className="mb-5 size-8 text-brand/70 rtl:-scale-x-100"
          />
          <p className="font-serif text-[1.375rem] leading-[1.4] text-balance md:text-[1.625rem]">
            {block.text}
          </p>
        </Reveal>
      );

    case "figures":
      return (
        <RevealGroup
          as="div"
          gap={0.12}
          className="grid grid-cols-[repeat(auto-fit,minmax(11.5rem,1fr))] gap-3"
        >
          {block.items.map((item) => (
            <RevealItem key={item.label} className="rounded-[1.75rem] border bg-white p-5 md:p-6">
              <p className="font-serif text-[clamp(1.5rem,1.1rem+1vw,1.75rem)] leading-tight text-balance text-brand">
                {item.value}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-snug text-muted-foreground">
                {item.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      );
  }
}

type SummaryPanelProps = { title: string; items: ReadonlyArray<string> };

/** "In short": the three takeaways, on a navy panel before the article starts. */
export function SummaryPanel({ title, items }: SummaryPanelProps) {
  return (
    <div className="rounded-[2rem] bg-navy p-6 text-paper md:p-10">
      <Reveal as="p" className="flex items-center gap-2.5 text-sm text-sky">
        <span aria-hidden className="size-2 rounded-full bg-sky" />
        {title}
      </Reveal>
      <RevealGroup as="ul" gap={0.14} delay={0.15} className="mt-6 flex flex-col gap-5 md:gap-6">
        {items.map((item, i) => (
          <RevealItem as="li" key={item} className="flex items-start gap-4">
            <span
              aria-hidden
              className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-paper/25 font-serif text-[0.9375rem] text-sky"
            >
              {i + 1}
            </span>
            <span className="text-[1.0625rem] leading-relaxed md:text-[1.1875rem]">{item}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

type ArticleBodyProps = {
  post: Post;
  copy: Dictionary["blog"];
  contactHref: string;
  ctaLabel: string;
};

/** The article itself: summary, introduction, numbered sections and the bottom line with a call to action. */
export function ArticleBody({ post, copy, contactHref, ctaLabel }: ArticleBodyProps) {
  return (
    <article className="min-w-0">
      <SummaryPanel title={copy.summaryTitle} items={post.summary} />

      {post.intro.length > 0 ? (
        <div className="mt-12 flex flex-col gap-5 md:mt-16">
          {post.intro.map((paragraph) => (
            <Reveal
              as="p"
              key={paragraph}
              className="font-serif text-[1.3125rem] leading-[1.6] md:text-[1.5rem]"
            >
              {paragraph}
            </Reveal>
          ))}
        </div>
      ) : null}

      {post.sections.map((section, i) => (
        <section
          key={section.heading}
          id={sectionId(i)}
          aria-labelledby={`${sectionId(i)}-title`}
          className="mt-14 md:mt-20"
        >
          <Reveal as="p" className="font-serif text-base text-brand/70">
            <span aria-hidden>{String(i + 1).padStart(2, "0")}</span>
          </Reveal>
          <TextReveal
            as="h2"
            id={`${sectionId(i)}-title`}
            className="mt-3 font-serif text-[clamp(1.75rem,1.2rem+1.8vw,2.5rem)] leading-[1.12] font-normal text-balance"
            segments={[{ text: section.heading }]}
          />
          <div className="mt-7 flex flex-col gap-6">
            {section.blocks.map((block, j) => (
              <Block key={j} block={block} />
            ))}
          </div>
        </section>
      ))}

      <section aria-labelledby="bottom-line-title" className="mt-16 md:mt-24">
        <Reveal className="rounded-[2rem] border bg-white p-7 md:p-12">
          <p
            id="bottom-line-title"
            className="flex items-center gap-2.5 text-sm text-muted-foreground"
          >
            <span aria-hidden className="size-2 rounded-full bg-brand" />
            {copy.bottomLineTitle}
          </p>
          <p className="mt-5 font-serif text-[1.5rem] leading-[1.35] text-balance md:text-[2rem]">
            {post.bottomLine.text}
          </p>
          <p className="mt-6 max-w-[34rem] leading-relaxed text-muted-foreground">
            {post.bottomLine.cta}
          </p>
          <Link
            href={contactHref}
            className={cn(buttonVariants({ size: "lg" }), "group/cta mt-8 gap-3 ps-6 pe-2")}
          >
            {ctaLabel}
            <span className="grid size-10 place-items-center rounded-full bg-white/15">
              <ArrowRightIcon
                strokeWidth={1.75}
                className="transition-transform duration-500 ease-brand group-hover/cta:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/cta:-translate-x-0.5"
              />
            </span>
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
