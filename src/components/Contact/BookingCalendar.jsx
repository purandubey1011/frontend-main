import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FiClock, FiPhone } from "react-icons/fi";

const BookingCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-green-900 mb-12">
          Booking <span className="font-serif italic">Calendar</span>
        </h2>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10 flex flex-col md:flex-row gap-10">
          {/* Left Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <h3 className="text-lg font-semibold">ACME Inc.</h3>
            </div>

            <h4 className="text-2xl font-bold mb-5">Product Demo</h4>

            <div className="flex items-center gap-2 mb-2 text-gray-700">
              <FiClock className="text-gray-600" /> <span>30 min</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FiPhone className="text-gray-600" /> <span>Phone call</span>
            </div>

            <p className="mt-5 text-gray-600 text-sm leading-relaxed max-w-xs">
              This is an example of a meeting you would have with a potential
              customer to demonstrate your product.
            </p>

            <div className="mt-6 space-y-2 text-xs text-gray-500">
              <a href="#" className="underline hover:text-gray-700">
                Cookie settings
              </a>
              <br />
              <a href="#" className="underline hover:text-gray-700">
                Report abuse
              </a>
            </div>
          </div>

          {/* Right Calendar */}
          <div className="flex-1">
            <h5 className="text-sm font-semibold mb-3">Select a Date &amp; Time</h5>

            <div className="rounded-xl border border-gray-200 shadow-sm p-4">
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full border-none"
              />
            </div>

            <div className="mt-5 pt-4 border-t border-gray-200 text-xs text-gray-500">
              Time zone:{" "}
              <span className="font-medium text-gray-700">
                Central European Time
              </span>{" "}
              (8:11 pm)
            </div>

            <button className="mt-3 px-4 py-2 text-xs rounded-md border border-gray-300 hover:bg-gray-50">
              Troubleshooting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
