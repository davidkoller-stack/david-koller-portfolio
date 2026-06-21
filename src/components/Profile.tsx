import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { PortfolioContent } from "../types/content";
import { Container, Reveal, SectionHeading } from "./ui";

export function Profile({ content }: { content: PortfolioContent["profile"] }) {
  const [expandedCard, setExpandedCard] = useState<number | null>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="profile" className="section-pad bg-white">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
        </Reveal>
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:ml-[25%]">
          {content.cards.map((card, index) => (
            <Reveal
              key={card.number}
              delay={index * 0.06}
              className="h-full"
            >
              <button
                type="button"
                aria-expanded={expandedCard === index}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group flex min-h-[270px] w-full flex-col rounded-2xl border p-7 text-left transition-colors sm:p-9 ${
                  expandedCard === index
                    ? "border-ink bg-ink text-white"
                    : hoveredCard === index
                      ? "border-acid bg-white text-ink"
                      : "border-ink/18 bg-white text-ink"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`text-[13px] font-semibold ${
                      expandedCard === index ? "text-acid" : "text-ink/50"
                    }`}
                  >
                    {card.number}
                  </span>
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full border ${
                      expandedCard === index
                        ? "border-acid bg-acid text-ink"
                        : "border-ink/20"
                    }`}
                  >
                    <motion.span animate={{ rotate: expandedCard === index ? 45 : 0 }}>
                      <Plus size={17} />
                    </motion.span>
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="max-w-md font-display text-[clamp(1.75rem,2.5vw,2.2rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                    {card.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-md text-base font-medium leading-relaxed ${
                      expandedCard === index ? "text-white/72" : "text-ink/68"
                    }`}
                  >
                    {card.descriptor}
                  </p>
                </div>
                <AnimatePresence initial={false}>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="w-full overflow-hidden"
                    >
                      <p
                        className={`mt-6 max-w-md border-t pt-5 text-base leading-[1.65] ${
                          expandedCard === index
                            ? "border-white/15 text-white/78"
                            : "border-ink/15 text-ink/72"
                        }`}
                      >
                        {card.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
