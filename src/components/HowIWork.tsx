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
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3">
            {operatingSystem.steps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.04}
                className="border border-white/15 p-6 sm:p-7 lg:-ml-px lg:-mt-px"
              >
                <span className="text-[11px] font-semibold text-white/38">
                  {step.number}
                </span>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.035em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/62">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <ChapterLink href="#evidence" light>
            {content.nextLabel}
          </ChapterLink>
        </div>
      </Container>
    </section>
  );
}
