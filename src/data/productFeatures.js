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
      "Page unique conçue pour présenter une offre précise et convertir le visiteur en prospect ou en client.",
    features: ["core", "none", "none", "none", "none", "optional", "optional", "none", "optional", "optional", "none"],
  },
  {
    type: "Site vitrine",
    description:
      "Site qui présente une activité, ses services, ses réalisations et ses coordonnées de façon claire et professionnelle.",
    features: ["core", "none", "optional", "optional", "none", "optional", "optional", "none", "optional", "optional", "none"],
  },
  {
    type: "Site e-commerce",
    description:
      "Boutique en ligne permettant de vendre des produits ou services, gérer les commandes et encaisser les paiements.",
    features: ["core", "core", "optional", "optional", "core", "core", "core", "optional", "optional", "optional", "optional"],
  },
  {
    type: "Application web",
    description:
      "Logiciel accessible depuis un navigateur, avec des fonctionnalités interactives adaptées à un usage régulier.",
    features: ["optional", "core", "optional", "optional", "optional", "optional", "core", "optional", "optional", "optional", "optional"],
  },
  {
    type: "Application mobile",
    description:
      "Application installable sur smartphone, pensée pour un usage mobile, rapide et adapté au quotidien.",
    features: ["optional", "core", "optional", "core", "core", "optional", "core", "optional", "optional", "optional", "optional"],
  },
  {
    type: "Application métier",
    description:
      "Outil sur mesure conçu pour digitaliser, simplifier ou automatiser un processus propre à une activité.",
    features: ["optional", "core", "core", "optional", "core", "optional", "core", "core", "optional", "optional", "optional"],
  },
  {
    type: "CRM",
    description:
      "Outil de gestion de la relation client pour centraliser les contacts, échanges, opportunités et actions commerciales.",
    features: ["core", "core", "core", "optional", "core", "optional", "core", "core", "optional", "optional", "optional"],
  },
  {
    type: "ERP / progiciel",
    description:
      "Système intégré qui centralise plusieurs fonctions de l’entreprise : stocks, facturation, ressources ou planification.",
    features: ["optional", "core", "core", "optional", "core", "optional", "core", "core", "optional", "optional", "optional"],
  },
  {
    type: "SaaS",
    description:
      "Logiciel en ligne accessible sans installation, souvent par abonnement, pensé pour plusieurs utilisateurs et évolutif.",
    features: ["optional", "core", "optional", "optional", "core", "core", "core", "core", "optional", "optional", "optional"],
  },
]
