"use client";

import { motion } from "framer-motion";

export default function Registration() {
  return (
    <section
      id="registration"
      className="relative py-20 bg-gradient-to-r from-ieeeBlue to-ieeeNavy"
    >
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 bg-[url('/images/tech-pattern.png')] bg-cover opacity-10 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Registration Instructions
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Congratulations to all selected candidates! Please check your inbox
            for the registration email. Complete your registration by{" "}
            <strong>May 16th, 10:00 PM</strong> by submitting the required
            details and uploading your payment receipt.
          </p>

          <motion.p
            className="text-md md:text-lg text-white bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <strong>Note:</strong> Failure to complete registration before the
            deadline will result in forfeiting your selection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              disabled
              className="inline-block bg-gray-300 text-gray-500 font-bold py-4 px-8 rounded-lg text-lg cursor-not-allowed"
            >
              Registration Closed
            </button>
          </motion.div>

          {/* Registration Deadline */}
          <motion.div
            className="mt-8 p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Registration Closed on: <strong>April 30, 2025</strong>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
