import React from "react";
import { motion } from "framer-motion";



const getGradientColor = (index) => {
    const blue = "#3b82f6"; // Tailwind blue-400
    const yellow = "rgb(250, 204, 21)";
    const black = "#1f1f1f";

    const patterns = [
        [blue, black],
        [black, yellow],
        [blue, black],
    ];

    return patterns[index % patterns.length];
};

const stats = [
    { label: "Projects Delivered", value: "120+" },
    { label: "Clients Worldwide", value: "35+" },
    { label: "Team Members", value: "20+" },
];

const testimonials = [
    {
        quote:
            "Working with CodeClub was the best decision for our startup. The product exceeded expectations.",
        name: "Sarah Malik",
        role: "Founder, Fintechly",
    },
    {
        quote:
            "Their team is fast, creative, and deeply understands business logic. Highly recommended.",
        name: "Omar Khan",
        role: "CTO, Retailio",
    },
    {
        quote:
            "Their frontend skills and UX thinking completely transformed our dashboard experience.",
        name: "Ayesha Siddiqui",
        role: "Product Manager, Medtrack",
    },
];

export default function AboutUsSection() {
    return (
        <div className="bg-[#1b2d54] mt-24 text-white font-body">

            {/* About Us */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold">About Us</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            At CodeClub, we build elegant, scalable solutions that power modern businesses.
                            From startups to enterprises, our products are used and loved across industries.
                        </p>
                        <p className="text-gray-400">
                            With a strong foundation in engineering and a user-first design philosophy,
                            we’ve helped launch 100+ digital products that actually make an impact.
                        </p>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
                        >
                            Learn More
                        </button>
                    </div>

                    <div className="md:w-1/2 relative rounded-xl overflow-hidden group">
                        <img
                            src={teamImage}
                            alt="Our Team"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-blue-700/20 group-hover:from-blue-700/30 transition duration-300 rounded-xl" />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-[#111827] py-20 px-6">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="text-gray-400">
                            To create digital solutions that are fast, reliable, and genuinely useful — built with care, for real users.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                        <p className="text-gray-400">
                            We envision a world where software feels intuitive, beautiful, and empowering.
                            We're building that — one project at a time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Milestones / Stats */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition duration-300"
                        >
                            <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                            <div className="text-sm mt-2 text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}

            <section className="bg-[#0f172a] py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-semibold text-center mb-14">
                        What Our Clients Say
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => {
                            const [startColor, endColor] = getGradientColor(index);

                            return (
                                <motion.div
                                    key={index}
                                    initial={{
                                        background: `linear-gradient(to right, ${startColor}, ${endColor})`,
                                    }}
                                    animate={{
                                        background: `linear-gradient(to right, ${startColor}, ${endColor})`,
                                    }}
                                    whileHover={{
                                        background: `linear-gradient(to right, ${endColor}, ${startColor})`,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="rounded-xl overflow-hidden shadow-xl text-white"
                                >
                                    <div className="bg-black/70 backdrop-blur-lg p-6 h-full flex flex-col justify-between">
                                        <div>
                                            <p className="text-sm italic text-white/90 mb-4">“{t.quote}”</p>
                                        </div>
                                        <div className="mt-4">
                                            <div className="text-yellow-300 font-semibold">{t.name}</div>
                                            <div className="text-sm text-white/60">{t.role}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}

