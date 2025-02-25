import React from 'react';
import Image from '../ui/Image'; // Assuming you are using a custom Image component

const ForeignPartner = () => {
  return (
    <div className="w-full h-auto relative bg-white">
      {/* Partners Section */}
      <div className="h-auto flex-col justify-start items-center gap-[60px] flex mt-10">
        {/* Foreign Partner Section */}
        <div className="self-stretch flex-col justify-start items-center gap-[61px] flex">
          <div className="self-stretch text-center text-[#333333] text-[32px] font-bold font-dm leading-[43.20px]">
            Foreign Partner
          </div>
          <div className="self-stretch justify-center items-start gap-[30px] inline-flex">
            <Image
              className="w-[200px] h-[200px] rounded-[15px] border-2 border-[#f4f4f4]"
              src="/bangladeshagricultural.png" // Path from public folder
              alt="Foreign Partner 1"
            />
            <Image
              className="w-[200px] h-[200px] rounded-[15px] border-2 border-[#f4f4f4]"
              src="/bangladeshrice.png" // Path from public folder
              alt="Foreign Partner 2"
            />
            <Image
              className="w-[200px] h-[200px] rounded-[15px] border-2 border-[#f4f4f4]"
              src="/BINA.png" // Path from public folder
              alt="Foreign Partner 3"
            />
            <Image
              className="w-[200px] h-[200px] rounded-[15px] border-2 border-[#f4f4f4]"
              src="/CIP.png" // Path from public folder
              alt="Foreign Partner 4"
            />
          </div>
        </div>

        {/* Local Partner Section */}
        <div className="self-stretch flex-col justify-start items-center gap-[61px] flex">
          <div className="self-stretch text-center text-[#333333] text-[32px] font-bold font-dm leading-[43.20px]">
            Local Partner
          </div>
          <div className="self-stretch justify-center items-start gap-[30px] inline-flex">
            <Image
              className="w-[200px] h-[200px] rounded-[15px] border-2 border-[#f4f4f4]"
              src="/bangladeshrice.png" // Path from public folder
              alt="Local Partner 1"
            />
            <Image
              className="w-[200px] h-[200px] rounded-[15px] border-2 border-[#f4f4f4]"
              src="/BINA.png" // Path from public folder
              alt="Local Partner 2"
            />
            <Image
              className="w-[200px] h-[200px] rounded-[15px] border-2 border-[#f4f4f4]"
              src="/BWMRI.png" // Path from public folder
              alt="Local Partner 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeignPartner;
