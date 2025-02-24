import React from 'react';
import Image from '../ui/Image'; // Use your custom Image component or Next.js Image component

const Executive = () => {
  const teamMembers = [
    {
      img: "/exec1.png", // Image from public folder
      name: "Graeme Plowman",
      role: "Chief Strategy Officer",
    },
    {
      img: "/exec2.png", // Image from public folder
      name: "Simon Kent",
      role: "Managing Director, Developer & Media",
    },
    {
      img: "/exec3.png", // Image from public folder
      name: "Toby Balazs",
      role: "Chief Operating Officer, Residential",
    },
    {
      img: "/exec4.png", // Image from public folder
      name: "Trent Casson",
      role: "Managing Director, Residential",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 font-dm">Executive Team</h2>

      {/* Team members container */}
      <div className="flex flex-wrap justify-center items-start gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-[210px] flex flex-col items-center gap-4">
            <Image
              className="w-[100px] h-[100px] rounded-[30px] object-cover"
              src={member.img} // Image from public folder
              alt={member.name}
              width={360}
              height={368}
            />
            <div className="flex flex-col items-center gap-2.5">
              <div className="text-center text-black text-xl font-bold tracking-tight font-dm">
                {member.name}
              </div>
              <div className="text-center text-[#626469] text-base font-semibold tracking-tight font-os">
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executive;
