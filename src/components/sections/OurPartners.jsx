"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from '../ui/Image';
import Container from '../ui/Container';
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

const OurPartners = () => {
  const partners = [
    { src: '/op1.png', alt: 'Partner 1' },
    { src: '/op2.png', alt: 'Partner 2' },
    { src: '/op3.png', alt: 'Partner 3' },
    { src: '/op4.png', alt: 'Partner 4' },
    { src: '/op5.png', alt: 'Partner 5' },
    // Duplicate the content to make the slider functional
    { src: '/op1.png', alt: 'Partner 1' },
    { src: '/op2.png', alt: 'Partner 2' },
    { src: '/op3.png', alt: 'Partner 3' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280, // Screens less than 1280px
        settings: {
          slidesToShow: 4,
        },
      },
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
    <section className="py-10 md:py-16 lg:py-24">
      <Container className="relative">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 text-center font-dm text-[#333333]">
            Our Partners
          </h2>
          <div className="w-full">
            <Slider {...settings}>
              {partners.map((partner, index) => (
                <div key={index} className="px-2 flex justify-center">
                  <Image
                    className="w-[200px] h-[200px] rounded-[15px] border-2 border-[#f4f4f4] object-cover"
                    src={partner.src}
                    alt={partner.alt}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurPartners;
