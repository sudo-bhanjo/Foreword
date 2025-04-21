// import React, { useState } from 'react';

// const cardData = {
//     "One on One": [
//         { title: 'Personal Mentoring', image: 'https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?t=st=1744907143~exp=1744910743~hmac=08ebb004933921d0210410849bccde530f2fbb9424cda1bf81c18a5499adfc6b&w=1380', button: 'Book Now' },
//         { title: '1:1 Coding Session', image: 'https://img.freepik.com/free-vector/flat-design-coworking-illustration_23-2150320193.jpg?t=st=1744907169~exp=1744910769~hmac=b3f26757cf5bd2ac8590ec7ba784331b46a42cce09fe475edc42d953e163d8fa&w=900', button: 'Join Now' },
//         { title: 'Career Coaching', image: 'https://img.freepik.com/free-vector/discussion-concept-illustration_114360-28712.jpg?t=st=1744907193~exp=1744910793~hmac=921ea6c4570995dd5c287ba92ca74fcc3dae85c6e92e9f78d2b1a9791e900d39&w=826', button: 'Explore' },
//     ],
//     Corporate: [
//         { title: 'Team Training', image: 'https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?t=st=1744905381~exp=1744908981~hmac=9c8c681d9e6e570efc8e49a86fb4a6e34fb03c1b48ad8364ea34f181d79b94ee&w=1380', button: 'Contact Us' },
//         { title: 'Leadership Workshop', image: 'https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?t=st=1744905922~exp=1744909522~hmac=44aabb0d2c0e8d6ad358e425305ee2e6772234bf324c4ac187b519683d99b885&w=1380', button: 'Enroll' },
//         { title: 'Productivity Boost', image: 'https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-13391.jpg?t=st=1744907300~exp=1744910900~hmac=d9ad74870840755f3a0f2b99f7b8ba69644b80a1dff1720a619632b65d78181d&w=1380', button: 'Get Quote' },
//     ],
// };

// const DropdownCards = () => {
//     const [openTab, setOpenTab] = useState(null)

//     const toggleTab = (tab) => {
//         setOpenTab((prev) => (prev === tab ? null : tab));
//     };

//     return (
//         <div className="max-w-6xl mx-auto px-4 py-10">
//             <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
//                 {Object.keys(cardData).map((tab) => (
//                     <button
//                         key={tab}
//                         onClick={() => toggleTab(tab)}
//                         className={`px-6 py-3 rounded-full text-white font-semibold transition duration-300 shadow cursor-pointer ${openTab === tab ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
//                             }`}
//                     >
//                         {tab}
//                     </button>
//                 ))}
//             </div>

//             {openTab && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn">
//                     {cardData[openTab].map((card, idx) => (
//                         <div
//                             key={idx}
//                             className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
//                         >
//                             <img
//                                 src={card.image}
//                                 alt={card.title}
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-4 space-y-2 text-center">
//                                 <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
//                                 <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
//                                     {card.button}
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DropdownCards;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardData = {
    "One on One": [
        { title: 'Personal Mentoring', image: 'https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg', button: 'Book Now' },
        { title: '1:1 Coding Session', image: 'https://img.freepik.com/free-vector/flat-design-coworking-illustration_23-2150320193.jpg', button: 'Join Now' },
        { title: 'Career Coaching', image: 'https://img.freepik.com/free-vector/discussion-concept-illustration_114360-28712.jpg', button: 'Explore' },
    ],
    Corporate: [
        { title: 'Team Training', image: 'https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg', button: 'Contact Us' },
        { title: 'Leadership Workshop', image: 'https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg', button: 'Enroll' },
        { title: 'Productivity Boost', image: 'https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-13391.jpg', button: 'Get Quote' },
    ],
};

const DropdownCards = () => {
    const [openTab, setOpenTab] = useState("One on One");

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
                                    <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full border border-blue-300 hover:bg-blue-700 hover:text-white transition cursor-pointer">
                                        {card.button}
                                    </button>
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
