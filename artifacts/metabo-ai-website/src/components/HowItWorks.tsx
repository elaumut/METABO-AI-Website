import type { Translations } from "../i18n";

interface HowItWorksProps {
  t: Translations["howItWorks"];
}

export default function HowItWorks({ t }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "96px 24px",
        background: "#FAFBFC",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
          <p
            style={{
              fontSize: 16,
              color: "hsl(215 15% 50%)",
              maxWidth: 440,
              margin: "0 auto",
            }}
          >
            {t.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 0,
            position: "relative",
          }}
        >
          {t.steps.map((step, i) => (
            <div
              key={i}
              style={{
                padding: "40px 32px",
                position: "relative",
                borderRight: i < t.steps.length - 1 ? "1px solid hsl(210 15% 88%)" : "none",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 200,
                  color: "rgba(91,124,153,0.2)",
                  lineHeight: 1,
                  marginBottom: 20,
                  letterSpacing: "-0.03em",
                }}
              >
                {step.num}
              </div>

              {/* Dot connector */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#5B7C99",
                    flexShrink: 0,
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "hsl(215 25% 18%)",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "hsl(215 15% 48%)",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
