import React from 'react';
import Flex from './ui/Flex';
import Image from './ui/Image'; // Use your custom Image component

const PurposeCard3 = () => {
  return (
    <div className="w-full sm:w-[calc(50%-12px)] xl:w-[calc(25%-18px)] text-center banner-shadow p-[30px] rounded-[20px] font-dm">
      <Flex className="justify-center">
        {/* Use your custom Image component and reference the image from the public folder */}
        <Image 
          src="/purpose3.svg" 
          alt="Purpose 3" 
          className="mb-4" 
          width={210} 
          height={75} 
        />
      </Flex>
      <h3 className="text-xl font-bold mb-4">Establishing Sustainability</h3>
      <p className="text-base">
        Fostering a future where environmental stewardship and agricultural productivity coexist harmoniously.
      </p>
    </div>
  );
};

export default PurposeCard3;
