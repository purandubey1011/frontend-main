import React, { useEffect, useRef } from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".footer-brand", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          ".footer-social a",
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".footer-credits",
          {
            x: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "<"
        );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={componentRef} className="bg-black text-white px-6 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="footer-brand text-xl font-bold text-[#d946ef] tracking-wide">
          UNFYER
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <div className="footer-social flex space-x-4">
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-[#d946ef] transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-[#d946ef] transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-white hover:text-[#d946ef] transition" />
            </a>
          </div>

          <div className="footer-credits text-center md:text-left">
            Design & Developed By{" "}
            <span className="font-medium">Falverra.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;