import React from "react";
import vid from "../../assets/main-old-video.mp4";
import bgImg from "../../assets/bgimg2.jpg";

import "animate.css";
import "./HeroSection.css";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const HeroPic = () => {
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

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
      {/* CODE CLUB Badge */}
      <div className="absolute top-1/3 left-1/2 z-20 hidden lg:flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-3 px-6 py-3">
          <img
            src={logo}
            alt="Code Club Logo"
            className="w-18 h-18 object-contain"
          />
          <span className="text-white font-extrabold text-4xl">Code Club</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center lg:items-start md:items-start sm:items-center h-full lg:px-20 md:px-20 sm:px-2 text-white">
        {/* <div
          className="w-full flex items-center p-0 cursor-pointer"
          onClick={() => navigate("/")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={logo}
            alt="CodeClub Logo"
            className="w-32 h-32 rounded-full object-cover"
          />
          <span className="lg:text-5xl lg:block sm:block sm:text-2xl md:hidden font-bold">
            CodeClub
          </span>
        </div> */}
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
        {/* <Link
          to="/contact"
          className="relative overflow-hidden bg-blue-600 text-white font-semibold px-12 py-4 mt-10 group"
        >
          <div className="absolute left-0 top-0 h-full w-0 bg-black transition-all opacity-30 duration-200 ease-in-out group-hover:w-full z-0"></div>
          <span className="relative z-10">Let's Talk</span>
        </Link> */}
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0" /> */}
    </div>
  );
};

export default HeroPic;
