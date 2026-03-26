export type Lang = "fr" | "en";

export function detectLang(): Lang {
  const nav = typeof navigator !== "undefined" ? navigator.language || "" : "";
  return nav.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export const translations = {
  fr: {
    nav: {
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      premium: "METABO+",
      privacy: "Confidentialité",
      download: "Télécharger",
    },
    hero: {
      tagline: "Tes données de santé, enfin lisibles.",
      sub: "METABO AI transforme les chiffres bruts d'Apple Santé en un tableau de bord clair — pour que tu comprennes ton corps d'un seul coup d'œil, chaque matin.",
      cta: "Télécharger sur l'App Store",
      badge: "Disponible sur iOS",
    },
    features: {
      title: "Des données complexes, une lecture simple",
      subtitle: "METABO AI fait le travail d'interprétation à ta place.",
      items: [
        {
          name: "Score de récupération",
          desc: "Un chiffre unique et clair chaque matin, calculé à partir de ta VFC, ton sommeil et ta fréquence cardiaque au repos. Plus besoin de tout décortiquer toi-même.",
        },
        {
          name: "Analyse du sommeil",
          desc: "Tes nuits résumées en un instant. Visualise la qualité de ton sommeil et comprends directement ce qu'il signifie pour ta journée.",
        },
        {
          name: "Détection des tendances",
          desc: "METABO AI lit l'évolution de tes données sur la durée et t'avertit quand quelque chose mérite ton attention, avant que tu ne le ressentes.",
        },
        {
          name: "METABO+ Premium",
          desc: "Historique complet, graphiques détaillés et alertes personnalisées — pour aller encore plus loin dans la compréhension de tes données.",
        },
      ],
    },
    howItWorks: {
      title: "Simple. Automatique. Lisible.",
      subtitle: "Trois étapes pour que tes données de santé aient enfin du sens.",
      steps: [
        {
          num: "01",
          title: "Connecte Apple Santé",
          desc: "Autorise l'accès à tes données en quelques secondes. Aucun compte à créer, aucune saisie manuelle.",
        },
        {
          num: "02",
          title: "METABO AI analyse",
          desc: "Chaque matin, l'application lit, interprète et synthétise tes données de la nuit en un score facile à comprendre.",
        },
        {
          num: "03",
          title: "Tu comprends, tu décides",
          desc: "En un coup d'œil, tu sais où tu en es. Des indications claires te guident pour la journée, sans jargon technique.",
        },
      ],
    },
    premium: {
      title: "METABO+",
      subtitle: "Pour aller plus loin dans la lecture de tes données.",
      monthly: "Mensuel",
      annual: "Annuel",
      annualSave: "Économise 33%",
      monthlyPrice: "€4,99",
      annualPrice: "€39,99",
      perMonth: "/ mois",
      perYear: "/ an",
      cta: "Essayer METABO+",
      freeLabel: "Gratuit",
      premiumLabel: "METABO+",
      comparison: [
        { feature: "Score de récupération quotidien", free: true, premium: true },
        { feature: "Analyse du sommeil", free: true, premium: true },
        { feature: "Historique 7 jours", free: true, premium: false },
        { feature: "Historique illimité", free: false, premium: true },
        { feature: "Détection des tendances", free: false, premium: true },
        { feature: "Alertes personnalisées", free: false, premium: true },
        { feature: "Graphiques détaillés", free: false, premium: true },
        { feature: "Analyse approfondie", free: false, premium: true },
      ],
    },
    privacy: {
      title: "Tes données restent sur ton appareil",
      subtitle: "Zéro serveur. Zéro collecte. Zéro compromis.",
      body: "METABO AI est conçu autour d'un principe simple : tes données de santé t'appartiennent. Toutes les analyses sont effectuées localement sur ton iPhone. Aucune donnée ne quitte jamais ton appareil. Nous ne collectons, ne stockons et ne partageons rien.",
      link: "Lire la politique de confidentialité",
    },
    footer: {
      tagline: "Tes données de santé, enfin faciles à lire.",
      contact: "contact@metabo-ai.com",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it works",
      premium: "METABO+",
      privacy: "Privacy",
      download: "Download",
    },
    hero: {
      tagline: "Your health data, finally easy to read.",
      sub: "METABO AI turns raw Apple Health numbers into a clear, simple dashboard — so you understand your body at a glance, every morning.",
      cta: "Download on the App Store",
      badge: "Available on iOS",
    },
    features: {
      title: "Complex data, simple reading",
      subtitle: "METABO AI does the interpretation work for you.",
      items: [
        {
          name: "Recovery Score",
          desc: "One clear number every morning, calculated from your HRV, sleep, and resting heart rate. No need to figure it all out yourself.",
        },
        {
          name: "Sleep Analysis",
          desc: "Your nights summarized in an instant. See the quality of your sleep and understand directly what it means for your day.",
        },
        {
          name: "Trend Detection",
          desc: "METABO AI reads how your data evolves over time and alerts you when something deserves attention — before you feel it.",
        },
        {
          name: "METABO+ Premium",
          desc: "Full history, detailed charts, and personalized alerts — to go even further in understanding your data.",
        },
      ],
    },
    howItWorks: {
      title: "Simple. Automatic. Readable.",
      subtitle: "Three steps to make your health data finally make sense.",
      steps: [
        {
          num: "01",
          title: "Connect Apple Health",
          desc: "Grant access to your data in seconds. No account to create, no manual entry.",
        },
        {
          num: "02",
          title: "METABO AI analyzes",
          desc: "Every morning, the app reads, interprets, and synthesizes your overnight data into an easy-to-understand score.",
        },
        {
          num: "03",
          title: "You understand, you decide",
          desc: "At a glance, you know where you stand. Clear guidance for your day — no technical jargon.",
        },
      ],
    },
    premium: {
      title: "METABO+",
      subtitle: "Go further in reading and understanding your data.",
      monthly: "Monthly",
      annual: "Annual",
      annualSave: "Save 33%",
      monthlyPrice: "€4.99",
      annualPrice: "€39.99",
      perMonth: "/ month",
      perYear: "/ year",
      cta: "Try METABO+",
      freeLabel: "Free",
      premiumLabel: "METABO+",
      comparison: [
        { feature: "Daily recovery score", free: true, premium: true },
        { feature: "Sleep analysis", free: true, premium: true },
        { feature: "7-day history", free: true, premium: false },
        { feature: "Unlimited history", free: false, premium: true },
        { feature: "Trend detection", free: false, premium: true },
        { feature: "Personalized alerts", free: false, premium: true },
        { feature: "Detailed charts", free: false, premium: true },
        { feature: "In-depth analysis", free: false, premium: true },
      ],
    },
    privacy: {
      title: "Your data stays on your device",
      subtitle: "Zero servers. Zero collection. Zero compromise.",
      body: "METABO AI is built on a simple principle: your health data belongs to you. All analysis is performed locally on your iPhone. No data ever leaves your device. We collect, store, and share nothing.",
      link: "Read the privacy policy",
    },
    footer: {
      tagline: "Your health data, finally easy to read.",
      contact: "contact@metabo-ai.com",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      rights: "All rights reserved.",
    },
  },
};

export type Translations = typeof translations.fr;
