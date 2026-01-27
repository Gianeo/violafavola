import * as React from "react";

import { cn } from "@/lib/cn";

type GridProps = React.HTMLAttributes<HTMLDivElement>;

export function Grid({ className, ...props }: GridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-4 gap-6 md:grid-cols-8 md:gap-8 lg:grid-cols-12",
        className
      )}
      {...props}
    />
  );
}
