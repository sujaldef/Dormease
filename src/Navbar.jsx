import {React, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full p-2    bg-gradient-to-r from-[#12323a] to-[#2a7588] shadow-lg  flex items-center  justify-between z-50">
      <h1 className="flex   pl-2 text-3xl pt-2 font-semibold text-white">dormease</h1>
      
      <ul className="flex space-x-70 pt-5 pr-2 text-lg font-semibold text-white">
        <li><Link to="/" className="hover:text-[#12323a] ">Home</Link></li>
        <li><Link to="/about" className="hover:text-[#12323a] ">About</Link></li>
        <li><Link to="/Help" className="hover:text-[#12323a] ">Help</Link></li>
        <li><Link to="/dashboard" className="hover:text-[#12323a] ">Dashboard</Link></li>
      </ul>
    </nav>
  );
}
