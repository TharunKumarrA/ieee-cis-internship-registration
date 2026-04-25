"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import siteConfig from "../../data/site-config.json";

interface MentorAllocation {
  name: string;
  institution: string;
  internshipInstitution: string;
  mentorName: string;
  mentorEmail: string;
}

const MentorAllocation = () => {
  const { mentorAllocation, features } = siteConfig;
  const mentorAllocations = mentorAllocation.allocations;

  const [currentPage, setCurrentPage] = useState(1);

  if (!features.showMentorAllocation) return null;
  const candidatesPerPage = 10;
  const totalPages = Math.ceil(mentorAllocations.length / candidatesPerPage);

  // Calculate the mentors to display on the current page
  const startIndex = (currentPage - 1) * candidatesPerPage;
  const currentMentors = mentorAllocations.slice(
    startIndex,
    startIndex + candidatesPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section
      id="mentor-allocation"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            {mentorAllocation.title}
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-white">
                <thead className="bg-ieeeBlue sticky top-0 z-10">
                  <tr>
                    <th className="p-4 font-bold text-lg" scope="col">
                      Name
                    </th>
                    <th className="p-4 font-bold text-lg" scope="col">
                      Institution
                    </th>
                    <th className="p-4 font-bold text-lg" scope="col">
                      Internship Institution
                    </th>
                    <th className="p-4 font-bold text-lg" scope="col">
                      Mentor Name
                    </th>
                    <th className="p-4 font-bold text-lg" scope="col">
                      Mentor Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentMentors.map((mentor, index) => (
                    <tr
                      key={index}
                      className={`border-b border-white border-opacity-20 ${
                        index % 2 === 0
                          ? "bg-white bg-opacity-5"
                          : "bg-transparent"
                      } hover:bg-white hover:bg-opacity-10 transition-colors`}
                    >
                      <td className="p-4 text-base">{mentor.name}</td>
                      <td className="p-4 text-base">
                        {mentor.institution || "N/A"}
                      </td>
                      <td className="p-4 text-base">
                        {mentor.internshipInstitution}
                      </td>
                      <td className="p-4 text-base">{mentor.mentorName}</td>
                      <td className="p-4 text-base">
                        <a
                          href={`mailto:${mentor.mentorEmail}`}
                          className="text-ieeeLightBlue hover:underline"
                        >
                          {mentor.mentorEmail}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-between items-center p-4 bg-white bg-opacity-5">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg text-white font-semibold ${
                  currentPage === 1
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-ieeeBlue hover:bg-ieeeNavy"
                }`}
              >
                Previous
              </button>
              <span className="text-white">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg text-white font-semibold ${
                  currentPage === totalPages
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-ieeeBlue hover:bg-ieeeNavy"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorAllocation;
