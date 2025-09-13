import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

//  useEffect(() => {
//   const ctx = gsap.context(() => {
//     // Button ko initially hide karke rakho
//     gsap.set(".hero-btn", { autoAlpha: 0, scale: 0.9 });

//     const tl = gsap.timeline();

//     tl.from(".hero-title", {
//       y: 40,
//       opacity: 0,
//       duration: 1,
//       ease: "power2",
//     })
//       .from(
//         ".hero-subtitle",
//         {
//           y: 30,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power2",
//         },
//         "-=0.5"
//       )
//       .to(
//         ".hero-btn",
//         {
//           autoAlpha: 1,
//           scale: 1,
//           duration: 0.4,
//           ease: "power2",
//         },
//         "-=0.7"
//       );
//   }, heroRef);

//   return () => ctx.revert();
// }, []);



  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <img
  className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1]"
  src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/bghero.jpg?updatedAt=1757789128187"
  alt="Hero Background"
/>


      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0F2E15CC]/80"></div>

      {/* Navbar */}
      <Navbar/>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 sm:px-6">
        <h1 className="hero-title text-3xl md:text-[4.3vw] font-bold text-white leading-snug sm:leading-tight">
          Clarity. Purpose. <br />
          <span className="italic font-serif">Peace of Mind</span> <br />
          Your Journey Starts Here.
        </h1>

        <p className="hero-subtitle mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl sm:max-w-2xl leading-relaxed">
          Confidential life coaching and wellbeing solutions to help{" "}
          <span className="hidden md:inline">
            <br />
          </span>{" "}
          you find direction, balance, and growth
        </p>

        <button className="hero-btn mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#EAFE45] hover:bg-yellow-400 text-black font-semibold rounded-full shadow-md transition text-sm sm:text-base">
          Book a Free 15–Minute Call
        </button>
      </div>
    </div>
  );
};

export default Hero;
