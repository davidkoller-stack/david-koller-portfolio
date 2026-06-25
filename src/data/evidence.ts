import type { Language } from "../types/content";

export type EvidenceItem = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: "youtube" | "image" | "link";
  url?: string;
  image?: string;
  imageFit?: "cover" | "contain";
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
    title: "Customer story video",
    subtitle: "A video story connecting brand, product and a real customer experience.",
    category: "Video production",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=hntdXOL8KOM",
    description:
      "Public video output supporting the selected proof layer of the portfolio.",
    status: "public",
    role: "Customer story and public-facing production",
    relatedProject: "Customer story",
  },
  {
    id: "pokladna-landing-page",
    title: "Shoptet Pokladna landing page",
    subtitle: "Product landing page for a new POS solution.",
    category: "Product launches",
    type: "link",
    url: "https://www.shoptet.cz/shoptet-pokladna/",
    image: "/assets/proof/shoptet-pokladna-preview.jpg",
    imageFit: "cover",
    description: "Public product page supporting the Shoptet Pokladna launch.",
    status: "public",
    role: "Launch narrative, structure and product value argumentation.",
    relatedProject: "Shoptet Pokladna",
  },
  {
    id: "daillo-customer-story",
    title: "Daillo customer story",
    subtitle: "Public ecosystem proof for Shoptet Pay and Shoptet Balíky.",
    category: "Customer stories",
    type: "link",
    url: "https://blog.shoptet.cz/pribeh-daillo/",
    image: "/assets/proof/daillo-customer-story.jpg",
    imageFit: "cover",
    description: "Public customer story used as ecosystem proof content.",
    status: "public",
    role: "Customer story framing and proof content.",
    relatedProject: "Shoptet Pay · Shoptet Balíky",
  },
  {
    id: "fanda-nhl-customer-story",
    title: "Fanda-NHL customer story",
    subtitle: "Public Shoptet Pay proof asset.",
    category: "Customer stories",
    type: "link",
    url: "https://blog.shoptet.cz/shoptet-pay-fanda-nhl/",
    image: "/assets/proof/fanda-nhl-customer-story.jpg",
    imageFit: "cover",
    description: "Public customer story supporting Shoptet Pay communication.",
    status: "public",
    role: "Customer story and Shoptet Pay proof content.",
    relatedProject: "Shoptet Pay",
  },
  {
    id: "shoptet-pay-event",
    title: "Shoptet Pay event execution",
    subtitle: "A public-facing brand and product environment brought to life.",
    category: "Events",
    type: "image",
    image: "/assets/proof/shoptet-pay-event.jpg",
    imageFit: "cover",
    description:
      "Public event setup demonstrating physical delivery of Shoptet Pay communication.",
    status: "public",
    role: "Messaging, preparation and public-facing delivery.",
    relatedProject: "Shoptet Pay",
  },
  {
    id: "shoptet-baliky-campaign",
    title: "Shoptet Balíky campaign creative",
    subtitle: "Market-facing creative built around adoption proof.",
    category: "Campaign creatives",
    type: "image",
    image: "/assets/proof/shoptet-baliky-campaign.jpg",
    imageFit: "cover",
    description:
      "Public campaign creative communicating the scale of Shoptet Balíky adoption.",
    status: "public",
    role: "Messaging, creative brief and paid distribution.",
    relatedProject: "Shoptet Balíky",
  },
  {
    id: "shoptet-pay-campaign",
    title: "Shoptet Pay campaign creative",
    subtitle: "Public proof translated into a clear campaign message.",
    category: "Campaign creatives",
    type: "image",
    image: "/assets/proof/shoptet-pay-campaign.jpg",
    imageFit: "cover",
    description:
      "Public campaign creative communicating Shoptet Pay adoption.",
    status: "public",
    role: "Messaging, creative brief and paid distribution.",
    relatedProject: "Shoptet Pay",
  },
  {
    id: "production-coordination",
    title: "Production coordination",
    subtitle: "Behind-the-scenes delivery of a market-facing content asset.",
    category: "Video production",
    type: "image",
    image: "/assets/proof/production-coordination.jpg",
    imageFit: "cover",
    description:
      "Behind-the-scenes production image showing collaborative content delivery.",
    status: "public",
    role: "Production preparation, coordination and public output.",
    relatedProject: "Shoptet ecosystem",
  },
  {
    id: "shoptet-pokladna-production",
    title: "Shoptet Pokladna launch production",
    subtitle: "Product storytelling grounded in a real retail environment.",
    category: "Product launches",
    type: "image",
    image: "/assets/proof/shoptet-pokladna-production.jpg",
    imageFit: "cover",
    description:
      "Behind-the-scenes production for the Shoptet Pokladna launch.",
    status: "public",
    role: "Launch narrative, production coordination and product storytelling.",
    relatedProject: "Shoptet Pokladna",
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
    title: "Video zákaznického příběhu",
    subtitle: "Video příběh propojující značku, produkt a reálnou zkušenost klienta.",
    category: "Video produkce",
    description:
      "Veřejný video výstup doplňující vrstvu vybraných důkazů v portfoliu.",
    role: "Zákaznický příběh a veřejná produkce",
    relatedProject: "Zákaznický příběh",
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
    category: "Zákaznické příběhy",
    description: "Veřejný zákaznický příběh použitý jako proof obsah ekosystému.",
    role: "Zarámování zákaznického příběhu a proof obsah.",
    relatedProject: "Shoptet Pay · Shoptet Balíky",
  },
  {
    ...enEvidence[5],
    title: "Zákaznický příběh Fanda-NHL",
    subtitle: "Veřejný proof výstup pro Shoptet Pay.",
    category: "Zákaznické příběhy",
    description: "Veřejný zákaznický příběh podporující komunikaci Shoptet Pay.",
    role: "Zákaznický příběh a proof obsah pro Shoptet Pay.",
    relatedProject: "Shoptet Pay",
  },
  {
    ...enEvidence[6],
    title: "Event execution Shoptet Pay",
    subtitle: "Veřejný brandový a produktový prostor převedený do reality.",
    category: "Eventy",
    description:
      "Veřejná eventová instalace dokládající fyzické doručení komunikace Shoptet Pay.",
    role: "Messaging, příprava a veřejné doručení.",
    relatedProject: "Shoptet Pay",
  },
  {
    ...enEvidence[7],
    title: "Reklamní kreativa Shoptet Balíky",
    subtitle: "Veřejná kreativa postavená na důkazu adopce služby.",
    category: "Reklamní kreativa",
    description:
      "Veřejná reklamní kreativa komunikující rozsah adopce Shoptet Balíků.",
    role: "Messaging, kreativní zadání a placená distribuce.",
    relatedProject: "Shoptet Balíky",
  },
  {
    ...enEvidence[8],
    title: "Reklamní kreativa Shoptet Pay",
    subtitle: "Veřejný důkaz převedený do jasného kampanového sdělení.",
    category: "Reklamní kreativa",
    description:
      "Veřejná reklamní kreativa komunikující adopci Shoptet Pay.",
    role: "Messaging, kreativní zadání a placená distribuce.",
    relatedProject: "Shoptet Pay",
  },
  {
    ...enEvidence[9],
    title: "Koordinace produkce",
    subtitle: "Zákulisí doručení obsahu určeného směrem na trh.",
    category: "Video produkce",
    description:
      "Zákulisní fotografie ukazující týmové doručení obsahové produkce.",
    role: "Příprava produkce, koordinace a veřejný výstup.",
    relatedProject: "Ekosystém Shoptetu",
  },
  {
    ...enEvidence[10],
    title: "Launch produkce Shoptet Pokladny",
    subtitle: "Produktový storytelling zasazený do reálného prostředí prodejny.",
    category: "Produktové launch výstupy",
    description:
      "Zákulisní fotografie z produkce pro launch Shoptet Pokladny.",
    role: "Launch narativ, koordinace produkce a produktový storytelling.",
    relatedProject: "Shoptet Pokladna",
  },
];

export const evidence: Record<Language, EvidenceItem[]> = {
  en: enEvidence,
  cs: csEvidence,
};
