import { EnrollCTA } from "@/components/sections/EnrollCTA";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { ToolsShowcase } from "@/components/sections/ToolsShowcase";
import { WhyGenValue } from "@/components/sections/WhyGenValue";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsShowcase />
      <WhyGenValue />
      <Testimonials />
      <EnrollCTA />
    </>
  );
}
