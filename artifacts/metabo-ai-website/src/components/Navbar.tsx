import { useState } from "react";
import type { Translations } from "../i18n";
import type { Lang } from "../i18n";

const APP_STORE_URL = "https://apps.apple.com/app/id982107779";

interface NavbarProps {
  t: Translations["nav"];
  lang: Lang;
  toggleLang: () => void;
}

export default function Navbar({ t, lang, toggleLang }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: t.features, href: "#features" },
    { label: t.howItWorks, href: "#how-it-works" },
    { label: t.premium, href: "#premium" },
    { label: t.privacy, href: "#privacy" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250,251,252,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid hsl(210 15% 88%)",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontWeight: 700,
            fontSize: 18,
            color: "#5B7C99",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          METABO AI
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 14,
                color: "hsl(215 25% 40%)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#5B7C99")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "hsl(215 25% 40%)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: lang toggle + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={toggleLang}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "hsl(215 25% 40%)",
              background: "none",
              border: "1px solid hsl(210 15% 85%)",
              borderRadius: 6,
              padding: "4px 10px",
              cursor: "pointer",
              letterSpacing: "0.03em",
            }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#5B7C99",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              padding: "8px 18px",
              borderRadius: 8,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            className="hidden sm:inline-block"
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
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            className="md:hidden"
            aria-label="Menu"
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "hsl(215 25% 30%)",
                borderRadius: 2,
                transition: "transform 0.2s",
                transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "hsl(215 25% 30%)",
                borderRadius: 2,
                opacity: open ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "hsl(215 25% 30%)",
                borderRadius: 2,
                transition: "transform 0.2s",
                transform: open
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#FAFBFC",
            borderTop: "1px solid hsl(210 15% 88%)",
            padding: "16px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 16,
                color: "hsl(215 25% 25%)",
                textDecoration: "none",
                fontWeight: 500,
                padding: "6px 0",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#5B7C99",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              padding: "12px 24px",
              borderRadius: 8,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            {t.download}
          </a>
        </div>
      )}
    </header>
  );
}
