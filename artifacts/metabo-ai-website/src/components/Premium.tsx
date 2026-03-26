import { useState } from "react";
import type { Translations } from "../i18n";

const APP_STORE_URL = "https://apps.apple.com/fr/app/metabo-ai/id6758163705";
const VISIBLE_ROWS = 4;

interface PremiumProps {
  t: Translations["premium"];
}

export default function Premium({ t }: PremiumProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="premium"
      style={{
        padding: "72px 20px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "hsl(215 25% 15%)",
              marginBottom: 16,
            }}
          >
            {t.title}
          </h2>
          <p style={{ fontSize: 16, color: "hsl(215 15% 45%)" }}>
            {t.subtitle}
          </p>
        </div>

        {/* Billing toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "hsl(210 18% 96%)",
            borderRadius: 12,
            padding: 4,
            width: "fit-content",
            margin: "0 auto 48px",
          }}
        >
          {(["monthly", "annual"] as const).map((b) => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              style={{
                fontSize: 14,
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
                background: billing === b ? "#fff" : "transparent",
                color: billing === b ? "hsl(215 25% 15%)" : "hsl(215 15% 45%)",
                boxShadow: billing === b ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {b === "monthly" ? t.monthly : t.annual}
              {b === "annual" && (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    background: "rgba(91,124,153,0.12)",
                    color: "#5B7C99",
                    padding: "2px 8px",
                    borderRadius: 100,
                  }}
                >
                  {t.annualSave}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Price cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            marginBottom: 40,
          }}
          className="md:grid-cols-2"
        >
          {/* Free Card */}
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 20,
              padding: "24px",
              background: "#FAFBFC",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "hsl(215 15% 50%)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {t.freeLabel}
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 300,
                color: "hsl(215 25% 15%)",
                letterSpacing: "-0.03em",
                marginBottom: 8,
                lineHeight: 1,
              }}
            >
              €0
            </div>
            <div style={{ fontSize: 14, color: "hsl(215 15% 50%)", marginBottom: 32 }}>
              &nbsp;
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "16px",
                borderRadius: 12,
                border: "1.5px solid rgba(0,0,0,0.1)",
                color: "hsl(215 25% 25%)",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                background: "#fff",
                marginTop: "auto",
                transition: "background 0.2s",
              }}
              className="hover:bg-slate-50"
            >
              {t.freeLabel}
            </a>
          </div>

          {/* Premium Card */}
          <div
            style={{
              border: "2px solid #5B7C99",
              borderRadius: 20,
              padding: "24px",
              background: "#fff",
              position: "relative",
              boxShadow: "0 12px 32px -12px rgba(91,124,153,0.2)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#5B7C99",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {t.premiumLabel}
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 300,
                color: "hsl(215 25% 15%)",
                letterSpacing: "-0.03em",
                marginBottom: 8,
                lineHeight: 1,
                display: "flex",
                alignItems: "baseline",
                gap: 4,
              }}
            >
              {billing === "monthly" ? t.monthlyPrice : t.annualPrice}
              <span style={{ fontSize: 16, color: "hsl(215 15% 50%)", fontWeight: 400, letterSpacing: "0" }}>
                {billing === "monthly" ? t.perMonth : t.perYear}
              </span>
            </div>
            <div style={{ fontSize: 14, color: "hsl(215 15% 50%)", marginBottom: 32 }}>
              {billing === "annual" ? t.billedAnnually : t.billedMonthly}
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "16px",
                borderRadius: 12,
                background: "#5B7C99",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                marginTop: "auto",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-90"
            >
              {t.cta}
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <div
          style={{
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: 20,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 80px 80px",
              background: "#FAFBFC",
              padding: "16px 20px",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
            >
            <div />
            <div
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 600,
                color: "hsl(215 15% 45%)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {t.freeLabel}
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 700,
                color: "#5B7C99",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {t.premiumLabel}
            </div>
          </div>

          {(showAll ? t.comparison : t.comparison.slice(0, VISIBLE_ROWS)).map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 72px 72px",
                padding: "11px 16px",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
                background: "#fff",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 14, color: "hsl(215 25% 20%)", fontWeight: 500 }}>
                {row.feature}
              </span>
              <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                {row.free ? <CheckIcon /> : <DashIcon />}
              </div>
              <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                {row.premium ? <CheckIcon premium /> : <DashIcon />}
              </div>
            </div>
          ))}

          {t.comparison.length > VISIBLE_ROWS && (
            <button
              onClick={() => setShowAll((s) => !s)}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                color: "#5B7C99",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              {showAll ? t.seeLess : t.seeAll}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: showAll ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ premium }: { premium?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-label="Yes"
    >
      <circle cx="10" cy="10" r="10" fill={premium ? "#5B7C99" : "hsl(210 15% 85%)"} />
      <path
        d="M6 10l2.5 2.5 5-5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-label="No"
    >
      <path
        d="M6 10h8"
        stroke="hsl(210 15% 75%)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
