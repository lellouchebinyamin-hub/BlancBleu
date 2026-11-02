import "../globals.css";

import type { Metadata, Viewport } from "next";

import { RootDocument } from "@/components/layout/root-document";
import { site } from "@/lib/site";

export const viewport: Viewport = { themeColor: "#F2F6FB" };

/** The base every relative link and preview image in the metadata is resolved against. */
export const metadata: Metadata = { metadataBase: new URL(site.url) };

export default function HebrewLayout({ children }: LayoutProps<"/">) {
  return <RootDocument locale="he">{children}</RootDocument>;
}
