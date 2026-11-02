import { MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FactsMarquee } from "@/components/sections/hero/facts-marquee";
import { HeroCube } from "@/components/sections/hero/hero-cube";
import { SplitWords } from "@/components/sections/hero/split-words";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type ContactHeroProps = {
  locale: Locale;
  copy: Dictionary["contact"];
  facts: Dictionary["facts"];
};

const pill =
  "inline-flex min-h-11 items-center gap-2.5 rounded-full border bg-white px-4 py-2.5 text-[0.9375rem] transition-[border-color,background-color,color] duration-300 ease-brand hover:border-navy hover:bg-navy hover:text-paper";

/** Top of the contact page: the headline, direct ways to reach the firm, and the facts ticker. */
export function ContactHero({ locale, copy, facts }: ContactHeroProps) {
  const direct: Array<{ key: string; label: string; href: string; icon: LucideIcon; ltr?: boolean }> = [
    ...(site.phones.il
      ? [
          {
            key: "phone",
            label: site.phones.il.display,
            href: `tel:${site.phones.il.tel}`,
            icon: PhoneIcon,
            ltr: true,
          },
        ]
      : []),
    ...(site.whatsappUrl
      ? [{ key: "whatsapp", label: "WhatsApp", href: site.whatsappUrl, icon: MessageCircleIcon }]
      : []),
    { key: "email", label: site.email, href: `mailto:${site.email}`, icon: MailIcon, ltr: true },
  ];

  return (
    <section
      aria-labelledby="contact-title"
      className="relative isolate overflow-clip pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4rem)]"
    >
      <div className="mx-auto grid max-w-[75rem] items-center gap-6 px-5 pb-10 sm:px-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12 lg:gap-20 md:pb-16">
        <HeroCube className="max-md:hidden" />

        <div>
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border bg-white/70 py-1.5 ps-3.5 pe-4 text-sm text-muted-foreground backdrop-blur-sm motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_150ms)]">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-brand/60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            {copy.eyebrow}
          </p>

          <h1
            id="contact-title"
            className={cn(
              "mb-6 font-serif font-normal text-balance md:mb-7",
              locale === "fr"
                ? "text-display-fr tracking-[-0.025em]"
                : "text-display tracking-[-0.01em]",
            )}
          >
            <SplitWords
              segments={[{ text: copy.title.lead }, { text: copy.title.accent, accent: true }]}
            />
          </h1>

          <p className="mb-8 max-w-[33rem] text-[1.0625rem] leading-relaxed text-muted-foreground motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_750ms)] md:mb-10 md:text-[1.1875rem]">
            {copy.intro}
          </p>

          <ul className="flex flex-wrap gap-3 motion-safe:animate-fade-up [animation-delay:calc(var(--intro)_+_900ms)]">
            {direct.map(({ key, label, href, icon: Icon, ltr }) => (
              <li key={key}>
                <a
                  href={href}
                  dir={ltr ? "ltr" : undefined}
                  {...(key === "whatsapp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={pill}
                >
                  <Icon aria-hidden strokeWidth={1.5} className="size-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FactsMarquee facts={facts} />
    </section>
  );
}
