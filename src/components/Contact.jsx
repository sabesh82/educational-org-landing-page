import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 py-16 md:py-20">
      <div className="max-w-4xl mx-auto bg-blue-300 rounded-xl border border-white p-6 sm:p-10 flex flex-col space-y-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center">
          Contact Us
        </h1>

        <p className="text-black text-center text-sm sm:text-base px-4">
          We'd love to hear from you! Enter your email below and we'll get in
          touch.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-xl mx-auto">
          <input
            type="email"
            className="bg-white px-4 py-2 w-full rounded-md text-black outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          <button className="h-10 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
