"use client";

  import { HeartHandshake, AlarmClockCheck, TrendingUp, ClipboardCheck, HandCoins } from "lucide-react"
  
  import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
  
  const features = [
    {
      Icon: HeartHandshake,
      name: "Expert Help",
      description: "Get access to skilled sales and marketing experts.",
      href: "/",
      cta: "Learn more",
      background: <Image src="https://unito.io/wp-content/uploads/2023/12/2Way.png" className="absolute -right-20 -top-20 opacity-60" alt={"logo"} height={500} width={500} />,
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2", // Spans full height (two rows) and first column
    },
    {
      Icon: AlarmClockCheck,
      name: "More Time for You",
      description: "Focus on your main business while we handle the rest.",
      href: "/",
      cta: "Learn more",
      background:<Image src="https://unito.io/wp-content/uploads/2023/12/2Way.png" className="absolute -right-20 -top-20 opacity-60" alt={"logo"} height={500} width={500} />,
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4", // First row, spans two columns
    },
    {
      Icon: TrendingUp,
      name: "Flexible Growth",
      description: "Our services grow with your business needs.",
      href: "/",
      cta: "Learn more",
      background: <Image src="https://unito.io/wp-content/uploads/2023/12/2Way.png" className="absolute -right-20 -top-20 opacity-60" alt={"logo"} height={500} width={500} />,
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2", // Second row, middle column
    },
    {
      Icon: ClipboardCheck,
      name: "Results You Can See",
      description: "We succeed when you succeed, ensuring great results.",
      href: "/",
      cta: "Learn more",
      background: <Image src="https://unito.io/wp-content/uploads/2023/12/2Way.png" className="absolute -right-20 -top-20 opacity-60" alt={"logo"} height={500} width={500} />,
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3", // Second row, last column
    },
    {
      Icon: HandCoins,
      name: "Cost-Effective",
      description: "Save money with our commission-based model.",
      href: "/",
      cta: "Learn more",
      background: <Image src="https://unito.io/wp-content/uploads/2023/12/2Way.png" className="absolute -right-20 -top-20 opacity-60" alt={"logo"} height={500} width={500} />,
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4", // Spans full height (two rows) in the last column
    },
  ];
  
  
  export  function BentoGrids() {
    return (
      <div className=" mx-auto " >
        <h2 className="text-3xl font-extrabold text-center my-8">Why Choose Us?</h2>
      <BentoGrid className="md:grid-cols-3 px-4 ">
        {features.map((feature) => (
          <BentoCard  key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      </div>
    );
  }
  