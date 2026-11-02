"use client";

import { Popover } from "@base-ui/react/popover";
import {
  AccessibilityIcon,
  BookOpenTextIcon,
  ContrastIcon,
  LinkIcon,
  MinusIcon,
  PaletteIcon,
  PauseIcon,
  PlusIcon,
  RotateCcwIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

import type { Dictionary } from "@/content";
import {
  apply,
  defaultSettings,
  getServerSnapshot,
  getSnapshot,
  reset,
  subscribe,
  textSizes,
  update,
  type A11ySettings,
} from "@/lib/a11y";
import { cn } from "@/lib/utils";

type AccessibilityMenuProps = {
  copy: Dictionary["a11y"];
  statementHref: string;
};

type ToggleKey = "contrast" | "gray" | "links" | "readable" | "still";

const control =
  "grid min-h-11 place-items-center rounded-full border text-navy transition-colors duration-300 hover:bg-mist disabled:pointer-events-none disabled:opacity-40";

/**
 * A floating accessibility button that opens a small panel: text size, contrast, grayscale, link
 * underlines, a plain font and a stop for animations. Settings are saved in the browser.
 */
export function AccessibilityMenu({ copy, statementHref }: AccessibilityMenuProps) {
  const settings = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    apply(getSnapshot());
  }, []);

  const toggles: ReadonlyArray<{ key: ToggleKey; label: string; icon: typeof ContrastIcon }> = [
    { key: "contrast", label: copy.contrast, icon: ContrastIcon },
    { key: "gray", label: copy.grayscale, icon: PaletteIcon },
    { key: "links", label: copy.links, icon: LinkIcon },
    { key: "readable", label: copy.readable, icon: BookOpenTextIcon },
    { key: "still", label: copy.still, icon: PauseIcon },
  ];

  const changed = (Object.keys(defaultSettings) as Array<keyof A11ySettings>).some(
    (key) => settings[key] !== defaultSettings[key],
  );

  return (
    <Popover.Root>
      <Popover.Trigger
        aria-label={copy.open}
        className="fixed left-4 bottom-4 z-40 grid size-12 place-items-center rounded-full border border-paper/20 bg-navy text-paper shadow-[0_10px_30px_-10px_rgb(10_30_63/0.55)] transition-colors duration-300 hover:bg-brand md:left-6 md:bottom-6"
      >
        <AccessibilityIcon aria-hidden strokeWidth={1.75} className="size-6" />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner side="top" align="start" sideOffset={12} className="z-[70]">
          <Popover.Popup className="w-[min(21rem,calc(100vw-1.5rem))] rounded-[1.75rem] border bg-white p-5 text-navy shadow-[0_30px_70px_-30px_rgb(10_30_63/0.5)] outline-none">
            <div className="mb-4 flex items-center justify-between gap-3">
              <Popover.Title className="font-serif text-[1.375rem] leading-none font-normal">
                {copy.title}
              </Popover.Title>
              <Popover.Close
                aria-label={copy.close}
                className="grid size-10 place-items-center rounded-full border transition-colors duration-300 hover:bg-mist"
              >
                <XIcon aria-hidden strokeWidth={1.5} className="size-4" />
              </Popover.Close>
            </div>

            <div className="mb-3 flex items-center gap-2 rounded-[1.25rem] bg-mist p-2">
              <button
                type="button"
                aria-label={copy.smaller}
                disabled={settings.size === 0}
                onClick={() => update({ size: (settings.size - 1) as A11ySettings["size"] })}
                className={cn(control, "size-11 bg-white")}
              >
                <MinusIcon aria-hidden strokeWidth={1.75} className="size-4" />
              </button>
              <p className="flex-1 text-center text-sm" aria-live="polite">
                {copy.textSize}
                <span className="block font-serif text-lg leading-tight">
                  {textSizes[settings.size]}
                </span>
              </p>
              <button
                type="button"
                aria-label={copy.larger}
                disabled={settings.size === textSizes.length - 1}
                onClick={() => update({ size: (settings.size + 1) as A11ySettings["size"] })}
                className={cn(control, "size-11 bg-white")}
              >
                <PlusIcon aria-hidden strokeWidth={1.75} className="size-4" />
              </button>
            </div>

            <ul className="grid grid-cols-2 gap-2">
              {toggles.map(({ key, label, icon: Icon }) => {
                const on = settings[key];
                return (
                  <li key={key}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => update({ [key]: !on })}
                      className={cn(
                        "flex h-full min-h-[4.5rem] w-full flex-col items-start justify-between gap-2 rounded-[1.25rem] border p-3 text-start text-[0.9375rem] leading-snug transition-colors duration-300",
                        on ? "border-navy bg-navy text-paper" : "hover:bg-mist",
                      )}
                    >
                      <Icon aria-hidden strokeWidth={1.5} className="size-5" />
                      {label}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  type="button"
                  disabled={!changed}
                  onClick={reset}
                  className="flex h-full min-h-[4.5rem] w-full flex-col items-start justify-between gap-2 rounded-[1.25rem] border border-dashed p-3 text-start text-[0.9375rem] leading-snug transition-colors duration-300 hover:bg-mist disabled:pointer-events-none disabled:opacity-40"
                >
                  <RotateCcwIcon aria-hidden strokeWidth={1.5} className="size-5" />
                  {copy.reset}
                </button>
              </li>
            </ul>

            <Link
              href={statementHref}
              className="mt-4 inline-block text-sm underline underline-offset-4 transition-colors duration-300 hover:text-brand"
            >
              {copy.statement}
            </Link>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
