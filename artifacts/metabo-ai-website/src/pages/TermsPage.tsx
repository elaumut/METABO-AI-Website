import { type Lang } from "../i18n";
import LegalLayout from "./LegalLayout";

interface TermsPageProps {
  lang: Lang;
  toggleLang: () => void;
}

interface Section {
  heading: string | null;
  body?: string;
  list?: string[];
  linkText?: string;
  linkHref?: string;
  contact?: string;
  contactPre?: string;
}

const content: Record<Lang, { eyebrow: string; title: string; updated: string; intro: string; sections: Section[] }> = {
  fr: {
    eyebrow: "METABO AI",
    title: "Conditions d'utilisation",
    updated: "Dernière mise à jour : 26 mars 2026",
    intro: "Les présentes Conditions d'utilisation régissent l'accès et l'utilisation du site web METABO AI, de l'application mobile METABO AI et des services associés. En accédant au site ou en utilisant l'application, vous acceptez les présentes conditions. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le service.",
    sections: [
      {
        heading: "1. Éditeur du service",
        body: "Éditeur : METABO AI — E-mail : contact@metabo-ai.com — Site : metabo-ai.com",
      },
      {
        heading: "2. Objet du service",
        body: "METABO AI est un service numérique de lecture et de visualisation de données de santé issues notamment d'Apple Santé, destiné à fournir à l'utilisateur une présentation claire, synthétique et non médicale de certains indicateurs de bien-être, de récupération, de sommeil et de tendances.",
      },
      {
        heading: "3. Accès au service",
        body: "Le service est accessible depuis un iPhone compatible. L'éditeur s'efforce d'assurer un accès normal au service, sans garantie de disponibilité continue. L'éditeur peut suspendre, limiter ou interrompre tout ou partie du service, notamment pour maintenance, mise à jour ou sécurité.",
      },
      {
        heading: "4. Conditions d'utilisation de l'application",
        body: "L'utilisateur s'engage à utiliser METABO AI de manière loyale, personnelle et conforme à sa destination. Il est interdit d'utiliser le service :",
        list: [
          "à des fins frauduleuses, illicites ou contraires à l'ordre public ;",
          "pour tenter d'accéder de manière non autorisée aux systèmes, données ou fonctionnalités ;",
          "pour copier, altérer, perturber, désassembler ou détourner tout ou partie du service, sauf dans les cas autorisés par la loi ;",
          "pour porter atteinte aux droits de propriété intellectuelle de l'éditeur ou de tiers.",
        ],
      },
      {
        heading: "5. Compte et données utilisateur",
        body: "METABO AI peut fonctionner sans création de compte. Certaines fonctionnalités reposent sur les permissions accordées par l'utilisateur à son appareil et aux données Apple Santé. L'utilisateur reste responsable des autorisations qu'il accorde à l'application.",
      },
      {
        heading: "6. Abonnement METABO+",
        body: "Certaines fonctionnalités sont proposées dans le cadre d'une offre payante METABO+. Les prix, durées, modalités de facturation, renouvellement et résiliation sont indiqués au moment de la souscription via l'App Store. Les abonnements souscrits via Apple sont soumis aux règles et conditions de l'App Store.",
      },
      {
        heading: "7. Informations fournies par l'application",
        body: "Les contenus, scores, tendances, visualisations et recommandations affichés par METABO AI sont fournis à titre informatif et de bien-être personnel uniquement. Ils ne constituent ni un avis médical, ni un diagnostic, ni un dispositif médical. En cas de doute ou de situation médicale, consultez un professionnel de santé qualifié.",
      },
      {
        heading: "8. Données personnelles et confidentialité",
        body: "Les règles applicables aux données personnelles sont détaillées dans la ",
        linkText: "Politique de confidentialité",
        linkHref: "/privacy",
      },
      {
        heading: "9. Propriété intellectuelle",
        body: "Le site, l'application, la marque METABO AI, les textes, interfaces, visuels, logos et éléments de design sont protégés par les règles de propriété intellectuelle. Toute reproduction ou exploitation sans autorisation écrite préalable est interdite.",
      },
      {
        heading: "10. Responsabilité",
        body: "L'éditeur ne pourra être tenu responsable des dommages indirects résultant :",
        list: [
          "d'une utilisation non conforme du service ;",
          "d'un dysfonctionnement temporaire ou d'une indisponibilité ;",
          "d'un mauvais paramétrage de l'appareil ou d'une autorisation refusée ;",
          "de l'interprétation ou de l'usage personnel des informations affichées ;",
          "d'un service tiers, y compris Apple, Apple Santé ou l'App Store.",
        ],
      },
      {
        heading: "11. Liens et services tiers",
        body: "Le service peut contenir des liens vers des services tiers. L'éditeur n'est pas responsable de leur contenu, disponibilité ou politique de confidentialité.",
      },
      {
        heading: "12. Modification des présentes conditions",
        body: "L'éditeur peut modifier à tout moment les présentes Conditions d'utilisation. La version applicable est celle publiée sur le site à la date de consultation.",
      },
      {
        heading: "13. Droit applicable",
        body: "Les présentes Conditions d'utilisation sont régies par le droit français, sous réserve des dispositions impératives applicables au lieu de résidence du consommateur.",
      },
      {
        heading: "14. Contact",
        contactPre: "Pour toute question : ",
        contact: "contact@metabo-ai.com",
      },
    ],
  },
  en: {
    eyebrow: "METABO AI",
    title: "Terms of Use",
    updated: "Last updated: March 26, 2026",
    intro: "These Terms of Use govern access to and use of the METABO AI website, the METABO AI mobile app, and associated services. By accessing the site or using the app, you accept these terms. If you do not accept these terms, you must not use the service.",
    sections: [
      {
        heading: "1. Publisher",
        body: "Publisher: METABO AI — Email: contact@metabo-ai.com — Website: metabo-ai.com",
      },
      {
        heading: "2. Purpose of the service",
        body: "METABO AI is a digital service for reading and visualizing health data from Apple Health, designed to provide users with a clear, concise, non-medical presentation of wellness, recovery, sleep, and trend indicators.",
      },
      {
        heading: "3. Access to the service",
        body: "The service is accessible from a compatible iPhone. The publisher makes reasonable efforts to ensure normal access without guaranteeing continuous availability. The publisher may suspend, limit, or interrupt the service for maintenance, updates, or security.",
      },
      {
        heading: "4. Terms of use",
        body: "The user agrees to use METABO AI fairly, personally, and in accordance with its intended purpose. It is prohibited to use the service:",
        list: [
          "for fraudulent, illegal, or public-order-violating purposes;",
          "to attempt unauthorized access to systems, data, or features;",
          "to copy, alter, disrupt, decompile, or misappropriate any part of the service, except as permitted by law;",
          "to infringe the intellectual property rights of the publisher or third parties.",
        ],
      },
      {
        heading: "5. Account and user data",
        body: "METABO AI can operate without account creation. Some features rely on permissions the user grants for Apple Health data. The user remains responsible for permissions granted to the app.",
      },
      {
        heading: "6. METABO+ subscription",
        body: "Some features are available under a paid METABO+ offer. Prices, durations, billing terms, renewal, and cancellation are described at the time of subscription via the App Store. Subscriptions via Apple are subject to App Store rules and conditions.",
      },
      {
        heading: "7. Information provided by the app",
        body: "Content, scores, trends, visualizations, and recommendations shown by METABO AI are provided for informational and personal wellness purposes only. They do not constitute medical advice, diagnosis, or a medical device. If in doubt or facing a medical situation, consult a qualified healthcare professional.",
      },
      {
        heading: "8. Personal data and privacy",
        body: "Rules applicable to personal data are detailed in the ",
        linkText: "Privacy Policy",
        linkHref: "/privacy",
      },
      {
        heading: "9. Intellectual property",
        body: "The site, app, METABO AI brand, text, interfaces, visuals, logos, and design elements are protected by intellectual property law. Any reproduction or exploitation without prior written authorization is prohibited.",
      },
      {
        heading: "10. Liability",
        body: "The publisher shall not be liable for indirect damages resulting from:",
        list: [
          "improper use of the service;",
          "temporary malfunction or unavailability;",
          "incorrect device settings or denied permissions;",
          "personal interpretation or use of displayed information;",
          "a third-party service, including Apple, Apple Health, or the App Store.",
        ],
      },
      {
        heading: "11. Third-party links and services",
        body: "The service may contain links to third-party services. The publisher is not responsible for their content, availability, or privacy policies.",
      },
      {
        heading: "12. Changes to these terms",
        body: "The publisher may modify these Terms of Use at any time. The applicable version is the one published on the site at the time of consultation.",
      },
      {
        heading: "13. Applicable law",
        body: "These Terms of Use are governed by French law, subject to mandatory provisions applicable in the consumer's country of residence.",
      },
      {
        heading: "14. Contact",
        contactPre: "For any questions: ",
        contact: "contact@metabo-ai.com",
      },
    ],
  },
};

export default function TermsPage({ lang, toggleLang }: TermsPageProps) {
  const c = content[lang];

  return (
    <LegalLayout lang={lang} toggleLang={toggleLang}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 100px" }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: "#5B7C99", textTransform: "uppercase", marginBottom: 16 }}>
          {c.eyebrow}
        </p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "hsl(215 25% 12%)", marginBottom: 12, lineHeight: 1.2 }}>
          {c.title}
        </h1>
        <p style={{ fontSize: 14, color: "hsl(215 15% 55%)", marginBottom: 52 }}>
          {c.updated}
        </p>

        <p style={{ fontSize: 15, color: "hsl(215 15% 40%)", lineHeight: 1.75, marginBottom: 48, paddingBottom: 36, borderBottom: "1px solid rgba(91,124,153,0.12)" }}>
          {c.intro}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {c.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {section.heading}
                </h2>
              )}
              {section.body && !section.linkText && (
                <p style={{ fontSize: 15, color: "hsl(215 15% 40%)", lineHeight: 1.75 }}>
                  {section.body}
                </p>
              )}
              {section.body && section.linkText && (
                <p style={{ fontSize: 15, color: "hsl(215 15% 40%)", lineHeight: 1.75 }}>
                  {section.body}
                  <a href={section.linkHref} style={{ color: "#5B7C99", textDecoration: "none", fontWeight: 500 }}>
                    {section.linkText}
                  </a>
                  .
                </p>
              )}
              {section.list && (
                <ul style={{ margin: "12px 0 0 0", padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {section.list.map((item, j) => (
                    <li key={j} style={{ fontSize: 15, color: "hsl(215 15% 40%)", lineHeight: 1.7 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.contact && (
                <p style={{ fontSize: 15, color: "hsl(215 15% 40%)", lineHeight: 1.75 }}>
                  {section.contactPre}
                  <a href={`mailto:${section.contact}`} style={{ color: "#5B7C99", textDecoration: "none", fontWeight: 500 }}>
                    {section.contact}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </LegalLayout>
  );
}
