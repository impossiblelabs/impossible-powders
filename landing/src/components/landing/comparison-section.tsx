import { useTranslation } from "react-i18next";
import { COMPARISON_ROWS, COMPETITORS } from "@/data/landing";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives/reveal";
import { SectionWrapper } from "./primitives/section-wrapper";
import { SectionInner } from "./primitives/section-inner";
import { Heading } from "./primitives/heading";

function ComparisonTable() {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto -webkit-overflow-scrolling-touch mt-10 max-sm:px-5 max-sm:comp-table-mask">
      <Table className="min-w-[520px] border-separate border-spacing-0 max-sm:min-w-[560px]">
        <TableHeader>
          <TableRow className="border-b-0 hover:bg-transparent">
            <TableHead className="p-4 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-left border-b-2 border-brand-mid text-brand-muted whitespace-nowrap" />
            <TableHead className="comp-highlight p-4 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-center border-b-2 border-brand-mid text-brand-dark bg-white relative whitespace-nowrap">
              Impossible Powders
            </TableHead>
            {COMPETITORS.map((c) => (
              <TableHead
                key={c}
                className="p-4 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-center border-b-2 border-brand-mid text-brand-muted whitespace-nowrap"
              >
                {c}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {COMPARISON_ROWS.map((row) => (
            <TableRow
              key={row.key}
              className="border-b-0 hover:bg-transparent [&_td]:hover:bg-white/50"
            >
              <TableCell className="text-left font-bold text-brand-dark text-[0.72rem] uppercase tracking-[0.06em] py-3.5 px-4 border-b border-brand-mid whitespace-nowrap max-sm:sticky max-sm:left-0 max-sm:bg-brand-light max-sm:z-1">
                {t(`comparison.${row.key}`)}
              </TableCell>
              <TableCell className="text-center text-brand-dark font-bold bg-white text-[0.92rem] py-3.5 px-4 border-b border-brand-mid whitespace-nowrap hover:bg-white!">
                {row.ours}
              </TableCell>
              {row.values.map((v, i) => (
                <TableCell
                  key={i}
                  className={cn(
                    "text-center text-brand-muted text-[0.88rem] py-3.5 px-4 border-b border-brand-mid whitespace-nowrap",
                    v === "0mg" && "opacity-30",
                  )}
                >
                  {v}
                </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow className="border-b-0 hover:bg-transparent">
            <TableCell className="text-left font-bold text-brand-dark text-[0.72rem] uppercase tracking-[0.06em] py-3.5 px-4 border-b-0 italic whitespace-nowrap max-sm:sticky max-sm:left-0 max-sm:bg-brand-light max-sm:z-1">
              {t("comparison.designedFor")}
            </TableCell>
            <TableCell className="text-center text-brand-dark font-bold bg-white text-[0.76rem] py-3.5 px-4 border-b-0 italic whitespace-nowrap">
              {t("comparison.strengthTraining")}
            </TableCell>
            <TableCell className="text-center text-brand-muted text-[0.76rem] py-3.5 px-4 border-b-0 italic whitespace-nowrap">
              {t("comparison.ketoFasting")}
            </TableCell>
            <TableCell className="text-center text-brand-muted text-[0.76rem] py-3.5 px-4 border-b-0 italic whitespace-nowrap">
              {t("comparison.rehydration")}
            </TableCell>
            <TableCell className="text-center text-brand-muted text-[0.76rem] py-3.5 px-4 border-b-0 italic whitespace-nowrap">
              {t("comparison.endurance")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export function ComparisonSection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      bg="light"
      className="py-22 px-10 max-tablet:py-16 max-tablet:px-6 max-sm:py-14 max-sm:px-0"
      id="compare"
    >
      <SectionInner maxWidth={860}>
        <Reveal>
          <Heading
            size="lg"
            color="dark"
            align="center"
            className="max-sm:text-[1.6rem] max-sm:px-5"
          >
            {t("comparison.heading")}
          </Heading>
        </Reveal>
        <Reveal delay={0.08}>
          <ComparisonTable />
        </Reveal>
        <span className="hidden max-sm:block text-center text-[0.65rem] text-brand-muted pt-2.5">
          &larr; {t("comparison.swipeHint")} &rarr;
        </span>
      </SectionInner>
    </SectionWrapper>
  );
}
