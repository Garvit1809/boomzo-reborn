"use client";
import PageWrapper from "@/components/global/PageWrapper";
import React from "react";
import { motion } from "framer-motion";
// import ConsultationStrip from "@/components/global/ConsultationStrip";
import { tabs } from "./_components/about-us-tabs";
import { Tabs } from "@/components/aceternity/tabs";

const About = () => {
  return (
    <PageWrapper className="bg-black">
      {/* <ConsultationStrip
        text="Get Free Consultation"
        showArrow={true}
        className="lg:hidden gap-1 bg-mygreen text-white text-sm hover:cursor-pointer animate-scale-up"
      /> */}
      <div className="px-[5vw] pt-[10rem] lg:pt-[13.5rem] pb-[5rem] min-h-[30rem] lg:min-h-[35rem] flex flex-col gap-y-6 md:gap-y-10 text-white">
        {/* <LampContainer> */}
        <h1 className="text-center text-3xl lg:text-5xl">About Boomzo</h1>
        {/* </LampContainer> */}
        <div className="relative h-[120px]">
          <motion.h6
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-sm lg:text-xl w-full mx-auto lg:w-[80%] text-center absolute top-0 left-0 right-0 leading-relaxed"
          >
            Boomzo isn&apos;t just a platform—it&apos;s a game-changer. We dive
            deep into your needs, industry, and budget to handpick the best
            match for you. No more generic lists; just precise, tailored
            solutions. Our Project Managers ensure everything runs like
            clockwork, turning every project into a success story. Welcome to
            Boomzo, where we redefine ordinary with extraordinary results.
          </motion.h6>
        </div>
      </div>
      <div className="pt-[6rem] pb-[10rem] bg-background px-[2vw] md:px-[5vw]">
        <div className="h-[40rem] md:h-[40rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
