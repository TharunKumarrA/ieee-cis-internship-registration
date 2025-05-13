"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Candidate {
  name: string;
  institution: string;
}

const candidates: Candidate[] = [
  {
    name: "AACQUILINE LINU VARGHESE",
    institution:
      "LBS Institute Of Technology for Women Poojappura Thiruvananthapuram, Under KTU",
  },
  { name: "Abhijith U", institution: "TKMCE" },
  { name: "Abishek Binu", institution: "Amrita Vishwa Vidyapeetham" },
  {
    name: "Adhila Fathima T.A",
    institution: "Rajiv Gandhi Institute of Technology Pampady, Kottayam",
  },
  {
    name: "Adithya Pramod Menon",
    institution: "Cochin University of Science and Technology",
  },
  {
    name: "Ajit R",
    institution: "Muthoot institute of technology and science",
  },
  {
    name: "Alen mariya P P",
    institution: "SCMS SCHOOL OF ENGINEERING&TECHNOLOGY, ERNAKULAM",
  },
  { name: "Albina Biju", institution: "College of engineering Adoor" },
  {
    name: "Alisha Mary Shibu",
    institution: "Muthoot Institute of Technology and Science",
  },
  { name: "Ananthakrishnan A.S", institution: "Amrita Vishwa Vidyapeetham" },
  {
    name: "Andrea Tresa Tom",
    institution: "St.Joseph's College of Engineering and Technology, Palai",
  },
  {
    name: "Anju Anson",
    institution: "Muthoot Institute of Technology and Science",
  },
  {
    name: "Anurag S Nair",
    institution: "Muthoot Institute of Technology and Science",
  },
  {
    name: "Aryan Anil",
    institution: "Sree Chitra Thirunal College of Engineering",
  },
  {
    name: "Athul Krishna A",
    institution: "National Institute of Technology, Calicut",
  },
  {
    name: "Behanan K Bahanan",
    institution: "Rajagiri School of Engineering and Technology",
  },
  {
    name: "Chackochan Jose",
    institution:
      "Mar Athanasius College of Engineering (Autonomous), Kothamangalam",
  },
  {
    name: "Fathima Hanna",
    institution: "Rajiv Gandhi Institute of Technology, Kottayam",
  },
  {
    name: "Fathima Aleesha Sherule",
    institution: "LBS College of Engineering Kasaragod",
  },
  {
    name: "Fayed Mohamed",
    institution: "National Institute of Technology, Calicut",
  },
  { name: "Fidha Naisam", institution: "Rajiv Gandhi Institute Of Technology" },
  { name: "Ganesh Chandran C", institution: "kerala technical university" },
  { name: "Hridya B", institution: "TKM College of Engineering" },
  {
    name: "Irin Maria",
    institution: "Government Engineering College Thrissur",
  },
  {
    name: "Jais Mathew",
    institution: "muthoot institute of technology and science",
  },
  { name: "Jesvin Jobi", institution: "NSS College of Engineering, Palakkad" },
  {
    name: "JESWIN ANTONY CHUNGATH",
    institution: "GOVERNMENT ENGINEERING COLLEGE THRISSUR",
  },
  { name: "Joel Job", institution: "TKMCE, Kollam" },
  {
    name: "Josh Joseph",
    institution: "Cochin University of Science and Technology",
  },
  { name: "Jostin Jaison", institution: "NSS College of engineering palakkad" },
  {
    name: "Jumana Jalal",
    institution: "Ilahia College of Engineering & Technology",
  },
  { name: "Kavinraj S", institution: "Amrita Vishwa Vidyapeetham" },
  { name: "Kishan Majithia", institution: "TKM College of Engineering" },
  { name: "Krishnendu A", institution: "Saintgits College Of Engineering" },
  {
    name: "Mariya Babu",
    institution: "Cochin University of Science and Technology",
  },
  {
    name: "Meenakshi Pramod",
    institution: "Cochin University of Science and Technology",
  },
  {
    name: "MOHAMMED ROSHAN A N",
    institution: "Sahrdaya College of engineering and technology",
  },
  {
    name: "Nandana Nair",
    institution: "APJ Abdul Kalam Technological University",
  },
  {
    name: "Peter Ajith Cherian",
    institution: "Mode Engineering College Thrikkakara",
  },
  {
    name: "Revathy P S",
    institution: "Sree Chitra Thirunal College of Engineering",
  },
  {
    name: "Richard Sabu",
    institution: "Rajagiri School of Engineering and Technology",
  },
  {
    name: "Rose Mary Steephan",
    institution: "Vimal Jyothi Engineering College chemperi",
  },
  {
    name: "SABHARISH P V",
    institution: "Rajagiri School Of Engineering and Technology",
  },
  {
    name: "SALMANUL FARIS PV",
    institution: "TKM COLLEGE OF ENGINEERING, KOLLAM",
  },
  {
    name: "Sangeeth MS",
    institution: "Rajagiri school of engineering and technology kakkanad",
  },
  {
    name: "Sanjana Suresh",
    institution: "Muthoot Institute of Technology and Science",
  },
  { name: "Sneha Paul", institution: "Jyothi Engineering College" },
  {
    name: "Sneha S A",
    institution: "Sree Chithra Thirunal College of Engineering",
  },
  { name: "Swathy V", institution: "NSS College of Engineering,Palakkad" },
  {
    name: "Swetha Varghese",
    institution: "Rajiv Gandhi institute of technology Kottayam",
  },
  {
    name: "Theertha R",
    institution: "APJ Abdul Kalam Technological University",
  },
  { name: "Theertha Santhosh", institution: "NSS College of Engineering" },
  {
    name: "Tom Varghese",
    institution: "Government Engineering College Thrissur",
  },
];

const SelectedCandidates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const candidatesPerPage = 10;
  const totalPages = Math.ceil(candidates.length / candidatesPerPage);

  // Calculate the candidates to display on the current page
  const startIndex = (currentPage - 1) * candidatesPerPage;
  const currentCandidates = candidates.slice(
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      viewport={{ once: true }}
      className="mt-12 max-w-4xl mx-auto"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Selected Candidates
      </h3>
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-white">
            <thead className="bg-ieeeBlue sticky top-0 z-10">
              <tr>
                <th className="p-4 font-bold text-lg">Name</th>
                <th className="p-4 font-bold text-lg">Institution</th>
              </tr>
            </thead>
            <tbody>
              {currentCandidates.map((candidate, index) => (
                <tr
                  key={index}
                  className={`border-b border-white border-opacity-20 ${
                    index % 2 === 0 ? "bg-white bg-opacity-5" : "bg-transparent"
                  } hover:bg-white hover:bg-opacity-10 transition-colors`}
                >
                  <td className="p-4 text-base">{candidate.name}</td>
                  <td className="p-4 text-base">{candidate.institution}</td>
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
  );
};

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

        {/* Selected Candidates List */}
        <SelectedCandidates />
      </div>
    </section>
  );
}
