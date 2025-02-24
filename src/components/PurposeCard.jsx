import React from 'react';
import Flex from './ui/Flex';
import Image from './ui/Image'; // Using your custom Image component

const PurposeCard = () => {
  return (
    <div className="w-full sm:w-[calc(50%-12px)] xl:w-[calc(25%-18px)] text-center banner-shadow p-[30px] rounded-[20px] font-dm">
      <Flex className="justify-center">
        {/* Using the custom Image component with the path from public folder */}
        <Image 
          src="/purpose1.svg"  // Path is relative to the public folder
          alt="Purpose 1" 
          className="mb-4" 
          width={210}   // Adjust width and height as needed
          height={75}
          layout="responsive"

        />
      </Flex>
      <h3 className="text-xl font-bold mb-4">Empowering Livelihood</h3>
      <p className="text-base">
        Empowering livelihoods through agricultural advancement by equipping farmers with essential tools and knowledge they need to succeed.
      </p>
    </div>
  );
};

export default PurposeCard;
