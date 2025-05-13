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





import React, { useEffect, useRef } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImg from "../../assets/bg_img.webp";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/man.webp";

const HeroSection = () => {
    const containerRef = useRef(null);
    const images = [img1, img2, img3];
    let index = 0;

    useEffect(() => {
        AOS.init({ duration: 800, once: true });

        const interval = setInterval(() => {
            const container = containerRef.current;
            if (!container) return;

            index = (index + 1) % images.length;
            container.scrollTo({
                left: index * container.offsetWidth,
                behavior: "smooth",
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="bg-cover bg-center bg-no-repeat px-6 md:px-16 py-12"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Content */}
                <div className="text-center md:text-left w-full md:w-1/2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#173263] mb-4 leading-snug">
                        The very first <br />
                        <span>note of your</span> <br />
                        magnificent career path
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-[#296df4] hover:bg-transparent text-white hover:text-[#296df4] px-6 py-3 rounded-full flex items-center gap-2 transition-all relative z-10 overflow-hidden group hover:cursor-pointer">
                            <span className="relative z-20 flex items-center gap-2">
                                Book Inquiry <FaArrowUpRightFromSquare />
                            </span>
                            <span className="absolute inset-0 rounded-full border border-[#296df4] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </button>
                    </div>
                </div>

                {/* Right Slider */}
                <div
                    ref={containerRef}
                    className="w-full md:w-1/2 overflow-hidden rounded-xl"
                >
                    <div className="flex transition-all duration-500 ease-in-out">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-full flex items-center justify-center px-2"
                                style={{ scrollSnapAlign: "start" }}
                            >
                                <img
                                    src={img}
                                    alt={`Slide ${i + 1}`}
                                    className="w-full max-h-[300px] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
