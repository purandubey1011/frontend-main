import React, { useState } from "react";
import { motion } from "framer-motion";
import ApplyPopup from "./ApplyPopup";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const logoVariants = {
  hidden: { y: -250, opacity: 0, rotate: -15 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { stiffness: 100, duration: 0.8 },
  },
};

const textRevealVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.8 },
  },
};

const imageVariants = {
  hidden: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    scale: 1.1,
    filter: "brightness(0.6)",
  },
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    scale: 1,
    filter: "brightness(0.75)",
    transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const ctaVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

const Hero = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white flex flex-col items-center justify-center px-4 py-0"
    >
      <div className="w-full max-w-[90vw] text-left">
        <motion.h2
          variants={logoVariants}
          className="hero-logo text-lg sm:text-xl font-bold text-purple-600"
        >
          <img
            className="h-20 sm:h-28"
            src="https://ik.imagekit.io/b9tt0xvd7/unfyer/Untitled%20design%20(20).png?updatedAt=1755160725166"
            alt="Logo"
          />
        </motion.h2>
      </div>

      <div className="text-center mt-6 sm:mt-8 max-w-[90vw]">
        <motion.h1 className="text-2xl sm:text-6xl font-bold leading-snug sm:leading-tight">
          <div className="overflow-hidden py-1">
            <motion.span variants={textRevealVariants} className="block">
              Turn Your Audience Into Income
            </motion.span>
          </div>
          <div className="overflow-hidden py-1">
            <motion.span variants={textRevealVariants} className="block">
              Without <span className="text-purple-600">Brand Deals</span>
            </motion.span>
          </div>
        </motion.h1>

        <div className="overflow-hidden mt-3 sm:mt-4">
          <motion.p
            variants={textRevealVariants}
            className="text-gray-600 text-xs sm:text-lg leading-relaxed sm:leading-3.5"
          >
            Unfyer lets premium creators monetize fan love via secure calls and
            chats — no{" "}
            <span className="hidden sm:block">
              <br />
            </span>
            brand, no manager, no middleman.
          </motion.p>
        </div>

        <motion.div className="mt-5 sm:mt-6">
          <motion.button
            variants={ctaVariants}
            onClick={() => setPopupOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 sm:px-6 rounded-full text-xs sm:text-base transition duration-300"
          >
            Apply for Access
          </motion.button>
          <motion.p
            variants={ctaVariants}
            className="text-gray-400 text-[10px] sm:text-xs mt-2"
          >
            Only for creators with 5,000+ followers
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        variants={imageVariants}
        className="mt-8 sm:mt-12 w-full max-w-[90vw] h-[40vh] sm:h-[80vh] bg-cover px-2 sm:px-4 overflow-hidden rounded-lg sm:rounded-xl brightness-75"
      >
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/unfyer/herobg.jpg?updatedAt=1754540692859"
          alt="Hero"
          className="w-full h-full object-cover rounded-lg sm:rounded-xl"
        />
      </motion.div>

      {popupOpen && <ApplyPopup onClose={() => setPopupOpen(false)} />}
    </motion.div>
  );
};

export default Hero;