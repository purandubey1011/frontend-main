import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Clarity = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".clarity-inner", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
      });
    }, boxRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={boxRef}
      className="w-full bg-green-950 py-16 sm:py-20 px-4 sm:px-6 md:px-0 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="clarity-inner bg-white rounded-3xl shadow-lg px-5 sm:px-8 md:px-16 py-12 sm:py-16 text-center relative overflow-hidden">
          {/* Leaves */}
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/leafe.png?updatedAt=1757570791498"
            alt="leaf left"
            className="absolute left-0 bottom-2 w-16 sm:w-24 md:w-36 opacity-90"
          />
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/leafe.png?updatedAt=1757570791498"
            alt="leaf right"
            className="absolute right-0 bottom-2 w-16 sm:w-24 md:w-36 opacity-90 rotate-180"
          />

          {/* Text */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-950 mb-6 sm:mb-8 leading-snug">
            The clarity you seek is
            <br className="hidden sm:block" />
            one call away
          </h2>

          {/* Button */}
          <button className="bg-lime-400 text-green-950 font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-lime-500 transition text-sm sm:text-base">
            Book Your First Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clarity;
