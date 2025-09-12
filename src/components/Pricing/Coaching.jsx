import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const coachingData = [
  {
    id: 1,
    title: "1:1 Coaching Session",
    date: "Mar 02 – Mar 17",
    duration: "60-minute online session",
    details: ["Includes Personalized Notes & Action Roadmap."],
    price: "INR 24,999",
    oldPrice: "INR 34,999",
    popular: false,
  },
  {
    id: 2,
    title: "Clarity Package",
    date: "Mar 02 – Mar 17",
    duration: "4 sessions over 6 weeks.",
    details: ["Bonus: Guided Journal PDF"],
    price: "INR 24,999",
    oldPrice: "INR 34,999",
    popular: true,
  },
  {
    id: 3,
    title: "Deep Growth Package",
    date: "Mar 02 – Mar 17",
    duration: "8 sessions over 3 months.",
    details: ["Includes Priority Scheduling + Bonus Audio Pack."],
    price: "INR 24,999",
    oldPrice: "INR 34,999",
    popular: false,
  },
];

const Coaching = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-green-900 mb-12">Coaching</h2>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {coachingData.map((item) => (
          <div
            key={item.id}
            className="relative bg-lime-50 rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col"
          >
            {/* Most Popular badge */}
            {item.popular && (
              <span className="absolute top-4 right-4 bg-yellow-300 text-green-900 text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold text-green-900">
              {item.title}
            </h3>

            {/* Date & Duration */}
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-green-800" />
                {item.date}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-green-800" />
                {item.duration}
              </p>
            </div>

            {/* Details */}
            <div className="mt-4 border rounded-md p-3 bg-white">
              <p className="text-sm text-gray-700 font-medium">View Details</p>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                {item.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mt-5">
              <p className="text-lg font-bold text-red-600">{item.price}</p>
              <p className="text-sm text-gray-400 line-through">{item.oldPrice}</p>
              <p className="text-xs text-gray-600 mt-1">(Excl all taxes)</p>
            </div>

            {/* Button */}
            <button className="mt-6 w-full bg-lime-300 text-green-900 font-medium py-2 rounded-md hover:bg-lime-400 transition">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaching;
