import Image from "next/image";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
export function ProjectSV() {
  return (
    <Section id="sustainable-ventures">
      <Container>
        <div className="grid grid-cols-12 mb-24">
          <div className="row-start-1 col-start-2 col-span-9 flex items-center">
            <div className="copy-primary">3/3 Latest Venture</div>
          </div>
          <div className="row-start-1 col-start-7 col-span-12">
            <Image
              src="/images/SV/sv-logo.webp"
              alt="SV logo"
              width={373}
              height={180}
              className="ml-4 w-[373px] h-[180px] grayscale"
            />
          </div>
          <div className="row-start-2 col-start-2 col-span-4 mt-16">
            <h3 className="title">Rebuilding the Workspace Experience from Behind the Desk.</h3>
          </div>
          <div className="row-start-2 col-start-8 col-span-3 pt-1 mt-16">
            <h3 className="copy">As a former receptionist, I saw how clunky internal tools eroded both team productivity and especially the member experience.<br /><br />
              I designed a unified workspace app that replaced several platforms within a single system. Conducting ethnographic research and receiving direct feedback from members in the space, I transformed everyday operational pain points into a scalable, branded product that improved efficiency, member satisfaction, and revenue potential.</h3>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 min-h-[580px]">
          <div className="col-start-2 col-span-5 bg-neutral-light rounded-md relative overflow-hidden aspect-auto max-h-[874px]">
            {/* <Image
              src="/images/JustScore/js-img-1.webp"
              alt="JustScore product overview"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 60vw"
            /> */}
          </div>
          <div className="col-span-5 space-y-8">
            <div className="flex gap-8">
              <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-square min-h-[360px]">
                {/* <Image
                src="/images/JustScore/js-img-1.2.webp"
                alt="JustScore interface detail"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
              </div>
              <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-square min-h-[360px]">
                {/* <Image
                src="/images/JustScore/js-img-1.3.webp"
                alt="JustScore mobile preview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
              </div>
            </div>
            <div className="flex gap-8">
              <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-square min-h-[360px]">
                {/* <Image
                src="/images/JustScore/js-img-1.2.webp"
                alt="JustScore interface detail"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
              </div>
              <div className="bg-neutral-light rounded-md relative overflow-hidden aspect-square min-h-[360px]">
                {/* <Image
                src="/images/JustScore/js-img-1.3.webp"
                alt="JustScore mobile preview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 30vw"
              /> */}
              </div>
            </div>
            <div className="space-y-2 px-12 py-8 max-w-md">
              <h4 className="title-sm">Web & App Co-Design</h4>
              <p className="copy">Participated during brainstorming sessions and user flow testing including engineers, as the employee voice, to influence design decisions.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
