import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import type { PortfolioContent } from "../types/content";
import type { EvidenceItem } from "../data/evidence";
import { links } from "../data/links";
import { ChapterLink, Container, Reveal } from "./ui";

export function ProofGallery({
  content,
  evidence,
}: {
  content: PortfolioContent["evidencePlaceholder"];
  evidence: EvidenceItem[];
}) {
  const visibleEvidence = evidence.filter(
    (item) =>
      (item.type === "youtube" && item.url) ||
      (item.type === "image" && item.imageSrc),
  );
  const [featured, ...supporting] = visibleEvidence;

  if (!featured) {
    return null;
  }

  return (
    <section id="evidence" className="section-pad bg-paper">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="case-label">{content.label}</p>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.65rem,5.8vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.052em]">
                {content.title}
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-[1.65] text-ink/65 lg:col-span-5">
              {content.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ProofCard
              item={featured}
              content={content}
              featured
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {supporting.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <ProofCard item={item} content={content} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <ChapterLink href="#skills">{content.nextLabel}</ChapterLink>
        </div>
      </Container>
    </section>
  );
}

function ProofCard({
  item,
  content,
  featured = false,
}: {
  item: EvidenceItem;
  content: PortfolioContent["evidencePlaceholder"];
  featured?: boolean;
}) {
  const imageSources =
    item.type === "youtube" && item.url
      ? getYouTubeThumbnails(item.url)
      : item.imageSrc
        ? [item.imageSrc]
        : [];
  const card = (
    <>
      <div className="aspect-video overflow-hidden bg-ink/5">
        <img
          src={imageSources[0]}
          alt={`${item.title} — ${content.videoThumbnailLabel}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          onError={(event) => {
            const image = event.currentTarget;
            const currentIndex = Number(image.dataset.fallbackIndex ?? "0");
            const nextIndex = currentIndex + 1;

            if (nextIndex < imageSources.length) {
              image.dataset.fallbackIndex = String(nextIndex);
              image.src = imageSources[nextIndex];
            }
          }}
        />
      </div>
      <div className={featured ? "p-7 sm:p-8" : "p-6"}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-ink/50">
            {item.category}
          </span>
          {featured && (
            <span className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/50">
              {content.featuredLabel}
            </span>
          )}
        </div>
        <h3
          className={`mt-4 font-display font-semibold leading-tight tracking-[-0.035em] ${
            featured ? "text-[clamp(2rem,4vw,3.5rem)]" : "text-2xl"
          }`}
        >
          {item.title}
        </h3>
        <p className="mt-3 text-base leading-[1.55] text-ink/62">
          {item.subtitle}
        </p>
        {item.type === "youtube" && (
          <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold">
            {content.openVideoLabel}
            <ArrowUpRight size={15} />
          </span>
        )}
      </div>
    </>
  );

  return item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${item.title} — ${content.openVideoLabel}`}
      className="group block h-full overflow-hidden rounded-2xl border border-ink/15 bg-white transition hover:-translate-y-1 hover:border-acid hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2"
    >
      {card}
    </a>
  ) : (
    <article className="group h-full overflow-hidden rounded-2xl border border-ink/15 bg-white">
      {card}
    </article>
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
