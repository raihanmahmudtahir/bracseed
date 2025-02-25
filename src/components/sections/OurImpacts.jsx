import React from "react";
import Image from '../ui/Image';

const OurImpacts = () => {
  const impactsData = [
    {
      title: "Harvesting Hope: Redefining Rice Production",
      description:
        "Rice is the primary crop and staple food of Bangladesh. About 160 million people in Bangladesh depend on rice as the main food and about 75 percent of agricultural land is used to grow rice. Dominating agricultural production, employment, nutritional intake, and contributing substantially to national income, Bangladesh ranks as the third-largest producer of rice globally, reaching about 40 million tons every year.",
      image: "/Our_Innovations1.png", // Image from the public folder
    },
    {
      title: "A Tale of Elevating Maize production in Bangladesh",
      description:
        "Maize, also known as corn, is the third most important cereal crop in Bangladesh after rice and wheat. With a population of over 170 million, Maize is a crucial crop in the country for food security and agricultural productivity, especially due to its adaptability to various climates and soil types.",
      image: "/Our_Innovations2.png", // Image from the public folder
    },
    {
      title:
        "Improved Varieties, Increased Yield: The Rise of Vegetable Farming",
      description:
        "Bangladesh is a developing nation with an agro-economy, and vegetable farming is one of the vital crop farming that ensures the country's food and nutritional security.",
      image: "/our_impacts3.png", // Image from the public folder
    },
    {
      title: "From Flowers to Futures: BRAC Seed’s Bee Program",
      description:
        "BRAC has consistently advanced its mission to develop resources and empower people living in poverty. Among its innovative projects is the beekeeping program, launched to improve the livelihoods of Bangladeshi beekeepers and enhance honey production.",
      image: "/our_impacts4.png", // Image from the public folder
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-12 px-4">
      <div className="max-w-7xl flex flex-col gap-16">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {impactsData.slice(0, 2).map((impact, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-full md:w-[250px]">
                <h3 className="text-black text-base font-bold font-dm leading-snug">
                  {impact.title}
                </h3>
                <p className="line-clamp-5 text-black text-base font-normal font-dm leading-normal mt-2">
                  {impact.description}
                </p>
                <div className="text-[#ff7f3f] text-base font-normal font-dm leading-normal mt-2">
                  See more →
                </div>
              </div>
              <Image
                src={impact.image}
                alt={impact.title}
                width={250}
                height={250}
                className="w-full md:w-[250px] h-[250px] rounded-[30px] object-cover mt-4 md:mt-0"
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {impactsData.slice(2).map((impact, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-4">
              <Image
                src={impact.image}
                alt={impact.title}
                width={250}
                height={250}
                className="w-full md:w-[250px] h-[250px] rounded-[30px] object-cover mb-4 md:mb-0"
              />
              <div className="w-full md:w-[250px]">
                <h3 className="text-black text-base font-bold font-dm leading-snug">
                  {impact.title}
                </h3>
                <p className="line-clamp-5 text-black text-base font-normal font-dm leading-normal mt-2">
                  {impact.description}
                </p>
                <div className="text-[#ff7f3f] text-base font-normal font-dm leading-normal mt-2">
                  See more →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <button className="w-[180px] h-[53px] px-6 py-2 bg-[#eeeeee] rounded-[20px] flex justify-center items-center mx-auto">
          <div className="text-center text-[#ea5c2b] text-lg font-normal font-os leading-normal">
            Explore More
          </div>
        </button>
      </div>
    </div>
  );
};

export default OurImpacts;
