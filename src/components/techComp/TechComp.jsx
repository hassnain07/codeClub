import React from "react";

const TechComp = ({ frameworks }) => {
  return (
    <div className="flex flex-wrap gap-6">
      {frameworks.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-white bg-gray-600 px-10 py-8 rounded-lg shadow-md"
        >
          <div className="text-7xl mb-4">
            <tech.icon />
          </div>
          <p className="text-xl font-semibold">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechComp;
