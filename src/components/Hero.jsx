import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center  z-10 bg-gradient-to-r from-[#1a002d] to-black"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 px-4">
        {/* Text Content*/}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Creating Change Through the,
            <span className="text-blue-600"> Power of Education</span>
            <span>📚</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Together, we bring stories and knowledge to communities, inspiring
            lifelong learning and growth
          </p>

          <div className="flex items-center space-x-5 mt-8">
            <input
              placeholder="email address"
              type="email"
              className="bg-gray-700 px-2 w-[70%] rounded text-white h-10"
            />
            <button className="px-3  bg-blue-500 text-white rounded h-10 hover:bg-blue-600 hover:-translate-y-0.5 cursor-pointer">
              click
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/hero2.jpg"
            alt="Book Hero"
            className="w-full max-w-sm md:max-w-md mix-blend-lighten"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
