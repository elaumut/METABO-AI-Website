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
      tagline: "Comprends ta récupération. Préviens le surmenage.",
      sub: "METABO AI analyse tes données de santé pour t'aider à t'entraîner intelligemment — sans jamais dépasser tes limites.",
      cta: "Télécharger sur l'App Store",
      badge: "Disponible sur iOS",
    },
    features: {
      title: "Des insights qui font la différence",
      subtitle: "Quatre piliers pour une récupération maîtrisée.",
      items: [
        {
          name: "Score de récupération",
          desc: "Un indice quotidien calculé à partir de tes données HealthKit — VFC, sommeil, fréquence cardiaque au repos.",
        },
        {
          name: "Analyse du sommeil",
          desc: "Visualise la qualité et les phases de ton sommeil pour comprendre leur impact sur ta performance.",
        },
        {
          name: "Détection des tendances",
          desc: "METABO AI repère les signaux précoces de surmenage avant qu'ils ne deviennent des blessures.",
        },
        {
          name: "METABO+ Premium",
          desc: "Historique complet, alertes personnalisées et recommandations avancées pour les athlètes exigeants.",
        },
      ],
    },
    howItWorks: {
      title: "Simple. Automatique. Efficace.",
      subtitle: "Trois étapes suffisent pour que METABO AI travaille pour toi.",
      steps: [
        {
          num: "01",
          title: "Connecte HealthKit",
          desc: "Autorise l'accès à tes données de santé Apple en quelques secondes. Aucun compte requis.",
        },
        {
          num: "02",
          title: "Analyse quotidienne",
          desc: "Chaque matin, METABO AI traite tes données de la nuit et te génère un score de récupération.",
        },
        {
          num: "03",
          title: "Insights personnalisés",
          desc: "Reçois des recommandations adaptées à ton niveau de récupération pour optimiser ta journée.",
        },
      ],
    },
    premium: {
      title: "METABO+",
      subtitle: "Pour les athlètes qui ne laissent rien au hasard.",
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
        { feature: "Alertes de surmenage", free: false, premium: true },
        { feature: "Recommandations avancées", free: false, premium: true },
        { feature: "Graphiques détaillés", free: false, premium: true },
      ],
    },
    privacy: {
      title: "Tes données restent sur ton appareil",
      subtitle: "Zéro serveur. Zéro collecte. Zéro compromis.",
      body: "METABO AI est conçu autour d'un principe fondamental : ta santé t'appartient. Toutes les analyses sont effectuées localement sur ton iPhone. Aucune donnée de santé ne quitte jamais ton appareil. Nous ne collectons, ne stockons et ne partageons rien.",
      link: "Lire la politique de confidentialité",
    },
    footer: {
      tagline: "Récupération intelligente pour athlètes exigeants.",
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
      tagline: "Understand your recovery. Prevent overtraining.",
      sub: "METABO AI analyzes your health data to help you train smarter — without ever exceeding your limits.",
      cta: "Download on the App Store",
      badge: "Available on iOS",
    },
    features: {
      title: "Insights that make the difference",
      subtitle: "Four pillars for mastered recovery.",
      items: [
        {
          name: "Recovery Score",
          desc: "A daily index calculated from your HealthKit data — HRV, sleep, resting heart rate.",
        },
        {
          name: "Sleep Analysis",
          desc: "Visualize your sleep quality and phases to understand their impact on performance.",
        },
        {
          name: "Trend Detection",
          desc: "METABO AI spots early signs of overtraining before they turn into injuries.",
        },
        {
          name: "METABO+ Premium",
          desc: "Full history, personalized alerts, and advanced recommendations for serious athletes.",
        },
      ],
    },
    howItWorks: {
      title: "Simple. Automatic. Effective.",
      subtitle: "Three steps and METABO AI starts working for you.",
      steps: [
        {
          num: "01",
          title: "Connect HealthKit",
          desc: "Grant access to your Apple Health data in seconds. No account required.",
        },
        {
          num: "02",
          title: "Daily Analysis",
          desc: "Every morning, METABO AI processes your overnight data and generates your recovery score.",
        },
        {
          num: "03",
          title: "Personalized Insights",
          desc: "Receive recommendations tailored to your recovery level to optimize your day.",
        },
      ],
    },
    premium: {
      title: "METABO+",
      subtitle: "For athletes who leave nothing to chance.",
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
        { feature: "Overtraining alerts", free: false, premium: true },
        { feature: "Advanced recommendations", free: false, premium: true },
        { feature: "Detailed charts", free: false, premium: true },
      ],
    },
    privacy: {
      title: "Your data stays on your device",
      subtitle: "Zero servers. Zero collection. Zero compromise.",
      body: "METABO AI is built around a fundamental principle: your health belongs to you. All analysis is performed locally on your iPhone. No health data ever leaves your device. We collect, store, and share nothing.",
      link: "Read the privacy policy",
    },
    footer: {
      tagline: "Smart recovery for serious athletes.",
      contact: "contact@metabo-ai.com",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      rights: "All rights reserved.",
    },
  },
};

export type Translations = typeof translations.fr;
