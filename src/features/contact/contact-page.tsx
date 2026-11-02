import { PageShell } from "@/components/layout/page-shell";
import { ContactHero } from "@/components/sections/contact-hero";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Process } from "@/components/sections/process";
import { getDictionary } from "@/content";
import { routes, type Locale } from "@/lib/i18n";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <PageShell locale={locale} path={routes.contact}>
      <ContactHero locale={locale} copy={t.contact} facts={t.facts} />
      <FinalCta locale={locale} copy={t.finalCta} />
      <Process locale={locale} copy={t.contact.steps} />
      <Faq locale={locale} copy={t.faq} />
    </PageShell>
  );
}
