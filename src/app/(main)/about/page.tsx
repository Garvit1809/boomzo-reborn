"use client";
import PageWrapper from "@/components/global/PageWrapper";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <PageWrapper className="bg-background">
      <div className="px-[5vw] pt-[10rem] bgpatternM lg:pt-[10rem] pb-[3rem] min-h-[20rem] lg:min-h-[20rem] flex flex-col gap-y-6 md:gap-y-10 text-black">
        {/* <LampContainer> */}
        <h1 className="text-center font-semibold text-3xl lg:text-5xl">About Boomzo</h1>
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
            The Future of Business Transformation Begins with Boomzo—Unlock New Possibilities and Drive Your Success!
          </motion.h6>
        </div>
      </div>
      {/* About Section */}
        <section className="bg-gray-50 py-12 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Text Content */}
          <div>
            <h2 className="text-orange-500 text-lg font-semibold mb-2">How It Started</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
              Our Dream is <br />
              Global Learning <span className="text-transparent bg-mygradient bg-clip-text">Transformation</span>
            </h1>
            <p className=" text-lg mb-6">
            We began our journey as a social media management firm, driven by a passion to help businesses grow. Our initial focus was on enhancing online presence and engagement. However, we soon realized that simply managing social media wasn&apos;t enough to fulfill our mission of truly growing businesses.
            </p>
            <p className=" text-lg ">
            Recognizing this gap, we expanded our services to include lead generation and performance marketing. While this helped businesses attract more potential customers, we noticed another challenge: many of our clients struggled to convert these leads into actual sales. They were investing resources in generating leads but lacked the sales expertise to close deals effectively. 
            </p>
          </div>

          {/* Right Section: Image and Stats */}
          <div className="space-y-8">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5882683/pexels-photo-5882683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your actual image path
                alt="Learning Transformation"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
              {/* Stat Card 1 */}
              <div className="bg-white rounded-lg shadow p-4 py-4 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-gray-900">30%+</h3>
                <p className="text-sm text-gray-600  text-center leading-tight">Conversion rate</p>
              </div>
              {/* Stat Card 2 */}
              <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-gray-900">24</h3>
                <p className="text-sm text-gray-600 text-center  leading-tight">Clients Served</p>
              </div>
              {/* Stat Card 3 */}
              <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                <p className="text-sm text-gray-600 text-center leading-tight">Positive Reviews</p>
              </div>
              {/* Stat Card 4 */}
              {/* <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-gray-900">2</h3>
                <p className="text-sm text-gray-600 text-center leading-tight">Trusted </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </PageWrapper>
  );
};

export default About;
