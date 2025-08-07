import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text =
  "At CodeClub, we go beyond just building digital products — we uncover the core challenges of your business through a strategic blend of human-centered insights and innovative technology. Our team is dedicated to delivering tailored, scalable, and high-impact solutions that align with your vision, drive real value, and ensure long-term success.";

const DifferenceMid = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = gsap.utils.toArray(".glow-word");

    gsap.fromTo(
      words,
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          toggleActions: "restart pause reverse pause",
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div>
      <h1
        className="text-white w-full lg:text-6xl md:text-5xl sm:text-3xl lg:leading-20 md:leading-20 sm:leading-10"
        ref={textRef}
      >
        {text.split(" ").map((word, i) => (
          <span
            key={i}
            className="glow-word inline-block mr-2 transition duration-300"
          >
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default DifferenceMid;
