"use client";

import { HeartHandshake, Goal, Users, ChartSpline, MessageCircleMore } from "lucide-react"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

const features = [
  {
    Icon: Goal,
    name: "Business Goals",
    description: "Clear objectives to tailor our strategies.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/goals.webp"
        className="absolute -right-4 top-4 opacity-100 group-hover:opacity-40"
        alt={"logo"}
        height={400}
        width={400}
      />
    ),
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2", // Spans full height (two rows) and first column
  },
  {
    Icon: Users,
    name: "Target Audience",
    description: "Insights into your ideal customers.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/target.jpg"
        className="absolute -right-24 md:right-8 top-20  opacity-100 group-hover:opacity-40"
        alt={"logo"}
        height={500}
        width={500}
      />
    ),
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4", // First row, spans two columns
  },
  {
    Icon: ChartSpline,
    name: "Marketing Data",
    description: "Any existing insights to inform our approach.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/marketingdata.jpg"
        className="absolute -right-10 -top-4 opacity-100 group-hover:opacity-40"
        alt={"logo"}
        height={400}
        width={400}
      />
    ),
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2", // Second row, middle column
  },
  {
    Icon: MessageCircleMore,
    name: "Communication",
    description: "Open dialogue for feedback and updates.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/communication.webp"
        className="absolute -right-10 -top-6  opacity-100 group-hover:opacity-40 "
        alt={"logo"}
        height={500}
        width={500}
      />
    ),
    className: " lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3", // Second row, last column
  },
  {
    Icon: HeartHandshake,
    name: "Collaboration",
    description: "Active participation to implement strategies effectively.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/collabrations.png"
        className="absolute -right-4 top-4 opacity-100 group-hover:opacity-40"
        alt={"logo"}
        height={300}
        width={300}
      />
    ),
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4", // Spans full height (two rows) in the last column
  },
];

export function BentoGrids() {
  return (
    <div className=" mx-auto " >
      <h1 className="text-3xl font-bold mt-8  flex justify-center">
        What We
        <span className="text-transparent bg-gradient-to-r from-[#542daf] via-purple-500 to-[#ff9100] bg-clip-text px-1">
          Need
        </span>
        from You?
      </h1>
      <BentoGrid className="md:grid-cols-3 p-5 md:p-20 ">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
