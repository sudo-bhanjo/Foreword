import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../assets/Logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-white px-6 py-4 shadow-md w-full fixed top-0 z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-12" />
                </div>

                {/* Desktop Menu (Moved to right side) */}
                <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-black ml-auto">
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#">Home</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#about">About Us</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#programs">Programs</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#partner">Partner</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#blogs">Blogs</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#testimonials">Testimonials</a>
                    </li>
                </ul>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-xl p-2 rounded-full bg-blue-500 text-white"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 py-4 mt-2 space-y-4 rounded">
                    <ul className="space-y-5 text-sm font-medium">
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#">Home</a>
                        </li>
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#about">About Us</a>
                        </li>
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#programs">Programs</a>
                        </li>
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#partner">Partner</a>
                        </li>
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#blogs">Blogs</a>
                        </li>
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
