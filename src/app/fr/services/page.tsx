import { getDictionary } from "@/content";
import { ServicesPage } from "@/features/services/services-page";
import { routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("fr", routes.services, getDictionary("fr").servicesPage.meta);

export default function Page() {
  return <ServicesPage locale="fr" />;
}
