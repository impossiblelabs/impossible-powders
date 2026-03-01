import { useTranslation } from "react-i18next";
import { STATS } from "@/data/landing";
import type { StatItem } from "@/data/landing";
import { Reveal } from "./primitives/reveal";
import { SectionWrapper } from "./primitives/section-wrapper";
import { SectionInner } from "./primitives/section-inner";
import { Heading } from "./primitives/heading";
import { NoiseOverlay } from "./primitives/noise-overlay";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="py-6 px-2 text-center bg-[rgba(30,30,30,0.95)] flex flex-col items-center transition-colors duration-300 hover:bg-[rgba(50,50,50,0.95)]">
      <span className="font-display text-[2.2rem] text-brand-light leading-none tracking-[0.02em] max-[380px]:text-2xl">
        {value}
      </span>
      <span className="text-[0.65rem] text-brand-muted uppercase tracking-[0.08em] mt-1">
        {label}
      </span>
    </div>
  );
}

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      bg="dark"
      className="py-20 px-10 relative overflow-hidden max-tablet:py-16 max-tablet:px-6 max-sm:py-12 max-sm:px-5"
    >
      <NoiseOverlay />
      <SectionInner className="grid grid-cols-[1.1fr_1.5fr] gap-12 items-center max-tablet:gap-8 max-sm:grid-cols-1 max-sm:gap-6">
        <div className="max-sm:text-center">
          <Reveal>
            <span className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-brand-muted mb-3 block max-sm:mb-2">
              {t("hero.badge")}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <Heading
              size="hero"
              color="light"
              className="max-tablet:text-[2.5rem] max-sm:text-[2rem] max-[380px]:text-[1.7rem]"
            >
              {t("hero.heading")}
            </Heading>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-[0.9rem] text-brand-muted max-w-[300px] leading-relaxed mt-4 max-sm:max-w-none max-sm:mx-auto max-sm:mt-2">
              {t("hero.subtext")}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href="#reframe"
              className="inline-flex items-center gap-1.5 mt-7 text-brand-light no-underline text-[0.7rem] font-semibold tracking-[0.1em] uppercase opacity-40 hover:opacity-80 transition-opacity max-sm:justify-center"
            >
              {t("hero.cta")} &darr;
            </a>
          </Reveal>
        </div>
        <Reveal
          delay={0.16}
          className="grid grid-cols-4 gap-px bg-brand-light/8 rounded-md overflow-hidden max-sm:grid-cols-2"
        >
          {STATS.map((s: StatItem) => (
            <StatCard key={s.key} value={s.value} label={t(`stats.${s.key}`)} />
          ))}
        </Reveal>
      </SectionInner>
    </SectionWrapper>
  );
}
