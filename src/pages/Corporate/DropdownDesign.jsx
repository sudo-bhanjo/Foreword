import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";

const ModuleCard = ({ number, title, description, takeaways, idealFor }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white/20 backdrop-blur-md shadow-lg rounded-2xl border border-white/30 p-6 mb-6 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            {/* Header */}
            <div
                className="flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-xl font-bold text-gray-800">
                    <span className="text-indigo-600 font-black mr-2">#{number}</span>
                    {title}
                </h2>
                <FaChevronDown
                    className={`text-gray-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </div>

            {/* Animate Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-4 text-gray-700 space-y-4"
                    >
                        <p className="text-md leading-relaxed">{description}</p>

                        <div>
                            <h4 className="font-semibold text-gray-900">Key Takeaways:</h4>
                            <ul className="space-y-2 mt-2">
                                {takeaways.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                        <FaCheckCircle className="text-green-500 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p>
                                <span className="font-semibold text-gray-900">Ideal For:</span>{" "}
                                {idealFor}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ModuleCard;
