import React from "react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };

  return (
    <section className="w-full px-2 bottom-0 left-0 right-0">
      <div className="p-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center">
        <div className="grid grid-col-1 md:grid-cols-4 gap-4 gap-y-3">
          <div>
            <h2 className="font-bold text-lg mb-2 text-blue-600">Company</h2>
            {footerLinks.company.map((link, key) => (
              <div
                key={key}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                {link.name}
              </div>
            ))}
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2 text-blue-600">GetHelp</h2>
            {footerLinks.getHelp.map((link, key) => (
              <div
                key={key}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                {link.name}
              </div>
            ))}
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2 text-blue-600">Support</h2>
            {footerLinks.support.map((link, key) => (
              <div
                key={key}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                {link.name}
              </div>
            ))}
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2 text-blue-600">Contact</h2>
            {footerLinks.contact.map((link, key) => (
              <div
                key={key}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0 text-teal-500">
          copyrights ©️ 2025
        </div>
      </div>
    </section>
  );
};

export default Footer;
