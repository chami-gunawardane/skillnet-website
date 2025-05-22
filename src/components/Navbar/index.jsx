import React from "react";
import logo from "../../assets/Logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-white font-sans p-2 border-b-2 border-gray-200 ">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Skillnet Logo" className="h-10 w-auto pl-[100px]" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-20 font-medium text-xl">
        <li className="text-black hover:text-blue-400 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="text-black hover:text-blue-400 cursor-pointer"><Link to="/Domain">Domain</Link></li>
        <li className="text-black hover:text-blue-400 cursor-pointer"><Link to="/Milestones">Milestones</Link></li>
        <li className="text-black hover:text-blue-400 cursor-pointer"><Link to="/Documents">Documents</Link></li>
        <li className="text-black hover:text-blue-400 cursor-pointer"><Link to="/Slides">Slides</Link></li>
        <li className="text-black hover:text-blue-400 cursor-pointer"><Link to="/AboutUs">About us</Link></li>
        <li className="text-black hover:text-blue-400 cursor-pointer"><Link to="/ContactUs">Contact us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
