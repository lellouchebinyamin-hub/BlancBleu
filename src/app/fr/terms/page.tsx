import { getDictionary } from "@/content";
import { LegalPage } from "@/features/legal/legal-page";
import { routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("fr", routes.terms, getDictionary("fr").legal.terms.meta);

export default function Page() {
  return <LegalPage locale="fr" kind="terms" />;
}
