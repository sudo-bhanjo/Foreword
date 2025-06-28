import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Founder from "../../assets/Founder/1.png";

const AboutFounder = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="bg-white px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between">
            {/* Left Section */}
            <div
                className="w-full md:w-1/2 mt-8 md:mt-0"
                data-aos="fade-right"
            >
                <h2 className="text-4xl font-semibold text-[#173263] mb-4">
                    About The Founder
                </h2>
                <div className="w-20 h-1 bg-[#173263] mb-6" />
                <p className="text-gray-700 text-lg leading-relaxed font-[500]">
                    Our Mentor, Ms. Amrita Ray Chaudhury (ARC), an Entrepreneur and a member
                    of the Art of Living Foundation, has been mentoring students and
                    professionals in the field of Soft Skills Development for many years.
                    Having a master's degree in Human Resource Management, she has also
                    worked as a HR personnel in different firms. Her dynamic personality
                    has also found a place in various projects with the Govt. of India and
                    the United Nations. Ms. Amrita’s ultimate goal is to make soft skills
                    training a part of education curriculum.
                </p>
            </div>

            {/* Right Section */}
            <div
                className="relative w-full md:w-1/2 flex justify-center items-center"
                data-aos="fade-left"
            >
                {/* Yellow background blob */}
                <div className="absolute -z-10 top-0 right-0 w-[300px] h-[300px] bg-[#49BCFF] rounded-full blur-3xl opacity-80 animate-pulse"></div>

                {/* Founder Image */}
                <img
                    src={Founder}
                    alt="Founder"
                    className="w-[300px] h-auto rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                />

                {/* Decorative blobs */}
                <div className="absolute left-0 top-10 w-20 h-20 bg-blue-200 rounded-full opacity-90 animate-bounce"></div>
                <div className="absolute right-10 bottom-0 w-20 h-20 bg-blue-400 rounded-full opacity-90 animate-ping"></div>
            </div>
        </div>
    );
};

export default AboutFounder;
