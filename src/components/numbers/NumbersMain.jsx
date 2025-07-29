import React from "react";
import Spacer from "./Spacer";

const numbersData = [
  {
    title: "WE WORK SINCE",
    value: "2003",
  },
  {
    title: "LOCATIONS WORLDWIDE",
    value: "9",
  },
  {
    title: "LONG-TERM CLIENTS",
    value: "52%",
    highlight: true,
  },
  {
    title: "AVERAGE CLIENT RETENTION IN YEARS",
    value: "4",
  },
];

const NumbersMain = () => {
  return (
    <section className="bg-[#00173d] text-white py-16 px-10">
      <Spacer></Spacer>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">NUMBERS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white">
          {numbersData.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center items-center gap-4 py-10 px-4 border-b border-r border-white last:border-r-0 lg:border-b-0 hover:bg-[#0057d8] transition-all duration-300`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider">
                {item.title}
              </p>
              <h3 className="text-6xl font-bold">{item.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersMain;
