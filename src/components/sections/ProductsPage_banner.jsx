import React from "react";
import Image from "../ui/Image"; // Use your custom Image component

const ProductsPageBanner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 p-8 md:p-12 bg-white">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-black text-4xl md:text-5xl font-bold font-dm leading-tight">
            BRAC Seed <br />
            introduces bio-pe
          </h1>
        </div>

        {/* Description */}
        <div className="text-black text-base font-normal font-dm leading-normal mb-4">
          Brac Seed & Agro Enterprises has taken a progressive step by successfully introducing its innovative Bio-Pesticide Category, marking a revolutionary advancement in Bangladesh's agriculture. This historic event was hosted at the esteemed Auditorium of the Brac Centre, in Dhaka on Sunday, as per a press statement issued by the organisation. It addressed vital concerns such as farmer health, consumer safety, eco-friendliness, beneficial insect protection, food security, and climate resilience.
        </div>

        {/* See more */}
        <div className="text-[#ff7f3f] text-base font-normal font-dm leading-normal">
          See more →
        </div>
      </div>

      {/* Video Thumbnail Section */}
      <div className="flex-shrink-0 w-full md:w-[450px] h-[250px] md:h-[329px] relative">
        <Image
          src="/product_header.png" // Use the path of the image in the public directory
          alt="Video Thumbnail"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[75px] h-[75px] relative">
            <div className="w-[75px] h-[75px] absolute opacity-75 bg-[#333333] rounded-full flex justify-center items-center">
              <div className="text-white text-2xl font-os">▶</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageBanner;
