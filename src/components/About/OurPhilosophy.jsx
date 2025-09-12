import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const OurPhilosophy = () => {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".op-img", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
      });
      gsap.from(".op-heading", {
        opacity: 0,
        y: 15,
        duration: 0.4,
        delay: 0.3,
      });
      gsap.from(".op-text", {
        opacity: 0,
        y: 15,
        duration: 0.4,
        delay: 0.45,
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secRef}
      className="bg-[#f8fceb] py-14 md:py-16 flex flex-col items-center text-center px-5 sm:px-6"
    >
      {/* Images */}
      <div className="flex items-center justify-center mb-8 md:mb-10 -space-x-6">
        <img
          src="https://cdn.pixabay.com/photo/2024/12/20/07/46/lake-9279602_1280.jpg"
          alt="Sticky notes"
          className="op-img w-28 h-40 sm:w-32 sm:h-44 md:w-40 md:h-56 object-cover rounded-lg shadow-md transform -rotate-6"
        />
        <img
          src="https://cdn.pixabay.com/photo/2023/10/21/10/00/flower-8331139_1280.jpg"
          alt="Discussion"
          className="op-img w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 object-cover rounded-lg shadow-lg z-10"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/10/28/18/17/trees-2897757_1280.jpg"
          alt="Thumbs up"
          className="op-img w-28 h-40 sm:w-32 sm:h-44 md:w-40 md:h-56 object-cover rounded-lg shadow-md transform rotate-6"
        />
      </div>

      {/* Heading */}
      <h2 className="op-heading text-xl sm:text-2xl md:text-3xl font-semibold text-green-900 mb-3 md:mb-4">
        Our Philosophy
      </h2>

      {/* Paragraph */}
      <p className="op-text max-w-md sm:max-w-xl md:max-w-2xl text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
        We don’t provide textbook solutions. We listen, we connect, and we
        guide. Every conversation is a safe space — empathetic, confidential,
        and tailored to you.
      </p>
    </section>
  );
};

export default OurPhilosophy;
