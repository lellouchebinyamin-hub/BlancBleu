import type { Metadata } from "next";

import { getDictionary } from "@/content";
import { localeMeta, localizedPath, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type PageMeta = { title: string; description: string };

/** The logo on the site's light blue, from app/opengraph-image.png. */
const previewImage = "/opengraph-image.png";

/** Metadata for a page in one language, with the other language linked as an alternate. */
export function buildMetadata(
  locale: Locale,
  path: string = "/",
  meta: PageMeta = getDictionary(locale).meta,
): Metadata {
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
    // A page's own openGraph replaces the one from the layout, so the preview image is named here too:
    // it is what a link shows when it is shared, for example in WhatsApp.
    openGraph: {
      type: "website",
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      locale: localeMeta[locale].ogLocale,
      url: localizedPath(locale, path),
      images: [{ url: previewImage, width: 1200, height: 630, alt: "BlancBleu, Crédit immobilier" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [previewImage],
    },
  };
}
