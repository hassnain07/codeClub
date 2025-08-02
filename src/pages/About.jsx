import React from "react";
import aboutBg from "../assets/aboutBg.jpg";
import {
  FaCalendarAlt,
  FaUserCheck,
  FaLaptopCode,
  FaHandshake,
} from "react-icons/fa";

const numbersData = [
  {
    icon: <FaCalendarAlt size={48} className="text-blue-600" />,
    value: "10+",
    title: "Years Experience",
  },
  {
    icon: <FaUserCheck size={48} className="text-blue-600" />,
    value: "300+",
    title: "Happy Clients",
  },
  {
    icon: <FaLaptopCode size={48} className="text-blue-600" />,
    value: "300+",
    title: "Projects Completed",
  },
  {
    icon: <FaHandshake size={48} className="text-blue-600" />,
    value: "100%",
    title: "Satisfaction",
  },
];

const About = () => {
  return (
    <div className="mt-25 px-5 md:px-10 lg:px-20">
      {/* --- Header Section --- */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-[#002e6e]">
          About <span className="text-blue-600">Us</span>
        </h2>
        <p className="mt-4 text-xl font-medium text-gray-600">
          Empowering Businesses with Tailored Digital Solutions <br />
          that Drive Growth and Innovation.
        </p>
      </div>

      {/* --- Info Section --- */}
      <div className="flex flex-col lg:flex-row gap-10 py-10 border-t border-b border-gray-200">
        <img
          src={aboutBg}
          alt="About"
          className="lg:w-1/2 w-full rounded-xl object-cover shadow-md"
        />
        <div className="flex flex-col justify-center gap-5">
          <h3 className="text-3xl font-bold text-gray-700">
            Empowering Growth Through Smart Digital Solutions
          </h3>
          <p className="text-gray-600 text-lg leading-8 text-justify">
            At Code Club, we are passionate technologists driven by innovation
            and excellence. Our team of experts — skilled in app development,
            web development, AI/ML, cybersecurity, and IoT — crafts intelligent
            digital solutions that power the future. <br /> <br />
            From sleek mobile apps to robust platforms, smart AI-driven systems
            to secure infrastructures, and IoT-powered ecosystems — we bring
            ideas to life with precision and creativity.
          </p>
        </div>
      </div>

      {/* --- Numbers Section --- */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Real People. Real Relationships.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Building trust through authentic connections, our team combines
          expertise with a personal touch to deliver solutions that truly
          matter.
        </p>

        <section className="py-12 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {numbersData.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center space-y-3 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 py-8 px-4 border"
              >
                {item.icon}
                <h3 className="text-4xl font-bold text-gray-800">
                  {item.value}
                </h3>
                <p className="text-gray-500 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* --- Business Tech Section --- */}
      <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-10 mt-16 shadow">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Helping Businesses With Tech
        </h2>
        <p className="text-gray-700 text-lg leading-8 text-justify max-w-4xl mx-auto">
          At Zetasoft IT Solutions, we empower businesses with the technology
          they need to stay competitive in an ever-evolving digital landscape.
          Our team works closely with clients to understand their goals and
          challenges, offering custom IT solutions that streamline processes and
          drive innovation. <br />
          <br />
          From web development to ERP systems, we ensure that every solution is
          crafted to meet specific business needs. Leveraging the latest
          technologies and trends, we help businesses stay ahead of the curve
          and lay the foundation for long-term success and growth.
        </p>
      </div>
    </div>
  );
};

export default About;
