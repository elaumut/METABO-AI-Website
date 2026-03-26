import { useState } from "react";
import type { Translations } from "../i18n";

const APP_STORE_URL = "https://apps.apple.com/app/id982107779";

interface PremiumProps {
  t: Translations["premium"];
}

export default function Premium({ t }: PremiumProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <section
      id="premium"
      style={{
        padding: "96px 24px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "hsl(215 25% 18%)",
              marginBottom: 12,
            }}
          >
            {t.title}
          </h2>
          <p style={{ fontSize: 16, color: "hsl(215 15% 50%)" }}>
            {t.subtitle}
          </p>
        </div>

        {/* Billing toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            marginBottom: 48,
            background: "hsl(210 18% 94%)",
            borderRadius: 10,
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
                padding: "8px 20px",
                borderRadius: 7,
                border: "none",
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
                background: billing === b ? "#fff" : "transparent",
                color: billing === b ? "hsl(215 25% 18%)" : "hsl(215 15% 50%)",
                boxShadow: billing === b ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
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
                    fontWeight: 600,
                    background: "rgba(91,124,153,0.15)",
                    color: "#5B7C99",
                    padding: "2px 7px",
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
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 48,
          }}
          className="price-grid"
        >
          {/* Free */}
          <div
            style={{
              border: "1px solid hsl(210 15% 88%)",
              borderRadius: 16,
              padding: "32px 28px",
              background: "#FAFBFC",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
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
                fontSize: 36,
                fontWeight: 300,
                color: "hsl(215 25% 18%)",
                letterSpacing: "-0.03em",
                marginBottom: 4,
              }}
            >
              €0
            </div>
            <div
              style={{
                fontSize: 13,
                color: "hsl(215 15% 55%)",
                marginBottom: 28,
              }}
            >
              &nbsp;
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "12px 0",
                borderRadius: 8,
                border: "1px solid hsl(210 15% 85%)",
                color: "hsl(215 25% 30%)",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                background: "#fff",
              }}
            >
              Download
            </a>
          </div>

          {/* Premium */}
          <div
            style={{
              border: "1.5px solid #5B7C99",
              borderRadius: 16,
              padding: "32px 28px",
              background: "rgba(91,124,153,0.04)",
              position: "relative",
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
                fontSize: 36,
                fontWeight: 300,
                color: "hsl(215 25% 18%)",
                letterSpacing: "-0.03em",
                marginBottom: 4,
              }}
            >
              {billing === "monthly" ? t.monthlyPrice : t.annualPrice}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "hsl(215 15% 55%)",
                marginBottom: 28,
              }}
            >
              {billing === "monthly" ? t.perMonth : t.perYear}
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                padding: "12px 0",
                borderRadius: 8,
                background: "#5B7C99",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {t.cta}
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <div
          style={{
            border: "1px solid hsl(210 15% 88%)",
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 100px 100px",
              background: "hsl(210 18% 96%)",
              padding: "12px 24px",
              borderBottom: "1px solid hsl(210 15% 88%)",
            }}
          >
            <div />
            <div
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 600,
                color: "hsl(215 15% 50%)",
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

          {t.comparison.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 100px 100px",
                padding: "14px 24px",
                borderBottom:
                  i < t.comparison.length - 1
                    ? "1px solid hsl(210 15% 91%)"
                    : "none",
                background: i % 2 === 0 ? "#fff" : "hsl(210 20% 99%)",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 14, color: "hsl(215 25% 28%)" }}>
                {row.feature}
              </span>
              <div style={{ textAlign: "center" }}>
                {row.free ? <CheckIcon /> : <DashIcon />}
              </div>
              <div style={{ textAlign: "center" }}>
                {row.premium ? <CheckIcon premium /> : <DashIcon />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ premium }: { premium?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-label="Yes"
      style={{ display: "inline-block" }}
    >
      <circle cx="8" cy="8" r="8" fill={premium ? "#5B7C99" : "hsl(210 15% 85%)"} />
      <path
        d="M5 8l2 2 4-4"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-label="No"
      style={{ display: "inline-block" }}
    >
      <path
        d="M5 8h6"
        stroke="hsl(210 15% 78%)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
