import { ArrowUpRightIcon, MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { Eyebrow } from "@/components/sections/eyebrow";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Channel = {
  key: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  ltr?: boolean;
};

/** Section 9: the closing call to action, with the form, on the second dark band. */
export function FinalCta({ locale, copy }: { locale: Locale; copy: Dictionary["finalCta"] }) {
  const channels: Channel[] = [
    ...(site.whatsappUrl
      ? [
          {
            key: "whatsapp",
            label: copy.channels.whatsapp,
            value: copy.channels.whatsappAction,
            href: site.whatsappUrl,
            icon: MessageCircleIcon,
          },
        ]
      : []),
    ...(site.phones.il
      ? [
          {
            key: "phone-il",
            label: copy.channels.phoneIsrael,
            value: site.phones.il.display,
            href: `tel:${site.phones.il.tel}`,
            icon: PhoneIcon,
            ltr: true,
          },
        ]
      : []),
    ...(site.phones.fr
      ? [
          {
            key: "phone-fr",
            label: copy.channels.phoneFrance,
            value: site.phones.fr.display,
            href: `tel:${site.phones.fr.tel}`,
            icon: PhoneIcon,
            ltr: true,
          },
        ]
      : []),
    {
      key: "email",
      label: copy.channels.email,
      value: site.email,
      href: `mailto:${site.email}`,
      icon: MailIcon,
      ltr: true,
    },
  ];

  return (
    <section
      id="contact-form"
      aria-labelledby="final-cta-title"
      className="scroll-mt-4 py-3 md:px-5 md:py-5"
    >
      {/* On phones the band runs edge to edge, square, like the "why not the bank" band. */}
      <div className="mx-auto max-w-[90rem] overflow-clip bg-navy text-paper md:rounded-[3rem]">
        <div className="mx-auto grid max-w-[75rem] gap-14 px-4 py-16 sm:px-6 md:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          <div>
            <Eyebrow tone="dark" className="mb-7">
              {copy.eyebrow}
            </Eyebrow>

            <TextReveal
              id="final-cta-title"
              accentClassName="text-sky"
              className="font-serif text-[clamp(2.5rem,1.3rem+4.6vw,4.75rem)] leading-[1.04] font-normal text-balance"
              segments={[{ text: copy.title.lead }, { text: copy.title.accent, accent: true }]}
            />

            <Reveal
              as="p"
              delay={0.2}
              className="mt-7 max-w-[28rem] text-[1.0625rem] leading-relaxed text-paper/70 md:text-lg"
            >
              {copy.intro}
            </Reveal>

            <RevealGroup as="ul" gap={0.1} delay={0.3} className="mt-10 grid gap-3 sm:grid-cols-2">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                const spansTwo = channels.length % 2 === 1 && index === channels.length - 1;
                return (
                  <RevealItem as="li" key={channel.key} className={cn(spansTwo && "sm:col-span-2")}>
                    <a
                      href={channel.href}
                      {...(channel.key === "whatsapp"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group/channel grid h-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-4 gap-y-5 rounded-[1.5rem] border border-paper/15 bg-paper/[0.05] p-4 transition-[border-color,background-color,translate] duration-500 ease-brand hover:-translate-y-0.5 hover:border-paper/35 hover:bg-paper/[0.1] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:p-5"
                    >
                      <span className="grid size-11 place-items-center rounded-full bg-paper/10 text-sky sm:col-start-1 sm:row-start-1">
                        <Icon strokeWidth={1.5} className="size-5" />
                      </span>
                      <span className="sm:col-span-2 sm:row-start-2">
                        <span className="block text-sm text-paper/60">{channel.label}</span>
                        <span
                          dir={channel.ltr ? "ltr" : undefined}
                          className="mt-0.5 block font-serif text-[1.25rem] leading-snug break-words rtl:text-end sm:mt-1 sm:text-[1.375rem]"
                        >
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRightIcon
                        strokeWidth={1.5}
                        className="size-5 text-paper/40 transition-colors duration-500 group-hover/channel:text-paper sm:col-start-2 sm:row-start-1 rtl:-scale-x-100"
                      />
                    </a>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-[1.75rem] bg-white p-5 text-navy md:rounded-[2rem] md:p-10">
              {/* On phones the badge sits above the title, so a longer title (French) keeps the full width. */}
              <div className="mb-7 flex flex-col-reverse items-start gap-3 md:mb-8 md:flex-row md:items-center md:justify-between md:gap-4">
                <h3 className="font-serif text-[1.375rem] leading-tight font-normal sm:text-[1.75rem] md:text-[2rem]">
                  {copy.formTitle}
                </h3>
                <span className="shrink-0 rounded-full bg-mist px-3.5 py-1.5 text-sm">
                  {copy.formBadge}
                </span>
              </div>
              <ContactForm locale={locale} copy={copy.form} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
