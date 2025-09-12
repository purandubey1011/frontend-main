import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Navbar from "../Navbar";

const Resources = () => {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".res-headline", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(".res-paragraph", {
        opacity: 0,
        y: 20,
        delay: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(".res-buttons button", {
        opacity: 0,
        y: 15,
        stagger: 0.15,
        delay: 0.4,
        duration: 0.6,
        ease: "power2.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative bg-white overflow-hidden">
      {/* === NAVBAR === */}
      <Navbar/>

      {/* === HERO === */}
      <section className="flex flex-col justify-center items-center text-center px-4 pt-32 sm:pt-36 pb-16 sm:pb-20 relative">
        {/* LEFT LEAF */}
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/leafe.png?updatedAt=1757570791498"
          alt="Leaf"
          className="absolute -left-6 sm:-left-10 top-28 sm:top-40 w-28 sm:w-60 rotate-[60deg] opacity-90 pointer-events-none"
        />
        {/* RIGHT LEAF */}
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/leafe.png?updatedAt=1757570791498"
          alt="Leaf mirrored"
          className="absolute -right-6 sm:-right-10 top-28 sm:top-40 w-28 sm:w-60 -scale-x-100 -rotate-[60deg] opacity-90 pointer-events-none"
        />

        <h1 className="res-headline text-3xl sm:text-5xl font-bold text-green-900 leading-tight relative z-10">
          Clarity starts with <br />
          <span className="block">Reflection</span>
        </h1>

        <p className="res-paragraph mt-5 sm:mt-6 max-w-xl text-gray-700 text-base sm:text-lg relative z-10">
          Explore free tools, practices, and reflections to begin your journey.
        </p>

        <div className="res-buttons mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 relative z-10">
          <button className="px-4 sm:px-5 py-2 bg-lime-300 text-black rounded-full font-medium shadow-sm hover:bg-lime-400 text-sm sm:text-base">
            Stress relief
          </button>
          <button className="px-4 sm:px-5 py-2 border border-lime-300 text-black rounded-full font-medium hover:bg-lime-50 text-sm sm:text-base">
            Navigating career crossroads
          </button>
          <button className="px-4 sm:px-5 py-2 border border-lime-300 text-black rounded-full font-medium hover:bg-lime-50 text-sm sm:text-base">
            Purpose vs Confusion
          </button>
        </div>
      </section>
    </div>
  );
};

export default Resources;
