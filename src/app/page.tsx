"use client";
import PageWrapper from "../components/global/PageWrapper";
import TextAnimated from "@/components/animated/TextAnimated";
import Horizontoltext from "@/components/animated/Horizontoltext";
// import { MarqueeDemo } from "@/components/animated/Review";
import HowItWork from "@/components/Hero/HowItWork";
import Hero from "@/components/Hero/HeroSimple";
import Models from "@/components/Hero/Models";
import CTA from "@/components/Hero/CTA";
import Benefits from "@/components/Hero/Benefits";
import { BentoGrids } from "@/components/Hero/BentoGrid";

export default function Home() {
  return (
    <PageWrapper className=" bg-background" logo="light">
      <Hero />
      <HowItWork />
      <TextAnimated />
      <BentoGrids />
      <Benefits />
      <Models />
      <Horizontoltext />
      <CTA />
    </PageWrapper>
  );
}
