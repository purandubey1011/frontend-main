import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ResourcesCards = () => {
  const container = useRef(null);

  const cardsData =[
  {
    id: 1,
    title: "Brand Launch Checklist",
    desc: "Everything you need before launching a business.",
    img: "https://cdn.pixabay.com/photo/2016/11/22/21/26/notebook-1850613_1280.jpg",
    type: "PDF",
  },
  {
    id: 2,
    title: "Marketing Roadmap",
    desc: "Plan your first 90 days of marketing like a pro.",
    img: "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg",
    type: "PDF",
  },
  {
    id: 3,
    title: "Social Media Calendar",
    desc: "Stay consistent with ready-made templates.",
    img: "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg",
    type: "PDF",
  },
  {
    id: 4,
    title: "Brand Voice Guide",
    desc: "Define how your brand speaks & connects.",
    img: "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg",
    type: "PDF",
  },
  {
    id: 5,
    title: "Startup Pitch Deck",
    desc: "Get investors excited with this polished template.",
    img: "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg",
    type: "PDF",
  },
  {
    id: 6,
    title: "Growth Checklist",
    desc: "Key actions to scale your business quickly.",
    img: "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg",
    type: "PDF",
  },
];
// useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray(".res-card").forEach((card) => {
//         gsap.from(card, {
//           opacity: 0,
//           y: 50,
//           duration: 0.8,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 80%", // animate when card enters viewport
//             toggleActions: "play none none reverse",
//           },
//         });
//       });
//     }, container);
//     return () => ctx.revert();
//   }, []);
  return (
    <div ref={container} className="px-4 md:px-12 py-16 bg-white">
      <div className="flex flex-wrap justify-center gap-8">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="
              res-card
              bg-white
              rounded-2xl
              shadow-sm
              border
              border-gray-100
              overflow-hidden
              hover:shadow-md
              hover:-translate-y-1
              transition
              transform
              w-full
              md:w-[45%]
              flex flex-col
            "
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-44 sm:h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-900 text-white">
                  {card.type}
                </span>
              </div>

              <p className="mt-2 text-gray-600 text-sm flex-grow">
                {card.desc}
              </p>

              <button className="mt-6 w-full bg-lime-300 text-black font-medium py-2 rounded-full hover:bg-lime-400 transition">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesCards;
