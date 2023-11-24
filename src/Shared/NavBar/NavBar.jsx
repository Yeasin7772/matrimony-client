import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';


const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const userDropdownRef = useRef(null);

    const closeUserDropdown = () => setUserDropdownOpen(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        closeUserDropdown();
    };

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!isUserDropdownOpen);
        setMobileMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (
            userDropdownRef.current &&
            !userDropdownRef.current.contains(event.target)
        ) {
            closeUserDropdown();
        }
    };


    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const navLinks = (
        <>
            <Link to="/" className="block py-2  text-black font-semibold hover:text-red-500">
                Home
            </Link>
            <Link to="/biodata" className="block py-2  text-black font-semibold hover:text-red-500">
            Biodatas
            </Link>
            <Link to="/about" className="block py-2 text-black font-semibold hover:text-red-500">
            About Us
            </Link>
           
            <Link to="/contact" className="block py-2 text-black font-semibold hover:text-red-500">
                Contact
            </Link>
            <Link to="/login" className="block py-2 text-black font-semibold hover:text-red-500">
                Login
            </Link>
            <Link to="/signUp" className="block py-2 text-black font-semibold hover:text-red-500">
            sign Out
            </Link>
        </>
    );

    return (

        <Container>
            <nav className=" bg-gray-200 p-4 text-xl bg-opacity-20 text-white z-10 fixed top-0 left-0 w-full ">
                <div className="container mx-auto flex justify-between items-center">
                    <div className=" font-bold text-red-500 text-xl">
                        <Link to="/">Your Logo</Link>
                    </div>

                    {/* Navbar links for larger screens */}
                    <div className="hidden md:flex space-x-4">{navLinks}</div>

                    {/* Mobile menu button for smaller screens */}
                    <div className="md:hidden">
                        <button
                            className="text-white focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>

                        {/* Mobile menu */}
                        {isMobileMenuOpen && (
                            <div className="absolute top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4">
                                {navLinks}
                            </div>
                        )}
                    </div>

                    {/* User dropdown */}
                    <div className="relative inline-block text-left" ref={userDropdownRef}>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full focus:outline-none"
                            id="user-menu"
                            aria-haspopup="true"
                            aria-expanded={isUserDropdownOpen}
                            onClick={toggleUserDropdown}
                        >
                            <img
                                className="w-10 h-10 rounded-full object-cover"
                                src="https://placekitten.com/200/200"
                                alt="User"
                            />
                        </button>

                        {/* User dropdown menu */}
                        {isUserDropdownOpen && (
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                <div className="py-1" role="none">
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        to="/settings"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Settings
                                    </Link>
                                    <button
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                        onClick={() => console.log('Sign Out')}
                                        role="menuitem"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </Container>

    );
};

export default Navbar;
