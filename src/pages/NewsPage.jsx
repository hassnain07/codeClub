import React, { useState } from "react";
import news1 from "../assets/news1.jpeg";

const newsData = [
  {
    title: "CodeClub Inaugration Ceremony",
    summary:
      "Artificial Intelligence continues to revolutionize the way organizations protect their digital assets. Businesses are increasingly adopting machine learning algorithms to detect and prevent cyber threats in real-time. The integration of AI into security systems not only enhances threat detection but also reduces response times significantly. Experts believe this trend will continue to evolve, making cybersecurity more predictive and adaptive than ever before.",
    image: news1,
    date: "July 21, 2025",
  },
];

const NewsPage = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20 mt-24 mb-10">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">
        Latest <span className="text-blue-600">News & Insights</span>
      </h1>
      <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-yellow-400 to-black rounded-full mx-auto mt-4 mb-10"></div>

      <div className="grid md:grid-cols-3 gap-8">
        {newsData.map((news, index) => {
          const isExpanded = expandedIndexes.includes(index);
          const displayedText = isExpanded
            ? news.summary
            : news.summary.slice(0, 120) + "...";

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{news.date}</p>
                <p className="text-gray-700">{displayedText}</p>
                <button
                  className="mt-3 text-blue-600 font-semibold hover:underline"
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? "Read Less" : "Read More →"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsPage;
