import React from "react";
import { FaFilter, FaSearch, FaHome } from "react-icons/fa"; // FontAwesome icons
import Image from "../ui/Image"; // Custom Image component

const YellowFiber = () => {
  const products = [
    {
      name: "Mohabir",
      type: "Hybrid",
      image: "/mohabir.png", // Using path from the public folder
      details: {
        sowingTime: "August-November",
        harvest: "50-60 days after sowing",
        fruitWeight: "3.0-3.5 kg",
        fruitType: "Green, white spotted",
        seedRate: "1.0 - 1.5 kg/Acre",
        yield: "10 - 12 MT/Acre",
        skus: "05g/10g",
      },
    },
    {
      name: "PAC 999",
      type: "Hybrid",
      image: "/pac999.png",
      details: {
        sowingTime: "August-November",
        harvest: "50-60 days after sowing",
        fruitWeight: "3.0-3.5 kg",
        fruitType: "Green, white spotted",
        seedRate: "1.0 - 1.5 kg/Acre",
        yield: "10 - 12 MT/Acre",
        skus: "05g/10g",
      },
    },
    {
      name: "BM 555",
      type: "Hybrid",
      image: "/bm555.png",
      details: {
        sowingTime: "August-November",
        harvest: "50-60 days after sowing",
        fruitWeight: "3.0-3.5 kg",
        fruitType: "Green, white spotted",
        seedRate: "1.0 - 1.5 kg/Acre",
        yield: "10 - 12 MT/Acre",
        skus: "05g/10g",
      },
    },
    {
      name: "King Corn",
      type: "Hybrid",
      image: "/kingcorn.png",
      details: {
        sowingTime: "August-November",
        harvest: "50-60 days after sowing",
        fruitWeight: "3.0-3.5 kg",
        fruitType: "Green, white spotted",
        seedRate: "1.0 - 1.5 kg/Acre",
        yield: "10 - 12 MT/Acre",
        skus: "05g/10g",
      },
    },
    {
      name: "Super Pop",
      type: "Hybrid",
      image: "/superpop.png",
      details: {
        sowingTime: "August-November",
        harvest: "50-60 days after sowing",
        fruitWeight: "3.0-3.5 kg",
        fruitType: "Green, white spotted",
        seedRate: "1.0 - 1.5 kg/Acre",
        yield: "10 - 12 MT/Acre",
        skus: "05g/10g",
      },
    },
    {
      name: "Zubaraj",
      type: "Hybrid",
      image: "/zubaraj.png",
      details: {
        sowingTime: "August-November",
        harvest: "50-60 days after sowing",
        fruitWeight: "3.0-3.5 kg",
        fruitType: "Green, white spotted",
        seedRate: "1.0 - 1.5 kg/Acre",
        yield: "10 - 12 MT/Acre",
        skus: "05g/10g",
      },
    },
  ];

  return (
    <div className="w-full h-auto bg-white">
      {/* Background and Header */}
      <div className="w-full relative">
        <Image
          className="w-full h-[450px] object-cover"
          src="/yellowfiberbanner.jpeg"
          alt="Yellow Fiber Banner"
        />
        <div className="absolute inset-0 flex justify-between p-6">
          <div className="text-white text-[52px] font-bold font-os capitalize self-center mx-auto">
            The Yellow Fiber
          </div>
          <div className="w-[50px] h-[50px] bg-white rounded-full shadow"></div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="w-[80%] mx-auto mt-8 flex items-center relative">
        <div className="flex items-center bg-[#f4f4f4] p-3 rounded-md gap-2 flex-grow-0">
          <button className="flex items-center bg-white p-2.5 rounded-[5px] gap-2.5">
            <FaFilter className="text-[#333333]" />
            <span className="text-[#333333] text-base font-normal font-dm">
              Filter
            </span>
          </button>
          <div className="flex items-center bg-white p-2.5 rounded-[5px] grow">
            <FaSearch className="text-[#333333]" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full outline-none text-[#333333] text-base font-normal font-dm"
            />
          </div>
        </div>

        {/* Centered Breadcrumb */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-[#333333] text-base font-normal font-dm">
          <FaHome />
          <span>/Products/Maize</span>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="w-[80%] mx-auto max-h-[1500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent pr-4">
        <div className="grid grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-[#f4f4f4] rounded-lg p-5 shadow-md">
              {/* Product Image */}
              <Image
                className="w-[236.87px] h-[300px] mx-auto"
                src={product.image}
                alt={product.name}
              />

              {/* Product Type */}
              <div className="text-[#ff7f3f] text-xs font-bold font-dm uppercase mt-4">
                {product.type}
              </div>

              {/* Product Name */}
              <div className="text-[#2f313c] text-[28px] font-bold font-dm mt-2">
                {product.name}
              </div>

              {/* Horizontal Line */}
              <hr className="border-t-2 border-gray-300 my-4" />

              {/* Product Details */}
              <div className="mt-4">
                <div className="grid grid-cols-3 text-[#2f313c] text-base font-dm gap-2">
                  {/* Labels */}
                  <div className="font-bold col-span-1">
                    Sowing Time
                    <br />
                    Harvest
                    <br />
                    Fruit Weight
                    <br />
                    Fruit Type
                    <br />
                    Seed Rate
                    <br />
                    Yield
                    <br />
                    SKUs
                  </div>

                  {/* Colons */}
                  <div className="col-span-1 text-center">
                    :
                    <br />:
                    <br />:
                    <br />:
                    <br />:
                    <br />:
                    <br />:
                  </div>

                  {/* Values */}
                  <div className="col-span-1 ">
                    {product.details.sowingTime}
                    <br />
                    {product.details.harvest}
                    <br />
                    {product.details.fruitWeight}
                    <br />
                    {product.details.fruitType}
                    <br />
                    {product.details.seedRate}
                    <br />
                    {product.details.yield}
                    <br />
                    {product.details.skus}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Image */}
      <Image
        className="w-full h-[100px] mt-12 object-cover"
        src="/yellowfiberbanner.jpeg"
        alt="Yellow Fiber Banner"
      />
    </div>
  );
};

export default YellowFiber;
