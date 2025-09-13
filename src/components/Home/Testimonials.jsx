import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//         defaults: { ease: "linear" }, // smooth linear
//       });

//       tl.from(".ts-heading", {
//         opacity: 0,
//         y: -20,
//         duration: 0.5,
//       })
//         .from(
//           ".ts-img",
//           {
//             opacity: 0,
//             y: 30,
//             duration: 0.5,
//           },
//           "-=0.2"
//         )
//         .from(
//           ".ts-name",
//           { opacity: 0, y: 15, duration: 0.4 },
//           "-=0.3"
//         )
//         .from(
//           ".ts-text",
//           { opacity: 0, y: 15, duration: 0.4 },
//           "-=0.3"
//         )
//         .fromTo(
//   [".ts-thumb", ".ts-btn"],
//   { autoAlpha: 0, y: 15 },
//   { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.05 },
//   "-=0.2"
// );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-white py-16 px-4 md:py-20 md:px-20 overflow-hidden"
    >
      {/* Watermark Heading */}
      <h1
        className="ts-heading absolute top-4 left-4 md:top-8 md:left-20 text-[2.5rem] md:text-[7rem] font-bold text-transparent leading-none select-none z-0"
        style={{ WebkitTextStroke: "1px rgba(0,0,0,0.15)" }}
      >
        Testimonials
      </h1>

      <div className="relative mt-16 md:mt-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-12">
          {/* Left Column */}
          <div className="flex items-center justify-center md:block">
            <div>
              {/* Image with lime border strip */}
              <div className="relative mb-4 md:mb-0">
                <div className="absolute top-0 left-0 w-[4px] md:w-[6px] h-full bg-lime-400"></div>
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  alt="Testimonial"
                  className="ts-img w-[220px] h-[280px] md:w-[280px] md:h-[340px] object-cover"
                />
              </div>

              {/* Name & Role */}
              <div className="text-center md:text-left mt-2 md:mt-4">
                <h3 className="ts-name text-xl md:text-2xl font-bold text-black">
                  Carolyn Willms
                </h3>
                <p className="text-sm text-gray-600">
                  Global Accountability Officer
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mt-8 md:mt-0">
            <span className="absolute -top-4 left-2 md:-top-6 md:left-0 text-[4rem] md:text-[6rem] text-lime-300/30 select-none">
              “
            </span>

            <p className="ts-text text-gray-800 leading-relaxed text-base md:text-lg max-w-full md:max-w-[470px] relative z-10 px-2 md:px-4 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at.
              Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam
              elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim
              mollis lorem pulvinar tortor arcu.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom thumbnails + button */}
      <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-4 mt-10">
        <div className="flex justify-center md:justify-end gap-2">
          <div className="ts-thumb relative">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
              alt="Person 1"
              className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] object-cover"
            />
            <div className="absolute inset-0 bg-lime-300/50 mix-blend-multiply"></div>
          </div>
          <div className="ts-thumb relative">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt="Person 2"
              className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] object-cover"
            />
            <div className="absolute inset-0 bg-lime-300/50 mix-blend-multiply"></div>
          </div>
        </div>

        <button className="ts-btn bg-lime-300 hover:bg-lime-400 transition text-black font-medium px-5 md:px-6 py-2 rounded-full self-center md:self-auto">
          Next →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
