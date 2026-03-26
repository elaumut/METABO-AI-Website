import type { Translations } from "../i18n";

interface FeaturesProps {
  t: Translations["features"];
}

const screenshots = [
  "feature-metaboscore.png",
  "feature-metabocoach.png",
  "feature-historique.png",
];

const altTexts = ["Metaboscore", "MetaboCoach", "Analyses & Historique"];

export default function Features({ t }: FeaturesProps) {
  const items = t.items.slice(0, 3);
  const base = import.meta.env.BASE_URL;

  return (
    <section
      id="features"
      style={{
        padding: "80px 20px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "hsl(215 25% 15%)",
              marginBottom: 14,
            }}
          >
            {t.title}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "hsl(215 15% 45%)",
              maxWidth: 400,
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
            gap: 24,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#FAFBFC",
                border: "1px solid rgba(0,0,0,0.05)",
                borderRadius: 20,
                overflow: "hidden",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              className="hover:shadow-lg hover:-translate-y-1"
            >
              {/* Screenshot */}
              <div
                style={{
                  height: 240,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={`${base}${screenshots[i]}`}
                  alt={altTexts[i]}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 18%",
                    display: "block",
                  }}
                />
              </div>

              {/* Text */}
              <div style={{ padding: "24px 28px 28px" }}>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "hsl(215 25% 15%)",
                    marginBottom: 10,
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
