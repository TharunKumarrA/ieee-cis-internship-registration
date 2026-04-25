"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaUserGraduate } from "react-icons/fa";
import siteConfig from "../../data/site-config.json";

const Eligibility = () => {
  const { eligibility } = siteConfig;


  return (
    <section id="eligibility" className="py-16 bg-[#00629B] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {eligibility.title}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            {eligibility.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Eligibility criteria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-lg shadow-ieee p-6 border-t-4 border-green-500"
          >
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <h3 className="text-xl font-bold">{eligibility.criteriaTitle}</h3>
            </div>
            <ul className="space-y-3">
              {eligibility.criteria.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ineligibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-lg shadow-ieee p-6 border-t-4 border-red-500"
          >
            <div className="flex items-center mb-4">
              <FaTimesCircle className="text-red-500 text-2xl mr-3" />
              <h3 className="text-xl font-bold">{eligibility.ineligibleTitle}</h3>
            </div>
            <ul className="space-y-3">
              {eligibility.ineligibleFactors.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Selection Quotas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-lg shadow-ieee p-6 border-t-4 border-ieee-blue"
          >
            <div className="flex items-center mb-4">
              <FaUserGraduate className="text-ieee-blue text-2xl mr-3" />
              <h3 className="text-xl font-bold">{eligibility.quotasTitle}</h3>
            </div>
            <ul className="space-y-3">
              {eligibility.quotas.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-medium">{item.name}</span>
                  <span className="bg-ieee-light rounded px-3 py-1 mt-1 inline-block font-bold text-ieee-blue">
                    {item.limit}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Selection Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 bg-ieee-light text-white rounded-lg shadow-ieee p-6"
        >
          <h3 className="text-2xl font-bold text-ieee-blue mb-4 text-center">
            {eligibility.selectionProcessTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eligibility.selectionProcess.map((step, idx) => (
              <div key={idx} className="p-5 rounded-lg">
                <div className="text-ieee-blue text-2xl font-bold mb-2 flex items-center">
                  <span className="bg-ieee-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    {idx + 1}
                  </span>
                  {step.title}
                </div>
                <p className="text-white">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Eligibility;
