import { PageShell } from "@/components/layout/page-shell";
import { Articles } from "@/components/sections/articles";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { WhyNotBank } from "@/components/sections/why-not-bank";
import { getDictionary } from "@/content";
import { routes, type Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <PageShell locale={locale} path={routes.home}>
      <Hero locale={locale} copy={t.hero} facts={t.facts} />
      <WhyNotBank copy={t.whyNotBank} />
      <Services locale={locale} copy={t.services} />
      <Process locale={locale} copy={t.process} />
      <Articles locale={locale} copy={t.articles} posts={t.blog.posts.slice(0, 3)} />
      <Faq locale={locale} copy={t.faq} />
      <FinalCta locale={locale} copy={t.finalCta} />
    </PageShell>
  );
}
