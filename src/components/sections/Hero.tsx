import Image from "next/image";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { TopLinks } from "@/components/primitives/TopLinks";
import type { HeroContent } from "@/content/home";
import { StartWave } from "../primitives/StartWave";

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
    <Section tone="dark" className="relative z-0 overflow-hidden bg-bg-dark">
      <Container>
      <Image
        src="/images/Portfolio-V/viola-img-2.webp"
        alt=""
        width={760}
        height={760}
        className="pointer-events-none absolute left-[45%] top-24 h-auto object-cover opacity-50"
        priority
      />
      <div className="relative z-10 grid grid-cols-12 gap-y-16">

        <div className="row-start-1 col-start-2 col-span-2 flex items-center justify-start">
          <div className="relative size-40 overflow-hidden rounded-full border border-border/60 bg-card/20">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              className="object-cover"
              sizes="120px"
              priority
            />
          </div>
        </div>
          <div className="row-start-1 col-start-4 col-span-7 flex flex-col gap-8">
            <h1 className="display">
            {renderLines(headline)}
          </h1>
        </div>

        <div className="row-start-2 col-start-1 col-span-8 flex items-center gap-8 pr-8">
          <StartWave />
        </div>

        <div className="row-start-2 col-start-9 col-span-3 flex items-center gap-8">
          <div className="copy-primary">Viola Favaretto</div>
        </div>

        <div className="row-start-3 col-start-4 col-span-8 pb-16 space-y-4">
          {renderParagraphs(subcopy, "title")}
        </div>

        <div className="row-start-4 col-start-4 col-span-8 pt-1">
            <Button asChild size="lg">
              <a href={cta.href}>{renderLines(cta.label)}</a>
            </Button>
        </div>

        <div className="row-start-4 col-start-6 col-span-5">
          <p className="copy columns-2 gap-8 max-w-2xl">
            My work focuses on making complex tools understandable, usable, and aligned with business reality, while operating inside ambiguity.<br /><br />

            I spent years at the intersection of people and fast-paced environments. I became the person others relied on to solve problems, handle digital friction, and keep experiences running smoothly. Watching how tools, processes, and small design failures shaped behaviour pushed me toward designing systems that actually work for the people using them.<br /><br />
            I’m now shaping my work around being AI-native, systematic, and design real product impact, with the goal of building tools that grow with both people and the businesses behind them.
            </p>
         </div>
            
      </div>
      </Container>
      <TopLinks items={social} />
      </Section>
  );
}
