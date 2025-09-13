import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const OurPhilosophy = () => {
  const secRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(".op-img", {
  //       opacity: 0,
  //       y: 30,
  //       duration: 0.5,
  //       stagger: 0.15,
  //       ease: "power2.out",
  //     });
  //     gsap.from(".op-heading", {
  //       opacity: 0,
  //       y: 15,
  //       duration: 0.4,
  //       delay: 0.3,
  //     });
  //     gsap.from(".op-text", {
  //       opacity: 0,
  //       y: 15,
  //       duration: 0.4,
  //       delay: 0.45,
  //     });
  //   }, secRef);
  //   return () => ctx.revert();
  // }, []);

  return (
    <section
      ref={secRef}
      className="bg-[#f8fceb] py-14 md:py-16 flex flex-col items-center text-center px-5 sm:px-6"
    >
      {/* Images */}
      <div className="flex items-center justify-center mb-8 md:mb-10 -space-x-6">
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/img1a.jpg?updatedAt=1757794172889"
          alt="Sticky notes"
          className="op-img w-28 h-40 sm:w-32 sm:h-44 md:w-40 md:h-56 object-cover rounded-lg shadow-md transform -rotate-6 border-3 border-[#EAFE45]"
        />
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/img2a.jpg?updatedAt=1757794173097"
          alt="Discussion"
          className="op-img w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 object-cover rounded-lg shadow-lg z-10 border-3 border-[#EAFE45]"
        />
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/img3a.jpg?updatedAt=1757794172882"
          alt="Thumbs up"
          className="op-img w-28 h-40 sm:w-32 sm:h-44 md:w-40 md:h-56 object-cover rounded-lg shadow-md transform rotate-6 border-3 border-[#EAFE45]"
        />
      </div>

      {/* Heading */}
      <h2 className="op-heading text-xl md:text-4xl font-semibold text-[#0F2E15] mb-3 md:mb-4 font-serif">
        Our Philosophy
      </h2>

      {/* Paragraph */}
      <p className="op-text max-w-md md:max-w-3xl text-[#0F2E15]/80 text-sm sm:text-base md:text-lg leading-relaxed">
        We don’t provide textbook solutions. We listen, we connect, and we
        guide. Every conversation is a safe space — empathetic, confidential,
        and tailored to you.
      </p>
    </section>
  );
};

export default OurPhilosophy;
