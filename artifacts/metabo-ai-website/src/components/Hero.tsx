import type { Translations } from "../i18n";

const APP_STORE_URL = "https://apps.apple.com/fr/app/metabo-ai/id6758163705";

interface HeroProps {
  t: Translations["hero"];
}

export default function Hero({ t }: HeroProps) {
  return (
    <section
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px 96px",
        background: "linear-gradient(160deg, #FAFBFC 60%, #EDF2F7 100%)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            background: "rgba(91,124,153,0.1)",
            color: "#5B7C99",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "5px 14px",
            borderRadius: 100,
            marginBottom: 28,
            border: "1px solid rgba(91,124,153,0.2)",
          }}
        >
          {t.badge}
        </div>

        {/* App name */}
        <h1
          style={{
            fontSize: "clamp(14px, 3vw, 18px)",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "#5B7C99",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          METABO AI
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(28px, 5.5vw, 54px)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "hsl(215 25% 18%)",
            letterSpacing: "-0.025em",
            marginBottom: 24,
            textWrap: "balance",
          }}
        >
          {t.tagline}
        </p>

        {/* Sub */}
        <p
          style={{
            fontSize: "clamp(15px, 2.5vw, 18px)",
            color: "hsl(215 15% 48%)",
            lineHeight: 1.7,
            marginBottom: 44,
            maxWidth: 540,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {t.sub}
        </p>

        {/* CTA */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "#5B7C99",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            padding: "16px 32px",
            borderRadius: 12,
            textDecoration: "none",
            boxShadow: "0 4px 24px rgba(91,124,153,0.3)",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 8px 32px rgba(91,124,153,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "none";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 4px 24px rgba(91,124,153,0.3)";
          }}
        >
          <AppStoreIcon />
          {t.cta}
        </a>
      </div>
    </section>
  );
}

function AppStoreIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.82.03 3.02 2.65 4.03 2.68 4.04l-.06.26zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
