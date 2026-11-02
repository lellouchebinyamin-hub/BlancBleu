import { MailIcon } from "lucide-react";

import { ArticleToc } from "@/components/blog/article-toc";
import { PageShell } from "@/components/layout/page-shell";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/sections/hero/split-words";
import { getDictionary } from "@/content";
import { routes, type Locale } from "@/lib/i18n";
import { sectionId } from "@/lib/posts";
import { site } from "@/lib/site";

export type LegalKind = "privacy" | "terms" | "accessibility";

/** A policy page: a short heading, a table of contents beside the numbered sections, and a way to ask. */
export function LegalPage({ locale, kind }: { locale: Locale; kind: LegalKind }) {
  const t = getDictionary(locale);
  const doc = t.legal[kind];

  return (
    <PageShell locale={locale} path={routes[kind]}>
      <section
        aria-labelledby="legal-title"
        className="relative isolate overflow-clip pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4rem)]"
      >
        <div className="mx-auto max-w-[75rem] px-5 pb-12 sm:px-6 md:pb-20">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border bg-white/70 py-1.5 ps-3.5 pe-4 text-sm text-muted-foreground backdrop-blur-sm motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_150ms)]">
            <span aria-hidden className="size-2 rounded-full bg-brand" />
            {doc.eyebrow}
          </p>

          <h1
            id="legal-title"
            className="max-w-[46rem] font-serif text-[clamp(2.5rem,1.3rem+4.2vw,4.5rem)] leading-[1.06] font-normal text-balance"
          >
            <SplitWords segments={[{ text: doc.title }]} />
          </h1>

          <p className="mt-6 max-w-[40rem] text-[1.0625rem] leading-relaxed text-muted-foreground motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_750ms)] md:text-[1.1875rem]">
            {doc.intro}
          </p>
          <p className="mt-5 text-sm text-muted-foreground motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_900ms)]">
            {doc.updated}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-[75rem] gap-12 px-5 pb-20 sm:px-6 md:pb-32 lg:grid-cols-[14rem_minmax(0,46rem)] lg:justify-center lg:gap-20">
        <ArticleToc
          title={t.legal.contentsTitle}
          items={doc.sections.map((section, i) => ({ id: sectionId(i), heading: section.heading }))}
        />

        <article className="min-w-0">
          {doc.sections.map((section, i) => (
            <section
              key={section.heading}
              id={sectionId(i)}
              aria-labelledby={`${sectionId(i)}-title`}
              className="border-t py-10 first:border-t-0 first:pt-0 md:py-14 md:first:pt-0"
            >
              <h2
                id={`${sectionId(i)}-title`}
                className="flex items-baseline gap-4 font-serif text-[clamp(1.5rem,1.1rem+1.4vw,2rem)] leading-snug font-normal"
              >
                <span aria-hidden className="text-base text-brand/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>

              <div className="mt-5 flex flex-col gap-4 text-[1.0625rem] leading-[1.85] md:text-[1.125rem]">
                {section.blocks.map((block, j) => {
                  switch (block.type) {
                    case "p":
                      return <p key={j}>{block.text}</p>;
                    case "h3":
                      return (
                        <h3 key={j} className="pt-2 font-serif text-[1.375rem] leading-snug font-normal">
                          {block.text}
                        </h3>
                      );
                    case "list":
                      return (
                        <ul key={j} className="flex flex-col gap-3">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="relative ps-6 before:absolute before:start-0 before:top-[0.8em] before:size-1.5 before:rounded-full before:bg-brand"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                  }
                })}
              </div>
            </section>
          ))}

          <Reveal className="mt-6 rounded-[2rem] bg-mist p-7 md:mt-10 md:p-10">
            <p className="font-serif text-[1.5rem] leading-snug text-balance md:text-[1.75rem]">
              {t.legal.contactTitle}
            </p>
            <a
              href={`mailto:${site.email}`}
              dir="ltr"
              className="mt-6 inline-flex min-h-11 items-center gap-2.5 rounded-full border bg-white px-5 py-2.5 transition-colors duration-300 ease-brand hover:border-navy hover:bg-navy hover:text-paper"
            >
              <MailIcon aria-hidden strokeWidth={1.5} className="size-4" />
              {site.email}
            </a>
          </Reveal>
        </article>
      </div>
    </PageShell>
  );
}
