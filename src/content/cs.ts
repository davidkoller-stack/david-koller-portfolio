import type { PortfolioContent } from "../types/content";

export const cs: PortfolioContent = {
  nav: {
    brand: "DK",
    role: "Značka & růst",
    items: [
      { label: "Profil", href: "#profile" },
      { label: "Marketing OS", href: "#marketing-os" },
      { label: "Případové studie", href: "#case-studies" },
      { label: "Skills", href: "#skills" },
      { label: "Kontakt", href: "#contact" },
    ],
    languageLabel: "Jazyk",
    downloadCv: "Stáhnout CV",
    backToTopLabel: "Zpět nahoru",
    toggleMenuLabel: "Otevřít nebo zavřít menu",
  },
  hero: {
    eyebrow: "Manažer značky a růstu · Praha",
    headline: "Měním business příležitosti v",
    highlightedWord: "růstové projekty.",
    subheadline:
      "Propojuji produktový marketing, značku, výkon, data a týmy tak, aby se nové služby nejen dostaly na trh, ale našly si místo u zákazníků.",
    name: "David Koller",
    role: "Manažer značky a růstu",
    domains: "E-commerce · Fintech · Služby pro podnikatele",
    trajectory: "",
    primaryCta: "Prohlédnout případové studie",
    secondaryCta: "Stáhnout CV",
    systemLabel: "Marketingový systém / co propojuji",
    systemCenter: "Přínos pro business",
    systemNodes: ["Značka", "Produkt", "Výkon", "Zákazník", "Obchod", "Týmy"],
    scrollLabel: "Přejít na profil",
  },
  profile: {
    eyebrow: "01 / Profil",
    title: "Nejsem specialista na jeden marketingový kanál.",
    intro:
      "Moje zkušenost sahá od produktového marketingu přes výkon až ke značce. Díky tomu se nedívám jen optikou jednoho kanálu a pro každý problém hledám správnou páku.",
    cards: [
      {
        number: "01",
        title: "Značka jako obchodní aktivum",
        descriptor: "Převádím vizi do směru, se kterým dokážou pracovat kreativní týmy.",
        body: "Značkou vytvářím jasný směr, důvěru a odlišení, které podporují obchodní výsledky, ne jen povědomí.",
        featured: true,
      },
      {
        number: "02",
        title: "Růst za hranicí akvizice",
        descriptor: "Propojuji získání zákazníka, adopci a udržení.",
        body: "Přemýšlím nad celou cestou od akvizice přes první použití až po dlouhodobou hodnotu, kterou zákazník skutečně vnímá.",
      },
      {
        number: "03",
        title: "Výkon podložený daty",
        descriptor: "Držím marketing odpovědný vůči číslům.",
        body: "Vycházím z práce s rozpočty, KPI, analytikou, konverzními cestami a vyhodnocováním návratnosti marketingových investic.",
      },
      {
        number: "04",
        title: "Propojení specialistů a týmů",
        descriptor: "Spojuji lidi kolem společného směru pro trh.",
        body: "Dokážu stát mezi produktem, obchodem, péčí o zákazníky, daty, designem, specialisty, agenturami a partnery a přeložit jejich potřeby do společného postupu.",
      },
    ],
  },
  foundations: {
    eyebrow: "02 / Co mě formovalo",
    title: "Od kampaní ke strategické odpovědnosti.",
    intro:
      "Začínal jsem ve výkonu, kde jsem se naučil číst data, hlídat návratnost a nést odpovědnost za výsledek. Product marketing, positioning a růst služeb přidaly kontext, odlišení a práci napříč týmy. Z těchto základů vznikl můj Marketing OS.",
    layers: [
      {
        title: "Výkonová disciplína",
        body: "Kampaně, KPI, rozpočty, analytika, konverzní cesty a návratnost.",
        label: "MĚŘIT",
      },
      {
        title: "Business a fintech kontext",
        body: "Bankovnictví, platby, e-commerce a služby pro podnikatele.",
        label: "POCHOPIT",
      },
      {
        title: "Značka a kreativní směr",
        body: "Positioning, messaging a kreativní směr, které dávají službě jasné místo na trhu.",
        label: "ODLIŠIT",
      },
      {
        title: "Strategické iniciativy napříč týmy",
        body: "Odpovědnost napříč týmy při uvádění a rozvoji služeb v ekosystému Shoptetu.",
        label: "PROPOJIT",
      },
    ],
    centerLabel: "Marketing OS",
    centerSubline: "STRATEGIE × EXEKUCE × VEDENÍ",
  },
  operatingSystem: {
    eyebrow: "03 / Jak pracuji",
    title: "Jak dostávám strategii na trh.",
    intro:
      "Jednoduchý pracovní rytmus od nejasné priority ke spuštěné a průběžně zlepšované iniciativě.",
    steps: [
      {
        number: "01",
        title: "Pochopit",
        body: "Vyjasnit problém, bariéru zákazníka a omezení.",
      },
      {
        number: "02",
        title: "Zarámovat",
        body: "Pojmenovat positioning, publikum a hlavní argument.",
      },
      {
        number: "03",
        title: "Propojit týmy",
        body: "Sladit vlastníky, kanály a výstupy v jednom plánu.",
      },
      {
        number: "04",
        title: "Spustit",
        body: "Doručit komunikaci pro trh a podporu obchodu.",
      },
      {
        number: "05",
        title: "Měřit",
        body: "Sledovat adopci, konverze, zpětnou vazbu a obchodní signály.",
      },
      {
        number: "06",
        title: "Zlepšovat",
        body: "Podle důkazů upravovat argumenty, kanály a další směr.",
      },
    ],
    loopLabel: "A pak zpět k problému — s lepšími informacemi.",
  },
  casesIntro: {
    eyebrow: "04 / Vybraná práce",
    title: "Business příběhy, ne galerie kampaní.",
    intro:
      "Čtyři business problémy z plateb, retailu, logistiky a financování.",
    detailLabel: "Otevřít případovou studii",
    selectedLabel: "Vybraná případová studie",
    viewDetailLabel: "Zobrazit detail",
    viewedLabel: "Zobrazeno",
    detailRegionLabel: "detail případové studie",
    problemSolvedLabel: "Vyřešený problém",
    myRoleLabel: "Moje role",
    proofImpactLabel: "Důkaz / dopad",
    contextLabel: "Kontext",
    challengeLabel: "Business výzva",
    strategicBetLabel: "Strategická sázka",
    strategicLinesLabel: "Komunikační směry",
    orchestrationLabel: "Co jsem propojil a řídil",
    impactLabel: "Směr dopadu",
    proofLabel: "Důkazy a výstupy",
    proofIntro:
      "Veřejné důkazy a bezpečné popisy interní práce bez citlivých údajů.",
    showMoreLabel: "Zobrazit více detailů",
    showLessLabel: "Zobrazit méně",
  },
  leadership: {
    eyebrow: "05 / Schopnosti pro vedení marketingu",
    title: "Schopnosti, které se navzájem násobí.",
    intro:
      "Stručný přehled schopností, které používám nejčastěji.",
    acceleratorLabel: "",
  },
  evidencePlaceholder: {
    label: "06 / Vybrané výstupy",
    title: "Když strategie dojde až na trh.",
    body: "Vybrané veřejné výstupy.",
    openVideoLabel: "Přehrát na YouTube",
    videoThumbnailLabel: "náhled videa",
  },
  closing: {
    eyebrow: "07 / Další kapitola",
    title: "Nejen marketingová exekuce. Odpovědnost za dopad.",
    body: "Nenajímáte si mě na izolované marketingové úkoly. Získáváte člověka, který dokáže propojit positioning, kanály, týmy, zákaznický insight a výkon tak, aby marketing podporoval konkrétní business cíle.",
    statement:
      "Další krok pro mě znamená roli, kde se potkává značka, růst, business odpovědnost a práce s týmy.",
    primaryCta: "Pojďme se spojit",
    secondaryCta: "Stáhnout CV",
    linkedinCta: "LinkedIn",
  },
  footer: {
    location: "Praha, Česko",
    email: "E-mail",
    linkedin: "LinkedIn",
    cv: "Stáhnout CV",
    note: "Interaktivní portfolio marketingového vedení.",
  },
};
