import { IntroSplash } from "@/components/layout/intro-splash";
import { MotionProvider } from "@/components/motion/motion-provider";
import { a11yInitScript } from "@/lib/a11y";
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
      // Lets Next jump straight to a page or #anchor on navigation while the page keeps smooth scrolling.
      data-scroll-behavior="smooth"
      // The intro script adds a class before hydration, on return visits.
      suppressHydrationWarning
    >
      <body className="min-h-svh">
        <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
        <IntroSplash />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
