import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/Blogs/Blog-1.jpg";
import Blog2 from "../../assets/Blogs/Blog-2.jpg";
import Blog3 from "../../assets/Blogs/Blog-3.jpg";
import Blog4 from "../../assets/Blogs/Blog-4.jpg";

const blogs = [
    {
        title: "How to Improve Your Soft Skills in 30 Days",
        description: "Enhance your communication and leadership.",
        image: Blog1,
    },
    {
        title: "Top 5 Mistakes in Professional Communication",
        description: "Avoid common pitfalls and grow professionally.",
        image: Blog2,
    },
    {
        title: "Resume Writing Tips for Freshers",
        description: "Write a resume that stands out.",
        image: Blog3,
    },
    {
        title: "Building Emotional Intelligence at Work",
        description: "Improve EQ for a better workplace.",
        image: Blog4,
    },
];

const loopBlogs = [...blogs, ...blogs];

const BlogSection = () => {
    return (
        <section id="blogs" className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 sm:px-10 md:px-20">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800">Latest Blogs</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
            </div>

            <div className="overflow-hidden relative w-full">
                <motion.div
                    className="flex gap-6 w-max px-4 sm:px-6 md:px-10"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {loopBlogs.map((blog, index) => (
                        <div
                            key={index}
                            className="w-[240px] sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 group flex-shrink-0 flex flex-col overflow-hidden"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-[160px] object-cover"
                            />
                            <div className="px-3 py-3 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-indigo-600 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{blog.description}</p>
                                </div>
                                <div className="flex justify-end mt-auto">
                                    <FaArrowRight className="text-indigo-500 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
