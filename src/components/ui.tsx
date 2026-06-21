import { motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
      <p
        className={`section-eyebrow lg:col-span-3 ${
          light ? "text-white/45" : "text-ink/45"
        }`}
      >
        {eyebrow}
      </p>
      <div className="lg:col-span-8">
        <h2
          className={`max-w-4xl font-display text-[clamp(2.65rem,5.8vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.052em] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-8 max-w-2xl text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.65] ${
              light ? "text-white/72" : "text-ink/68"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-current/25 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em]">
      {children}
    </span>
  );
}
