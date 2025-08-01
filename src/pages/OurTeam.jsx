import React from "react";
import profile_pic from "../assets/profile_pic.png";
import TeamCard from "../components/ourteam/TeamCard";

const teamMembers = [
    {
        name: "Mazhar Ahmad",
        role: "Full Stack Developer",
        image: profile_pic,
        bio: "Expert in React, Node.js and MongoDB.",
        linkedin: "https://www.linkedin.com/in/mazhar-ahmad78", // update this link
    },
    {
        name: "Sana Ahmed",
        role: "UI/UX Designer",
        image: profile_pic,
        bio: "Crafting intuitive and beautiful user experiences.",
        linkedin: "https://www.linkedin.com/in/sana-ahmed",
    },
    {
        name: "Zain Khan",
        role: "AI Engineer",
        image: profile_pic,
        bio: "Passionate about ML and intelligent automation.",
        linkedin: "https://www.linkedin.com/in/zain-khan",
    },
    {
        name: "Hira Sheikh",
        role: "Mobile Developer",
        image: profile_pic,
        bio: "Flutter and React Native specialist.",
        linkedin: "https://www.linkedin.com/in/hira-sheikh",
    },
    {
        name: "Omar Siddiqui",
        role: "DevOps Engineer",
        image: profile_pic,
        bio: "Deploying secure and scalable systems.",
        linkedin: "https://www.linkedin.com/in/omar-siddiqui",
    },
];


export default function TeamSection() {
    return (
        <section className="py-20 px-4 mt-24">
            {/* Core Team */}
            <div>
                <h1 className="text-4xl font-bold text-center text-black">
                    The{" "}
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-yellow-400 text-transparent bg-clip-text">
                        Brains Behind{" "}
                    </span>{" "}
                    the Build
                </h1>
                <p className="text-base text-gray-600 text-center mt-2 max-w-xl mx-auto">
                    Meet the engineers, designers, and problem-solvers driving our ideas
                    from concept to code. Smart minds, real impact.
                </p>

                <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
                    {[
                        {
                            title: "Prompt engineers",
                            description:
                                "Bridging the gap between human intent and machine understanding through expert prompt design.",
                            img: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop",
                        },
                        {
                            title: "Data scientists",
                            description:
                                "Bridging the gap between human intent and machine understanding through expert prompt design.",
                            img: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop",
                        },
                        {
                            title: "Software engineers",
                            description:
                                "Bridging the gap between human intent and machine understanding through expert prompt design.",
                            img: "https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full"
                        >
                            <img
                                className="h-full w-full object-cover object-center"
                                src={item.img}
                                alt={item.title}
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h1 className="text-3xl">{item.title}</h1>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Members */}
            <div className="mt-24 text-center max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-gray-700 mb-16">
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-yellow-400 text-transparent bg-clip-text">
                        Meet the Team
                    </span>{" "}
                    Driving Innovation
                </h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}

                </div>
            </div>
        </section>
    );
}


