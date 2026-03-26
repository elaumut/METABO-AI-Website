import { translations, type Lang } from "../i18n";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LegalLayoutProps {
  lang: Lang;
  toggleLang: () => void;
  children: React.ReactNode;
}

export default function LegalLayout({ lang, toggleLang, children }: LegalLayoutProps) {
  const t = translations[lang];

  return (
    <div className="min-h-screen" style={{ background: "#FAFBFC" }}>
      <Navbar t={t.nav} lang={lang} toggleLang={toggleLang} />
      <main style={{ paddingTop: 60 }}>
        {children}
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
