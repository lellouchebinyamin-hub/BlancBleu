import type { Metadata } from "next";

import { getDictionary } from "@/content";
import { localeMeta, localizedPath, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function buildMetadata(locale: Locale, path: string = "/"): Metadata {
  const { meta } = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localizedPath(l, path)])),
        "x-default": localizedPath("he", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      locale: localeMeta[locale].ogLocale,
      url: localizedPath(locale, path),
    },
  };
}
