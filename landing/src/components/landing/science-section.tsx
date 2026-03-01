import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Reveal } from "./primitives/reveal";
import { Heading } from "./primitives/heading";
import { NoiseOverlay } from "./primitives/noise-overlay";

export function ScienceSection() {
  const { t } = useTranslation();
  const points = t("science.points", { returnObjects: true }) as string[];

  return (
    <section
      className="grid grid-cols-2 min-h-[440px] max-sm:grid-cols-1"
      id="science"
    >
      <div className="bg-brand-mid flex items-center justify-center text-[0.7rem] text-brand-muted font-medium tracking-[0.1em] uppercase max-sm:min-h-[200px] max-sm:order-0">
        {t("science.imagePlaceholder")}
      </div>
      <div className="bg-brand-dark text-brand-light p-[4.5rem] relative flex flex-col justify-center max-tablet:p-10 max-sm:p-5 max-sm:order-1">
        <NoiseOverlay />
        <div className="relative z-1">
          <Reveal>
            <Heading size="lg" color="light" className="max-sm:text-[1.6rem]">
              {t("science.heading")}
            </Heading>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[0.86rem] text-brand-light/55 leading-relaxed mt-4 mb-7 max-w-[380px]">
              {t("science.body")}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="list-none mb-8 p-0">
              {points.map((pt, i) => (
                <li
                  key={i}
                  className="science-point text-[0.82rem] text-brand-light/50 py-2 pl-6 relative leading-normal"
                >
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.24}>
            <Button
              variant="brand-outline"
              size="brand"
              asChild
              className="max-sm:w-full max-sm:text-center"
            >
              <a href="#">{t("science.learnMore")}</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
