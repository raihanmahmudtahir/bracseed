"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "../ui/Image"; // Custom Image component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image paths for photos
const Photos = () => {
  const [activeTab, setActiveTab] = useState("Recent");

  // Image arrays for each tab
  const recentImages = ["/photos1.jpg", "/photos2.jpg", "/photos3.jpg", "/photos4.jpg", "/photos5.jpg", "/photos6.jpg", "/photos7.jpg", "/photos8.png"];
  const oneMonthAgoImages = ["/photos2.jpg", "/photos4.jpg", "/photos6.jpg", "/photos8.png"]; // Example images for 1 Month ago
  const threeMonthAgoImages = ["/photos1.jpg", "/photos3.jpg", "/photos5.jpg", "/photos7.jpg"]; // Example images for 3 Month ago
  const careerImages = ["/photos4.jpg", "/photos5.jpg", "/photos8.png"]; // Example images for Career

  // Function to select the images based on the active tab
  const getImagesForTab = () => {
    switch (activeTab) {
      case "1 Month ago":
        return oneMonthAgoImages;
      case "3 Month ago":
        return threeMonthAgoImages;
      case "Career":
        return careerImages;
      default:
        return recentImages;
    }
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
    slidesToScroll: 1,
    rows: 2,          // Set to 2 to show two rows
    slidesPerRow: 4,  // 4 images per row
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const renderImages = () => {
    const images = getImagesForTab(); // Get images for the selected tab
    // Duplicate the images for demo purposes
    const duplicatedImages = [...images, ...images];

    return (
      <Slider {...settings}>
        {duplicatedImages.map((img, index) => (
          <div key={index} className="p-2">
            <Image
              className="w-[290px] h-[250px] rounded-[30px] object-cover"
              src={img}
              alt={`img${index + 1}`}
              width={290}
              height={250}
            />
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <div className="container mx-auto">
      {/* Tabs */}
      <div className="h-[22px] flex gap-9 mb-[30px] mx-auto justify-center items-center">
        <div
          className={`cursor-pointer text-right text-base font-bold font-['DM Sans'] leading-snug ${
            activeTab === "Recent" ? "text-[#006838]" : "text-[#333333] font-normal"
          }`}
          onClick={() => setActiveTab("Recent")}
        >
          Recent
        </div>
        <div
          className={`cursor-pointer text-right text-base font-bold font-['DM Sans'] leading-snug ${
            activeTab === "1 Month ago" ? "text-[#006838]" : "text-[#333333] font-normal"
          }`}
          onClick={() => setActiveTab("1 Month ago")}
        >
          1 Month ago
        </div>
        <div
          className={`cursor-pointer text-right text-base font-bold font-['DM Sans'] leading-snug ${
            activeTab === "3 Month ago" ? "text-[#006838]" : "text-[#333333] font-normal"
          }`}
          onClick={() => setActiveTab("3 Month ago")}
        >
          3 Month ago
        </div>
        <div
          className={`cursor-pointer text-right text-base font-bold font-['DM Sans'] leading-snug ${
            activeTab === "Career" ? "text-[#006838]" : "text-[#333333] font-normal"
          }`}
          onClick={() => setActiveTab("Career")}
        >
          Career
        </div>
      </div>

      {/* Display the images based on the active tab */}
      <div className="relative">
        {renderImages()}
      </div>
    </div>
  );
};

export default Photos;
