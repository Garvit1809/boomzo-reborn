"use client";
import PageWrapper from "@/components/global/PageWrapper";
import React from "react";
import { motion } from "framer-motion";
import SparklesText from "@/components/ui/sparkles-text";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Coming = () => {
  return (
    <PageWrapper className="bg-background">
      <div className="px-[5vw] pt-[10rem] bgpatternM lg:pt-[10rem] pb-[3rem] min-h-[20rem] lg:min-h-[20rem] flex flex-col gap-y-6 md:gap-y-10 text-black">
        {/* <LampContainer> */}
        <h1 className="text-center font-extrabold uppercase text-3xl lg:text-5xl"><SparklesText text="Coming Soon" /></h1>
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
        <div className=" font-bold flex justify-center">
          <RainbowButton>Get Early Access</RainbowButton>
        </div>
      </div>

    </PageWrapper>
  );
};

export default Coming;
