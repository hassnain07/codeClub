import React from "react";
import mobImg from "../assets/mobileService.webp";
import StatsMain from "../components/statsCard/statsMain";
import FeatureCard from "../components/expertiseCard/FeatureCard";

const FeatureData = {
  title: "Native App Development",
  items: ["Mobile banking apps", "Fitness tracking apps", "Gaming apps"],
};

const Service = () => {
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
    </div>
  );
};

export default Service;
