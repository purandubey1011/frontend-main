import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Navbar from "../Navbar";

const AboutHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ah-top", {
        opacity: 0,
        y: -20,
        duration: 0.45,
        ease: "power2.out",
      });
      gsap.from(".ah-heading", {
        opacity: 0,
        y: 20,
        duration: 0.55,
        ease: "power2.out",
        delay: 0.15,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen bg-[#0f2b14] flex flex-col"
    >
      {/* Navbar */}
     <Navbar/>

      {/* Hero content */}
      <div className="relative flex flex-1 flex-col justify-center px-5 sm:px-8 md:px-20 z-10">
        {/* Decorative circles */}
        <div className="absolute top-28 -left-28 w-[240px] h-[240px] md:w-[400px] md:h-[400px] border-[12px] md:border-[20px] border-[#183b22] rounded-full -z-20 opacity-40"></div>
        <div className="absolute bottom-16 right-0 w-[180px] h-[180px] md:w-[300px] md:h-[300px] border-[12px] md:border-[20px] border-[#183b22] rounded-full -z-20 opacity-40"></div>

        {/* Top row */}
        <div className="ah-top flex items-center justify-between w-full mb-5 md:mb-8">
          <div className="flex items-center gap-2">
            <span className="text-yellow-300 text-base md:text-lg">✨</span>
            <span className="text-white/80 text-xs sm:text-sm font-medium">
              About JaGo
            </span>
          </div>

          {/* Trophy visible on all screens now */}
          <div className="block">
            <img
              src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/Line-Trophy-Non-Filled--Streamline-Variable-Scribbles.png?updatedAt=1757446368292"
              alt="Trophy Outline"
              className="w-20 h-20 md:w-24 md:h-24 opacity-80"
            />
          </div>
        </div>

        {/* Main heading */}
        <div className="flex justify-center md:justify-start">
          <h1 className="ah-heading text-5xl  md:text-6xl font-bold leading-snug text-white max-w-lg sm:max-w-2xl md:max-w-5xl text-left">
            JaGo means to awaken.{" "}
            <span className="text-gray-400 font-semibold">
              To rise above confusion, to step into purpose, to live with
              balance.
            </span>{" "}
            It’s not about quick fixes. It’s about lasting clarity.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
