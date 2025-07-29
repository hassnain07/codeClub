import React from "react";

const ExpertiseLeft = ({ img }) => {
  return (
    <div className="flex justify-center">
      <img
        src={img}
        alt="AI Phone UI"
        className="max-w-full h-auto object-cover"
      />
    </div>
  );
};

export default ExpertiseLeft;
