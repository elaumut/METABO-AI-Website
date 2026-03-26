import { useState, useEffect } from "react";
import type { Translations } from "../i18n";
import type { Lang } from "../i18n";

const APP_STORE_URL = "https://apps.apple.com/fr/app/metabo-ai/id6758163705";

interface NavbarProps {
  t: Translations["nav"];
  lang: Lang;
  toggleLang: () => void;
}

export default function Navbar({ t, lang, toggleLang }: NavbarProps) {
  const [open, setOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { label: t.features, href: "#features" },
    { label: t.howItWorks, href: "#how-it-works" },
    { label: t.premium, href: "#premium" },
    { label: t.privacy, href: "/privacy" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(250,251,252,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <nav
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 20px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              fontWeight: 700,
              fontSize: 16,
              color: "#5B7C99",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              zIndex: 60,
            }}
          >
            METABO AI
          </a>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{
              alignItems: "center",
              gap: 32,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  color: "hsl(215 25% 35%)",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#5B7C99")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color =
                    "hsl(215 25% 35%)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: lang toggle + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 60 }}>
            <button
              onClick={toggleLang}
              aria-label="Changer de langue"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 3,
                padding: "4px 2px",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: lang === "fr" ? 700 : 500, color: lang === "fr" ? "#5B7C99" : "hsl(215 15% 60%)", letterSpacing: "0.02em" }}>FR</span>
              <span style={{ fontSize: 11, color: "hsl(215 15% 70%)", lineHeight: 1 }}>/</span>
              <span style={{ fontSize: 12, fontWeight: lang === "en" ? 700 : 500, color: lang === "en" ? "#5B7C99" : "hsl(215 15% 60%)", letterSpacing: "0.02em" }}>EN</span>
            </button>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#5B7C99",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: 20,
                textDecoration: "none",
              }}
              className="hidden md:inline-block"
            >
              {t.download}
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                width: 24,
                height: 24,
                flexDirection: "column",
                justifyContent: "center",
                gap: 5,
                position: "relative",
                padding: 0,
              }}
              className="flex md:hidden"
              aria-label="Menu"
            >
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  background: "hsl(215 25% 20%)",
                  borderRadius: 2,
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: open ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  background: "hsl(215 25% 20%)",
                  borderRadius: 2,
                  opacity: open ? 0 : 1,
                  transition: "opacity 0.2s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  background: "hsl(215 25% 20%)",
                  borderRadius: 2,
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: open
                    ? "translateY(-7px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#FAFBFC",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          padding: "100px 24px 40px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 32, flex: 1 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 24,
                color: "hsl(215 25% 15%)",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                transform: open ? "translateY(0)" : "translateY(10px)",
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: open ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#5B7C99",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            padding: "16px",
            borderRadius: 12,
            textDecoration: "none",
            textAlign: "center",
            width: "100%",
            transform: open ? "translateY(0)" : "translateY(10px)",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: open ? 1 : 0,
          }}
        >
          {t.download}
        </a>
      </div>
    </>
  );
}
