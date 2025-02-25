"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from '../ui/Image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OngoingProjects = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="container w-full">
      <h2 className="text-center text-2xl font-bold mb-8 mt-12 xl:mb-16 xl:mt-24 font-dm">
        Ongoing Projects
      </h2>
      <div className="relative">
        <Slider {...sliderSettings}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="mb-8 xl:mb-12">
              <div className="max-w-3xl mx-auto rounded-tl-3xl rounded-tr-3xl rounded-bl-lg rounded-br-lg bg-white flex flex-col md:flex-row justify-start items-start gap-6 md:gap-8 p-4 md:p-6">
                {/* Image */}
                <div className="w-full rounded-2xl">
                  <Image
                    className="object-cover rounded-2xl"
                    src="/ogp.jpeg" // Path from public folder
                    alt="Ongoing Project"
                    width={382}
                    height={226}
                    layout="responsive"
                  />
                </div>

                {/* Text Block */}
                <div className="w-full flex flex-col justify-start items-start gap-4">
                  {/* Title */}
                  <div className="text-black text-lg font-bold leading-snug font-os">
                    Lorem ipsum dolor sit amet consectetur. Porttitor enim ante eu tristique commodo.
                  </div>

                  {/* Description */}
                  <div className="text-black text-base font-normal leading-snug font-os">
                    “Breeding is the key to success and development in agriculture. BRAC is working
                    for food nutritional security through development of high yielding, stress
                    tolerant climate resilient variety. Quality Breeding will ensure quality product.
                    I wish all the success of Scientists of BRAC.”
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-[-40px] xl:left-[-60px] z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 xl:w-8 xl:h-8 text-gray-600 hover:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Left Arrow Icon */}
        <path
          d="M15 19l-7-7 7-7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-[-40px] xl:right-[-60px] z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 xl:w-8 xl:h-8 text-gray-600 hover:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Right Arrow Icon */}
        <path
          d="M9 5l7 7-7 7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default OngoingProjects;
