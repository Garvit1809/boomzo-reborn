import { Mail, PhoneCall } from "lucide-react";

const LeadContactInfo = () => {
  return (
    <div className="border-l border-b border-b-white border-r border-r-black bg-black/100 rounded-bl-2xl flex flex-col gap-y-4 items-start justify-center pl-8 w-[40%] py-8">
      <div className="flex gap-2 items-center">
        <div className="bg-white p-2 w-[38px] rounded-full flex items-center justify-center">
          <PhoneCall size={20} color="black" />
        </div>
        <span className="text-lg text-white font-semibold">843 991 1779</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-white w-[38px] p-2 rounded-full flex items-center justify-center">
          <Mail size={20} color="black" />
        </div>
        <span className="text-lg text-white font-semibold">grow@boomzo.in</span>
      </div>
    </div>
  );
};

export default LeadContactInfo;
