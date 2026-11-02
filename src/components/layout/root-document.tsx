import { IntroSplash } from "@/components/layout/intro-splash";
import { MotionProvider } from "@/components/motion/motion-provider";
import { frankRuhlLibre, heebo } from "@/lib/fonts";
import { localeMeta, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type RootDocumentProps = {
  locale: Locale;
  children: React.ReactNode;
};

/** The <html>/<body> shell shared by the Hebrew and French root layouts. */
export function RootDocument({ locale, children }: RootDocumentProps) {
  return (
    <html
      lang={locale}
      dir={localeMeta[locale].dir}
      className={cn(heebo.variable, frankRuhlLibre.variable)}
      // The intro script adds a class before hydration, on return visits.
      suppressHydrationWarning
    >
      <body className="min-h-svh">
        <IntroSplash />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
