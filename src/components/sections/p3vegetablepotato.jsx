import React from 'react';
import Image from '../ui/Image'; // Assuming your custom Image component is located here

const P3VegetablePotato = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-10 py-12">
      {/* Vegetable */}
      <div className="w-[370px] h-[520px] bg-[#006838] rounded-[30px] shadow relative flex flex-col justify-end">
        {/* Image imposed on top of green background */}
        <Image
          className="w-[370px] h-[370px] object-cover rounded-[30px] absolute top-0 left-0"
          src="/vegetable.jpeg"
          alt="Vegetable"
          width={370}
          height={370}
        />
        {/* Text at the bottom half */}
        <div className="p-[12px] z-10 text-white ">
          <h2 className="text-2xl font-bold">Vegetable</h2>
          <p className="text-base font-normal mt-2">
            With 30+ hybrid and open-pollinated seeds, BRAC Seed offers high-quality vegetable seeds, carefully selected for the finest growth and yield.
          </p>
        </div>
      </div>

      {/* Potato */}
      <div className="w-[370px] h-[520px] bg-[#43a047] rounded-[30px] shadow relative flex flex-col justify-end">
        {/* Image imposed on top of green background */}
        <Image
          className="w-[370px] h-[370px] object-cover rounded-[30px] absolute top-0 left-0"
          src="/potato.jpeg"
          alt="Potato"
          width={370}
          height={370}
        />
        {/* Text at the bottom half */}
        <div className="p-6 z-10 text-white mt-auto">
          <h2 className="text-2xl font-bold pt-2">Potato</h2>
          <p className="text-base font-normal mt-2">
            With a focus on quality and reliability, BRAC Seed offers a diverse range of seed potato varieties suited to various climatic conditions and farming practices.
          </p>
        </div>
      </div>

      {/* Rice */}
      <div className="w-[370px] h-[520px] bg-[#c0d72f] rounded-[30px] shadow relative flex flex-col justify-end">
        {/* Image imposed on top of green background */}
        <Image
          className="w-[370px] h-[370px] object-cover rounded-[30px] absolute top-0 left-0"
          src="/rice.jpeg"
          alt="Rice"
          width={370}
          height={370}
        />
        {/* Text at the bottom half */}
        <div className="p-6 z-10 text-[#006838] mt-auto">
          <h2 className="text-2xl font-bold pt-2">Rice</h2>
          <p className="text-base font-normal mt-2">
            With a high adaptability to the country's climate and soil conditions, BRAC Seed has produced more than 10 hybrid rice varieties in Bangladesh.
          </p>
        </div>
      </div>

      {/* Maize */}
      <div className="w-[370px] h-[520px] bg-[#ea5c2b] rounded-[30px] shadow relative flex flex-col justify-end">
        {/* Image imposed on top of green background */}
        <Image
          className="w-[370px] h-[370px] object-cover rounded-[30px] absolute top-0 left-0"
          src="/maize.jpeg"
          alt="Maize"
          width={370}
          height={370}
        />
        {/* Text at the bottom half */}
        <div className="p-6 z-10 text-white mt-auto">
          <h2 className="text-2xl font-bold pt-2">Maize</h2>
          <p className="text-base font-normal mt-2">
            BRAC Seed offers over 20 hybrid and open-pollinated maize seeds, catering to the demand of Bangladesh's third most crucial cereal crop.
          </p>
        </div>
      </div>

      {/* Fertilizer */}
      <div className="w-[370px] h-[520px] bg-[#ff7f3f] rounded-[30px] shadow relative flex flex-col justify-end">
        {/* Image imposed on top of green background */}
        <Image
          className="w-[370px] h-[370px] object-cover rounded-[30px] absolute top-0 left-0"
          src="/fertilizer.jpeg"
          alt="Fertilizer"
          width={370}
          height={370}
        />
        {/* Text at the bottom half */}
        <div className="p-6 z-10 text-white mt-auto">
          <h2 className="text-2xl font-bold pt-2">Fertilizer</h2>
          <p className="text-base font-normal mt-2">
            Formulated with carefully balanced nutrients essential for plant health, BRAC Seed’s fertilizers support robust plant growth from seedling to harvest.
          </p>
        </div>
      </div>

      {/* Other Crops */}
      <div className="w-[370px] h-[520px] bg-[#ffbd11] rounded-[30px] shadow relative flex flex-col justify-end">
        {/* Image imposed on top of green background */}
        <Image
          className="w-[370px] h-[370px] object-cover rounded-[30px] absolute top-0 left-0"
          src="/othercrops.jpeg"
          alt="Other Crops"
          width={370}
          height={370}
        />
        {/* Text at the bottom half */}
        <div className="p-6 z-10 text-white mt-auto">
          <h2 className="text-2xl font-bold pt-2">Other Crops</h2>
          <p className="text-base font-normal mt-2">
            Explore more agricultural varieties of BRAC Seed for your sustainable farming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default P3VegetablePotato;
