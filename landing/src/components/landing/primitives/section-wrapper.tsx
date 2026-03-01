import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const bgClasses = {
  dark: "bg-brand-dark",
  light: "bg-brand-light",
  mid: "bg-brand-mid",
  white: "bg-brand-white",
} as const;

interface SectionWrapperProps {
  children: ReactNode;
  bg?: keyof typeof bgClasses;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  bg = "white",
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn(bgClasses[bg], className)}>
      {children}
    </section>
  );
}
