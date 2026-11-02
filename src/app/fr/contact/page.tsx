import { getDictionary } from "@/content";
import { ContactPage } from "@/features/contact/contact-page";
import { routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("fr", routes.contact, getDictionary("fr").contact.meta);

export default function Page() {
  return <ContactPage locale="fr" />;
}
