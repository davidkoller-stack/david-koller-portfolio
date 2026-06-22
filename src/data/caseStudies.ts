import type { CaseStudy, Language } from "../types/content";

const enCases: CaseStudy[] = [
  {
    id: "shoptet-pay",
    number: "01",
    title: "Competing on value when the market pushes price.",
    shortTitle: "Competing on value when the market pushes price.",
    problemLabel: "Price pressure",
    eyebrow: "Shoptet Pay",
    statusLabel: "12,000+ clients",
    tags: ["POSITIONING", "RETENTION", "ADOPTION"],
    summary: {
      problemSolved:
        "How to defend the value of an integrated payment solution in a category where the market often pushes price first.",
      myRole:
        "I owned positioning, lifecycle communication, retention, GTM and the value narrative across channels.",
      proofImpact:
        "Since 2025, Shoptet Pay has been the most used payment gateway on Shoptet, with 12,000+ clients.",
    },
    delivered: [
      "Positioning",
      "Lifecycle communication",
      "Retention messaging",
      "Blog case studies",
      "Social content",
      "PPC distribution",
    ],
    context:
      "The payment gateway market is highly price-sensitive. The easy trap would have been to reduce the conversation to transaction fees and compete only on price.",
    challenge:
      "Shoptet Pay needed to strengthen adoption and retention while proving that an integrated payment solution inside the Shoptet ecosystem can deliver more value than a cheaper standalone gateway.",
    strategicBet:
      "Change the category of comparison: from transaction fee to integrated business value.",
    strategicLines: [
      "Retention: keep existing customers engaged by communicating long-term value, operational simplicity and continued product relevance.",
      "Acquisition: win new customers through value-based positioning around integration, speed, ecosystem benefits and business impact.",
    ],
    orchestrationGroups: [
      {
        title: "Public-facing assets",
        items: ["Web & landing pages", "Blog & education", "PPC & paid distribution"],
      },
      {
        title: "Lifecycle communication",
        items: ["Email journeys", "In-product messaging", "Retention messaging"],
      },
      {
        title: "Commercial & care support",
        items: ["Commercial arguments", "Customer-care feedback routing"],
      },
      {
        title: "Customer insight loops",
        items: ["Customer research", "Product insight handoff"],
      },
    ],
    impact: [
      "Supported stronger adoption of Shoptet Pay across the ecosystem.",
      "Shifted the narrative from transaction-fee comparison to integrated business value.",
      "Turned customer feedback into product and communication insight.",
      "Built lifecycle messaging for acquisition, retention and service expansion.",
    ],
  },
  {
    id: "shoptet-pokladna",
    number: "02",
    title: "Launching a new POS solution through migration and adoption.",
    shortTitle: "Launching POS through migration and adoption.",
    problemLabel: "Migration & adoption",
    eyebrow: "Shoptet Pokladna",
    statusLabel: "Hundreds activated",
    tags: ["LAUNCH", "ADOPTION", "MESSAGING", "STAKEHOLDERS"],
    summary: {
      problemSolved:
        "How to launch a new POS solution during migration and heightened customer sensitivity.",
      myRole:
        "I shaped the marketing strategy, creative concept, segmentation, launch and post-launch communication.",
      proofImpact:
        "In the initial phase after launch, the new Shoptet Pokladna reached hundreds of activated projects.",
    },
    delivered: [
      "Launch messaging",
      "Migration communication",
      "Webinar",
      "Admin communication",
      "Sentiment analysis",
      "Product feedback loop",
    ],
    context:
      "The new Shoptet Pokladna launched at a moment when merchants needed clarity around the transition from the previous solution, product expectations and the connection between online and in-person sales.",
    challenge:
      "Launch the service while managing uncertainty, education needs, early customer reactions and the operational reality of migration.",
    strategicBet:
      "Frame the change not as a forced technical migration, but as a step toward connected online and in-person sales in one system.",
    strategicLines: [
      "Migration: give affected merchants clear, timely guidance around what changes and what happens next.",
      "Adoption: connect the launch to a broader value story around one system for online and in-person sales.",
    ],
    orchestrationGroups: [
      {
        title: "Launch communication",
        items: ["Positioning & messaging", "Segmented communication", "PR timing"],
      },
      {
        title: "Merchant education",
        items: ["Educational content", "Admin communication", "Follow-up messaging"],
      },
      {
        title: "Cross-team coordination",
        items: ["Support preparation", "Stakeholder coordination", "Feedback loops"],
      },
    ],
    impact: [
      "Reframed migration as a step toward connected online and in-person sales.",
      "Supported adoption with coordinated education and follow-up communication.",
      "Turned early customer feedback into product insight and follow-up communication.",
    ],
  },
  {
    id: "shoptet-baliky",
    number: "03",
    title: "Turning logistics from operations into a merchant growth advantage.",
    shortTitle: "Turning logistics into a merchant growth lever.",
    problemLabel: "Logistics growth",
    eyebrow: "Shoptet Balíky",
    statusLabel: "5,000+ e-shops",
    tags: ["GTM", "EDUCATION", "MARKET LAUNCHES", "ADOPTION"],
    summary: {
      problemSolved:
        "How to turn a logistics service into a business argument for easier operations and a better customer experience.",
      myRole:
        "I led GTM and marketing communication across carriers, markets and service variants.",
      proofImpact:
        "Shoptet Balíky is used by more than 5,000 e-shops and works with carriers such as PPL, DPD, Balíkovna, GLS, Packeta and Alza.",
    },
    delivered: [
      "Carrier GTM",
      "CZ/SK communication",
      "Merchant education",
      "Product news",
      "Copy/design briefs",
      "Internal alignment",
    ],
    context:
      "Logistics is often treated as operational infrastructure rather than a part of the merchant growth and customer-experience story.",
    challenge:
      "Make a logistics service relevant beyond operations by showing how simpler shipping and broader delivery options support merchants and their customers.",
    strategicBet:
      "Reframe Shoptet Balíky from an operational feature into a service that simplifies shipping, expands delivery choice and improves customer experience.",
    strategicLines: [
      "Merchant value: translate logistics features into operational simplicity and practical business benefits.",
      "Market activation: support carrier and market launches with clear education and coordinated communication.",
    ],
    orchestrationGroups: [
      {
        title: "Go-to-market messaging",
        items: ["Value proposition", "Web content", "Merchant education"],
      },
      {
        title: "Launch activation",
        items: ["Carrier launches", "Market-specific communication", "Email"],
      },
      {
        title: "Internal alignment",
        items: ["Admin communication", "Sales alignment", "Support alignment"],
      },
    ],
    impact: [
      "Reframed logistics around merchant value and customer experience.",
      "Supported carrier and market launches with practical merchant education.",
    ],
  },
  {
    id: "shoptet-boost",
    number: "04",
    title: "Positioning SME financing as a growth tool, not just a loan.",
    shortTitle: "Positioning SME financing as a growth tool.",
    problemLabel: "Trust in financing",
    eyebrow: "Shoptet Boost",
    statusLabel: "Public case study",
    tags: ["SEGMENTATION", "TRUST", "PARTNERSHIPS", "GROWTH"],
    summary: {
      problemSolved:
        "How to communicate financing as a concrete business opportunity, not a generic loan.",
      myRole:
        "I led the marketing side of positioning, segmentation, email communication, landing page, case study, partner coordination, reporting and PPC.",
      proofImpact:
        "Shoptet Boost is SME financing for e-shops. In a public customer case study, Jablečné díly used it seven times, drawing CZK 3M in total.",
    },
    delivered: [
      "Segmented email",
      "Landing page",
      "Customer case study",
      "Partner coordination",
      "PPC",
      "AI personalization experiment",
    ],
    context:
      "Financing products require trust, clarity and a clear connection to the situations where additional capital can create business value.",
    challenge:
      "Help merchants understand when financing makes sense while avoiding generic loan messaging that lacks relevance and differentiation.",
    strategicBet:
      "Frame financing as a tool for inventory, cash flow and concrete growth scenarios.",
    strategicLines: [
      "Relevance: connect financing offers to merchant situations, segments and growth opportunities.",
      "Trust: explain the value and use cases clearly through coordinated partner and market communication.",
    ],
    orchestrationGroups: [
      {
        title: "Segmented activation",
        items: ["Personalized offers", "Email", "Paid channels"],
      },
      {
        title: "Market education",
        items: ["Growth use cases", "Content", "Sales enablement"],
      },
      {
        title: "Partner coordination",
        items: ["Partner alignment", "Launch messaging", "Market communication"],
      },
    ],
    impact: [
      "Reframed financing around inventory, cash flow and growth opportunities.",
      "Used segmentation and education to make financing more relevant.",
    ],
  },
];

const csCases: CaseStudy[] = [
  {
    id: "shoptet-pay",
    number: "01",
    title: "Jak obhájit hodnotu, když trh tlačí hlavně cenu.",
    shortTitle: "Jak obhájit hodnotu, když trh tlačí hlavně cenu.",
    problemLabel: "Tlak na cenu",
    eyebrow: "Shoptet Pay",
    statusLabel: "12 000+ klientů",
    tags: ["POSITIONING", "RETENTION", "ADOPTION"],
    summary: {
      problemSolved:
        "Jak obhájit hodnotu integrovaného platebního řešení v kategorii, kde trh často tlačí hlavně cenu.",
      myRole:
        "Vedl jsem positioning, lifecycle komunikaci, retenci, GTM a hodnotovou argumentaci služby napříč kanály.",
      proofImpact:
        "Shoptet Pay je od roku 2025 nejpoužívanější platební bránou na Shoptetu a využívá ji 12 000+ klientů.",
    },
    delivered: [
      "Positioning",
      "Lifecycle komunikace",
      "Retenční messaging",
      "Blogové case studies",
      "Sociální obsah",
      "PPC distribuce",
    ],
    context:
      "Trh platebních bran je výrazně citlivý na cenu. Snadnou cestou by bylo zúžit komunikaci na transakční poplatky a soutěžit jen o nejnižší sazbu.",
    challenge:
      "Shoptet Pay potřeboval podpořit adopci a udržení zákazníků a zároveň ukázat, že integrované platební řešení v ekosystému Shoptetu přináší vyšší hodnotu než levnější samostatná brána.",
    strategicBet:
      "Změnit srovnávací rámec: z výše transakčního poplatku na celkovou hodnotu integrovaného řešení.",
    strategicLines: [
      "Udržení: připomínat stávajícím zákazníkům dlouhodobou hodnotu, jednoduchost provozu a další rozvoj služby.",
      "Akvizice: získávat nové zákazníky přes argumenty integrace, rychlosti, výhod ekosystému a přínosu pro jejich podnikání.",
    ],
    orchestrationGroups: [
      {
        title: "Veřejné výstupy",
        items: ["Web a vstupní stránky", "Blog a edukace", "PPC a placená distribuce"],
      },
      {
        title: "Komunikace v životním cyklu",
        items: ["E-mailové scénáře", "Komunikace v administraci", "Komunikace pro udržení"],
      },
      {
        title: "Podpora obchodu a péče",
        items: ["Argumenty pro obchod a zákaznický úspěch", "Předávání zpětné vazby z péče"],
      },
      {
        title: "Zákaznický insight",
        items: ["Zákaznický výzkum", "Předávání podnětů produktu"],
      },
    ],
    impact: [
      "Podpořil širší adopci Shoptet Pay v ekosystému.",
      "Posunul komunikaci od porovnávání poplatků k hodnotě integrovaného řešení.",
      "Proměnil zákaznickou zpětnou vazbu v podněty pro produkt a komunikaci.",
      "Vytvořil lifecycle komunikaci pro akvizici, udržení a rozšíření služby.",
    ],
  },
  {
    id: "shoptet-pokladna",
    number: "02",
    title: "Jak uvést nové POS řešení v prostředí migrace a nejistoty.",
    shortTitle: "Jak uvést POS řešení během migrace a nejistoty.",
    problemLabel: "Migrace a adopce",
    eyebrow: "Shoptet Pokladna",
    statusLabel: "Stovky aktivací",
    tags: ["LAUNCH", "ADOPTION", "MESSAGING", "STAKEHOLDERS"],
    summary: {
      problemSolved:
        "Jak uvést nové POS řešení v době migrace a zvýšené citlivosti zákazníků.",
      myRole:
        "Nastavoval jsem marketingovou strategii, kreativní koncept, segmentaci, launch i post-launch komunikaci.",
      proofImpact:
        "V úvodní fázi po spuštění dosáhla nová Shoptet Pokladna stovek aktivovaných projektů.",
    },
    delivered: [
      "Launch messaging",
      "Migrační komunikace",
      "Webinář",
      "Komunikace v administraci",
      "Analýza sentimentu",
      "Zpětná vazba pro produkt",
    ],
    context:
      "Nová Shoptet Pokladna přicházela v momentě, kdy obchodníci potřebovali jasně pochopit přechod z původního řešení, očekávání od nového produktu a propojení online a osobního prodeje.",
    challenge:
      "Uvést službu na trh a zároveň pracovat s nejistotou, potřebou edukace, prvními reakcemi zákazníků a provozní realitou migrace.",
    strategicBet:
      "Neukazovat změnu jako vynucenou technickou migraci, ale jako krok k propojení online a osobního prodeje v jednom systému.",
    strategicLines: [
      "Migrace: dát dotčeným obchodníkům včas jasné informace o změně a dalších krocích.",
      "Adopce: zasadit uvedení služby do širšího příběhu jednoho systému pro on-line a kamenný prodej.",
    ],
    orchestrationGroups: [
      {
        title: "Komunikace uvedení",
        items: ["Positioning a sdělení", "Segmentovaná komunikace", "Načasování PR"],
      },
      {
        title: "Edukace obchodníků",
        items: ["Edukační obsah", "Komunikace v administraci", "Následná komunikace"],
      },
      {
        title: "Sladění týmů",
        items: ["Příprava podpory", "Koordinace stakeholderů", "Práce se zpětnou vazbou"],
      },
    ],
    impact: [
      "Přerámoval migraci jako krok k propojení online a osobního prodeje.",
      "Podpořil adopci koordinovanou edukací a následnou komunikací.",
      "Převedl první zpětnou vazbu do podnětů pro produkt a další komunikaci.",
    ],
  },
  {
    id: "shoptet-baliky",
    number: "03",
    title: "Jak z logistiky udělat růstový argument pro e-shopy.",
    shortTitle: "Jak z logistiky udělat růstový argument pro e-shopy.",
    problemLabel: "Logistika jako růst",
    eyebrow: "Shoptet Balíky",
    statusLabel: "5 000+ e-shopů",
    tags: ["GTM", "EDUCATION", "MARKET LAUNCHES", "ADOPTION"],
    summary: {
      problemSolved:
        "Jak z logistické služby udělat obchodní argument pro jednodušší provoz a lepší zákaznickou zkušenost.",
      myRole:
        "Řídil jsem GTM a marketingovou komunikaci napříč dopravci, trhy a variantami služby.",
      proofImpact:
        "Shoptet Balíky využívá více než 5 000 e-shopů a služba pracuje s dopravci jako PPL, DPD, Balíkovna, GLS, Zásilkovna nebo Alza.",
    },
    delivered: [
      "GTM dopravců",
      "CZ/SK komunikace",
      "Edukace obchodníků",
      "Produktové novinky",
      "Zadání pro copy/design",
      "Interní sladění",
    ],
    context:
      "Logistika bývá vnímána jako provozní infrastruktura, ne jako součást růstu obchodníka a zákaznické zkušenosti.",
    challenge:
      "Ukázat význam logistické služby i mimo samotný provoz: jednodušší expedici, širší možnosti doručení a lepší zkušenost obchodníka i jeho zákazníků.",
    strategicBet:
      "Přerámovat Shoptet Balíky z provozní funkce na službu, která zjednodušuje expedici, rozšiřuje volbu dopravy a zlepšuje zákaznickou zkušenost.",
    strategicLines: [
      "Hodnota pro obchodníka: převést logistické funkce do jednoduchosti provozu a praktických přínosů pro business.",
      "Aktivace trhu: podpořit spuštění dopravců a vstupy na trhy jasnou edukací a koordinovanou komunikací.",
    ],
    orchestrationGroups: [
      {
        title: "Sdělení pro trh",
        items: ["Hodnotová nabídka", "Obsah webu", "Edukace obchodníků"],
      },
      {
        title: "Podpora spuštění",
        items: ["Spuštění dopravců", "Komunikace podle trhu", "E-mailing"],
      },
      {
        title: "Interní sladění",
        items: ["Komunikace v administraci", "Sladění s obchodem", "Sladění s podporou"],
      },
    ],
    impact: [
      "Přerámoval logistiku kolem hodnoty pro obchodníka a jeho zákazníky.",
      "Podpořil spuštění dopravců a trhů praktickou edukací obchodníků.",
    ],
  },
  {
    id: "shoptet-boost",
    number: "04",
    title: "Jak mluvit o financování jako o příležitosti, ne jako o dluhu.",
    shortTitle: "Jak mluvit o financování jako o příležitosti.",
    problemLabel: "Důvěra ve financování",
    eyebrow: "Shoptet Boost",
    statusLabel: "Veřejná case study",
    tags: ["SEGMENTATION", "TRUST", "PARTNERSHIPS", "GROWTH"],
    summary: {
      problemSolved:
        "Jak komunikovat financování jako konkrétní business příležitost, ne jako generickou půjčku.",
      myRole:
        "Řídil jsem marketingovou část positioningu, segmentace, e-mailingu, landing page, case study, koordinace s partnerem, reportingu a PPC.",
      proofImpact:
        "Shoptet Boost je financování pro e-shopy. Ve veřejné klientské case study Jablečné díly využily službu sedmkrát a celkem čerpaly 3 mil. Kč.",
    },
    delivered: [
      "Segmentovaný e-mailing",
      "Landing page",
      "Klientská case study",
      "Koordinace partnera",
      "PPC",
      "Experiment s AI personalizací",
    ],
    context:
      "Finanční produkty potřebují důvěru, srozumitelnost a jasnou vazbu na situace, ve kterých může dodatečný kapitál vytvořit obchodní hodnotu.",
    challenge:
      "Pomoci obchodníkům pochopit, kdy financování dává smysl, a vyhnout se obecné komunikaci půjček bez relevance a odlišení.",
    strategicBet:
      "Ukázat financování jako nástroj pro zásoby, cash-flow a konkrétní růstové scénáře.",
    strategicLines: [
      "Relevance: spojit nabídku financování se situací, segmentem a růstovou příležitostí obchodníka.",
      "Důvěra: jasně vysvětlit hodnotu a použití služby v koordinaci s partnerem a komunikací na trhu.",
    ],
    orchestrationGroups: [
      {
        title: "Segmentovaná aktivace",
        items: ["Personalizované nabídky", "E-mailing", "Placené kanály"],
      },
      {
        title: "Edukace trhu",
        items: ["Příklady růstového využití", "Obsah", "Podpora obchodu"],
      },
      {
        title: "Koordinace partnera",
        items: ["Sladění s partnerem", "Komunikace spuštění", "Komunikace na trhu"],
      },
    ],
    impact: [
      "Přerámoval financování kolem zásob, cash-flow a růstových příležitostí.",
      "Pomocí segmentace a edukace zvýšil relevanci nabídky financování.",
    ],
  },
];

export const caseStudies: Record<Language, CaseStudy[]> = {
  en: enCases,
  cs: csCases,
};
