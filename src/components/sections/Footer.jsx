import React from 'react';
import Image from '../ui/Image'; // Use your custom Image component
import Container from '../ui/Container';

const Footer = () => {
  return (
    <div
      className="w-full px-4 py-10 sm:px-8 sm:py-16 flex flex-col justify-center items-center gap-10 relative bg-[#006838]"
      style={{
        backgroundImage: `url(/footer_desktop12.png)`, // Image from public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-[#006838] opacity-75"></div>

      {/* Desktop View */}
      <div className="relative z-10 w-full max-w-[1170px] hidden sm:flex flex-col sm:flex-row justify-between items-start">
        <div className="flex flex-col justify-start items-start gap-8">
          {/* Logo Section */}
          <div className="w-48 h-12">
            <Image
              src="/footer_logo.png" // Image from public folder
              alt="BRAC Seed Logo"
              width={194}
                height={45}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-start items-start gap-8 sm:gap-16 mt-8 sm:mt-0">
          {/* Left Column Links */}
          <div className="flex flex-col justify-start items-start gap-4">
            <a href="#" className="text-white text-base font-normal leading-relaxed">
              Home
            </a>
            <a href="#" className="text-white text-base font-normal leading-relaxed">
              About Us
            </a>
            <a href="#" className="text-white text-base font-normal leading-relaxed">
              R&D
            </a>
            <a href="#" className="text-white text-base font-normal leading-relaxed">
              Products
            </a>
          </div>

          {/* Right Column Links */}
          <div className="flex flex-col justify-start items-start gap-4">
            <a href="#" className="text-white text-base font-normal leading-relaxed">
              News & Events
            </a>
            <a href="#" className="text-white text-base font-normal leading-relaxed">
              Career
            </a>
            <a href="#" className="text-white text-base font-normal leading-relaxed">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative z-10 w-full sm:hidden flex flex-col items-center gap-4">
        {/* Logo Section */}
        <div className="w-[214.37px] h-[50px] relative">
          <Image
            src="/footer_logo.png" // Image from public folder
            alt="BRAC Seed Logo"
            width={194}
            height={45}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Mobile View Text */}
        <div className="w-[336px] text-center text-white text-base font-medium font-dm leading-snug">
          Moving beyond the traditional listings model to become a true property marketplace
        </div>

        {/* Navigation Links */}
        <div className="w-full flex-wrap justify-center items-start gap-[15px] inline-flex">
          <div className="text-white text-base font-normal font-os leading-none">
            &gt; Home
          </div>
          <div className="text-white text-base font-normal font-os leading-none">
            &gt; News and Events
          </div>
          <div className="text-white text-base font-normal font-os leading-none">
            &gt; About
          </div>
          <div className="text-white text-base font-normal font-os leading-none">
            &gt; R&D
          </div>
          <div className="text-white text-base font-normal font-os leading-none">
            &gt; Contact
          </div>
          <div className="text-white text-base font-normal font-os leading-none">
            &gt; Products
          </div>
        </div>

        {/* Social Media Icons and Footer Text */}
        <div className="w-full flex-col justify-center items-center gap-[15px] inline-flex mt-4">
          <div className="flex justify-center items-center gap-5">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" /> {/* Image from public folder */}
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" /> {/* Image from public folder */}
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/x.svg" alt="X (formerly Twitter)" width={24} height={24} className="w-6 h-6" /> {/* Image from public folder */}
            </a>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-white mt-4"></div>

          {/* Footer Text */}
          <div className="self-stretch text-center text-white text-xs font-normal font-os leading-none mt-4">
            BRAC Seed © 2024, All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Divider Line for Desktop */}
      <div className="relative z-10 w-full border-t border-white mt-8 hidden sm:block"></div>

      {/* Footer Section for Desktop */}
      <Container>
        <div className="relative z-10 w-full hidden sm:flex flex-col sm:flex-row justify-between items-center mt-4">
          <div className="text-white text-sm sm:text-base font-normal leading-snug">
            BRAC Seeds © 2024, All Rights Reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 mt-4 sm:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" /> {/* Image from public folder */}
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" /> {/* Image from public folder */}
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/x.svg" alt="X (formerly Twitter)" width={24} height={24} className="w-6 h-6" /> {/* Image from public folder */}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
