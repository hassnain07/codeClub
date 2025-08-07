import React from "react";

const TechComp = ({ Icon, name }) => {
  return (
    <div className="flex flex-col items-center text-white bg-gray-600 px-10 py-8 rounded-lg shadow-md">
      <div className="text-7xl mb-4">
        <Icon />
      </div>
      <p className="text-xl font-semibold">{name}</p>
    </div>
  );
};

export default TechComp;
