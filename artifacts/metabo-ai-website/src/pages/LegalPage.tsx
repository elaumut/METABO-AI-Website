import { Helmet } from "react-helmet-async";
import { type Lang } from "../i18n";
import LegalLayout from "./LegalLayout";

const pageMeta = {
  fr: {
    title: "Mentions légales — METABO AI",
    description: "Mentions légales du site metabo-ai.com, édité par ELA UMUT, Saint-Herblain, France.",
    canonical: "https://metabo-ai.com/legal",
  },
  en: {
    title: "Legal Notice — METABO AI",
    description: "Legal notice for metabo-ai.com, published by ELA UMUT, Saint-Herblain, France.",
    canonical: "https://metabo-ai.com/legal",
  },
};

interface LegalPageProps {
  lang: Lang;
  toggleLang: () => void;
}

const content = {
  fr: {
    eyebrow: "METABO AI",
    title: "Mentions légales",
    updated: "Dernière mise à jour : 26 mars 2026",
    publisherHeading: "Éditeur du site",
    publisher: [
      "ELA UMUT",
      "23 boulevard Charles Gautier",
      "44800 Saint-Herblain",
      "France",
    ],
    phone: "07 61 80 46 31",
    email: "support@metabo-ai.com",
    siret: "48245759500049",
    hostingHeading: "Hébergement",
    // ─── À METTRE À JOUR selon l'hébergeur final ────────────────────────────
    // Option A — Vercel :
    //   hostingName: "Vercel Inc.",
    //   hostingAddress: ["340 Pine Street, Suite 900", "San Francisco, CA 94104", "États-Unis"],
    //   hostingUrl: "https://vercel.com",
    // Option B — Netlify :
    //   hostingName: "Netlify, Inc.",
    //   hostingAddress: ["44 Montgomery Street, Suite 300", "San Francisco, CA 94104", "États-Unis"],
    //   hostingUrl: "https://www.netlify.com",
    // ────────────────────────────────────────────────────────────────────────
    hostingName: "Vercel Inc.",
    hostingAddress: ["440 N Barranca Ave #4133", "Covina, CA 91723", "États-Unis"],
    hostingUrl: "https://vercel.com",
    directorHeading: "Directeur de la publication",
    director: "ELA UMUT",
    intellectualPropertyHeading: "Propriété intellectuelle",
    intellectualProperty: "L'ensemble des contenus présents sur le site metabo-ai.com (textes, images, visuels, marque, logo, interface) sont la propriété exclusive de METABO AI / ELA UMUT et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation ou diffusion sans autorisation écrite préalable est interdite.",
    dataHeading: "Données personnelles",
    data: "Pour toute question relative au traitement de vos données personnelles, veuillez consulter notre ",
    dataLink: "Politique de confidentialité",
    dataLinkHref: "/privacy",
    contactHeading: "Contact",
    contactBody: "Pour toute question relative au site : ",
  },
  en: {
    eyebrow: "METABO AI",
    title: "Legal Notice",
    updated: "Last updated: March 26, 2026",
    publisherHeading: "Website publisher",
    publisher: [
      "ELA UMUT",
      "23 boulevard Charles Gautier",
      "44800 Saint-Herblain",
      "France",
    ],
    phone: "+33 7 61 80 46 31",
    email: "support@metabo-ai.com",
    siret: "48245759500049",
    hostingHeading: "Hosting",
    // ─── UPDATE THIS BLOCK based on final hosting provider ──────────────────
    // Option A — Vercel:
    //   hostingName: "Vercel Inc.",
    //   hostingAddress: ["340 Pine Street, Suite 900", "San Francisco, CA 94104", "United States"],
    //   hostingUrl: "https://vercel.com",
    // Option B — Netlify:
    //   hostingName: "Netlify, Inc.",
    //   hostingAddress: ["44 Montgomery Street, Suite 300", "San Francisco, CA 94104", "United States"],
    //   hostingUrl: "https://www.netlify.com",
    // ────────────────────────────────────────────────────────────────────────
    hostingName: "Vercel Inc.",
    hostingAddress: ["440 N Barranca Ave #4133", "Covina, CA 91723", "United States"],
    hostingUrl: "https://vercel.com",
    directorHeading: "Publication director",
    director: "ELA UMUT",
    intellectualPropertyHeading: "Intellectual property",
    intellectualProperty: "All content on metabo-ai.com (text, images, visuals, brand, logo, interface) is the exclusive property of METABO AI / ELA UMUT and is protected by French and international intellectual property law. Any reproduction, representation, or distribution without prior written authorization is prohibited.",
    dataHeading: "Personal data",
    data: "For any questions regarding the processing of your personal data, please consult our ",
    dataLink: "Privacy Policy",
    dataLinkHref: "/privacy",
    contactHeading: "Contact",
    contactBody: "For any questions about the site: ",
  },
};

const fieldStyle: React.CSSProperties = {
  fontSize: 15,
  color: "hsl(215 15% 40%)",
  lineHeight: 1.75,
};

export default function LegalPage({ lang, toggleLang }: LegalPageProps) {
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
        <p style={{ fontSize: 14, color: "hsl(215 15% 55%)", marginBottom: 52 }}>
          {c.updated}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

          {/* Publisher */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 14, letterSpacing: "-0.01em" }}>
              {c.publisherHeading}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {c.publisher.map((line, i) => (
                <p key={i} style={{ ...fieldStyle, margin: 0 }}>{line}</p>
              ))}
              <p style={{ ...fieldStyle, margin: "8px 0 0" }}>
                {lang === "fr" ? "Téléphone : " : "Phone: "}
                <a href={`tel:${c.phone.replace(/\s/g, "")}`} style={{ color: "#5B7C99", textDecoration: "none" }}>{c.phone}</a>
              </p>
              <p style={{ ...fieldStyle, margin: 0 }}>
                {lang === "fr" ? "E-mail : " : "Email: "}
                <a href={`mailto:${c.email}`} style={{ color: "#5B7C99", textDecoration: "none" }}>{c.email}</a>
              </p>
              <p style={{ ...fieldStyle, margin: 0 }}>SIRET : {c.siret}</p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(91,124,153,0.1)" }} />

          {/* Publication director */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 10, letterSpacing: "-0.01em" }}>
              {c.directorHeading}
            </h2>
            <p style={fieldStyle}>{c.director}</p>
          </div>

          <div style={{ borderTop: "1px solid rgba(91,124,153,0.1)" }} />

          {/* Hosting — UPDATE THIS BLOCK after choosing Vercel or Netlify */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 14, letterSpacing: "-0.01em" }}>
              {c.hostingHeading}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <p style={{ ...fieldStyle, margin: 0, fontWeight: 500, color: "hsl(215 25% 30%)" }}>
                {c.hostingUrl ? (
                  <a href={c.hostingUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#5B7C99", textDecoration: "none" }}>
                    {c.hostingName}
                  </a>
                ) : (
                  <span style={{ color: "hsl(215 15% 60%)", fontStyle: "italic" }}>{c.hostingName}</span>
                )}
              </p>
              {c.hostingAddress.map((line, i) => (
                <p key={i} style={{ ...fieldStyle, margin: 0 }}>{line}</p>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(91,124,153,0.1)" }} />

          {/* Intellectual property */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 10, letterSpacing: "-0.01em" }}>
              {c.intellectualPropertyHeading}
            </h2>
            <p style={fieldStyle}>{c.intellectualProperty}</p>
          </div>

          <div style={{ borderTop: "1px solid rgba(91,124,153,0.1)" }} />

          {/* Personal data */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 10, letterSpacing: "-0.01em" }}>
              {c.dataHeading}
            </h2>
            <p style={fieldStyle}>
              {c.data}
              <a href={c.dataLinkHref} style={{ color: "#5B7C99", textDecoration: "none", fontWeight: 500 }}>{c.dataLink}</a>.
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(91,124,153,0.1)" }} />

          {/* Contact */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "hsl(215 25% 18%)", marginBottom: 10, letterSpacing: "-0.01em" }}>
              {c.contactHeading}
            </h2>
            <p style={fieldStyle}>
              {c.contactBody}
              <a href={`mailto:${c.email}`} style={{ color: "#5B7C99", textDecoration: "none", fontWeight: 500 }}>{c.email}</a>
            </p>
          </div>

        </div>
      </div>
      </LegalLayout>
    </>
  );
}
