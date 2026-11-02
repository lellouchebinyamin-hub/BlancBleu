import { postsFr } from "./blog-fr";
import { legalFr } from "./legal-fr";
import type { Dictionary } from "./types";

export const fr = {
  meta: {
    title: "BlancBleu | Conseil en crédit immobilier, depuis 2004",
    description:
      "BlancBleu : conseil indépendant en crédit immobilier, depuis 2004. Un accompagnement pour les francophones et les Israéliens, en français et en hébreu.",
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
    lead: "Chez BlancBleu, nous accompagnons les francophones et les Israéliens, de l’étude de votre situation jusqu’à la signature en banque. En français et en hébreu, auprès des principales banques du pays.",
    primaryCta: "Premier échange gratuit",
    secondaryCta: "WhatsApp",
  },
  facts: [
    { title: "Depuis 2004", caption: "Plus de 20 ans d’expérience" },
    { title: "Français et hébreu", caption: "Toute l’équipe parle français" },
    { title: "Conseiller indépendant", caption: "Il vous représente, pas la banque" },
    { title: "Les grandes banques", caption: "Partenariats professionnels en Israël" },
  ],
  servicesPage: {
    meta: {
      title: "Nos services | BlancBleu",
      description:
        "Conseil indépendant en crédit immobilier : achat, refinancement, prêt tous usages, auto-construction et accompagnement personnalisé. En français et en hébreu, depuis 2004.",
    },
    eyebrow: "Nos services",
    title: { lead: "Des solutions de crédit", accent: "pour chaque projet" },
    intro:
      "Nous vous conseillons et vous accompagnons dans tous vos projets de crédit immobilier, avec une solution adaptée à chaque situation : achat, refinancement, prêt garanti par un bien ou construction.",
    jumpLabel: "Aller au service",
    includes: "Ce que comprend le service",
    audience: "À qui il s’adresse",
    cta: "Premier échange gratuit",
    items: [
      {
        slug: "purchase",
        lead: "Acheter un logement est l’une des décisions financières les plus importantes de la vie. Nous vous aidons à choisir le prêt le plus avantageux, en tenant compte de votre capacité de remboursement, des taux et de votre situation future.",
        includes: [
          "Un accompagnement complet, de la préparation à la signature en banque",
          "Une comparaison des conditions entre les banques",
          "Une stratégie de financement sur mesure",
        ],
        audience: ["Primo-accédants", "Investisseurs immobiliers", "Ceux qui cherchent à changer de logement"],
      },
      {
        slug: "refinance",
        lead: "Si vous avez déjà un prêt, vous payez peut-être plus que nécessaire. Nous vérifions s’il est possible d’en améliorer les conditions et d’alléger vos mensualités.",
        includes: [
          "L’analyse de votre prêt actuel",
          "La comparaison des taux et des pistes d’économie",
          "La construction d’un nouveau montage, plus avantageux",
        ],
        audience: [
          "Les détenteurs d’un prêt aux conditions moins favorables",
          "Ceux qui veulent réduire leur mensualité",
          "Ceux dont les revenus ont changé et qui veulent adapter leur prêt",
        ],
      },
      {
        slug: "any-purpose",
        lead: "Besoin de financer le développement d’une activité, des travaux ou le règlement de dettes ? Le prêt tous usages est un prêt garanti par votre bien, souvent à de meilleures conditions qu’un prêt classique.",
        includes: [
          "Des taux souvent plus bas que ceux des prêts bancaires classiques",
          "Des mensualités adaptées à votre situation",
          "La possibilité d’obtenir des montants élevés, souvent sans caution",
        ],
        audience: [
          "Ceux qui ont besoin d’une somme importante",
          "Les propriétaires qui veulent valoriser leur bien",
          "Les chefs d’entreprise qui cherchent un financement",
        ],
      },
      {
        slug: "self-build",
        lead: "Vous projetez de construire la maison de vos rêves ? Nous vous accompagnons dans l’obtention du financement, nous nous efforçons d’obtenir de bonnes conditions et nous vous aidons à gérer les démarches.",
        includes: [
          "Un conseil professionnel à chaque étape du financement",
          "Un montage de financement sur mesure",
          "Un suivi auprès de la banque et des intervenants concernés",
        ],
        audience: [
          "Ceux qui prévoient de construire sur un terrain privé",
          "Ceux qui ont déjà commencé et ont besoin d’un financement pour la suite",
          "Les familles qui veulent maîtriser leur budget de construction",
        ],
      },
      {
        slug: "advice",
        lead: "Même si vous commencez à peine à réfléchir à un prêt, un conseil professionnel vous aide à comprendre toutes les options. Nous vous aidons à préparer la prochaine étape de façon claire et précise.",
        includes: [
          "L’analyse de votre situation financière",
          "Le choix d’un prêt adapté",
          "Des recommandations pour épargner à l’avenir",
        ],
        audience: [
          "Ceux qui prévoient de prendre un prêt prochainement",
          "Ceux qui veulent changer de logement et comprendre les options",
          "Ceux qui ont déjà un prêt et veulent savoir s’il est améliorable",
        ],
      },
    ],
  },
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
  },
  contact: {
    meta: {
      title: "Contact | BlancBleu",
      description:
        "Laissez-nous vos coordonnées et nous vous rappellerons, ou contactez-nous par téléphone, e-mail ou WhatsApp. Le premier échange est gratuit, en français ou en hébreu.",
    },
    eyebrow: "Contact",
    title: { lead: "Une question sur votre prêt ?", accent: "Parlons-en." },
    intro:
      "Laissez-nous vos coordonnées et nous vous rappellerons, ou contactez-nous directement. Le premier échange est gratuit, en français ou en hébreu.",
    steps: {
      eyebrow: "Comment ça marche",
      title: { lead: "Trois étapes", accent: "pour y voir clair." },
      intro:
        "Aucune préparation particulière n’est nécessaire. Quelques mots sur votre situation et votre projet suffisent pour commencer.",
      steps: [
        {
          title: "Vous nous écrivez",
          text: "Vous remplissez le formulaire ou vous nous contactez directement, en expliquant brièvement de quoi il s’agit.",
        },
        {
          title: "Un premier échange",
          text: "Nous vous rappelons, en français ou en hébreu, pour comprendre votre situation, votre projet et ce qui compte pour vous.",
          tag: "Gratuit",
        },
        {
          title: "Analyse et proposition",
          text: "Nous étudions vos données, comparons les banques et vous présentons la meilleure façon d’avancer.",
        },
      ],
    },
  },
  legal: legalFr,
  a11y: {
    open: "Menu d’accessibilité",
    title: "Accessibilité",
    close: "Fermer",
    textSize: "Taille du texte",
    smaller: "Réduire le texte",
    larger: "Agrandir le texte",
    contrast: "Contraste élevé",
    grayscale: "Niveaux de gris",
    links: "Souligner les liens",
    readable: "Police lisible",
    still: "Arrêter les animations",
    reset: "Réinitialiser",
    statement: "Déclaration d’accessibilité",
  },
  blog: {
    meta: {
      title: "Blog | BlancBleu",
      description:
        "Des articles courts et clairs sur le refinancement, les taux, le montage du prêt et le conseil indépendant, pour aborder la grande décision en confiance.",
    },
    eyebrow: "Blog",
    title: { lead: "Le savoir qui fait économiser,", accent: "en langage simple." },
    intro:
      "Des articles courts et clairs sur le refinancement, les taux, le montage du prêt et le conseil indépendant, pour aborder la grande décision en confiance.",
    featured: "À la une",
    minutes: "min de lecture",
    back: "Retour au blog",
    summaryTitle: "En bref : l’essentiel à retenir",
    contentsTitle: "Dans cet article",
    bottomLineTitle: "En résumé",
    relatedTitle: "D’autres articles qui peuvent vous intéresser",
    posts: postsFr,
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

