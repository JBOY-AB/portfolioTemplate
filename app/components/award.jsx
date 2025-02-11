import React from "react";

const awards = [
  {
    title: "Best Designer of the Month",
    year: "2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "The True Gem",
    year: "2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    title: "First Class Performer",
    year: "2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "Customers Favourite",
    year: "2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
  },
];

const Award = () => {
  return (
    <section id="awards" className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
        {/* Title Section */}
        <div>
          <h5 className="text-gray-400 uppercase tracking-widest text-sm mb-2 font-outfit">
            Achievements
          </h5>
          <h2 className="text-5xl font-bold font-outfit">
            Awa<span className="text-purple-500">rds</span>
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border border-transparent transition-all transform hover:scale-105 hover:border-purple-500 bg-gray-900`}
            >
              <h3 className="text-xl font-semibold font-outfit">{award.title}</h3>
              <p className="text-gray-400 text-sm mb-2 font-open-sans">{award.year}</p>
              <p className="text-gray-300 font-open-sans">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Award;
