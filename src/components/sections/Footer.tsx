import Image from "next/image";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import type { FooterContent } from "@/content/home";

export function Footer({
  title,
  body,
  image,
  primaryCta,
  secondaryCta,
}: FooterContent) {
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
    <Section as="footer" tone="dark" id="contact">
      <Container>
        <div className="grid grid-cols-12 gap-8 min-h-[580px] pt-8">
          <div className="col-start-2 col-span-6 rounded-md relative overflow-hidden aspect-[16/9] max-h-[400px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
          </div>
          <div className="col-span-3 gap-8 flex flex-col">
            <h2 className="text-h1 font-semibold">{renderLines(title)}</h2>
            <div className="max-w-md space-y-4">
              {renderParagraphs(body, "text-body text-muted-foreground")}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={primaryCta.href} className="flex items-center gap-2">
                  {renderLines(primaryCta.label)}
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={secondaryCta.href} className="flex items-center gap-2">
                  <Image
                    src="/images/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                    className="size-4 invert"
                  />
                  {renderLines(secondaryCta.label)}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
