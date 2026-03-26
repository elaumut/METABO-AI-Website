import type { Translations } from "../i18n";

interface HowItWorksProps {
  t: Translations["howItWorks"];
}

export default function HowItWorks({ t }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "100px 20px",
        background: "#FAFBFC",
        borderTop: "1px solid rgba(0,0,0,0.03)",
        borderBottom: "1px solid rgba(0,0,0,0.03)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
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
              {/* Giant number */}
              <div
                style={{
                  fontSize: "120px",
                  fontWeight: 700,
                  color: "rgba(91,124,153,0.06)",
                  lineHeight: 0.8,
                  position: "absolute",
                  top: -20,
                  left: 0,
                  zIndex: 0,
                  letterSpacing: "-0.05em",
                }}
                className="md:left-1/2 md:-translate-x-1/2"
              >
                {step.num}
              </div>

              <div style={{ position: "relative", zIndex: 1, paddingTop: 40 }}>
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
