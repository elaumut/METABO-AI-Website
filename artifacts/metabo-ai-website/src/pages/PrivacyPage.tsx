import { type Lang } from "../i18n";
import LegalLayout from "./LegalLayout";

interface PrivacyPageProps {
  lang: Lang;
  toggleLang: () => void;
}

const content = {
  fr: {
    eyebrow: "METABO AI",
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 26 mars 2026",
    sections: [
      {
        heading: null,
        body: "METABO AI s'engage à protéger votre vie privée. Cette politique décrit comment l'application traite vos données dans le cadre de son fonctionnement sur iPhone.",
      },
      {
        heading: "1. Données traitées",
        body: "METABO AI accède, avec votre autorisation explicite, aux données de santé issues d'Apple Santé : sommeil, fréquence cardiaque, variabilité de la fréquence cardiaque (VFC), activité physique et autres indicateurs de bien-être que vous choisissez de partager.",
      },
      {
        heading: "2. Traitement local — aucun serveur",
        body: "Toutes les données de santé sont traitées exclusivement sur votre appareil. Aucune donnée de santé ne quitte votre iPhone. METABO AI ne dispose d'aucun serveur pour stocker, recevoir ou analyser vos données personnelles de santé.",
      },
      {
        heading: "3. Données non collectées",
        body: "METABO AI ne collecte pas, ne stocke pas et ne partage pas vos données de santé avec des tiers. Nous n'utilisons pas de traceurs publicitaires. Nous ne vendons aucune donnée.",
      },
      {
        heading: "4. Permissions demandées",
        body: "L'application vous demande l'accès à Apple Santé uniquement pour afficher vos indicateurs dans l'interface METABO AI. Vous pouvez à tout moment modifier ou révoquer ces permissions depuis les Réglages de votre iPhone.",
      },
      {
        heading: "5. Abonnements et paiements",
        body: "Les abonnements METABO+ sont gérés exclusivement via l'App Store d'Apple. METABO AI n'a accès à aucune information bancaire ou de paiement. Apple gère l'ensemble de la transaction selon ses propres conditions.",
      },
      {
        heading: "6. Mineurs",
        body: "METABO AI n'est pas destiné aux personnes de moins de 17 ans. Si vous êtes parent ou tuteur et pensez qu'un mineur utilise l'application, veuillez contacter support@metabo-ai.com.",
      },
      {
        heading: "7. Modifications",
        body: "Cette politique peut être mise à jour pour refléter les évolutions du service ou de la réglementation. La version applicable est celle publiée sur le site à la date de consultation.",
      },
      {
        heading: "8. Contact",
        body: null,
        contact: "contact@metabo-ai.com",
        contactPre: "Pour toute question relative à cette politique, vous pouvez nous contacter à : ",
      },
    ],
  },
  en: {
    eyebrow: "METABO AI",
    title: "Privacy Policy",
    updated: "Last updated: March 26, 2026",
    sections: [
      {
        heading: null,
        body: "METABO AI is committed to protecting your privacy. This policy describes how the app handles your data as part of its operation on iPhone.",
      },
      {
        heading: "1. Data accessed",
        body: "METABO AI accesses, with your explicit permission, health data from Apple Health: sleep, heart rate, heart rate variability (HRV), physical activity, and other wellness indicators you choose to share.",
      },
      {
        heading: "2. Local processing — no server",
        body: "All health data is processed exclusively on your device. No health data ever leaves your iPhone. METABO AI has no server to store, receive, or analyze your personal health data.",
      },
      {
        heading: "3. Data not collected",
        body: "METABO AI does not collect, store, or share your health data with third parties. We use no advertising trackers. We sell no data.",
      },
      {
        heading: "4. Permissions requested",
        body: "The app requests access to Apple Health solely to display your metrics in the METABO AI interface. You can modify or revoke these permissions at any time from your iPhone Settings.",
      },
      {
        heading: "5. Subscriptions and payments",
        body: "METABO+ subscriptions are managed exclusively through Apple's App Store. METABO AI has no access to any banking or payment information. Apple handles the entire transaction under its own terms.",
      },
      {
        heading: "6. Minors",
        body: "METABO AI is not intended for persons under 17 years of age. If you are a parent or guardian and believe a minor is using the app, please contact support@metabo-ai.com.",
      },
      {
        heading: "7. Changes",
        body: "This policy may be updated to reflect changes in the service or regulations. The applicable version is the one published on the site at the time of consultation.",
      },
      {
        heading: "8. Contact",
        body: null,
        contact: "contact@metabo-ai.com",
        contactPre: "For any questions regarding this policy, you can reach us at: ",
      },
    ],
  },
};

export default function PrivacyPage({ lang, toggleLang }: PrivacyPageProps) {
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

        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {c.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {section.heading}
                </h2>
              )}
              {section.body && (
                <p style={{ fontSize: 15, color: "hsl(215 15% 40%)", lineHeight: 1.75 }}>
                  {section.body}
                </p>
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
