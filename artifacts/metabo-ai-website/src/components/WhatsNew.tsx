import type { Translations, Lang } from "../i18n";

interface WhatsNewProps {
  t: Translations["whatsNew"];
  lang: Lang;
}

const screenshots: Record<Lang, string[]> = {
  fr: [
    "feature-age-physiologique.jpg",
    "feature-widgets.png",
    "feature-partage.jpg",
  ],
  en: [
    "feature-age-physiologique-en.jpg",
    "feature-widgets.png",
    "feature-partage-en.jpg",
  ],
};

export default function WhatsNew({ t, lang }: WhatsNewProps) {
  const base = import.meta.env.BASE_URL;
  const images = screenshots[lang];

  return (
    <section
      id="whats-new"
      style={{
        padding: "80px 20px",
        background: "#FAFBFC",
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
              maxWidth: 460,
              margin: "0 auto",
            }}
          >
            {t.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
            alignItems: "start",
          }}
        >
          {t.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid rgba(91,124,153,0.1)",
                borderRadius: 24,
                overflow: "hidden",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
              className="hover:shadow-lg hover:-translate-y-1"
            >
              <div
                style={{
                  background: "#F0F4F8",
                  padding: "24px 24px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={`${base}${images[i]}`}
                  alt={item.name}
                  style={{
                    width: "100%",
                    maxWidth: 260,
                    height: "auto",
                    display: "block",
                    borderRadius: "12px 12px 0 0",
                  }}
                />
              </div>

              <div style={{ padding: "24px 28px 28px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "hsl(215 25% 15%)",
                      letterSpacing: "-0.01em",
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        background: "rgba(91,124,153,0.12)",
                        color: "#5B7C99",
                        padding: "3px 9px",
                        borderRadius: 100,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "hsl(215 15% 45%)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
                {item.disclaimer && (
                  <p
                    style={{
                      fontSize: 12,
                      color: "hsl(215 15% 55%)",
                      lineHeight: 1.5,
                      margin: "12px 0 0",
                      fontStyle: "italic",
                    }}
                  >
                    {item.disclaimer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
