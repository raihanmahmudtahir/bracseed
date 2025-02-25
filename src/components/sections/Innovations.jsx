"use client";
import React from 'react';
import Slider from "react-slick";
import Flex from "../ui/Flex";
import Image from '../ui/Image';
import Container from "../ui/Container";

// Import react-slick CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 -left-6 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8 text-gray-600 hover:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Left Arrow Icon */}
        <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 -right-6 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8 text-gray-600 hover:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Right Arrow Icon */}
        <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

const Innovations = () => {
  // Array of slide data
  const slides = [
    {
      title: "Harvesting Hope: Redefining Rice Production",
      description:
        "Rice is the primary crop and staple food of Bangladesh. About 160 million people in Bangladesh depend on rice as the main food...",
      image: "/Our_Innovations1.png", // Updated path from public folder
      alt: "Harvesting Hope Image",
    },
    {
      title: "Improved Varieties, Increased Yield: The Rise of Vegetable Farming",
      description:
        "Bangladesh is a developing nation with an agro-economy, and vegetable farming is one of the vital crop farming practices...",
      image: "/Our_Innovations2.png", // Updated path from public folder
      alt: "Vegetable Farming Image",
    },
    // Add more slides as needed
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two slides at a time
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Screens less than 1024px
        settings: {
          slidesToShow: 1, // Show one slide on smaller screens
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="py-10 md:py-16 lg:py-24">
      {/* Section Title */}
      <div className="text-center text-[#2E3191] font-dm font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
        Our Innovation
      </div>

      <Container className="py-10 relative">
        <div className="relative">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="px-4">
                <Flex className="flex-col md:flex-row items-start gap-6">
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="pb-4">
                      <div className="text-black text-lg font-bold font-dm leading-snug">
                        {slide.title}
                      </div>
                      <div className="text-black text-base font-normal font-dm leading-normal mt-2 line-clamp-4">
                        {slide.description}
                      </div>
                    </div>
                    <div className="text-[#ff7f3f] text-base font-normal font-dm leading-normal cursor-pointer">
                      See more{" "}
                      <span className="text-[#ff7f3f] font-light font-inter">
                        →
                      </span>
                    </div>
                  </div>
                  <Image
                    className="w-full md:w-1/2 h-auto rounded-[20px] object-cover"
                    src={slide.image}
                    alt={slide.alt}
                    width={500}
                    height={300}
                  />
                </Flex>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Innovations;
