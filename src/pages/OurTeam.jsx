import React from "react";
import profile_pic from "../assets/profile_pic.png";
import UnlockComponent from "../components/UnlockComponent";
import TeamCard from "../components/ourteam/TeamCard";

const teamMembers = [
  {
    name: "Hasnain",
    role: "Full Stack Developer",
    image: profile_pic,
    bio: "Expert in React, Node.js and MongoDB.",
    linkedin: "https://www.linkedin.com/in/mazhar-ahmad78",
  },
  {
    name: "Mazhar Ahmad",
    role: "UI/UX Designer",
    image: profile_pic,
    bio: "Crafting intuitive and beautiful user experiences.",
    linkedin: "https://www.linkedin.com/in/sana-ahmed",
  },
  {
    name: "Ihtesham",
    role: "AI Engineer",
    image: profile_pic,
    bio: "Passionate about ML and intelligent automation.",
    linkedin: "https://www.linkedin.com/in/zain-khan",
  },
  {
    name: "Abdullah",
    role: "Mobile Developer",
    image: profile_pic,
    bio: "Flutter and React Native specialist.",
    linkedin: "https://www.linkedin.com/in/hira-sheikh",
  },
  {
    name: "Shaheer",
    role: "DevOps Engineer",
    image: profile_pic,
    bio: "Deploying secure and scalable systems.",
    linkedin: "https://www.linkedin.com/in/omar-siddiqui",
  },
];

export default function TeamSection() {
  return (
    <>
      <section className="bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-24">
          {/* Section Title */}
          <div className="text-center mt-20 mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-500">
              The Brains Behind <span className="text-black">The Build</span>
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-900 rounded-full mx-auto mt-4 mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the engineers, designers, and problem-solvers driving our
              ideas from concept to code.
            </p>
          </div>

          {/* Hero Cards */}
          <div className="flex flex-wrap md:flex-nowrap items-stretch gap-6 w-full max-w-6xl mt-12 mx-auto">
            {[
              {
                title: "Afaan",
                description:
                  "Bridging the gap between human intent and machine understanding through expert prompt design.",
                img: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop",
              },
              {
                title: "Abdullah",
                description:
                  "Designing systems that scale and delight. Loves clean code and efficient UIs.",
                img: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop",
              },
              {
                title: "Zubair",
                description:
                  "Obsessed with performance and pushing boundaries of frontend speed and design.",
                img: "https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group flex-grow transition-all w-full md:w-56 h-[380px] duration-500 hover:w-full"
              >
                <img
                  className="h-full w-full object-cover object-center rounded-xl"
                  src={item.img}
                  alt={item.title}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-blue-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Cards */}
          <div className="mt-28 max-w-7xl mx-auto text-center px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-500">
              Meet The Team{" "}
              <span className="text-black">Driving Innovation</span>
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-900 rounded-full mx-auto mt-4 mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
              These are the people turning big ideas into real-world
              products—designers, engineers, and builders.
            </p>

            <div className="flex flex-wrap justify-center gap-10">
              {teamMembers.map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <UnlockComponent />
    </>
  );
}
