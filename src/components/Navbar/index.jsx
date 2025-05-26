import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/Logo.webp";
import { Link, useLocation } from "react-router-dom";

const navLinksData = [
  { to: "/", text: "Home" },
  { to: "/Domain", text: "Domain" },
  { to: "/Milestones", text: "Milestones" },
  { to: "/Documents", text: "Documents" },
  { to: "/Slides", text: "Slides" },
  { to: "/AboutUs", text: "About us" },
  { to: "/ContactUs", text: "Contact us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null); // Ref for the entire nav to detect outside clicks

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Calculate navbar height for mobile menu positioning (approximate)
  // py-3 (0.75rem * 2 = 1.5rem) + logo h-10 (2.5rem) = 4rem
  const navbarHeight = "4rem"; // Or use a ref to measure dynamically if needed

  return (
    <nav ref={navRef} className="bg-white font-sans border-b-2 border-gray-200 relative z-50">
      {/* Inner container for content alignment and padding */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Skillnet Logo"
              className="h-10 w-auto" // Original h-10
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 font-medium text-slate-700 text-base lg:text-lg">
          {navLinksData.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="block py-2 px-2 text-black hover:text-blue-400 transition-colors duration-200"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Flyout/Dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out overflow-y-auto border-t border-gray-200 ${
          isMobileMenuOpen ? "max-h-[calc(100vh-var(--navbar-height,4rem))] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
        style={{ '--navbar-height': navbarHeight }} // CSS variable for dynamic height
      >
        <ul className="flex flex-col py-2">
          {navLinksData.map((link) => (
            <li key={link.to} className="border-b border-gray-100 last:border-b-0">
              <Link
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                className="block w-full px-4 sm:px-6 py-3 text-black hover:bg-gray-50 hover:text-blue-400 transition-colors duration-200 text-left text-base"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;