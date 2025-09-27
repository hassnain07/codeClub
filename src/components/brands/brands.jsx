import React from "react";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.jpeg";
import brand5 from "../../assets/brand5.jpeg";
import brand6 from "../../assets/brand6.png";
import brand7 from "../../assets/brand7.jpg";
import brand8 from "../../assets/brand8.png";

const brands = [
  { name: "Memaar", image: brand1 },
  { name: "Shamroz group of companies", image: brand5 },
  { name: "Paragon overseas education", image: brand8 },
  { name: "H-MAK", image: brand6 },
  { name: "64 Heights", image: brand7 },
  { name: "Zamong kor", image: brand2 },
  { name: "Rehmat Tax", image: brand3 },
  { name: "Zamong Khyber", image: brand4 },
];


const Brands = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      {/* Section Heading */}
      <div className="text-center max-w-xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Trusted by Leading Businesses
        </h3>
        <p className="text-gray-700 mt-3 sm:mt-4 text-base sm:text-lg font-medium">
          Over{" "}
          <span className="font-bold text-indigo-600">100+ businesses</span>{" "}
          worldwide rely on us to craft modern digital solutions that inspire
          confidence.
        </p>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {brands.map((brand, index) => {
          const isWhiteLogo = brand.name === "H-MAK"; // condition for special styling
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-5 sm:p-6"
            >
              {/* Logo wrapper with conditional background */}
              <div
                className={`h-20 sm:h-24 w-full flex justify-center items-center rounded-lg ${isWhiteLogo ? "bg-gray-900 p-3" : "bg-transparent"
                  }`}
              >
                <img
                  src={brand.image}
                  alt={`${brand.name} Logo`}
                  className={`max-h-full max-w-full object-contain transition duration-300 ${isWhiteLogo ? "opacity-100" : "opacity-90 hover:opacity-100"
                    }`}
                />
              </div>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-bold text-gray-900 text-center tracking-wide">
                {brand.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
