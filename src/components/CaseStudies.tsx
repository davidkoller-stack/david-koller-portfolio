import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Clock3,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";
import type { CaseStudy, PortfolioContent } from "../types/content";
import { ChapterLink, Container, Pill, Reveal, SectionHeading } from "./ui";

const DETAIL_ID = "selected-case-detail";

export function CaseStudies({
  content,
  cases,
}: {
  content: PortfolioContent["casesIntro"];
  cases: CaseStudy[];
}) {
  const [selectedId, setSelectedId] = useState(cases[0]?.id ?? "");
  const [viewedIds, setViewedIds] = useState<Set<string>>(
    () => new Set(cases[0]?.id ? [cases[0].id] : []),
  );
  const featuredCaseRef = useRef<HTMLDivElement>(null);

  const selectedCase =
    cases.find((item) => item.id === selectedId) ?? cases[0];
  const supportingCases = cases.filter((item) => item.id !== selectedCase?.id);

  if (!selectedCase) {
    return null;
  }

  const selectCase = (caseId: string) => {
    if (caseId === selectedCase.id) {
      return;
    }

    setViewedIds((current) => {
      const next = new Set(current);
      next.add(selectedCase.id);
      next.add(caseId);
      return next;
    });
    setSelectedId(caseId);
    featuredCaseRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="case-studies" className="section-pad bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
          />
        </Reveal>

        <Reveal className="mt-20">
          <div
            ref={featuredCaseRef}
            className="grid gap-8 rounded-[2rem] border border-ink bg-paper p-7 shadow-soft sm:p-10 lg:grid-cols-12 lg:p-14"
            style={{ scrollMarginTop: "112px" }}
          >
            <div className="lg:col-span-2">
              <span className="text-[13px] font-semibold text-ink/50">
                {selectedCase.number}
              </span>
              <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.15em] text-ink/50">
                {content.selectedLabel}
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base font-semibold text-ink/58">
                {selectedCase.eyebrow}
              </p>
              <h3 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,5.2vw,5.7rem)] font-semibold leading-[0.98] tracking-[-0.052em]">
                {selectedCase.title}
              </h3>
              <div className="mt-7 flex flex-wrap gap-2 text-ink/55">
                {selectedCase.tags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-6 lg:col-span-2 lg:items-end">
              <span className="rounded-full bg-ink px-4 py-2 text-[11px] font-bold uppercase tracking-[0.13em] text-white">
                {selectedCase.statusLabel}
              </span>
              <a
                href={`#${DETAIL_ID}`}
                className="group inline-flex items-center gap-2 text-[13px] font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2"
              >
                {content.viewDetailLabel}
                <ArrowDownRight
                  size={17}
                  className="transition group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>

        <motion.div
          layout
          id={DETAIL_ID}
          role="region"
          aria-live="polite"
          aria-label={`${selectedCase.eyebrow} — ${content.detailRegionLabel}`}
          className="mt-5 overflow-hidden rounded-[2rem] bg-paper"
          transition={{ layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={selectedCase.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <CaseDetail content={content} caseStudy={selectedCase} />
            </motion.article>
          </AnimatePresence>
        </motion.div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {supportingCases.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05} className="h-full">
              <button
                type="button"
                aria-pressed="false"
                aria-controls={DETAIL_ID}
                onClick={() => selectCase(item.id)}
                className="group flex h-full min-h-[300px] w-full flex-col justify-between rounded-[1.5rem] border border-ink/15 bg-white p-7 text-left text-ink transition duration-300 hover:-translate-y-1 hover:border-acid hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[13px] font-semibold text-ink/50">
                      {item.number}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-ink/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink"
                    />
                  </div>
                  <p className="mt-10 text-base font-semibold text-ink/55">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-4 max-w-md font-display text-[clamp(1.75rem,2.6vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
                    {item.problemLabel}
                  </h3>
                </div>

                <div className="mt-10">
                  <div className="mb-6 flex flex-wrap gap-2 text-ink/45">
                    {item.tags.slice(0, 2).map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.13em] text-ink/50">
                        {item.statusLabel}
                      </span>
                      {viewedIds.has(item.id) && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/60">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-acid"
                            aria-hidden="true"
                          />
                          {content.viewedLabel}
                        </span>
                      )}
                    </div>
                    <span className="text-[12px] font-bold text-ink">
                      {content.detailLabel}
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <ChapterLink href="#how-i-work">{content.nextLabel}</ChapterLink>
        </div>
      </Container>
    </section>
  );
}

function CaseDetail({
  content,
  caseStudy,
}: {
  content: PortfolioContent["casesIntro"];
  caseStudy: CaseStudy;
}) {
  const [showMore, setShowMore] = useState(false);
  const hasStrategicLines = Boolean(caseStudy.strategicLines?.length);
  const hasExpandedDetail = Boolean(
    caseStudy.context || caseStudy.challenge || hasStrategicLines,
  );
  const hasOrchestration = Boolean(
    caseStudy.orchestrationGroups?.some((group) => group.items.length),
  );
  const hasImpact = Boolean(caseStudy.impact?.length);
  const hasProof = Boolean(caseStudy.proofAssets?.length);

  return (
    <div className="p-7 sm:p-10 lg:p-14">
        {caseStudy.summary && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CaseSummaryItem
              label={content.problemSolvedLabel}
              body={caseStudy.summary.problemSolved}
            />
            <CaseSummaryItem
              label={content.myRoleLabel}
              body={caseStudy.summary.myRole}
            />
            <CaseSummaryItem
              label={content.proofImpactLabel}
              body={caseStudy.summary.proofImpact}
              className="md:col-span-2 lg:col-span-1"
            />
          </div>
        )}

        {caseStudy.strategicBet && (
          <div className="mt-5">
            <CaseBlock
              number="03"
              label={content.strategicBetLabel}
              body={caseStudy.strategicBet}
              accent
            />
          </div>
        )}

        {hasExpandedDetail && (
          <>
            <AnimatePresence initial={false}>
              {showMore && (
                <motion.div
                  id={`${caseStudy.id}-expanded-detail`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  {(caseStudy.context || caseStudy.challenge) && (
                    <div className="mt-5 grid gap-5 lg:grid-cols-2">
                      {caseStudy.context && (
                        <CaseBlock
                          number="01"
                          label={content.contextLabel}
                          body={caseStudy.context}
                        />
                      )}
                      {caseStudy.challenge && (
                        <CaseBlock
                          number="02"
                          label={content.challengeLabel}
                          body={caseStudy.challenge}
                        />
                      )}
                    </div>
                  )}

                  {hasStrategicLines && (
                    <div className="mt-5 rounded-2xl border border-ink/15 bg-white p-7 sm:p-8">
                      <p className="case-label">{content.strategicLinesLabel}</p>
                      <ol className="mt-5 grid gap-5 lg:grid-cols-2">
                        {caseStudy.strategicLines?.map((line, index) => (
                          <li
                            key={line}
                            className="flex gap-4 text-base leading-[1.6] text-ink/68"
                          >
                            <span className="font-semibold text-ink">
                              0{index + 1}
                            </span>
                            {line}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              aria-expanded={showMore}
              aria-controls={`${caseStudy.id}-expanded-detail`}
              onClick={() => setShowMore((current) => !current)}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-ink transition hover:border-acid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2"
            >
              {showMore ? content.showLessLabel : content.showMoreLabel}
              <ChevronDown
                size={16}
                className={`transition-transform ${showMore ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </>
        )}

        {hasOrchestration && (
          <div className="mt-5 grid gap-8 rounded-2xl bg-ink p-7 text-white lg:grid-cols-12 lg:p-10">
            <div className="lg:col-span-3">
              <p className="case-label text-white/60">
                04 / {content.orchestrationLabel}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-9">
              {caseStudy.orchestrationGroups
                ?.filter((group) => group.items.length)
                .map((group, index) => (
                  <div
                    key={group.title}
                    className="rounded-xl border border-white/14 bg-white/[0.035] p-6 transition hover:border-acid/45 hover:bg-white/[0.06]"
                  >
                    <span className="text-[11px] font-semibold text-white/38">
                      0{index + 1}
                    </span>
                    <h4 className="mt-4 font-display text-xl font-semibold text-white">
                      {group.title}
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-base leading-relaxed text-white/65"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        )}

        {hasImpact && (
          <div className="mt-5 rounded-2xl border border-ink/15 bg-white p-7 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="case-label">05 / {content.impactLabel}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-9">
                {caseStudy.impact?.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-ink/12 bg-paper/55 p-5 text-base leading-[1.6] text-ink/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {hasProof && (
          <div className="mt-5 rounded-2xl border border-ink/15 bg-paper/60 p-7 sm:p-9">
            <div>
              <p className="case-label">06 / {content.proofLabel}</p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/62">
                {content.proofIntro}
              </p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {caseStudy.proofAssets?.map((proof) => (
                <ProofCard key={proof.title} proof={proof} />
              ))}
            </div>
          </div>
        )}
    </div>
  );
}

function CaseSummaryItem({
  label,
  body,
  className = "",
}: {
  label: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-ink/15 bg-white p-6 sm:p-7 ${className}`}>
      <p className="case-label">{label}</p>
      <p className="mt-4 text-base font-medium leading-[1.6] text-ink/72">
        {body}
      </p>
    </div>
  );
}

function CaseBlock({
  number,
  label,
  body,
  accent = false,
}: {
  number: string;
  label: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`h-full rounded-2xl border p-7 sm:p-8 ${
        accent ? "border-acid bg-acid" : "border-ink/15 bg-white"
      }`}
    >
      <p className="case-label">
        {number} / {label}
      </p>
      <p className="mt-5 max-w-2xl text-base leading-[1.65] text-ink/70">
        {body}
      </p>
    </div>
  );
}

function ProofCard({
  proof,
}: {
  proof: NonNullable<CaseStudy["proofAssets"]>[number];
}) {
  const icons = {
    "primary-public": ExternalLink,
    "secondary-public": ExternalLink,
    "internal-safe": ShieldCheck,
    todo: Clock3,
  };
  const Icon = icons[proof.type];
  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ink/55">
          {proof.label}
        </span>
        <Icon size={19} className="shrink-0 text-ink/45" />
      </div>
      <h4 className="mt-7 font-display text-xl font-semibold">
        {proof.title}
      </h4>
      <p className="mt-3 text-base leading-[1.6] text-ink/62">
        {proof.description}
      </p>
    </>
  );
  const publicProof =
    proof.type === "primary-public" || proof.type === "secondary-public";
  const className = `block min-h-[220px] rounded-xl border p-6 text-left transition ${
    proof.type === "primary-public"
      ? "border-ink bg-white hover:border-acid hover:shadow-soft"
      : proof.type === "secondary-public"
        ? "border-ink/20 bg-white hover:border-acid"
        : "border-ink/15 bg-paper/45"
  }`;

  return publicProof ? (
    <a
      href={proof.url}
      className={className}
      aria-label={`${proof.title}: ${proof.label}`}
    >
      {cardContent}
    </a>
  ) : (
    <div
      className={`${className} ${proof.type === "todo" ? "opacity-65" : ""}`}
    >
      {cardContent}
    </div>
  );
}
