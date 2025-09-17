import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c2b16] text-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
        {/* === Left column === */}
        <div className="w-full md:w-1/3 flex flex-col gap-2 md:gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-2 tracking-wide">JaGoCoach™</h2>
          <p className="text-sm text-gray-300 mb-6">
            Transformation helps with Coaching.
          </p>
        </div>
          <p className="text-xs text-gray-400">© 2025 JaGo Coach</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[.1vw] h-48 bg-white opacity-50"></div>

        {/* === Middle column === */}
        <div className="w-full md:w-1/3 grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
          <div className="space-y-4">
            <a href="#" className="hover:text-white block">Home</a>
            <a href="#" className="hover:text-white block">Coaching Programs</a>
            <a href="#" className="hover:text-white block">Why JaGoCoach</a>
            <a href="#" className="hover:text-white block">Contact</a>
          </div>
          <div className="space-y-4">
            <a href="#" className="hover:text-white block">Success Stories</a>
            <a href="#" className="hover:text-white block">Free Resource</a>
            <a href="#" className="hover:text-white block">FAQ</a>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[.1vw] h-48 bg-white opacity-50"></div>

        {/* === Right column === */}
        <div className="w-full md:w-1/3 flex flex-col gap-5">
          <div>
            <h3 className="font-semibold text-sm mb-1">Contact Us</h3>
            <p className="text-sm text-gray-300">+91 08041015439</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">Email Us</h3>
            <p className="text-sm text-gray-300">hello@example.com</p>
          </div>
          <div className="flex gap-3 pt-1">
            <a
              href="#"
              className="p-2 border border-lime-400 rounded-full text-lime-400 hover:bg-lime-400 hover:text-[#0c2b16] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 border border-lime-400 rounded-full text-lime-400 hover:bg-lime-400 hover:text-[#0c2b16] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 border border-lime-400 rounded-full text-lime-400 hover:bg-lime-400 hover:text-[#0c2b16] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 border border-lime-400 rounded-full text-lime-400 hover:bg-lime-400 hover:text-[#0c2b16] transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
