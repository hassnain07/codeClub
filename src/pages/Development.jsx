import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaDraftingCompass, FaRocket, FaShieldAlt, FaSync, FaChartLine } from "react-icons/fa";

const steps = [
    {
        icon: <FaDraftingCompass className="text-yellow-400 text-4xl" />,
        title: "Vision & Planning",
        desc: "Define the goals, key features, timelines, and stakeholders. We prioritize clarity and feasibility before a single line of code is written.",
    },
    {
        icon: <FaCogs className="text-blue-400 text-4xl" />,
        title: "Requirements & Design",
        desc: "Capture clear, testable requirements and sketch system architecture. Align expectations through mockups and user flows.",
    },
    {
        icon: <FaSync className="text-purple-400 text-4xl" />,
        title: "Iterative Development",
        desc: "We deliver in short, reviewable cycles—using Agile, RAD, or hybrid methods. Frequent demos and tight feedback loops.",
    },
    {
        icon: <FaShieldAlt className="text-green-400 text-4xl" />,
        title: "Quality Assurance",
        desc: "Automated testing (unit, integration, acceptance) is part of every sprint. Bugs caught early, not shipped.",
    },
    {
        icon: <FaRocket className="text-pink-400 text-4xl" />,
        title: "Deployment & Feedback",
        desc: "Fast, secure, and incremental delivery. DevOps/DevSecOps ensures stability and traceability across environments.",
    },
    {
        icon: <FaChartLine className="text-red-400 text-4xl" />,
        title: "Monitoring & Improvement",
        desc: "We track performance, errors, and user behavior—then improve. Retrospectives help us evolve every cycle.",
    },
];

const DevelopmentApproach = () => (
    <div className="bg-gradient-to-b mt-24 from-[#0f172a] to-[#1b2d54] text-white min-h-screen py-20 px-6 md:px-24">
        <section className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-600">
                Our Development Approach
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A clear and agile software development journey that turns complexity into clarity, code into value.
            </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow"
                >
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.desc}</p>
                </motion.div>
            ))}
        </section>

        <section className="text-center mt-24 px-4">
            <p className="text-gray-400 italic max-w-4xl mx-auto text-sm md:text-base">
                Our process draws from proven methodologies—Agile, DSDM, DevOps, and DevSecOps—alongside software principles like DRY, YAGNI, and early testing. We don’t just ship features, we build software that works, lasts, and evolves.
            </p>
        </section>
    </div>
);

export default DevelopmentApproach;
