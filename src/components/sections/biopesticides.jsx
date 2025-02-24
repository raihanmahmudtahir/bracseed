import React from 'react';
import Image from '../ui/Image'; // Use your custom Image component or Next.js's Image component

const BioPesticides = () => {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <div className="flex items-center gap-6">
        {/* Image */}
        <Image
          className="w-[740px] h-[370px] rounded-[30px] shadow"
          src="/bio_pesticides.png"  // Path from the public folder
          alt="Bio-Pesticides"
        />

        {/* Text Block */}
        <div className="w-[530px] h-[370px] opacity-90 bg-[#006838] rounded-[30px] p-10 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bio-Pesticides</h2>
          <p className="text-lg">
            BRAC Seed's bio-pesticides offer farmers a natural and eco-friendly
            solution to pest management, reducing reliance on harmful chemical
            pesticides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioPesticides;
