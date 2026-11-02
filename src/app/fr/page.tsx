import { HomePage } from "@/features/home/home-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("fr", "/");

export default function Page() {
  return <HomePage locale="fr" />;
}
