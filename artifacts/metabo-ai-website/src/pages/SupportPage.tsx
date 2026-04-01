import { Helmet } from "react-helmet-async";
import { type Lang, type Translations } from "../i18n";
import LegalLayout from "./LegalLayout";

const pageMeta = {
  fr: {
    title: "Support — METABO AI",
    description: "Contactez l'équipe METABO AI pour toute question, problème ou suggestion concernant l'application iOS.",
    canonical: "https://metabo-ai.com/support",
  },
  en: {
    title: "Support — METABO AI",
    description: "Contact the METABO AI team for any question, issue or suggestion about the iOS app.",
    canonical: "https://metabo-ai.com/support",
  },
};

interface SupportPageProps {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

const content = {
  fr: {
    eyebrow: "METABO AI",
    title: "Support",
    intro: "Une question, un problème ou une suggestion ? L'équipe METABO AI est disponible pour vous aider.",
    contactHeading: "Nous contacter",
    contactBody: "Envoyez-nous un e-mail ou appelez-nous. Nous vous répondrons dans les plus brefs délais.",
    email: "support@metabo-ai.com",
    phone: "07 61 80 46 31",
    phoneLabel: "Téléphone",
    legalHeading: "Documents légaux",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    legalNotice: "Mentions légales",
    appStoreHeading: "Application",
    appStoreBody: "METABO AI est disponible gratuitement sur l'App Store.",
    appStoreLink: "Télécharger sur l'App Store",
  },
  en: {
    eyebrow: "METABO AI",
    title: "Support",
    intro: "A question, an issue, or a suggestion? The METABO AI team is available to help.",
    contactHeading: "Contact us",
    contactBody: "Send us an email or call us. We will get back to you as soon as possible.",
    email: "support@metabo-ai.com",
    phone: "+33 7 61 80 46 31",
    phoneLabel: "Phone",
    legalHeading: "Legal documents",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    legalNotice: "Legal Notice",
    appStoreHeading: "Application",
    appStoreBody: "METABO AI is available for free on the App Store.",
    appStoreLink: "Download on the App Store",
  },
};

const APP_STORE_URL = "https://apps.apple.com/fr/app/metabo-ai/id6758163705";

const linkStyle: React.CSSProperties = {
  fontSize: 15,
  color: "#5B7C99",
  textDecoration: "none",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: 6,
};

export default function SupportPage({ lang, toggleLang }: SupportPageProps) {
  const c = content[lang];
  const meta = pageMeta[lang];

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
      </Helmet>
      <LegalLayout lang={lang} toggleLang={toggleLang}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 100px" }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: "#5B7C99", textTransform: "uppercase", marginBottom: 16 }}>
          {c.eyebrow}
        </p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "hsl(215 25% 12%)", marginBottom: 12, lineHeight: 1.2 }}>
          {c.title}
        </h1>
        <p style={{ fontSize: 17, color: "hsl(215 15% 40%)", lineHeight: 1.7, marginBottom: 60 }}>
          {c.intro}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

          {/* Contact */}
          <div style={{ background: "#fff", border: "1px solid rgba(91,124,153,0.12)", borderRadius: 20, padding: "32px 36px" }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 10 }}>
              {c.contactHeading}
            </h2>
            <p style={{ fontSize: 15, color: "hsl(215 15% 45%)", lineHeight: 1.7, marginBottom: 24 }}>
              {c.contactBody}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href={`mailto:${c.email}`}
                style={{
                  display: "inline-block",
                  background: "#5B7C99",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "12px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  alignSelf: "flex-start",
                }}
              >
                {c.email}
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
                <span style={{ fontSize: 13, color: "hsl(215 15% 55%)", fontWeight: 500 }}>{c.phoneLabel} :</span>
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  style={{ fontSize: 15, color: "#5B7C99", textDecoration: "none", fontWeight: 500 }}
                >
                  {c.phone}
                </a>
              </div>
            </div>
          </div>

          {/* App Store */}
          <div style={{ background: "#fff", border: "1px solid rgba(91,124,153,0.12)", borderRadius: 20, padding: "32px 36px" }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 10 }}>
              {c.appStoreHeading}
            </h2>
            <p style={{ fontSize: 15, color: "hsl(215 15% 45%)", lineHeight: 1.7, marginBottom: 20 }}>
              {c.appStoreBody}
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "1.5px solid #5B7C99",
                color: "#5B7C99",
                fontSize: 15,
                fontWeight: 600,
                padding: "12px 24px",
                borderRadius: 10,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              {c.appStoreLink}
            </a>
          </div>

          {/* Legal links */}
          <div style={{ background: "#fff", border: "1px solid rgba(91,124,153,0.12)", borderRadius: 20, padding: "32px 36px" }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 20 }}>
              {c.legalHeading}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="/privacy" style={linkStyle}>
                <span style={{ fontSize: 12, opacity: 0.6 }}>&#8594;</span>
                {c.privacy}
              </a>
              <a href="/terms" style={linkStyle}>
                <span style={{ fontSize: 12, opacity: 0.6 }}>&#8594;</span>
                {c.terms}
              </a>
              <a href="/legal" style={linkStyle}>
                <span style={{ fontSize: 12, opacity: 0.6 }}>&#8594;</span>
                {c.legalNotice}
              </a>
            </div>
          </div>

        </div>
      </div>
      </LegalLayout>
    </>
  );
}
