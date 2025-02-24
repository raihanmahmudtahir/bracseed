"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from '../ui/Image'; // Use your custom Image component
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

const TestimonialSlider = () => {
  const testimonials = [
    {
      image: "/echo.jpeg", // Use image from the public folder
      quote:
        "“Breeding is the key to success and development in agriculture. BRAC is working for food nutritional security through the development of high yielding, stress-tolerant climate resilient variety. Quality Breeding will ensure quality product. I wish all the success of Scientists of BRAC.”",
      name: "Dr. Piter Hanson",
      position: "Director & Lead Scientist, AVRDC. Taiwan",
      date: "25 May 2024",
    },
    // Duplicate content to make the slider functional
    {
      image: "/echo.jpeg", // Use image from the public folder
      quote:
        "“Breeding is the key to success and development in agriculture. BRAC is working for food nutritional security through the development of high yielding, stress-tolerant climate resilient variety. Quality Breeding will ensure quality product. I wish all the success of Scientists of BRAC.”",
      name: "Dr. Piter Hanson",
      position: "Director & Lead Scientist, AVRDC. Taiwan",
      date: "25 May 2024",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one testimonial at a time
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-dm">
        Words That Echo Our Success
      </h2>

      {/* Slider */}
      <div className="relative w-full max-w-xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start bg-white p-6 rounded-lg gap-6"
            >
              {/* Profile Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={300}
                height={300}
                className="w-full md:w-[300px] h-auto rounded-[15px] object-cover"
              />

              {/* Testimonial Text */}
              <div className="flex flex-col gap-4">
                <p className="text-gray-700 text-base leading-relaxed font-os">
                  {testimonial.quote}
                </p>

                {/* Author Information */}
                <div>
                  <p className="text-black text-base font-bold font-os">
                    {testimonial.name}
                  </p>
                  <p className="text-black text-base font-normal font-os leading-snug">
                    {testimonial.position}
                  </p>
                  <p className="text-black text-base font-normal font-os leading-snug mt-2">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
