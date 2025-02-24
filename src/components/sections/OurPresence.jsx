import React from 'react';
import Image from '../ui/Image'; // Your custom Image component

export default function OurPresence() {
  return (
    <div className="w-[1728px] h-[1305px] relative bg-white">
      <div className="left-[279px] top-[100px] absolute text-[#ea5c2b] text-4xl font-bold font-dm leading-[54px]">
        Our Presence
      </div>
      <div className="w-[470px] left-[279px] top-[190px] absolute text-black text-base font-normal font-dm leading-normal">
        BRAC Seed operates across diverse agricultural landscapes and regions where farming is both a way of life and a livelihood. From the fertile plains to the rugged terrains, our presence extends to empower farmers in remote villages and bustling markets alike. With a commitment to reach every corner, we are proud to serve communities across 64 districts fostering growth and sustainability in agriculture.
      </div>
      <div className="w-[162px] left-[279px] top-[635px] absolute">
        <div className="w-[85px] text-black text-base font-bold font-os leading-snug mb-[29px]">Categories</div>
        <div className="space-y-[26px]">
          <div className="flex items-center">
            <div className="w-4 h-4 border border-black mr-2"></div>
            <div className="text-black text-base font-normal font-dm leading-normal">Production Zone</div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 border border-black mr-2"></div>
            <div className="text-black text-base font-normal font-dm leading-normal">Dealer Network</div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 border border-black mr-2"></div>
            <div className="text-black text-base font-normal font-dm leading-normal">Retailer Network</div>
          </div>
        </div>
      </div>
      
      {/* Custom Image Component for the Bangladesh map */}
      <Image
        src="/bdmap.jpeg" // Use relative path from the public folder
        alt="Bangladesh Map" 
        width={670} 
        height={819} 
        className="left-[794px] absolute"
      />
      
      <div className="left-[476px] top-[686px] absolute flex items-center gap-5">
        <div className="w-[110px] flex-col items-center">
          <div className="text-center text-[#333333] text-[32px] font-bold font-dm leading-[43.20px]">21</div>
          <div className="text-center text-[#333333] text-base font-normal font-dm leading-normal">Production Zone</div>
        </div>
        <div className="w-[110px] flex-col items-center">
          <div className="text-center text-[#333333] text-[32px] font-bold font-dm leading-[43.20px]">9,500</div>
          <div className="text-center text-[#333333] text-base font-normal font-dm leading-normal">Dealer Network</div>
        </div>
        <div className="w-[110px] flex-col items-center">
          <div className="text-center text-[#333333] text-[32px] font-bold font-dm leading-[43.20px]">7,500</div>
          <div className="text-center text-[#333333] text-base font-normal font-dm leading-normal">Retailer Network</div>
        </div>
      </div>
      
      <div className="left-[279px] top-[1087px] absolute flex items-center gap-[45.38px]">
        {/* Custom Image Component for Sheba icon */}
        <Image
          src="/shebaicon.png" // Use relative path from the public folder
          alt="Sheba Icon" 
          width={156} 
          height={100} 
        />
        <div className="flex-col">
          <div className="text-[#333333] text-xs font-bold font-dm leading-none mb-[15.13px]">Got any query? (Toll Free)</div>
          <div className="text-[#333333] text-3xl font-bold font-dm leading-[40.85px]">09606162636</div>
          <div className="flex items-center gap-[7.56px] mt-[15.13px]">
            <div className="text-[#333333] text-xs font-bold font-dm leading-none">Call Received</div>
            <div className="text-[#333333] text-2xl font-bold font-dm leading-loose">450</div>
          </div>
        </div>
      </div>
      
      <div className="w-[534px] left-[947px] top-[1009px] absolute text-[#333333] text-xl font-dm leading-[27px]">
        <p className="font-bold">BRAC Seed</p>
        <p className="font-normal">BRAC Centre, 75 Mohakhali, Dhaka-1212</p>
        <p className="font-bold mt-[27px]">Telephone</p>
        <p className="font-normal">+88 02 2222 81265</p>
        <p className="font-bold mt-[27px]">E-Mail</p>
        <p className="font-normal">info@brac.net</p>
        <p className="font-normal mt-[27px]">For more information call us at 09606 162 636</p>
      </div>
    </div>
  );
}
