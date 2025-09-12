import React, { useEffect, useRef } from "react";
import { PiSparkleFill } from "react-icons/pi";
import gsap from "gsap";

const GlobalExperience = () => {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ge-heading", {
        opacity: 0,
        y: 25,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.from(".ge-map", {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        delay: 0.2,
      });

      gsap.from(".ge-popup", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.15,
        delay: 0.3,
        ease: "power2.out",
      });
    }, secRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secRef}
      className="relative bg-white py-14 md:py-16 flex flex-col text-left"
    >
      {/* Heading */}
      <h2 className="ge-heading text-xl sm:text-2xl md:text-3xl font-semibold text-green-900 max-w-3xl px-5 sm:px-6 md:px-4 mb-8 md:mb-12 leading-snug md:ml-24 text-center md:text-left">
        Global Experience That Transforms Lives and Leadership Across Continents
      </h2>

      {/* Map + Popups */}
      <div className="relative w-full max-w-6xl px-4 md:px-0 md:ml-24">
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/map.png?updatedAt=1757482092107"
          alt="World map"
          className="ge-map w-full h-64 sm:h-80 md:h-[80vh] object-contain mx-auto"
        />

        {/* Popup 1 */}
        <div className="ge-popup absolute top-[1%] left-[8%] md:top-[20%] md:left-[20%] bg-lime-200 text-left rounded-lg shadow-lg p-3 sm:p-4 w-56 sm:w-64">
          <div className="flex items-start space-x-2">
            <PiSparkleFill className="text-green-900 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 text-sm sm:text-base">
                Global Experience That Inspires
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm mt-1">
                Over 25 years in people management and development across UK,
                Europe, India.
              </p>
            </div>
          </div>
        </div>

        {/* Popup 2 */}
        <div className="ge-popup absolute top-[25%] right-[0%] md:right-[20%] bg-lime-200 text-left rounded-lg shadow-lg p-3 sm:p-4 w-56 sm:w-64">
          <div className="flex items-start space-x-2">
            <PiSparkleFill className="text-green-900 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 text-sm sm:text-base">
                A Journey Across Borders
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm mt-1">
                From the UK to Europe to India — decades of people management
                and leadership excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Popup 3 */}
        <div className="ge-popup absolute -bottom-[5%] left-[20%] md:bottom-[15%] md:left-[35%] bg-lime-200 text-left rounded-lg shadow-lg p-3 sm:p-4 w-60 sm:w-72">
          <div className="flex items-start space-x-2">
            <PiSparkleFill className="text-green-900 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 text-sm sm:text-base">
                Recognized Leadership, Global Impact
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm mt-1">
                Award-winning expertise rooted in life sciences, mental
                physics, and human development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExperience;
