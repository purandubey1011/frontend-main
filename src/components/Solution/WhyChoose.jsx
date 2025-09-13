import React from "react";
import { FaRegStar, FaLightbulb, FaUserFriends } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* === Heading === */}
        <h2 className="text-3xl md:text-4xl font-semibold text-green-950 mb-4">
          <span className="italic font-semibold">Why Choose</span>{" "}
          <span className="font-semibold">JaGo?</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pellentesque arcu sed felis.
        </p>

        {/* === Feature Boxes === */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Box 1 */}
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <div className="bg-lime-400 rounded-xl p-5 flex items-center justify-center mb-5 shadow-sm">
              <FaRegStar className="text-green-950 w-5 h-5" />
            </div>
            <p className="text-green-950 font-medium text-lg leading-snug">
              Deep empathy + 25 years global experience.
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <div className="bg-lime-400 rounded-xl p-5 flex items-center justify-center mb-5 shadow-sm">
              <FaLightbulb className="text-green-950 w-5 h-5" />
            </div>
            <p className="text-green-950 font-medium text-lg leading-snug">
              Tailored solutions, never cookie-cutter advice.
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <div className="bg-lime-400 rounded-xl p-5 flex items-center justify-center mb-5 shadow-sm">
              <FaUserFriends className="text-green-950 w-5 h-5" />
            </div>
            <p className="text-green-950 font-medium text-lg leading-snug">
              Safe, private, supportive environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
