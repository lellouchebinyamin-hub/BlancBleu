/** One piece of an article's body. Sections hold these in reading order. */
export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: ReadonlyArray<string> }
  | { type: "steps"; items: ReadonlyArray<{ title: string; text: string }> }
  | { type: "callout"; text: string }
  | { type: "figures"; items: ReadonlyArray<{ value: string; label: string }> };

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  /** "In short": the three things to take away, shown before the article. */
  summary: ReadonlyArray<string>;
  intro: ReadonlyArray<string>;
  sections: ReadonlyArray<{ heading: string; blocks: ReadonlyArray<PostBlock> }>;
  bottomLine: { text: string; cta: string };
};

/** A legal or policy page: headed sections of paragraphs, sub-headings and lists. */
export type LegalDoc = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  /** "עודכן לאחרונה: נובמבר 2026". */
  updated: string;
  sections: ReadonlyArray<{
    heading: string;
    blocks: ReadonlyArray<Extract<PostBlock, { type: "p" | "h3" | "list" }>>;
  }>;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  common: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    mainNavigation: string;
    homeLabel: string;
    call: string;
    whatsapp: string;
    language: string;
  };
  nav: {
    home: string;
    services: string;
    blog: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    /** The headline is split so the second part can be set in the brand blue. */
    title: { lead: string; accent: string };
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  facts: ReadonlyArray<{ title: string; caption: string }>;
  servicesPage: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: { lead: string; accent: string };
    intro: string;
    jumpLabel: string;
    includes: string;
    audience: string;
    cta: string;
    items: ReadonlyArray<{
      slug: string;
      lead: string;
      includes: ReadonlyArray<string>;
      audience: ReadonlyArray<string>;
    }>;
  };
  whyNotBank: {
    eyebrow: string;
    title: { lead: string; accent: string };
    intro: string;
    points: ReadonlyArray<{ title: string; text: string }>;
    /** Labels under the mortgage-mix illustration: prime, fixed, indexed. */
    mixTracks: readonly [string, string, string];
  };
  services: {
    eyebrow: string;
    title: { lead: string; accent: string };
    intro: string;
    allServices: string;
    learnMore: string;
    items: ReadonlyArray<{ slug: string; title: string; text: string }>;
  };
  process: {
    eyebrow: string;
    title: { lead: string; accent: string };
    intro: string;
    steps: ReadonlyArray<{ title: string; text: string; tag?: string }>;
    cta: { primary: string; secondary: string };
  };
  articles: {
    eyebrow: string;
    title: { lead: string; accent: string };
    allArticles: string;
    readMore: string;
  };
  contact: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: { lead: string; accent: string };
    intro: string;
    /** The three steps after getting in touch, laid out like the home page's process. */
    steps: Omit<Dictionary["process"], "cta">;
  };
  legal: {
    privacy: LegalDoc;
    terms: LegalDoc;
    accessibility: LegalDoc;
    /** Label above the table of contents of a legal page. */
    contentsTitle: string;
    contactTitle: string;
  };
  a11y: {
    open: string;
    title: string;
    close: string;
    textSize: string;
    smaller: string;
    larger: string;
    contrast: string;
    grayscale: string;
    links: string;
    readable: string;
    still: string;
    reset: string;
    statement: string;
  };
  blog: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: { lead: string; accent: string };
    intro: string;
    featured: string;
    /** Follows the number of minutes: "3 דקות קריאה", "3 min de lecture". */
    minutes: string;
    back: string;
    summaryTitle: string;
    contentsTitle: string;
    bottomLineTitle: string;
    relatedTitle: string;
    posts: ReadonlyArray<Post>;
  };
  faq: {
    eyebrow: string;
    title: { lead: string; accent: string };
    intro: string;
    contactLink: string;
    items: ReadonlyArray<{ question: string; answer: string }>;
  };
  finalCta: {
    eyebrow: string;
    title: { lead: string; accent: string };
    intro: string;
    channels: {
      email: string;
      phoneIsrael: string;
      phoneFrance: string;
      whatsapp: string;
      whatsappAction: string;
    };
    formTitle: string;
    formBadge: string;
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      optional: string;
      submit: string;
      sending: string;
      consent: string;
      privacy: string;
      invalidName: string;
      invalidEmail: string;
      error: string;
      success: { title: string; text: string };
    };
  };
  footer: {
    tagline: string;
    navigation: string;
    information: string;
    contact: string;
    accessibility: string;
    privacy: string;
    terms: string;
    rights: string;
    backToTop: string;
  };
};

