import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import ProgramOverview from "@/components/landing/ProgramOverview";
import DemoDay from "@/components/landing/DemoDay";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ProgramOverview />
      <DemoDay />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
