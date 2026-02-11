import Image from "next/image";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
export function ProjectEarthBreath() {
  return (
    <Section id="earthbreath">
      <Container className="space-y-8 md:space-y-0">
        <div className="grid grid-cols-4 gap-y-6 md:grid-cols-12 md:mb-24">
          <div className="col-span-4 flex items-center md:row-start-1 md:col-start-2 md:col-span-9">
            <div className="copy-primary">3/3 Latest Venture</div>
          </div>
          <div className="col-span-4 md:row-start-1 md:col-start-6 md:col-span-12">
            <Image
              src="/images/EarthBreath/eb-logo.svg"
              alt="EarthBreath logo"
              width={120}
              height={40}
              className="w-full h-auto -ml-8 md:ml-4 md:max-h-48"
            />
          </div>
          <div className="col-span-4 md:row-start-2 md:col-start-2 md:col-span-4 md:mt-16">
            <h3 className="title">A Self-Initiated Ethical Brand Focused on Intentional Buying Experience.</h3>
          </div>
          <div className="col-span-4 md:row-start-2 md:col-start-8 md:col-span-3 md:pt-1 md:mt-16">
            <h3 className="copy">This project became a playground to explore how sustainability and luxury can look like when treated as one cohesive system. Including how branding, UX and product storytelling can work together to shape trust and buying behaviour in a crowded wellness market. The outcome was an e-commerce experience that felt calm, premium and intentional, while still making ideas like sustainability, materials and ethical production easy to understand for everyday customers.</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8 md:min-h-145">
          {/* Left column */}
          <div className="col-span-1 rounded-lg relative overflow-hidden aspect-4/3 md:row-start-1 md:row-span-2 md:col-start-2 md:col-span-4 md:aspect-auto shadow-2xl shadow-neutral-200">
            <Image
              src="/images/EarthBreath/eb-1.webp"
              alt="SV interface detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 30vw"
            />
          </div>
          <div className="col-span-1 grid grid-cols-3 gap-2 md:row-start-3 md:col-start-2 md:col-span-4 md:gap-1">
            <div className="space-y-1">
              <div className="rounded-tl-md relative overflow-hidden aspect-square shadow-2xl shadow-neutral-200">
                <Image
                  src="/images/EarthBreath/eb-5.webp"
                  alt="SV interface detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
              </div>
              <div className="rounded-bl-md relative overflow-hidden aspect-square shadow-2xl shadow-neutral-200">
                <Image
                  src="/images/EarthBreath/eb-6.webp"
                  alt="SV interface detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
              </div>
            </div>
            <div className="space-y-1">
              <div className="relative overflow-hidden aspect-square shadow-2xl shadow-neutral-200">
                <Image
                  src="/images/EarthBreath/eb-7.webp"
                  alt="SV interface detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
              </div>
              <div className="relative overflow-hidden aspect-square shadow-2xl shadow-neutral-200">
                <Image
                  src="/images/EarthBreath/eb-8.webp"
                  alt="SV interface detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
              </div>
            </div>
            <div className="row-span-2 pb-1">
              <div className="rounded-tr-md relative overflow-hidden h-full rounded-br-lg shadow-2xl shadow-neutral-200">
                <Image
                  src="/images/EarthBreath/eb-9.webp"
                  alt="SV interface detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="hidden md:block col-span-1 rounded-lg relative overflow-hidden aspect-auto md:h-full md:row-start-1 md:col-start-6 md:col-span-1 md:aspect-auto shadow-2xl shadow-neutral-200">
            <Image
              src="/images/EarthBreath/eb-2.webp"
              alt="SV interface detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 30vw"
            />
          </div>
          <div className="col-span-1 rounded-lg relative overflow-hidden aspect-video md:row-start-1 md:col-start-7 md:col-span-5 md:aspect-video shadow-2xl shadow-neutral-200">
            <Image
              src="/images/EarthBreath/eb-3.webp"
              alt="SV interface detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 30vw"
            />
          </div>
          <div className="col-span-1 rounded-lg relative overflow-hidden aspect-auto md:row-start-2 md:row-span-2 md:col-start-6 md:col-span-6 h-80  md:h-auto md:aspect-4/3 shadow-2xl shadow-neutral-200">
            <Image
              src="/images/EarthBreath/eb-4.webp"
              alt="SV interface detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 30vw"
            />
          </div>
          <div className="col-span-1 rounded-lg relative overflow-hidden md:row-start-4 md:col-start-2 md:col-span-10 aspect-auto h-16 md:h-auto md:min-h-36">
            <Image
              src="/images/EarthBreath/eb-11.webp"
              alt="SV interface detail"
              fill
              className="object-contain md:object-cover"
              sizes="(max-width: 768px) 90vw, 30vw"
            />
          </div>
        </div>

      </Container>
    </Section>
  );
}
