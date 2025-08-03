import React from "react";
import profile_pic from "../assets/profile_pic.png";
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
        <section className="py-20 px-4 mt-24 bg-gradient-to-b from-[#0f172a] to-[#1b2d54] text-white">
            {/* Core Team Showcase */}
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl md:text-7xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-600 mt-3 mb-6">
                    The Brains Behind The Build
                </h1>

                <p className="mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300">
                    Meet the engineers, designers, and problem-solvers driving our ideas
                    from concept to code. Smart minds, real impact.
                </p>

                <div className="flex items-center gap-6 h-[400px] w-full max-w-6xl mt-12 mx-auto">
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
                                "Bridging the gap between human intent and machine understanding through expert prompt design.",
                            img: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop",
                        },
                        {
                            title: "Zubair",
                            description:
                                "Bridging the gap between human intent and machine understanding through expert prompt design.",
                            img: "https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="relative group flex-grow transition-all w-56 h-full duration-500 hover:w-full"
                        >
                            <img
                                className="h-full w-full object-cover object-center rounded-md"
                                src={item.img}
                                alt={item.title}
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h2 className="text-3xl font-semibold">{item.title}</h2>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Cards */}
            <div className="mt-28 max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-600 mb-16">
                    Meet the Team Driving Innovation
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
