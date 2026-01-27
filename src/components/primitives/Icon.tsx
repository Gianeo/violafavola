import Image from "next/image";

import { cn } from "@/lib/cn";

type IconProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  priority?: boolean;
};

export function Icon({ src, alt, size = 20, className, priority }: IconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("h-auto w-auto", className)}
      priority={priority}
    />
  );
}
