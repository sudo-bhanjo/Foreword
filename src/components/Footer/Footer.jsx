import React, { useEffect, useState } from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaEnvelope,
    FaPhoneAlt,
} from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa6';
import Logo from '../../assets/Logo.png';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#f7fbff] text-gray-700 pt-6 pb-6 border-t relative">

            {/* Main Footer Grid */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-10">

                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src={Logo} alt="Logo" className="w-40" />
                    </div>
                    <p className="text-sm leading-relaxed">
                        Welcome to the world of education,<br />
                        Where knowledge unlocks endless<br />
                        possibilities! societies.
                    </p>

                    <h4 className="text-md font-bold mt-6 mb-2 text-[#0a0d3b]">Follow us</h4>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/people/Foreword-School-of-Soft-Skills/100063752177327" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                            <FaTwitter size={14} />
                        </a>
                        <a href="https://www.linkedin.com/company/forewordarc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                            <FaLinkedinIn size={14} />
                        </a>
                        <a href="https://www.instagram.com/foreword.softskills" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                            <FaInstagram size={14} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                            <FaYoutube size={14} />
                        </a>
                    </div>
                </div>

                {/* About */}
                <div>
                    <h4 className="font-bold text-[#0a0d3b] mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#about" className="hover:underline">About us</a></li>
                        <li><a href="#methodology" className="hover:underline">Methodology</a></li>
                        <li><a href="#partner" className="hover:underline">Partner</a></li>
                        <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="font-bold text-[#0a0d3b] mb-4">About us</h4>
                    <ul className="space-y-2 text-sm">
                        {['Support Center', 'Affiliate', 'Careers', 'Sitemap', 'Help Center'].map((item, i) => (
                            <li key={i} className="hover:underline cursor-pointer"><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-[#0a0d3b] mb-4">Contact</h4>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-blue-600" />
                            <span>contact@forewordarc.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-blue-600" />
                            <span>(+91) 86970 03660</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="mt-10 border-t pt-4 px-4 flex flex-col md:flex-row justify-evenly items-center text-sm text-[#0a0d3b]">
                <p>&copy; 2025 - Foreword, Developed by Simtrak Solutions</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                </div>
            </div>

            {/* Back to top button */}
            {showButton && (
                <div className="fixed bottom-6 right-6 z-50">
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition duration-300 ease-in-out hover:cursor-pointer"
                        title="Back to top"
                    >
                        <FaArrowUp className="text-lg" />
                    </button>
                </div>
            )}
        </footer>
    );
};

export default Footer;
