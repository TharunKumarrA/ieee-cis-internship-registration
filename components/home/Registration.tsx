"use client";

import { motion } from "framer-motion";

const googleFormLink = "https://forms.gle/YOUR_GOOGLE_FORM_LINK"; // Replace with actual Google Form link

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
            Register Now for the IEEE CIS Summer Internship 2025
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Take the first step towards an exciting journey in Computational
            Intelligence. Secure your spot now!
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-ieeeBlue font-bold py-4 px-8 rounded-lg text-lg shadow-md hover:bg-gray-200 transition"
            >
              Register Now
            </a>
          </motion.div>

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
                Registration Closes: <strong>April 30, 2025</strong>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
