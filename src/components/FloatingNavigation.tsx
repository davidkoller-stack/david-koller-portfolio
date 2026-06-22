import { useEffect, useState } from "react";
import type { PortfolioContent } from "../types/content";

export function FloatingNavigation({
  content,
}: {
  content: PortfolioContent["floatingNav"];
}) {
  const [activeHref, setActiveHref] = useState(content.items[0]?.href ?? "#top");

  useEffect(() => {
    const sections = content.items
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [content.items]);

  return (
    <nav
      aria-label={content.label}
      className="fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="rounded-2xl border border-ink/12 bg-paper/90 p-1 shadow-soft backdrop-blur-xl">
        <ul className="space-y-1">
          {content.items.map((item) => {
            const active = activeHref === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active ? "location" : undefined}
                  className={`group relative grid h-8 w-7 place-items-center rounded-xl text-[10px] font-bold uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid ${
                    active ? "bg-ink text-white" : "text-ink/42 hover:text-ink"
                  }`}
                >
                  <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-lg bg-ink px-2.5 py-1.5 text-[10px] text-white opacity-0 shadow-soft transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    {item.label}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      active ? "bg-acid" : "bg-ink/25 group-hover:bg-ink"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
