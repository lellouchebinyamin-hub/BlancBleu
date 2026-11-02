import { getDictionary } from "@/content";
import { LegalPage } from "@/features/legal/legal-page";
import { routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("he", routes.accessibility, getDictionary("he").legal.accessibility.meta);

export default function Page() {
  return <LegalPage locale="he" kind="accessibility" />;
}
