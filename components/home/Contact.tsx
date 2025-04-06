"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-ieee-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-ieee-blue mb-4">
            Have a Query?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Reach out to us directly via email. We&apos;ll get back to you as soon as
            possible.
          </p>
          <div className="flex justify-center items-center space-x-2 text-ieee-blue text-xl">
            <FaEnvelope />
            <a
              href="mailto:ieeecisk@gmail.com"
              className="underline hover:text-ieee-dark"
            >
              ieeecisk@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
