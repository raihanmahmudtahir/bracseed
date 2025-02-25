import React, { useState } from 'react';
import Image from '../ui/Image'; // Use your custom Image component

const TaleMaize = () => {
  // Define impacts content for five pages, with 7 items per page
  const impactsPage1 = [
    {
      img: '/assets/hh1.jpg', // Use path instead of importing
      title: 'Harvesting Hope: Redefining Rice Production',
      description:
        'Rice is the primary crop and staple food of Bangladesh. About 160 million people in Bangladesh depend on rice as the main food...',
    },
    {
      img: '/assets/hh2.jpg',
      title: 'A Tale of Elevating Maize production in Bangladesh',
      description:
        'Maize, also known as corn, is the third most important cereal crop in Bangladesh after rice and wheat...',
    },
    {
      img: '/assets/hh3.jpg',
      title: 'From Flowers to Futures: BRAC Seed’s Bee Program',
      description:
        'BRAC has consistently advanced its mission to develop resources and empower people living in poverty...',
    },
    {
      img: '/assets/hh4.jpg',
      title: 'From Soil to Sustenance: Agriculture and Food Security Programme (AFSP)',
      description:
        'BRAC is dedicated to improving lives and empowering marginalized communities through comprehensive development programs...',
    },
    {
      img: '/assets/hh1.jpg',
      title: 'BRAC Seed’s Gene Bank Securing Genetic Diversity for Future Agriculture',
      description:
        'In Bangladesh, a gene bank plays a significant role in agriculture for several reasons, given the country’s dependence on agriculture...',
    },
    {
      img: '/assets/hh2.jpg',
      title: 'Explore BRAC Seed’s Molecular Lab: Where Science Meets Agricultural Advancements',
      description:
        'The Molecular Lab at BRAC Seed, which is part of BRAC University’s Research and Development team, plays an important role...',
    },
    {
      img: '/assets/hh3.jpg',
      title: 'Impact 7 - Example Content',
      description:
        'This is an example content for the seventh impact. Detailed information can go here about various topics.',
    },
  ];

  // Define other impact pages similarly...
  const impactsPage2 = [
    {
      img: '/assets/hh1.jpg',
      title: 'Impact 8 - Example Content',
      description:
        'This is an example content for the eighth impact. Detailed information can go here about various topics.',
    },
    // More impacts...
  ];

  // Add similar for page3, page4, page5
  const pageData = [impactsPage1, impactsPage2]; // Add impactsPage3, impactsPage4, impactsPage5

  const [currentPage, setCurrentPage] = useState(1);

  // Handle pagination click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle next/previous
  const handleNextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentImpacts = pageData[currentPage - 1];

  return (
    <div className="w-full bg-white py-10 container">
      <div className="flex flex-col justify-between max-w-[1728px] mx-auto">
        <div className="px-4 lg:px-6 w-full">
          {currentImpacts.map((impact, index) => (
            <div key={index} className="self-stretch justify-start items-start gap-9 mb-10 lg:mb-12 inline-flex">
              <Image
                className="w-[250px] h-[200px] rounded-2xl object-cover"
                src={impact.img}
                alt={impact.title}
                width={250}
                height={200}
              />
              <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
                <div className="self-stretch h-28 flex-col justify-start items-start gap-3 lg:gap-4 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="text-black text-base lg:text-lg font-bold font-dm leading-snug">
                      {impact.title}
                    </div>
                  </div>
                  <div className="text-black text-sm lg:text-base font-normal font-dm leading-normal">
                    {impact.description}
                  </div>
                </div>
                <div className="self-stretch flex justify-between items-center">
                  <span className="text-[#ff7f3f] text-base font-normal font-dm leading-normal">
                    See more
                  </span>
                  <span className="text-[#ff7f3f] text-base font-light font-os leading-normal">
                    →
                  </span>
                </div>
                <hr className="self-stretch border-t border-[#929292] mt-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            className={`w-[35px] h-[35px] rounded-[5px] ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <span className="text-gray-700">{'<'}</span>
          </button>

          {[...Array(5)].map((_, index) => (
            <button
              key={index + 1}
              className={`w-[35px] h-[35px] rounded-[5px] ${
                currentPage === index + 1 ? 'bg-[#2f313c] text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`w-[35px] h-[35px] rounded-[5px] ${currentPage === 5 ? 'cursor-not-allowed' : ''}`}
            onClick={handleNextPage}
            disabled={currentPage === 5}
          >
            <span className="text-gray-700">{'>'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaleMaize;
