import { Icon } from "@/components/primitives/Icon";
import { cn } from "@/lib/cn";

export type TopLinkItem = {
  label: string;
  href: string;
  icon: string;
};

type TopLinksProps = {
  items: TopLinkItem[];
  className?: string;
};

export function TopLinks({ items, className }: TopLinksProps) {
  return (
    <div
      className={cn(
        "pointer-events-auto fixed right-6 top-6 z-30 flex items-center gap-3",
        className
      )}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="rounded-full border border-primary/20 bg-white/5 p-3 text-primary backdrop-blur transition hover:bg-white/10"
        >
          {item.icon.endsWith(".svg") ? (
            <span
              aria-hidden
              className="block h-4 w-4 bg-primary"
              style={{
                WebkitMaskImage: `url(${item.icon})`,
                maskImage: `url(${item.icon})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          ) : (
            <Icon src={item.icon} alt={item.label} size={16} />
          )}
        </a>
      ))}
    </div>
  );
}
