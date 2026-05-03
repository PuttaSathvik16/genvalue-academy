import { EnrollCTA } from "@/components/sections/EnrollCTA";
import { Hero } from "@/components/sections/Hero";
import { ProgramSpotlight } from "@/components/sections/ProgramSpotlight";
import { Testimonials } from "@/components/sections/Testimonials";
import { ToolsShowcase } from "@/components/sections/ToolsShowcase";
import { WhyGenValue } from "@/components/sections/WhyGenValue";

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramSpotlight />
      <ToolsShowcase />
      <WhyGenValue />
      <Testimonials />
      <EnrollCTA />
    </>
  );
}
