import type { PortfolioContent } from "../types/content";
import type { SkillGroup } from "../data/skills";
import { Container, Reveal, SectionHeading } from "./ui";

export function Leadership({
  content,
  skills,
}: {
  content: PortfolioContent["leadership"];
  skills: SkillGroup[];
}) {
  return (
    <section id="skills" className="section-pad select-text bg-paper">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
        </Reveal>
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.05}
              className="group min-h-[350px] select-text rounded-2xl border border-ink/18 bg-white p-7 text-ink transition-colors hover:border-acid sm:p-9"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[13px] font-semibold text-ink/50"
                  >
                    {group.number}
                  </span>
                </div>
                <div className="mt-16">
                  <h3 className="font-display text-[clamp(1.65rem,2.4vw,2.1rem)] font-semibold tracking-[-0.03em]">
                    {group.title}
                  </h3>
                  <p
                    className="mt-3 text-base font-semibold leading-[1.55] text-ink/75"
                  >
                    {group.descriptor}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-base leading-relaxed text-ink/58"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
