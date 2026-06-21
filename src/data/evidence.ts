import type { Language } from "../types/content";

export type EvidenceItem = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: "youtube";
  url: string;
  description: string;
  status: "public";
};

const enEvidence: EvidenceItem[] = [
  {
    id: "video-shoptet-production-01",
    title: "Product video production",
    subtitle: "Market-facing video output for product communication.",
    category: "Video production",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=T7d1xlrw7r4",
    description:
      "Public video output showing the ability to turn product or business communication into market-facing content.",
    status: "public",
  },
  {
    id: "video-shoptet-production-02",
    title: "Educational video content",
    subtitle: "Video format used to explain product value and adoption.",
    category: "Video production",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=UVhCx4zDul0",
    description:
      "Public video output used as evidence of content production and communication delivery.",
    status: "public",
  },
  {
    id: "video-shoptet-production-03",
    title: "Client case study video",
    subtitle: "A video story connecting brand, product and a real customer experience.",
    category: "Video production",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=hntdXOL8KOM",
    description:
      "Public video output supporting the selected proof layer of the portfolio.",
    status: "public",
  },
];

const csEvidence: EvidenceItem[] = [
  {
    ...enEvidence[0],
    title: "Produktová video produkce",
    subtitle: "Veřejný výstup pro produktovou komunikaci.",
    category: "Video produkce",
    description:
      "Veřejný video výstup ukazující převod produktové nebo business komunikace do obsahu směrem na trh.",
  },
  {
    ...enEvidence[1],
    title: "Edukační video obsah",
    subtitle: "Video formát pro vysvětlení hodnoty produktu a podporu adopce.",
    category: "Video produkce",
    description:
      "Veřejný video výstup jako důkaz produkce obsahu a doručení komunikace.",
  },
  {
    ...enEvidence[2],
    title: "Klientské case study video",
    subtitle: "Video příběh propojující značku, produkt a reálnou zkušenost klienta.",
    category: "Video produkce",
    description:
      "Veřejný video výstup doplňující vrstvu vybraných důkazů v portfoliu.",
  },
];

export const evidence: Record<Language, EvidenceItem[]> = {
  en: enEvidence,
  cs: csEvidence,
};
