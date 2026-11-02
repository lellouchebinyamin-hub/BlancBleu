import "../globals.css";

import type { Viewport } from "next";

import { RootDocument } from "@/components/layout/root-document";

export const viewport: Viewport = { themeColor: "#F2F6FB" };

export default function HebrewLayout({ children }: LayoutProps<"/">) {
  return <RootDocument locale="he">{children}</RootDocument>;
}
