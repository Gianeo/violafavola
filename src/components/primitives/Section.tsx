import * as React from "react";

import { cn } from "@/lib/cn";

type SectionTone = "light" | "dark";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  tone?: SectionTone;
};

export function Section({
  as: Comp = "section",
  tone = "light",
  className,
  ...props
}: SectionProps) {
  return (
    <Comp
      className={cn(
        "py-16 md:py-40",
        tone === "dark" ? "dark bg-bg text-fg" : "bg-bg text-fg",
        className
      )}
      {...props}
    />
  );
}
