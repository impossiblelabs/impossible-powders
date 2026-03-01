import type { ReactNode } from "react";
import { useTranslation, Trans } from "react-i18next";
import { ELEMENT_SYMBOLS } from "@/data/landing";
import { Reveal } from "./primitives/reveal";
import { SectionWrapper } from "./primitives/section-wrapper";
import { SectionInner } from "./primitives/section-inner";
import { Heading } from "./primitives/heading";

function ElementBadge({ symbol, name }: { symbol: string; name: string }) {
  return (
    <div className="text-center">
      <span className="font-display text-[1.8rem] text-brand-dark block leading-none mb-0.5">
        {symbol}
      </span>
      <span className="text-[0.65rem] text-brand-muted font-medium tracking-[0.04em] uppercase">
        {name}
      </span>
    </div>
  );
}

function ReframeCard({
  type,
  label,
  children,
}: {
  type: "endurance" | "strength";
  label: string;
  children: ReactNode;
}) {
  const isStrength = type === "strength";
  return (
    <div
      className={`bg-brand-white rounded-md p-8 transition-shadow duration-350 hover:shadow-[0_6px_24px_rgba(30,30,30,0.06)] ${
        isStrength
          ? "border border-brand-dark border-l-[3px]"
          : "border border-brand-mid"
      }`}
    >
      <span
        className={`font-display text-base tracking-[0.06em] block mb-3 ${
          isStrength ? "text-brand-dark" : "text-brand-muted"
        }`}
      >
        {label}
      </span>
      <p className="text-[0.86rem] text-brand-muted leading-relaxed [&_strong]:text-brand-dark [&_strong]:font-semibold">
        {children}
      </p>
    </div>
  );
}

export function ReframeSection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      bg="light"
      className="py-22 px-10 text-center max-tablet:py-16 max-tablet:px-6 max-sm:py-14 max-sm:px-5"
      id="reframe"
    >
      <SectionInner maxWidth={800}>
        <Reveal>
          <Heading
            size="lg"
            color="dark"
            align="center"
            className="max-sm:text-[1.6rem] max-[380px]:text-[1.35rem]"
          >
            {t("reframe.heading")}
          </Heading>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-[0.82rem] text-brand-muted mt-2 mb-10">
            {t("reframe.subtext")}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="flex justify-center gap-11 mb-12 py-7 border-t border-b border-brand-mid max-sm:gap-5 max-sm:flex-wrap max-[380px]:gap-3">
            {ELEMENT_SYMBOLS.map((symbol) => (
              <ElementBadge
                key={symbol}
                symbol={symbol}
                name={t(`elements.${symbol}`)}
              />
            ))}
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 text-left max-sm:grid-cols-1 max-sm:gap-3">
          <Reveal delay={0.08}>
            <ReframeCard type="endurance" label={t("reframe.enduranceLabel")}>
              <Trans
                i18nKey="reframe.enduranceBody"
                components={{ strong: <strong /> }}
              />
            </ReframeCard>
          </Reveal>
          <Reveal delay={0.16}>
            <ReframeCard type="strength" label={t("reframe.strengthLabel")}>
              <Trans
                i18nKey="reframe.strengthBody"
                components={{ strong: <strong /> }}
              />
            </ReframeCard>
          </Reveal>
        </div>
        <Reveal delay={0.24}>
          <p className="mt-10 text-[0.82rem] italic text-brand-muted">
            {t("reframe.closing")}
          </p>
        </Reveal>
      </SectionInner>
    </SectionWrapper>
  );
}
