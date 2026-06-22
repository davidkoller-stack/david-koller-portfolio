import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { GuidedPath } from "./components/GuidedPath";
import { BusinessImpact } from "./components/BusinessImpact";
import { CaseStudies } from "./components/CaseStudies";
import { HowIWork } from "./components/HowIWork";
import { Leadership } from "./components/Leadership";
import { Closing, ProofGallery } from "./components/Closing";
import { FloatingNavigation } from "./components/FloatingNavigation";
import { en } from "./content/en";
import { cs } from "./content/cs";
import { caseStudies } from "./data/caseStudies";
import { evidence } from "./data/evidence";
import { skills } from "./data/skills";
import type { Language } from "./types/content";

const contentByLanguage = { en, cs };

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const content = contentByLanguage[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main>
      <Navigation
        content={content.nav}
        language={language}
        setLanguage={setLanguage}
      />
      <FloatingNavigation content={content.floatingNav} />
      <Hero content={content.hero} />
      <GuidedPath content={content.guidedPath} />
      <BusinessImpact content={content.businessImpact} />
      <CaseStudies content={content.casesIntro} cases={caseStudies[language]} />
      <ProofGallery
        content={content.evidencePlaceholder}
        evidence={evidence[language]}
      />
      <HowIWork
        content={content.howIWork}
        foundations={content.foundations}
        operatingSystem={content.operatingSystem}
      />
      <Leadership content={content.leadership} skills={skills[language]} />
      <Closing content={content.closing} footer={content.footer} />
    </main>
  );
}

export default App;
