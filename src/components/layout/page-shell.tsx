import { AccessibilityMenu } from "@/components/layout/accessibility-menu";
import { ContactDock } from "@/components/layout/contact-dock";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getDictionary } from "@/content";
import { localizedPath, routes, type Locale } from "@/lib/i18n";

type PageShellProps = {
  locale: Locale;
  /** The page's path without the locale prefix, for the navigation and the language switch. */
  path: string;
  children: React.ReactNode;
};

/** What every page shares: skip link, header, main landmark, sticky call to action and footer. */
export function PageShell({ locale, path, children }: PageShellProps) {
  const t = getDictionary(locale);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-5 focus:py-3 focus:text-paper"
      >
        {t.common.skipToContent}
      </a>
      <SiteHeader locale={locale} path={path} t={{ common: t.common, nav: t.nav }} />
      <main id="main">{children}</main>
      <ContactDock label={t.common.whatsapp} contactHref={localizedPath(locale, routes.contact)} />
      <AccessibilityMenu copy={t.a11y} statementHref={localizedPath(locale, routes.accessibility)} />
      <SiteFooter locale={locale} copy={t.footer} nav={t.nav} homeLabel={t.common.homeLabel} />
    </>
  );
}
