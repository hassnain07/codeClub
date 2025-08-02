import React from "react";

const IndComp = () => {
  return (
    <div className="group border border-gray-200 p-10 w-full max-w-sm shadow-sm hover:shadow-lg hover:bg-gray-800 transition-all duration-300">
      <h2 className="text-3xl font-semibold text-gray-700 group-hover:text-white transition-colors duration-300 mb-6">
        FinTech
      </h2>
      <ul className="list-disc text-xl list-inside space-y-2">
        <li className="ml-2 text-gray-800 group-hover:text-white transition-colors duration-300">
          Billing & Payment Solutions
        </li>
        <li className="ml-2 text-gray-800 group-hover:text-white transition-colors duration-300">
          Billing & Payment Solutions
        </li>
        <li className="ml-2 text-gray-800 group-hover:text-white transition-colors duration-300">
          Billing & Payment Solutions
        </li>
      </ul>
    </div>
  );
};

export default IndComp;
