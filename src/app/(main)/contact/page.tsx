"use client";
import PageWrapper from "@/components/global/PageWrapper";
import SocialIcons from "@/components/global/SocialIcons";
import React from "react";
import ContactForm from "./components/contactForm";

const Contact = () => {
  return (
    <PageWrapper >
      <div className="w-full flex flex-col lg:grid lg:grid-cols-2">
      <div className="flex flex-col gap-y-10 px-[5vw] py-[5rem] pt-[4rem] pb-[4rem] lg:pt-[10rem] lg:pb-[6rem]">
          <ContactForm />
        </div>
        <div className="relative bgpatternline bg-no-repeat bg-center  text-black flex flex-col gap-y-6 lg:gap-y-10 px-[5vw] pt-[8rem] pb-[4rem] lg:pt-[10rem] lg:pb-[6rem]">
          {/* <Spotlight className="md:left-6 md:-top-16" fill="white" /> */}
          <h1 className="text-3xl lg:text-5xl">Lets Connect</h1>
          <p className="text-sm lg:text-xl">
            Feeling stuck or need assistance? Or just curious how Boomzo can
            help you achieve beyond ordinary? We&apos;re here for you!
          </p>
          <div className="text-base">
            <h6>Call us: +91 843 991 1779</h6>
            <h6>Email us: grow@boomzo.in</h6>
          </div>
          <p className="text-sm lg:text-xl">
            Let&apos;s create something extraordinary together!
          </p>
          <SocialIcons showMail={false} />
        </div>
       
      </div>
    </PageWrapper>
  );
};

export default Contact;
