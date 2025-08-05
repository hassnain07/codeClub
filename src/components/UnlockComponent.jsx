import React from "react";
import { Link } from "react-router-dom";

const UnlockComponent = () => {
  return (
    <div className="bg-gray-700 text-center py-20 lg:px-40 sm:px-10">
      <h2 className="lg:text-5xl sm:text-4xl font-bold lg:leading-tight sm:leading-snug mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-white">
        Unlock the potential of your business with our expert services.
      </h2>

      <Link
        to="/contact"
        className="inline-block text-white border-2 border-blue-500 hover:bg-gradient-to-r from-blue-600 to-yellow-400 hover:text-white font-semibold text-lg px-10 py-3 rounded-full transition-all duration-300"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default UnlockComponent;
