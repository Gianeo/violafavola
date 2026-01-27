import { cn } from "@/lib/cn";

type StartWaveProps = {
  className?: string;
  flip?: boolean;
};

export function StartWave({ className, flip = false }: StartWaveProps) {
  return (
    <div className={cn("w-full overflow-hidden text-primary", className)} aria-hidden>
      <svg
        viewBox="0 0 878 27"
        preserveAspectRatio="none"
        className={cn("h-7 w-full fill-current", flip && "rotate-180")}
      >
        <line
          x1="0.5"
          y1="11.9435"
          x2="877.5"
          y2="11.9435"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M220.298 12.0953C156.548 38.1841 48.2035 22.9656 2 12.0953H220.298C284.047 -13.9935 408.853 12.0953 479 12.0953H220.298Z"
          fill="currentColor"
        />
        <path
          d="M220.298 12.0953C156.548 38.1841 48.2035 22.9656 2 12.0953H220.298ZM220.298 12.0953C284.047 -13.9935 408.853 12.0953 479 12.0953H220.298Z"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
}
