import React, { useRef, useState } from "react";

const Testimonials = () => {
  const sectionRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      name: "Carolyn Willms",
      role: "Global Accountability Officer",
      text: "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    },
    {
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      name: "John Smith",
      role: "Chief Marketing Officer",
      text: "Praesent euismod, ipsum eget blandit dignissim, est leo faucibus ipsum, vitae suscipit libero nisl vel leo. Proin commodo bibendum metus, in eleifend nisi gravida ac.",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      name: "Emily Johnson",
      role: "Product Designer",
      text: "Suspendisse potenti. Donec venenatis diam sed neque malesuada, vel facilisis eros vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
    },
    {
      img: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
      name: "David Miller",
      role: "Lead Developer",
      text: "Aliquam erat volutpat. Integer nec dui vitae est bibendum venenatis. Cras ut odio eget elit volutpat tincidunt.",
    },
    {
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      name: "Sophia Lee",
      role: "UX Researcher",
      text: "Mauris congue, sapien eget volutpat feugiat, enim lorem luctus est, nec tempus nisl risus vitae ligula.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handleThumbClick = (index) => {
    setCurrent(index);
  };

  const { img, name, role, text } = testimonials[current];

  // Compute which 3 thumbnails to show
  const thumbsToShow = testimonials.slice(current, current + 3).length === 3
    ? testimonials.slice(current, current + 3)
    : [
        ...testimonials.slice(current),
        ...testimonials.slice(0, 3 - (testimonials.length - current)),
      ];

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
                  src={img}
                  alt={name}
                  className="ts-img w-[220px] h-[280px] md:w-[280px] md:h-[340px] object-cover"
                />
              </div>

              {/* Name & Role */}
              <div className="text-center md:text-left mt-2 md:mt-4">
                <h3 className="ts-name text-xl md:text-2xl font-bold text-black">
                  {name}
                </h3>
                <p className="text-sm text-gray-600">{role}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mt-8 md:mt-0">
            <span className="absolute -top-4 left-2 md:-top-6 md:left-0 text-[4rem] md:text-[6rem] text-lime-300/30 select-none">
              “
            </span>

            <p className="ts-text text-gray-800 leading-relaxed text-base md:text-lg max-w-full md:max-w-[470px] relative z-10 px-2 md:px-4 text-center md:text-left">
              {text}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom thumbnails + button */}
      <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-4 mt-10">
        {/* Thumbnails */}
        <div className="flex justify-center md:justify-end gap-2 overflow-hidden max-w-[240px]">
          {thumbsToShow.map((t, idx) => {
            const realIndex = testimonials.findIndex((x) => x.img === t.img);
            return (
              <button
                key={realIndex}
                onClick={() => handleThumbClick(realIndex)}
                className="ts-thumb relative flex-shrink-0 focus:outline-none"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className={`w-[60px] h-[60px] md:w-[70px] md:h-[70px] object-cover ${
                    realIndex === current ? "ring-4 ring-lime-400" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-lime-300/50 mix-blend-multiply"></div>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="ts-btn bg-lime-300 hover:bg-lime-400 transition text-black font-medium px-5 md:px-6 py-2 rounded-full self-center md:self-auto"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
