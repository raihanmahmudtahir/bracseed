import React from 'react';
import Image from 'next/image'; // Next.js Image component

const OurFocus = () => {
  return (
    <div className="mt-24 mb-16 px-4">
      <h2 className="text-center text-[#ea5c2b] text-3xl md:text-4xl font-bold font-dm leading-tight mb-8">
        Our Focus
      </h2>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Seed Innovation */}
          <div className="w-[200px] md:w-[268px] h-[268px] px-6 pt-10 pb-6 bg-[#ea5c2b] rounded-[20px] shadow-md flex flex-col justify-center items-center gap-6">
            <Image 
              src="/focus_icon1.png" 
              alt="Seed Innovation" 
              width={75} 
              height={75} 
            />
            <div className="text-center text-white text-lg font-bold font-dm leading-tight">
              Seed<br />Innovation
            </div>
          </div>

          {/* Quality Seed */}
          <div className="w-[200px] md:w-[268px] h-[268px] px-6 pt-10 pb-6 bg-[#ffbd11] rounded-[20px] shadow-md flex flex-col justify-center items-center gap-6">
            <Image 
              src="/focus_icon2.png" 
              alt="Quality Seed" 
              width={75} 
              height={75} 
            />
            <div className="text-center text-white text-lg font-bold font-dm leading-tight">
              Quality<br />Seed
            </div>
          </div>

          {/* Sustainable Agriculture */}
          <div className="w-[200px] md:w-[268px] h-[268px] px-6 pt-10 pb-6 bg-[#43a047] rounded-[20px] shadow-md flex flex-col justify-center items-center gap-6">
            <Image 
              src="/focus_icon3.png" 
              alt="Sustainable Agriculture" 
              width={75} 
              height={75} 
            />
            <div className="text-center text-white text-lg font-bold font-dm leading-tight">
              Sustainable<br />Agriculture
            </div>
          </div>

          {/* Food Security */}
          <div className="w-[200px] md:w-[268px] h-[268px] px-6 pt-10 pb-6 bg-[#4b50eb] rounded-[20px] shadow-md flex flex-col justify-center items-center gap-6">
            <Image 
              src="/focus_icon4.png" 
              alt="Food Security" 
              width={75} 
              height={75} 
            />
            <div className="text-center text-white text-lg font-bold font-dm leading-tight">
              Food<br />Security
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFocus;
