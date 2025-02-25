"use client";
import React from "react";
import Container from "../ui/Container";
import Image from "../ui/Image"; // Assuming you're using a custom Image component
import Slider from "react-slick";
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

const FeaturedProducts = () => {
  const products = [
    {
      name: "Pumpkin Shafi",
      sowingTime: "August–November",
      harvestTime: "50–60 days after sowing",
      fruitWeight: "3.0–3.5 kg",
      fruitType: "Green, white spotted",
      imageSrc: "/fp1.jpeg", // Image from public folder
      type: "Hybrid",
    },
    {
      name: "Titli",
      sowingTime: "August–November",
      harvestTime: "50–60 days after sowing",
      fruitWeight: "3.0–3.5 kg",
      fruitType: "Green, white spotted",
      imageSrc: "/fp2.png", // Image from public folder
      type: "Hybrid",
    },
    {
      name: "Fire Volcano",
      sowingTime: "August–November",
      harvestTime: "50–60 days after sowing",
      fruitWeight: "3.0–3.5 kg",
      fruitType: "Green, white spotted",
      imageSrc: "/fp3.jpeg", // Image from public folder
      type: "Hybrid",
    },
    // Add more products if needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 products at a time
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Screens less than 1024px
        settings: {
          slidesToShow: 2, // Show 2 products
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Screens less than 768px
        settings: {
          slidesToShow: 1, // Show 1 product
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 md:py-16 lg:py-24">
      <Container className="relative">
        <h2 className="text-3xl font-bold mb-8 text-center font-dm text-[#333333]">
          Featured Products
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-4">
                <div className="bg-white shadow-lg rounded-[30px] overflow-hidden">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={517}
                    height={423}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    {/* Hybrid Label */}
                    <div className="text-[#ea5c2b] text-xs font-bold uppercase mb-2">
                      {product.type}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-[#2f313c] text-[28px] font-bold font-dm leading-[37.8px] mb-4">
                      {product.name}
                    </h3>

                    {/* Horizontal Line */}
                    <hr className="border-t-2 border-gray-300 mb-4" />

                    {/* Details with Colon */}
                    <div className="flex">
                      <div className="text-[#2f313c] text-base font-bold font-dm leading-snug">
                        Sowing Time
                        <br />
                        Harvest
                        <br />
                        Fruit Weight
                        <br />
                        Fruit Type
                      </div>
                      <div className="text-[#2f313c] text-base font-normal font-os leading-snug mx-2">
                        :
                        <br />:
                        <br />:
                        <br />:
                      </div>
                      <div className="text-[#2f313c] text-base font-normal font-dm leading-snug">
                        {product.sowingTime}
                        <br />
                        {product.harvestTime}
                        <br />
                        {product.fruitWeight}
                        <br />
                        {product.fruitType}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
