import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Reveal } from "./primitives/reveal";
import { SectionWrapper } from "./primitives/section-wrapper";
import { SectionInner } from "./primitives/section-inner";
import { Heading } from "./primitives/heading";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      bg="white"
      className="py-20 px-10 border-t border-brand-mid max-sm:py-14 max-sm:px-5"
    >
      <SectionInner>
        <div className="text-center">
          <Reveal>
            <Heading
              size="xl"
              color="dark"
              align="center"
              className="max-sm:text-[1.6rem]"
            >
              {t("cta.heading")}{" "}
              <span className="px-2 py-1 rounded bg-[#E9E7E2] text-[#1E1E1E]">
                {t("cta.headingHighlight")}
              </span>
            </Heading>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-7">
              <Button
                variant="brand-primary"
                size="brand"
                asChild
                className="max-sm:w-full max-sm:max-w-[320px] max-sm:mx-auto max-sm:block"
              >
                <a href="#">{t("cta.button")}</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </SectionInner>
    </SectionWrapper>
  );
}
