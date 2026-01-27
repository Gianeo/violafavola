import Image from "next/image";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
export function ProjectJustScore() {
  return (
    <Section id="justscore">
      <Container className="space-y-4 md:space-y-8">
        <div className="grid grid-cols-4 gap-y-6 md:grid-cols-12 md:mb-24">
          <div className="col-span-4 flex items-center md:row-start-1 md:col-start-2 md:col-span-9">
            <div className="copy-primary">1/3 Latest Venture</div>
          </div>
          <div className="col-span-4 md:row-start-1 md:col-start-1 md:col-span-12">
            <Image
              src="/images/JustScore/js-logo.svg"
              alt="JustScore logo"
              width={120}
              height={40}
              className="w-full h-auto md:ml-4 md:min-h-55"
            />
          </div>
          <div className="col-span-4 md:row-start-2 md:col-start-2 md:col-span-4 md:mt-8">
            <h3 className="title">Introducing Performance Clarity for Modern teams - Making Feedback Continuous, Fair and Actionable.</h3>
          </div>
          <div className="col-span-4 md:row-start-2 md:col-start-8 md:col-span-3 md:pt-1 md:mt-8">
            <h3 className="copy">A performance management platform for managers that&apos;s simple, actionable, and genuinely motivating. Wore multiple hats as creative co-founder, and supported end-to-end in design and business; from UX/UI, marketing, go-to-market and more. While being mentored on my craft, I dived into applying AI tools and agents, for research, engagement, automations and multi-task management.</h3>
            <div className="pt-8 md:pt-16">
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

        <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-8 md:min-h-145 mt-12">
          <div className="col-span-4 bg-neutral-light rounded-md relative overflow-hidden aspect-video md:col-start-2 md:col-span-7 md:max-h-130">
            {/* <Image
              src="/images/JustScore/js-img-1.webp"
              alt="JustScore product overview"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 60vw"
            /> */}
          </div>
          <div className="col-span-4 grid grid-cols-1 gap-4 md:col-span-3 md:gap-8">
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-4/3 md:max-h-48.75">
              {/* <Image
                src="/images/JustScore/js-img-1.2.webp"
                alt="JustScore interface detail"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-4/3 md:max-h-48.75">
              {/* <Image
                src="/images/JustScore/js-img-1.3.webp"
                alt="JustScore mobile preview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="space-y-2 px-6 py-6 md:px-12 md:py-8">
              <h4 className="title-sm">Web & App Co-Design</h4>
              <p className="copy">Participated during brainstorming sessions and user flow testing including engineers, as the employee voice, to influence design decisions.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-8 md:min-h-145">
          <div className="col-span-4 grid grid-cols-1 gap-4 md:col-start-2 md:col-span-3 md:gap-8">
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-4/3 md:max-h-48.75">
              {/* <Image
                src="/images/JustScore/js-img-2.2.webp"
                alt="JustScore interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-4/3 md:max-h-48.75">
              {/* <Image
                src="/images/JustScore/js-img-2.3.webp"
                alt="JustScore mobile preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="space-y-2 px-6 py-8 md:px-10 md:py-16">
              <h4 className="title-sm">Web & App Co-Design</h4>
              <p className="copy">Participated during brainstorming sessions and user flow testing including engineers, as the employee voice, to influence design decisions.</p>
            </div>
          </div>
          <div className="col-span-4 bg-neutral-light rounded-md relative overflow-hidden aspect-video md:col-span-7 md:max-h-130">
            {/* <Image
              src="/images/JustScore/js-img-2.webp"
              alt="JustScore product overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 60vw"
            /> */}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-8 md:min-h-145">
          <div className="col-span-4 bg-neutral-light rounded-md relative overflow-hidden aspect-video md:col-start-2 md:col-span-7 md:max-h-130">
            {/* <Image
              src="/images/JustScore/js-img-3.webp"
              alt="JustScore product overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 60vw"
            /> */}
          </div>
          <div className="col-span-4 grid grid-cols-1 gap-4 md:col-span-3 md:gap-8">
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-4/3 md:max-h-48.75">
              {/* <Image
                src="/images/JustScore/js-img-3.2.webp"
                alt="JustScore interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-4/3 md:max-h-48.75">
              {/* <Image
                src="/images/JustScore/js-img-3.3.webp"
                alt="JustScore mobile preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
            </div>
            <div className="space-y-2 px-6 py-6 md:px-10 md:py-8">
              <h4 className="title-sm">Web & App Co-Design</h4>
              <p className="copy">Participated during brainstorming sessions and user flow testing including engineers, as the employee voice, to influence design decisions.</p>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}
