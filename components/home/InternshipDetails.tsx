"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface MentorAllocation {
  name: string;
  institution: string;
  internshipInstitution: string;
  mentorName: string;
  mentorEmail: string;
}

const mentorAllocations: MentorAllocation[] = [
  {
    name: "Aacquiline Linu Varghese",
    institution: "Lbs Institule Of Technology For Women",
    internshipInstitution: "National Institute Of Technology Calicut",
    mentorName: "Dr. Santosh Kumar Behera",
    mentorEmail: "skbehera@nitc.ac.in",
  },
  {
    name: "Adhila Fathima T.A",
    institution: "",
    internshipInstitution: "National Institute Of Technology Calicut",
    mentorName: "Dr. Jayaraj P B",
    mentorEmail: "jayarajpb@nitc.ac.in",
  },
  // Add other entries from the PDF here
  // Example for brevity; include all 23 entries from the provided table
];

const InternshipDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const candidatesPerPage = 10;
  const totalPages = Math.ceil(mentorAllocations.length / candidatesPerPage);

  const startIndex = (currentPage - 1) * candidatesPerPage;
  const currentMentors = mentorAllocations.slice(
    startIndex,
    startIndex + candidatesPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

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
            IEEE CIS Summer Internship Details
          </h2>

          {/* Guidelines */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              1. Duration & Mode
            </h3>
            <p className="text-gray-200">
              <strong>Internship Period:</strong> Any 1 month between May 20 and
              July 31, 2025
              <br />
              <strong>Mode:</strong> Hybrid
            </p>

            <h3 className="text-2xl font-bold text-white mt-6 mb-4">
              2. Student Assignment
            </h3>
            <p className="text-gray-200">
              Students are assigned based on mutual academic interests and core
              CIS themes. The list of students allotted for each faculty is
              available below. Students have been instructed to reach out to
              their mentors via email.
            </p>

            <h3 className="text-2xl font-bold text-white mt-6 mb-4">
              3. Themes to Guide
            </h3>
            <ul className="text-gray-200 list-disc pl-5">
              <li>Neural Networks (incl. deep learning, CNNs, RNNs, etc.)</li>
              <li>Fuzzy Systems</li>
              <li>Evolutionary Computation</li>
              <li>Ambient Intelligence, Artificial Life</li>
              <li>Cultural Learning, Cognitive Developmental Systems</li>
              <li>Other emerging CI paradigms</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-6 mb-4">
              4. Expectations from Mentors
            </h3>
            <ul className="text-gray-200 list-disc pl-5">
              <li>
                Provide an appropriate problem statement or project area within
                your expertise
              </li>
              <li>
                Hold regular check-ins with your mentees (weekly is recommended)
              </li>
              <li>Offer feedback on project progress and direction</li>
              <li>
                Verify the student’s final submission (report and presentation)
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-6 mb-4">
              5. Deliverables from Students
            </h3>
            <ul className="text-gray-200 list-disc pl-5">
              <li>Weekly progress updates (short summaries)</li>
              <li>Final presentation/demo to the mentor</li>
              <li>
                Final internship report (10–15 pages) — template to be shared
                separately
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-6 mb-4">
              6. Certification
            </h3>
            <p className="text-gray-200">
              Students will receive a certificate jointly from the IEEE CIS
              Joint Chapter and IEEE Kerala Section after the completion and
              verification of the internship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipDetails;
