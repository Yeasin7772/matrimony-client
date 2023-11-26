import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../../components/Container/Container';
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const userDropdownRef = useRef(null);

    const { isAdmin } = useAdmin()

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

    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const navLinks = (
        <>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? " text-black" : isActive ? "text-red-500 underline" : ""
            }>
                Home
            </NavLink>
            <NavLink to="/biodata" className={({ isActive, isPending }) =>
                isPending ? " text-black" : isActive ? "text-red-500 underline" : ""
            }>
                Biodatas
            </NavLink>
            <NavLink to="/about" className={({ isActive, isPending }) =>
                isPending ? " text-black" : isActive ? "text-red-500 underline" : ""
            }>
                About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive, isPending }) =>
                isPending ? " text-black" : isActive ? "text-red-500 underline" : ""
            }>
                Contact
            </NavLink>

            {/* <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                isPending ? " text-black" : isActive ? "text-red-500 underline" : ""
            }>
                Dashboard
            </NavLink> */}
            {
                user && isAdmin &&
                <NavLink to='/dashboard/adminDashboard' className={({ isActive, isPending }) =>
                    isPending ? " text-black" : isActive ? "text-red-500 underline" : ""
                }>
                    Dashboard
                </NavLink>

            }
            {

                user && !isAdmin &&

                <NavLink to='/dashboard/userHome' className={({ isActive, isPending }) =>
                    isPending ? " text-black" : isActive ? "text-red-500 underline" : ""
                }>
                    Dashboard
                </NavLink>
            }
        </>
    );

    return (
        <Container>
            <nav className="bg-gray-600 p-4 text-2xl bg-opacity-20 text-black font-bold z-10 fixed top-0 left-0 w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="font-bold text-red-500 text-xl">
                        <Link to="/" aria-label="Home">
                            Your Logo
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-6">{navLinks}</div>

                    <div className="md:hidden">
                        <button
                            className="text-white focus:outline-none mobile-menu-icon"
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
                                />
                            </svg>
                        </button>

                        {isMobileMenuOpen && (
                            <div className="absolute top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4">
                                {navLinks}
                            </div>
                        )}
                    </div>

                    <div className="relative inline-block text-left" ref={userDropdownRef}>
                        {user?.email ? (
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
                                    src={user?.photoURL || 'default-image-url'}
                                    alt="User"
                                />
                            </button>
                        ) : (
                            <Link to="/login">
                                <button
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Login
                                </button>
                            </Link>
                        )}

                        {isUserDropdownOpen && (
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                <div className="py-1 text-center text-xl " role="none">
                                    <Link
                                        className="block px-4 uppercase py-2  text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        {user?.displayName}
                                    </Link>

                                    <Link
                                        className="block text-center px-4 py-2  text-red-600 hover:bg-gray-100"
                                        onClick={handelLogOut}
                                        role="menuitem"
                                    >
                                        Sign Out
                                    </Link>
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
