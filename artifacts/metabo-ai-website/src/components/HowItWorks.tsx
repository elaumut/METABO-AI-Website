import type { Translations } from "../i18n";

interface HowItWorksProps {
  t: Translations["howItWorks"];
}

export default function HowItWorks({ t }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "72px 20px",
        background: "#FAFBFC",
        borderTop: "1px solid rgba(0,0,0,0.03)",
        borderBottom: "1px solid rgba(0,0,0,0.03)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
          <p
            style={{
              fontSize: 16,
              color: "hsl(215 15% 45%)",
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
            gap: 24,
          }}
        >
          {t.steps.map((step, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                padding: "0 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              className="md:items-center md:text-center"
            >
              {/* Step number badge */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(91,124,153,0.1)",
                  color: "#5B7C99",
                  fontSize: 15,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  flexShrink: 0,
                }}
              >
                {step.num}
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "hsl(215 25% 15%)",
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "hsl(215 15% 45%)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
