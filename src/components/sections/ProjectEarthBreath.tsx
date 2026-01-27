import Image from "next/image";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
export function ProjectEarthBreath() {
  return (
    <Section id="earthbreath">
      <Container>
        <div className="grid grid-cols-12 mb-24">
          <div className="row-start-1 col-start-2 col-span-9 flex items-center">
            <div className="copy-primary">3/3 Latest Venture</div>
          </div>
          <div className="row-start-1 col-start-1 col-span-12">
            <Image
              src="/images/EarthBreath/eb-logo.webp"
              alt="EarthBreath logo"
              width={120}
              height={40}
              className="ml-4 w-full min-h-[220px] h-auto"
            />
          </div>
          <div className="row-start-2 col-start-2 col-span-4 mt-16">
            <h3 className="title">A Self-Initiated Ethical Brand Focused on Intentional Buying Experience.</h3>
          </div>
          <div className="row-start-2 col-start-8 col-span-3 pt-1 mt-16">
            <h3 className="copy">As a former receptionist, I saw how clunky internal tools eroded both team productivity and especially the member experience.<br /><br />
              This project became a playground to explore how sustainability and luxury can look like when treated as one cohesive system. Including how branding, UX and product storytelling can work together to shape trust and buying behaviour in a crowded wellness market. The outcome was an e-commerce experience that felt calm, premium and intentional, while still making ideas like sustainability, materials and ethical production easy to understand for everyday customers.</h3>
          </div>
        </div>

        <div className="grid grid-rows-3 grid-cols-12 gap-8 min-h-[580px]">
          {/* Left column */}
          <div className="row-start-1 row-span-2 col-start-2 col-span-4 bg-neutral-light rounded-md relative overflow-hidden aspect-square">1</div>
          <div className="row-start-3 col-start-2 col-span-4 grid grid-cols-3 gap-1">
            <div className="space-y-1">
              <div className="bg-neutral-light rounded-tl-md relative overflow-hidden h-1/2">2</div>
              <div className="bg-neutral-light rounded-bl-md relative overflow-hidden h-1/2">3</div>
            </div>
            <div className="space-y-1">
              <div className="bg-neutral-light relative overflow-hidden h-1/2">4</div>
              <div className="bg-neutral-light relative overflow-hidden h-1/2">5</div>
            </div>
            <div className="space-y-1">
              <div className="bg-neutral-light rounded-tr-md relative overflow-hidden h-1/2">6</div>
              <div className="bg-neutral-light rounded-br-md relative overflow-hidden h-1/2">7</div>
            </div>
          </div>
          {/* Right column */}
          <div className="row-start-1 col-start-6 col-span-1 bg-neutral-light rounded-md relative overflow-hidden aspect-auto">8</div>
          <div className="row-start-1 col-start-7 col-span-5 bg-neutral-light rounded-md relative overflow-hidden aspect-auto">9</div>
          <div className="row-start-2 row-span-2 col-start-6 col-span-6 bg-neutral-light rounded-md">10</div>
        </div>

      </Container>
    </Section>
  );
}
