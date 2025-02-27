import React from 'react';
import Image from '../ui/Image';

const JoinTeamBanner = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        className="w-[1728px] h-[380px] object-cover object-[0%_75%]"
        src="/jointheteam.png"//Update the image path to the public folder
        alt="Join the Team Background"
        layout="responsive" // Ensure responsive behavior
        width={1728} // Set the correct width
        height={380} // Set the correct height
      />

      {/* Centered Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-center text-white text-7xl font-bold font-dm leading-[97.20px]">
          Join The Team
        </h1>
      </div>
    </div>
  );
};

export default JoinTeamBanner;
