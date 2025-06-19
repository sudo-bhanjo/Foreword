import React, { useEffect } from "react";
import { FaBullseye, FaEye, FaShieldAlt, FaUsers, FaStar, FaGlobe } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const items = [ 
        {
            title: "Our Mission",
            content:
                "To empower individuals and teams to express better, lead with empathy, and navigate professional spaces with clarity and confidence.",
            icon: <FaBullseye className="text-3xl text-indigo-500" />,
        },
        {
            title: "Our Vision",
            content:
                "To redefine success by making emotional intelligence, communication, and confidence the core of education and organizational growth.",
            icon: <FaEye className="text-3xl text-indigo-500" />,
        },
    ];

    const values = [
        {
            title: "Integrity",
            description:
                "Building trust through transparency and accountability",
            icon: <FaShieldAlt className="text-2xl text-green-600" />,
        },
        {
            title: "Empowerment",
            description:
                "Helping individuals discover and voice their true potential",
            icon: <FaUsers className="text-2xl text-yellow-500" />,
        },
        {
            title: "Excellence",
            description:
                "Delivering high-impact sessions backed by results",
            icon: <FaStar className="text-2xl text-blue-500" />,
        },
        {
            title: "Inclusivity",
            description:
                "Training that’s accessible to learners from diverse backgrounds",
            icon: <FaGlobe className="text-2xl text-purple-500" />,
        },
    ];

    return (
        <>
            {/* Mission & Vision Section */}
            <section className="py-14 px-6 bg-gradient-to-br from-white to-indigo-50">
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Mission & Vision</h2>
                    <p className="text-gray-600 mt-2">
                        What drives us forward with purpose and clarity
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-400"
                        >
                            <div className="mb-3">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">{item.content}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white py-14 px-6">
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
                    <p className="text-gray-600 mt-2">
                        Core principles that shape our culture and impact
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-gray-200"
                        >
                            <div className="mb-3">{value.icon}</div>
                            <h3 className="text-lg font-semibold text-indigo-700 mb-1">
                                {value.title}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default AboutSection;