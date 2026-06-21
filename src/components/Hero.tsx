import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { PortfolioContent } from "../types/content";
import { links } from "../data/links";
import { Container } from "./ui";

export function Hero({ content }: { content: PortfolioContent["hero"] }) {
  const isCzech = content.eyebrow.includes("Praha");

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-paper pt-28">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <Container className="relative flex min-h-[calc(100vh-7rem)] flex-col justify-between pb-8 pt-8 sm:pt-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-10"
          >
            <p className="section-eyebrow mb-7 text-ink/45">{content.eyebrow}</p>
            <h1
              data-language={isCzech ? "cs" : "en"}
              className="hero-headline font-display font-semibold tracking-[-0.065em] text-ink"
            >
              {content.headline}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{content.highlightedWord}</span>
                <motion.span
                  className="absolute bottom-[0.03em] left-0 -z-0 h-[0.18em] w-full bg-acid"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-start justify-end lg:col-span-2"
          >
            <a
              href="#profile"
              aria-label={content.scrollLabel}
              className="hidden h-28 w-28 animate-[spin_18s_linear_infinite] place-items-center rounded-full border border-ink/25 transition hover:border-ink hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-ink lg:grid"
            >
              <ArrowDownRight size={28} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>

        <div className="mt-16 grid items-end gap-12 border-t border-ink/15 pt-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="lg:col-span-4"
          >
            <p className="max-w-xl text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.65] text-ink/70">
              {content.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#case-studies"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                {content.primaryCta}
                <ArrowDownRight size={17} className="transition group-hover:rotate-45" />
              </a>
              <a
                href={links.cv}
                className="group inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-4 text-sm font-semibold transition hover:bg-white"
              >
                {content.secondaryCta}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <p className="font-display text-xl font-semibold">{content.name}</p>
            <p className="mt-1 text-base text-ink/60">{content.role}</p>
            <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.13em] text-ink/55">
              {content.domains}
            </p>
            {content.trajectory && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/50 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-acid ring-4 ring-acid/20" />
                <span className="max-w-[19rem] text-[13px] font-semibold leading-snug">{content.trajectory}</span>
              </div>
            )}
          </div>

          <SystemMap content={content} />
        </div>
      </Container>
    </section>
  );
}

function SystemMap({ content }: { content: PortfolioContent["hero"] }) {
  const topNodes = content.systemNodes.slice(0, 3);
  const bottomNodes = content.systemNodes.slice(3);
  const [systemTitle, systemDescriptor] = content.systemLabel
    .split("/")
    .map((label) => label.trim());

  return (
    <motion.div
      className="relative overflow-hidden rounded-[2rem] border border-ink bg-ink p-6 text-white shadow-soft sm:p-7 lg:col-span-5"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div>
        <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-white">
          {systemTitle}
        </p>
        {systemDescriptor && (
          <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.13em] text-white/58">
            {systemDescriptor}
          </p>
        )}
      </div>
      <div className="relative mt-8 flex flex-col gap-6">
        <svg
          className="pointer-events-none absolute inset-x-0 top-5 hidden h-[calc(100%-2.5rem)] w-full min-[360px]:block"
          viewBox="0 0 300 210"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[48, 150, 252].map((x) => (
            <g key={x}>
              <line
                x1={x}
                y1="16"
                x2="150"
                y2="105"
                stroke="rgba(255,255,255,.22)"
                strokeWidth="1"
              />
              <line
                x1="150"
                y1="105"
                x2={x}
                y2="194"
                stroke="rgba(255,255,255,.22)"
                strokeWidth="1"
              />
            </g>
          ))}
          <circle cx="150" cy="105" r="3" fill="rgb(200 255 46)" />
        </svg>
        <div className="relative z-10 grid grid-cols-1 gap-2 min-[360px]:grid-cols-3">
          {topNodes.map((node) => (
            <SystemNode key={node} node={node} />
          ))}
        </div>
        <div className="relative z-10 mx-auto grid min-h-24 w-full max-w-48 place-items-center rounded-full border border-acid/60 bg-acid px-6 py-5 text-center text-[clamp(1rem,2.4vw,1.25rem)] font-bold leading-tight text-ink">
          {content.systemCenter}
        </div>
        <div className="relative z-10 grid grid-cols-1 gap-2 min-[360px]:grid-cols-3">
          {bottomNodes.map((node) => (
            <SystemNode key={node} node={node} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SystemNode({
  node,
}: {
  node: string;
}) {
  return (
    <div className="grid min-h-11 min-w-0 place-items-center rounded-full border border-white/25 bg-ink px-2 py-2 text-center text-[clamp(0.75rem,1.2vw,0.8125rem)] font-semibold leading-tight text-white/82">
      {node}
    </div>
  );
}
