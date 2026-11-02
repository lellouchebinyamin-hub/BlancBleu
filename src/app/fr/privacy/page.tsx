import { getDictionary } from "@/content";
import { LegalPage } from "@/features/legal/legal-page";
import { routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("fr", routes.privacy, getDictionary("fr").legal.privacy.meta);

export default function Page() {
  return <LegalPage locale="fr" kind="privacy" />;
}
