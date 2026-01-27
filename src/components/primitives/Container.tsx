import * as React from "react";

import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full max-w-[1680px] mx-auto px-6 md:px-0", className)}
      {...props}
    />
  );
}
