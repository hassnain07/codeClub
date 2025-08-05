import React from "react";
import { Link } from "react-router-dom";

const UnlockComponent = () => {
  return (
    <div className="bg-gray-50 text-gray-700 text-center p-20 lg:px-40 sm:px-10 ">
      <h2 className="lg:text-5xl sm:text-4xl font-bold lg:leading-15 md:leading-15 sm:leading-12 mb-10">
        Unlock the potential of your business with our expert services.
      </h2>
      <Link
        to="/contact"
        className="hover:bg-gray-900 hover:text-white text-gray-900 border-1 border-gray-900 transition-all duration-150 text-xl py-3 px-10 rounded-full"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default UnlockComponent;
