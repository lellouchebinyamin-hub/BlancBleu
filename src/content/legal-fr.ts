import { site } from "@/lib/site";

import type { Dictionary } from "./types";

const updated = "Dernière mise à jour : novembre 2026";

/**
 * Policy texts for the French site, matching legal-he.ts. A starting point to be reviewed
 * by the firm's legal adviser before the site goes public.
 */
export const legalFr: Dictionary["legal"] = {
  contentsTitle: "Sur cette page",
  contactTitle: "Une question sur ce document ? Écrivez-nous",

  privacy: {
    meta: {
      title: "Politique de confidentialité | BlancBleu",
      description:
        "Quelles données BlancBleu collecte sur ce site, pourquoi, combien de temps elles sont conservées et quels sont vos droits.",
    },
    eyebrow: "Informations légales",
    title: "Politique de confidentialité",
    intro:
      "Votre vie privée compte pour nous. Cette page explique simplement quelles données sont collectées lorsque vous utilisez le site, pourquoi nous en avons besoin et ce que vous pouvez en faire.",
    updated,
    sections: [
      {
        heading: "Qui sommes-nous",
        blocks: [
          {
            type: "p",
            text: "BlancBleu (« nous ») propose depuis 2004 un conseil indépendant en crédit immobilier. Cette politique s’applique à notre site et aux demandes qui nous parviennent par son intermédiaire.",
          },
        ],
      },
      {
        heading: "Les données que nous collectons",
        blocks: [
          { type: "h3", text: "Les données que vous nous transmettez" },
          {
            type: "p",
            text: "Lorsque vous remplissez le formulaire de contact, vous nous indiquez votre nom, votre numéro de téléphone, votre adresse e-mail (selon le cas) et un message libre. Il en va de même lorsque vous nous écrivez ou nous appelez directement.",
          },
          { type: "h3", text: "Les données techniques" },
          {
            type: "p",
            text: "Comme sur la plupart des sites, les serveurs d’hébergement peuvent enregistrer des données techniques de navigation, telles que l’adresse IP, le type de navigateur et les pages consultées, à des fins de sécurité et de bon fonctionnement du site.",
          },
          { type: "h3", text: "Les réglages conservés dans votre navigateur" },
          {
            type: "p",
            text: "Les réglages du menu d’accessibilité, ainsi que le fait que vous ayez déjà vu l’écran d’introduction, sont conservés uniquement dans votre navigateur. Ils ne nous sont pas transmis.",
          },
        ],
      },
      {
        heading: "Cookies et publicité",
        blocks: [
          {
            type: "p",
            text: "À la date de mise à jour de cette politique, le site n’utilise pas de cookies publicitaires ou de suivi, et n’intègre aucun outil d’analyse ou de publicité tiers. Si nous en ajoutons, nous mettrons cette politique à jour et demanderons votre accord lorsque la loi l’exige.",
          },
        ],
      },
      {
        heading: "Pourquoi nous utilisons ces données",
        blocks: [
          {
            type: "list",
            items: [
              "Vous recontacter à la suite d’une demande et répondre à vos questions.",
              "Vous conseiller et vous accompagner, si vous décidez d’avancer avec nous.",
              "Faire fonctionner, améliorer et sécuriser le site.",
              "Respecter nos obligations légales.",
            ],
          },
          {
            type: "p",
            text: "Nous ne vous enverrons pas de communications commerciales sans votre accord, et nous ne vendons pas vos coordonnées.",
          },
        ],
      },
      {
        heading: "À qui les données sont-elles transmises",
        blocks: [
          {
            type: "p",
            text: "Vos données peuvent être transmises à des prestataires qui nous aident à faire fonctionner le site et le service, comme l’hébergement du site et les outils de gestion des demandes et de messagerie. Ils sont tenus de les protéger. Nous communiquerons aussi des données si la loi nous y oblige.",
          },
          {
            type: "p",
            text: "Certains prestataires opèrent hors d’Israël : vos données peuvent donc être traitées sur des serveurs situés en dehors d’Israël.",
          },
        ],
      },
      {
        heading: "Sécurité et durée de conservation",
        blocks: [
          {
            type: "p",
            text: "Nous mettons en œuvre des mesures de sécurité raisonnables, mais aucune méthode n’est infaillible. Nous conservons vos données le temps nécessaire au traitement de votre demande et à la relation professionnelle, et pendant la durée exigée par la loi.",
          },
        ],
      },
      {
        heading: "Vos droits",
        blocks: [
          {
            type: "p",
            text: "Selon la loi israélienne sur la protection de la vie privée (1981), vous pouvez demander à consulter les données conservées à votre sujet, à les corriger ou à les faire supprimer, dans les limites de la loi. Si vous résidez dans l’Union européenne, d’autres droits peuvent s’appliquer en vertu du RGPD.",
          },
          {
            type: "p",
            text: `Pour cela, écrivez-nous à ${site.email} et nous vous répondrons rapidement.`,
          },
        ],
      },
      {
        heading: "Liens externes et mineurs",
        blocks: [
          {
            type: "p",
            text: "Le site peut renvoyer vers des services tiers, comme WhatsApp. Chacun dispose de sa propre politique de confidentialité, dont nous ne sommes pas responsables. Le site s’adresse aux adultes et nous ne collectons pas sciemment de données concernant des mineurs.",
          },
        ],
      },
      {
        heading: "Modifications de cette politique",
        blocks: [
          {
            type: "p",
            text: "Nous pouvons mettre cette politique à jour de temps à autre. La version en vigueur figure toujours sur cette page, avec sa date de dernière mise à jour.",
          },
        ],
      },
    ],
  },

  terms: {
    meta: {
      title: "Conditions d’utilisation | BlancBleu",
      description:
        "Les conditions d’utilisation du site BlancBleu : nature des informations, propriété intellectuelle, limitation de responsabilité et droit applicable.",
    },
    eyebrow: "Informations légales",
    title: "Conditions d’utilisation",
    intro:
      "L’utilisation du site est soumise aux conditions ci-dessous. Elles sont courtes et claires, et visent à préserver l’équité entre toutes les parties.",
    updated,
    sections: [
      {
        heading: "Acceptation des conditions",
        blocks: [
          {
            type: "p",
            text: "En accédant au site et en l’utilisant, vous acceptez ces conditions ainsi que la politique de confidentialité. Si vous n’êtes pas d’accord, merci de ne pas utiliser le site.",
          },
        ],
      },
      {
        heading: "Informations générales, pas de conseil personnalisé",
        blocks: [
          {
            type: "p",
            text: "Les contenus du site, y compris les articles, les exemples et les chiffres, sont fournis pour présenter le sujet et à titre d’illustration uniquement. Ils ne constituent ni un conseil financier, juridique, fiscal ou en investissement, ni une offre, ni un engagement sur un résultat.",
          },
          {
            type: "p",
            text: "Les taux, les conditions des banques et les règles de droit évoluent, et les résultats réels dépendent de la situation de chacun. Une décision relative à un prêt immobilier doit reposer sur une analyse personnelle et détaillée.",
          },
        ],
      },
      {
        heading: "Une prise de contact n’est pas un contrat",
        blocks: [
          {
            type: "p",
            text: "Une demande envoyée via le site, voire un premier échange, ne crée pas nécessairement une relation de conseil. Une collaboration professionnelle ne débute qu’avec l’accord exprès des parties.",
          },
        ],
      },
      {
        heading: "Exactitude et actualité",
        blocks: [
          {
            type: "p",
            text: "Nous nous efforçons de publier des informations exactes et à jour, mais nous ne garantissons ni l’absence d’erreurs ni une actualité permanente. Vérifiez les points essentiels auprès de votre banque ou d’un professionnel avant d’agir.",
          },
        ],
      },
      {
        heading: "Propriété intellectuelle",
        blocks: [
          {
            type: "p",
            text: "Tous les contenus du site, notamment les textes, le design, le logo, les illustrations et le code, appartiennent à BlancBleu ou à des tiers qui nous ont autorisés à les utiliser. Vous pouvez les consulter pour votre usage personnel. Toute copie, diffusion ou publication, totale ou partielle, nécessite notre accord préalable écrit.",
          },
        ],
      },
      {
        heading: "Utilisation loyale du site",
        blocks: [
          {
            type: "list",
            items: [
              "Ne pas nuire au fonctionnement ou à la sécurité du site.",
              "Ne pas transmettre d’informations fausses, ni celles d’une autre personne sans son autorisation.",
              "Ne pas utiliser les contenus du site à des fins illégales.",
            ],
          },
        ],
      },
      {
        heading: "Liens vers des tiers",
        blocks: [
          {
            type: "p",
            text: "Le site peut contenir des liens vers des sites et services que nous ne contrôlons pas. Nous ne sommes responsables ni de leur contenu ni de l’usage que vous en faites.",
          },
        ],
      },
      {
        heading: "Limitation de responsabilité",
        blocks: [
          {
            type: "p",
            text: "Le site et ses contenus sont fournis « en l’état ». Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages directs ou indirects résultant de l’utilisation du site, de la confiance accordée à son contenu ou d’une interruption temporaire de son fonctionnement.",
          },
        ],
      },
      {
        heading: "Modification des conditions",
        blocks: [
          {
            type: "p",
            text: "Nous pouvons mettre ces conditions à jour de temps à autre. La version en vigueur est publiée sur cette page, et l’utilisation continue du site vaut acceptation.",
          },
        ],
      },
      {
        heading: "Droit applicable et juridiction",
        blocks: [
          {
            type: "p",
            text: "Ces conditions sont régies par le droit israélien. Les tribunaux compétents d’Israël ont compétence exclusive pour tout litige lié au site.",
          },
        ],
      },
    ],
  },

  accessibility: {
    meta: {
      title: "Déclaration d’accessibilité | BlancBleu",
      description:
        "Les adaptations et les outils que le site de BlancBleu propose pour un usage accessible, et comment nous contacter à ce sujet.",
    },
    eyebrow: "Informations légales",
    title: "Déclaration d’accessibilité",
    intro:
      "Nous voulons que chacun puisse utiliser ce site avec confort et en toute autonomie, quelles que soient ses capacités ou les outils qu’il utilise.",
    updated,
    sections: [
      {
        heading: "Notre engagement",
        blocks: [
          {
            type: "p",
            text: "BlancBleu attache de l’importance à un service égalitaire et accessible à tous, y compris aux personnes en situation de handicap. Nous nous efforçons de rendre le site conforme à la norme israélienne SI 5568, niveau AA, fondée sur les recommandations WCAG 2.1, et à la réglementation israélienne sur l’égalité des droits des personnes handicapées (adaptations d’accessibilité des services, 2013).",
          },
        ],
      },
      {
        heading: "Adaptations réalisées",
        blocks: [
          {
            type: "list",
            items: [
              "Navigation complète au clavier, avec un lien « Aller au contenu » en haut de chaque page.",
              "Structure de titres et balises sémantiques, avec un étiquetage adapté aux lecteurs d’écran.",
              "Illustrations décoratives masquées aux technologies d’assistance ; chaque champ de formulaire a une étiquette et un message d’erreur clair.",
              "Contrastes de couleurs confortables et indication claire de l’élément ciblé.",
              "Respect de la préférence du système pour la réduction des animations : elles sont atténuées ou supprimées.",
              "Langue de la page et sens de lecture définis, en hébreu (de droite à gauche) et en français (de gauche à droite).",
              "Boutons et liens de taille adaptée au clic et au toucher.",
            ],
          },
        ],
      },
      {
        heading: "Le menu d’accessibilité",
        blocks: [
          {
            type: "p",
            text: "Chaque page comporte un bouton d’accessibilité fixe dans un coin de l’écran. Il permet d’agrandir ou de réduire le texte, d’activer un contraste élevé ou les niveaux de gris, de souligner les liens, de passer à une police lisible et d’arrêter les animations. Les réglages sont conservés dans votre navigateur pour vos prochaines visites et peuvent être réinitialisés à tout moment.",
          },
        ],
      },
      {
        heading: "Navigateurs et technologies d’assistance",
        blocks: [
          {
            type: "p",
            text: "Le site est conçu pour fonctionner avec les navigateurs récents et les technologies d’assistance courantes, comme les lecteurs d’écran et l’usage exclusif du clavier.",
          },
        ],
      },
      {
        heading: "Limites connues",
        blocks: [
          {
            type: "p",
            text: "Malgré nos efforts, certaines zones ou certains contenus, par exemple ceux de tiers, peuvent ne pas être entièrement accessibles. Nous continuons à vérifier et à améliorer le site, et nous serons heureux d’être informés de toute difficulté.",
          },
        ],
      },
      {
        heading: "Nous signaler un problème",
        blocks: [
          {
            type: "p",
            text: `Vous rencontrez une difficulté ou avez une suggestion ? Écrivez-nous à ${site.email}${
              site.phones.il ? ` ou appelez le ${site.phones.il.display}` : ""
            }. Indiquez l’adresse de la page, la description du problème et vos coordonnées : nous ferons de notre mieux pour traiter votre demande rapidement.`,
          },
        ],
      },
    ],
  },
};
