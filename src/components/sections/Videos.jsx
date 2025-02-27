"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../ui/Image"; // Custom Image component

const Videos = () => {
  const [activeTab, setActiveTab] = useState("Recent");

  // Video thumbnails paths from the public folder
  const videoThumbnails = [
    "/video1.jpg",
    "/video2.jpg",
    "/video3.jpg",
    "/video4.jpg",
    "/video5.png",
    "/video6.jpg",
  ];

  // Function to select images based on the active tab (for demo purposes, we'll use the same set of images)
  const getVideosForTab = () => {
    // You can add conditional logic here to return different video sets based on activeTab.
    return [...videoThumbnails, ...videoThumbnails]; // Duplicating for demo purposes.
  };

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute top-[50%] right-0 transform -translate-y-1/2 cursor-pointer z-10 bg-black`}
        onClick={onClick}
      >
        ➡️
      </div>
    );
  };

  // Custom Previous Arrow
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute top-[50%] left-0 transform -translate-y-1/2 cursor-pointer z-10 bg-black`}
        onClick={onClick}
      >
        ⬅️
      </div>
    );
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesPerRow: 3,
    rows: 2,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const renderVideos = () => {
    const videos = getVideosForTab(); // Get videos for the selected tab
    return (
      <Slider {...settings}>
        {videos.map((src, index) => (
          <div key={index} className="p-2">
            <div className="rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex relative">
              <Image
                className="w-[355px] h-[200px] rounded-[30px] object-cover"
                src={src}
                alt={`video-${index + 1}`}
                width={450}     
                height={329}
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[76px] h-[76px] opacity-75 mix-blend-multiply bg-[#333333] rounded-full flex justify-center items-center">
                  <span className="text-white text-4xl">▶️</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <div className="container mx-auto text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6">Videos</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-9 mb-[30px]">
        <div
          className={`cursor-pointer text-base font-bold ${
            activeTab === "Recent" ? "text-[#006838]" : "text-[#333333] font-normal"
          }`}
          onClick={() => setActiveTab("Recent")}
        >
          Recent
        </div>
        <div
          className={`cursor-pointer text-base font-bold ${
            activeTab === "1 Month ago" ? "text-[#006838]" : "text-[#333333] font-normal"
          }`}
          onClick={() => setActiveTab("1 Month ago")}
        >
          1 Month ago
        </div>
        <div
          className={`cursor-pointer text-base font-bold ${
            activeTab === "3 Month ago" ? "text-[#006838]" : "text-[#333333] font-normal"
          }`}
          onClick={() => setActiveTab("3 Month ago")}
        >
          3 Month ago
        </div>
        <div
          className={`cursor-pointer text-base font-bold ${
            activeTab === "Career" ? "text-[#006838]" : "text-[#333333] font-normal"
          }`}
          onClick={() => setActiveTab("Career")}
        >
          Career
        </div>
      </div>

      {/* Video Thumbnails */}
      <div className="relative">
        {renderVideos()}
      </div>
    </div>
  );
};

export default Videos;
