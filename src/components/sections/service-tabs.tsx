"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ServiceTabsProps = {
  label: string;
  links: ReadonlyArray<{ slug: string; title: string }>;
};

/**
 * A floating bar of jump links to each service. It follows the page: the tab for the service on screen
 * is filled, centred in the bar, and on phones a dot under the bar stretches into a line to match.
 * On phones the tabs sit side by side and swipe; the bar slides up under the header as it hides.
 */
export function ServiceTabs({ label, links }: ServiceTabsProps) {
  const [active, setActive] = useState(links[0]?.slug);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    const list = listRef.current;
    const tab = list?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    if (!list || !tab) return;
    const listBox = list.getBoundingClientRect();
    const tabBox = tab.getBoundingClientRect();
    list.scrollBy({
      left: tabBox.left + tabBox.width / 2 - (listBox.left + listBox.width / 2),
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="service-tabs pointer-events-none sticky z-30 bg-linear-to-b from-paper from-55% to-paper/0 px-3 pb-5 md:px-6">
      <div className="pointer-events-auto mx-auto w-fit max-w-full">
        <nav aria-label={label}>
          <ul
            ref={listRef}
            className="flex gap-2 overflow-x-auto px-1 py-1 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [scrollbar-width:none] md:justify-center md:[mask-image:none] [&::-webkit-scrollbar]:hidden"
          >
            {links.map((link) => {
              const isActive = active === link.slug;
              return (
                <li key={link.slug} className="shrink-0">
                  <a
                    href={`#${link.slug}`}
                    data-slug={link.slug}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block rounded-full border px-4 py-3 text-sm whitespace-nowrap shadow-[0_1px_2px_rgb(10_30_63/0.05)] transition-[background-color,color,border-color] duration-500 ease-brand",
                      isActive
                        ? "border-navy bg-navy text-paper"
                        : "bg-white text-muted-foreground hover:border-sky hover:text-foreground",
                    )}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div aria-hidden className="flex justify-center gap-1.5 pt-2.5 md:hidden">
          {links.map((link) => (
            <span
              key={link.slug}
              className={cn(
                "h-1.5 rounded-full transition-[width,background-color] duration-500 ease-brand",
                active === link.slug ? "w-6 bg-navy" : "w-1.5 bg-navy/20",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
