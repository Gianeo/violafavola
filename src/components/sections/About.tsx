import Image from "next/image";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import type { AboutContent } from "@/content/home";

export function About({
  eyebrow,
  label,
  title,
  body,
  cta,
  collage,
}: AboutContent) {
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
    <Section>
      <Container>
        <div className="grid items-start gap-8 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 flex flex-col gap-6 md:col-span-4 lg:col-span-5">
            <span className="text-overline uppercase text-muted-foreground">
              {renderLines(eyebrow)}
            </span>
            <h2 className="text-h2 font-semibold">{renderLines(label)}</h2>
            <div className="space-y-4">
              {renderParagraphs(title, "text-body text-muted-foreground")}
            </div>
            <div className="space-y-4">
              {renderParagraphs(body, "text-body text-muted-foreground")}
            </div>
            <div>
              <Button asChild variant="secondary">
                <a href={cta.href}>{renderLines(cta.label)}</a>
              </Button>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              {collage.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-card"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 30vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
