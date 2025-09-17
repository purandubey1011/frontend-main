import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Light background pages
  const isLightBg =
    location.pathname === "/solutions" || location.pathname === "/resources";

  const textColor = isLightBg ? "text-black" : "text-white";
  const hoverColor = isLightBg
    ? "hover:text-lime-600"
    : "hover:text-lime-300";
  const borderColor = isLightBg ? "border-black" : "border-white";
  const contactHover = isLightBg
    ? "hover:bg-black hover:text-white"
    : "hover:bg-white hover:text-black";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/pricing", label: "Coaching Programs" },
    { to: "/about", label: "Why JaGoCoach™" },
    { to: "/solutions", label: "Success Stories" },
    { to: "/resources", label: "Free Resources" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-30 px-4 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className={`font-extrabold text-xl tracking-wide ${textColor}`}
      >
        JaGoCoach<span className="text-xs align-super">™</span>
      </Link>

      {/* Desktop Links */}
      <ul
        className={`hidden md:flex items-center space-x-8 font-medium ${textColor}`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? `text-lime-400 border-b-2 border-lime-400 pb-1`
                : `${hoverColor}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </ul>

      {/* Right buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/contact"
          className={`px-5 py-2 rounded-full border ${borderColor} ${textColor} ${contactHover} transition`}
        >
          Contact
        </Link>

        <select
          className={`bg-white/10 rounded-full px-4 py-2 text-sm cursor-pointer focus:outline-none ${
            isLightBg ? "text-black" : "text-white"
          }`}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className={`md:hidden text-2xl ${textColor}`}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-black/90 text-white flex flex-col items-center pt-24 space-y-6 text-lg md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-lime-400 font-semibold"
                  : "hover:text-lime-300"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="px-6 py-2 rounded-full bg-lime-400 text-black font-semibold"
          >
            Contact
          </Link>
          <select className="bg-white/10 text-white rounded-full px-4 py-2 text-sm focus:outline-none">
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
