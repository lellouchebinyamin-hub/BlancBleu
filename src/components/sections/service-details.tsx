import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";

import { Parallax } from "@/components/motion/parallax";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { AudienceCarousel } from "@/components/sections/audience-carousel";
import { ServiceVisual } from "@/components/sections/service-visuals";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/content";
import { localizedPath, routes, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ServiceDetailsProps = {
  locale: Locale;
  copy: Dictionary["servicesPage"];
  /** Detail from the services page, joined with the title from the home page's list. */
  items: ReadonlyArray<Dictionary["servicesPage"]["items"][number] & { title: string }>;
};

/**
 * The five services, one after another. Each is a chapter: an illustration on a layered stage with its
 * number set large behind it, the lead, what is included on a navy card, who it suits, and a way in.
 */
export function ServiceDetails({ locale, copy, items }: ServiceDetailsProps) {
  const contactHref = localizedPath(locale, routes.contact);

  return (
    <div className="mx-auto max-w-[75rem] px-5 sm:px-6">
      {items.map((item, index) => {
        const number = String(index + 1).padStart(2, "0");
        return (
          <section
            key={item.slug}
            id={item.slug}
            aria-labelledby={`${item.slug}-title`}
            className="grid scroll-mt-8 gap-10 border-t py-16 md:gap-14 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-16"
          >
            <Reveal className={cn("lg:col-span-5", index % 2 === 1 && "lg:order-2")}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.25rem] border border-brand/20 md:translate-x-4 md:translate-y-4 rtl:-translate-x-3 md:rtl:-translate-x-4"
                />
                <div className="relative isolate grid h-64 place-items-center overflow-hidden rounded-[2rem] bg-mist md:h-[25rem] [&_path]:stroke-[1.8] [&_rect]:stroke-[1.8]">
                  <span
                    aria-hidden
                    className="absolute end-6 top-3 font-serif text-[6rem] leading-none text-transparent [-webkit-text-stroke:1px_rgb(11_74_148/0.28)] md:text-[8rem]"
                  >
                    {number}
                  </span>
                  <Parallax speed={0.14}>
                    <div className="h-36 md:h-52">
                      <ServiceVisual slug={item.slug} />
                    </div>
                  </Parallax>
                  <span className="absolute start-5 bottom-5 rounded-full bg-white px-4 py-2 text-sm text-navy md:start-7 md:bottom-7">
                    {item.title}
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="min-w-0 lg:col-span-7">
              <TextReveal
                as="h2"
                id={`${item.slug}-title`}
                className="font-serif text-[clamp(2rem,1.2rem+3vw,3.25rem)] leading-[1.08] font-normal text-balance"
                segments={[{ text: item.title }]}
              />
              <Reveal
                as="p"
                delay={0.15}
                className="mt-5 max-w-[36rem] text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg"
              >
                {item.lead}
              </Reveal>

              <Reveal className="mt-8 rounded-[2rem] bg-navy p-6 text-paper md:mt-10 md:p-8">
                <h3 className="mb-5 flex items-center gap-2.5 text-sm text-sky">
                  <span aria-hidden className="size-2 rounded-full bg-sky" />
                  {copy.includes}
                </h3>
                <RevealGroup as="ul" gap={0.12} delay={0.2} className="flex flex-col gap-4">
                  {item.includes.map((line) => (
                    <RevealItem
                      as="li"
                      key={line}
                      className="flex items-start gap-3.5 text-[1.0625rem] leading-snug"
                    >
                      <span
                        aria-hidden
                        className="mt-px grid size-6 shrink-0 place-items-center rounded-full bg-sky text-navy"
                      >
                        <CheckIcon strokeWidth={2.25} className="size-3.5" />
                      </span>
                      {line}
                    </RevealItem>
                  ))}
                </RevealGroup>
              </Reveal>

              <div className="mt-9 min-w-0 md:mt-11">
                <h3 className="mb-4 text-sm text-muted-foreground">{copy.audience}</h3>
                <AudienceCarousel items={item.audience} />
              </div>

              <Reveal delay={0.1} className="mt-9 md:mt-11">
                <Link
                  href={contactHref}
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group/cta")}
                >
                  {copy.cta}
                  <ArrowRightIcon
                    strokeWidth={1.5}
                    className="transition-transform duration-500 ease-brand group-hover/cta:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/cta:-translate-x-0.5"
                  />
                </Link>
              </Reveal>
            </div>
          </section>
        );
      })}
    </div>
  );
}
