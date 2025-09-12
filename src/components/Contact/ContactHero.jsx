import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import Navbar from "../Navbar";

const ContactHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-green-950 text-white">
     {/* Navbar */}
      <Navbar/>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-16">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold leading-snug mb-14">
          Sometimes, the hardest step is reaching out.
          <br />
          We promise to keep your words safe.
        </h1>

        {/* Grid: Left form + Right info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-lime-400 text-green-950 font-semibold py-3 rounded-full hover:bg-lime-500 transition"
            >
              Send Message
            </button>
          </form>

          {/* Right: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">More contact information</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-gray-400 rounded-xl bg-green-900/40">
                <FiMail className="text-yellow-300 text-2xl" />
                <div>
                  <h4 className="font-medium">Quick Contact</h4>
                  <p className="text-sm text-gray-300">talenttraverse@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border border-gray-400 rounded-xl bg-green-900/40">
                <FiPhoneCall className="text-yellow-300 text-2xl" />
                <div>
                  <h4 className="font-medium">Give us a call</h4>
                  <p className="text-sm text-gray-300">+91 12457845780</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-medium">Follow us on social media</h4>
              <div className="flex gap-5 text-lg">
                <a href="#" className="hover:text-yellow-300"><FaFacebookF /></a>
                <a href="#" className="hover:text-yellow-300"><FaLinkedinIn /></a>
                <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
                <a href="#" className="hover:text-yellow-300"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
