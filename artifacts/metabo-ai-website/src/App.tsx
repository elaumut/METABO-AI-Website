import { useState, useEffect } from "react";
import { Router, Route, Switch } from "wouter";
import { detectLang, translations, type Lang } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Premium from "./components/Premium";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import SupportPage from "./pages/SupportPage";
import LegalPage from "./pages/LegalPage";

function HomePage({ lang, toggleLang }: { lang: Lang; toggleLang: () => void }) {
  const t = translations[lang];
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

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  const t = translations[lang];

  return (
    <Router>
      <Switch>
        <Route path="/" component={() => <HomePage lang={lang} toggleLang={toggleLang} />} />
        <Route path="/privacy" component={() => <PrivacyPage lang={lang} toggleLang={toggleLang} />} />
        <Route path="/terms" component={() => <TermsPage lang={lang} toggleLang={toggleLang} />} />
        <Route path="/support" component={() => <SupportPage lang={lang} toggleLang={toggleLang} t={t} />} />
        <Route path="/legal" component={() => <LegalPage lang={lang} toggleLang={toggleLang} />} />
        <Route component={() => <HomePage lang={lang} toggleLang={toggleLang} />} />
      </Switch>
    </Router>
  );
}
