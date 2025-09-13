import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const faqData = [
  {
    id: 1,
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: 2,
    question: "What is your favorite template from BRIX Templates?",
    answer: "",
  },
  {
    id: 3,
    question: "How do you clone a template from the Showcase?",
    answer: "",
  },
  {
    id: 4,
    question: "What is your favorite template from BRIX Templates?",
    answer: "",
  },
  {
    id: 5,
    question: "Why is BRIX Templates the best Webflow agency?",
    answer: "",
  },
  {
    id: 6,
    question: "When was Webflow officially launched?",
    answer: "",
  },
  {
    id: 7,
    question: "How do you integrate Jetboost with Webflow?",
    answer: "",
  },
];

const FaqHero = () => {
  const [openId, setOpenId] = React.useState(1);

  return (
    <section className="bg-white">
       {/* Navbar */}
       <Navbar/>
      {/* === HERO HEADER === */}
      <div className="bg-[#0F2E15] text-white py-36 px-6 md:px-12 text-center relative">
        <div className="max-w-3xl mx-auto">
          <span className="text-lime-300 text-sm font-medium tracking-wide">
            ✨ FAQ
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-snug font-serif">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* === FAQ LIST === */}
      <div className="max-w-3xl mx-auto px-6 md:px-0 py-16">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-gray-200 py-5 cursor-pointer"
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-gray-900 font-serif">
                {faq.question}
              </h3>
              {openId === faq.id ? (
                <FiMinus className="text-gray-700 text-xl" />
              ) : (
                <FiPlus className="text-gray-700 text-xl" />
              )}
            </div>
            {openId === faq.id && faq.answer && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed font-serif">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqHero;
