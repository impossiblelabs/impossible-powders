import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ELEMENT_SYMBOLS } from "@/data/landing";
import { Reveal } from "./primitives/reveal";
import { SectionWrapper } from "./primitives/section-wrapper";
import { SectionInner } from "./primitives/section-inner";
import { Heading } from "./primitives/heading";

type ElementSymbol = (typeof ELEMENT_SYMBOLS)[number];

function ElementBadge({
  symbol,
  name,
  selected,
  onClick,
}: {
  symbol: string;
  name: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-center cursor-pointer rounded-lg px-4 py-3 transition-all duration-200 ${
        selected
          ? "bg-brand-dark text-brand-white shadow-[0_2px_12px_rgba(30,30,30,0.12)]"
          : "hover:bg-brand-mid/40"
      }`}
    >
      <span
        className={`font-display text-[1.8rem] block leading-none mb-0.5 ${
          selected ? "text-brand-white" : "text-brand-dark"
        }`}
      >
        {symbol}
      </span>
      <span
        className={`text-[0.65rem] font-medium tracking-[0.04em] uppercase ${
          selected ? "text-brand-white/70" : "text-brand-muted"
        }`}
      >
        {name}
      </span>
    </button>
  );
}

export function ReframeSection() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<ElementSymbol>("Mg");

  function handleSelect(symbol: ElementSymbol) {
    setSelected((prev) => (prev === symbol ? prev : symbol));
  }

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
          <div className="flex justify-center gap-6 mb-4 py-7 border-t border-b border-brand-mid max-sm:gap-2 max-sm:flex-wrap max-[380px]:gap-1">
            {ELEMENT_SYMBOLS.map((symbol) => (
              <ElementBadge
                key={symbol}
                symbol={symbol}
                name={t(`elements.${symbol}`)}
                selected={selected === symbol}
                onClick={() => handleSelect(symbol)}
              />
            ))}
          </div>
        </Reveal>
        {selected && (
          <div
            key={selected}
            className="mb-8 text-left bg-brand-white border border-brand-dark border-l-[3px] rounded-md p-8 transition-shadow duration-350 hover:shadow-[0_6px_24px_rgba(30,30,30,0.06)] animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            <span className="font-display text-base tracking-[0.06em] text-brand-dark block mb-3">
              {t(`elements.${selected}`)}
            </span>
            <p className="text-[0.86rem] text-brand-muted leading-relaxed">
              {t(`elements.why.${selected}`)}
            </p>
          </div>
        )}
      </SectionInner>
    </SectionWrapper>
  );
}
