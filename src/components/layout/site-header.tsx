"use client";

import { PhoneIcon } from "lucide-react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/content";
import {
  localeMeta,
  localizedPath,
  otherLocale,
  routes,
  sectionOf,
  type Locale,
} from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  /** Current site path without the locale prefix, used for the language switch and aria-current. */
  path?: string;
  t: Pick<Dictionary, "common" | "nav">;
};

/**
 * A floating glass bar. It firms up as the page scrolls, slides away when you scroll down
 * and returns when you scroll up. On desktop a highlight glides between the links.
 */
export function SiteHeader({ locale, path = routes.home, t }: SiteHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest < 160 || latest < previous - 4) setHidden(false);
    else if (latest > previous + 4) setHidden(true);
  });

  useEffect(() => {
    document.documentElement.dataset.headerHidden = String(hidden);
  }, [hidden]);

  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.9)"],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(211, 222, 236, 0.7)", "rgba(211, 222, 236, 1)"],
  );

  const items = [
    { route: routes.home, label: t.nav.home },
    { route: routes.services, label: t.nav.services },
    { route: routes.blog, label: t.nav.blog },
    { route: routes.contact, label: t.nav.contact },
  ];
  const other = otherLocale(locale);

  return (
    <motion.header
      animate={{ y: hidden ? "-140%" : "0%" }}
      transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
      onFocusCapture={() => setHidden(false)}
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-4"
    >
      <motion.div
        style={{ backgroundColor: background, borderColor }}
        className="mx-auto flex h-14 max-w-[75rem] items-center justify-between gap-4 rounded-full border ps-5 pe-1.5 backdrop-blur-xl lg:h-[4.25rem] lg:ps-7 lg:pe-2.5"
      >
        <Link
          href={localizedPath(locale, routes.home)}
          aria-label={t.common.homeLabel}
          className="shrink-0"
        >
          <Logo />
        </Link>

        <nav aria-label={t.common.mainNavigation} className="hidden lg:block">
          <ul className="flex items-center" onMouseLeave={() => setHovered(null)}>
            {items.map((item) => {
              const active = (hovered ?? sectionOf(path)) === item.route;
              return (
                <li key={item.route}>
                  <Link
                    href={localizedPath(locale, item.route)}
                    aria-current={
                      item.route === path ? "page" : item.route === sectionOf(path) ? "true" : undefined
                    }
                    onMouseEnter={() => setHovered(item.route)}
                    onFocus={() => setHovered(item.route)}
                    onBlur={() => setHovered(null)}
                    className="relative block rounded-full px-4 py-2 text-[0.96875rem]"
                  >
                    {active ? (
                      <motion.span
                        aria-hidden
                        layoutId="nav-glider"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        className="absolute inset-0 rounded-full bg-mist"
                      />
                    ) : null}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1 lg:gap-2">
          <Link
            href={localizedPath(other, path)}
            hrefLang={other}
            lang={other}
            className="relative rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors duration-300 before:absolute before:inset-x-0 before:-inset-y-1.5 hover:bg-mist hover:text-foreground"
          >
            {localeMeta[other].nativeName}
          </Link>

          {site.phones.il ? (
            <>
              <a
                href={`tel:${site.phones.il.tel}`}
                aria-label={`${t.common.call} ${site.phones.il.display}`}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-navy/15 text-navy transition-colors duration-300 hover:bg-mist lg:hidden"
              >
                <PhoneIcon aria-hidden strokeWidth={1.5} className="size-5" />
              </a>
              <a
                href={`tel:${site.phones.il.tel}`}
                aria-label={`${t.common.call} ${site.phones.il.display}`}
                className={cn(
                  buttonVariants({ size: "default" }),
                  "group/button hidden gap-3 ps-5 pe-1.5 lg:inline-flex",
                )}
              >
                <span dir="ltr">{site.phones.il.display}</span>
                <span className="grid size-8 place-items-center rounded-full bg-white/15">
                  <PhoneIcon aria-hidden strokeWidth={1.75} className="size-4" />
                </span>
              </a>
            </>
          ) : null}

          <MobileMenu locale={locale} path={path} t={t} />
        </div>
      </motion.div>
    </motion.header>
  );
}
