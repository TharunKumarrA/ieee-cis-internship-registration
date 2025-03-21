'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaUserGraduate } from 'react-icons/fa';

const Eligibility = () => {
  const eligibilityCriteria = [
    "Currently enrolled in B.Tech/BE/M.Tech/ME in Computer Science, Electronics, or related disciplines",
    "Strong foundation in mathematics, programming, and basic machine learning concepts",
    "Proficiency in Python or another programming language relevant to AI/ML",
    "Proven interest in computational intelligence through projects or coursework"
  ];

  const ineligibleCriteria = [
    "Students in their final semester (due to program duration requirements)",
    "Non-technical background without sufficient programming experience",
    "Unable to commit at least 20 hours per week during the program duration"
  ];

  const quotaLimits = [
    { name: "Per Faculty Mentor", limit: "Maximum 3 students" },
    { name: "Per Institution", limit: "Maximum 10 students" },
    { name: "Total Program Intake", limit: "Limited to 50 students" }
  ];

  return (
    <section id="eligibility" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-2">Eligibility & Selection</h2>
          <div className="w-24 h-1 bg-ieee-blue mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our merit-based selection process ensures we identify the most promising candidates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Eligibility criteria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-ieee p-6 border-t-4 border-green-500"
          >
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <h3 className="text-xl font-bold">Eligibility Criteria</h3>
            </div>
            <ul className="space-y-3">
              {eligibilityCriteria.map((item, index) => (
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
            className="bg-white rounded-lg shadow-ieee p-6 border-t-4 border-red-500"
          >
            <div className="flex items-center mb-4">
              <FaTimesCircle className="text-red-500 text-2xl mr-3" />
              <h3 className="text-xl font-bold">Ineligibility Factors</h3>
            </div>
            <ul className="space-y-3">
              {ineligibleCriteria.map((item, index) => (
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
            className="bg-white rounded-lg shadow-ieee p-6 border-t-4 border-ieee-blue"
          >
            <div className="flex items-center mb-4">
              <FaUserGraduate className="text-ieee-blue text-2xl mr-3" />
              <h3 className="text-xl font-bold">Selection Quotas</h3>
            </div>
            <ul className="space-y-3">
              {quotaLimits.map((item, index) => (
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
          className="mt-10 bg-ieee-light rounded-lg shadow-ieee p-6"
        >
          <h3 className="text-2xl font-bold text-ieee-blue mb-4 text-center">Selection Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg">
              <div className="text-ieee-blue text-2xl font-bold mb-2 flex items-center">
                <span className="bg-ieee-blue text-black w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Application Review
              </div>
              <p className="text-gray-600">
                All applications are reviewed based on academic background, relevant experience, and statement of purpose.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg">
              <div className="text-ieee-blue text-2xl font-bold mb-2 flex items-center">
                <span className="bg-ieee-blue text-black w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Technical Assessment
              </div>
              <p className="text-gray-600">
                Shortlisted candidates may be asked to complete a brief technical assessment or project.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg">
              <div className="text-ieee-blue text-2xl font-bold mb-2 flex items-center">
                <span className="bg-ieee-blue text-black w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Final Selection
              </div>
              <p className="text-gray-600">
                Selected candidates will be notified via email with further instructions for enrollment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Eligibility;
