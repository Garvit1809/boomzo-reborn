import PageWrapper from "@/components/global/PageWrapper";
import React from "react";

type Props = {};

const Influencer = (props: Props) => {
  return (
    <PageWrapper>
      <div className="relative h-fit lg:min-h-[20rem] bg-black antialiased bg-grid-pattern bg-grid-size flex flex-col pt-[10.5rem] pb-[8rem] px-[5vw] justify-center items-center gap-y-6 overflow-x-hidden overflow-y-hidden">
        <span className="text-4xl text-white font-semibold">
          Coming Soon...
        </span>
      </div>
    </PageWrapper>
  );
};

export default Influencer;
