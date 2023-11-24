import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const userDropdownRef = useRef(null);

    const closeMobileMenu = () => setMobileMenuOpen(false);
    const closeUserDropdown = () => setUserDropdownOpen(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        closeUserDropdown();
    };

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!isUserDropdownOpen);
        closeMobileMenu();
    };

    const handleClickOutside = (event) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            closeMobileMenu();
        }

        if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
            closeUserDropdown();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const user = {
        photoURL: 'https://placekitten.com/200/200',
        displayName: 'John Doe',
    };

    const handelLogOut = () => {
        console.log('Logging out...');
        // Implement your logout logic here
    };

    const navLinks = (
        <>
            <Link to="/" className="block py-2 text-white hover:text-gray-300" onClick={closeMobileMenu}>
                Home
            </Link>
            <Link to="/about" className="block py-2 text-white hover:text-gray-300" onClick={closeMobileMenu}>
                About
            </Link>
            <Link to="/services" className="block py-2 text-white hover:text-gray-300" onClick={closeMobileMenu}>
                Services
            </Link>
            <Link to="/contact" className="block py-2 text-white hover:text-gray-300" onClick={closeMobileMenu}>
                Contact
            </Link>
        </>
    );

    return (
        <nav className="bg-gray-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    <Link to="/">Your Logo</Link>
                </div>

             
                <div className="hidden md:flex space-x-4">{navLinks}</div>

            
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

                   
                    {isMobileMenuOpen && (
                        <div className="absolute top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4" ref={mobileMenuRef}>
                            {navLinks}
                        </div>
                    )}
                </div>

                {/*  dropdown */}
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
                            src={user?.photoURL}
                            alt={user?.displayName}
                        />
                    </button>

                    {/* User dropdown menu */}
                    {isUserDropdownOpen && user?.photoURL && (
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
                                    onClick={closeUserDropdown}
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/settings"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                    onClick={closeUserDropdown}
                                >
                                    Settings
                                </Link>
                                <button
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                    onClick={handelLogOut}
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
    );
};

export default Navbar;
