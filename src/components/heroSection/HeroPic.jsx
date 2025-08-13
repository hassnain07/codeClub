import React from "react";
import vid from "../../assets/main-video.mp4";
import bgImg from "../../assets/bgimg2.jpg";

import "animate.css";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroPic = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden lg:px-10">
      <video
        src={vid}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col justify-center lg:items-start md:items-start sm:items-center h-full lg:px-20 md:px-20 sm:px-2 text-white">
        <div>
          <h1 className="lg:text-5xl md:text-5xl sm:text-3xl sm:h-31 font-bold mb-4 lg:h-31 md:h-40 overflow-hidden lg:leading-17 md:leading-13 lg:w-full md:w-full sm:leading-10 sm:w-full">
            <div className="animate-slideUpText">
              FUELING DIGITAL DISRUPTION ACROSS TRANSFORMATIVE DOMAINS
            </div>
            <div className="animate-slideUpText">
              CUSTOM SOFTWARE SOLUTIONS FOR BUSINESS GROWTH
            </div>
            <div className="animate-slideUpText">
              AI-DRIVEN, CLOUD-POWERED, INDUSTRY-CHANGING
            </div>
          </h1>
        </div>
        <Link
          to="/contact"
          className="relative overflow-hidden bg-blue-600 text-white font-semibold px-12 py-4 mt-10 group"
        >
          <div className="absolute left-0 top-0 h-full w-0 bg-black transition-all opacity-30 duration-200 ease-in-out group-hover:w-full z-0"></div>
          <span className="relative z-10">Let's Talk</span>
        </Link>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0" /> */}
    </div>
  );
};

export default HeroPic;
