import React from "react";

const AvailableJobs = () => {
  const jobsData = [
    {
      category: "Engineering",
      jobs: [
        { title: "Research and Development (R&D) Manager", location: "Gazipur" },
        { title: "Quality Assurance Specialist", location: "Gazipur" },
        { title: "Environmental Scientist", location: "Gazipur" },
        { title: "Seed Research Scientist", location: "Gazipur" },
        { title: "Biotech Engineer", location: "Gazipur" },
      ],
    },
    {
      category: "Marketing",
      jobs: [
        { title: "Seed Distribution Manager", location: "Natore" },
        { title: "Marketing Coordinator", location: "Rajshahi" },
        { title: "Territory Officer", location: "Bogura" },
      ],
    },
    {
      category: "Finance",
      jobs: [
        { title: "Finance Manager", location: "Dhaka" },
        { title: "Accounts Executive", location: "Dhaka" },
      ],
    },
    {
      category: "Customer Service",
      jobs: [
        { title: "Call Center Executive", location: "Dhaka" },
        { title: "Customer Service Representative", location: "Remote" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Title and Location Filter */}
      <div className="text-center mb-10">
        {/* Title */}
        <h1 className="text-[#2f313c] text-3xl sm:text-4xl font-bold font-dm leading-tight">
          Available Jobs
        </h1>

        {/* Location Filter */}
        <button className="w-full sm:w-auto h-auto mx-auto mt-6 px-4 py-3 bg-[#eeeeee] rounded-[20px] flex justify-center items-center">
          <div className="flex items-center gap-1.5">
            <span className="text-[#ff7f3f] text-lg font-normal font-os">
              All Locations
            </span>
            <span className="text-[#ff7f3f]">▼</span>
          </div>
        </button>
      </div>

      {/* Job Listings */}
      <div className="flex justify-center">
        <div className="w-full max-w-[770px] flex flex-col gap-12">
          {jobsData.map((category, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Category Title */}
              <h2 className="text-black text-2xl font-bold font-dm leading-tight">
                {category.category}
              </h2>
              <div className="h-px bg-[#929292]"></div>

              {/* Job Listings */}
              {category.jobs.map((job, jobIndex) => (
                <div key={jobIndex} className="flex flex-col gap-2.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="text-[#ff7f3f] text-base font-normal font-dm">
                      {job.title}
                    </span>
                    <span className="text-[#7c7c7c] text-base font-normal font-dm">
                      {job.location}
                    </span>
                  </div>
                  <div className="h-px bg-[#929292]"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableJobs;
