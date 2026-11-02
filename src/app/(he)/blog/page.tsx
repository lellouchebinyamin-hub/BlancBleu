import { getDictionary } from "@/content";
import { BlogPage } from "@/features/blog/blog-page";
import { routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("he", routes.blog, getDictionary("he").blog.meta);

export default function Page() {
  return <BlogPage locale="he" />;
}
