import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Language, PortfolioContent } from "../types/content";
import { links } from "../data/links";
import { Container } from "./ui";

export function Navigation({
  content,
  language,
  setLanguage,
}: {
  content: PortfolioContent["nav"];
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/90 py-2 backdrop-blur-xl"
          : "py-4"
      }`}
    >
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={content.backToTopLabel}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-sm font-bold text-acid transition-transform group-hover:rotate-6">
            {content.brand}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold">David Koller</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-ink/45">
              {content.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {content.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold text-ink/62 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="hidden items-center rounded-full border border-ink/15 p-1 sm:flex"
            aria-label={content.languageLabel}
          >
            {(["en", "cs"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition ${
                  language === lang ? "bg-ink text-white" : "text-ink/40 hover:text-ink"
                }`}
              >
                {lang === "cs" ? "CZ" : "EN"}
              </button>
            ))}
          </div>
          <a
            href={links.cv}
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-ink/80 md:flex"
          >
            {content.downloadCv}
            <ArrowDownToLine size={14} />
          </a>
          <button
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 xl:hidden"
            aria-label={content.toggleMenuLabel}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-ink/10 bg-paper px-5 pb-6 pt-4 xl:hidden"
          >
            <nav className="flex flex-col">
              {content.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/10 py-4 font-display text-2xl font-semibold"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex rounded-full border border-ink/15 p-1">
                {(["en", "cs"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`rounded-full px-4 py-2 text-xs font-bold ${
                      language === lang ? "bg-ink text-white" : "text-ink/45"
                    }`}
                  >
                    {lang === "cs" ? "CZ" : "EN"}
                  </button>
                ))}
              </div>
              <a href={links.cv} className="text-xs font-bold underline underline-offset-4">
                {content.downloadCv}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
