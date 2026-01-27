import * as React from "react";

import { cn } from "@/lib/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-small font-medium text-fg",
        className
      )}
      {...props}
    />
  );
}
