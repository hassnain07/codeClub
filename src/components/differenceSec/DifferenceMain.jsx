import React from "react";
import DifferenceTop from "./DifferenceTop";
import DifferenceMid from "./DifferenceMid";
import DifferenceBottom from "./DifferenceBottom";

const DifferenceMain = () => {
  return (
    <div className="bg-gradient-to-r from-[#001434] to-[#002156] h-full w-full d-flex flex-col px-25 sm:px-10 py-20">
      <DifferenceTop></DifferenceTop>
      <DifferenceMid></DifferenceMid>
      {/* <DifferenceBottom></DifferenceBottom> */}
    </div>
  );
};

export default DifferenceMain;
