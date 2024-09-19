import {
  agencyFreelancerBenefits,
  businessBenefits,
  contentBenefits,
} from "@/constants/about-us";

const KeyPairComp = ({ heading, desc }: { heading: string; desc: string }) => {
  return (
    <div>
      <h3 className="text-sm md:text-lg font-bold inline text-white/80 underline pr-2 leading-none">
        {heading}
      </h3>
      <p className="text-white inline text-sm md:text-lg font-normal leading-tight">
        {desc}
      </p>
    </div>
  );
};

export const tabs = [
  {
    title: "Our Mission",
    value: "mission",
    content: (
      <div className="w-full overflow-auto lg:overflow-hidden relative h-full rounded-2xl p-10 text-sm md:text-2xl font-medium text-white bg-gradient-to-br from-[#46CD2E] to-[#46CD2E]/80">
        <p>
          At Boomzo, our mission is clear: to transform how businesses connect
          with top-tier talent. We dive deep into understanding your unique
          needs and challenges, pairing you with the perfect match using smart
          AI and expert oversight. We&apos;re here to make every project not
          just successful, but extraordinary.
        </p>
      </div>
    ),
  },
  {
    title: "Our Vision",
    value: "vision",
    content: (
      <div className="w-full overflow-auto lg:overflow-hidden relative h-full rounded-2xl p-10 text-sm md:text-2xl font-medium text-white bg-gradient-to-br from-[#46CD2E] to-[#46CD2E]/80">
        <p>
          Our vision? Simple. To set the new gold standard in collaboration. We
          see a world where finding the right partner is effortless and
          achieving exceptional results is the norm. With Boomzo, this isn’t
          just a dream; it&apos;s our commitment to shaping a future where
          extraordinary is expected and every project shines.
        </p>
      </div>
    ),
  },
  {
    title: "Boomzo's Benefits",
    value: "benefits",
    content: (
      <div className="w-full overflow-auto lg:overflow-hidden relative h-full rounded-2xl p-10 text-sm md:text-4xl font-bold text-white bg-gradient-to-br from-[#46CD2E] to-[#46CD2E]/80 grid grid-cols-2">
        <div className="border-r-2 border-r-white pr-2 md:pr-6 flex flex-col gap-y-6 items-center">
          <h2>For Businesses</h2>
          <ul className="w-full flex flex-col gap-y-2 md:gap-y-4">
            {businessBenefits.map(
              (
                benefit: { title: string; description: string },
                idx: React.Key | null | undefined
              ) => {
                return (
                  <li key={idx}>
                    <KeyPairComp
                      desc={benefit.description}
                      heading={benefit.title}
                    />
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="pl-6 flex flex-col gap-y-6 items-center">
          <h2>For Agencies and Freelancers</h2>
          <ul className="w-full flex flex-col gap-y-2 md:gap-y-4">
            {agencyFreelancerBenefits.map(
              (
                benefit: { title: string; description: string },
                idx: React.Key | null | undefined
              ) => {
                return (
                  <li key={idx}>
                    <KeyPairComp
                      desc={benefit.description}
                      heading={benefit.title}
                    />
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Boomzo's Fututre",
    value: "future",
    content: (
      <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-sm md:text-2xl font-medium text-white bg-gradient-to-br from-[#46CD2E] to-[#46CD2E]/80 flex flex-col gap-y-6 md:gap-y-10">
        <p className="text-white">
          Concerned about finding the right partners? At Boomzo, we&apos;re
          always improving! Here&apos;s what&apos;s coming soon:
        </p>
        <div className="w-full flex flex-col gap-y-2 md:gap-y-4">
          {contentBenefits.map(
            (
              benefit: { title: string; description: string },
              idx: React.Key | null | undefined
            ) => {
              return (
                <li className="list-none" key={idx}>
                  <KeyPairComp
                    desc={benefit.description}
                    heading={benefit.title}
                  />
                </li>
              );
            }
          )}
        </div>
        <p className="text-white">
          Join Boomzo and experience a new level of collaboration and success!
        </p>
      </div>
    ),
  },
];
