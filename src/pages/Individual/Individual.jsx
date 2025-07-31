import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const IndividualModule = () => {
    const module = {
        title: "Communication Mastery",
        description:
            "Unlock the power of impactful communication—because what you say is only as effective as how you say it. This module lays the foundation for confident, clear, and purposeful communication in personal, academic, and professional settings.",
        takeaways: [
            "Verbal & non-verbal communication basics",
            "Listening skills for better understanding",
            "Clarity, tone, and expression in conversations",
            "Structuring thoughts before speaking",
            "Building conversational confidence in English",
        ],
        idealFor:
            "Students, freshers, and professionals looking to enhance daily communication",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] p-6 md:p-12">
            <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/40">
                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase tracking-widest">
                    Individual Module Details
                </h2>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                    {module.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    {module.description}
                </p>

                {/* Key Takeaways */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Key Takeaways:
                    </h4>
                    <ul className="space-y-2">
                        {module.takeaways.map((point, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <FaCheckCircle className="text-green-500 mt-1" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Ideal For */}
                <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">Ideal For:</span>{" "}
                    {module.idealFor}
                </p>
            </div>
        </div>
    );
};

export default IndividualModule;
