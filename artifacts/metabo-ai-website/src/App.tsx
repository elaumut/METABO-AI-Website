import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Router, Route, Switch } from "wouter";
import { detectLang, translations, type Lang } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhatsNew from "./components/WhatsNew";
import HowItWorks from "./components/HowItWorks";
import Premium from "./components/Premium";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import SupportPage from "./pages/SupportPage";
import LegalPage from "./pages/LegalPage";

const homeMeta = {
  fr: {
    title: "METABO AI — Comprends ta récupération",
    description: "METABO AI transforme les données Apple Santé en une lecture claire de ta récupération, de tes points de fatigue et de ce qu'il vaut mieux faire aujourd'hui.",
    ogTitle: "METABO AI — Comprends ta récupération",
    ogDescription: "METABO AI t'aide à comprendre pourquoi ton énergie varie, ce qui pèse sur ta récupération et ce qu'il vaut mieux faire aujourd'hui.",
  },
  en: {
    title: "METABO AI — Understand Your Recovery",
    description: "METABO AI turns Apple Health data into a clear picture of your recovery, fatigue levels, and what's best to do today.",
    ogTitle: "METABO AI — Understand Your Recovery",
    ogDescription: "METABO AI helps you understand why your energy varies, what's weighing on your recovery, and what's best to do today.",
  },
};

function HomePage({ lang, toggleLang }: { lang: Lang; toggleLang: () => void }) {
  const t = translations[lang];
  const meta = homeMeta[lang];
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href="https://metabo-ai.com/" />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content="https://metabo-ai.com/" />
      </Helmet>
      <div className="min-h-screen" style={{ background: "#FAFBFC" }}>
        <Navbar t={t.nav} lang={lang} toggleLang={toggleLang} />
        <main>
          <Hero t={t.hero} lang={lang} />
          <Features t={t.features} lang={lang} />
          <WhatsNew t={t.whatsNew} lang={lang} />
          <HowItWorks t={t.howItWorks} />
          <Premium t={t.premium} />
          <Privacy t={t.privacy} />
        </main>
        <Footer t={t.footer} />
      </div>
    </>
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
