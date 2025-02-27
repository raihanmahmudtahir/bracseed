"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../ui/Image"; // Assuming you are using a custom Image component

// Custom Previous Arrow
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

// Custom Next Arrow
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

const GetConnected = () => {
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
    <div className="container justify-center items-center mx-auto">
      <div className="w-full max-w-[1728px] mx-auto bg-white relative">
        <div className="flex justify-between">
          {/* Slider with Backgrounds */}
          <div className="w-[640px] h-[750px] bg-[#a1a1a1] rounded-tl-[15px] rounded-bl-[15px]">
            <div className="relative w-full h-full rounded-tl-[15px] rounded-bl-[15px]">
              <Slider {...sliderSettings}>
                <div className="relative">
                  <Image
                    src="/getconnected1.png" // Image from public folder
                    className="w-[640px] h-[750px] object-cover rounded-tl-[15px] rounded-bl-[15px]"
                    alt="Slider Image"
                    width={450}     
                    height={329}
                  />
                  <div className="absolute bottom-[20px] left-[30px] h-[50px] px-[30px] py-[15px] bg-[#e6c491]/70 rounded-[20px] backdrop-blur-[10px] flex justify-center items-center">
                    <p className="text-white text-2xl font-bold font-os">
                      Thanks for landing in our aisle!
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/getconnected2.jpg" // Image from public folder
                    className="w-[640px] h-[750px] object-cover rounded-tl-[15px] rounded-bl-[15px]"
                    alt="Slider Image 2"
                    width={450}     
                    height={329}
                  />
                  <div className="absolute bottom-[20px] left-[30px] h-[50px] px-[30px] py-[15px] bg-[#e6c491]/70 rounded-[20px] backdrop-blur-[10px] flex justify-center items-center">
                    <p className="text-white text-2xl font-bold font-os">
                      Slide 2 Caption!
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          {/* Get Connected Form */}
          <div className="w-[700px] h-[750px] bg-white rounded-tr-[15px] rounded-br-[15px] border border-[#eeeeee] p-10">
            <h2 className="text-[#333333] text-4xl font-bold font-dm leading-[54px] mb-10">
              Get Connected
            </h2>
            <form className="space-y-8">
              {/* Name Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-[#333333] text-base font-bold font-os">
                  Name<span className="text-[#ff0000]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Write your name here"
                  className="w-full px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-[#929292] text-xs font-os"
                />
              </div>

              {/* Mobile Number Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-[#333333] text-base font-bold font-os">
                  Mobile No<span className="text-[#ff0000]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="(+880) XXXX XXX XXX"
                  className="w-full px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-[#929292] text-xs font-os"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-[#333333] text-base font-bold font-os">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write your email here"
                  className="w-full px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-[#929292] text-xs font-os"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-[#333333] text-base font-bold font-os">
                  Message
                </label>
                <textarea
                  placeholder="Write your message here"
                  className="w-full h-[120px] px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-[#929292] text-xs font-os"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#c0d72f] rounded-[10px] text-black text-[10px] font-bold font-dm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info and Map */}
        <div className="flex justify-between mt-16">
          {/* Contact Info */}
          <div className="w-[534px]">
            <p className="text-[#333333] text-xl font-bold font-dm">
              BRAC Seed
            </p>
            <p className="text-[#333333] text-xl font-normal font-dm">
              BRAC Centre, 75 Mohakhali, Dhaka-1212
            </p>
            <p className="text-[#333333] text-xl font-bold font-dm mt-2">
              Telephone
            </p>
            <p className="text-[#333333] text-xl font-normal font-dm">
              +88 02 2222 81265
            </p>
            <p className="text-[#333333] text-xl font-bold font-dm mt-2">
              E-Mail
            </p>
            <p className="text-[#333333] text-xl font-normal font-dm">
              info@brac.net
            </p>
            <p className="text-[#333333] text-xl font-normal font-dm mt-2">
              For more information call us at 09606 162 636
            </p>
          </div>

          {/* Placeholder Map */}
          <div className="w-[531px] h-[377px] bg-[#d9d9d9]">
            <Image
              src="/getconnected2.jpg" // Image from public folder
              className="w-full h-full object-cover"
              alt="Map Placeholder"
              width={450}     
              height={329}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetConnected;
