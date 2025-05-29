import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className=" min-h-screen items-center justify-center relative"
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 px-2 max-w-6xl mx-auto">
        <div className="w-full flex items-center justify-center">
          <img
            src="/src/assets/services.png"
            alt="services"
            className="w-[85%] h-[90%] object-cover rounded-2xl mt-15 uneven-blend"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-10">
          <h1 className="text-center items-center text-3xl md:text-5xl font-bold font-mono mb-5">
            Our Services
          </h1>
          <p className="w-[90%] text-justify md:text-center text-gray-400 hover:text-white transition-colors">
            "We offer a range of community-driven services to promote literacy,
            including book donations, reading programs, and educational
            partnerships—all designed to make learning accessible and inspiring
            for everyone."
          </p>
          <div className="mt-15">
            <button className="text-blue-500 hover:text-blue-600 text-md md:text-2xl hover:-translate-y-0.5 cursor-pointer">
              To Donate➜
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
