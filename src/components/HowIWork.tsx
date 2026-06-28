import { ArrowRight } from "lucide-react";
import type { PortfolioContent } from "../types/content";
import { ChapterLink, Container, Reveal, SectionHeading } from "./ui";

export function HowIWork({
  content,
  foundations,
  operatingSystem,
}: {
  content: PortfolioContent["howIWork"];
  foundations: PortfolioContent["foundations"];
  operatingSystem: PortfolioContent["operatingSystem"];
}) {
  return (
    <section id="how-i-work" className="section-pad bg-ink text-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
            light
          />
        </Reveal>

        <div className="mt-16">
          <p className="section-eyebrow text-white/45">
            {content.foundationsLabel}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {foundations.layers.map((layer, index) => (
              <Reveal key={layer.label} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-white/15 p-6 transition hover:border-acid">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-white/38">
                      0{index + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-acid" aria-hidden="true" />
                  </div>
                  <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.14em] text-acid">
                    {layer.label}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em]">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {layer.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-10">
          <p className="section-eyebrow text-white/45">{content.deliveryLabel}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {operatingSystem.steps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.04}
                className="relative"
              >
                <article
                  tabIndex={0}
                  className="group h-full rounded-2xl border border-white/15 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-acid/65 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid"
                >
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-white/18 px-2 text-[11px] font-semibold text-white/45 transition group-hover:border-acid group-hover:text-acid group-focus-visible:border-acid group-focus-visible:text-acid">
                    {step.number}
                  </span>
                  <h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.035em] transition group-hover:text-acid group-focus-visible:text-acid">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/62">
                    {step.body}
                  </p>
                </article>
                {index < operatingSystem.steps.length - 1 && (
                  <span
                    className={`pointer-events-none absolute -right-[13px] top-1/2 z-10 h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/18 bg-ink text-white/42 ${
                      index === 2 ? "hidden xl:grid" : "hidden lg:grid"
                    }`}
                    aria-hidden="true"
                  >
                    <ArrowRight size={13} />
                  </span>
                )}
              </Reveal>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.13em] text-white/42">
            <span className="h-px flex-1 bg-white/12" aria-hidden="true" />
            <span>{operatingSystem.loopLabel}</span>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <ChapterLink href="#skills" light>
            {content.nextLabel}
          </ChapterLink>
        </div>
      </Container>
    </section>
  );
}
