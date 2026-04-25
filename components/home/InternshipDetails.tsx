"use client";

import { motion } from "framer-motion";
import siteConfig from "../../data/site-config.json";

const InternshipDetails = () => {
  const { mentorAllocation, features } = siteConfig;

  if (!features.showMentorAllocation) return null;

  return (
    <section
      id="internship-details"
      className="py-16 bg-gradient-to-r from-ieeeBlue to-ieeeNavy"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            {mentorAllocation.detailsTitle}
          </h2>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-8">
            {mentorAllocation.guidelines.map((guideline, index) => (
              <div key={index}>
                <h3 className={`text-2xl font-bold text-white mb-4 ${index > 0 ? "mt-6" : ""}`}>
                  {guideline.title}
                </h3>
                {guideline.isList ? (
                  <ul className="text-gray-200 list-disc pl-5">
                    {guideline.listItems?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-200">
                    <span dangerouslySetInnerHTML={{ __html: guideline.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipDetails;
