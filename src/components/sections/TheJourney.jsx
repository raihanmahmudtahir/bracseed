import React from "react";
import Image from "../ui/Image"; // Use your custom Image component

const TheJourney = () => {
  return (
    <div className="container justify-center">
      <h1 className="text-center text-[#ea5c2b] text-4xl font-bold font-dm leading-[54px] mt-[100px]">
        The Journey
      </h1>
      <Image
        src="/thejourney1.svg" // Use path instead of importing the image
        alt="The Journey"
        className="w-full h-full object-contain"
        width={1166}
        height={1314}
      />
    </div>
  );
};

export default TheJourney;
