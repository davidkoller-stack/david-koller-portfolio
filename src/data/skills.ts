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
    descriptor: "Turning ambiguity into direction",
    items: ["Business problem framing", "GTM strategy", "Positioning", "Prioritization", "Growth planning"],
  },
  {
    number: "02",
    title: "Brand",
    descriptor: "Building trust and differentiation",
    items: ["Messaging", "Narrative", "Differentiation", "Creative direction", "Trust building"],
  },
  {
    number: "03",
    title: "Growth",
    descriptor: "Moving customers through the lifecycle",
    items: ["Acquisition", "Adoption", "Retention", "Segmentation", "Lifecycle communication"],
  },
  {
    number: "04",
    title: "Performance",
    descriptor: "Keeping decisions accountable",
    items: ["Budget ownership", "Paid media logic", "KPI management", "Analytics", "Conversion paths"],
  },
  {
    number: "05",
    title: "Stakeholders",
    descriptor: "Aligning teams around outcomes",
    items: ["Product", "Sales", "Customer care", "Data teams", "Specialists & agencies", "Partners"],
  },
  {
    number: "06",
    title: "AI execution",
    descriptor: "Accelerating work without lowering quality.",
    items: ["Research", "Prototyping", "Content systems", "Analysis", "Workflow acceleration"],
  },
];

const csSkills: SkillGroup[] = [
  {
    number: "01",
    title: "Strategy",
    descriptor: "Převádím nejasné zadání do srozumitelného směru",
    items: ["Pojmenování problému", "Uvedení na trh", "Positioning", "Priority", "Plán růstu"],
  },
  {
    number: "02",
    title: "Brand",
    descriptor: "Stavím důvěru a jasné odlišení",
    items: ["Sdělení", "Příběh značky", "Odlišení", "Kreativní vedení", "Důvěryhodnost"],
  },
  {
    number: "03",
    title: "Growth",
    descriptor: "Posouvám zákazníka napříč celým životním cyklem",
    items: ["Akvizice", "Adopce", "Udržení", "Segmentace", "Práce se zákaznickou cestou"],
  },
  {
    number: "04",
    title: "Performance",
    descriptor: "Držím rozhodnutí odpovědná vůči číslům",
    items: ["Rozpočty", "Placená média", "KPI", "Analytika", "Konverzní cesty"],
  },
  {
    number: "05",
    title: "Stakeholders",
    descriptor: "Spojuji týmy kolem společného výsledku",
    items: ["Produkt", "Obchod", "Péče o zákazníky", "Datové týmy", "Specialisté a agentury", "Partneři"],
  },
  {
    number: "06",
    title: "AI execution",
    descriptor: "Zrychluji práci bez snižování kvality",
    items: ["Rešerše", "Prototypování", "Obsahové systémy", "Analýza", "Zrychlení pracovních postupů"],
  },
];

export const skills: Record<Language, SkillGroup[]> = {
  en: enSkills,
  cs: csSkills,
};
