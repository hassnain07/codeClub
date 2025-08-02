import React from "react";

const FeatureCard = ({ title, items }) => {
  return (
    <div className="border border-gray-200  p-10 w-full max-w-sm shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">FinTech</h2>
      <ul className="list-disc text-xl list-inside text-gray-800 space-y-2">
        <li className="ml-2">Billing & Payment Solutions</li>
        <li className="ml-2">Billing & Payment Solutions</li>
        <li className="ml-2">Billing & Payment Solutions</li>
      </ul>
    </div>
  );
};

export default FeatureCard;
