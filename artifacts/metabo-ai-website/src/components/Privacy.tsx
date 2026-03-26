import type { Translations } from "../i18n";

const PRIVACY_URL = "https://elaumut.github.io/metabo-ai/privacy.html";

interface PrivacyProps {
  t: Translations["privacy"];
}

export default function Privacy({ t }: PrivacyProps) {
  return (
    <section
      id="privacy"
      style={{
        padding: "96px 24px",
        background: "hsl(209 26% 48%)",
      }}
    >
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Lock icon */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            background: "rgba(255,255,255,0.15)",
            borderRadius: 16,
            marginBottom: 28,
            color: "#fff",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>

        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 38px)",
            fontWeight: 300,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: 10,
          }}
        >
          {t.title}
        </h2>
        <p
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {t.subtitle}
        </p>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.75,
            marginBottom: 36,
          }}
        >
          {t.body}
        </p>
        <a
          href={PRIVACY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            fontSize: 14,
            fontWeight: 600,
            color: "#fff",
            borderBottom: "1px solid rgba(255,255,255,0.5)",
            paddingBottom: 2,
            textDecoration: "none",
            transition: "border-color 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(255,255,255,0.5)";
          }}
        >
          {t.link}
        </a>
      </div>
    </section>
  );
}
