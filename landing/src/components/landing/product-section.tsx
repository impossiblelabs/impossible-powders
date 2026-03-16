import { useTranslation } from "react-i18next";
import { Reveal } from "./primitives/reveal";
import { SectionWrapper } from "./primitives/section-wrapper";
import { SectionInner } from "./primitives/section-inner";
import { Heading } from "./primitives/heading";

const DETAIL_KEYS = [
  "serving",
  "calories",
  "osmolality",
  "taste",
  "usage",
] as const;

const ICONS = {
  serving: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  calories: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c-2-2.67-4-4.33-4-6a4 4 0 0 1 8 0c0 1.67-2 3.33-4 6zM12 12c2 2.67 4 4.33 4 6a4 4 0 0 1-8 0c0-1.67 2-3.33 4-6z" />
    </svg>
  ),
  osmolality: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v6l3 3M6 12a6 6 0 0 0 12 0M6 12H2M22 12h-4M12 22v-4" />
    </svg>
  ),
  taste: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  ),
  usage: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
} as const;

export function ProductSection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      bg="white"
      className="py-22 px-10 border-t border-brand-mid max-tablet:py-16 max-tablet:px-6 max-sm:py-14 max-sm:px-5"
      id="product"
    >
      <SectionInner maxWidth={800}>
        <Reveal>
          <Heading
            size="lg"
            color="dark"
            align="center"
            className="max-sm:text-[1.6rem] max-[380px]:text-[1.35rem]"
          >
            {t("product.heading")}
          </Heading>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-0">
          {DETAIL_KEYS.map((key, i) => (
            <Reveal key={key} delay={i * 0.06}>
              <div className="flex items-center gap-4 py-4 border-b border-brand-mid last:border-b-0">
                <span className="text-brand-dark shrink-0">{ICONS[key]}</span>
                <span className="text-[0.86rem] text-brand-muted leading-relaxed">
                  {t(`product.${key}`)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionInner>
    </SectionWrapper>
  );
}
