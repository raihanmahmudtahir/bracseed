"use client";
import React from "react";
import Slider from "react-slick";
import Image from "../ui/Image"; // Use your custom Image component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components (Same as before)
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
      className="absolute top-1/2 -translate-y-1/2 -right-6 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8 text-gray-600 hover:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
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

const Achievements = () => {
  const achievements = [
    {
      img: "/achieve1.jpeg",
      title: "Awards and certificates",
      description:
        "We prioritize food safety and nutrition, ensuring that every seed we provide meets the highest standards of quality and health.",
    },
    {
      img: "/achieve2.jpeg",
      title: "Awards and certificates",
      description:
        "We prioritize food safety and nutrition, ensuring that every seed we provide meets the highest standards of quality and health.",
    },
    {
      img: "/achieve3.jpeg",
      title: "Awards and certificates",
      description:
        "We prioritize food safety and nutrition, ensuring that every seed we provide meets the highest standards of quality and health.",
    },
    {
      img: "/achieve4.jpeg",
      title: "Awards and certificates",
      description:
        "We prioritize food safety and nutrition, ensuring that every seed we provide meets the highest standards of quality and health.",
    },
    {
      img: "/achieve1.jpeg",
      title: "Awards and certificates",
      description:
        "We prioritize food safety and nutrition, ensuring that every seed we provide meets the highest standards of quality and health.",
    },
    {
      img: "/achieve2.jpeg",
      title: "Awards and certificates",
      description:
        "We prioritize food safety and nutrition, ensuring that every seed we provide meets the highest standards of quality and health.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust as needed
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Screens less than 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Screens less than 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Screens less than 640px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-dm">
          Achievements that Inspire Us
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {achievements.map((achievement, index) => (
              <div key={index} className="px-2 flex flex-col items-center">
                <Image
                  src={achievement.img}
                  alt={achievement.title}
                  width={270}
                  height={278}
                  className="w-[200px] h-[200px] rounded-[30px] mb-4 object-cover"
                />
                <div className="text-center text-[#333333] text-xl font-bold leading-[27px] font-dm">
                  {achievement.title}
                </div>
                <div className="text-center text-black text-base font-normal leading-normal font-os mt-2">
                  {achievement.description}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
