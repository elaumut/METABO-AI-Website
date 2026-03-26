import type { Translations } from "../i18n";

interface FeaturesProps {
  t: Translations["features"];
}

const icons = [
  // Recovery Score — heart pulse
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h2l2-8 4 16 4-10 2 2h4" />
  </svg>,
  // Sleep — moon
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>,
  // Trend Detection — trending up
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>,
  // Premium — star
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
];

export default function Features({ t }: FeaturesProps) {
  return (
    <section
      id="features"
      style={{
        padding: "96px 24px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
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

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {t.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#FAFBFC",
                border: "1px solid hsl(210 15% 90%)",
                borderRadius: 14,
                padding: "32px 28px",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(91,124,153,0.12)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "none";
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  background: "rgba(91,124,153,0.1)",
                  borderRadius: 12,
                  color: "#5B7C99",
                  marginBottom: 20,
                }}
              >
                {icons[i]}
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "hsl(215 25% 18%)",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "hsl(215 15% 48%)",
                  lineHeight: 1.65,
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
