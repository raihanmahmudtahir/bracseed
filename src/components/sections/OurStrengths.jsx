import React from 'react';
import Image from '../ui/Image'; // Your custom Image component

const OurStrengths = () => {
  const strengthsData = [
    {
      title: "Agricultural R&D Centers",
      description: "9 R&D centers are operating to develop high-quality seeds that are resilient to pests, diseases, and environmental structures.",
      bgColor: "bg-white",
      icon: "/stren1.svg", // Updated path
    },
    {
      title: "Tissue Culture Labs",
      description: "There are 2 Tissue Culture labs to combine plants under controlled conditions, ensuring high purity and uniformity of plant materials.",
      bgColor: "bg-[#fdf2ee]",
      icon: "/stren2.svg", // Updated path
    },
    {
      title: "Biotech Labs",
      description: "Established 2 biotech labs pioneer advances in agriculture, fostering sustainable solutions with innovative research and technology.",
      bgColor: "bg-white",
      icon: "/stren3.svg", // Updated path
    },
    {
      title: "Gene Bank",
      description: "The gene banks at BRAC Seed preserve seeds and genetic materials, conserving unique plant varieties available for research and people to use in the future.",
      bgColor: "bg-[#fdf2ee]",
      icon: "/stren4.svg", // Updated path
    },
    {
      title: "Molecular Lab",
      description: "The molecular lab uses advanced tools to improve plant traits and enable the efficient development and protection of crops.",
      bgColor: "bg-white",
      icon: "/stren5.svg", // Updated path
    },
    {
      title: "Soil Lab",
      description: "BRAC Seed's soil test lab ensures optimal crop growth with precise analysis, enhancing soil health and boosting agricultural yields.",
      bgColor: "bg-[#fdf2ee]",
      icon: "/stren6.svg", // Updated path
    },
    {
      title: "Processing Center",
      description: "With BRAC Seed’s 5 processing centers, the conversion of raw inputs from farmers into products takes place for the next step of the supply chain.",
      bgColor: "bg-white",
      icon: "/stren7.svg", // Updated path
    },
    {
      title: "Testing Lab for Quality Assurance",
      description: "The Quality Assurance Testing Lab implements various quality control measures to ensure the reliability and safety of agricultural sourcing.",
      bgColor: "bg-[#fdf2ee]",
      icon: "/stren8.svg", // Updated path
      wide: true, // Indicates that this item should be wider
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 py-12 px-4">
      {strengthsData.map((strength, index) => (
        <div
          key={index}
          className={`${strength.wide ? 'w-full md:w-[750px]' : 'w-full md:w-[366px]'} p-6 rounded-[20px] shadow-md flex flex-col items-center ${strength.bgColor}`}
        >
          <Image src={strength.icon} alt={strength.title} width={150} height={150}  className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] mb-4" />
          <div className="text-center text-[#2f313c] text-lg md:text-xl font-bold font-dm leading-snug mb-2">
            {strength.title}
          </div>
          <div className="text-center text-black text-base font-normal font-dm leading-normal">
            {strength.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurStrengths;
