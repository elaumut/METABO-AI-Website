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
      secondaryCta: "Voir comment ça marche",
      badge: "Disponible sur iPhone",
      mockup: {
        today: "Aujourd'hui",
        scoreLabel: "Score de Récupération",
        optimal: "Optimal",
        sleep: "Sommeil",
        hrv: "VFC",
        trend: "Tendance",
      },
    },
    features: {
      title: "Des données complexes, une lecture simple",
      subtitle: "METABO AI fait le travail d'interprétation à ta place.",
      items: [
        {
          name: "Score de récupération",
          desc: "Un chiffre unique chaque matin — calculé depuis ta VFC, ton sommeil et ta fréquence cardiaque au repos.",
        },
        {
          name: "Analyse du sommeil",
          desc: "Tes nuits résumées en un instant. Comprends directement ce que ton sommeil signifie pour ta journée.",
        },
        {
          name: "Détection des tendances",
          desc: "METABO AI lit l'évolution de tes données et t'avertit avant que tu ne ressentes la fatigue.",
        },
      ],
    },
    howItWorks: {
      title: "Simple. Automatique. Lisible.",
      subtitle: "Trois étapes pour que tes données de santé aient enfin du sens.",
      steps: [
        {
          num: "1",
          title: "Connecte Apple Santé",
          desc: "En quelques secondes, aucun compte requis.",
        },
        {
          num: "2",
          title: "METABO AI analyse",
          desc: "L'app lit, interprète et synthétise tes données chaque matin.",
        },
        {
          num: "3",
          title: "Tu comprends, tu décides",
          desc: "Un coup d'œil suffit. Des indications claires, sans jargon.",
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
      billedMonthly: "Facturé mensuellement",
      billedAnnually: "Facturé annuellement",
      cta: "Essayer METABO+",
      freeLabel: "Gratuit",
      premiumLabel: "METABO+",
      seeAll: "Voir toutes les fonctionnalités",
      seeLess: "Réduire",
      comparison: [
        { feature: "Score de récupération quotidien", free: true, premium: true },
        { feature: "Analyse du sommeil", free: true, premium: true },
        { feature: "Historique 7 jours", free: true, premium: false },
        { feature: "Historique illimité", free: false, premium: true },
        { feature: "Détection des tendances", free: false, premium: true },
        { feature: "Alertes personnalisées", free: false, premium: true },
        { feature: "Graphiques détaillés", free: false, premium: true },
      ],
    },
    privacy: {
      title: "Tes données restent sur ton appareil",
      subtitle: "Zéro serveur. Zéro collecte. Zéro compromis.",
      body: "METABO AI fonctionne entièrement en local sur ton iPhone. Aucune donnée de santé ne quitte jamais ton appareil. Nous ne collectons, ne stockons et ne partageons rien.",
      link: "Lire la politique de confidentialité",
    },
    footer: {
      tagline: "Tes données de santé, enfin faciles à lire.",
      contact: "contact@metabo-ai.com",
      contactLabel: "Contact",
      legal: "Légal",
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
      sub: "METABO AI turns raw Apple Health numbers into a clear dashboard — so you understand your body at a glance, every morning.",
      cta: "Download on the App Store",
      secondaryCta: "See how it works",
      badge: "Available on iPhone",
      mockup: {
        today: "Today",
        scoreLabel: "Recovery Score",
        optimal: "Optimal",
        sleep: "Sleep",
        hrv: "HRV",
        trend: "Trend",
      },
    },
    features: {
      title: "Complex data, simple reading",
      subtitle: "METABO AI does the interpretation work for you.",
      items: [
        {
          name: "Recovery Score",
          desc: "One clear number every morning — calculated from your HRV, sleep, and resting heart rate.",
        },
        {
          name: "Sleep Analysis",
          desc: "Your nights summarized in an instant. Understand directly what your sleep means for your day.",
        },
        {
          name: "Trend Detection",
          desc: "METABO AI reads how your data evolves and alerts you before you feel the fatigue.",
        },
      ],
    },
    howItWorks: {
      title: "Simple. Automatic. Readable.",
      subtitle: "Three steps to make your health data finally make sense.",
      steps: [
        {
          num: "1",
          title: "Connect Apple Health",
          desc: "In seconds, no account required.",
        },
        {
          num: "2",
          title: "METABO AI analyzes",
          desc: "The app reads, interprets, and synthesizes your data every morning.",
        },
        {
          num: "3",
          title: "You understand, you decide",
          desc: "At a glance. Clear indications, no jargon.",
        },
      ],
    },
    premium: {
      title: "METABO+",
      subtitle: "Go further in understanding your data.",
      monthly: "Monthly",
      annual: "Annual",
      annualSave: "Save 33%",
      monthlyPrice: "€4.99",
      annualPrice: "€39.99",
      perMonth: "/ month",
      perYear: "/ year",
      billedMonthly: "Billed monthly",
      billedAnnually: "Billed annually",
      cta: "Try METABO+",
      freeLabel: "Free",
      premiumLabel: "METABO+",
      seeAll: "See all features",
      seeLess: "Show less",
      comparison: [
        { feature: "Daily recovery score", free: true, premium: true },
        { feature: "Sleep analysis", free: true, premium: true },
        { feature: "7-day history", free: true, premium: false },
        { feature: "Unlimited history", free: false, premium: true },
        { feature: "Trend detection", free: false, premium: true },
        { feature: "Personalized alerts", free: false, premium: true },
        { feature: "Detailed charts", free: false, premium: true },
      ],
    },
    privacy: {
      title: "Your data stays on your device",
      subtitle: "Zero servers. Zero collection. Zero compromise.",
      body: "METABO AI works entirely locally on your iPhone. No health data ever leaves your device. We collect, store, and share nothing.",
      link: "Read the privacy policy",
    },
    footer: {
      tagline: "Your health data, finally easy to read.",
      contact: "contact@metabo-ai.com",
      contactLabel: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      rights: "All rights reserved.",
    },
  },
};

export type Translations = typeof translations.fr;
