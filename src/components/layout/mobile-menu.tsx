"use client";

import { Dialog } from "@base-ui/react/dialog";
import { MessageCircleIcon, PhoneIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/layout/logo";
import type { Dictionary } from "@/content";
import { localeMeta, localizedPath, locales, routes, sectionOf, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type MobileMenuProps = {
  locale: Locale;
  path: string;
  t: Pick<Dictionary, "common" | "nav">;
};

/**
 * Phone menu. It opens as a circle that grows out of the menu button, then the links rise into place
 * one by one while the logo cube draws itself in the corner. Closing shrinks it back.
 */
export function MobileMenu({ locale, path, t }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const items = [
    { route: routes.home, label: t.nav.home },
    { route: routes.services, label: t.nav.services },
    { route: routes.blog, label: t.nav.blog },
    { route: routes.contact, label: t.nav.contact },
  ];
  const contactHref = localizedPath(locale, routes.contact);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label={t.common.openMenu}
        className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-paper transition-colors duration-300 hover:bg-brand lg:hidden"
      >
        <span aria-hidden className="relative block h-2.5 w-5">
          <span className="absolute inset-x-0 top-0 h-px bg-current" />
          <span className="absolute inset-x-0 bottom-0 h-px bg-current" />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Popup className="fixed inset-0 z-50 flex flex-col overflow-x-hidden overflow-y-auto bg-navy text-paper outline-none [--ox:calc(100%-2.625rem)] [clip-path:circle(150%_at_var(--ox)_2.5rem)] data-ending-style:[clip-path:circle(0%_at_var(--ox)_2.5rem)] data-starting-style:[clip-path:circle(0%_at_var(--ox)_2.5rem)] motion-safe:transition-[clip-path] motion-safe:duration-[750ms] motion-safe:ease-brand rtl:[--ox:2.625rem]">
          <Dialog.Title className="sr-only">{t.common.mainNavigation}</Dialog.Title>

          <svg
            aria-hidden
            viewBox="0 0 1000 1000"
            className="pointer-events-none absolute -bottom-20 end-[-9rem] w-[26rem] overflow-visible fill-none stroke-sky/15 stroke-[3]"
          >
            {[
              "M500 100 864 310V730L500 940 136 730V310Z",
              "M136 310 500 520 864 310",
              "M500 520V940",
            ].map((d, i) => (
              <path
                key={d}
                d={d}
                pathLength={1}
                className="[stroke-dasharray:1_1] motion-safe:animate-draw"
                style={{ animationDelay: `${450 + i * 200}ms` }}
              />
            ))}
          </svg>

          <div className="relative mx-3 mt-3 flex h-14 shrink-0 items-center justify-between px-2 ps-5">
            <Link
              href={localizedPath(locale, routes.home)}
              aria-label={t.common.homeLabel}
              onClick={close}
              className="rounded-full bg-paper px-5 py-2 motion-safe:animate-fade-up [animation-delay:300ms]"
            >
              <Logo className="h-10" />
            </Link>
            <Dialog.Close
              aria-label={t.common.closeMenu}
              className="grid size-11 place-items-center rounded-full border border-paper/25 transition-colors duration-300 hover:bg-paper/10"
            >
              <XIcon strokeWidth={1.25} className="size-6" />
            </Dialog.Close>
          </div>

          <nav aria-label={t.common.mainNavigation} className="relative mt-8 px-5">
            <ul>
              {items.map((item, i) => (
                <li key={item.route} className="border-b border-paper/10">
                  <Link
                    href={localizedPath(locale, item.route)}
                    onClick={close}
                    aria-current={
                      item.route === path ? "page" : item.route === sectionOf(path) ? "true" : undefined
                    }
                    className="group/link flex items-baseline gap-4 py-5 aria-[current=page]:text-sky"
                  >
                    <span
                      aria-hidden
                      className="font-serif text-sm text-sky/80 tabular-nums motion-safe:animate-fade-up"
                      style={{ animationDelay: `${420 + i * 90}ms` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="-my-[0.1em] overflow-hidden py-[0.1em]">
                      <span
                        className="block font-serif text-[2.5rem] leading-[1.05] transition-transform duration-500 ease-brand motion-safe:animate-rise group-active/link:translate-x-1 rtl:group-active/link:-translate-x-1"
                        style={{ animationDelay: `${330 + i * 90}ms` }}
                      >
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative mt-auto flex flex-col gap-5 px-5 pt-10 pb-[max(1.5rem,env(safe-area-inset-bottom))] motion-safe:animate-fade-up [animation-delay:650ms]">
            <div className="flex gap-3">
              <a
                href={site.phones.il ? `tel:${site.phones.il.tel}` : contactHref}
                onClick={close}
                className="group/cta flex h-14 flex-1 items-center justify-between gap-3 rounded-full bg-paper ps-6 pe-2 font-medium text-navy"
              >
                {t.common.call}
                <span className="grid size-10 place-items-center rounded-full bg-navy text-paper">
                  <PhoneIcon strokeWidth={1.75} className="size-5" />
                </span>
              </a>
              <Link
                href={site.whatsappUrl ?? contactHref}
                {...(site.whatsappUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={close}
                className="flex h-14 flex-1 items-center justify-center gap-2.5 rounded-full border border-paper/30 font-medium transition-colors duration-300 hover:bg-paper/10"
              >
                <MessageCircleIcon strokeWidth={1.5} className="size-5" />
                {t.common.whatsapp}
              </Link>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div
                role="group"
                aria-label={t.common.language}
                className="inline-flex rounded-full border border-paper/25 p-1"
              >
                {locales.map((code) =>
                  code === locale ? (
                    <span
                      key={code}
                      lang={code}
                      aria-current="true"
                      className="rounded-full bg-paper px-5 py-3 text-sm leading-none font-medium text-navy"
                    >
                      {localeMeta[code].nativeName}
                    </span>
                  ) : (
                    <Link
                      key={code}
                      href={localizedPath(code, path)}
                      hrefLang={code}
                      lang={code}
                      onClick={close}
                      className="rounded-full px-5 py-3 text-sm leading-none text-paper/75 transition-colors duration-300 hover:text-paper"
                    >
                      {localeMeta[code].nativeName}
                    </Link>
                  ),
                )}
              </div>

            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
