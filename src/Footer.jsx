import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r z-8 from-[#12323a] to-[#2a7588] text-white pt-[20%]  p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-10">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold">DormEase</h3>
          <p className="text-gray-400 mt-2">
            Your trusted accommodation partner.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="/Help" className="text-gray-400 hover:text-white">Help</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">🔗</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">🐦</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">📘</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6">
        © 2025 DormEase. All rights reserved.
      </div>
    </footer>
  );
}
