import React from 'react';
import { motion } from 'framer-motion';

import ai_project from '../../assets/ai_project.png'
import web_project1 from '../../assets/web_project1.png'
import app_project from '../../assets/app_project.png'

const projects = [
    {
        title: "SEIZURE SENSE",
        description:
            "AN AI/ML-based system that analyzes brain signals(EEG DATA) to predict epileptic seizures in advance. It alerts the patient before an attack, allowing them to move to a safe environment and reduce the risk of injury",
        image: ai_project,
    },
    {
        title: "NovaSuite – AI SaaS Platform for Creative & Diagnostic Tools",
        description:
            "NovaSuite is a powerful AI SaaS platform offering a suite of tools including image generation, blog title suggestions, background removal, resume review, and basic disease diagnostics.Built for creators, job seekers, and healthcare enthusiasts, NovaSuite streamlines tasks through smart automation.",
        image: web_project1,
    },

    {
        title: "Smart Dual Finance",
        description:
            "A smart dual-mode financial app designed for everyday users and small business owners. The Personal account helps users split bulls, track expenses, and manage shared payments with ease- just like Splitwise. The Business Account empowers small businesses to record sales, manage inventory, and handle finances- just like QuickBooks. Simple efficient, and tailored or both personal and professional use in one powerful platform",
        image: app_project

    },
    {
        title: "Media buying system for a leading US-based advertising agency",
        description:
            "A custom web-based system that replaced an outdated platform, delivering 50x faster performance, intuitive workflows, and advanced analytics.",

    },
];



const getGradientColor = (index) => {
    const blue = "#2a7de3";
    const yellow = "rgb(250, 204, 21)";
    // const black = "rgb(0, 0, 0)";

    const black = "rgb(30, 30, 30)";

    // const black = "rgb(45, 45, 45)";

    // const black = "#1f1f1f";

    switch (index) {
        case 0:
            return [blue, black];
        case 1:
            return [black, yellow];
        case 2:
            return [blue, black];
        case 3:
            return [black, blue];
        default:
            return [black, blue];
    }
};


const OurProjects = () => {
    return (
        <div className="w-full px-4 py-20 space-y-20 relative z-10">
            {projects.map((project, index) => {
                const isReversed = index % 2 === 1;
                const [startColor, endColor] = getGradientColor(index);
                // const [hoverStartColor, hoverEndColor] = [endColor, startColor];

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
                            scale: 1.02,
                        }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl text-white"
                    >


                        <div
                            className={`max-w-7xl mx-auto flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''
                                } items-center px-6 py-16 gap-8`}
                        >
                            {/* Text Section */}
                            <div className="md:w-1/2 space-y-4">
                                <h3 className="text-3xl font-bold">{project.title}</h3>
                                <p className="text-base text-white/90">{project.description}</p>

                            </div>

                            {/* Image Section */}
                            <div className="md:w-1/2  h-64 overflow-visible">
                                <motion.div
                                    whileHover={{ y: -10, rotate: 1, scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-64 flex items-center justify-center"
                                >
                                    <img
                                        src={project.image}
                                        alt="Project"
                                        className="max-h-full max-w-full object-contain drop-shadow-xl rounded-lg pointer-events-none"
                                    />
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default OurProjects;
