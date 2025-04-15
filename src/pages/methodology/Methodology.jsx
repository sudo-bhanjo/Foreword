// import React from "react";
// import { motion } from "framer-motion";
// import workshopImg from "../../assets/methodology/1.png";
// import counsellingImg from "../../assets/methodology/2.png";

// const fadeIn = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const Methodology = () => {
//     return (
//         <section className="py-16 bg-white text-slate-800">
//             <div className="max-w-6xl mx-auto px-4">
//                 <motion.h2
//                     className="text-4xl font-bold text-center text-gray-800 mb-10"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeIn}
//                 >
//                     METHODOLOGY
//                 </motion.h2>

//                 {/* === Workshop Section === */}
//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-20 group"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeIn}
//                 >
//                     <div className="flex justify-center">
//                         <img
//                             src={workshopImg}
//                             alt="Workshop"
//                             className="w-60 h-auto transform group-hover:scale-105 transition duration-500"
//                         />
//                     </div>
//                     <div>
//                         <h3 className="text-2xl font-semibold text-[#427cf8] mb-2 border-b-4 border-[#427cf8] inline-block pb-1 transition">
//                             Workshop (2 days x 2 hours each day)
//                         </h3>
//                         <p className="text-gray-700 mb-3">
//                             Conducted in a group of 15-25 for the ones who’re looking for a dynamic hands-down learning experience.
//                         </p>
//                         <p className="font-medium text-gray-700">Features include:</p>
//                         <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
//                             <li className="transition">Discussions</li>
//                             <li className="transition">Group Activities</li>
//                             <li className="transition">Role-plays</li>
//                         </ul>
//                     </div>
//                 </motion.div>

//                 {/* === Counselling Section === */}
//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-[#f7f7f7] p-8 rounded-lg group"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeIn}
//                 >
//                     <div className="order-2 md:order-1">
//                         <h3 className="text-2xl font-semibold text-[#427cf8] mb-2 border-b-4 border-[#427cf8] inline-block pb-1 transition">
//                             One-on-One Counselling Session Series (5 days x 1.5 hours each day)
//                         </h3>
//                         <p className="text-gray-700 mb-3">
//                             Personal and intimate, these sessions are conducted in a series of 5 sessions with the Mentor, for anyone and everyone who’s looking for a personalized learning experience.
//                         </p>
//                         <p className="font-medium text-gray-700">Features include:</p>
//                         <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
//                             <li className="transition">Psychometric Tests</li>
//                             <li className="transition">Case Specific Guidance</li>
//                             <li className="transition">Expert Interactions</li>
//                         </ul>
//                     </div>
//                     <div className="flex justify-center order-1 md:order-2">
//                         <img
//                             src={counsellingImg}
//                             alt="Counselling"
//                             className="w-60 h-auto transform group-hover:scale-105 transition duration-500"
//                         />
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Methodology;


import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaUserTie } from "react-icons/fa";
import workshopImg from "../../assets/methodology/1.png";
import counsellingImg from "../../assets/methodology/2.png";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const Methodology = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white text-slate-800" id="methodology">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-extrabold text-blue-400 tracking-wide relative inline-block mb-2">
                        METHODOLOGY
                        <span className="block h-1 w-24 bg-blue-400 mx-auto mt-3 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                        Explore our dynamic and personalized learning methods to accelerate your growth.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* === Workshop Card === */}
                    <motion.div
                        className="bg-white backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-blue-100 hover:shadow-2xl transition duration-500 group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        variants={fadeUp}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-xl transform transition duration-500 group-hover:scale-105 group-hover:brightness-110">
                                <img
                                    src={workshopImg}
                                    alt="Workshop"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <FaUsers className="text-4xl text-blue-500 mb-3" />
                            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                                Workshop (2 days × 2 hours)
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Hands-on group learning for 15–25 participants seeking interactive experiences.
                            </p>
                            <ul className="text-left space-y-1 text-gray-600 font-medium">
                                <li className="transition">🔹 Discussions</li>
                                <li className="transition">🔹 Group Activities</li>
                                <li className="transition">🔹 Role-plays</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* === Counselling Card === */}
                    <motion.div
                        className="bg-white backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-blue-100 hover:shadow-2xl transition duration-500 group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                        variants={fadeUp}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-xl transform transition duration-500 group-hover:scale-105 group-hover:brightness-110">
                                <img
                                    src={counsellingImg}
                                    alt="Counselling"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <FaUserTie className="text-4xl text-blue-500 mb-3" />
                            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                                1-on-1 Counselling (5 days × 1.5 hours)
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Personalized mentoring for those looking for individual attention and expert advice.
                            </p>
                            <ul className="text-left space-y-1 text-gray-600 font-medium">
                                <li className="transition">🔹 Psychometric Tests</li>
                                <li className="transition">🔹 Case Specific Guidance</li>
                                <li className="transition">🔹 Expert Interactions</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
