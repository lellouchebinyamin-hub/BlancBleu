import { PageShell } from "@/components/layout/page-shell";
import { FinalCta } from "@/components/sections/final-cta";
import { Process } from "@/components/sections/process";
import { ServiceDetails } from "@/components/sections/service-details";
import { ServiceTabs } from "@/components/sections/service-tabs";
import { ServicesPageHero } from "@/components/sections/services-page-hero";
import { getDictionary } from "@/content";
import { routes, type Locale } from "@/lib/i18n";

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const items = t.servicesPage.items.map((detail) => ({
    ...detail,
    title: t.services.items.find((service) => service.slug === detail.slug)?.title ?? detail.slug,
  }));

  return (
    <PageShell locale={locale} path={routes.services}>
      <ServicesPageHero locale={locale} copy={t.servicesPage} hero={t.hero} facts={t.facts} />
      {/* One wrapper, so the floating tab bar stays only while the services are on screen. */}
      <div>
        <ServiceTabs
          label={t.servicesPage.jumpLabel}
          links={items.map(({ slug, title }) => ({ slug, title }))}
        />
        <ServiceDetails locale={locale} copy={t.servicesPage} items={items} />
      </div>
      <Process locale={locale} copy={t.process} />
      <FinalCta locale={locale} copy={t.finalCta} />
    </PageShell>
  );
}
