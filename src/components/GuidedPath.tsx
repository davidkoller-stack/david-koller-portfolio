import { ArrowDownRight } from "lucide-react";
import type { PortfolioContent } from "../types/content";
import { Container, Reveal } from "./ui";

export function GuidedPath({
  content,
}: {
  content: PortfolioContent["guidedPath"];
}) {
  return (
    <section id="choose-path" className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-3">
              <p className="section-eyebrow text-ink/45">{content.eyebrow}</p>
              <p className="mt-4 max-w-xs text-sm font-semibold leading-relaxed text-ink/70">
                {content.prompt}
              </p>
            </div>
            <h2 className="max-w-4xl font-display text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] lg:col-span-8">
              {content.title}
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.04} className="h-full">
              <a
                href={item.href}
                className="group flex h-full min-h-[190px] flex-col justify-between rounded-2xl border border-ink/15 bg-paper p-6 text-ink transition hover:-translate-y-1 hover:border-acid hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-ink/45">
                    {item.number}
                  </span>
                  <ArrowDownRight
                    size={18}
                    className="text-ink/35 transition group-hover:rotate-45 group-hover:text-ink"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/62">
                    {item.body}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
