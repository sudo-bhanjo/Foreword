import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardData = {
    Corporate: [
        { title: 'Team Training', image: 'https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg', button: 'Contact Us' },
        { title: 'Leadership Workshop', image: 'https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg', button: 'Enroll' },
        { title: 'Productivity Boost', image: 'https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-13391.jpg', button: 'Get Quote' },
    ],
    "One on One": [
        { title: 'Personal Mentoring', image: 'https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg', button: 'Book Now', link: 'https://docs.google.com/forms/d/e/1FAIpQLScBWr_dB0jONVPlrN5SEHfRUZfI0XzV-1ulHEFHxj9IPddklQ/viewform' },
        { title: '1:1 Coding Session', image: 'https://img.freepik.com/free-vector/flat-design-coworking-illustration_23-2150320193.jpg', button: 'Join Now' },
        { title: 'Career Coaching', image: 'https://img.freepik.com/free-vector/discussion-concept-illustration_114360-28712.jpg', button: 'Explore' },
    ],
};

const DropdownCards = () => {
    const [openTab, setOpenTab] = useState("Corporate");

    const toggleTab = (tab) => {
        setOpenTab((prev) => (prev === tab ? null : tab));
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
                {Object.keys(cardData).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => toggleTab(tab)}
                        className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-md focus:outline-none hover:cursor-pointer ${openTab === tab
                            ? 'bg-blue-700 text-white'
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {openTab && (
                    <motion.div
                        key={openTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        {cardData[openTab].map((card, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.03] transition-all duration-300"
                                whileHover={{ scale: 1.03 }}
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5 space-y-3 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Ready to elevate your skills or empower your team? Book a session and start your journey today.
                                    </p>
                                    {card.link ? (
                                        <a
                                            href={card.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full border border-blue-300 hover:bg-blue-700 hover:text-white transition cursor-pointer">
                                                {card.button}
                                            </button>
                                        </a>
                                    ) : (
                                        <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full border border-blue-300 hover:bg-blue-700 hover:text-white transition cursor-pointer">
                                            {card.button}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownCards;
