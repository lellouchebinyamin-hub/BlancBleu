"use client";

import { ArrowRightIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { ease } from "@/lib/motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type StickyCtaProps = {
  href: string;
  label: string;
  callLabel: string;
  whatsappLabel: string;
};

/**
 * Phone-only action bar. It slides up once the hero's buttons have scrolled away and steps aside
 * when the closing call to action or the footer is on screen.
 */
export function StickyCta({ href, label, callLabel, whatsappLabel }: StickyCtaProps) {
  const [pastHero, setPastHero] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPastHero(window.scrollY > window.innerHeight * 0.55));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const candidates: Array<Element | null | undefined> = [
      document.getElementById("final-cta-title")?.closest("section"),
      document.querySelector("footer"),
    ];
    const targets = candidates.filter((el): el is Element => Boolean(el));
    const visibleTargets = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleTargets.add(entry.target);
        else visibleTargets.delete(entry.target);
      }
      setAtEnd(visibleTargets.size > 0);
    });
    targets.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const secondary = site.whatsappUrl
    ? { href: site.whatsappUrl, label: whatsappLabel, Icon: MessageCircleIcon }
    : site.phones.il
      ? { href: `tel:${site.phones.il.tel}`, label: callLabel, Icon: PhoneIcon }
      : null;

  return (
    <AnimatePresence>
      {pastHero && !atEnd ? (
        <motion.div
          initial={{ y: "130%" }}
          animate={{ y: 0 }}
          exit={{ y: "130%" }}
          transition={{ duration: 0.5, ease: ease.out }}
          className="fixed inset-x-0 bottom-0 z-30 px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
        >
          <div className="flex items-center gap-2 rounded-full border border-navy/10 bg-paper/85 p-1.5 backdrop-blur-xl">
            <Link
              href={href}
              className={cn(
                buttonVariants({ size: "chip" }),
                "h-12 flex-1 justify-between ps-6 shadow-none",
              )}
            >
              {label}
              <span className="grid size-9 place-items-center rounded-full bg-white text-navy">
                <ArrowRightIcon strokeWidth={1.75} className="rtl:-scale-x-100" />
              </span>
            </Link>
            {secondary ? (
              <a
                href={secondary.href}
                aria-label={secondary.label}
                className="grid size-12 shrink-0 place-items-center rounded-full border border-navy/15 bg-white text-navy"
              >
                <secondary.Icon strokeWidth={1.5} className="size-5" />
              </a>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
