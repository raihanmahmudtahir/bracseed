import React from 'react';
import Image from 'next/image';

// journeyData.js or inline:
const journeyData = [
  {
    range: '1972-1984',
    imgSrc: '/thejourney11.svg',
    imgWidth: 30,
    imgHeight: 30,
  },
  {
    range: '1985-1997',
    imgSrc: '/thejourney12.svg',
    imgWidth: 40,
    imgHeight: 40,
  },
  {
    range: '1998-2010',
    imgSrc: '/thejourney13.svg',
    imgWidth: 50,
    imgHeight: 50,
  },
  {
    range: '2011-2023',
    imgSrc: '/thejourney14.svg',
    imgWidth: 60,
    imgHeight: 60,
  },
  {
    range: '2024-Present',
    imgSrc: '/thejourney15.svg',
    imgWidth: 70,
    imgHeight: 70,
  },
];

function TheJourney() {
  return (
    <div className="bg-[#f7f3ef] px-50 py-20">
      <h2 className="text-center text-[40px] font-semibold text-orange-600 mb-8">
        The Journey
      </h2>

      <div className="flex flex-nowrap justify-center gap-6 overflow-x-auto">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between w-[218px] h-[220px] 
                       rounded-[50px] bg-green-800 p-6"
          >
            {/* Center the image vertically in the upper portion */}
            <div className="flex-grow flex items-center justify-center">
              <Image
                src={item.imgSrc}
                alt={`Seed stage ${index + 1}`}
                width={item.imgWidth}
                height={item.imgHeight}
                className="object-contain"
              />
            </div>

            {/* Text near the bottom with an underline */}
            <div className="text-center">
              <p className="text-white text-[20px]">{item.range}</p>
              <div className="w-30 h-[2px] bg-white mx-auto mt-2" />
              {/* Alternatively, you could use: 
                  <hr className="border-white w-1/2 mx-auto mt-2" /> 
              */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheJourney;
