import React from "react";

const SeedResearchAssistant = () => {
  return (
    <div className="mx-[435px] flex">
    <div className="w-full max-w-[1728px] mx-auto bg-white p-6">
      {/* Back to All Jobs */}
      <div className="text-[#ea5c2b] text-base font-normal font-dm cursor-pointer mb-4">
        Back to All Jobs
      </div>

      {/* Job Title and Location */}
      <div className="mb-6">
        <h1 className="text-[#2f313c] text-4xl font-bold font-dm leading-[54px]">
          Seed Research Scientist
        </h1>
        <p className="text-[#2f313c] text-base font-normal font-dm">
          Full-Time, Gazipur, Dhaka
        </p>
        <div className="my-4 border-b border-[#929292]"></div>
      </div>

      {/* Job Description */}
      <div className="mb-6 text-[#2f313c]">
        <p className="text-base font-normal font-dm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla eget elit vel eros efficitur vulputate. Duis ac ex vel velit cursus suscipit. Phasellus gravida tellus quam. Ut tristique neque in est feugiat tincidunt.
        </p>

        {/* About the Job */}
        <h2 className="text-4xl font-bold font-dm leading-[54px] mt-6">
          About the Job
        </h2>
        <p className="text-base font-normal font-dm mt-4">
          Curabitur malesuada commodo leo in ultrices. Nullam a odio vel urna feugiat fermentum. Suspendisse quis auctor magna. Nulla sodales finibus elementum. Cras porttitor tincidunt, luctus euismod dui.
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Praesent molestie neque ac lectus eleifend auctor.</li>
          <li>Curabitur non erat dignissim, ullamcorper est ac, ullamcorper neque.</li>
          <li>Ut mattis metus a aliquet tristique.</li>
          <li>Ut condimentum purus euismod, sollicitudin massa et, finibus dui.</li>
        </ul>

        {/* About You */}
        <h2 className="text-4xl font-bold font-dm leading-[54px] mt-6">
          About You
        </h2>
        <p className="text-base font-normal font-dm mt-4">
          We're looking for an experienced candidate... Pellentesque viverra urna pretium, laoreet enim at, tempor ex. Vivamus consectetur massa nunc, sit amet pellentesque metus porttitor sit amet. In vitae tortor ex. Suspendisse tristique tincidunt laoreet. Integer sit amet nunc in diam porta commodo.
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Aenean pretium velit vitae eros blandit, bibendum pharetra justo elementum.</li>
          <li>Cras malesuada lacus pretium felis pulvinar, quis commodo velit feugiat.</li>
          <li>Vestibulum vulputate turpis in risus tincidunt efficitur.</li>
          <li>Sed placerat massa tempus, auctor nunc ut, aliquet ante.</li>
          <li>Nam rutrum eros ac dignissim placerat.</li>
        </ul>

        {/* Job Reference */}
        <div className="mt-10 text-[#929292] text-base font-normal font-dm">
          Job Reference #1003, Posted on 14 September 2020
        </div>
        <div className="my-4 border-b border-[#929292]"></div>
      </div>

      {/* Apply Now Button */}
      <div className="mt-8 text-center">
        <button className="w-40 h-12 bg-[#ea5c2b] text-white rounded-full text-lg font-bold font-os">
          Apply Now
        </button>
      </div>

      {/* Refer Someone */}
      <div className="mt-6 text-center">
        <span className="text-[#929292]">Recruiting firm or an employee? </span>
        <span className="text-[#ff7f3f] cursor-pointer">Refer someone</span>
      </div>
    </div>
    </div>
  );
};

export default SeedResearchAssistant;
