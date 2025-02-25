import React from 'react';
import Flex from './ui/Flex';
import Image from './ui/Image'; // Use your custom Image component

const PurposeCard4 = () => {
  return (
    <div className="w-full sm:w-[calc(50%-12px)] xl:w-[calc(25%-18px)] text-center banner-shadow p-[30px] rounded-[20px] font-dm">
      <Flex className="justify-center">
        {/* Use your custom Image component and reference the image from the public folder */}
        <Image 
          src="/purpose4.svg" 
          alt="Purpose 4" 
          className="mb-4" 
          width={210} 
          height={75}
          layout="responsive" 

        />
      </Flex>
      <h3 className="text-xl font-bold mb-4">Elevating Innovation</h3>
      <p className="text-base">
        Advancing the future of farming by pioneering innovative agricultural solutions through advanced research facilities and technology.
      </p>
    </div>
  );
};

export default PurposeCard4;
