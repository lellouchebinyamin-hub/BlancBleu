import { HomePage } from "@/features/home/home-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("he", "/");

export default function Page() {
  return <HomePage locale="he" />;
}
