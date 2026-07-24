export const FEATURE_COLUMNS = [
  "Formulaire de contact",
  "Authentification",
  "Upload de fichiers",
  "Géolocalisation",
  "Notifications",
  "Paiement",
  "API",
  "Export de fichiers",
  "Réservation en ligne",
  "IA / chatbot",
  "Vocal",
]

export const FEATURE_LEVELS = {
  core: { symbol: "●", label: "généralement indispensable" },
  optional: { symbol: "○", label: "fréquent ou utile selon le projet" },
  none: { symbol: "—", label: "rarement nécessaire" },
}

export const PRODUCT_FEATURES = [
  {
    type: "Landing page",
    description:
      "Page unique conçue pour présenter une offre et convertir le visiteur en contact ou en client.",
    features: ["core", "none", "none", "none", "none", "optional", "optional", "none", "optional", "optional", "none"],
  },
  {
    type: "Site vitrine",
    description:
      "Site multi-pages qui présente une activité, ses services et ses coordonnées de façon claire et professionnelle.",
    features: ["core", "none", "optional", "optional", "none", "optional", "optional", "none", "optional", "optional", "none"],
  },
  {
    type: "Site e-commerce",
    description:
      "Boutique en ligne permettant de vendre des produits ou services, gérer un panier et encaisser des paiements.",
    features: ["core", "core", "optional", "optional", "core", "core", "core", "optional", "optional", "optional", "optional"],
  },
  {
    type: "Blog / site éditorial",
    description:
      "Espace de publication régulière d’articles, actualités ou contenus pour informer et fidéliser une audience.",
    features: ["core", "optional", "core", "none", "optional", "optional", "optional", "optional", "none", "optional", "optional"],
  },
  {
    type: "Application web",
    description:
      "Logiciel accessible via le navigateur, avec des fonctionnalités interactives adaptées à un usage récurrent.",
    features: ["optional", "core", "optional", "optional", "optional", "optional", "core", "optional", "optional", "optional", "optional"],
  },
  {
    type: "Application mobile",
    description:
      "Application conçue pour smartphone, installable et pensée pour un usage nomade au quotidien.",
    features: ["optional", "core", "optional", "core", "core", "optional", "core", "optional", "optional", "optional", "optional"],
  },
  {
    type: "Application métier",
    description:
      "Outil sur mesure qui digitalise un processus interne propre à une activité ou une organisation.",
    features: ["optional", "core", "core", "optional", "core", "optional", "core", "core", "optional", "optional", "optional"],
  },
  {
    type: "CRM",
    description:
      "Outil de gestion de la relation client pour suivre contacts, échanges, opportunités et historique commercial.",
    features: ["core", "core", "core", "optional", "core", "optional", "core", "core", "optional", "optional", "optional"],
  },
  {
    type: "ERP / progiciel",
    description:
      "Système intégré qui centralise plusieurs fonctions de l’entreprise (stocks, facturation, ressources, etc.).",
    features: ["optional", "core", "core", "optional", "core", "optional", "core", "core", "optional", "optional", "optional"],
  },
  {
    type: "SaaS",
    description:
      "Logiciel hébergé dans le cloud, accessible en abonnement, multi-utilisateurs et évolutif.",
    features: ["optional", "core", "optional", "optional", "core", "core", "core", "core", "optional", "optional", "optional"],
  },
  {
    type: "Dashboard",
    description:
      "Tableau de bord qui visualise des indicateurs et données clés pour piloter une activité.",
    features: ["none", "core", "optional", "optional", "optional", "none", "core", "core", "none", "optional", "optional"],
  },
  {
    type: "Outil de réservation",
    description:
      "Interface pour planifier et réserver des créneaux, prestations ou ressources en ligne.",
    features: ["core", "core", "optional", "optional", "core", "core", "core", "optional", "core", "optional", "optional"],
  },
  {
    type: "Plateforme communautaire",
    description:
      "Espace en ligne où les membres échangent, publient et interagissent autour d’un intérêt commun.",
    features: ["core", "core", "core", "optional", "core", "optional", "core", "optional", "optional", "optional", "optional"],
  },
  {
    type: "Application de suivi terrain",
    description:
      "Outil mobile pour remonter des données, interventions ou observations depuis le terrain.",
    features: ["optional", "core", "core", "core", "core", "optional", "core", "core", "optional", "optional", "optional"],
  },
]
