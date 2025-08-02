import React, { useState } from "react";
import mobImg from "../assets/mobileService.webp";
import StatsMain from "../components/statsCard/statsMain";
import FeatureCard from "../components/expertiseCard/FeatureCard";
import TechComp from "../components/techComp/TechComp";
import {
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandFirebase,
} from "react-icons/tb";
import {
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiFlutter,
} from "react-icons/si";
import IndComp from "../components/industryComp/IndComp";

const FeatureData = {
  title: "Native App Development",
  items: ["Mobile banking apps", "Fitness tracking apps", "Gaming apps"],
};

const Service = () => {
  const [selected, setSelected] = useState("frameworks");

  const tabOptions = [
    { id: "frameworks", label: "Development Frameworks" },
    { id: "langs", label: "Languages" },
    { id: "mobDev", label: "Mobile Development" },
    { id: "database", label: "Database" },
    { id: "devops", label: "DevOps & Cloud" },
  ];

  const iconsByTab = {
    frameworks: [TbBrandReactNative, TbBrandNextjs],
    langs: [SiJavascript],
    mobDev: [SiFlutter, TbBrandReactNative],
    database: [SiPostgresql],
    devops: [TbBrandFirebase, SiDocker],
  };
  return (
    <div className="mt-15 py-10">
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.4)), url(${mobImg})`,
        }}
        className="w-full flex flex-col justify-center items-center text-center px-5 py-28 text-white bg-cover bg-center bg-no-repeat"
      >
        <h1 className="font-berkshire text-[40px] leading-tight md:text-6xl md:leading-[70px] max-w-4xl">
          Mobile Apps Development
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl">
          Transform your ideas into dynamic mobile applications with our Mobile
          App Development services. We create custom iOS and Android apps using
          Swift, Kotlin, and tools like React Native and Flutter—ensuring high
          performance and a native-like user experience across all devices.
        </p>
      </section>

      <div className="bg-blue-100 p-10">
        <div className="flex flex-row gap-10 w-full h-full px-10 py-10">
          <StatsMain
            number="100+"
            label="DELIVERED PROJECTS"
            title="Successfully Delivered Projects"
            description="We've helped numerous startups and established businesses to launch their products or revise existing solutions."
          />
          <StatsMain
            number="100+"
            label="DELIVERED PROJECTS"
            title="Successfully Delivered Projects"
            description="We've helped numerous startups and established businesses to launch their products or revise existing solutions."
          />
          <StatsMain
            number="100+"
            label="DELIVERED PROJECTS"
            title="Successfully Delivered Projects"
            description="We've helped numerous startups and established businesses to launch their products or revise existing solutions."
          />
        </div>
        <div className="flex flex-row gap-10  w-full h-full px-10 py-10">
          <StatsMain
            number="100+"
            label="DELIVERED PROJECTS"
            title="Successfully Delivered Projects"
            description="We've helped numerous startups and established businesses to launch their products or revise existing solutions."
          />
          <StatsMain
            number="100+"
            label="DELIVERED PROJECTS"
            title="Successfully Delivered Projects"
            description="We've helped numerous startups and established businesses to launch their products or revise existing solutions."
          />
          <StatsMain
            number="100+"
            label="DELIVERED PROJECTS"
            title="Successfully Delivered Projects"
            description="We've helped numerous startups and established businesses to launch their products or revise existing solutions."
          />
        </div>
      </div>
      <div className="p-20">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight  uppercase">
          CodeClub Mobile Apps Development expertise
        </h1>

        <div className="flex flex-row gap-10 mt-15 h-100">
          <FeatureCard title={FeatureData.title} items={FeatureData.items} />
          <FeatureCard title={FeatureData.title} items={FeatureData.items} />
          <FeatureCard title={FeatureData.title} items={FeatureData.items} />
        </div>
        <div className="flex flex-row gap-10 mt-15 h-100">
          <FeatureCard title={FeatureData.title} items={FeatureData.items} />
          <FeatureCard title={FeatureData.title} items={FeatureData.items} />
          <FeatureCard title={FeatureData.title} items={FeatureData.items} />
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full h-full bg-indigo-900 text-white p-10">
        <h1 className="uppercase font-bold text-5xl">Our Tech Stack</h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-start rounded-full text-sm gap-2">
          {tabOptions.map(({ id, label }) => (
            <div className="flex items-center" key={id}>
              <input
                type="radio"
                name="options"
                id={id}
                className="hidden peer"
                checked={selected === id}
                onChange={() => setSelected(id)}
              />
              <label
                htmlFor={id}
                className="cursor-pointer rounded-full py-2 px-6 text-lg text-white transition-colors duration-200 peer-checked:bg-indigo-600 peer-checked:text-white"
              >
                {label}
              </label>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 mt-10">
          {iconsByTab[selected].map((IconComponent, index) => (
            <TechComp key={index} Icon={IconComponent} />
          ))}
        </div>
      </div>

      <div className="w-full h-full p-20">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight  uppercase">
          our expertise extends across <br />{" "}
          <span className="text-blue-600">industries</span>
        </h1>
        <p className="w-2/3 mt-5 text-gray-800 text-xl tracking-wider">
          Our IT solutions company has extensive experience across a wide range
          of industries. No matter your niche, partnering with us ensures you
          receive high-quality, innovative solutions that set you apart from the
          competition.
        </p>

        <div className="flex flex-row">
          <IndComp></IndComp>
        </div>
      </div>
    </div>
  );
};

export default Service;
