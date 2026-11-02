import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Eyebrow } from "@/components/sections/eyebrow";
import { ServiceVisual } from "@/components/sections/service-visuals";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/content";
import { localizedPath, routes, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const arrow =
  "transition-transform duration-500 ease-brand rtl:-scale-x-100";

/** How wide each card is. Purchase leads; the rest share the second row. */
const spans: Record<string, string> = {
  purchase: "md:col-span-6 lg:col-span-7",
  refinance: "md:col-span-3 lg:col-span-5",
  "any-purpose": "md:col-span-3 lg:col-span-4",
  "self-build": "md:col-span-3 lg:col-span-4",
  advice: "md:col-span-3 lg:col-span-4",
};

/**
 * Section 4: the five services as a grid of cards, each with its own illustration.
 * On phones the cards become compact rows (thumbnail beside the text) so the section stays short.
 */
export function Services({ locale, copy }: { locale: Locale; copy: Dictionary["services"] }) {
  const servicesHref = localizedPath(locale, routes.services);

  return (
    <section
      aria-labelledby="services-title"
      className="mx-auto max-w-[75rem] px-5 py-16 sm:px-6 md:py-36"
    >
      <header className="grid gap-7 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-end md:gap-16">
        <div>
          <Eyebrow className="mb-5 md:mb-6">{copy.eyebrow}</Eyebrow>
          <TextReveal
            id="services-title"
            className="font-serif text-[clamp(2.25rem,1.2rem+4vw,4.25rem)] leading-[1.06] font-normal text-balance"
            segments={[{ text: copy.title.lead }, { text: copy.title.accent, accent: true }]}
          />
        </div>
        <div>
          <Reveal
            as="p"
            delay={0.15}
            className="max-w-[28rem] text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg"
          >
            {copy.intro}
          </Reveal>
          <Reveal delay={0.25} className="mt-6 md:mt-7">
            <Link
              href={servicesHref}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group/all")}
            >
              {copy.allServices}
              <ArrowRightIcon
                strokeWidth={1.5}
                className={cn(arrow, "group-hover/all:translate-x-0.5 rtl:group-hover/all:-translate-x-0.5")}
              />
            </Link>
          </Reveal>
        </div>
      </header>

      <RevealGroup
        as="ul"
        gap={0.1}
        className="mt-10 grid gap-3 md:mt-20 md:grid-cols-6 md:gap-4 lg:grid-cols-12 lg:gap-5"
      >
        {copy.items.map((item, index) => (
          <RevealItem as="li" key={item.slug} className={spans[item.slug]}>
            <Link
              href={`${servicesHref}#${item.slug}`}
              className="group/card flex h-full rounded-[1.75rem] border bg-white p-3 transition-[translate,border-color] duration-500 ease-brand hover:-translate-y-1 hover:border-navy/30 max-md:items-center max-md:gap-4 md:flex-col md:rounded-[2rem] md:p-4"
            >
              <div className="relative grid shrink-0 place-items-center overflow-hidden rounded-[1.25rem] bg-mist max-md:size-28 md:h-52 md:rounded-[1.5rem] max-md:[&_path]:stroke-[4] max-md:[&_rect]:stroke-[4]">
                <span
                  aria-hidden
                  className="absolute start-3 top-2.5 font-serif text-xs text-brand/70 md:start-5 md:top-4 md:text-sm"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-14 transition-transform duration-700 ease-brand group-hover/card:scale-105 md:h-32">
                  <ServiceVisual slug={item.slug} />
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col md:px-4 md:pt-7 md:pb-2">
                <h3 className="font-serif text-[1.25rem] leading-snug font-normal transition-colors duration-300 group-hover/card:text-brand md:text-[1.875rem]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground md:mt-3 md:text-base">
                  {item.text}
                </p>

                <span className="mt-3 flex items-center justify-between md:mt-auto md:pt-8">
                  <span className="text-[0.9375rem] font-medium">{copy.learnMore}</span>
                  <span
                    aria-hidden
                    className="grid size-9 place-items-center rounded-full border border-navy/20 text-navy transition-colors duration-500 ease-brand group-hover/card:border-navy group-hover/card:bg-navy group-hover/card:text-paper md:size-11"
                  >
                    <ArrowRightIcon
                      strokeWidth={1.5}
                      className={cn(
                        arrow,
                        "size-4 group-hover/card:translate-x-0.5 md:size-[1.125rem] rtl:group-hover/card:-translate-x-0.5",
                      )}
                    />
                  </span>
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
