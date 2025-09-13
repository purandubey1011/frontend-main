import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const QuickContact = () => {
  return (
    <section className="w-full bg-[#EAFE45] text-green-950 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
         <span className="italic"> Quick Contact</span> <span className="font-bold">Now</span>
        </h2>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Address */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FiMapPin className="text-xl" />
              <h4 className="font-medium">Address</h4>
            </div>
            <p className="text-sm">UK</p>
          </div>

          {/* Contact details */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FiPhoneCall className="text-xl" />
              <h4 className="font-medium">Contact Details</h4>
            </div>
            <p className="text-sm">
              Booking Inquiries:{" "}
              <a href="tel:+9711234567" className="underline">
                +971 123 4567
              </a>
            </p>
            <p className="text-sm">
              Support:{" "}
              <a href="tel:+9719876543" className="underline">
                +971 987 6543
              </a>
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FiMail className="text-xl" />
              <h4 className="font-medium">Email Us</h4>
            </div>
            <p className="text-sm">
              General Inquiries:{" "}
              <a href="mailto:support@jagocoach.com" className="underline">
                support@jagocoach.com
              </a>
            </p>
          </div>
        </div>

        {/* Follow us */}
        <div className="mt-4">
          <h4 className="mb-3 font-medium">Follow us :</h4>
          <div className="flex gap-5 text-lg">
            <a href="#" className="hover:text-green-700">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-700">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-700">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-xs mt-4 text-green-800">
            *We respect your privacy. No spam, ever. Your details are safe with
            us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
