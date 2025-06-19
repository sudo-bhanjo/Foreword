import React from "react";

const AboutSection = () => {
    const items = [
        {
            title: "Our Mission",
            content:
                "To empower individuals and teams to express better, lead with empathy, and navigate professional spaces with clarity and confidence.",
        },
        {
            title: "Our Vision",
            content:
                "To redefine success by making emotional intelligence, communication, and confidence the core of education and organizational growth.",
        },
    ];

    const values = [
        {
            title: "Integrity",
            description:
                "Building trust through transparency and accountability",
        },
        {
            title: "Empowerment",
            description:
                "Helping individuals discover and voice their true potential",
        },
        {
            title: "Excellence",
            description:
                "Delivering high-impact sessions backed by results",
        },
        {
            title: "Inclusivity",
            description:
                "Training that’s accessible to learners from diverse backgrounds",
        },
    ];

    return (
        <>
            <section className="py-12 px-6">
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
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">{item.content}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white py-12 px-6">
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
                    <p className="text-gray-600 mt-2">
                        Core principles that shape our culture and impact
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
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
