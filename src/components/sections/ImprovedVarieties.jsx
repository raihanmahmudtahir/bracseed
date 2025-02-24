import React from "react";
import Image from '../ui/Image';

const ImprovedVarieties = () => {
  const impacts = [
    { img: "/assets/iv1.jpg", title: "Harvesting Hope: Redefining Rice Production", description: "Rice is the primary crop and staple food of Bangladesh. About 160 million people in Bangladesh depend on rice as the main food..." },
    { img: "/assets/hh3.jpg", title: "A Tale of Elevating Maize production in Bangladesh", description: "Maize, also known as corn, is the third most important cereal crop in Bangladesh after rice and wheat..." },
    { img: "/assets/hh2.jpg", title: "From Soil to Sustenance: Agriculture and Food Security Programme (AFSP)", description: "BRAC is dedicated to improving lives and empowering marginalized communities through comprehensive development programs..." },
    { img: "/assets/hh4.jpg", title: "From Flowers to Futures: BRAC Seed’s Bee Program", description: "BRAC has consistently advanced its mission to develop resources and empower people living in poverty..." },
  ];

  return (
    <div className="h-[2770px] bg-white py-10 w-full container">
      {/* Main Content Section */}
      <div className="flex justify-between max-w-[1728px] mx-auto">
        <div className="w-3/4 px-6">
          <h1 className="text-gray-900 text-4xl font-bold font-dm leading-[54px] mb-8">
            Improved Varieties, Increased Yield: The Rise of Vegetable Farming
          </h1>
          <p className="text-black text-base font-normal font-dm leading-normal mb-8">
            Bangladesh is a developing nation with an agro-economy and vegetable farming is one of the vital crop farming that ensures the country's food and nutritional security. Millions of men and women are engaged in both commercial and homestead vegetable cultivation. Vegetables play a crucial role in the country’s agricultural sector, contributing significantly to land use, production, and economic value, and boosting the GDP. Recently, vegetable cultivation in Bangladesh has been expanding rapidly, reflecting its growing importance in the nation's economy.
            <br />
            At BRAC Seed, we are dedicated to transforming vegetable agriculture through innovative research and development. Our R&D team continuously works on adapting cutting-edge breeding techniques, committed to developing vegetable seeds that are both high-yielding and resilient.
          </p>

          {/* Objectives Section */}
          <h2 className="text-black text-base font-bold font-dm leading-relaxed mb-4">
            Objectives
          </h2>
          <ul className="list-disc ml-8 mb-8 text-black text-base font-dm leading-relaxed">
            <li>Develop Climate-Resilient Varieties: Create vegetable hybrids with enhanced tolerance to extreme weather conditions including heat stress, drought, and salinity.</li>
            <li>Improve Yield and Quality: Enhance the yield and quality of vegetables to meet regional demand and ensure consistent production.</li>
            <li>Address Specific Regional Challenges: Focus on breeding varieties that cater to the unique climatic and environmental challenges of our region.</li>
            <li>Expand Availability: Increase the availability of vegetables throughout the year by developing photo-insensitive and heat-tolerant varieties.</li>
          </ul>

          {/* Research and Development Section */}
          <h2 className="text-black text-base font-bold font-dm leading-relaxed mb-4">
            Ongoing Research and Development
          </h2>
          <p className="text-black text-base font-dm leading-relaxed mb-4">
            Research has been conducted on more than 40 vegetables for improving the farming method. Our research and development efforts are focused on the following key areas:
          </p>
          <ul className="list-disc ml-8 mb-8 text-black text-base font-dm leading-relaxed">
            <li><strong>Heat Tolerance:</strong> Bottle Gourd, Pumpkin, Ridge Gourd, Snake Gourd, and Sponge Gourd.</li>
            <li><strong>Disease and Pest Resistance:</strong> Yard Long Bean varieties tolerant to Yellow Mosaic Virus (YMV).</li>
            <li><strong>Salinity and Drought Tolerance:</strong> Screening and developing varieties suited for saline and drought-prone environments.</li>
            <li><strong>Variety Screening and Testing:</strong> Ongoing evaluation of hybrids and open-pollinated (OP) varieties.</li>
          </ul>

          {/* Developed Varieties Section */}
          <h2 className="text-black text-base font-bold font-dm leading-relaxed mb-4">
            Developed Varieties
          </h2>
          <table className="table-auto w-full text-left">
            <thead className="bg-[#7a7a7a] text-white">
              <tr>
                <th className="px-4 py-2 font-bold font-dm">Seed</th>
                <th className="px-4 py-2 font-bold font-dm">Variety</th>
                <th className="px-4 py-2 font-bold font-dm">Feature</th>
              </tr>
            </thead>
            <tbody className="bg-[#f4f4f4]">
              <tr>
                <td className="px-4 py-2">Pumpkin</td>
                <td className="px-4 py-2">Beauty</td>
                <td className="px-4 py-2">Photo-insensitive & heat tolerant</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Bitter Gourd</td>
                <td className="px-4 py-2">Bulbuli</td>
                <td className="px-4 py-2">Photo-insensitive & heat tolerant</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Ridge Gourd</td>
                <td className="px-4 py-2">Shefa</td>
                <td className="px-4 py-2">Photo-insensitive & heat tolerant</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Sponge Gourd</td>
                <td className="px-4 py-2">Sarothi</td>
                <td className="px-4 py-2">Photo-insensitive & heat tolerant</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sidebar Section */}
        <div className="w-1/4 bg-[#f4f4f4] rounded-lg p-6">
          <div className="bg-[#7a7a7a] text-white text-center py-4 rounded-t-lg font-dm text-xl">
            Our Impacts
          </div>
          <div className="p-4">
            {impacts.map((impact, index) => (
              <div key={index} className="mb-6">
                <div className="w-full h-[170px] mb-4 overflow-hidden rounded-2xl">
                  <Image
                    className="w-full h-full object-cover"
                    src={impact.img}
                    alt={impact.title}
                    width={170}
                    height={170}
                  />
                </div>
                <div>
                  <h3 className="text-black text-base font-bold font-dm leading-snug mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-black text-base font-normal font-dm leading-normal mb-2">
                    {impact.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#ff7f3f] text-base font-normal font-dm leading-normal">
                      See more
                    </span>
                    <span className="text-[#ff7f3f] text-base font-light font-os leading-normal">
                      →
                    </span>
                  </div>
                  <hr className="border-t border-[#929292] mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedVarieties;
