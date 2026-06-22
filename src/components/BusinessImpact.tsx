import type { PortfolioContent } from "../types/content";
import { Container, Reveal, SectionHeading } from "./ui";

export function BusinessImpact({
  content,
}: {
  content: PortfolioContent["businessImpact"];
}) {
  return (
    <section id="impact" className="section-pad bg-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
          />
        </Reveal>
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {content.metrics.map((metric, index) => (
            <Reveal key={`${metric.project}-${metric.value}`} delay={index * 0.04}>
              <article className="flex min-h-[310px] h-full flex-col justify-between rounded-2xl border border-ink/15 bg-white p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-ink/45">
                  {metric.project}
                </p>
                <div className="mt-10">
                  <p className="font-display text-[clamp(2rem,3.2vw,3rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
                    {metric.value}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-ink/62">
                    {metric.label}
                  </p>
                  <p className="mt-6 border-t border-ink/10 pt-5 text-sm leading-relaxed text-ink/72">
                    {metric.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
