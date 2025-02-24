import React from "react";
import { FaFilter, FaSearch, FaHome } from "react-icons/fa"; // FontAwesome icons
import Image from '../ui/Image'; // Use your custom Image component or Next.js's next/image

const EchoFriend = () => {
  const products = [
    {
      name: "Antario",
      type: "BioPesticides",
      image: "/antario.png", // Image from public folder
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
      name: "Biomax",
      type: "BioPesticides",
      image: "/biomax.png", // Image from public folder
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
      name: "Dynamic",
      type: "BioPesticides",
      image: "/dynamic.png", // Image from public folder
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
      name: "Iycomax",
      type: "BioPesticides",
      image: "/iycomax.png", // Image from public folder
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
      name: "Fizimite",
      type: "BioPesticides",
      image: "/fizimite.png", // Image from public folder
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
      name: "Trichomax",
      type: "BioPesticides",
      image: "/trichomax.png", // Image from public folder
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
          src="/ecofriendbanner.jpeg" // Image from public folder
          alt="Eco Friend Header"
        />
        <div className="absolute inset-0 flex justify-between p-6">
          <div className="text-white text-[52px] font-bold font-os capitalize self-center mx-auto">
            The Green Nutrients
          </div>
          <div className="w-[50px] h-[50px] bg-white rounded-full shadow"></div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="w-[80%] mx-auto mt-8 flex items-center relative">
        <div className="flex items-center bg-[#f4f4f4] p-3 rounded-md gap-2 flex-grow-0">
          <button className="flex items-center bg-white p-2.5 rounded-[5px] gap-2.5">
            <FaFilter className="text-[#333333]" />
            <span className="text-[#333333] text-base font-normal font-dm">Filter</span>
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

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-[#333333] text-base font-normal font-dm">
          <FaHome />
          <span>/Products/Bio-Pesticides</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-[80%] mx-auto max-h-[1500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent pr-4">
        <div className="grid grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-[#f4f4f4] rounded-lg p-5 shadow-md">
              {/* Product Image */}
              <Image
                className="w-[236.87px] h-[300px] mx-auto"
                src={product.image} // Image from public folder
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

              <hr className="border-t-2 border-gray-300 my-4" />

              {/* Product Details */}
              <div className="mt-4">
                <div className="grid grid-cols-3 text-[#2f313c] text-base font-dm gap-2">
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
                  <div className="col-span-1 text-center">
                    :
                    <br />:
                    <br />:
                    <br />:
                    <br />:
                    <br />:
                    <br />:
                  </div>
                  <div className="col-span-1">
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
        src="/ecofriendbanner.jpeg" // Image from public folder
        alt="Eco Friend Footer"
      />
    </div>
  );
};

export default EchoFriend;
