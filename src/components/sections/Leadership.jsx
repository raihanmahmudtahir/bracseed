import React from "react";
import Image from '../ui/Image';

const Leadership = () => {
  const teamMembers = [
    {
      img: "/lead1.jpeg", // Path from the public folder
      name: "Antony Catalano",
      role: "Executive Chairman",
    },
    {
      img: "/lead2.jpeg", // Path from the public folder
      name: "Antony Strong",
      role: "Director, ANZ Bank",
    },
    {
      img: "/lead3.jpeg", // Path from the public folder
      name: "Jeff Howard",
      role: "Director, Seven West Media",
    },
    {
      img: "/lead4.jpeg", // Path from the public folder
      name: "Peter Landos",
      role: "Director, Thorney",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-dm">Leadership</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 font-os">
          Our esteemed Board Members bring a wealth of expertise and vision,
          guiding our journey towards agricultural excellence with strategic
          insights and pioneering agricultural solutions.
        </p>
        <div className="flex justify-center items-start gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center gap-4 w-[270px]"
            >
              <div className="w-[170px] h-[180px] mb-4 rounded-[30px] overflow-hidden">
                <Image
                  src={member.img} // Image from public folder
                  alt={member.name}
                  width={270}
                  height={278}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-black text-xl font-bold tracking-tight font-dm">
                  {member.name}
                </h3>
                <p className="text-[#626469] text-base font-semibold tracking-tight font-os">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
