import type { PortfolioContent } from "../types/content";
import { Container, Reveal, SectionHeading } from "./ui";

export function OperatingSystem({
  content,
}: {
  content: PortfolioContent["operatingSystem"];
}) {
  return (
    <section id="operating-system" className="section-pad bg-ink text-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
            light
          />
        </Reveal>
        <div className="mt-20 grid lg:grid-cols-3">
          {content.steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.05}
              className="group relative min-h-[300px] border border-white/15 p-7 transition hover:z-10 hover:border-acid hover:bg-white/[0.04] sm:p-9 lg:-ml-px lg:-mt-px"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-white/48">{step.number}</span>
                  <span className="h-2 w-2 rounded-full bg-white/30 transition group-hover:bg-acid group-hover:shadow-[0_0_20px_#c8ff2e]" />
                </div>
                <div className="mt-20">
                  <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold tracking-[-0.04em]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-base leading-[1.65] text-white/68">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-acid/70 to-transparent" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/55">
            {content.loopLabel}
          </p>
        </div>
      </Container>
    </section>
  );
}
