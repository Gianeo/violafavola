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
          <div className="col-span-4 md:row-start-1 md:col-start-5 md:col-span-12">
            <Image
              src="/images/JustScore/_js-logo.svg"
              alt="JustScore logo"
              width={120}
              height={40}
              className="w-full h-auto -ml-12 md:ml-4 md:max-h-64"
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

        <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-16 md:min-h-145 mt-12">
          <div className="col-span-4 rounded-lg relative overflow-hidden aspect-auto md:row-start-1 md:col-start-5 md:col-span-7 h-96 md:h-auto md:max-h-164 shadow-2xl shadow-neutral-200">
            <Image
              src="/images/JustScore/js-1.webp"
              alt="JustScore product overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 60vw"
            />
          </div>

          <div className="col-span-4 grid grid-cols-1 gap-4 md:row-start-1 md:col-start-2 md:col-span-3 md:gap-8">
            <div className="hidden md:block bg-neutral-light rounded-lg relative overflow-hidden aspect-4/3 shadow-2xl shadow-neutral-200">
              <Image
                src="/images/JustScore/js-2.webp"
                alt="JustScore interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            <div className="bg-neutral-light rounded-lg relative overflow-hidden aspect-4/3 shadow-2xl shadow-neutral-200">
              <Image
                src="/images/JustScore/js-3.webp"
                alt="JustScore interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            <div className="hidden md:block space-y-2 px-0 py-6 md:pr-16 md:py-8">
              <h4 className="title-sm">Mobile App</h4>
              <p className="copy-sm">Between brainstorming, flow testing, and collaboration with engineers, I guided design decisions by representing the employee’s perspective. I also co-designed the product with my co-founder using a shared design system.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-16 md:min-h-145 md:mt-12">
          <div className="col-span-4 bg-neutral-light rounded-lg relative overflow-hidden aspect-auto md:col-start-2 h-96 md:h-auto md:max-h-164 md:col-span-7 shadow-2xl shadow-neutral-200">
            <Image
              src="/images/JustScore/js-4.webp"
              alt="JustScore product overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 60vw"
            />
          </div>

          <div className="col-span-4 grid grid-cols-1 gap-4 md:col-span-3 md:gap-8">
            <div className="bg-neutral-light rounded-lg relative overflow-hidden aspect-4/3 shadow-2xl shadow-neutral-200">
              <Image
                src="/images/JustScore/js-5.webp"
                alt="JustScore mobile preview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            <div className="hidden md:block bg-neutral-light rounded-lg relative overflow-hidden aspect-4/3 shadow-2xl shadow-neutral-200">
              <Image
                src="/images/JustScore/js-6.webp"
                alt="JustScore mobile preview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            <div className="hidden md:block space-y-2 py-6 md:pr-16 md:py-8">
              <h4 className="title-sm">Web App</h4>
              <p className="copy-sm">Although Justscore began as a web app, we differentiated its purpose from mobile by making it a manager’s full command centre. We adapted the design system and branding elements for consistency.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-16 md:min-h-145">
          <div className="col-span-4 grid grid-cols-1 gap-4 md:col-start-2 md:col-span-3 md:gap-8">
            <div className="bg-neutral-light rounded-lg relative overflow-hidden aspect-4/3 shadow-2xl shadow-neutral-200">
              <Image
                src="/images/JustScore/js-8.webp"
                alt="JustScore interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            <div className="bg-neutral-light rounded-lg relative overflow-hidden aspect-4/3 shadow-2xl shadow-neutral-200">
              <Image
                src="/images/JustScore/js-9.webp"
                alt="JustScore mobile preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            <div className="hidden md:block space-y-2 py-4 md:pr-12">
              <h4 className="title-sm">Branding & Illustration Collaboration</h4>
              <p className="copy-sm">After translating JustScore’s brand substance into identity, we collaborated closely with an Italian freelance illustrator to develop characters that softened the intensity of a high-performance product, through friendliness and relatability.</p>
            </div>
          </div>
          <div className="col-span-4 bg-neutral-light rounded-lg relative overflow-hidden aspect-auto md:col-span-7 h-56 md:h-auto md:max-h-128 shadow-2xl shadow-neutral-200">
            <Image
              src="/images/JustScore/js-7.webp"
              alt="JustScore product overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 60vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-16 md:min-h-145">
          <div className="col-span-4 bg-neutral-light rounded-lg relative overflow-hidden aspect-auto md:col-start-2 md:col-span-7 h-104 md:h-auto md:max-h-164 shadow-2xl shadow-neutral-200">
            <Image
              src="/images/JustScore/js-10.webp"
              alt="JustScore product overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 60vw"
            />
          </div>
          <div className="col-span-4 grid grid-cols-1 gap-4 md:col-span-3 md:gap-8">
            <div className="bg-neutral-light rounded-lg relative overflow-hidden aspect-4/3 shadow-2xl shadow-neutral-200">
              <Image
                src="/images/JustScore/js-11.webp"
                alt="JustScore interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            <div className="bg-neutral-light rounded-lg relative overflow-hidden aspect-4/3 shadow-2xl shadow-neutral-200">
              <Image
                src="/images/JustScore/js-12.webp"
                alt="JustScore mobile preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
            <div className="hidden md:block space-y-2 py-6 md:pr-12 md:py-8">
              <h4 className="title-sm">Marketing</h4>
              <p className="copy-sm">All product learnings were translated into a clear marketing narrative, helping us build our PLG-focused website and first acquisition funnel. Apart from co-designing the website, I led UX writing, simplified messaging across ICP-specific pages, and created brand-consistent AI-generated visuals.</p>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}
