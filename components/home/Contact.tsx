"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import siteConfig from "../../data/site-config.json";

const Contact = () => {
  const { contact, global } = siteConfig;
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
            {contact.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {contact.description}
          </p>
          <div className="flex justify-center items-center space-x-2 text-ieee-blue text-xl">
            <FaEnvelope />
            <a
              href={`mailto:${global.contactEmail}`}
              className="underline hover:text-ieee-dark"
            >
              {global.contactEmail}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
