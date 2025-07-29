import React from "react";
import ServicesComponent from "./ServicesComponent";
import AI from "../../assets/ai_service.webp";
import mobile from "../../assets/mobileDevService.webp";
import web from "../../assets/webDevService.webp";

const services = [
  {
    title: "Artificial Intelligence and ML",
    desc: "Leverage the power of AI & ML to drive innovation and efficiency in your business. Our machine learning and AI development services experts build solutions with advanced insights and automation for making data-driven decisions.",
    icon: AI,
  },
  {
    title: "App Development",
    desc: "Our cloud managed services support your migration journey, enhancing your existing infrastructure, optimizing costs, or initiating new cloud-based strategies.",
    icon: mobile,
  },
  {
    title: "Web Development",
    desc: "CodeClub provides global IT staff augmentation services with several tech staffing solutions on demand. From UI/UX designers to developers, software architects to QA test engineers, we offer the top 3% of IT talent within 48 hours.",
    icon: web,
  },
];

const AllServices = () => {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4">
      <h1 align="center" className="mb-20 text-5xl font-bold text-gray-700">
        Fuel Your Growth with Our Services
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServicesComponent
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default AllServices;
