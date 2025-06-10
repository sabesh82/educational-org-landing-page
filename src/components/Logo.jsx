import React from "react";
import logo1 from "../../public/assets/about_logo1.png";
import logo2 from "../../public/assets/about_logo2.png";
import logo3 from "../../public/assets/about_logo3.png";
import logo4 from "../../public/assets/about_logo4.png";
import logo5 from "../../public/assets/about_logo5.png";
import logo6 from "../../public/assets/about_logo6.png";

const Logo = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <div
      className="w-full overflow-hidden max-w-7xl mx-auto gap-8 py-10 px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col 
                   md:items-center items-start"
    >
      <div
        className="w-[250px] shrink-0 px-5 text-white border-l-4 border-blue-500
                 bg-black py-2 z-10 sm:text-base text-xl font-semibold text-left"
      >
        Books that <br />
        spark minds
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, key) => (
          <img
            key={key}
            src={logo}
            alt="logo"
            className="mx-12 h-8 w-36 object-contain opacity-80 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default Logo;
