import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../assets/Logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-white px-6 py-4 shadow-md w-full">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-8" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-black">
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#">Home</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#about">About Us</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#methodology">Methodology</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#partner">Partner</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <a href="#testimonials">Testimonials</a>
                    </li>
                </ul>

                {/* Desktop Search */}
                <div className="hidden md:flex items-center border rounded-full overflow-hidden shadow-sm">
                    <select className="bg-gray-100 px-3 py-2 outline-none text-sm text-gray-700">
                        <option>Categories 1</option>
                        <option>Categories 2</option>
                        <option>Categories 3</option>
                        <option>Categories 4</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search Here"
                        className="px-3 py-2 outline-none w-40 text-sm"
                    />
                    <button className="px-3 text-gray-600 hover:text-black">
                        <FaSearch />
                    </button>
                </div>

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
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#">Home</a>
                        </li>
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#about">About Us</a>
                        </li>
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#methodology">Methodology</a>
                        </li>
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#partner">Partner</a>
                        </li>
                        <li className="cursor-pointer" onClick={handleMenuItemClick}>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                    </ul>

                    {/* Mobile Search */}
                    <div className="flex items-center border rounded-full overflow-hidden mt-4">
                        <select className="px-3 py-2 outline-none text-sm">
                            <option>Categories 1</option>
                            <option>Categories 2</option>
                            <option>Categories 3</option>
                            <option>Categories 4</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search Here"
                            className="px-3 py-2 outline-none w-full text-sm text-black"
                        />
                        <button className="px-3 text-white hover:text-yellow-200">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
