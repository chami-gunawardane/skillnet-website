import React from "react";
import logo from "../../assets/Logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Myalo Logo" className="h-8 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-10 font-semibold text-lg">
        <li className="text-black hover:text-red-500 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="text-black hover:text-red-500 cursor-pointer"><Link to="/Domain">Domain</Link></li>
        <li className="text-black hover:text-red-500 cursor-pointer"><Link to="/Milestones">Milestones</Link></li>
        <li className="text-black hover:text-red-500 cursor-pointer"><Link to="/Documents">Documents</Link></li>
        <li className="text-black hover:text-red-500 cursor-pointer"><Link to="/Slides">Slides</Link></li>
        <li className="text-black hover:text-red-500 cursor-pointer"><Link to="/AboutUs">About us</Link></li>
        <li className="text-black hover:text-red-500 cursor-pointer"><Link to="/ContactUs">Contact us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
