import React from 'react'
import aboutImg from '../../assets/about/Aboutus.png'
import { FaCheckCircle } from "react-icons/fa";

const features = [
    "Real-world case studies and practical exercises",
    "Customised modules based on individual/corporate needs",
    "Post-training support & performance tracking",
    "Experienced trainers from diverse professional backgrounds",
];

const About = () => {
    return (
        <div>
            <section className="bg-white px-4 md:px-16" id="about">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch rounded-3xl shadow-xl overflow-hidden">
                    {/* Left Image Section */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src={aboutImg}
                            alt="Students in Classroom"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Content Section */}
                    <div className="md:w-1/2 w-full p-8 bg-white">
                        <h2 className="text-2xl font-semibold text-[#173263] mb-2">About Us</h2>
                        <p className="text-gray-600 mb-3">
                            At Foreword: School of Soft Skills, we believe that technical knowledge alone is not enough to thrive in today's world.
                        </p>
                        <p className="text-gray-600 mb-3">
                            Foreword: School of Soft Skills was founded by Amrita RayChaudhury, a communications expert and mentor, with a mission to make soft skills accessible, relevant, and transformative for all. With over a decade of experience in training students, professionals, and teams, Amrita envisioned a platform where individuals could develop not just their resumes, but their presence, confidence, and influence. We help you write your 'foreword'—the beginning of a confident, articulate, and emotionally intelligent you.
                        </p>
                        <p className="text-gray-600 mb-3">
                            From communication and leadership training to interview preparation and HR transformation services, we help you master the human side of success.
                        </p>
                        <h2 className="text-2xl font-semibold mb-2 text-[#173263]">What Makes Us Different:</h2>
                        <ul className="list-none space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <FaCheckCircle className="text-[#173263] mt-1 mr-2" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
