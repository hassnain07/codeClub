import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXing,
  FaStar,
  FaX,
} from "react-icons/fa6";

const FooterMain = () => {
  return (
    <footer className="bg-white text-sm text-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Services */}
          <div>
            <h4 className="text-lg mb-3 text-gray-600">Services</h4>
            <ul className="space-y-2">
              {[
                "Mobile App Development",
                "Fintech Mobile Apps",
                "Medical Mobile Apps",
                "Cross-Platform Apps",
                "Web Development",
                "Desktop Applications",
                "Legacy App Modernization",
                "Wearable Apps",
                "Medical Imaging Software",
                "Medical Device Software",
                "IT Consulting",
                "UX/UI Design",
                "Quality Assurance",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg mb-3 text-gray-600">Technologies</h4>
            <ul className="space-y-2">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Extended Reality",
                "Internet of Things",
                "Blockchain",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg mb-3 text-gray-600">Industries</h4>
            <ul className="space-y-2">
              {[
                "Financial Services",
                "Trading",
                "Healthcare",
                "Biotechnology",
                "Manufacturing",
                "Agriculture",
                "Enterprise",
                "Retail",
                "Logistics",
                "Maritime",
                "eLearning",
                "Telecom",
                "E-commerce",
                "Real Estate",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg mb-3 text-gray-600">Company</h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Case studies",
                "Blog",
                "News",
                "Certifications",
                "Careers",
                "Privacy Policy",
                "Cookie Policy",
                "IS policy",
                "Attribution",
                "Contacts",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 border-t pt-6 flex flex-col lg:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2025 CodeClub. All rights reserved.</p>

          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            {[
              { icon: <FaX />, label: "Twitter/X", hover: "hover:bg-black" },
              {
                icon: <FaLinkedinIn />,
                label: "LinkedIn",
                hover: "hover:bg-[#0077b5]",
              },
              {
                icon: <FaFacebookF />,
                label: "Facebook",
                hover: "hover:bg-[#1877f2]",
              },
              {
                icon: <FaXing className="rotate-180" />,
                label: "Xing",
                hover: "hover:bg-[#026466]",
              },
            ].map((item, index) => (
              <button
                key={index}
                aria-label={item.label}
                className={`w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center transition-colors duration-300 ${item.hover}`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
