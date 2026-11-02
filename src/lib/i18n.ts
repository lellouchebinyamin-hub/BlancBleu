export const locales = ["he", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "he";

export const localeMeta = {
  he: { dir: "rtl", prefix: "", nativeName: "עברית", ogLocale: "he_IL" },
  fr: { dir: "ltr", prefix: "/fr", nativeName: "Français", ogLocale: "fr_FR" },
} as const satisfies Record<
  Locale,
  { dir: "rtl" | "ltr"; prefix: string; nativeName: string; ogLocale: string }
>;

export const routes = {
  home: "/",
  services: "/services",
  blog: "/blog",
  contact: "/contact",
  accessibility: "/accessibility",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type RouteKey = keyof typeof routes;

/** Prefixes a site path with the locale. Hebrew lives at the root, French under /fr. */
export function localizedPath(locale: Locale, path: string = routes.home): string {
  const { prefix } = localeMeta[locale];
  if (path === routes.home) return prefix || "/";
  return `${prefix}${path}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "he" ? "fr" : "he";
}
