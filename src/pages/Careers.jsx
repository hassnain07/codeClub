import React, { useState } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

const jobs = [
    { title: "Full Stack Developer", dept: "Engineering", location: "Remote" },
    { title: "UI/UX Designer", dept: "Design", location: "Karachi" },
    { title: "DevOps Engineer", dept: "DevOps", location: "Lahore" },
    { title: "QA Engineer", dept: "Engineering", location: "Remote" },
    { title: "Project Manager", dept: "Management", location: "Islamabad" },
    { title: "Backend Engineer", dept: "Engineering", location: "Remote" },
];

const getGradientColor = (index) => {
    const blue = "#3b82f6";
    const yellow = "rgb(250, 204, 21)";
    const black = "#1f1f1f";
    const patterns = [
        [blue, black],
        [black, yellow],
        [blue, black],
    ];
    return patterns[index % patterns.length];
};

export default function CareerPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = () => {
        const message = `*Job Application for:* ${selectedJob.title}%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}`;
        const phoneNumber = "923169557176";
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
        setShowModal(false);
        setFormData({ name: "", email: "", phone: "" });
    };

    return (
        <div className="min-h-screen font-body bg-[#1b2d54] text-white relative">
            {/* Hero */}
            <section
                className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                <div className="relative z-10 px-6 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Join Our Team & Innovate
                    </h1>
                    <p className="text-lg mb-6">
                        We're building software that transforms businesses.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded">
                        View Open Positions
                    </button>
                </div>
            </section>

            {/* Open Positions */}
            <section className="max-w-6xl mx-auto py-16 px-6 space-y-8">
                <h2 className="text-2xl font-semibold text-white mb-8 text-center">
                    Open Positions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {jobs.map((job, index) => {
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
                                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                                        <p className="text-sm text-white/80">
                                            {job.dept} · {job.location}
                                        </p>
                                    </div>
                                    <button
                                        className="mt-6 cursor-pointer text-yellow-300 hover:underline"
                                        onClick={() => handleApplyClick(job)}
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Why Join Us */}
            <section className="bg-[#111827] py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-semibold text-white mb-6">
                        Why Work With Us
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                        At CodeClub, we're focused on design, development, and delivering
                        exceptional software solutions to our clients. We foster growth,
                        collaboration, and innovation in every project.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 max-w-5xl mx-auto px-6">
                <h3 className="text-center text-xl font-semibold text-white mb-8">
                    Our Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {[
                        { title: "Innovation", text: "Pushing the tech frontier daily" },
                        { title: "Integrity", text: "Transparent, honest, client-first" },
                        { title: "Growth", text: "Upskill and empower teams" },
                    ].map((v, idx) => (
                        <div key={idx} className="text-center bg-gray-800 p-6 rounded-lg">
                            <div className="text-4xl text-blue-400 mb-2">✓</div>
                            <h4 className="font-semibold text-white">{v.title}</h4>
                            <p className="text-slate-400 mt-1">{v.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Apply CTA */}
            <section className="py-12 text-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700">
                    Explore All Roles
                </button>
            </section>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-white text-black p-8 rounded-xl w-[90%] max-w-md relative">
                        <button
                            className="absolute top-2 right-4 text-xl font-bold text-gray-700"
                            onClick={() => setShowModal(false)}
                        >
                            ×
                        </button>
                        <h3 className="text-2xl font-semibold mb-4">
                            Apply for {selectedJob?.title}
                        </h3>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full mb-3 p-2 border rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full mb-3 p-2 border rounded"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full mb-4 p-2 border rounded"
                        />
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                        >
                            Send Application via WhatsApp
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
