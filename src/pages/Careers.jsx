import React from "react";
import hero from "../assets/hero.jpg";

const jobs = [
    { title: "Full Stack Developer", dept: "Engineering", location: "Remote" },
    { title: "UI/UX Designer", dept: "Design", location: "Karachi" },
    { title: "DevOps Engineer", dept: "DevOps", location: "Lahore" },
];

export default function CareerPage() {
    return (
        <div className="min-h-screen bg-white font-body">
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
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

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
            <section className="max-w-5xl mx-auto py-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                    Open Positions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {jobs.map((job, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                            <p className="text-sm text-gray-600">
                                {job.dept} · {job.location}
                            </p>
                            <button className="mt-4 text-blue-600 hover:underline">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Join Us */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                        Why Work With Us
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        At CodeClub, we're focused on design, development, and delivering
                        exceptional software solutions to our clients. We foster growth,
                        collaboration, and innovation in every project.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 max-w-5xl mx-auto">
                <h3 className="text-center text-xl font-semibold text-gray-800 mb-8">
                    Our Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {[
                        { title: "Innovation", text: "Pushing the tech frontier daily" },
                        { title: "Integrity", text: "Transparent, honest, client-first" },
                        { title: "Growth", text: "Upskill and empower teams" },
                    ].map((v, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl text-blue-600 mb-2">✓</div>
                            <h4 className="font-semibold text-gray-800">{v.title}</h4>
                            <p className="text-gray-600 mt-1">{v.text}</p>
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
        </div>
    );
}
