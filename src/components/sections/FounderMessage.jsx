import React from 'react';
import Image from '../ui/Image'; // Use your custom Image component

const FounderMessage = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-20 px-4">
      <div className="flex flex-col md:flex-row gap-6 bg-white overflow-hidden max-w-4xl">
        {/* Founder Image */}
        <Image
          className="w-full md:w-80 h-auto md:h-[459px] object-cover rounded-[30px]"
          src="/abed.jpeg" // Path from public folder
          alt="Founder"
          width={320}
          height={459}
        />
        
        {/* Text Section */}
        <div className="flex flex-col justify-start items-start gap-6 p-6 w-[306px]">
          {/* Title */}
          <h2 className="text-[#006838] text-2xl md:text-[32px] font-bold leading-tight font-dm">
            Words from the Founder
          </h2>
          {/* Quote */}
          <p className="text-black text-base leading-relaxed font-dm">
            “It was both personal experience and recommendations from those around me that made me choose St. Kate’s. I liked the idea of an all-women’s program focusing on empowering women to have strong voices and to stand in that female power. Its focus on women, social justice and creating a dynamic learning environment was exactly what I needed. St. Kate’s was a treasure of an experience.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;
