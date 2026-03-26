import type { Translations } from "../i18n";

interface FeaturesProps {
  t: Translations["features"];
}

const icons = [
  // Recovery Score — heart pulse
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h2l2-8 4 16 4-10 2 2h4" />
  </svg>,
  // Sleep — moon
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>,
  // Trend Detection — trending up
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
];

export default function Features({ t }: FeaturesProps) {
  // Only taking 3 items to match "3 cartes horizontales" requirement
  const items = t.items.slice(0, 3);

  return (
    <section
      id="features"
      style={{
        padding: "100px 20px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
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

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#FAFBFC",
                border: "1px solid rgba(0,0,0,0.04)",
                borderRadius: 20,
                padding: "36px 32px",
                transition: "all 0.3s ease",
              }}
              className="hover:shadow-lg hover:-translate-y-1 hover:bg-white"
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  background: "rgba(91,124,153,0.1)",
                  borderRadius: 14,
                  color: "#5B7C99",
                  marginBottom: 24,
                }}
              >
                {icons[i]}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "hsl(215 25% 15%)",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "hsl(215 15% 45%)",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
