import { getDictionary } from "@/content";
import { ServicesPage } from "@/features/services/services-page";
import { routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("he", routes.services, getDictionary("he").servicesPage.meta);

export default function Page() {
  return <ServicesPage locale="he" />;
}
