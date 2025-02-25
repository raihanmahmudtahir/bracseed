import React from 'react';
import Image from '../ui/Image'; // Assuming your custom Image component is here

const QuerySection = () => {
  return (
    <div className="w-full flex justify-center items-center mb-[130px] mt-[166px]">
      <div className="h-[199.97px] flex justify-center items-center gap-[90px]">
        {/* Left Section (Logo or Branding) */}
        <div className="w-[310.41px] h-[199.97px] relative">
          {/* Add images or content here as per the layout */}
          <div className="absolute left-[11.20px] top-[31.36px]">
            <Image src="/bracBangla.png" alt="BRAC Bangla" width={123} height={52} />
          </div>
          <div className="absolute left-0 top-[74.20px]">
            <Image src="/krishiBangla.png" alt="Krishi Bangla" width={100} height={78} />
          </div>
          <div className="absolute left-[96.14px] top-[77.25px]">
            <Image src="/totthoBangla.png" alt="Tottho Bangla" width={132} height={55} />
          </div>
          <div className="absolute left-[51.58px] top-[137.88px]">
            <Image src="/shebaBangla.png" alt="Sheba Bangla" width={169} height={62} />
          </div>
          <div className="absolute left-[150px]">
            <Image src="/iconBangla.png" alt="Icon Bangla" width={169} height={200} />
          </div>
        </div>

        {/* Right Section (Text and Numbers) */}
        <div className="w-[403.39px] flex flex-col justify-center items-start gap-[5px]">
          <div className="flex flex-col justify-start items-start gap-[5px]">
            <div className="text-[#333333] text-2xl font-bold font-dm leading-loose">
              Got any query? (Toll Free)
            </div>
            <div className="text-center text-[#333333] text-6xl font-bold font-dm leading-[81px]">
              09606162636
            </div>
          </div>
          <div className="flex justify-start items-center gap-[15px]">
            <div className="text-center text-[#333333] text-2xl font-bold font-dm leading-loose">
              Call Received
            </div>
            <div className="text-center text-[#333333] text-5xl font-bold font-dm leading-[64.80px]">
              450
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuerySection;
