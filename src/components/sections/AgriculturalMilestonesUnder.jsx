import React from 'react';
import Image from '../ui/Image'; // Assuming you're using a custom Image component

const AgriculturalMilestonesUnder = () => {
  return (
    <div className="container mx-auto mt-[70px] grid grid-cols-2 gap-6">
      {/* Left Column: Large Image and Text */}
      <div className="col-span-1 flex flex-col items-start">
        <Image
          className="w-full h-[484px] rounded-[30px] object-cover"
          src="/agriculture1.jpg"  // Image path from public folder
          alt="Agriculture Milestone 1"
        />
        <div className="mt-6">
          <h2 className="text-black text-base font-bold leading-snug font-['Open Sans']">
            Lorem ipsum dolor sit amet consectetur. Porttitor enim ante eu
            tristique commodo.
          </h2>
          <p className="text-black text-base font-normal font-['Open Sans'] leading-snug mt-4">
            “Breeding is the key to success and development in agriculture. BRAC
            is working for food nutritional security through development of high
            yielding, stress tolerant climate resilient variety. Quality Breeding
            will ensure quality product. I wish all the success of Scientists of
            BRAC.”
          </p>
          <div className="mt-4 text-[#ff7f3f] text-base font-normal font-['DM Sans'] leading-normal">
            See more
            <span className="ml-2 text-[#ff7f3f] text-base font-light font-['Inter'] leading-normal">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Two Smaller Sections */}
      <div className="col-span-1 flex flex-col gap-8">
        {/* First Small Block */}
        <div className="flex gap-[30px]">
          <Image
            className="w-[270px] h-[339px] rounded-[30px] object-cover"
            src="/agriculture2.jpg"  // Image path from public folder
            alt="Agriculture Milestone 2"
          />
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-black text-base font-bold font-['Open Sans'] leading-snug">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="text-black text-base font-normal font-['Open Sans'] leading-snug mt-4">
              “Breeding is the key to success and development in agriculture. BRAC
              is working for food nutritional security through development of high
              yielding, stress tolerant climate resilient variety. Quality Breeding
              will ensure quality product. I wish all the success of Scientists of
              BRAC.”
            </p>
            <div className="mt-4 text-[#ff7f3f] text-base font-normal font-['DM Sans'] leading-normal">
              See more
              <span className="ml-2 text-[#ff7f3f] text-base font-light font-['Inter'] leading-normal">
                →
              </span>
            </div>
          </div>
        </div>

        {/* Second Small Block */}
        <div className="flex gap-[30px]">
          <Image
            className="w-[270px] h-[339px] rounded-[30px] object-cover"
            src="/agriculture3.jpg"  // Image path from public folder
            alt="Agriculture Milestone 3"
          />
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-black text-base font-bold font-['Open Sans'] leading-snug">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="text-black text-base font-normal font-['Open Sans'] leading-snug mt-4">
              “Breeding is the key to success and development in agriculture. BRAC
              is working for food nutritional security through development of high
              yielding, stress tolerant climate resilient variety. Quality Breeding
              will ensure quality product. I wish all the success of Scientists of
              BRAC.”
            </p>
            <div className="mt-4 text-[#ff7f3f] text-base font-normal font-['DM Sans'] leading-normal">
              See more
              <span className="ml-2 text-[#ff7f3f] text-base font-light font-['Inter'] leading-normal">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalMilestonesUnder;
