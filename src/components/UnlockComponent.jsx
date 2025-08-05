import React from "react";
import { Link } from "react-router-dom";

const UnlockComponent = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white text-center py-20 px-6 lg:px-40">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-10">
        Unlock the potential of your business with our expert services.
      </h2>
      <Link
        to="/contact"
        className="bg-gradient-to-r from-yellow-400 to-blue-600 text-black hover:brightness-110 text-xl font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-md"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default UnlockComponent;
