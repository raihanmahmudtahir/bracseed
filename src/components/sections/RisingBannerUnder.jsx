import React from 'react';
import Image from '../ui/Image'; // Using your custom Image component

const RisingBannerUnder = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1170px] h-[600px] justify-between items-start inline-flex">
        {/* Card 1 */}
        <div className="w-[350px] h-[600px] flex-col justify-between items-start inline-flex">
          <div className="self-stretch h-[600px] flex-col justify-start items-start gap-[30px] flex">
            {/* Image */}
            <Image
              className="self-stretch h-[350px] rounded-[30px]"
              src="/rising1.jpg" // Replace with the actual image URL
              alt="BRAC Event"
              width={350}
              height={350}
            />
            <div className="self-stretch h-52 flex-col justify-start items-start gap-[30px] flex">
              <div className="self-stretch h-[178px] flex-col justify-start items-start gap-[30px] flex">
                {/* Title */}
                <div className="self-stretch h-[33px] flex-col justify-start items-center gap-[30px] flex">
                  <div className="self-stretch text-black text-base font-bold font-['DM Sans'] leading-snug">
                    BRAC Seed unveiled new packages for their vegetable seeds
                  </div>
                </div>
                {/* Description */}
                <div className="self-stretch h-[115px] text-black text-base font-normal font-['DM Sans'] leading-normal">
                  On February 2, 2023, BRAC Seed & Agro Enterprises unveiled an attractive new package of vegetable seeds on the vegetable seed market. The personnel involved with this new packaging think that this will be helpful in expanding the market for vegetable seeds. Senior officials and the business community of BRAC Seed participated in the event.
                </div>
              </div>
            </div>
          </div>
          {/* See More */}
          <div className="self-stretch">
            <span className="text-[#ff7f3f] text-base font-normal font-['DM Sans'] leading-normal">
              See more
            </span>
            <span className="text-[#ff7f3f] text-base font-light font-['Inter'] leading-normal">
              →
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[350px] self-stretch flex-col justify-between items-start inline-flex">
          <div className="self-stretch h-[588px] flex-col justify-start items-start gap-[30px] flex">
            {/* Image */}
            <Image
              className="self-stretch h-[350px] rounded-[30px]"
              src="/risingb2.jpg" // Replace with the actual image URL
              alt="BRAC Event"
              width={350}
              height={350}
            />
            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[30px] flex">
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[30px] flex">
                {/* Title */}
                <div className="self-stretch h-[11px] flex-col justify-start items-center gap-[30px] flex">
                  <div className="self-stretch text-black text-base font-bold font-['DM Sans'] leading-snug">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                {/* Description */}
                <div className="self-stretch h-[115px] text-black text-base font-normal font-['DM Sans'] leading-normal">
                  “Breeding is the key to success and development in agriculture. BRAC is working for food nutritional security through development of high yielding, stress tolerant climate resilient variety. Quality Breeding will ensure quality product. I wish all the success of Scientists of BRAC.”
                </div>
              </div>
            </div>
          </div>
          {/* See More */}
          <div className="self-stretch">
            <span className="text-[#ff7f3f] text-base font-normal font-['DM Sans'] leading-normal">
              See more
            </span>
            <span className="text-[#ff7f3f] text-base font-light font-['Inter'] leading-normal">
              →
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[350px] h-[600px] flex-col justify-between items-start inline-flex">
          <div className="self-stretch h-[588px] flex-col justify-start items-start gap-[30px] flex">
            {/* Image */}
            <Image
              className="self-stretch h-[350px] rounded-[30px]"
              src="/risingb3.jpg" // Replace with the actual image URL
              alt="BRAC Event"
              width={350}
              height={350}
            />
            <div className="self-stretch h-52 flex-col justify-start items-start gap-[30px] flex">
              <div className="self-stretch h-[156px] flex-col justify-start items-start gap-[30px] flex">
                {/* Title */}
                <div className="self-stretch h-[11px] flex-col justify-start items-center gap-[30px] flex">
                  <div className="self-stretch text-black text-base font-bold font-['DM Sans'] leading-snug">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                {/* Description */}
                <div className="self-stretch h-[115px] text-black text-base font-normal font-['DM Sans'] leading-normal">
                  “Breeding is the key to success and development in agriculture. BRAC is working for food nutritional security through development of high yielding, stress tolerant climate resilient variety. Quality Breeding will ensure quality product. I wish all the success of Scientists of BRAC.”
                </div>
              </div>
            </div>
          </div>
          {/* See More */}
          <div className="self-stretch">
            <span className="text-[#ff7f3f] text-base font-normal font-['DM Sans'] leading-normal">
              See more
            </span>
            <span className="text-[#ff7f3f] text-base font-light font-['Inter'] leading-normal">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RisingBannerUnder;
