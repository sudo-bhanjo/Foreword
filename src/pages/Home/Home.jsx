// import React, { useEffect, useRef } from "react";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import bgImg from "../../assets/bg_img.webp";

// import img1 from "../../assets/1.png";
// import img2 from "../../assets/2.png";
// import img3 from "../../assets/man.webp";

// const HeroSection = () => {
//     const containerRef = useRef(null);
//     const images = [img1, img2, img3];
//     let index = 0;

//     useEffect(() => {
//         AOS.init({ duration: 800, once: true });

//         const interval = setInterval(() => {
//             const container = containerRef.current;
//             if (!container) return;

//             index = (index + 1) % images.length;
//             container.scrollTo({
//                 top: index * container.offsetHeight,
//                 behavior: "smooth",
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section
//             className="bg-cover bg-center bg-no-repeat px-6 md:px-16 py-12"
//             style={{ backgroundImage: `url(${bgImg})` }}
//         >
//             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//                 {/* Left Side Content */}
//                 <div className="text-center md:text-left w-full md:w-1/2">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#173263] mb-4 leading-snug">
//                         The very first <br />
//                         <span>note of your</span> <br />
//                         magnificent career path
//                     </h1>
//                     <p className="text-gray-600 text-sm sm:text-base mb-6">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                         luctus nec ullamcorper mattis, pulvinar dapibus leo.
//                     </p>
//                     <div className="flex justify-center md:justify-start">
//                         <button className="bg-[#296df4] hover:bg-transparent text-white hover:text-[#296df4] px-6 py-3 rounded-full flex items-center gap-2 transition-all relative z-10 overflow-hidden group hover:cursor-pointer">
//                             <span className="relative z-20 flex items-center gap-2">
//                                 Book Inquiry <FaArrowUpRightFromSquare />
//                             </span>
//                             <span className="absolute inset-0 rounded-full border border-[#296df4] opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Side Carousel */}
//                 <div
//                     ref={containerRef}
//                     className="w-1/2 h-[300px] md:h-[500px] overflow-hidden rounded-xl"
//                 >
//                     <div className="flex flex-col" style={{ height: `${images.length * 100}%` }}>
//                         {images.map((img, i) => (
//                             <div key={i} className="h-[300px] md:h-[500px] w-full flex-shrink-0">
//                                 <img
//                                     src={img}
//                                     alt={`Slide ${i + 1}`}
//                                     className="h-full w-full object-contain"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;





// import React, { useEffect, useRef } from "react";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import bgImg from "../../assets/bg_img.webp";

// import img1 from "../../assets/1.png";
// import img2 from "../../assets/2.png";
// import img3 from "../../assets/man.webp";

// const HeroSection = () => {
//     const containerRef = useRef(null);
//     const images = [img1, img2, img3];
//     let index = 0;

//     useEffect(() => {
//         AOS.init({ duration: 800, once: true });

//         const interval = setInterval(() => {
//             const container = containerRef.current;
//             if (!container) return;

//             index = (index + 1) % images.length;
//             container.scrollTo({
//                 left: index * container.offsetWidth,
//                 behavior: "smooth",
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section
//             className="bg-cover bg-center bg-no-repeat px-6 md:px-16 py-12"
//             style={{ backgroundImage: `url(${bgImg})` }}
//         >
//             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//                 {/* Left Content */}
//                 <div className="text-center md:text-left w-full md:w-1/2">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#173263] mb-4 leading-snug">
//                         The very first <br />
//                         <span>note of your</span> <br />
//                         magnificent career path
//                     </h1>
//                     <p className="text-gray-600 text-sm sm:text-base mb-6">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//                         tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//                     </p>
//                     <div className="flex justify-center md:justify-start">
//                         <button className="bg-[#296df4] hover:bg-transparent text-white hover:text-[#296df4] px-6 py-3 rounded-full flex items-center gap-2 transition-all relative z-10 overflow-hidden group hover:cursor-pointer">
//                             <span className="relative z-20 flex items-center gap-2">
//                                 Book Inquiry <FaArrowUpRightFromSquare />
//                             </span>
//                             <span className="absolute inset-0 rounded-full border border-[#296df4] opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Slider */}
//                 <div
//                     ref={containerRef}
//                     className="w-full md:w-1/2 overflow-hidden rounded-xl"
//                 >
//                     <div className="flex transition-all duration-500 ease-in-out">
//                         {images.map((img, i) => (
//                             <div
//                                 key={i}
//                                 className="flex-shrink-0 w-full flex items-center justify-center px-2"
//                                 style={{ scrollSnapAlign: "start" }}
//                             >
//                                 <img
//                                     src={img}
//                                     alt={`Slide ${i + 1}`}
//                                     className="w-full max-h-[300px] object-contain"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;


import React, { useEffect, useRef, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import bgImg from "../../assets/bg_img.webp";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/man.webp";

const slides = [
    {
        image: img1,
        title: "Empower Your Voice. Elevate Your Workspace Efficiency.",
        description: "Whether you're a student striving to build confidence or an organization aiming to strengthen team dynamics, our expert-led soft skills training empowers both individuals and teams to succeed in today’s fast-paced world.",
        buttonText: "Get Started"
    },
    {
        image: img2,
        title: "At Foreword: School of Soft Skills, we turn potential into performance.",
        description: "Whether you're a student striving to build confidence or an organization aiming to strengthen team dynamics, our expert-led soft skills training empowers both individuals and teams to succeed in today’s fast-paced world.",
        buttonText: "Join Now"
    },
    {
        image: img3,
        title: "Discover your best self with Foreword — where communication, confidence, and culture come together.",
        description: "Whether you're a student striving to build confidence or an organization aiming to strengthen team dynamics, our expert-led soft skills training empowers both individuals and teams to succeed in today’s fast-paced world.",
        buttonText: "Explore More"
    },
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3];
    const totalSlides = images.length;

    const slideRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    return (
        <>
            <div className="overflow-hidden w-full">
                <div
                    ref={slideRef}
                    className="flex transition-transform duration-700 ease-in-out w-full"
                >
                    {slides.map((slide, index) => (
                        <section
                            key={index}
                            className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-12 flex-shrink-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${bgImg})`, minWidth: "100%" }}
                        >
                            {/* Left Content */}
                            <div className="text-center md:text-left w-full md:w-1/2">
                                <h1 className="text-3xl sm:text-4xl font-bold text-[#173263] mb-4 leading-snug">
                                    {slide.title.split("\n").map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </h1>
                                <p className="text-gray-600 text-sm sm:text-base mb-6">
                                    {slide.description}
                                </p>
                                <div className="flex justify-center md:justify-start">
                                    <button className="bg-[#296df4] hover:bg-transparent text-white hover:text-[#296df4] px-6 py-3 rounded-full flex items-center gap-2 transition-all relative z-10 overflow-hidden group hover:cursor-pointer">
                                        <span className="relative z-20 flex items-center gap-2">
                                            {slide.buttonText} <FaArrowUpRightFromSquare />
                                        </span>
                                        <span className="absolute inset-0 rounded-full border border-[#296df4] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    </button>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 flex items-center justify-center">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full max-h-[300px] object-contain"
                                />
                            </div>
                        </section>
                    ))}
                </div>
            </div>
            <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 sm:px-10 md:px-20 text-center md:text-left">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Left Text Content */}
                    <div className="md:w-2/3" data-aos="fade-right">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#173263] mb-4 leading-snug">
                            We provide personalized soft skill development programs
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            For students, professionals, and corporate teams — because how you present, connect, and collaborate defines your success.
                        </p>
                    </div>

                    {/* Right CTA Buttons */}
                    <div className="md:w-1/3 flex flex-col gap-4 w-full" data-aos="fade-left">
                        <button className="bg-[#296df4] text-white px-6 py-3 rounded-full hover:bg-blue-600 flex items-center justify-center gap-2 transition-all cursor-pointer">
                            Explore Our Programs <FaArrowRight />
                        </button>
                        <button className="border border-[#296df4] text-[#296df4] px-6 py-3 rounded-full hover:bg-[#296df4] hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer">
                            Book a Free Consultation <FaArrowRight />
                        </button>
                        <button className="bg-gray-200 text-[#173263] px-6 py-3 rounded-full hover:bg-gray-300 flex items-center justify-center gap-2 transition-all cursor-pointer">
                            Corporate Enquiry <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
