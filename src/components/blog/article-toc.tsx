"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type ArticleTocProps = {
  title: string;
  items: ReadonlyArray<{ id: string; heading: string }>;
};

/** The article's sections, pinned beside it on wide screens. The one being read is marked. */
export function ArticleToc({ title, items }: ArticleTocProps) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="hidden lg:block">
      <nav aria-label={title} className="sticky top-[calc(var(--header-h)+2rem)]">
        <p className="mb-5 text-sm text-muted-foreground">{title}</p>
        <ol className="flex flex-col border-s">
          {items.map((item, i) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "-ms-px flex gap-3 border-s-2 py-2.5 ps-4 text-[0.9375rem] leading-snug transition-colors duration-500 ease-brand",
                    isActive
                      ? "border-navy text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span aria-hidden className="font-serif text-brand/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.heading}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
}
