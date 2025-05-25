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
  {
    name: "Adithya Pramod Menon",
    institution: "",
    internshipInstitution: "Cochin University Of Science And Technology",
    mentorName: "Dr. Santosh Kumar G",
    mentorEmail: "san@cusat.ac.in",
  },
  {
    name: "Alen Mariya P P",
    institution: "",
    internshipInstitution: "Cochin University Of Science And Technology",
    mentorName: "Dr. Jeena K",
    mentorEmail: "jeenakk@cusat.ac.in",
  },
  {
    name: "Ananthakrishnan A S",
    institution: "Amrita Vishwa Vidyapeetham",
    internshipInstitution: "Amrita Vishwa Vidyapeetham",
    mentorName: "Dr. Dhanya M. Dhanalakshmy",
    mentorEmail: "md_dhanya@cb.amrita.edu",
  },
  {
    name: "Anju Mary Anson",
    institution: "",
    internshipInstitution: "Amrita Vishwa Vidyapeetham",
    mentorName: "Dr. Dhanya M. Dhanalakshmy",
    mentorEmail: "md_dhanya@cb.amrita.edu",
  },
  {
    name: "Anurag S Nair",
    institution: "",
    internshipInstitution: "Amrita Vishwa Vidyapeetham",
    mentorName: "Dr. Ritwik M",
    mentorEmail: "m_ritwik@cb.amrita.edu",
  },
  {
    name: "Chackochan Jose",
    institution: "",
    internshipInstitution: "National Institute Of Technology Calicut",
    mentorName: "Dr. Santosh Kumar Behera",
    mentorEmail: "skbehera@nitc.ac.in",
  },
  {
    name: "D R Adithyaa",
    institution: "Amrita Vishwa Vidyapeetham",
    internshipInstitution: "Amrita Vishwa Vidyapeetham",
    mentorName: "Dr. Ritwik M",
    mentorEmail: "m_ritwik@cb.amrita.edu",
  },
  {
    name: "Fidha Naisam",
    institution: "",
    internshipInstitution: "National Institute Of Technology Calicut",
    mentorName: "Dr. Jayaraj P B",
    mentorEmail: "san@cusat.ac.in",
  },
  {
    name: "Ganesh Chandran C",
    institution: "",
    internshipInstitution: "National Institute Of Technology Calicut",
    mentorName: "Dr. Shihabudheen K V",
    mentorEmail: "shihabudheen@nitc.ac.in",
  },
  {
    name: "Jeswin Antony Chungath",
    institution: "",
    internshipInstitution: "National Institute Of Technology Calicut",
    mentorName: "Dr. Sudeep P V",
    mentorEmail: "sudeep.pv@nitc.ac.in",
  },
  {
    name: "Josh Joseph",
    institution: "",
    internshipInstitution: "Cochin University Of Science And Technology",
    mentorName: "Dr. Santosh Kumar G",
    mentorEmail: "san@cusat.ac.in",
  },
  {
    name: "Kavinraj S",
    institution: "Amrita Vishwa Vidyapeetham",
    internshipInstitution: "Amrita Vishwa Vidyapeetham",
    mentorName: "Dr. Ritwik M",
    mentorEmail: "m_ritwik@cb.amrita.edu",
  },
  {
    name: "Kishan D Majithia",
    institution: "Tkm College Of Engineering Kollen",
    internshipInstitution: "Amrita Vishwa Vidyapeetham",
    mentorName: "Dr. Dhanya M. Dhanalakshmy",
    mentorEmail: "md_dhanya@cb.amrita.edu",
  },
  {
    name: "Krishnendu A",
    institution: "Samtgitis College Of Engineering",
    internshipInstitution: "Cochin University Of Science And Technology",
    mentorName: "Dr. Shailesh Sivan",
    mentorEmail: "shaileshsivan@cusat.ac.in",
  },
  {
    name: "Nandana Nair",
    institution: "",
    internshipInstitution: "National Institute Of Technology Calicut",
    mentorName: "Dr. Raju Hazari",
    mentorEmail: "rajuhazan@nitc.ac.in",
  },
  {
    name: "Revathy P S",
    institution: "",
    internshipInstitution: "National Institute Of Technology Calicut",
    mentorName: "Dr. Sudeep P V",
    mentorEmail: "sudeep.pv@nitc.ac.in",
  },
  {
    name: "Richard Sabu",
    institution: "",
    internshipInstitution: "Cochin University Of Science And Technology",
    mentorName: "Dr. Jeena K",
    mentorEmail: "jeenakk@cusat.ac.in",
  },
  {
    name: "Sabharish P V",
    institution: "",
    internshipInstitution: "Cochin University Of Science And Technology",
    mentorName: "Dr. Shailesh Sivan",
    mentorEmail: "shaileshsivan@cusat.ac.in",
  },
  {
    name: "Sneha Paul",
    institution: "Jyothi Engineering College Thrissar",
    internshipInstitution: "National Institute Of Technology Calicut",
    mentorName: "Dr. Shihabudheen K V",
    mentorEmail: "shihabudheen@nitc.ac.in",
  },
  {
    name: "Swathy V",
    institution: "Nssi College Of Engineering Palakkad",
    internshipInstitution: "Amrita Vishwa Vidyapeetham",
    mentorName: "Dr. Bagavathi C",
    mentorEmail: "c_bagavathi@cb.amrita.edu",
  },
  {
    name: "Theertha R",
    institution: "Nss College Of Engineering",
    internshipInstitution: "Amrita Vishwa Vidyapeetham",
    mentorName: "Dr. Bagavathi C",
    mentorEmail: "c_bagavathi@cb.amrita.edu",
  },
];

const MentorAllocation = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
            Mentor Allocation
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
