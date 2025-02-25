import React from 'react';
import Image from '../ui/Image'; // Your custom Image component

const RD_Banner = () => {
  return (
    // Make the container "relative" so the absolutely positioned image is contained.
    <div className="relative w-full h-[380px] md:h-[500px] overflow-hidden flex flex-col justify-center items-center">
      
      {/* Absolutely positioned background image */}
      <Image
        src="/researchbanner.jpeg"
        alt="Research & Development Banner"
        width={1728}
        height={380}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Centered heading on top of the image */}
      <div className="relative z-10 text-center text-white text-3xl md:text-5xl font-bold leading-tight font-os">
        Research & Development
      </div>
    </div>
  );
};

export default RD_Banner;
