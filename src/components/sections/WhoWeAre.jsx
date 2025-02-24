import React from 'react';
import Image from '../ui/Image'; // Custom Image component

const AboutSection = () => {
  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/whoweare1.jpg" 
        alt="Background"
        width={1728}
        height={380}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for translucent effect */}
      <div className="absolute inset-0 bg-green-900 opacity-70"></div>

      {/* Content container */}
      <div className="relative z-10 text-white max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 font-os">Who We Are</h2>
        
        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed font-dm">
          In the heart of agricultural landscapes, BRAC Seed is a pioneering agricultural initiative by BRAC, committed to enhancing food security and fostering food sufficiency through sustainable agriculture. BRAC Seed's journey traces back to the soils of 1972, where the seeds of BRAC Agro Enterprise first took root. Year 2014 stands as the chapter of growth and evolution where BRAC expanded to BRAC Seed and Agro Enterprise, unifying its seed production, processing, and marketing activities. Through its growth, BRAC Seed evolved into producing high-quality open-pollinated and hybrid seeds for both subsistence and commercial farming. BRAC Seed aims to customize seeds considering the agricultural dynamics of our country, thereby maximizing yields and minimizing risks for farmers to empower the agriculture of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
