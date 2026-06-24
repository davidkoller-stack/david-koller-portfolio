import type { CaseStudy, Language } from "../types/content";

const enCases: CaseStudy[] = [
  {
    id: "shoptet-pay",
    number: "01",
    title: "Competing on value when the market pushes price.",
    shortTitle: "Competing on value when the market pushes price.",
    problemLabel: "Price pressure",
    eyebrow: "Shoptet Pay",
    statusLabel: "10,000+ → 12,000+ clients",
    tags: ["POSITIONING", "RETENTION", "ADOPTION"],
    summary: {
      problemSolved:
        "How to defend the value of an integrated payment solution in a category where the market often pushes price first.",
      myRole:
        "I owned positioning, lifecycle communication, retention, GTM and the value narrative across channels.",
      proofImpact:
        "The service grew from 10,000+ to 12,000+ clients and has been the most used payment gateway on Shoptet since 2025.",
    },
    delivered: [
      "Positioning",
      "Lifecycle communication",
      "Retention messaging",
      "Blog case studies",
      "Social content",
      "Paid distribution",
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
        items: ["Web & newsletter", "Customer proof stories", "Social & paid distribution"],
      },
      {
        title: "Lifecycle communication",
        items: ["Email journeys", "Admin & in-product messaging", "Retention messaging"],
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
      "Supported service growth through positioning, lifecycle and retention communication.",
      "Shifted the narrative from transaction-fee comparison to integrated business value.",
      "Delivered customer stories as public proof content.",
      "Connected web, newsletter, admin, social and paid communication.",
    ],
  },
  {
    id: "shoptet-pokladna",
    number: "02",
    title: "Launching a new POS solution through migration and adoption.",
    shortTitle: "Launching POS through migration and adoption.",
    problemLabel: "Migration & adoption",
    eyebrow: "Shoptet Pokladna",
    statusLabel: "1,000+ users",
    tags: ["LAUNCH", "ADOPTION", "MESSAGING", "STAKEHOLDERS"],
    summary: {
      problemSolved:
        "How to launch a new POS solution during migration and heightened customer sensitivity.",
      myRole:
        "This was marketing ownership from positioning and landing page work through video production, migration communication, webinar and post-launch feedback loops.",
      proofImpact:
        "Shoptet Pokladna reached 1,000+ users / cash registers.",
    },
    delivered: [
      "Landing page",
      "Launch messaging",
      "Migration communication",
      "Video production",
      "Webinar",
      "Feedback loop",
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
        title: "Positioning & launch",
        items: ["Claim & USP", "Landing page", "Launch messaging"],
      },
      {
        title: "Migration & education",
        items: ["Migration communication", "Webinar", "Admin communication"],
      },
      {
        title: "Production & feedback",
        items: ["Video production", "Post-launch feedback", "Product feedback loop"],
      },
    ],
    impact: [
      "Reframed migration as a step toward connected online and in-person sales.",
      "Owned the marketing line from landing page and launch through education.",
      "Turned post-launch feedback into product and communication follow-up.",
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
      "Product launches",
      "Copy/design briefs",
      "Cross-team coordination",
    ],
    context:
      "Logistics is often treated as operational infrastructure rather than a part of the merchant growth and customer-experience story.",
    challenge:
      "Make a logistics service relevant beyond operations by showing how simpler shipping and broader delivery options support merchants and their customers.",
    strategicBet:
      "Turn an operational logistics service into a clear merchant value story and repeatedly bring new carriers, features and service variants to market.",
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
        items: ["GLS Komplet & DPD CZ/SK", "Alza / AlzaBoxy & PPL updates", "SK launch"],
      },
      {
        title: "Features & coordination",
        items: ["Pickup-point widget", "Product news", "Copy/design & team alignment"],
      },
    ],
    impact: [
      "Reframed logistics around merchant value and customer experience.",
      "Repeatedly brought carriers, features and service variants to market.",
      "Supported CZ/SK adoption through product news and merchant education.",
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
        "I led positioning, segmented email communication, landing page, customer case study, Flowpay coordination, PPC and an AI personalization experiment.",
      proofImpact:
        "Built a clearer growth narrative for SME financing and tested segmented/personalized communication around concrete business use cases.",
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
      "Shoptet Boost is SME financing for e-shops, with use cases around inventory, seasonality, cash flow, marketing and expansion.",
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
        items: ["Flowpay alignment", "Launch messaging", "Market communication"],
      },
    ],
    impact: [
      "Built a clearer growth narrative for SME financing.",
      "Tested segmented and personalized communication around concrete business scenarios.",
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
    statusLabel: "10 000+ → 12 000+ klientů",
    tags: ["POSITIONING", "RETENTION", "ADOPTION"],
    summary: {
      problemSolved:
        "Jak obhájit hodnotu integrovaného platebního řešení v kategorii, kde trh často tlačí hlavně cenu.",
      myRole:
        "Vedl jsem positioning, lifecycle komunikaci, retenci, GTM a hodnotovou argumentaci služby napříč kanály.",
      proofImpact:
        "Služba vyrostla z 10 000+ na 12 000+ klientů a od roku 2025 je nejpoužívanější platební bránou na Shoptetu.",
    },
    delivered: [
      "Positioning",
      "Lifecycle komunikace",
      "Retenční messaging",
      "Blogové case studies",
      "Sociální obsah",
      "Placená distribuce",
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
        items: ["Web a newsletter", "Zákaznické proof příběhy", "Sociální obsah a placená distribuce"],
      },
      {
        title: "Komunikace v životním cyklu",
        items: ["E-mailové scénáře", "Admin a IPM komunikace", "Retenční komunikace"],
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
      "Podpořil růst služby positioningem, lifecycle a retenční komunikací.",
      "Posunul komunikaci od porovnávání poplatků k hodnotě integrovaného řešení.",
      "Doručil zákaznické příběhy jako veřejný proof obsah.",
      "Propojil web, newsletter, administraci, sociální obsah a placenou distribuci.",
    ],
  },
  {
    id: "shoptet-pokladna",
    number: "02",
    title: "Jak uvést nové POS řešení v prostředí migrace a nejistoty.",
    shortTitle: "Jak uvést POS řešení během migrace a nejistoty.",
    problemLabel: "Migrace a adopce",
    eyebrow: "Shoptet Pokladna",
    statusLabel: "1 000+ uživatelů",
    tags: ["LAUNCH", "ADOPTION", "MESSAGING", "STAKEHOLDERS"],
    summary: {
      problemSolved:
        "Jak uvést nové POS řešení v době migrace a zvýšené citlivosti zákazníků.",
      myRole:
        "Nešlo jen o oznámení nové služby. Šlo o odpovědnost za marketingovou linku od positioningu a landing page přes video produkci, migrační komunikaci, webinář až po post-launch práci se zpětnou vazbou.",
      proofImpact:
        "Shoptet Pokladna dosáhla 1 000+ uživatelů / pokladen.",
    },
    delivered: [
      "Landing page",
      "Launch messaging",
      "Migrační komunikace",
      "Video produkce",
      "Webinář",
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
        title: "Positioning a launch",
        items: ["Claim a USP", "Landing page", "Launch messaging"],
      },
      {
        title: "Migrace a edukace",
        items: ["Migrační komunikace", "Webinář", "Komunikace v administraci"],
      },
      {
        title: "Produkce a zpětná vazba",
        items: ["Video produkce", "Post-launch feedback", "Zpětná vazba pro produkt"],
      },
    ],
    impact: [
      "Přerámoval migraci jako krok k propojení online a osobního prodeje.",
      "Řídil marketingovou linku od landing page a launch komunikace po edukaci.",
      "Převedl post-launch zpětnou vazbu do podnětů pro produkt a komunikaci.",
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
      "Produktové launche",
      "Zadání pro copy/design",
      "Sladění týmů",
    ],
    context:
      "Logistika bývá vnímána jako provozní infrastruktura, ne jako součást růstu obchodníka a zákaznické zkušenosti.",
    challenge:
      "Ukázat význam logistické služby i mimo samotný provoz: jednodušší expedici, širší možnosti doručení a lepší zkušenost obchodníka i jeho zákazníků.",
    strategicBet:
      "Z provozní logistické služby udělat srozumitelný obchodní argument pro e-shopy a opakovaně uvádět na trh nové dopravce, funkce a varianty služby.",
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
        items: ["GLS Komplet a DPD CZ/SK", "Alza / AlzaBoxy a PPL novinky", "SK launch"],
      },
      {
        title: "Funkce a koordinace",
        items: ["Widget výdejních míst", "Produktové novinky", "Copy/design a sladění týmů"],
      },
    ],
    impact: [
      "Přerámoval logistiku kolem hodnoty pro obchodníka a jeho zákazníky.",
      "Opakovaně uváděl na trh dopravce, funkce a varianty služby.",
      "Podpořil adopci v CZ/SK produktovými novinkami a edukací obchodníků.",
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
        "Řídil jsem positioning, segmentovaný e-mailing, landing page, klientskou case study, koordinaci s Flowpay, PPC a experiment s AI personalizací.",
      proofImpact:
        "Postavil jsem srozumitelnější růstový narativ pro financování e-shopů a testoval segmentovanou/personalizovanou komunikaci podle konkrétních business scénářů.",
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
      "Shoptet Boost je financování pro e-shopy s využitím pro zásoby, sezónnost, cash-flow, marketing a expanzi.",
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
        items: ["Sladění s Flowpay", "Komunikace spuštění", "Komunikace na trhu"],
      },
    ],
    impact: [
      "Postavil srozumitelnější růstový narativ pro financování e-shopů.",
      "Testoval segmentovanou a personalizovanou komunikaci podle konkrétních business scénářů.",
    ],
  },
];

export const caseStudies: Record<Language, CaseStudy[]> = {
  en: enCases,
  cs: csCases,
};
