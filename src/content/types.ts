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
    items: ReadonlyArray<{
      slug: string;
      category: string;
      title: string;
      excerpt: string;
    }>;
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

