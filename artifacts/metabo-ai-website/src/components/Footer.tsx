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
        background: "hsl(215 25% 14%)",
        padding: "48px 24px",
        color: "rgba(255,255,255,0.6)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 17,
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: 8,
              }}
            >
              METABO AI
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                maxWidth: 220,
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
              flexWrap: "wrap",
              gap: 24,
              alignItems: "center",
            }}
          >
            <a
              href={`mailto:${t.contact}`}
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.55)")
              }
            >
              {t.contact}
            </a>
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.55)")
              }
            >
              {t.privacy}
            </a>
            <a
              href={TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.55)")
              }
            >
              {t.terms}
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 12 }}>
            &copy; {year} METABO AI. {t.rights}
          </span>
          <span style={{ fontSize: 12 }}>metabo-ai.com</span>
        </div>
      </div>
    </footer>
  );
}
