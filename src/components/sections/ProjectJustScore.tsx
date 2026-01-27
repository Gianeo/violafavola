import Image from "next/image";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
export function ProjectJustScore() {
  return (
    <Section id="justscore">
      <Container className="space-y-8">
        <div className="grid grid-cols-12 mb-24">
          <div className="row-start-1 col-start-2 col-span-9 flex items-center">
            <div className="copy-primary">1/3 Latest Venture</div>
          </div>
          <div className="row-start-1 col-start-1 col-span-12">
            <Image
              src="/images/JustScore/js-logo.svg"
              alt="JustScore logo"
              width={120}
              height={40}
              className="ml-4 w-full min-h-[220px] h-auto"
            />
          </div>
          <div className="row-start-2 col-start-2 col-span-4 mt-8">
            <h3 className="title">Introducing Performance Clarity for Modern teams - Making Feedback Continuous, Fair and Actionable.</h3>
          </div>
          <div className="row-start-2 col-start-8 col-span-3 pt-1 mt-8">
            <h3 className="copy">A performance management platform for managers that&apos;s simple, actionable, and genuinely motivating. Wore multiple hats as creative co-founder, and supported end-to-end in design and business; from UX/UI, marketing, go-to-market and more. While being mentored on my craft, I dived into applying AI tools and agents, for research, engagement, automations and multi-task management.</h3>
            <div className="pt-16">
              <Button asChild size="lg">
                <a
                  href="https://justscore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white"
                >
                  Visit Justscore
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 min-h-[580px]">
          <div className="col-start-2 col-span-7 bg-neutral-light rounded-md relative overflow-hidden aspect-[16/9] max-h-[520px]">
            {/* <Image
              src="/images/JustScore/js-img-1.webp"
              alt="JustScore product overview"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 60vw"
            /> */}
          </div>
          <div className="col-span-3 grid grid-cols-1 gap-8">
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-[4/3] max-h-[195px]">
              {/* <Image
                src="/images/JustScore/js-img-1.2.webp"
                alt="JustScore interface detail"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-[4/3] max-h-[195px]">
              {/* <Image
                src="/images/JustScore/js-img-1.3.webp"
                alt="JustScore mobile preview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="space-y-2 px-12 py-8">
              <h4 className="title-sm">Web & App Co-Design</h4>
              <p className="copy">Participated during brainstorming sessions and user flow testing including engineers, as the employee voice, to influence design decisions.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 min-h-[580px]">
          <div className="col-start-2 col-span-3 grid grid-cols-1 gap-8">
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-[4/3] max-h-[195px]">
              {/* <Image
                src="/images/JustScore/js-img-2.2.webp"
                alt="JustScore interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-[4/3] max-h-[195px]">
              {/* <Image
                src="/images/JustScore/js-img-2.3.webp"
                alt="JustScore mobile preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="space-y-2 px-10 py-16">
              <h4 className="title-sm">Web & App Co-Design</h4>
              <p className="copy">Participated during brainstorming sessions and user flow testing including engineers, as the employee voice, to influence design decisions.</p>
            </div>
          </div>
          <div className="col-span-7 bg-neutral-light rounded-md relative overflow-hidden aspect-[16/9] max-h-[520px]">
            {/* <Image
              src="/images/JustScore/js-img-2.webp"
              alt="JustScore product overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 60vw"
            /> */}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 min-h-[580px]">
          <div className="col-start-2 col-span-7 bg-neutral-light rounded-md relative overflow-hidden aspect-[16/9] max-h-[520px]">
            {/* <Image
              src="/images/JustScore/js-img-3.webp"
              alt="JustScore product overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 60vw"
            /> */}
          </div>
          <div className="col-span-3 grid grid-cols-1 gap-8">
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-[4/3] max-h-[195px]">
              {/* <Image
                src="/images/JustScore/js-img-3.2.webp"
                alt="JustScore interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-[4/3] max-h-[195px]">
              {/* <Image
                src="/images/JustScore/js-img-3.3.webp"
                alt="JustScore mobile preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="space-y-2 px-10 py-8">
              <h4 className="title-sm">Web & App Co-Design</h4>
              <p className="copy">Participated during brainstorming sessions and user flow testing including engineers, as the employee voice, to influence design decisions.</p>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}
