"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../ui/Image"; // Assuming you have a custom Image component

// Arrow components for slick slider
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} bg-black text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer`}
      onClick={onClick}
    >
      ➡️
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} bg-black text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer`}
      onClick={onClick}
    >
      ⬅️
    </div>
  );
};

const FarmersDiary = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container mx-auto mt-10">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="w-[530px] h-[650px] rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[15px] rounded-br-[15px] border border-[#eeeeee] flex flex-col justify-start items-start">
          <Image
            className="w-full h-[300px] rounded-tl-[60px] rounded-tr-[60px] object-cover"
            src="/farmersdiary1.jpg" // Path from public folder
            alt="Corn farming"
            width={450}     
          height={329}
          />
          <div className="w-full h-full px-[30px] py-6 flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="w-[100px] h-[100px] relative">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    src="/abul_hashem.png" // Path from public folder
                    alt="Abul Hashem"
                    width={450}     
                    height={329}
                  />
                </div>
              </div>
              <div>
                <div className="text-black text-base font-bold">Abul Hashem</div>
                <div className="text-black text-base">Farmer</div>
                <div className="text-black text-base">25 May 2024</div>
              </div>
            </div>
            <div className="text-black text-base leading-normal">
              “Corn farming is easier, cheaper and more profitable. BRAC Seed’s
              Zuboraj Corn seed was a miracle for me as I profited 5 times more
              than growing other types of crops in my field. It requires very
              little irrigation and small amounts of fertilizers and
              insecticides.”
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="w-[530px] h-[650px] rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[15px] rounded-br-[15px] border border-[#eeeeee] flex flex-col justify-start items-start">
          <Image
            className="w-full h-[300px] rounded-tl-[60px] rounded-tr-[60px] object-cover"
            src="/farmersdiary2.jpg" // Path from public folder
            alt="Rice farming"
            width={450}     
          height={329}
          />
          <div className="w-full h-full px-[30px] py-6 flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="w-[100px] h-[100px] relative">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    src="/kuddus.jpg" // Path from public folder
                    alt="Kuddus"
                    width={450}     
                    height={329}
                  />
                </div>
              </div>
              <div>
                <div className="text-black text-base font-bold">Kuddus</div>
                <div className="text-black text-base">Farmer</div>
                <div className="text-black text-base">25 May 2024</div>
              </div>
            </div>
            <div className="text-black text-base leading-normal">
              “In my field, you see rice wherever you look. Quality seeds are key
              to a high yield of crop production. BRAC Seed’s hybrid rice seeds
              and vegetable seeds have been a blessing for me and all the farmers
              in my village, bringing us big, happy harvests.”
            </div>
          </div>
        </div>

        {/* Add more slides here */}
      </Slider>
    </div>
  );
};

export default FarmersDiary;
