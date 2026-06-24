import type { Language } from "../types/content";

export type EvidenceItem = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: "youtube" | "image" | "link";
  url?: string;
  image?: string;
  role?: string;
  relatedProject?: string;
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
    role: "Product communication and production delivery",
    relatedProject: "Shoptet ecosystem",
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
    role: "Educational format and adoption communication",
    relatedProject: "Shoptet ecosystem",
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
    role: "Customer story and public-facing production",
    relatedProject: "Customer case study",
  },
  {
    id: "pokladna-landing-page",
    title: "Shoptet Pokladna landing page",
    subtitle: "Product landing page for a new POS solution.",
    category: "Product launches",
    type: "link",
    url: "https://www.shoptet.cz/shoptet-pokladna/",
    description: "Public product page supporting the Shoptet Pokladna launch.",
    status: "public",
    role: "Launch narrative, structure and product value argumentation.",
    relatedProject: "Shoptet Pokladna",
  },
  {
    id: "daillo-customer-story",
    title: "Daillo customer story",
    subtitle: "Public ecosystem proof for Shoptet Pay and Shoptet Balíky.",
    category: "Customer case studies",
    type: "link",
    url: "https://blog.shoptet.cz/pribeh-daillo/",
    description: "Public customer story used as ecosystem proof content.",
    status: "public",
    role: "Customer story framing and proof content.",
    relatedProject: "Shoptet Pay · Shoptet Balíky",
  },
  {
    id: "fanda-nhl-customer-story",
    title: "Fanda-NHL customer story",
    subtitle: "Public Shoptet Pay proof asset.",
    category: "Customer case studies",
    type: "link",
    url: "https://blog.shoptet.cz/shoptet-pay-fanda-nhl/",
    description: "Public customer story supporting Shoptet Pay communication.",
    status: "public",
    role: "Customer story and Shoptet Pay proof content.",
    relatedProject: "Shoptet Pay",
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
    role: "Produktová komunikace a doručení produkce",
    relatedProject: "Ekosystém Shoptetu",
  },
  {
    ...enEvidence[1],
    title: "Edukační video obsah",
    subtitle: "Video formát pro vysvětlení hodnoty produktu a podporu adopce.",
    category: "Video produkce",
    description:
      "Veřejný video výstup jako důkaz produkce obsahu a doručení komunikace.",
    role: "Edukační formát a komunikace pro adopci",
    relatedProject: "Ekosystém Shoptetu",
  },
  {
    ...enEvidence[2],
    title: "Klientské case study video",
    subtitle: "Video příběh propojující značku, produkt a reálnou zkušenost klienta.",
    category: "Video produkce",
    description:
      "Veřejný video výstup doplňující vrstvu vybraných důkazů v portfoliu.",
    role: "Zákaznický příběh a veřejná produkce",
    relatedProject: "Klientská case study",
  },
  {
    ...enEvidence[3],
    title: "Landing page Shoptet Pokladny",
    subtitle: "Produktová landing page pro nové POS řešení.",
    category: "Produktové launch výstupy",
    description: "Veřejná produktová stránka podporující launch Shoptet Pokladny.",
    role: "Launch narativ, struktura a hodnotová argumentace produktu.",
    relatedProject: "Shoptet Pokladna",
  },
  {
    ...enEvidence[4],
    title: "Zákaznický příběh Daillo",
    subtitle: "Veřejný proof pro ekosystém Shoptet Pay a Shoptet Balíky.",
    category: "Klientské case studies",
    description: "Veřejný zákaznický příběh použitý jako proof obsah ekosystému.",
    role: "Zarámování zákaznického příběhu a proof obsah.",
    relatedProject: "Shoptet Pay · Shoptet Balíky",
  },
  {
    ...enEvidence[5],
    title: "Zákaznický příběh Fanda-NHL",
    subtitle: "Veřejný proof výstup pro Shoptet Pay.",
    category: "Klientské case studies",
    description: "Veřejný zákaznický příběh podporující komunikaci Shoptet Pay.",
    role: "Zákaznický příběh a proof obsah pro Shoptet Pay.",
    relatedProject: "Shoptet Pay",
  },
];

export const evidence: Record<Language, EvidenceItem[]> = {
  en: enEvidence,
  cs: csEvidence,
};
