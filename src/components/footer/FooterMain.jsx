// import React from "react";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaXing,
//   FaStar,
//   FaX,
// } from "react-icons/fa6";

// const FooterMain = () => {
//   return (
//     <footer className="bg-white text-gray-800 text-sm mt-auto">
//       <div className="max-w-screen-xl mx-auto px-6 py-12">
//         {/* Columns */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//           {/* Services */}
//           <div>
//             <h4 className="text-lg mb-3 text-gray-600">Services</h4>
//             <ul className="space-y-2">
//               {[
//                 "Mobile App Development",
//                 "Fintech Mobile Apps",
//                 "Medical Mobile Apps",
//                 "Cross-Platform Apps",
//                 "Web Development",
//                 "Desktop Applications",
//                 "Legacy App Modernization",
//                 "Wearable Apps",
//                 "Medical Imaging Software",
//                 "Medical Device Software",
//                 "IT Consulting",
//                 "UX/UI Design",
//                 "Quality Assurance",
//               ].map((item) => (
//                 <li key={item}>
//                   <button
//                     className="hover:text-blue-600 hover:underline transition-all duration-300 text-left"
//                     onClick={() => console.log(`Navigate to ${item}`)}
//                   >
//                     {item}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Technologies */}
//           <div>
//             <h4 className="text-lg mb-3 text-gray-600">Technologies</h4>
//             <ul className="space-y-2">
//               {[
//                 "Artificial Intelligence",
//                 "Machine Learning",
//                 "Extended Reality",
//                 "Internet of Things",
//                 "Blockchain",
//               ].map((item) => (
//                 <li key={item}>
//                   <button
//                     className="hover:text-blue-600 hover:underline transition-all duration-300 text-left"
//                     onClick={() => console.log(`Navigate to ${item}`)}
//                   >
//                     {item}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Industries */}
//           <div>
//             <h4 className="text-lg mb-3 text-gray-600">Industries</h4>
//             <ul className="space-y-2">
//               {[
//                 "Financial Services",
//                 "Trading",
//                 "Healthcare",
//                 "Biotechnology",
//                 "Manufacturing",
//                 "Agriculture",
//                 "Enterprise",
//                 "Retail",
//                 "Logistics",
//                 "Maritime",
//                 "eLearning",
//                 "Telecom",
//                 "E-commerce",
//                 "Real Estate",
//               ].map((item) => (
//                 <li key={item}>
//                   <button
//                     className="hover:text-blue-600 hover:underline transition-all duration-300 text-left"
//                     onClick={() => console.log(`Navigate to ${item}`)}
//                   >
//                     {item}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="text-lg mb-3 text-gray-600">Company</h4>
//             <ul className="space-y-2">
//               {[
//                 "About Us",
//                 "Case studies",
//                 "Blog",
//                 "News",
//                 "Certifications",
//                 "Careers",
//                 "Privacy Policy",
//                 "Cookie Policy",
//                 "IS policy",
//                 "Attribution",
//                 "Contacts",
//               ].map((item) => (
//                 <li key={item}>
//                   <button
//                     className="hover:text-blue-600 hover:underline transition-all duration-300 text-left"
//                     onClick={() => console.log(`Navigate to ${item}`)}
//                   >
//                     {item}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Row */}
//         <div className="mt-10 border-t pt-6 flex flex-col lg:flex-row items-center justify-between text-xs text-gray-500">
//           <p className="text-center">© 2025 CodeClub. All rights reserved.</p>

//           <div className="flex items-center gap-4 mt-4 lg:mt-0">
//             {[
//               {
//                 icon: <FaX title="X (Twitter)" />,
//                 label: "X",
//                 hover: "hover:bg-black",
//               },
//               {
//                 icon: <FaLinkedinIn title="LinkedIn" />,
//                 label: "LinkedIn",
//                 hover: "hover:bg-[#0077b5]",
//               },
//               {
//                 icon: <FaFacebookF title="Facebook" />,
//                 label: "Facebook",
//                 hover: "hover:bg-[#1877f2]",
//               },
//               {
//                 icon: <FaXing className="rotate-180" title="Xing" />,
//                 label: "Xing",
//                 hover: "hover:bg-[#026466]",
//               },
//             ].map((item) => (
//               <button
//                 key={item.label}
//                 aria-label={item.label}
//                 title={item.label}
//                 className={`w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center transition-colors duration-300 ${item.hover}`}
//                 onClick={() => console.log(`${item.label} clicked`)}
//               >
//                 {item.icon}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterMain;

import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

const FooterMain = () => {
  return (
    <footer className="bg-white text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 border-t border-gray-200">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <h1 className="text-black font-bold text-2xl">Code Club</h1>
          <p className="text-sm">
            We build modern, scalable, and intelligent solutions that drive real
            value.
          </p>
          <div className="flex items-center gap-3 mt-4 text-gray-700">
            {/* Instagram */}
            <a href="https://www.instagram.com/codeclubb_?igsh=MWxpZjJ4OGFkNGN5YQ==">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=61578240841971&mibextid=wwXIfr&mibextid=wwXIfr">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
              </svg>
            </a>
            {/* Twitter */}
            {/* <a href="">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
              </svg>
            </a> */}
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/code-club-58b922375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800">Expertise</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[
              { name: "Web Development", path: "/service/web-development" },
              { name: "App Development", path: "/service/mobile-apps" },
              { name: "UI/UX Design", path: "/service/ui-ux" },
              { name: "Cyber Security", path: "/service/cyber-security" },
              { name: "Artificial Intelligence", path: "/service/ai-ml" },
              { name: "Internet Of Things (IOT)", path: "/service/iot" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-lg text-gray-800">Company</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[
              { name: "About Us", path: "/about" },
              { name: "Our Methodology", path: "/methodology" },
              { name: "Case Studies", path: "/case-studies" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-80">
          <h3 className="text-lg  text-gray-800 mb-2">Contact Us</h3>
          <p className="text-sm text-gray-500 mb-4">
            Reach out to us for collaboration or queries.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiMail className="text-blue-600 text-lg" />
              <div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=codeclubb1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-800 hover:underline"
                >
                  codeclubb1@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-blue-600 text-lg" />
              <div>
                <a
                  href="tel:+923140078748"
                  className="text-sm text-gray-800 hover:underline"
                >
                  +92 314 0078748
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaMagnifyingGlassLocation className="text-blue-600 text-4xl" />
              <div>
                <p className="text-sm text-gray-800">
                  Liberty Mall Opp: Airport runway, University Rd, Tehkal
                  Peshawar, 25000, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-xs">
        <p>
          © {new Date().getFullYear()} <Link to="/">CodeClub</Link>. All rights
          reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="https://maps.app.goo.gl/GSV6kStDkwHeHP9G6" target="_blank">
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterMain;
