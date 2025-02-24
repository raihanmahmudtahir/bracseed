import React from 'react';
import Image from '../ui/Image'; // Using your custom Image component

const RD_Banner = () => {
  return (
    <div className="w-full h-[380px] md:h-[500px] bg-cover bg-center flex flex-col justify-center items-center">
      {/* Background Image */}
      <Image
        src="/researchbanner.jpeg" // Direct path from the public folder
        alt="Research & Development Banner"
        width={1728}
        height={380}
        className="absolute w-full h-full object-cover"
      />
      {/* Heading */}
      <div className="relative text-center text-white text-3xl md:text-5xl font-bold leading-tight font-os">
        Research & Development
      </div>
    </div>
  );
};

export default RD_Banner;
