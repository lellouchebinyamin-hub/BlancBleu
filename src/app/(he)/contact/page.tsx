import { getDictionary } from "@/content";
import { ContactPage } from "@/features/contact/contact-page";
import { routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("he", routes.contact, getDictionary("he").contact.meta);

export default function Page() {
  return <ContactPage locale="he" />;
}
