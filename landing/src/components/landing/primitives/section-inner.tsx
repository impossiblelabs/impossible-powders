import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const maxWidthClasses = {
  760: "max-w-[760px]",
  800: "max-w-[800px]",
  860: "max-w-[860px]",
  900: "max-w-[900px]",
  960: "max-w-[960px]",
} as const;

interface SectionInnerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: keyof typeof maxWidthClasses;
}

export function SectionInner({
  children,
  className,
  maxWidth = 960,
}: SectionInnerProps) {
  return (
    <div
      className={cn(
        "mx-auto relative z-1",
        maxWidthClasses[maxWidth],
        className,
      )}
    >
      {children}
    </div>
  );
}
