import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
    const blogPosts = [
        "How to Improve Your Soft Skills in 30 Days",
        "Top 5 Mistakes in Professional Communication",
        "Resume Writing Tips for Freshers",
        "Building Emotional Intelligence at Work",
    ];

    return (
        <section className="bg-white pb-10 px-6 sm:px-10 md:px-20">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 relative inline-block">
                    <span className="px-2 py-1 rounded-sm">Blogs</span>
                </h2>

                {/* Blog Cards */}
                <div className="space-y-6">
                    {blogPosts.map((title, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        >
                            <p className="text-gray-800 text-base sm:text-lg group-hover:text-indigo-600 transition-colors duration-300">
                                {title}
                            </p>
                            <FaArrowRight className="text-gray-400 group-hover:text-indigo-600 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
