import React from "react";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import Image from "../ui/Image"; // Next.js Image component

const ProductionCenters = () => {
  return (
    <div className="w-full bg-[#43A047] mt-[90px]">
      {/* Inner Container */}
      <Container className="py-10">
        <Flex className="flex-wrap justify-center gap-6">
          {/* Production Center */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(16.666%-20px)] flex flex-col items-center gap-4 p-4">
            <div className="w-16 h-16 flex justify-center items-center">
              <Image src="/pcsvg1.svg" alt="Production Centers Icon" width={64} height={64} />
            </div>
            <div className="text-center text-white text-3xl font-bold font-dm">21</div>
            <div className="text-center text-white text-base font-bold font-dm">Production Centers</div>
          </div>

          {/* Contract Farmers */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(16.666%-20px)] flex flex-col items-center gap-4 p-4">
            <div className="w-16 h-16 flex justify-center items-center">
              <Image src="/pcsvg2.svg" alt="Contract Farmers Icon" width={64} height={64} />
            </div>
            <div className="text-center text-white text-3xl font-bold font-dm">10,500</div>
            <div className="text-center text-white text-base font-bold font-dm">Contract Farmers</div>
          </div>

          {/* Storage System */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(16.666%-20px)] flex flex-col items-center gap-4 p-4">
            <div className="w-16 h-16 flex justify-center items-center">
              <Image src="/pcsvg3.svg" alt="Storage System Icon" width={64} height={64} />
            </div>
            <div className="text-center text-white text-3xl font-bold font-dm">11</div>
            <div className="text-center text-white text-base font-bold font-dm">
              Storage System <br />
              <span className="font-os">(5,400 MT Capacity)</span>
            </div>
          </div>

          {/* Dealers */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(16.666%-20px)] flex flex-col items-center gap-4 p-4">
            <div className="w-16 h-16 flex justify-center items-center">
              <Image src="/pcsvg4.svg" alt="Dealers Icon" width={64} height={64} />
            </div>
            <div className="text-center text-white text-3xl font-bold font-dm">9,500</div>
            <div className="text-center text-white text-base font-bold font-dm">Dealers</div>
          </div>

          {/* Retailers */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(16.666%-20px)] flex flex-col items-center gap-4 p-4">
            <div className="w-16 h-16 flex justify-center items-center">
              <Image src="/pcsvg5.svg" alt="Retailers Icon" width={64} height={64} />
            </div>
            <div className="text-center text-white text-3xl font-bold font-dm">7,500</div>
            <div className="text-center text-white text-base font-bold font-dm">Retailers</div>
          </div>

          {/* Production Per Year */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(16.666%-20px)] flex flex-col items-center gap-4 p-4">
            <div className="w-16 h-16 flex justify-center items-center">
              <Image src="/pcsvg6.svg" alt="Production Per Year Icon" width={64} height={64} />
            </div>
            <div className="text-center text-white text-3xl font-bold font-dm">32,000MT</div>
            <div className="text-center text-white text-base font-bold font-dm">Production Per Year</div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default ProductionCenters;
