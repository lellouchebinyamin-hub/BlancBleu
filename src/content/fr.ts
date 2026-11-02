import type { Dictionary } from "./types";

export const fr = {
  meta: {
    title: "BlancBleu | Conseil en crédit immobilier, depuis 2004",
    description:
      "BlancBleu : conseil indépendant en crédit immobilier, depuis 2004. Un accompagnement pour les Français installés en Israël et les Israéliens, en français et en hébreu.",
  },
  common: {
    skipToContent: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mainNavigation: "Navigation principale",
    homeLabel: "BlancBleu, accueil",
    call: "Appeler",
    whatsapp: "WhatsApp",
    language: "Langue",
  },
  nav: {
    home: "Accueil",
    services: "Nos services",
    blog: "Blog",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Conseil en crédit immobilier · depuis 2004",
    title: { lead: "Un bon crédit commence par", accent: "un conseiller de votre côté" },
    lead: "Chez BlancBleu, nous accompagnons les Français installés en Israël et les Israéliens, de l’étude de votre situation jusqu’à la signature en banque. En français et en hébreu, auprès des principales banques du pays.",
    primaryCta: "Premier échange gratuit",
    secondaryCta: "WhatsApp",
  },
  facts: [
    { title: "Depuis 2004", caption: "Plus de 20 ans d’expérience" },
    { title: "Français et hébreu", caption: "Toute l’équipe parle français" },
    { title: "Conseiller indépendant", caption: "Il vous représente, pas la banque" },
    { title: "Les grandes banques", caption: "Partenariats professionnels en Israël" },
  ],
  whyNotBank: {
    eyebrow: "Pourquoi pas la banque",
    title: { lead: "La banque défend ses intérêts.", accent: "Nous défendons les vôtres." },
    intro:
      "Les conseillers de la banque sont des employés de la banque et présentent ses offres. Nous ne dépendons d’aucune banque : nous vérifions, nous comparons et nous négocions pour vous.",
    points: [
      {
        title: "Nous comparons les banques",
        text: "Nous sollicitons plusieurs banques en parallèle, pour que vous ne vous contentiez pas de la première offre.",
      },
      {
        title: "Un montage taillé pour vous",
        text: "Les types de prêts (taux fixe, variable, indexé) sont choisis selon vos revenus, votre capacité et vos projets, pas selon ce qui arrange la banque.",
      },
      {
        title: "Nous maîtrisons les risques",
        text: "Nous vérifions comment vos mensualités évolueront avec les taux, l’indexation et les changements de votre vie, pour éviter les mauvaises surprises après la signature.",
      },
    ],
    mixTracks: ["Prime", "Fixe", "Indexé"],
  },
  services: {
    eyebrow: "Nos services",
    title: { lead: "Des solutions de crédit", accent: "pour chaque projet" },
    intro:
      "Que vous achetiez un bien, souhaitiez améliorer les conditions d’un prêt en cours ou ayez besoin d’un financement à de bonnes conditions, nous vous accompagnons.",
    allServices: "Tous nos services",
    learnMore: "En savoir plus",
    items: [
      {
        slug: "purchase",
        title: "Crédit pour l’achat d’un logement",
        text: "Un accompagnement complet, de la préparation du dossier à la signature en banque, avec comparaison des conditions entre les banques.",
      },
      {
        slug: "refinance",
        title: "Refinancement du prêt",
        text: "Nous analysons votre prêt actuel et construisons un nouveau montage pour alléger vos mensualités.",
      },
      {
        slug: "any-purpose",
        title: "Prêt tous usages",
        text: "Un prêt garanti par votre bien, pour des travaux, une activité ou le règlement de dettes, souvent à de meilleures conditions qu’un prêt classique.",
      },
      {
        slug: "self-build",
        title: "Crédit pour auto-construction",
        text: "Un suivi à chaque étape du financement de la maison que vous construisez, y compris les démarches auprès de la banque.",
      },
      {
        slug: "advice",
        title: "Conseil et accompagnement personnalisés",
        text: "Même si vous commencez à peine à y réfléchir : nous analysons votre situation et vous aidons à choisir la prochaine étape.",
      },
    ],
  },
  process: {
    eyebrow: "Comment ça marche",
    title: { lead: "Quatre étapes,", accent: "l’esprit tranquille." },
    intro:
      "Un déroulement structuré et précis, pour que vous avanciez vers votre logement avec des conditions qui vous servent pendant des années.",
    steps: [
      {
        title: "Un premier échange",
        text: "Une conversation claire et concrète pour comprendre votre situation et vos objectifs.",
        tag: "Gratuit",
      },
      {
        title: "Analyse et comparaison",
        text: "Nous étudions vos données et comparons les offres des différentes banques.",
      },
      {
        title: "Montage et négociation",
        text: "Nous construisons avec vous le montage du prêt et négocions avec les banques à votre place.",
      },
      {
        title: "Signature et suivi",
        text: "Nous restons à vos côtés jusqu’à la signature en banque, l’esprit tranquille.",
      },
    ],
    cta: { primary: "Premier échange gratuit", secondary: "WhatsApp" },
  },
  articles: {
    eyebrow: "Blog",
    title: { lead: "Des articles courts pour y voir clair", accent: "avant une grande décision" },
    allArticles: "Tous les articles",
    readMore: "Lire l’article",
    items: [
      {
        slug: "mortgage-refinance",
        category: "Refinancement",
        title: "Refinancer son prêt : quand et comment est-ce vraiment rentable ?",
        excerpt:
          "Refinancer, c’est modifier les conditions de votre prêt pour les adapter à votre nouvelle situation ou au marché. Voici comment savoir si c’est pour vous.",
      },
      {
        slug: "five-mistakes",
        category: "Erreurs courantes",
        title: "Les 5 plus grandes erreurs lors d’un crédit immobilier",
        excerpt:
          "Ne regarder que la mensualité, faire une confiance aveugle à la banque, renoncer à un conseil : comment éviter les erreurs les plus coûteuses.",
      },
      {
        slug: "advisor-worth-it",
        category: "Conseil indépendant",
        title: "Un conseiller en crédit immobilier vaut-il vraiment son prix ?",
        excerpt:
          "La banque ne vous représente pas, un conseiller si. Trois choses à comprendre avant de décider.",
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: { lead: "Questions fréquentes,", accent: "réponses claires." },
    intro: "Vous ne trouvez pas votre réponse ? Parlons-en, sans engagement.",
    contactLink: "Nous contacter",
    items: [
      {
        question:
          "Faut-il consulter un conseiller même quand on ne prévoit pas encore de prendre un prêt ?",
        answer:
          "Oui, c’est même recommandé. Un premier conseil permet de comprendre les termes et votre situation personnelle, et de se préparer à l’avance, côté apport comme pour les années à venir. Quand le prêt sera d’actualité, vous serez prêt.",
      },
      {
        question: "Un conseiller indépendant peut-il aider en cas de difficulté ?",
        answer:
          "Absolument. Un prêt immobilier représente une somme importante, et des difficultés peuvent survenir, par exemple lorsque votre compte bancaire est restreint. Les connaissances et l’expérience d’un conseiller font la différence, et de petits écarts de conditions pèsent lourd sur la durée.",
      },
      {
        question: "Un conseiller indépendant est-il préférable à celui de la banque ?",
        answer:
          "Les conseillers de la banque sont des employés de la banque, leur approche diffère donc de celle d’un conseiller qui agit dans votre intérêt. Avec un conseiller indépendant, vous pouvez partager librement toutes les informations utiles, et il reste disponible autant que nécessaire, pas seulement pour un rendez-vous court.",
      },
      {
        question: "Qu’est-ce que la gestion du risque, et comment un conseiller aide-t-il ?",
        answer:
          "La banque évalue votre niveau de risque en tant qu’emprunteur, et vous devez aussi peser les risques et décider avec prudence. Par exemple, répartir le prêt entre plusieurs types de taux réduit le risque sur toute la durée de remboursement. Un conseiller vous aide à construire ce montage.",
      },
      {
        question: "Jusqu’où va le conseil ?",
        answer:
          "Bien au-delà de l’achat d’un logement : refinancement, transfert du prêt sur un nouveau bien, report d’échéances, et situations particulières qui changent le scénario. Vous obtenez une vision complète et objective, en tenant compte de votre situation.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Commençons",
    title: { lead: "Prêt pour la prochaine étape ?", accent: "Commençons par un échange." },
    intro:
      "Laissez-nous vos coordonnées et nous vous rappellerons, ou écrivez-nous sur WhatsApp. Le premier échange est gratuit.",
    channels: {
      email: "E-mail",
      phoneIsrael: "Téléphone Israël",
      phoneFrance: "Téléphone France",
      whatsapp: "WhatsApp",
      whatsappAction: "Écrivez-nous",
    },
    formTitle: "Laissez-nous vos coordonnées",
    formBadge: "Gratuit",
    form: {
      name: "Nom complet",
      phone: "Téléphone",
      email: "E-mail",
      message: "Comment pouvons-nous vous aider ?",
      optional: "facultatif",
      submit: "Envoyer",
      sending: "Envoi…",
      consent:
        "En envoyant ce formulaire, vous acceptez que nous vous recontactions à l’aide des coordonnées fournies.",
      privacy: "Politique de confidentialité",
      invalidName: "Indiquez votre nom",
      invalidEmail: "Indiquez une adresse e-mail valide",
      error:
        "Un problème est survenu à l’envoi. Réessayez, ou contactez-nous directement par téléphone ou par e-mail.",
      success: { title: "Merci, c’est bien reçu", text: "Nous vous répondrons dans les meilleurs délais." },
    },
  },
  footer: {
    tagline: "Conseil en crédit immobilier, depuis 2004",
    navigation: "Navigation",
    information: "Informations",
    contact: "Contact",
    accessibility: "Accessibilité",
    privacy: "Confidentialité",
    terms: "Conditions d’utilisation",
    rights: "Tous droits réservés à BlancBleu",
    backToTop: "Retour en haut",
  },
} as const satisfies Dictionary;

