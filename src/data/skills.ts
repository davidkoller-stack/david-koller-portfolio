import type { Language } from "../types/content";

export type SkillGroup = {
  number: string;
  title: string;
  descriptor: string;
  items: string[];
};

const enSkills: SkillGroup[] = [
  {
    number: "01",
    title: "Strategy",
    descriptor: "From ambiguity to direction",
    items: ["Problem framing", "GTM strategy", "Positioning", "Prioritization"],
  },
  {
    number: "02",
    title: "Brand",
    descriptor: "Trust and differentiation",
    items: ["Messaging", "Narrative", "Differentiation", "Creative direction"],
  },
  {
    number: "03",
    title: "Growth",
    descriptor: "Across the customer lifecycle",
    items: ["Acquisition", "Adoption", "Retention", "Segmentation"],
  },
  {
    number: "04",
    title: "Performance",
    descriptor: "Accountability through numbers",
    items: ["Budget ownership", "Paid media", "KPI management", "Analytics"],
  },
  {
    number: "05",
    title: "Stakeholders",
    descriptor: "Alignment around outcomes",
    items: ["Product", "Commercial & care", "Data teams", "Agencies & partners"],
  },
  {
    number: "06",
    title: "AI execution",
    descriptor: "More speed, same quality",
    items: ["Research", "Prototyping", "Content systems", "Analysis"],
  },
];

const csSkills: SkillGroup[] = [
  {
    number: "01",
    title: "Strategy",
    descriptor: "Od nejasnosti ke směru",
    items: ["Pojmenování problému", "GTM strategie", "Positioning", "Priority"],
  },
  {
    number: "02",
    title: "Brand",
    descriptor: "Důvěra a jasné odlišení",
    items: ["Sdělení", "Příběh značky", "Odlišení", "Kreativní vedení"],
  },
  {
    number: "03",
    title: "Growth",
    descriptor: "Napříč cestou zákazníka",
    items: ["Akvizice", "Adopce", "Udržení", "Segmentace"],
  },
  {
    number: "04",
    title: "Performance",
    descriptor: "Odpovědnost vůči číslům",
    items: ["Rozpočty", "Placená média", "KPI", "Analytika"],
  },
  {
    number: "05",
    title: "Stakeholders",
    descriptor: "Sladění kolem výsledku",
    items: ["Produkt", "Obchod a péče", "Datové týmy", "Agentury a partneři"],
  },
  {
    number: "06",
    title: "AI execution",
    descriptor: "Vyšší rychlost, stejná kvalita",
    items: ["Rešerše", "Prototypování", "Obsahové systémy", "Analýza"],
  },
];

export const skills: Record<Language, SkillGroup[]> = {
  en: enSkills,
  cs: csSkills,
};
