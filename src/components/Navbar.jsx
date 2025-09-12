import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  const isLightBg =
    location.pathname === "/solutions" || location.pathname === "/resources";

  const textColor = isLightBg ? "text-black" : "text-white";
  const borderColor = isLightBg ? "border-black" : "border-white";
  const hoverColor = isLightBg
    ? "hover:text-yellow-600"
    : "hover:text-yellow-300";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/solutions", label: "Solutions" },
    { to: "/resources", label: "Free Resource" },
    { to: "/pricing", label: "Pricing" },
    { to: "/Faq", label: "Faq" },
    { to: "/contact", label: "Contact" },
  ];

  // GSAP animation for menu open/close
  useEffect(() => {
    if (open) {
      // Set initial state
      gsap.set(menuRef.current, { x: "-100%" });
      gsap.set(itemsRef.current, { x: -20, opacity: 0 });

      // Slide menu
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });

      // Animate items one by one
      gsap.to(itemsRef.current, {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [open]);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-4 sm:px-6 md:px-16 py-4 md:py-6">
      {/* Logo */}
      <Link to="/" className={`font-bold text-lg sm:text-xl ${textColor}`}>
        Jogo
      </Link>

      {/* Desktop Nav */}
      <ul
        className={`hidden md:flex items-center space-x-6 lg:space-x-8 font-medium ${textColor}`}
      >
        {navLinks.slice(0, 6).map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`${hoverColor} cursor-pointer`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Contact (desktop) */}
      <Link
        to="/contact"
        className={`hidden md:inline ml-3 sm:ml-4 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2 border rounded-full transition text-sm md:text-base ${textColor} ${borderColor} hover:bg-black hover:text-white ${
          isLightBg
            ? "hover:bg-black hover:text-white"
            : "hover:bg-white hover:text-black"
        }`}
      >
        Contact
      </Link>

      {/* Hamburger */}
      <button
        className={`md:hidden text-2xl focus:outline-none ${textColor}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 w-3/4 h-full ${
            isLightBg ? "bg-white text-black" : "bg-black/90 text-white"
          } shadow-xl flex flex-col pt-20 pb-10 px-6 space-y-4 md:hidden`}
        >
          {navLinks.map((link, i) => (
            <div
              key={link.to}
              ref={(el) => (itemsRef.current[i] = el)}
              className="w-full"
            >
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block text-lg font-medium border-b border-gray-300/40 pb-3 hover:text-yellow-400"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
