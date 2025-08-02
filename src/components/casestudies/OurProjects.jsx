import React from 'react';
import { motion } from 'framer-motion';

import web_project1 from '../../assets/web_project1.png'
import web_project2 from '../../assets/web_project2.png'
import web_project3 from '../../assets/web_project3.png'
import web_project4 from '../../assets/web_project4.png'
import web_project5 from '../../assets/web_project5.png'
import web_project6 from '../../assets/web_project6.png'

import ai_project from '../../assets/ai_project.png'

import app_project from '../../assets/app_project.png'
import app_project2 from '../../assets/app_project2.png'
import app_project3 from '../../assets/app_project3.png'


import cyber_project1 from '../../assets/cyber_project1.png';

const projects = [

    // AI projects
    {
        title: "SEIZURE SENSE",
        description:
            "AN AI/ML-based system that analyzes brain signals(EEG DATA) to predict epileptic seizures in advance. It alerts the patient before an attack, allowing them to move to a safe environment and reduce the risk of injury",
        image: ai_project,
    },

    // web projects
    {
        title: "NovaSuite – AI SaaS Platform for Creative & Diagnostic Tools",
        description:
            "NovaSuite is a powerful AI SaaS platform offering a suite of tools including image generation, blog title suggestions, background removal, resume review, and basic disease diagnostics.Built for creators, job seekers, and healthcare enthusiasts, NovaSuite streamlines tasks through smart automation.",
        image: web_project1,
    },
    {
        title: "Inventory Management System for a Multilocation Retail Chain",
        description:
            "A powerful system designed to track stock in real time, reduce overstocking and shortages, and streamline supply chain operations across all outlets. Delivered with barcode integration, role-based access, and advanced reporting.",
        image: web_project2,
    },

    {
        title: "Custom LMS for an  Education Platform",
        description:
            "An interactive learning management system built to support live classes, course tracking, quizzes, and certification. Enhanced with role-based dashboards for students, instructors, and admins—scalable to support thousands of users.",
        image: web_project3,
    },

    {
        title: "Essence — Scalable E-commerce Platform",
        description:
            "A modern e-commerce web app featuring real-time inventory, smart search, secure checkout, and mobile-first design. Built for performance, flexibility, and seamless shopping across devices.",
        image: web_project4,
    },
    {
        title: "Shopify — Full-featured E-commerce & Admin Panel",
        description:
            "A complete e-commerce solution with product management, order tracking, customer insights, and a powerful admin dashboard. Built for scalability, speed, and intuitive control.",
        image: web_project5,
    },

    {
        title: "VibeHive — Real-time Chat & Collaboration App",
        description:
            "A modern chat platform featuring group conversations, real-time messaging, presence indicators, media sharing, and user-friendly UI. Designed for seamless team and community communication.",
        image: web_project5,
    },



    // app projects

    {
        title: "Smart Dual Finance",
        description:
            "A smart dual-mode financial app designed for everyday users and small business owners. The Personal account helps users split bulls, track expenses, and manage shared payments with ease- just like Splitwise. The Business Account empowers small businesses to record sales, manage inventory, and handle finances- just like QuickBooks. Simple efficient, and tailored or both personal and professional use in one powerful platform",
        image: app_project

    },
    {
        title: "Halatick — Restaurant Ordering & Management App",
        description:
            "A sleek and user-friendly restaurant app built for dine-in, takeaway, and delivery experiences. Features include digital menus, real-time order tracking, table reservations, and staff-side order management. Designed to streamline operations and enhance customer engagement.",
        image: app_project2
    },

    {
        title: "Khyber Pakhtunkhwa — Tourism Discovery App",
        description:
            "A beautifully crafted mobile app that helps users explore the cultural, historical, and natural treasures of KP. Features include destination guides, maps, trip planners, local events, and offline access for remote areas. Designed to promote regional tourism and make travel planning effortless.",
        image: app_project3
    },




    // cybersecurity projects

    {
        title: "Smart Dual Finance",
        description:
            "A smart dual-mode financial app designed for everyday users and small business owners. The Personal account helps users split bulls, track expenses, and manage shared payments with ease- just like Splitwise. The Business Account empowers small businesses to record sales, manage inventory, and handle finances- just like QuickBooks. Simple efficient, and tailored or both personal and professional use in one powerful platform",
        image: cyber_project1

    },

];



const getGradientColor = (index) => {
    const blue = "#2a7de3";
    const yellow = "rgb(250, 204, 21)";
    const black = "rgb(30, 30, 30)";

    const gradients = [
        [blue, black],
        [black, yellow],
    ];

    return gradients[index % gradients.length];
};



const OurProjects = () => {
    return (
        <div className="w-full px-4 py-20 space-y-8 relative z-10">
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
                        className="relative  overflow-hidden shadow-2xl text-white"
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





// const projectGroups = [
//     {
//         category: 'AI Projects',
//         projects: [
//             {
//                 title: 'SEIZURE SENSE',
//                 description:
//                     'An AI/ML-based system that analyzes brain signals (EEG data) to predict epileptic seizures in advance. It alerts the patient before an attack, allowing them to move to a safe environment and reduce the risk of injury.',
//                 image: ai_project,
//             },
//             {
//                 title: 'NovaSuite – AI SaaS Tools',
//                 description:
//                     'NovaSuite is a powerful AI SaaS platform offering tools like image generation, blog title suggestions, background removal, resume review, and basic diagnostics. Built for creators, job seekers, and healthcare users.',
//                 image: web_project1,
//             },
//         ],
//     },
//     {
//         category: 'Mobile & Finance Apps',
//         projects: [
//             {
//                 title: 'Smart Dual Finance',
//                 description:
//                     'A dual-mode financial app for users and small businesses. Personal mode helps split bills and track shared expenses (like Splitwise), while Business mode manages sales, inventory, and finances (like QuickBooks).',
//                 image: app_project,
//             },
//         ],
//     },
//     {
//         category: 'Web Projects',
//         projects: [
//             {
//                 title: 'Ad Agency Media System',
//                 description:
//                     'A custom web platform for a US-based advertising agency. Replaced outdated software with a faster, smoother solution featuring intuitive workflows and advanced analytics.',
//                 image: null,
//             },
//         ],
//     },
// ];

// // Updated neutral background gradient
// const getGradientColor = (index) => {
//     const neutralLight = '#f9fafb';
//     const neutralDark = '#e5e7eb';
//     return [neutralLight, neutralDark];
// };

// const OurProjects = () => {
//     return (
//         <div className="w-full px-4 py-20 space-y-24 relative z-10 bg-white">
//             {projectGroups.map((group, groupIndex) => (
//                 <div key={groupIndex} className="space-y-12">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
//                         {group.category}
//                     </h2>

//                     {group.projects.map((project, index) => {
//                         const isReversed = index % 2 === 1;
//                         const [startColor, endColor] = getGradientColor(index);

//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{
//                                     background: `linear-gradient(to right, ${startColor}, ${endColor})`,
//                                 }}
//                                 animate={{
//                                     background: `linear-gradient(to right, ${startColor}, ${endColor})`,
//                                 }}
//                                 whileHover={{
//                                     background: `linear-gradient(to right, ${endColor}, ${startColor})`,
//                                     scale: 1.02,
//                                 }}
//                                 transition={{ duration: 0.4 }}
//                                 className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200"
//                             >
//                                 <div
//                                     className={`max-w-7xl mx-auto flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''
//                                         } items-center px-6 py-12 gap-10`}
//                                 >
//                                     {/* Text */}
//                                     <div className="md:w-1/2 space-y-4 text-gray-800">
//                                         <h3 className="text-2xl font-bold">{project.title}</h3>
//                                         <p className="text-base text-gray-700">
//                                             {project.description}
//                                         </p>
//                                     </div>

//                                     {/* Image */}
//                                     {project.image && (
//                                         <div className="md:w-1/2 h-64">
//                                             <motion.div
//                                                 whileHover={{ y: -8, rotate: 1, scale: 1.05 }}
//                                                 transition={{ duration: 0.5 }}
//                                                 className="relative w-full h-64 flex items-center justify-center"
//                                             >
//                                                 <img
//                                                     src={project.image}
//                                                     alt={project.title}
//                                                     className="max-h-full max-w-full object-contain drop-shadow-lg rounded-md"
//                                                 />
//                                             </motion.div>
//                                         </div>
//                                     )}
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default OurProjects;


