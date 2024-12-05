"use client";
import React from 'react'
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
  }
   
  let notifications = [
    {
      name: "Expert Help ",
      description: "Get access to skilled sales and marketing experts.",
      time: "✅",
   
      icon: "👨🏻‍🔬",
      color: "#00C9A7",
    },
    {
      name: "More Time for You ",
      description: "Focus on your main business while we handle the rest. ",
      time: "✅",
      icon: "🕒",
      color: "#FFB800",
    },
    {
      name: "Flexible Growth ",
      description: "Our services grow with your business needs.",
      time: "✅",
      icon: "📈",
      color: "#FF3D71",
    },
    {
      name: "Results You Can See ",
      description: "We succeed when you succeed, ensuring great results.",
      time: "✅",
      icon: "🔍",
      color: "#1E86FF",
    },
    {
        name: "Cost-Effective ",
        description: "Save money with our commission-based model.",
        time: "✅",
        icon: "💰",
        color: "#FFB800", 
    },
    {
        name: "Stay Ahead ",
        description: "Use the latest marketing strategies to beat the competition. ",
        time: "✅",
        icon:  "🚀",
        color: "#00C9A7", 
    }
  ];
   
  notifications = Array.from({ length: 10 }, () => notifications).flat();

export default function Benefits() {
  const openWhatsApp = () => {
    const phoneNumber = "+918439911779"; // Replace with the phone number you want to send the message to
    const message = "Hello Boomzo, I need a free consultation."; // Custom message

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank"); // Open WhatsApp in a new tab or window
  };
  return (
    <div> <section className="flex flex-col-reverse mx-10  justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row-reverse">
    
    <div className="flex flex-col justify-between xl:w-2/5">
      <div className="sm:text-center lg:py-12 lg:text-left xl:py-24">
        <p className="mb-4 font-semibold text-transparent bg-gradient-to-r from-[#542daf] via-purple-500 to-[#ff9100] bg-clip-text md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

        <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Benefits of Partnering with Boomzo </h1>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-ce
        nter lg:justify-start">
          
          <a  onClick={openWhatsApp }  className="inline-block cursor-pointer rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100  hover:scale-105 bg-mygradient md:text-base">Start now</a>

        </div>
      </div>  
    </div>  
    <div className="h-48 overflow-hidden  rounded-lg  lg:h-auto xl:w-2/4">
    <AnimatedListDemo />
    </div>
  </section>
  </div>
  )
}
const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
      <figure
        className={cn(
          "relative mx-auto min-h-fit w-full max-w-[450px] cursor-pointer overflow-hidden rounded-2xl p-4",
          // animation styles
          "transition-all duration-200 ease-in-out hover:scale-[103%]",
          // light styles
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        )}
      >
        <div className="flex flex-row items-center gap-3">
          <div
            className="flex size-10 items-center justify-center rounded-full"
            style={{
              backgroundColor: color,
            }}
          >
            <span className="text-lg">{icon}</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
              <span className="text-sm font-semibold md:text-md">{name}</span>
             
              <span className="text-xs text-gray-500 md:text-xs">{time}</span>
            </figcaption>
            <p className="text-sm font-normal dark:text-white/60">
              {description}
            </p>
          </div>
        </div>
      </figure>
    );
  };
   
  export function AnimatedListDemo({
    className,
  }: {
    className?: string;
  }) {
    return (
      <div
        className={cn(
          "relative flex h-[500px] w-full flex-col p-4 overflow-hidden rounded-lg  bg-background ",
          className,
        )}
      >
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    );
  }
