import React from 'react';

const FullStackDeveloper = () => {
  return (
    <div className="mx-[435px] flex">
    <div className="w-full max-w-[1728px] mx-auto p-6 relative bg-white">
      {/* Back to Jobs Description */}
      <div className="text-[#ea5c2b] text-base font-normal font-dm cursor-pointer mb-4">
        Back to Jobs Description
      </div>

      {/* Job Title and Location */}
      <div className="mb-6">
        <h1 className="text-[#2f313c] text-4xl font-bold font-dm leading-[54px]">
          Full Stack Developer – Project Alpha
        </h1>
        <p className="text-[#2f313c] text-base font-normal font-dm">
          Full-Time, San Francisco, CA<br />
          Employees Can Work Remotely
        </p>
        <div className="my-4 border-b border-[#929292]"></div>
      </div>

      {/* Form Fields */}
      <div className="space-y-9">
        {/* Full Name */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#929292] text-xl font-bold font-dm">
            Full Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Write your name here"
            className="px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-xs text-[#929292] font-os"
          />
        </div>

        {/* Resume */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#7c7c7c] text-base font-normal font-dm">
            Resume/CV * (PDF, Word, TXT, 6MB Maximum)<span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            className="px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-xs text-[#929292] font-os"
          />
        </div>

        {/* Current/Previous Job Title */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#7c7c7c] text-base font-normal font-dm">
            Current/Previous Job Title
          </label>
          <input
            type="text"
            className="px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-xs text-[#929292] font-os"
          />
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#929292] text-base font-normal font-dm">
            Years of Experience
          </label>
          <input
            type="text"
            className="px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-xs text-[#929292] font-os"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#929292] text-xl font-bold font-dm">
            Email
          </label>
          <input
            type="email"
            placeholder="Write your email here"
            className="px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-xs text-[#929292] font-os"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#929292] text-xl font-bold font-dm">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="(+880) XXXX XXX XXX"
            className="px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-xs text-[#929292] font-os"
          />
        </div>

        {/* LinkedIn Account */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#929292] text-xl font-bold font-dm">
            LinkedIn Account
          </label>
          <input
            type="url"
            placeholder="https://www.linkedin.com/in/john-doe"
            className="px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-xs text-[#929292] font-os"
          />
        </div>

        {/* Upload Photo */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#7c7c7c] text-base font-normal font-dm">
            Select a photo of you... (6MB Maximum)
          </label>
          <button className="px-[30px] py-5 bg-[#eeeeee] rounded-[20px] text-[#ea5c2b] text-lg font-os">
            Upload Photo
          </button>
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2">
          <label className="text-[#333333] text-base font-bold font-os">
            Message
          </label>
          <textarea
            placeholder="Write your message here"
            className="h-[202px] px-[18px] py-6 rounded-[15px] border-2 border-[#eeeeee] text-xs text-[#929292] font-os"
          />
        </div>
      </div>

      {/* Agreement Checkbox */}
      <div className="flex items-center space-x-2 mt-6">
        <input type="checkbox" className="w-5 h-5" />
        <p className="text-black text-base font-normal font-dm">
          I have read and agree to the <span className="text-[#ea5c2b] cursor-pointer">privacy policy</span> and terms of <span className="text-[#ea5c2b] cursor-pointer">service</span>.
        </p>
      </div>

      {/* Apply Button */}
      <div className="mt-8 text-center">
        <button className="w-[180px] h-[53px] bg-[#ea5c2b] rounded-[20px] text-white text-lg font-bold font-os">
          Apply for Job
        </button>
      </div>
    </div>
    </div>
  );
};

export default FullStackDeveloper;
