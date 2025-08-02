import React from "react";
import { motion } from "framer-motion";
import scrumCycle from "../assets/hero.jpg"; // replace with actual scrum image
import agileIcons from "../assets/hero.jpg"; // replace with actual icons image

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const OurMethodology = () => {
    return (
        <div className="bg-gradient-to-b from-[#0f172a] to-[#1b2d54] text-white min-h-screen pt-32 pb-20 px-4 md:px-24">
            {/* Header */}
            <section className="text-center mb-24">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-600">
                    Our Methodology
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                    Agile and Scrum shape the way we think, collaborate, and build. They’re not just methods — they’re a mindset.
                </p>
            </section>

            {/* Sprint-Based Section */}
            <section className="mb-32">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                        Sprint-Based Development
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        We use short, focused sprints to build incrementally, respond quickly, and always stay aligned with real user needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <motion.img
                        src={scrumCycle}
                        alt="Scrum Cycle"
                        className="rounded-xl w-full shadow-xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    />

                    <div className="grid gap-6">
                        {[
                            {
                                title: "Planning",
                                desc: "Define the sprint goal, select backlog items, and align the team.",
                            },
                            {
                                title: "Daily Standups",
                                desc: "Short, focused meetings to sync progress and remove blockers.",
                            },
                            {
                                title: "Sprint Review",
                                desc: "Demo the increment to stakeholders and gather feedback.",
                            },

                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={cardVariant}
                                viewport={{ once: true }}
                                className="p-6 bg-[#1e3a5f] rounded-xl border border-blue-800 shadow-md hover:scale-[1.02] transition-transform"
                            >
                                <h3 className="text-xl font-semibold text-yellow-300 mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roles Section */}
            <section className="mb-32">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                        Roles & Collaboration
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Agile is all about people. Each role is critical in shaping a functional and adaptable team.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid gap-6"
                    >
                        {[
                            {
                                role: "Product Owner",
                                detail:
                                    "Owns the product vision and prioritizes the backlog to maximize value delivery.",
                            },
                            {
                                role: "Scrum Master",
                                detail:
                                    "Facilitates team processes, removes obstacles, and fosters continuous improvement.",
                            },
                            {
                                role: "Development Team",
                                detail:
                                    "Self-organizing group responsible for building, testing, and delivering the product.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={cardVariant}
                                viewport={{ once: true }}
                                className="p-6 bg-[#1e3a5f] rounded-xl border border-yellow-700 shadow-md hover:scale-[1.02] transition-transform"
                            >
                                <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.role}</h3>
                                <p className="text-gray-300 text-sm">{item.detail}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.img
                        src={agileIcons}
                        alt="Agile Roles"
                        className="rounded-xl w-full shadow-xl"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
            </section>

            {/* Why It Works */}
            <section className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Why It Works</h2>
                <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">
                    Agile lets us build around people, not processes. Scrum keeps us accountable, transparent, and outcome-focused—so we ship value, not just features.
                </p>
            </section>
        </div>
    );
};

export default OurMethodology;
