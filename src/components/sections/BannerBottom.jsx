import React from 'react';
import Container from '../ui/Container';

const BannerBottom = () => {
  return (
    <section className="mt-[-15px] font-dm text-white text-center">
      <Container>
        <div className="bg-[#006838] py-10 sm:py-14 md:py-20 rounded-br-[70px] rounded-bl-[70px] banner-shadow">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10">
            BRAC Seed and Agro Enterprise
          </h2>
          <p className="max-w-full sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[972px] mx-auto px-4 sm:px-0">
            At BRAC Seed, we're driven by the belief that innovation in agriculture can shape a
            brighter tomorrow. BRAC Seed aims to spread the joy of harvesting at every house by
            maximizing yields and minimizing risks for farmers, empowering a sustainable agriculture
            for generations to come.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default BannerBottom;
