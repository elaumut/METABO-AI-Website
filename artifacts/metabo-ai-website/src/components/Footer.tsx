import type { Translations } from "../i18n";

const PRIVACY_URL = "https://elaumut.github.io/metabo-ai/privacy.html";
const TERMS_URL = "https://elaumut.github.io/metabo-ai/privacy.html";

interface FooterProps {
  t: Translations["footer"];
}

export default function Footer({ t }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "hsl(215 25% 10%)",
        padding: "60px 20px 40px",
        color: "rgba(255,255,255,0.5)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
          className="md:flex-row md:items-start md:justify-between"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              METABO AI
            </div>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                maxWidth: 240,
                lineHeight: 1.6,
              }}
            >
              {t.tagline}
            </p>
          </div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
            className="sm:flex-row sm:gap-16"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.contactLabel}</span>
              <a
                href={`mailto:${t.contact}`}
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="hover:text-white"
              >
                {t.contact}
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.legal}</span>
              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="hover:text-white"
              >
                {t.privacy}
              </a>
              <a
                href={TERMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="hover:text-white"
              >
                {t.terms}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
          className="sm:flex-row sm:justify-between sm:items-center"
        >
          <span style={{ fontSize: 13 }}>
            &copy; {year} METABO AI. {t.rights}
          </span>
          <span style={{ fontSize: 13 }}>metabo-ai.com</span>
        </div>
      </div>
    </footer>
  );
}
