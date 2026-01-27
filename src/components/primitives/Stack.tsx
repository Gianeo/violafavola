import * as React from "react";

import { cn } from "@/lib/cn";

type StackSize = "sm" | "md" | "lg" | "xl";

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: StackSize;
};

const sizeStyles: Record<StackSize, string> = {
  sm: "gap-3",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

export function Stack({ size = "md", className, ...props }: StackProps) {
  return (
    <div className={cn("flex flex-col", sizeStyles[size], className)} {...props} />
  );
}
