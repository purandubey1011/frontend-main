import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const PricingHero = () => {
  return (
    <header className="relative h-[85vh] w-full flex items-center justify-center">
      {/* Background image */}
      <img
        src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/priceheroimg.jpg?updatedAt=1757598641823"
        alt="Pricing Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Green overlay */}
      <div className="absolute inset-0 bg-green-900/50"></div>

      {/* Navbar */}
      <Navbar/>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Investing in yourself is the best decision you'll ever make.
        </h1>
      </div>
    </header>
  );
};

export default PricingHero;
