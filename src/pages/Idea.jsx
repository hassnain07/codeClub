import React from "react";
import { motion } from "framer-motion";

const stages = [
    {
        title: "1. Ideation & Feasibility",
        desc: "Refine the idea: Who’s the user? What problems are we solving? How do we scope it?",
    },
    {
        title: "2. Requirements & Design",
        desc: "Write functional specs, sketch flows & wireframes, and align all stakeholders early.",
    },
    {
        title: "3. Iterative Development",
        desc: "Deliver in short sprints or increments. Test, demo, and adapt continuously.",
    },
    {
        title: "4. Testing & QA",
        desc: "Embed unit, integration and acceptance tests from day one. Automate through CI.",
    },
    {
        title: "5. Deployment Strategy",
        desc: "Prepare release packages, staging & production pipelines. Practice small, frequent deployments.",
    },
    {
        title: "6. Monitoring & Improvement",
        desc: "Track uptime, performance, feedback. Retrospectives guide process optimization.",
    },
];

const IdeaToLaunch = () => (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1b2d54] min-h-screen mt-24 text-white py-20 px-6 md:px-24">
        {/* Header */}
        <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-600">
                Idea to Launch
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A proven roadmap from brainstorming to deployment—built on clarity, feedback loops, and modern workflows.
            </p>
        </header>

        {/* Workflow Steps */}
        <section className="max-w-4xl mx-auto space-y-10 mb-20">
            {stages.map((stage, i) => (
                <motion.div
                    key={i}
                    className="bg-[#1e293b] p-8 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-shadow"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{stage.title}</h3>
                    <p className="text-gray-300">{stage.desc}</p>
                </motion.div>
            ))}
        </section>

        {/* Closing Note */}
        <footer className="text-center mt-12 px-4">
            <p className="text-gray-400 italic">
                Based on frameworks like Agile, RAD, DevOps, and DevSecOps—this model blends key stages, feedback loops, automation, and quality-first thinking for reliable delivery.
            </p>
        </footer>
    </div>
);

export default IdeaToLaunch;
