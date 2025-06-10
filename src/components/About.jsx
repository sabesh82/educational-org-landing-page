import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex pt-10 justify-center items relative "
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-x-20 space-y-4">
        <div className="flex flex-col gap-5 w-full">
          <div className="w-full p-6 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl shadow-lg border-l-4 border-blue-500">
            <h1 className="text-3xl font-bold text-blue-400 mb-3">
              Who We Are
            </h1>
            <p className="text-gray-200 leading-relaxed tracking-wide">
              We are a passionate team dedicated to spreading the joy of reading
              and improving literacy in communities that need it most. Through
              book donations, programs, and support, we work to open doors to
              knowledge and opportunity for everyone.
            </p>
          </div>

          <div className="w-full p-6 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl shadow-lg border-l-4 border-green-500">
            <h1 className="text-3xl font-bold text-green-400 mb-3">Our Goal</h1>
            <p className="text-gray-200 leading-relaxed tracking-wide">
              To make quality books accessible to underserved communities.
            </p>
          </div>

          <div className="w-full p-6 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl shadow-lg border-l-4 border-purple-500">
            <h1 className="text-3xl font-bold text-purple-400 mb-3">
              What We Do
            </h1>
            <p className="text-gray-200 leading-relaxed tracking-wide">
              We collect and share books with communities in need. We run
              reading programs to help people of all ages improve their reading
              skills. We work with schools and volunteers to ensure everyone has
              access to the power of stories.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            src="/assets/about1.jpg"
            alt="About Us"
            className="w-full h-auto object-cover rounded-2xl uneven-blend"
          />
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-md md:text-2xl cursor-pointer">
          more about us➜
        </button>
      </div>
    </section>
  );
};

export default About;
