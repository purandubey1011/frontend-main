import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Howwehelp = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".help-section");

      sections.forEach((section, index) => {
        const image = section.querySelector(".help-image");
        const text = section.querySelector(".help-text");

        const imageFromX = index % 2 === 0 ? -100 : 100;
        const textFromX = index % 2 === 0 ? 100 : -100;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(image, {
          x: imageFromX,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        }).from(
          text,
          {
            x: textFromX,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "<"
        );
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="bg-[#fff6fa] py-16 flex flex-col items-center overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 px-4">
        How can we help you?
      </h2>

      <div className="help-section flex flex-col md:flex-row items-center justify-center gap-4 md:gap-24 mb-20 w-[90vw]">
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/unfyer/bg1.jpg?updatedAt=1754546040046"
          alt="Tired of Begging Brands"
          className="help-image rounded-[1.2vw] w-[90vw] md:w-[26vw] max-w-[360px] h-[60vh] object-cover"
        />
        <div className="help-text text-center md:text-left max-w-md">
          <h3 className="text-2xl font-semibold mb-4">Tired of Begging Brands?</h3>
          <ul className="text-gray-700 mb-6 space-y-1">
            <li>- Brand deals are unpredictable</li>
            <li>- You don't own your income</li>
            <li>- Constant rejection & rates negotiation</li>
          </ul>
          <button className="px-6 py-2 rounded-full text-sm font-medium bg-[#f1e2ff] text-[#8e3cf7] border border-[#e0caff]">
            Let's try With Us
          </button>
        </div>
      </div>

      <div className="help-section flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 w-[90vw]">
        <div className="help-text text-center md:text-left max-w-md">
          <h3 className="text-2xl font-semibold mb-4">
            Talk to your real fans. Earn <br /> on your terms
          </h3>
          <ul className="text-gray-700 mb-6 space-y-1">
            <li>- Set your own rates</li>
            <li>- Talk 1-on-1 with fans securely</li>
            <li>- Private. Premium. Passive.</li>
          </ul>
          <button className="px-6 py-2 rounded-full text-sm font-medium bg-[#f1e2ff] text-[#8e3cf7] border border-[#e0caff]">
            Let's try With Us
          </button>
        </div>
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/unfyer/bg2.jpg?updatedAt=1754546036972"
          alt="Talk to real fans"
          className="help-image rounded-[1.2vw] w-[70vw] md:w-[23vw] h-[60vh] object-cover"
        />
      </div>
    </div>
  );
};

export default Howwehelp;