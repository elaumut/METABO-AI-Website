import { useState, useEffect } from "react";
import { detectLang, translations, type Lang } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Premium from "./components/Premium";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return (
    <div className="min-h-screen" style={{ background: "#FAFBFC" }}>
      <Navbar t={t.nav} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero t={t.hero} lang={lang} />
        <Features t={t.features} />
        <HowItWorks t={t.howItWorks} />
        <Premium t={t.premium} />
        <Privacy t={t.privacy} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
