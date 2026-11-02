/**
 * The visitor's accessibility settings. They live in localStorage, are applied as classes on <html>
 * (styled in globals.css) and read through a small store, so the menu and the motion provider stay in step.
 */
export type A11ySettings = {
  /** Index into `textSizes`. */
  size: 0 | 1 | 2 | 3;
  contrast: boolean;
  gray: boolean;
  links: boolean;
  readable: boolean;
  still: boolean;
};

export const textSizes = ["100%", "110%", "125%", "140%"] as const;

export const defaultSettings: A11ySettings = {
  size: 0,
  contrast: false,
  gray: false,
  links: false,
  readable: false,
  still: false,
};

const STORAGE_KEY = "bb-a11y";

const classes = {
  contrast: "a11y-contrast",
  gray: "a11y-gray",
  links: "a11y-links",
  readable: "a11y-readable",
  still: "a11y-still",
} as const;

/** Runs in <head> before first paint, so saved settings do not flash in after load. Keep in step with `apply`. */
export const a11yInitScript = `try{var s=JSON.parse(localStorage.getItem("${STORAGE_KEY}")||"null");if(s){var h=document.documentElement,c=h.classList;${(
  Object.entries(classes) as Array<[keyof typeof classes, string]>
)
  .map(([key, name]) => `if(s.${key})c.add("${name}");`)
  .join("")}var z=${JSON.stringify(textSizes)}[s.size];if(z&&s.size)h.style.fontSize=z}}catch(e){}`;

let current: A11ySettings | null = null;
const listeners = new Set<() => void>();

function read(): A11ySettings {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null") as Partial<A11ySettings> | null;
    return { ...defaultSettings, ...saved };
  } catch {
    return defaultSettings;
  }
}

export function getSnapshot(): A11ySettings {
  return (current ??= read());
}

export function getServerSnapshot(): A11ySettings {
  return defaultSettings;
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Puts the settings on the document. */
export function apply(settings: A11ySettings): void {
  const root = document.documentElement;
  (Object.entries(classes) as Array<[keyof typeof classes, string]>).forEach(([key, name]) => {
    root.classList.toggle(name, settings[key]);
  });
  root.style.fontSize = settings.size ? textSizes[settings.size] : "";
}

export function update(patch: Partial<A11ySettings>): void {
  current = { ...getSnapshot(), ...patch };
  apply(current);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // Storage can be blocked; the settings still apply for this visit.
  }
  listeners.forEach((listener) => listener());
}

export function reset(): void {
  update(defaultSettings);
}
