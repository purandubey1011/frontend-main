import React, { useEffect, useRef } from "react";
import { BsStars } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutJago = () => {
  const sectionRef = useRef(null);

//  useEffect(() => {
//   const ctx = gsap.context(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//     });

//     tl.from(".about-img", {
//       x: -50,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       immediateRender: false,
//     })
//       .fromTo(
//         ".about-heading, .about-text, .about-btn, .about-tag",
//         { x: 40, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.15 },
//         "-=0.6"
//       );
//   }, sectionRef);

//   return () => ctx.revert();
// }, []);


  return (
    <div
      ref={sectionRef}
      className="w-[90vw] max-w-[1200px] mx-auto py-16 sm:py-20 flex flex-col md:flex-row gap-10 md:gap-12 items-center"
    >
      {/* Left Image */}
      <div className="relative about-img">
        <div className="absolute -top-3 -left-3 w-full h-full bg-lime-300 rounded-lg -z-10"></div>
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/herosecondgirl.jpg?updatedAt=1757791267264"
          alt="About Jago"
          className="rounded-lg w-full max-w-[80vw] md:max-w-[30vw] md:h-[70vh] h-[55vh] object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-6 max-w-[550px] px-2 sm:px-0">
        {/* Small heading with icon */}
        <div className="about-heading flex items-center gap-2 text-gray-600 text-sm font-medium">
          <BsStars className="text-yellow-400" />
          About JaGo
        </div>

        {/* Main Heading */}
        <h2 className="about-heading text-3xl md:text-4xl font-bold leading-snug text-gray-900">
          Arise. Awake. Achieve JaGo <br />
          is your partner in clarity <br />
          and growth.
        </h2>

        {/* Subtext */}
        <p className="about-text text-gray-600 text-base leading-relaxed ">
          With over 25 years of global experience in people development across
          the UK, Europe, and India, JaGo brings deep, practical insights into
          human challenges
        </p>

        {/* Button */}
        <button className="about-btn bg-lime-300 hover:bg-lime-400 transition text-gray-900 font-semibold px-6 py-3 rounded-full w-fit shadow">
          Discover Now
        </button>

        {/* Tags */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 mt-4">
          {[
            "Certified Life Coach",
            "Reiki Healer",
            "Mental Physics Practitioner",
          ].map((item, i) => (
            <div
              key={i}
              className="about-tag flex flex-col items-start gap-2 border border-lime-300 rounded-lg px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-800 bg-white"
            >
              <img src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/check.png?updatedAt=1757791598302" className="w-6" alt="" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutJago;
