import React, { useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImage from "../../assets/man.webp";
import bgImg from "../../assets/bg_img.webp";
import aboutImg from '../../assets/about/about.webp'

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <>
            <section
                className="bg-cover bg-center bg-no-repeat px-6 md:px-16"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                    {/* Left Content */}
                    <div className="text-center md:text-left w-full md:w-1/2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#173263] mb-4 leading-snug">
                            The very first <br />
                            <span>note of your</span> <br />
                            magnificent career path
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button
                                className="bg-[#296df4] hover:bg-transparent text-white hover:text-[#296df4] px-6 py-3 rounded-full flex items-center gap-2 transition-all relative z-10 overflow-hidden group hover:cursor-pointer"
                            >
                                <span className="relative z-20 flex items-center gap-2">
                                    Book Inquiry <FaArrowUpRightFromSquare />
                                </span>
                                <span className="absolute inset-0 rounded-full border border-[#296df4] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </button>
                        </div>
                    </div>

                    {/* Right Image - Hidden on small screens */}
                    <div className="w-full md:w-1/2 hidden md:flex justify-center">
                        <img src={HeroImage} alt="Student Hero" className="max-w-full h-auto" />
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 px-4 md:px-16" id="about">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center rounded-3xl shadow-xl overflow-hidden">
                    {/* Left Image Section */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src={aboutImg}
                            alt="Students in Classroom"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Content Section */}
                    <div className="md:w-1/2 w-full p-8 md:p-12 bg-white">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">About</h2>
                        <h3 className="text-3xl font-extrabold text-[#090937] mb-4">Foreward University</h3>
                        <p className="text-gray-600 mb-6">
                            Foreword: School of Soft Skills brings unique concepts of Soft Skills enhancement to budding learners with the ultimate goal of making soft skills development a part of the education curriculum. Based on modern scientific methods, Foreword offers a plethora of dynamic group activities, case specific guidance, and personal counselling sessions with the Mentor. Sessions are conducted with utmost care and diligence keeping in mind the need of every participant.
                        </p>
                        <button className="hover:bg-transparent bg-blue-600 text-white px-10 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:border-1 hover:border-[#296df4] hover:text-[#296df4] hover:cursor-pointer">
                            University Overview
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
