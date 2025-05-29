import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 border-b border-white/30 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-25 px-5 sm:px-7">
        {/*for logo*/}
        <div className="flex gap-0 items-center cursor-pointer">
          <div className="h-6 w-6 bg-indigo-600 rotate-45 -mr-2 hover:opacity-75 transition-opacity"></div>
          <div className="h-6 w-6 bg-transparent border  rotate-45 hover:opacity-75 transition-opacity z-20"></div>
          <div className="h-6 w-6 bg-indigo-600 rotate-45 -ml-2 hover:opacity-75 transition-opacity"></div>
        </div>

        {/*mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/*for desktop menu*/}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link, key) => (
            <a
              href={link.href}
              key={key}
              onClick={() => setActiveLink(link.href)}
              className={`text:sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                          hover:after:w-full after:bg-blue-600 after:transition-all ${
                            activeLink === link.href
                              ? "text-blue-600 after:w-full"
                              : "text-white hover:text-gray-300"
                          }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/*desktop button*/}
        <button className="hidden md:block px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <a href="#">Explore</a>
        </button>
      </div>

      {/*mobile menu*/}
      <div>
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-500 py-4 ">
            <div className="container mx-auto px-4 space-y-3">
              {navLinks.map((link, key) => (
                <a
                  key={key}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  href={link.href}
                  className={`block text-sm font-medium py-2 ${
                    activeLink === link.href
                      ? "text-blue-600"
                      : "text-gray-500  hover:text-gray-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <button className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <a href="#">Explore</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
