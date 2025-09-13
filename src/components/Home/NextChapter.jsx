import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NextChapter = () => {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(
  //       [".nc-heading", ".nc-btn"],
  //       {
  //         opacity: 0,
  //         y: 30,
  //         duration: 0.6,        // same duration for smoothness
  //         ease: "power2.out",   // smooth exit (no lag)
  //         stagger: 0,           // no delay → run parallel
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 65%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[70vh]"
    >
      {/* Background Image */}
      <img
        src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/nextChapterbg.jpg?updatedAt=1757792355898"
        alt="Next Chapter"
        className="w-full h-full object-cover rounded-t-3xl object-[50%_50%]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 rounded-t-3xl bg-[#0F2E1599]/90"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="nc-heading text-3xl md:text-6xl font-semibold text-white max-w-4xl mb-10 leading-[9vh] font-serif">
          Your next chapter begins <br /> with one conversation
        </h2>
        <button className="nc-btn bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Schedule Your Session
        </button>
      </div>
    </div>
  );
};

export default NextChapter;
