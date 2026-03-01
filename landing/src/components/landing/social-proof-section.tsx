import { useTranslation } from "react-i18next";
import { Reveal } from "./primitives/reveal";
import { SectionWrapper } from "./primitives/section-wrapper";
import { SectionInner } from "./primitives/section-inner";
import { Heading } from "./primitives/heading";
import { NoiseOverlay } from "./primitives/noise-overlay";

function SocialCard({ placeholder }: { placeholder: string }) {
  return (
    <div className="aspect-[4/3] bg-brand-light/4 border border-brand-light/6 rounded flex items-center justify-center overflow-hidden transition-[transform,border-color] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:border-brand-light/15 max-sm:aspect-video">
      <span className="text-[0.65rem] text-brand-light/20 tracking-[0.12em] uppercase">
        {placeholder}
      </span>
    </div>
  );
}

export function SocialProofSection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      bg="dark"
      className="py-16 px-10 relative max-sm:py-12 max-sm:px-5"
      id="social-proof"
    >
      <NoiseOverlay />
      <SectionInner maxWidth={860}>
        <Reveal>
          <Heading
            size="md"
            color="light"
            align="center"
            className="max-sm:text-[1.3rem]"
          >
            {t("socialProof.heading")}
          </Heading>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid grid-cols-3 gap-2.5 mt-10 max-sm:grid-cols-1 max-sm:gap-2">
            {[0, 1, 2].map((i) => (
              <SocialCard
                key={i}
                placeholder={t("socialProof.feedPlaceholder")}
              />
            ))}
          </div>
        </Reveal>
      </SectionInner>
    </SectionWrapper>
  );
}
