import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Eyebrow } from "@/components/sections/eyebrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/content";
import { localizedPath, routes, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Section 7: the five questions people ask first, as an accordion. */
export function Faq({ locale, copy }: { locale: Locale; copy: Dictionary["faq"] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section
      aria-labelledby="faq-title"
      className="mx-auto max-w-[75rem] px-5 pt-4 pb-16 sm:px-6 md:pt-0 md:pb-36"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow className="mb-6">{copy.eyebrow}</Eyebrow>
          <TextReveal
            id="faq-title"
            className="font-serif text-[clamp(2.25rem,1.2rem+3.4vw,3.75rem)] leading-[1.06] font-normal text-balance"
            segments={[{ text: copy.title.lead }, { text: copy.title.accent, accent: true }]}
          />
          <Reveal
            as="p"
            delay={0.15}
            className="mt-6 max-w-[24rem] text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg"
          >
            {copy.intro}
          </Reveal>
          <Reveal delay={0.25} className="mt-7">
            <Link
              href={localizedPath(locale, routes.contact)}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group/all")}
            >
              {copy.contactLink}
              <ArrowRightIcon
                strokeWidth={1.5}
                className="transition-transform duration-500 ease-brand group-hover/all:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/all:-translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <Accordion defaultValue={["q0"]}>
            {copy.items.map((item, index) => (
              <AccordionItem key={item.question} value={`q${index}`}>
                <AccordionTrigger>
                  <span className="font-serif text-[1.1875rem] leading-snug md:text-[1.375rem]">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="max-w-[38rem] leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
