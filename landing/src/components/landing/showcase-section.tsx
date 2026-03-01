import { useTranslation } from "react-i18next";
import { CALLOUT_KEYS } from "@/data/landing";
import { Reveal } from "./primitives/reveal";
import { SectionWrapper } from "./primitives/section-wrapper";
import { SectionInner } from "./primitives/section-inner";

function CalloutCard({
  title,
  desc,
  delay = 0,
}: {
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="text-center px-2 max-sm:grid max-sm:grid-cols-[auto_1fr] max-sm:gap-2.5 max-sm:items-baseline max-sm:text-left max-sm:px-0 max-sm:py-3.5 max-sm:border-b max-sm:border-brand-mid max-sm:last:border-b-0"
    >
      <div className="font-display text-[1.1rem] tracking-[0.06em] text-brand-dark mb-1.5 max-sm:mb-0 max-sm:text-[0.95rem]">
        {title}
      </div>
      <div className="text-[0.78rem] text-brand-muted leading-normal">
        {desc}
      </div>
    </Reveal>
  );
}

export function ShowcaseSection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      bg="white"
      className="py-22 px-10 max-tablet:py-16 max-tablet:px-6 max-sm:py-14 max-sm:px-5"
      id="formula"
    >
      <SectionInner maxWidth={760}>
        <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-sm:gap-0">
          {CALLOUT_KEYS.map((key, i) => (
            <CalloutCard
              key={key}
              title={t(`callouts.${key}.title`)}
              desc={t(`callouts.${key}.desc`)}
              delay={i * 0.08}
            />
          ))}
        </div>
        <Reveal delay={0.16}>
          <div className="flex justify-around px-[6%] max-sm:hidden">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-px h-12 bg-gradient-to-b from-brand-mid to-transparent"
              />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="w-full bg-brand-light rounded-lg py-14 px-8 flex items-center justify-center min-h-[220px] relative border border-brand-mid max-sm:mt-5 max-sm:py-10 max-sm:px-6 max-sm:min-h-[160px]">
            <span className="text-[0.7rem] text-brand-muted font-medium tracking-[0.1em] uppercase">
              {t("showcase.productImageAlt")}
            </span>
          </div>
        </Reveal>
      </SectionInner>
    </SectionWrapper>
  );
}
