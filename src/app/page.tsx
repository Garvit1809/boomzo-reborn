"use client";
import PageWrapper from "../components/global/PageWrapper";
import HeroBg from "../../public/hero_bg.png";
import HeroImg from "../../public/hero_img.png";
import Image from "next/image";
import Img1 from "../../public/1.png";
import Img3 from "../../public/3.png";
import Img4 from "../../public/4.png";
import Img5 from "../../public/5.png";
import AnimatedButton from "@/components/aceternity/AnimatedButton";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const SERVICE_CARDS = [
  {
    name: "Lets Plan your Trip",
    img: Img1,
    route: "/tour-travel",
    btnText: "Get Started",
  },
  {
    name: "Let's Celebrate in Style",
    img: Img5,
    route: "/celebrations",
    btnText: "Get Started",
  },
  {
    name: "Let's Find Your Flat",
    img: Img4,
    route: "/real-estate",
    btnText: "Get Started",
  },
  {
    name: "Let's Connect with Influencers",
    img: Img3,
    route: "/influencers",
    btnText: "Coming Soon",
  },
];

const IMPACT_NUMBERS = [
  {
    stat: "2000+",
    title: "Happy Customers",
  },
  {
    stat: "600+",
    title: "Deals Closed",
  },
  {
    stat: "5+",
    title: "Services Offered",
  },
  {
    stat: "94%",
    title: "Satisfaction Rate",
  },
];

export default function Home() {
  const route = useRouter();
  return (
    <PageWrapper className="block bg-[black]" logo="light">
      {/* hero */}
      <div
        className="mt-[7rem] mx-[2vw] md:mx-[5vw] rounded-xl z-10 relative h-[18rem] md:h-[20rem]"
        style={{
          backgroundImage: `url(${HeroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          className="absolute block bottom-0 md:top-0 right-0 left-0 z-20 h-[8rem] border-0 border-red-600 md:h-[20rem] "
          alt="boomzo-hero"
          src={HeroImg}
        />
        <div className="w-full h-full border-0 border-red-600 flex  flex-col justify-start pt-8 md:pt-0 md:justify-center gap-y-4 px-4 md:pl-[5%]">
          <h1 className="text-white text-4xl md:text-6xl tracking-wide font-semibold text-center md:text-left">
            Find the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #542daf, #ff9100)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "800"
              }}
            >
              BEST DEALS
            </span>
          </h1>
          <span className="text-white text-xl md:text-4xl font-light text-center md:text-left">
            Tailored to Your Needs and Budget
          </span>
        </div>
      </div>

      {/* cards */}
      <div className="mx-[2vw] md:mx-[5vw] pt-[4rem] grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-8 md:gap-10">
        {SERVICE_CARDS.map((card, idx) => {
          return (
            <div
              key={idx}
              className="w-full rounded-xl h-[10rem] md:h-[14rem] flex flex-col justify-between items-start pt-4 pb-2 px-3 md:px-8 md:pt-6 md:pb-4"
              style={{
                backgroundImage: `url(${card.img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-white font-semibold text-lg md:text-2xl">
                {card.name}
              </h2>
              <AnimatedButton
                text={
                  <div className="flex items-center gap-[4px]">
                    <span>{card.btnText}</span>
                    <ArrowRight size={16} />
                  </div>
                }
                buttonType="button"
                className="bg-black text-white/80 text-[0.6rem] md:text-xs border-none"
                onClick={() => route.push(card.route)}
              />
            </div>
          );
        })}
      </div>

      {/* how boomzo works */}
      <div className="flex flex-col items-center gap-y-8 md:gap-y-14 mt mt-[6rem] md:mt-[8rem] mb-[8rem] mx-[5vw]">
        <span className="text-2xl md:text-4xl text-white text-center">
          How Boomzo works
        </span>
        <div className="relative w-[90%] h-[20rem] md:w-[45rem] md:h-[26rem] mx-auto">
          <div className="absolute w-full h-full border-2 border-gray-300 rounded-full"></div>

          {/* Tell Us Your Needs */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 md:-translate-y-1/2 py-3 px-3 md:px-8 md:py-4 rounded-md shadow-md font-semibold text-center text-xs md:text-base"
            style={{ background: "linear-gradient(135deg, #542daf, #ff9100)" }}
          >
            Tell Us Your Needs
          </div>

          {/* We Find the Best Deals For You */}
          <div
            className="absolute right-0 top-1/2 transform rotate-[90deg] md:rotate-0 translate-x-[40%] md:translate-x-1/2 -translate-y-1/2 py-3 px-3 md:px-8 md:py-4 rounded-md shadow-md font-semibold text-center text-xs md:text-base"
            style={{ background: "linear-gradient(135deg, #542daf, #ff9100)" }}
          >
            We Find Best Deals
          </div>

          {/* Choose Your Favorite */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 md:translate-y-1/2 py-3 px-3 md:px-8 md:py-4 rounded-md shadow-md font-semibold text-center text-xs md:text-base"
            style={{ background: "linear-gradient(135deg, #542daf, #ff9100)" }}
          >
            Choose Your Favorite
          </div>

          {/* Pay and Get Rewards */}
          <div
            className="absolute left-0 top-1/2 transform rotate-[-90deg] md:rotate-0 -translate-x-[40%] md:-translate-x-1/2 -translate-y-1/2 py-3 px-3 md:px-8 md:py-4 rounded-md shadow-md font-semibold text-center text-xs md:text-base"
            style={{
              background: "linear-gradient(135deg, #542daf, #ff9100)",
            }}
          >
            Pay and Get Rewards
          </div>
        </div>
      </div>

      {/* our numbers */}
      <div className="flex flex-col gap-y-8 md:gap-y-14 mt-[6rem] mb-[2rem] md:mt-[8rem] md:mb-[8rem] mx-[2vw] md:mx-[5vw] items-center">
        <span className="text-2xl md:text-4xl text-white text-center">
          Our Impact in Numbers
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 w-[100%] gap-y-6">
          {IMPACT_NUMBERS.map((card, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col gap-y-[2px] md:gap-y-1 items-center"
              >
                <h2 className="text-2xl md:text-4xl text-white">{card.stat}</h2>
                <h6 className="text-xs md:text-base text-white/80">
                  {card.title}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
