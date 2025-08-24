import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Calltoaction = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".cta-background", {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
      }).from(
        ".cta-text",
        {
          y: 40,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=1.2"
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="w-full px-4 py-12 relative">
      <div className="cta-background w-full max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <div
          className="bg-cover bg-center flex flex-col items-center justify-center text-center px-6 py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://ik.imagekit.io/b9tt0xvd7/unfyer/imgx.jpg")`,
          }}
        >
          <div className="relative z-10 text-white">
            <h1 className="cta-text text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Unleash Your Creative <br className="hidden sm:block" /> Power on
              Unfyer
            </h1>
            <p className="cta-text text-sm sm:text-base max-w-2xl mx-auto mb-6 text-[#f7cfe1] font-medium">
              Whether you're a rising creator or a growing business — Unfyer is
              where meaningful collaborations begin.
            </p>
            <button className="cta-text bg-white text-[#7e3af2] px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:scale-105 transition duration-300 shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;