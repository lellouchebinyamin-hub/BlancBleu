import type { Locale } from "@/lib/i18n";
import { fr } from "./fr";
import { he } from "./he";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { he, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
