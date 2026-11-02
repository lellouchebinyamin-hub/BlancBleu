import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyCta } from "@/components/layout/sticky-cta";
import { Articles } from "@/components/sections/articles";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { WhyNotBank } from "@/components/sections/why-not-bank";
import { getDictionary } from "@/content";
import { localizedPath, routes, type Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-5 focus:py-3 focus:text-paper"
      >
        {t.common.skipToContent}
      </a>
      <SiteHeader locale={locale} t={{ common: t.common, nav: t.nav }} />
      <main id="main">
        <Hero locale={locale} copy={t.hero} facts={t.facts} />
        <WhyNotBank copy={t.whyNotBank} />
        <Services locale={locale} copy={t.services} />
        <Process locale={locale} copy={t.process} />
        <Articles locale={locale} copy={t.articles} />
        <Faq locale={locale} copy={t.faq} />
        <FinalCta locale={locale} copy={t.finalCta} />
      </main>
      <StickyCta
        href={localizedPath(locale, routes.contact)}
        label={t.hero.primaryCta}
        callLabel={t.common.call}
        whatsappLabel={t.hero.secondaryCta}
      />
      <SiteFooter
        locale={locale}
        copy={t.footer}
        nav={t.nav}
        homeLabel={t.common.homeLabel}
      />
    </>
  );
}
