import { ArrowUpIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import type { Dictionary } from "@/content";
import {
  localeMeta,
  localizedPath,
  otherLocale,
  routes,
  type Locale,
} from "@/lib/i18n";
import { site } from "@/lib/site";
import { underlineLink } from "@/lib/styles";
import { cn } from "@/lib/utils";

const navLink = cn(
  underlineLink,
  "inline-block py-2.5 text-[1.0625rem] text-foreground/75 transition-colors duration-300 hover:text-foreground md:py-1.5",
);

const pill =
  "inline-flex items-center gap-2 rounded-full border border-navy/15 min-h-11 px-4 py-2.5 text-sm text-foreground transition-colors duration-300 ease-brand hover:border-navy hover:bg-navy hover:text-paper";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-sm text-muted-foreground">{title}</h2>
      <ul className="flex flex-col">{children}</ul>
    </div>
  );
}

export function SiteFooter({
  locale,
  copy,
  nav,
  homeLabel,
}: {
  locale: Locale;
  copy: Dictionary["footer"];
  nav: Dictionary["nav"];
  homeLabel: string;
}) {
  const other = otherLocale(locale);
  const to = (path: string) => localizedPath(locale, path);

  return (
    <footer className="relative overflow-clip">
      <div className="mx-auto max-w-[75rem] px-5 pt-16 sm:px-6 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href={to(routes.home)} aria-label={homeLabel} className="inline-block">
              <Logo className="h-12 opacity-80 md:h-14 lg:h-14" />
            </Link>
            <p className="mt-8 max-w-[21rem] font-serif text-[1.875rem] leading-[1.15] text-balance md:text-[2.375rem]">
              {copy.tagline}
            </p>

            <ul className="mt-9 flex flex-wrap gap-3">
              <li>
                <a href={`mailto:${site.email}`} dir="ltr" className={pill}>
                  <MailIcon strokeWidth={1.5} className="size-4" />
                  {site.email}
                </a>
              </li>
              {site.phones.il ? (
                <li>
                  <a href={`tel:${site.phones.il.tel}`} dir="ltr" className={pill}>
                    <PhoneIcon strokeWidth={1.5} className="size-4" />
                    {site.phones.il.display}
                  </a>
                </li>
              ) : null}
              {site.phones.fr ? (
                <li>
                  <a href={`tel:${site.phones.fr.tel}`} dir="ltr" className={pill}>
                    <PhoneIcon strokeWidth={1.5} className="size-4" />
                    {site.phones.fr.display}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:col-span-6 lg:col-start-7 lg:grid-cols-2 lg:gap-x-12">
            <Column title={copy.navigation}>
              {[
                [routes.home, nav.home],
                [routes.services, nav.services],
                [routes.blog, nav.blog],
                [routes.contact, nav.contact],
              ].map(([path, label]) => (
                <li key={path}>
                  <Link href={to(path)} className={navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title={copy.information}>
              {[
                [routes.accessibility, copy.accessibility],
                [routes.privacy, copy.privacy],
                [routes.terms, copy.terms],
              ].map(([path, label]) => (
                <li key={path}>
                  <Link href={to(path)} className={navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </Column>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t pt-6 md:mt-24 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">{copy.rights}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href={localizedPath(other, routes.home)} hrefLang={other} lang={other} className={pill}>
              {localeMeta[other].nativeName}
            </Link>
            <a href="#" className={pill}>
              <ArrowUpIcon strokeWidth={1.5} className="size-4" />
              {copy.backToTop}
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none mt-12 mb-6 flex justify-center px-5 md:mt-16 md:mb-10">
        <Image
          src="/brand/logo.png"
          alt=""
          width={640}
          height={215}
          unoptimized
          className="w-[min(100%,58rem)] opacity-[0.07] select-none"
        />
      </div>
    </footer>
  );
}
