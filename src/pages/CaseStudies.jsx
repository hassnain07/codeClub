import React from "react";
import PageBanner from "../components/casestudies/PageBanner"; // Adjust path if needed
import OurProjects from "../components/casestudies/OurProjects"; // Import the component

const CaseStudies = () => {
    return (
        <div className="mt-24">
            {/* <PageBanner title="Our Projects" subtitle="One look is worth a thousand words." /> */}

            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-4 mt-3">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                        <span className="inline-block bg-gradient-to-r from-blue-600 to-yellow-400 text-transparent bg-clip-text">
                            ✨ Featured Work
                        </span>
                    </h2>
                    <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Real solutions for real problems. Here's what we've built with purpose and precision.
                    </p>
                </div>

                <OurProjects />
            </section>

        </div>
    );
};

export default CaseStudies;
