import Image from "next/image";

import { Button } from "@/components/primitives/Button";
import { Section } from "@/components/primitives/Section";
import { cn } from "@/lib/cn";
import type { ProjectContent } from "@/content/home";

type ProjectSectionProps = ProjectContent & {
  reverse?: boolean;
  id?: string;
};

export function ProjectSection({
  eyebrow,
  title,
  description,
  cta,
  images,
  reverse = false,
  id,
}: ProjectSectionProps) {
  const renderLines = (text: string) =>
    text.split("\n").map((line, index) => (
      <span key={`${line}-${index}`} className="block">
        {line}
      </span>
    ));
  const renderParagraphs = (text: string, className?: string) =>
    text.split("\n\n").map((paragraph, index) => (
      <p key={`${paragraph}-${index}`} className={className}>
        {paragraph.split("\n").map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`} className="block">
            {line}
          </span>
        ))}
      </p>
    ));

  return (
    <Section id={id}>
        <div className="grid items-center gap-8 md:grid-cols-8 lg:grid-cols-12">
          <div
            className={cn(
              "col-span-4 flex flex-col gap-6 md:col-span-4 lg:col-span-5",
              reverse && "lg:order-2"
            )}
          >
            <span className="text-overline uppercase text-muted-foreground">
              {renderLines(eyebrow)}
            </span>
            <h2 className="text-h2 font-semibold">{renderLines(title)}</h2>
            <div className="space-y-4">
              {renderParagraphs(description, "text-body text-muted-foreground")}
            </div>
            <div>
              <Button asChild variant="secondary">
                <a href={cta.href}>{renderLines(cta.label)}</a>
              </Button>
            </div>
          </div>
          <div
            className={cn(
              "col-span-4 md:col-span-4 lg:col-span-7",
              reverse && "lg:order-1"
            )}
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((item, index) => (
                <div
                  key={item.src}
                  className={cn(
                    "relative overflow-hidden rounded-md border border-border bg-card",
                    index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 40vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
    </Section>
  );
}
