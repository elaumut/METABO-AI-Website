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
        padding: "100px 20px",
        background: "hsl(215 25% 12%)",
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
            background: "rgba(255,255,255,0.05)",
            borderRadius: 20,
            marginBottom: 32,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="3" ry="3" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>

        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 40px)",
            fontWeight: 500,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          {t.title}
        </h2>
        <p
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#5B7C99",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {t.subtitle}
        </p>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 540,
            margin: "0 auto 40px",
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
            fontSize: 15,
            fontWeight: 500,
            color: "#fff",
            padding: "12px 24px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: 12,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          className="hover:bg-white/20"
        >
          {t.link}
        </a>
      </div>
    </section>
  );
}
