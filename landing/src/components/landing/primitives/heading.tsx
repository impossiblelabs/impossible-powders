import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "text-[1.1rem]",
  md: "text-[1.6rem]",
  lg: "text-[2.2rem]",
  xl: "text-[2.4rem]",
  hero: "text-[3rem] leading-[0.95]",
} as const;

const colorClasses = {
  dark: "text-brand-dark",
  light: "text-brand-light",
} as const;

const alignClasses = {
  left: "text-left",
  center: "text-center",
} as const;

interface HeadingProps {
  children: ReactNode;
  size?: keyof typeof sizeClasses;
  color?: keyof typeof colorClasses;
  align?: keyof typeof alignClasses;
  className?: string;
}

export function Heading({
  children,
  size = "lg",
  color = "dark",
  align = "left",
  className,
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-display tracking-[0.02em]",
        size !== "hero" && "leading-none",
        sizeClasses[size],
        colorClasses[color],
        alignClasses[align],
        className,
      )}
    >
      {children}
    </h2>
  );
}
