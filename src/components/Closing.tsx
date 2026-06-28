import { useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Play,
} from "lucide-react";
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
  const photoEvidence = evidence.filter(
    (item) => item.type === "image" && item.image,
  );
  const visibleEvidence = evidence.filter(
    (item) =>
      (item.type === "youtube" && item.url) ||
      (item.type === "link" && item.url),
  );
  const [featured, ...remaining] = visibleEvidence;
  const supporting = remaining.slice(0, 2);
  const additional = remaining.slice(2);

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
              galleryItems={photoEvidence}
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

        {additional.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {additional.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.04}>
                <ProofCard item={item} content={content} />
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-end">
          <ChapterLink href="#how-i-work">{content.nextLabel}</ChapterLink>
        </div>
      </Container>
    </section>
  );
}

function ProofCard({
  item,
  content,
  featured = false,
  galleryItems = [],
}: {
  item: EvidenceItem;
  content: PortfolioContent["evidencePlaceholder"];
  featured?: boolean;
  galleryItems?: EvidenceItem[];
}) {
  const hasGallery = featured && galleryItems.length > 0;
  const imageSources =
    item.type === "youtube" && item.url
      ? getYouTubeThumbnails(item.url)
      : item.image
        ? [item.image]
        : [];
  const actionLabel =
    item.type === "youtube" ? content.openVideoLabel : content.openProofLabel;
  const imageAlt =
    item.type === "youtube"
      ? `${item.title} — ${content.videoThumbnailLabel}`
      : item.title;
  const imageVisual =
    imageSources.length > 0 ? (
      <div className="relative aspect-video overflow-hidden bg-ink/5">
        <img
          src={imageSources[0]}
          alt={imageAlt}
          className={`h-full w-full transition duration-500 group-hover:scale-[1.02] ${
            item.imageFit === "contain" ? "object-contain p-4" : "object-cover"
          }`}
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
        {item.type === "youtube" && (
          <span className="absolute inset-0 grid place-items-center bg-ink/10 transition group-hover:bg-ink/20">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-acid text-ink shadow-soft transition group-hover:scale-105">
              <Play size={21} fill="currentColor" aria-hidden="true" />
            </span>
          </span>
        )}
      </div>
    ) : (
      <div className="relative flex aspect-video items-end justify-between overflow-hidden border-b border-ink/10 bg-paper p-6">
        <span
          className="absolute inset-y-0 left-0 w-1.5 bg-acid"
          aria-hidden="true"
        />
        <span className="max-w-[16rem] font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink">
          {item.relatedProject ?? item.category}
        </span>
        <ArrowUpRight size={24} className="text-ink/45" aria-hidden="true" />
      </div>
    );
  const card = (
    <>
      {item.url && hasGallery ? (
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${item.title} — ${actionLabel}`}
          className="block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-acid"
        >
          {imageVisual}
        </a>
      ) : (
        imageVisual
      )}
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
        {(item.role || item.relatedProject) && (
          <div className="mt-5 border-t border-ink/10 pt-4">
            {item.role && (
              <p className="text-sm font-semibold leading-relaxed text-ink/72">
                {item.role}
              </p>
            )}
            {item.relatedProject && (
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink/42">
                {item.relatedProject}
              </p>
            )}
          </div>
        )}
        {item.url &&
          (hasGallery ? (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2"
            >
              {actionLabel}
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold">
              {actionLabel}
              <ArrowUpRight size={15} />
            </span>
          ))}
      </div>
      {hasGallery && (
        <ProofPhotoCarousel items={galleryItems} content={content} />
      )}
    </>
  );

  return item.url && !hasGallery ? (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${item.title} — ${actionLabel}`}
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

function ProofPhotoCarousel({
  items,
  content,
}: {
  items: EvidenceItem[];
  content: PortfolioContent["evidencePlaceholder"];
}) {
  const [validItems, setValidItems] = useState(items);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (validItems.length < 2 || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % validItems.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [isPaused, validItems.length]);

  useEffect(() => {
    setValidItems(items);
    setActiveIndex(0);
  }, [items]);

  useEffect(() => {
    if (activeIndex >= validItems.length) {
      setActiveIndex(Math.max(0, validItems.length - 1));
    }
  }, [activeIndex, validItems.length]);

  if (validItems.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + validItems.length) % validItems.length,
    );
  };
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % validItems.length);
  };
  const activeItem = validItems[activeIndex];

  return (
    <div
      className="border-t border-ink/10 p-4 sm:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) {
          return;
        }

        const distance =
          (event.changedTouches[0]?.clientX ?? touchStartX.current) -
          touchStartX.current;
        touchStartX.current = null;

        if (Math.abs(distance) < 45) {
          return;
        }

        if (distance > 0) {
          goToPrevious();
        } else {
          goToNext();
        }
      }}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl bg-ink/5">
        <img
          key={activeItem.id}
          src={activeItem.image}
          alt={activeItem.title}
          className={`h-full w-full ${
            activeItem.imageFit === "contain"
              ? "object-contain p-3 sm:p-5"
              : "object-cover"
          }`}
          loading="lazy"
          onError={() => {
            setValidItems((current) =>
              current.filter((item) => item.id !== activeItem.id),
            );
          }}
        />
        {validItems.length > 1 && (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label={content.previousPhotoLabel}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-ink/75 text-white backdrop-blur-sm transition hover:border-acid hover:text-acid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid"
            >
              <ArrowLeft size={17} />
            </button>
            <span className="rounded-full bg-ink/75 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white backdrop-blur-sm">
              {activeIndex + 1} / {validItems.length}
            </span>
            <button
              type="button"
              onClick={goToNext}
              aria-label={content.nextPhotoLabel}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-ink/75 text-white backdrop-blur-sm transition hover:border-acid hover:text-acid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <div aria-live="polite">
          <p className="text-sm font-semibold text-ink/78">{activeItem.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/58">
            {activeItem.role}
          </p>
        </div>
        <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/42">
          {activeItem.relatedProject}
        </span>
      </div>
    </div>
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
