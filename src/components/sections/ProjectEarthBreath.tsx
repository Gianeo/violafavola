import Image from "next/image";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
export function ProjectEarthBreath() {
  return (
    <Section id="earthbreath">
      <Container className="space-y-12 md:space-y-0">
        <div className="grid grid-cols-4 gap-y-6 md:grid-cols-12 md:mb-24">
          <div className="col-span-4 flex items-center md:row-start-1 md:col-start-2 md:col-span-9">
            <div className="copy-primary">3/3 Latest Venture</div>
          </div>
          <div className="col-span-4 md:row-start-1 md:col-start-1 md:col-span-12">
            <Image
              src="/images/EarthBreath/eb-logo.webp"
              alt="EarthBreath logo"
              width={120}
              height={40}
              className="w-full h-auto md:ml-4 md:min-h-[220px]"
            />
          </div>
          <div className="col-span-4 md:row-start-2 md:col-start-2 md:col-span-4 md:mt-16">
            <h3 className="title">A Self-Initiated Ethical Brand Focused on Intentional Buying Experience.</h3>
          </div>
          <div className="col-span-4 md:row-start-2 md:col-start-8 md:col-span-3 md:pt-1 md:mt-16">
            <h3 className="copy">As a former receptionist, I saw how clunky internal tools eroded both team productivity and especially the member experience.<br /><br />
              This project became a playground to explore how sustainability and luxury can look like when treated as one cohesive system. Including how branding, UX and product storytelling can work together to shape trust and buying behaviour in a crowded wellness market. The outcome was an e-commerce experience that felt calm, premium and intentional, while still making ideas like sustainability, materials and ethical production easy to understand for everyday customers.</h3>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 md:grid-cols-12 md:gap-8 md:min-h-[580px]">
          {/* Left column */}
          <div className="col-span-4 bg-neutral-light rounded-md relative overflow-hidden aspect-square md:row-start-1 md:row-span-2 md:col-start-2 md:col-span-4">1</div>
          <div className="col-span-4 grid grid-cols-3 gap-1 md:row-start-3 md:col-start-2 md:col-span-4">
            <div className="space-y-1">
              <div className="bg-neutral-light rounded-tl-md relative overflow-hidden aspect-square">2</div>
              <div className="bg-neutral-light rounded-bl-md relative overflow-hidden aspect-square">3</div>
            </div>
            <div className="space-y-1">
              <div className="bg-neutral-light relative overflow-hidden aspect-square">4</div>
              <div className="bg-neutral-light relative overflow-hidden aspect-square">5</div>
            </div>
            <div className="space-y-1">
              <div className="bg-neutral-light rounded-tr-md relative overflow-hidden aspect-square">6</div>
              <div className="bg-neutral-light rounded-br-md relative overflow-hidden aspect-square">7</div>
            </div>
          </div>
          {/* Right column */}
          <div className="col-span-4 bg-neutral-light rounded-md relative overflow-hidden aspect-[3/4] md:row-start-1 md:col-start-6 md:col-span-1 md:aspect-auto">8</div>
          <div className="col-span-4 bg-neutral-light rounded-md relative overflow-hidden aspect-video md:row-start-1 md:col-start-7 md:col-span-5 md:aspect-auto">9</div>
          <div className="col-span-4 bg-neutral-light rounded-md aspect-video md:row-start-2 md:row-span-2 md:col-start-6 md:col-span-6 md:aspect-auto">10</div>
        </div>

      </Container>
    </Section>
  );
}
