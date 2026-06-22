import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Profile } from "./components/Profile";
import { Foundations } from "./components/Foundations";
import { OperatingSystem } from "./components/OperatingSystem";
import { CaseStudies } from "./components/CaseStudies";
import { Leadership } from "./components/Leadership";
import { Closing, EvidencePlaceholder } from "./components/Closing";
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
      <Hero content={content.hero} />
      <Profile content={content.profile} />
      <Foundations content={content.foundations} />
      <OperatingSystem content={content.operatingSystem} />
      <CaseStudies content={content.casesIntro} cases={caseStudies[language]} />
      <Leadership content={content.leadership} skills={skills[language]} />
      <EvidencePlaceholder
        content={content.evidencePlaceholder}
        evidence={evidence[language]}
      />
      <Closing content={content.closing} footer={content.footer} />
    </main>
  );
}

export default App;
