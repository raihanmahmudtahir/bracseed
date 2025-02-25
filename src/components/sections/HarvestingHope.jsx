import React from "react";
import Image from "../ui/Image"; // Use your custom Image component

const HarvestingHope = () => {
  const impacts = [
    { img: "/hh1.jpg", title: "Impact Title 1" },
    { img: "/hh2.jpg", title: "Impact Title 2" },
    { img: "/hh3.jpg", title: "Impact Title 3" },
    { img: "/hh4.jpg", title: "Impact Title 4" },
  ];

  return (
    <div className="container justify-center items-center mx-auto">
      <div className="flex justify-between max-w-[1728px] mx-auto">
        <div className="w-3/4 px-10">
          <h1 className="text-gray-900 text-4xl font-bold font-dm leading-[54px] mb-8">
            Harvesting Hope: Redefining Rice Production
          </h1>
          <p className="text-black text-base font-normal font-dm leading-normal">
            {/* Your content */}
          </p>
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
                    src={impact.img} // Image from public folder
                    alt={`Impact Image ${index + 1}`}
                  />
                </div>
                <div>
                  <h3 className="text-black text-base font-bold font-dm leading-snug mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-black text-base font-normal font-dm leading-normal mb-2">
                    Short description of the impact item, talking about various topics and subjects related to the image.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarvestingHope;
