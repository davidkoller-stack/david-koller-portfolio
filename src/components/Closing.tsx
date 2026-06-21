import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import type { PortfolioContent } from "../types/content";
import type { EvidenceItem } from "../data/evidence";
import { links } from "../data/links";
import { Container, Reveal } from "./ui";

export function EvidencePlaceholder({
  content,
  evidence,
}: {
  content: PortfolioContent["evidencePlaceholder"];
  evidence: EvidenceItem[];
}) {
  return (
    <section id="evidence" className="bg-paper pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-ink/15 bg-white/40 p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="case-label">{content.label}</p>
                <h3 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,4.5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.045em]">
                  {content.title}
                </h3>
              </div>
              <p className="max-w-xl self-end text-base leading-[1.65] text-ink/65 lg:col-span-5">
                {content.body}
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {evidence.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${item.title} — ${content.openVideoLabel}`}
                  className="group overflow-hidden rounded-2xl border border-ink/15 bg-white transition hover:-translate-y-1 hover:border-acid hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2"
                >
                  <div className="aspect-video overflow-hidden bg-ink/5">
                    <img
                      src={getYouTubeThumbnails(item.url)[0]}
                      alt={`${item.title} — ${content.videoThumbnailLabel}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      onError={(event) => {
                        const image = event.currentTarget;
                        const thumbnails = getYouTubeThumbnails(item.url);
                        const currentIndex = Number(image.dataset.fallbackIndex ?? "0");
                        const nextIndex = currentIndex + 1;

                        if (nextIndex < thumbnails.length) {
                          image.dataset.fallbackIndex = String(nextIndex);
                          image.src = thumbnails[nextIndex];
                        }
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-ink/50">
                      {item.category}
                    </span>
                    <h4 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.035em]">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-base leading-[1.55] text-ink/62">
                      {item.subtitle}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold">
                      {content.openVideoLabel}
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Closing({
  content,
  footer,
}: {
  content: PortfolioContent["closing"];
  footer: PortfolioContent["footer"];
}) {
  return (
    <>
      <section id="contact" className="section-pad overflow-hidden bg-acid">
        <Container>
          <Reveal>
            <p className="section-eyebrow text-ink/45">{content.eyebrow}</p>
            <h2 className="mt-10 max-w-6xl font-display text-[clamp(3.3rem,8vw,8.6rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
              {content.title}
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 border-t border-ink/20 pt-9 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="max-w-xl text-[clamp(1.15rem,1.8vw,1.4rem)] leading-[1.65]">{content.body}</p>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-lg text-base leading-[1.65] text-ink/68">{content.statement}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={links.email}
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white"
                >
                  {content.primaryCta}
                  <ArrowUpRight size={17} className="transition group-hover:translate-x-1" />
                </a>
                <a
                  href={links.cv}
                  className="inline-flex items-center gap-3 rounded-full border border-ink/25 px-6 py-4 text-sm font-semibold"
                >
                  {content.secondaryCta}
                  <ArrowDownToLine size={17} />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-4 py-4 text-sm font-semibold"
                >
                  {content.linkedinCta}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <footer className="bg-ink py-10 text-white">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-2xl font-semibold">David Koller</p>
              <p className="mt-2 text-base text-white/58">{footer.location}</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/68">
              <a href={links.email} className="hover:text-white">{footer.email}</a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white"
              >
                {footer.linkedin}
              </a>
              <a href={links.cv} className="hover:text-white">{footer.cv}</a>
              <a href="#top" className="hover:text-white">EN / CZ ↑</a>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-[12px] uppercase tracking-[0.13em] text-white/45">{footer.note}</p>
            <p className="text-[12px] text-white/40">© {new Date().getFullYear()}</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

function getYouTubeThumbnails(url: string) {
  const videoId = new URL(url).searchParams.get("v");
  return videoId
    ? [
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      ]
    : [""];
}
