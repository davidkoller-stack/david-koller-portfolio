export type Language = "en" | "cs";

export type PortfolioContent = {
  nav: {
    brand: string;
    role: string;
    items: { label: string; href: string }[];
    languageLabel: string;
    downloadCv: string;
    backToTopLabel: string;
    toggleMenuLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    highlightedWord: string;
    subheadline: string;
    name: string;
    role: string;
    domains: string;
    trajectory: string;
    primaryCta: string;
    secondaryCta: string;
    systemLabel: string;
    systemCenter: string;
    systemNodes: string[];
    scrollLabel: string;
  };
  guidedPath: {
    eyebrow: string;
    prompt: string;
    title: string;
    items: {
      number: string;
      title: string;
      body: string;
      href: string;
    }[];
  };
  businessImpact: {
    eyebrow: string;
    title: string;
    intro: string;
    metrics: {
      value: string;
      label: string;
      project: string;
      role: string;
      proofType: string;
    }[];
  };
  profile: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: { number: string; title: string; descriptor: string; body: string; featured?: boolean }[];
  };
  foundations: {
    eyebrow: string;
    title: string;
    intro: string;
    layers: { title: string; body: string; label: string }[];
    centerLabel: string;
    centerSubline: string;
  };
  operatingSystem: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { number: string; title: string; body: string; label?: string }[];
    loopLabel: string;
  };
  casesIntro: {
    eyebrow: string;
    title: string;
    intro: string;
    detailLabel: string;
    selectedLabel: string;
    viewDetailLabel: string;
    viewedLabel: string;
    detailRegionLabel: string;
    problemSolvedLabel: string;
    myRoleLabel: string;
    proofImpactLabel: string;
    contextLabel: string;
    challengeLabel: string;
    strategicBetLabel: string;
    strategicLinesLabel: string;
    orchestrationLabel: string;
    impactLabel: string;
    proofLabel: string;
    proofIntro: string;
    showMoreLabel: string;
    showLessLabel: string;
    deliveredLabel: string;
    nextLabel: string;
  };
  floatingNav: {
    label: string;
    items: {
      label: string;
      href: string;
    }[];
  };
  howIWork: {
    eyebrow: string;
    title: string;
    intro: string;
    foundationsLabel: string;
    deliveryLabel: string;
    nextLabel: string;
  };
  leadership: {
    eyebrow: string;
    title: string;
    intro: string;
    acceleratorLabel: string;
  };
  evidencePlaceholder: {
    label: string;
    title: string;
    body: string;
    openVideoLabel: string;
    openProofLabel: string;
    videoThumbnailLabel: string;
    featuredLabel: string;
    previousPhotoLabel: string;
    nextPhotoLabel: string;
    nextLabel: string;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    statement: string;
    primaryCta: string;
    secondaryCta: string;
    linkedinCta: string;
  };
  footer: {
    location: string;
    email: string;
    linkedin: string;
    cv: string;
    note: string;
  };
};

export type CaseStudy = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  problemLabel: string;
  eyebrow: string;
  statusLabel: string;
  tags: string[];
  summary?: {
    problemSolved: string;
    myRole: string;
    proofImpact: string;
  };
  delivered?: string[];
  deliveredSummary?: string;
  context?: string;
  challenge?: string;
  strategicBet?: string;
  strategicLines?: string[];
  orchestrationGroups?: {
    title: string;
    items: string[];
  }[];
  impact?: string[];
  proofAssets?: {
    title: string;
    type: "primary-public" | "secondary-public" | "internal-safe" | "todo";
    label: string;
    url?: string;
    description: string;
  }[];
};
