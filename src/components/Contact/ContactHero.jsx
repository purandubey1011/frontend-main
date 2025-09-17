import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import Navbar from "../Navbar";
import api from "../../utils/Axios"; // ✅ adjust the path to your axios instance

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await api.post("/api/v1/form/contact-us", formData); // endpoint in your backend
      setSuccess(res.data.message);
      setFormData({ name: "", email: "", phoneNumber: "", subject: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-green-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-16">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold leading-snug mb-14 font-serif">
          Sometimes, the hardest step is reaching out.
          <br />
          We promise to keep your words safe.
        </h1>

        {/* Grid: Left form + Right info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
                required
              />
            </div>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EAFE45] text-green-950 font-semibold py-3 rounded-full hover:bg-[#b6c811] transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && <p className="text-green-400 mt-3">{success}</p>}
            {error && <p className="text-red-400 mt-3">{error}</p>}
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
