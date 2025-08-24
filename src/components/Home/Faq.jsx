import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What is Unfyer and how does it work?",
    answer:
      "Unfyer is a platform that allows creators to connect, earn, and grow by leveraging their influence through chat, call, and content creation.",
  },
  {
    question: "How do I get started as a creator?",
    answer:
      "Simply apply with your social links, get verified, and start earning by chatting and calling your followers.",
  },
  {
    question: "Is there any cost to join the platform?",
    answer:
      "No, joining Unfyer is completely free for creators. You start earning from your first engagement!",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const componentRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".faq-heading", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".faq-item",
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="bg-[#f8f4ff] py-24 px-6 md:px-20 text-gray-800"
    >
      <h2 className="faq-heading text-3xl md:text-6xl font-medium text-center mb-10 text-black">
        Frequently Asked Questions
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-item bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium text-lg">{item.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="px-6 pb-4 pt-0 text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;