import React from "react";
import { BsStars } from "react-icons/bs";

const WhoWeHelp = () => {
  const items = [
    "Certified Life Coach",
    "Young professionals at a crossroads",
    "Those battling stress and overwhelm",
    "Anyone seeking clarity and balance in life",
  ];

  return (
    <div className="relative w-full">
      {/* BG image */}
      <img
        src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20redesign/jogo/home/whowe.jpg?updatedAt=1757413575312"
        alt="Who We Help"
        className="w-full h-[90vh] sm:h-[75vh] md:h-[80vh] object-cover object-top"
      />

      {/* gradients */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#1a331d]/90 to-transparent" />

      {/* content */}
      <div className="absolute inset-0 flex flex-col justify-end sm:justify-end sm:flex-col md:flex-col px-5 sm:px-6 md:px-16 pb-10 sm:pb-12 text-white">
        {/* heading + button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-8 sm:mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
            Who We
            <br className="hidden sm:block" /> Help
          </h2>

          <button className="bg-lime-300 hover:bg-lime-400 transition text-gray-900 font-semibold px-6 py-3 rounded-full shadow text-sm sm:text-base w-fit">
            Explore Now
          </button>
        </div>

        {/* items */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-white/30 pt-6 sm:pt-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="bg-lime-400/20 p-2 rounded-full">
                <BsStars className="text-lime-300 text-lg" />
              </div>
              <p className="text-white text-base sm:text-sm md:text-base font-medium max-w-full sm:max-w-[13vw]">
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
