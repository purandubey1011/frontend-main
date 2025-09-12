import React, { useEffect, useRef } from "react";
import { BsStars } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeHelp = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".who-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .fromTo(
          ".who-btn",
          { opacity: 0, scale: 0.8 },      // <-- explicit start
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6"
        )
        .from(
          ".who-item",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    "Certified Life Coach",
    "Young professionals at a crossroads",
    "Those battling stress and overwhelm",
    "Anyone seeking clarity and balance in life",
  ];

  return (
    <div ref={sectionRef} className="relative w-full">
      <img
        src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/whowe.jpg?updatedAt=1757413575312"
        alt="Who We Help"
        className="w-full h-[70vh] sm:h-[75vh] md:h-[80vh] object-cover object-top"
      />

      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[70vh] sm:h-[75vh] md:h-[80vh] bg-gradient-to-t from-[#1a331d] to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 md:px-16 pb-8 sm:pb-10 md:pb-12 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
          <h2 className="who-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
            Who We <br className="hidden sm:block" /> Help
          </h2>

          <button className="who-btn bg-lime-300 hover:bg-lime-400 transition text-gray-900 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow text-sm sm:text-base w-fit">
            Explore Now
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-white/30 pt-6 sm:pt-8">
          {items.map((item, i) => (
            <div key={i} className="who-item flex items-center gap-2">
              <div className="bg-lime-400/20 p-1.5 sm:p-2 rounded-full">
                <BsStars className="text-lime-300 text-base sm:text-lg" />
              </div>
              <p className="text-white text-sm sm:text-base font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeHelp;
