import React from 'react';

const VisionMission = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-12 flex flex-col items-center gap-20 px-4">
      <section className="flex flex-col items-center gap-6 w-full">
        <h2 className="font-dm font-bold text-3xl md:text-4xl leading-tight text-center text-[#006838]">
          Vision
        </h2>
        <p className="w-full font-os font-normal text-base md:text-xl leading-relaxed text-center text-[#2f313c]">
          To establish effective agricultural solutions for communities, empowering the lives of those who
          produce and those who consume.
        </p>
      </section>
      <section className="flex flex-col items-center gap-6 w-full">
        <h2 className="font-dm font-bold text-3xl md:text-4xl leading-tight text-center text-[#006838]">
          Mission
        </h2>
        <p className="w-full font-os font-normal text-base md:text-xl leading-relaxed text-center text-[#2f313c]">
          Empowering producers with reliable agricultural innovations & facilitations, and ensuring food & nutritional safety for the consumers.
        </p>
      </section>
    </div>
  );
};

export default VisionMission;
