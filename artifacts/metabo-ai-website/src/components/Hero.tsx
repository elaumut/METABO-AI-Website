import type { Translations } from "../i18n";

const APP_STORE_URL = "https://apps.apple.com/fr/app/metabo-ai/id6758163705";

interface HeroProps {
  t: Translations["hero"];
}

export default function Hero({ t }: HeroProps) {
  return (
    <section
      style={{
        padding: "100px 20px 40px",
        background: "linear-gradient(180deg, #FAFBFC 0%, #F1F4F8 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gap: 40,
          alignItems: "center",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Text Content */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 10 }} className="md:text-left">
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(91,124,153,0.08)",
              color: "#5B7C99",
              fontSize: 13,
              fontWeight: 600,
              padding: "6px 14px",
              borderRadius: 100,
              marginBottom: 24,
              border: "1px solid rgba(91,124,153,0.15)",
            }}
          >
            <AppleIcon />
            {t.badge}
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 600,
              lineHeight: 1.1,
              color: "hsl(215 25% 15%)",
              letterSpacing: "-0.03em",
              marginBottom: 20,
              textWrap: "balance",
            }}
          >
            {t.tagline}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              color: "hsl(215 15% 45%)",
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="md:mx-0"
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
            className="sm:flex-row md:justify-start"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#5B7C99",
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                padding: "16px 28px",
                borderRadius: 14,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(91,124,153,0.25)",
                transition: "transform 0.2s, box-shadow 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(91,124,153,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 14px rgba(91,124,153,0.25)";
              }}
            >
              <AppStoreIcon />
              {t.cta}
            </a>

            <a
              href="#how-it-works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "hsl(215 15% 45%)",
                fontSize: 15,
                fontWeight: 600,
                padding: "16px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#5B7C99")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "hsl(215 15% 45%)")}
            >
              {t.secondaryCta}
            </a>
          </div>
        </div>

        {/* Mockup iPhone */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          {/* Subtle glow behind mockup */}
          <div 
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              background: "radial-gradient(circle, rgba(91,124,153,0.15) 0%, rgba(250,251,252,0) 70%)",
              filter: "blur(40px)",
              zIndex: 0,
            }}
          />
          
          <div
            style={{
              width: 300,
              height: 610,
              background: "#fff",
              borderRadius: 44,
              border: "8px solid #E2E8F0",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.1), 0 12px 24px -8px rgba(91,124,153,0.15)",
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {/* iPhone Notch */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 120,
                height: 28,
                background: "#E2E8F0",
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                zIndex: 20,
              }}
            />

            {/* Dashboard Mockup Content */}
            <div style={{ padding: "48px 20px 20px", display: "flex", flexDirection: "column", gap: 16, height: "100%", background: "#F8FAFC" }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "hsl(215 25% 15%)" }}>{t.mockup.today}</div>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "hsl(210 15% 90%)" }} />
              </div>

              {/* Main Score Card */}
              <div
                style={{
                  background: "linear-gradient(135deg, #5B7C99 0%, #4A657D 100%)",
                  borderRadius: 20,
                  padding: 24,
                  color: "#fff",
                  boxShadow: "0 8px 20px rgba(91,124,153,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 500, opacity: 0.9, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>{t.mockup.scoreLabel}</div>
                <div style={{ fontSize: 56, fontWeight: 300, lineHeight: 1, marginBottom: 8 }}>84</div>
                <div style={{ fontSize: 14, opacity: 0.8, background: "rgba(255,255,255,0.15)", padding: "4px 12px", borderRadius: 100 }}>{t.mockup.optimal}</div>
              </div>

              {/* Grid Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                  <div style={{ width: 24, height: 24, borderRadius: 8, background: "rgba(91,124,153,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7C99", marginBottom: 12 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
                  </div>
                  <div style={{ fontSize: 12, color: "hsl(215 15% 50%)", marginBottom: 4 }}>{t.mockup.sleep}</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "hsl(215 25% 15%)" }}>7h 20m</div>
                </div>
                
                <div style={{ background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                  <div style={{ width: 24, height: 24, borderRadius: 8, background: "rgba(91,124,153,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7C99", marginBottom: 12 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                  <div style={{ fontSize: 12, color: "hsl(215 15% 50%)", marginBottom: 4 }}>{t.mockup.hrv}</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "hsl(215 25% 15%)" }}>52 ms</div>
                </div>
              </div>

              {/* Trend */}
              <div style={{ background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.03)", flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "hsl(215 25% 15%)", marginBottom: 16 }}>{t.mockup.trend}</div>
                {/* Fake Chart */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 60 }}>
                  {[40, 55, 45, 70, 85, 60, 84].map((h, i) => (
                    <div key={i} style={{ flex: 1, background: i === 6 ? "#5B7C99" : "hsl(210 15% 90%)", height: `${h}%`, borderRadius: 4 }} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppStoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.82.03 3.02 2.65 4.03 2.68 4.04l-.06.26zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.82.03 3.02 2.65 4.03 2.68 4.04l-.06.26zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
