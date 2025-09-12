import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const OurMission = () => {
  const missionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mission-heading", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.from(".mission-text", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      });
    }, missionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={missionRef}
      className="relative w-full h-[500px] flex items-center"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/dbb6c757c7b3a3f788c5bb6bdecc6d8bf63bbcd9(1).jpg?updatedAt=1757483908249')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between h-full text-white">
        {/* Left Heading */}
        <div className="mission-heading md:w-1/3 flex items-start pt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
            Our <br /> Mission
          </h2>
        </div>

        {/* Right Paragraph */}
        <div className="mission-text md:w-2/3 flex items-end pb-12 sm:pb-16 mt-6 md:mt-0">
          <p className="text-xl md:text-3xl leading-relaxed max-w-2xl">
            We don’t provide textbook solutions. We listen, we connect, and we
            guide. Every conversation is a safe space — empathetic,
            confidential, and tailored to you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
