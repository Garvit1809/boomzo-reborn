"use client";
import PageWrapper from "@/components/global/PageWrapper";
import React from "react";
import { motion } from "framer-motion";
import { tabs } from "./_components/about-us-tabs";
import { Tabs } from "@/components/aceternity/tabs";

const About = () => {
  return (
    <PageWrapper className="bg-black">
      <div className="px-[5vw] pt-[10rem] lg:pt-[10rem] pb-[3rem] min-h-[20rem] lg:min-h-[20rem] flex flex-col gap-y-6 md:gap-y-10 text-white">
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
            We help businesses grow by generating leads specific to your needs.
            We make the first call to verify each lead, ensuring it&apos;ss a
            good fit before passing it on to you.
          </motion.h6>
        </div>
      </div>
      <div className="pt-[6rem] pb-[10rem] bg-background px-[2vw] md:px-[5vw]">
        <div className="h-[32rem] md:h-[35rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
