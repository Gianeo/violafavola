import Image from "next/image";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
export function ProjectSV() {
  return (
    <Section id="sustainable-ventures">
      <Container className="space-y-12 md:space-y-0">
        <div className="grid grid-cols-4 gap-y-6 md:grid-cols-12 md:mb-24">
          <div className="col-span-4 flex items-center md:row-start-1 md:col-start-2 md:col-span-9">
            <div className="copy-primary">3/3 Latest Venture</div>
          </div>
          <div className="col-span-4 md:row-start-1 md:col-start-7 md:col-span-12">
            <Image
              src="/images/SV/sv-logo.webp"
              alt="SV logo"
              width={373}
              height={180}
              className="w-60 h-auto grayscale md:ml-4 md:w-93.25 md:h-45"
            />
          </div>
          <div className="col-span-4 md:row-start-2 md:col-start-2 md:col-span-4 md:mt-16">
            <h3 className="title">Rebuilding the Workspace Experience from Behind the Desk.</h3>
          </div>
          <div className="col-span-4 md:row-start-2 md:col-start-8 md:col-span-3 md:pt-1 md:mt-16">
            <h3 className="copy">As a former receptionist, I saw how clunky internal tools eroded both team productivity and especially the member experience.<br /><br />
              I designed a unified workspace app that replaced several platforms within a single system. Conducting ethnographic research and receiving direct feedback from members in the space, I transformed everyday operational pain points into a scalable, branded product that improved efficiency, member satisfaction, and revenue potential.</h3>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 md:grid-cols-12 md:gap-8 md:min-h-145">
          <div className="col-span-4 rounded-md relative overflow-hidden aspect-3/4 md:col-start-2 md:col-span-5 md:aspect-auto md:max-h-218.5 shadow-2xl shadow-neutral-200">
            <Image
              src="/images/SV/sv-1.webp"
              alt="SV product overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 60vw"
            />
          </div>
          <div className="col-span-4 space-y-6 md:col-span-5 md:space-y-8">
            <div className="grid grid-cols-2 gap-4 md:flex md:gap-8">
              <div className="rounded-md relative overflow-hidden aspect-square w-full md:flex-1 md:min-h-60 shadow-2xl shadow-neutral-200">
                <Image
                src="/images/SV/sv-2.webp"
                alt="SV interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
              </div>
              <div className="rounded-md relative overflow-hidden aspect-square w-full md:flex-1 md:min-h-60 shadow-2xl shadow-neutral-200">
                <Image
                src="/images/SV/sv-3.webp"
                alt="SV mobile preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:flex md:gap-8">
              <div className="rounded-md relative overflow-hidden aspect-square w-full md:flex-1 md:min-h-60 shadow-2xl shadow-neutral-200">
                <Image
                src="/images/SV/sv-4.webp"
                alt="SV interface detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
              </div>
              <div className="rounded-md relative overflow-hidden aspect-square w-full md:flex-1 md:min-h-60 shadow-2xl shadow-neutral-200">
                <Image
                src="/images/SV/sv-5.webp"
                alt="SV mobile preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
              </div>
            </div>
            <div className="space-y-2 px-6 py-6 md:max-w-md md:px-12 md:py-8">
              <h4 className="title-sm">Web & App Co-Design</h4>
              <p className="copy">Participated during brainstorming sessions and user flow testing including engineers, as the employee voice, to influence design decisions.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
