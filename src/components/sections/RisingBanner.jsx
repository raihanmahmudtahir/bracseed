import React, { useState } from 'react';
import Image from '../ui/Image'; // Use your custom Image component

const RisingBanner = () => {
  const [expanded, setExpanded] = useState(false); // State to toggle the content expansion

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const textContent = `
    Brac Seed & Agro Enterprises has taken a progressive step by successfully introducing its innovative Bio-Pesticide Category, marking a revolutionary advancement in Bangladesh's agriculture. This historic event was hosted at the esteemed Auditorium of the Brac Centre, in Dhaka on Sunday, as per a press statement issued by the organisation. It addressed vital concerns such as farmer health, consumer safety, eco-friendliness, beneficial insect protection, food security, and climate resilience. Under the Bio-Pesticide product category, Brac Seed & Agro launched Lycomax, Dynamic, Tricomax, Cuetrac, Zonatrac, Biomax, and Yellow Glue Board in the Bangladesh market. Each product offers unique effectiveness against harmful pests, ensuring the protection of healthy crop production. Esteemed dignitaries, including regulatory bodies and industry leaders, graced the event with their presence. Tamara Hasan Abed, managing director of Brac Enterprises, said, "Today signifies a remarkable leap toward a more sustainable and prosperous agricultural sector in Bangladesh." "Our Bio-Pesticide Category underlines our unwavering commitment to providing environmentally friendly farming solutions, ensuring the health of our farmers and consumers. We are excited to witness the positive impact it will have on our agricultural landscape." 
    Sharifuddin Ahmed, Deputy Director, quality control department, Plant Protection Wing, said, "We are delighted to see Brac is stepping up to launch bio-pesticides. Seeing this kind of initiative, I am really hopeful of the agriculture sector in our country. We believe that this international-quality bio-pesticide will reach every farmer's house in the country."
  `;

  const maxVisibleCharacters = 600;
  const isTextClamped = textContent.length > maxVisibleCharacters;
  const visibleText = expanded ? textContent : `${textContent.slice(0, maxVisibleCharacters)}...`;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1170px] h-[452px] rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[15px] rounded-br-[15px] flex justify-start items-start gap-9">
        {/* Image Section */}
        <Image
          className="w-[672px] h-[452px] rounded-[30px] border border-[#f4f4f4]"
          src="/rising_business_post1.png" // Direct path from the public folder
          alt="BRAC Seed Event"
        />

        {/* Text Section */}
        <div className="flex-grow pt-9 pb-6 flex flex-col justify-start items-start gap-9">
          {/* Title */}
          <div className="self-stretch flex items-start gap-[30px]">
            <div className="flex-grow h-[33px] flex items-start gap-[30px]">
              <div className="text-black text-base font-bold font-['DM Sans'] leading-snug">
                BRAC Seed introduces bio-pesticide category to transform agriculture
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-normal">
            {visibleText}
          </div>

          {/* Show "See more" if text is clamped */}
          {isTextClamped && (
            <div className="self-stretch">
              <button onClick={toggleExpanded} className="text-[#ff7f3f] text-base font-normal font-['DM Sans'] leading-normal">
                {expanded ? 'See less' : 'See more'}
              </button>
              <span className="text-[#ff7f3f] text-base font-light font-['Inter'] leading-normal">
                {expanded ? '↑' : '→'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RisingBanner;
