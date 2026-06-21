import { motion } from "framer-motion";
import { useState } from "react";
import type { PortfolioContent } from "../types/content";
import { Container, Reveal, SectionHeading } from "./ui";

export function Foundations({
  content,
}: {
  content: PortfolioContent["foundations"];
}) {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section id="marketing-os" className="section-pad scroll-mt-24 overflow-hidden bg-paper">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
        </Reveal>
        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-3 lg:col-span-7">
            {content.layers.map((layer, index) => (
              <Reveal key={layer.title} delay={index * 0.07}>
                <motion.button
                  type="button"
                  aria-pressed={activeLayer === index}
                  onClick={() => setActiveLayer(index)}
                  onMouseEnter={() => setActiveLayer(index)}
                  whileHover={{ x: 8 }}
                  className={`grid w-full gap-5 rounded-2xl border p-6 text-left transition-colors sm:grid-cols-[130px_1fr_auto] sm:items-center sm:p-7 ${
                    activeLayer === index
                      ? "border-ink bg-ink text-white"
                      : "border-ink/18 bg-white text-ink hover:border-acid"
                  }`}
                >
                  <span
                    className={`text-[12px] font-bold uppercase tracking-[0.15em] ${
                      activeLayer === index ? "text-acid" : "text-ink/55"
                    }`}
                  >
                    {layer.label}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.35rem,2vw,1.7rem)] font-semibold">
                      {layer.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-xl text-base leading-[1.65] ${
                        activeLayer === index ? "text-white/70" : "text-ink/68"
                      }`}
                    >
                      {layer.body}
                    </p>
                  </div>
                  <span
                    className={`font-display text-4xl font-semibold ${
                      activeLayer === index ? "text-white/18" : "text-ink/15"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </motion.button>
              </Reveal>
            ))}
          </div>
          <Reveal className="lg:col-span-5">
            <div className="mx-auto w-full max-w-[470px]">
              <div className="relative aspect-square w-full">
                {content.layers.map((layer, ring) => {
                  const dotPositions = [
                    "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
                    "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                    "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                    "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
                  ];

                  return (
                    <div
                      key={layer.title}
                      className={`absolute rounded-full border transition-colors duration-300 ${
                        activeLayer === ring
                          ? "border-2 border-acid shadow-[0_0_32px_rgba(200,255,46,.18)]"
                          : "border-ink/28"
                      }`}
                      style={{ inset: `${ring * 8.5}%` }}
                    >
                      <span
                        className={`absolute ${dotPositions[ring]} grid h-6 w-6 place-items-center rounded-full border transition-colors ${
                          activeLayer === ring
                            ? "border-acid bg-acid shadow-[0_0_18px_rgba(200,255,46,.45)]"
                            : "border-ink/60 bg-ink"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  );
                })}
                <div className="absolute inset-[33%] grid place-items-center overflow-hidden rounded-full bg-ink p-[clamp(0.5rem,1.5vw,1rem)] text-center text-white shadow-soft">
                  <p className="font-display text-[clamp(1.15rem,2.2vw,1.75rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
                    <span className="block">Marketing</span>
                    <span className="block">OS</span>
                  </p>
                </div>
                <div className="absolute bottom-[7%] left-1/2 z-20 -translate-x-1/2 rounded-full border border-ink bg-paper px-4 py-2 text-center">
                  <p className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.13em] text-ink">
                    {content.layers[activeLayer].label}
                  </p>
                </div>
              </div>
              <p className="mx-auto mt-5 max-w-sm text-center text-[clamp(0.75rem,1.4vw,0.875rem)] font-semibold uppercase leading-relaxed tracking-[0.12em] text-ink/60">
                {content.centerSubline}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
