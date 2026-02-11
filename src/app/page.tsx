import { DividerWave } from "@/components/primitives/DividerWave";
import { Expertise } from "@/components/sections/Expertise";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProjectEarthBreath } from "@/components/sections/ProjectEarthBreath";
import { ProjectJustScore } from "@/components/sections/ProjectJustScore";
import { ProjectSV } from "@/components/sections/ProjectSV";
import { homeContent } from "@/content/home";

export default function HomePage() {
  const { hero, expertise, footer } = homeContent;

  return (
    <>
      <Hero {...hero} />
      <Expertise {...expertise} />
      <DividerWave className="relative z-20" />
      <main className="bg-bg pb-12 md:pb-24">
        <ProjectJustScore />
        <ProjectSV />
        <ProjectEarthBreath />
      </main>
      <DividerWave flip className="relative z-30" />
      <Footer {...footer} />
    </>
  );
}
