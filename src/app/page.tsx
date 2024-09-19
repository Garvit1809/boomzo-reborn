import PageWrapper from "../components/global/PageWrapper";
import HeroBg from "../../public/hero_bg.png";
import HeroImg from "../../public/hero_img.png";
import Image from "next/image";
import Img1 from "../../public/1.png";
import Img2 from "../../public/2.png";
import Img3 from "../../public/3.png";
import Img4 from "../../public/4.png";
import Img5 from "../../public/5.png";
import AnimatedButton from "@/components/aceternity/AnimatedButton";
import { ArrowRight } from "lucide-react";

const SERVICE_CARDS = [
  {
    name: "Lets Plan your Trip",
    img: Img1,
    route: "/",
    btnText: "Get Started",
  },
  {
    name: "Let's Celebrate in Style",
    img: Img5,
    route: "/",
    btnText: "Get Started",
  },
  {
    name: "Let's Find Your Flat",
    img: Img4,
    route: "/",
    btnText: "Get Started",
  },
  {
    name: "Let's Connect with Influencers",
    img: Img3,
    route: "/",
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
  return (
    // <PageWrapper className="block bg-[#FFFFFF]" logo="dark">
    <PageWrapper className="block bg-[black]" logo="light">
      {/* hero */}
      <div
        className="mt-[7rem] mx-[5vw] rounded-xl z-10 relative"
        style={{
          backgroundImage: `url(${HeroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "20rem", // Adjust the height as needed
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          className="absolute top-0 right-0 left-0 z-20 border-0 border-red-600 block h-[20rem]"
          alt="boomzo-hero"
          src={HeroImg}
        />
        <div className="w-full h-full border-0 border-red-600 flex justify-center flex-col gap-y-4 pl-[5%]">
          <h1 className="text-white text-6xl tracking-wide font-semibold">
            Find the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #542daf, #ff9100)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BEST DEALS
            </span>
          </h1>
          <span className="text-white text-4xl font-light">
            Tailored to Your Needs and Budget
          </span>
        </div>
      </div>

      {/* cards */}
      <div className="mx-[5vw] pt-[4rem] grid grid-cols-4 gap-10">
        {SERVICE_CARDS.map((card, idx) => {
          return (
            <div
              key={idx}
              className="w-full rounded-xl h-[14rem] flex flex-col justify-between items-start pt-6 pb-4 px-8"
              style={{
                backgroundImage: `url(${card.img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-white font-semibold text-2xl">{card.name}</h2>
              <AnimatedButton
                text={
                  <div className="flex items-center gap-[4px]">
                    <span>{card.btnText}</span>
                    <ArrowRight size={16} />
                  </div>
                }
                buttonType="button"
                className="bg-black text-white/80 text-xs border-none"
              />
            </div>
          );
        })}
      </div>

      {/* how boomzo works */}
      <div className="flex flex-col gap-y-14 mt-[8rem] mb-[8rem] mx-[5vw] items-center">
        <span className="text-4xl text-white">How Boomzo works</span>
        <div className="relative w-[45rem] h-[26rem]">
          <div className="absolute w-full h-full border-2 border-gray-300 rounded-full"></div>
          {/* We generate Leads */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 px-8 rounded-md shadow-md font-semibold"
            style={{ background: "linear-gradient(135deg, #542daf, #ff9100)" }}
          >
            Tell Us Your Needs
          </div>

          {/* We verify Quality Leads */}
          <div
            className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 p-4 px-8 rounded-md shadow-md font-semibold"
            style={{ background: "linear-gradient(135deg, #542daf, #ff9100)" }}
          >
            We Find the Best Deals For You
          </div>

          {/* We deliver Quality Leads */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-4 px-8 rounded-md shadow-md font-semibold"
            style={{ background: "linear-gradient(135deg, #542daf, #ff9100)" }}
          >
            Choose Your Favorite
          </div>

          {/* Feedback and Optimization */}
          <div
            className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 px-8 rounded-md shadow-md font-semibold"
            style={{ background: "linear-gradient(135deg, #542daf, #ff9100)" }}
          >
            Pay and Get Rewards
          </div>
        </div>
      </div>

      {/* our numbers */}
      <div className="flex flex-col gap-y-14 mt-[8rem] mb-[8rem] mx-[5vw] items-center">
        <span className="text-4xl text-white">Our Impact in Numbers</span>
        <div className="grid grid-cols-4 w-[100%]">
          {IMPACT_NUMBERS.map((card, idx) => {
            return (
              <div key={idx} className="flex flex-col gap-y-1 items-center">
                <h2 className="text-4xl text-white">{card.stat}</h2>
                <h6 className="text-base text-white/80">{card.title}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
