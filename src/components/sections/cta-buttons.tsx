import { ArrowRightIcon, MessageCircleIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { localizedPath, routes, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaButtonsProps = {
  locale: Locale;
  primary: string;
  secondary: string;
  className?: string;
};

/** The site's call to action: free consultation first, WhatsApp as the quieter alternative. */
export function CtaButtons({ locale, primary, secondary, className }: CtaButtonsProps) {
  const contactHref = localizedPath(locale, routes.contact);
  const secondaryHref = site.whatsappUrl ?? contactHref;

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4", className)}>
      <Link
        href={contactHref}
        className={cn(buttonVariants({ size: "chip" }), "justify-between sm:justify-center")}
      >
        {primary}
        <span className="grid size-10 place-items-center rounded-full bg-white text-navy">
          <ArrowRightIcon
            strokeWidth={1.75}
            className="transition-transform duration-500 ease-brand group-hover/button:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/button:-translate-x-0.5"
          />
        </span>
      </Link>

      <Link
        href={secondaryHref}
        className={cn(buttonVariants({ variant: "glass", size: "lg" }), "sm:ps-6")}
      >
        <MessageCircleIcon strokeWidth={1.5} />
        {secondary}
      </Link>
    </div>
  );
}
