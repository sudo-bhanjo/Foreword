// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaQuoteLeft } from 'react-icons/fa';

// import Test1 from '../../assets/Testimonials/1.jpg';
// import Test2 from '../../assets/Testimonials/2.jpg';
// import Test3 from '../../assets/Testimonials/3.jpg';
// import Test4 from '../../assets/Testimonials/4.jpg';

// const testimonials = [
//     {
//         name: "Johny Singh",
//         title: "Software Engineer",
//         testimonial: "This platform transformed my learning experience!",
//         image: Test1,
//     },
//     {
//         name: "Sarah Smith",
//         title: "Product Manager",
//         testimonial: "Highly engaging and informative content.",
//         image: Test2,
//     },
//     {
//         name: "Alex Johnson",
//         title: "UI/UX Designer",
//         testimonial: "Super intuitive and beautifully designed!",
//         image: Test3,
//     },
//     {
//         name: "Linda Brown",
//         title: "Data Scientist",
//         testimonial: "The best place to grow your skills.",
//         image: Test4,
//     },
// ];

// const TestimonialCard = () => {
//     return (
//         <section className="py-20 bg-gradient-to-br from-white to-blue-50" id='testimonials'>
//             <div className="text-center mb-14">
//                 <h2 className="text-4xl font-bold text-gray-800 mt-2">Testimonials</h2>
//                 <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-14">
//                 {testimonials.map((user, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: index * 0.2 }}
//                         viewport={{ once: true }}
//                         className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 text-center group"
//                     >
//                         <div className="flex justify-center mb-4">
//                             <img
//                                 src={user.image}
//                                 alt={user.name}
//                                 className="w-24 h-24 rounded-full border-4 border-blue-100 object-cover shadow"
//                             />
//                         </div>
//                         <FaQuoteLeft className="text-blue-500 text-2xl mb-2 mx-auto" />
//                         <p className="text-gray-600 text-sm italic mb-4">"{user.testimonial}"</p>
//                         <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
//                         <p className="text-sm text-blue-500">{user.title}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default TestimonialCard;


import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

import Test1 from "../../assets/Testimonials/1.jpg";
import Test2 from "../../assets/Testimonials/2.jpg";
import Test3 from "../../assets/Testimonials/3.jpg";
import Test4 from "../../assets/Testimonials/4.jpg";

const testimonials = [
    {
        name: "Johny Singh",
        title: "Software Engineer",
        testimonial: "This platform transformed my learning experience!",
        image: Test1,
    },
    {
        name: "Sarah Smith",
        title: "Product Manager",
        testimonial: "Highly engaging and informative content.",
        image: Test2,
    },
    {
        name: "Alex Johnson",
        title: "UI/UX Designer",
        testimonial: "Super intuitive and beautifully designed!",
        image: Test3,
    },
    {
        name: "Linda Brown",
        title: "Data Scientist",
        testimonial: "The best place to grow your skills.",
        image: Test4,
    },
];

const loopTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = () => {
    return (
        <section id="testimonials">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-[#173263] mt-2">Testimonials</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
            </div>

            <div className="overflow-hidden relative w-full">
                <motion.div
                    className="flex gap-8 w-max px-5"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {loopTestimonials.map((user, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md p-6 min-w-[280px] md:min-w-[320px] rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 text-center group"
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="w-24 h-24 rounded-full border-4 border-blue-100 object-cover shadow"
                                />
                            </div>
                            <FaQuoteLeft className="text-blue-500 text-2xl mb-2 mx-auto" />
                            <p className="text-gray-600 text-sm italic mb-4">"{user.testimonial}"</p>
                            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                            <p className="text-sm text-blue-500">{user.title}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialCard;
