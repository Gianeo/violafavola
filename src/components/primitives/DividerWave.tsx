import * as React from "react";

import { cn } from "@/lib/cn";

type DividerWaveProps = {
  className?: string;
  flip?: boolean;
};

export function DividerWave({ className, flip = false }: DividerWaveProps) {
  return (
    <div className={cn("w-full overflow-hidden text-primary", className)} aria-hidden>
      <svg
        viewBox="0 0 426 32"
        preserveAspectRatio="none"
        className={cn(
          "h-6 w-full max-w-106.5 mx-auto md:h-8",
          flip && "rotate-180"
        )}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M203.891 15.7991C152.299 51.1009 68.0214 15.7991 0 15.7991H203.891ZM203.891 15.7991C254.344 -18.7239 365.222 15.7991 425.241 15.7991H203.891Z"
          fill="#6653C6"
          fillOpacity="0.6"
        />
        <path
          d="M203.891 15.7991C152.299 51.1009 68.0214 15.7991 0 15.7991H203.891ZM203.891 15.7991C254.344 -18.7239 365.222 15.7991 425.241 15.7991H203.891Z"
          stroke="#6653C6"
          strokeOpacity="0.2"
          strokeWidth="0.910872"
        />
      </svg>
    </div>
  );
}
