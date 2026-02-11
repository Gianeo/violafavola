import * as React from "react";

import { cn } from "@/lib/cn";

type DividerWaveBasicProps = {
  className?: string;
  flip?: boolean;
};

export function DividerWaveBasic({ className, flip = false }: DividerWaveBasicProps) {
  return (
    <div className={cn("w-full overflow-hidden text-primary", className)} aria-hidden>
      <svg
        viewBox="0 0 1122 33"
        preserveAspectRatio="none"
        className={cn(
          "h-6 w-full max-w-[60rem] mx-auto fill-current md:h-8",
          flip && "rotate-180"
        )}
      >
        {/* <line
          x1="0"
          y1="16.75"
          x2="1122"
          y2="16.7501"
          stroke="currentColor"
          strokeWidth="1.5"
        /> */}
        <path
          d="M543.298 16.323C483 52.728 384.5 16.323 305 16.323L543.298 16.323C602.265 -19.2788 731.853 16.323 802 16.323H543.298Z"
          fill="currentColor"
        />
        <path
          d="M543.298 16.323C483 52.728 384.5 16.323 305 16.323L543.298 16.323ZM543.298 16.323C602.265 -19.2788 731.853 16.323 802 16.323H543.298Z"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
}
