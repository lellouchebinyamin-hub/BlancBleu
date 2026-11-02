import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Eyebrow } from "@/components/sections/eyebrow";
import {
  CompareVisual,
  MixVisual,
  RiskVisual,
} from "@/components/sections/why-not-bank-visuals";
import type { Dictionary } from "@/content";

/** Section 3, the site's one dark band: why a private advisor and not the bank's own. */
export function WhyNotBank({ copy }: { copy: Dictionary["whyNotBank"] }) {
  const visuals = [
    <CompareVisual key="compare" />,
    <MixVisual key="mix" labels={copy.mixTracks} />,
    <RiskVisual key="risk" />,
  ];

  return (
    <section aria-labelledby="why-not-bank-title" className="py-3 md:px-5 md:py-5">
      {/* On phones the band runs edge to edge, square, so the cards inside get the full width. */}
      <div className="mx-auto max-w-[90rem] overflow-clip bg-navy text-paper md:rounded-[3rem]">
        <div className="mx-auto max-w-[75rem] px-4 py-16 sm:px-6 md:py-32">
          <header className="mx-auto flex max-w-[48rem] flex-col items-center px-1 text-center md:px-0">
            <Eyebrow tone="dark" className="mb-7">
              {copy.eyebrow}
            </Eyebrow>

            <TextReveal
              id="why-not-bank-title"
              accentClassName="text-sky"
              className="font-serif text-[clamp(2.25rem,1.2rem+4vw,4.25rem)] leading-[1.06] font-normal text-balance"
              segments={[{ text: copy.title.lead }, { text: copy.title.accent, accent: true }]}
            />

            <Reveal
              as="p"
              delay={0.2}
              className="mt-7 max-w-[34rem] text-[1.0625rem] leading-relaxed text-paper/70 md:text-lg"
            >
              {copy.intro}
            </Reveal>
          </header>

          <RevealGroup
            as="ul"
            className="mt-10 grid gap-4 md:mt-20 lg:grid-cols-3 lg:gap-5"
          >
            {copy.points.map((point, index) => (
              <RevealItem
                as="li"
                key={point.title}
                className="group/card flex flex-col rounded-[1.75rem] border border-paper/10 bg-paper/[0.04] p-7 transition-[border-color,background-color,translate] duration-500 ease-brand hover:-translate-y-1 hover:border-paper/25 hover:bg-paper/[0.07] md:p-9"
              >
                <div className="flex h-28 items-center md:h-36">{visuals[index]}</div>
                <span
                  aria-hidden
                  className="mt-7 font-serif md:mt-9 text-lg text-sky transition-colors duration-300 group-hover/card:text-paper"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-[1.625rem] leading-snug font-normal md:text-[1.75rem]">
                  {point.title}
                </h3>
                <p className="mt-3 leading-relaxed text-paper/70">{point.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
