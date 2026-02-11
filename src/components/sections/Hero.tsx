import Image from "next/image";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { TopLinks } from "@/components/primitives/TopLinks";
import type { HeroContent } from "@/content/home";

export function Hero({
  headline,
  subcopy,
  cta,
  portrait,
  social,
}: HeroContent) {
  const renderLines = (text: string) =>
    text.split("\n").map((line, index) => (
      <span key={`${line}-${index}`} className="block">
        {line}
      </span>
    ));
  const renderParagraphs = (text: string) =>
    text.split("\n\n").map((paragraph, index) => (
      <p key={`${paragraph}-${index}`}>
        {paragraph.split("\n").map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`} className="block">
            {line}
          </span>
        ))}
      </p>
    ));

  return (
    <Section tone="dark" className="relative z-0 overflow-hidden">
      <Container>
        <Image
          src="/images/hero.webp"
          alt=""
          width={640}
          height={640}
          className="pointer-events-none absolute left-[50%] top-0 h-auto object-cover md:block "
          priority
        />
        <div className="relative z-10 grid grid-cols-4 gap-y-10 md:grid-cols-12 md:gap-y-8 mt-8 md:mt-24">
          <div className="relative col-span-4 flex items-center justify-start md:row-start-1 md:col-start-2 md:col-span-2">
            <div className="relative size-28 overflow-hidden rounded-full border border-border/60 bg-card/20 md:size-40">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 120px"
                priority
              />
            </div>
              <Image
                src="/images/bubble-2.webp"
                alt=""
                width={80}
                height={80}
                className="pointer-events-none absolute right-22 md:right-16 top-0 md:top-80 h-auto object-cover md:block opacity-20"
              />
          </div>
          <div className="col-span-4 flex flex-col gap-6 md:row-start-1 md:col-start-4 md:col-span-7 md:gap-8 relative">
            <h1 className="display">
              {renderLines(headline)}
            </h1>
            <Image
              src="/images/bubble-1.webp"
              alt=""
              width={96}
              height={96}
              className="pointer-events-none absolute -left-10 md:-left-14 -top-7 md:-top-10 h-16 w-16 object-cover md:block md:h-24 md:w-24"
            />
          </div>

          {/* <div className="hidden items-center gap-8 pr-8 md:row-start-2 md:col-start-1 md:col-span-8 md:flex">
            <StartWave />
          </div> */}

          <div className="col-span-4 hidden flex-col items-end gap-8 md:row-start-1 md:col-start-9 md:col-span-3 md:flex md:justify-end pb-4">
            <div className="copy-primary">Viola Favaretto</div>
          </div>

          <div className="col-span-4 space-y-4 md:row-start-3 md:col-start-4 md:col-span-8 md:pb-16">
            <h2 className="title">Designer and co-founder working at the intersection of product, people, and AI.</h2>
          </div>

          <div className="col-span-4 pt-1 md:row-start-4 md:col-start-4 md:col-span-8">
            <Button asChild size="lg">
              <a href={cta.href}>{renderLines(cta.label)}</a>
            </Button>
          </div>

          <div className="col-span-4 md:row-start-4 md:col-start-7 md:col-span-5">
            <div className="copy columns-1 gap-6 md:columns-2 md:gap-8 md:max-w-2xl">
              {renderParagraphs(subcopy)}
            </div>
          </div>

        </div>
      </Container>
      <TopLinks items={social} mobileLabel="Viola Favaretto" />
    </Section>
  );
}
