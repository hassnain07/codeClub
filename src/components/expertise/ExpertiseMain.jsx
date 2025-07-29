import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExpertiseComponent from "./ExperiseComponent";
import AI from "../../assets/AI_image.webp";

gsap.registerPlugin(ScrollTrigger);

const expertAreasAI = [
  "Generative AI",
  "LLM",
  "Machine learning",
  "Natural Language Processing (NLP)",
  "Generative AI consulting",
  "Predictive analytics",
  "AI automation",
  "Computer vision",
];

const ExpertiseMain = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768); // Updated breakpoint to 768px

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Updated breakpoint to 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      const panels = gsap.utils.toArray(".panel");

      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [isLargeScreen]);

  return (
    <div className="">
      <div
        className={`w-full flex lg:flex-row md:flex-row sm:flex-col lg:h-screen md:h-screen sm:h-full overflow-hidden border-t border-white ${
          isLargeScreen ? "panel" : ""
        }`}
      >
        <ExpertiseComponent
          img={AI}
          name={"Artificial Intelligence"}
          desc={
            "Our AI services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions."
          }
          expertAreas={expertAreasAI}
        />
      </div>
      <div
        className={`w-full flex lg:flex-row md:flex-row sm:flex-col lg:h-screen md:h-screen sm:h-full overflow-hidden border-t border-white ${
          isLargeScreen ? "panel" : ""
        }`}
      >
        <ExpertiseComponent
          img={AI}
          name={"Artificial Intelligence"}
          desc={
            "Our AI services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions."
          }
          expertAreas={expertAreasAI}
        />
      </div>
    </div>
  );
};

export default ExpertiseMain;
