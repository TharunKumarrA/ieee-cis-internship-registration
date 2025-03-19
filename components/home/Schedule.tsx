'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  isActive?: boolean;
  delay: number;
}

const TimelineEvent = ({ date, title, description, isActive = false, delay }: TimelineEventProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className={`flex mb-8 relative ${isActive ? 'opacity-100' : 'opacity-80'}`}
    >
      <div className="flex-shrink-0 w-24 pt-1 text-right pr-4">
        <span className="text-sm font-bold text-ieee-blue">{date}</span>
      </div>
      
      <div className="flex flex-col items-center mr-4">
        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-ieee-blue' : 'bg-gray-400'}`}></div>
        <div className="h-full w-0.5 bg-gray-200"></div>
      </div>
      
      <div className={`bg-white rounded-lg p-4 shadow-ieee flex-grow ${isActive ? 'border-l-4 border-ieee-blue' : ''}`}>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Schedule = () => {
  const timelineEvents = [
    {
      date: "April 1, 2025",
      title: "Applications Open",
      description: "Online applications for the summer internship begin through the IEEE portal.",
      isActive: true
    },
    {
      date: "April 20, 2025",
      title: "Application Deadline",
      description: "Last date to submit your application and supporting documents.",
      isActive: false
    },
    {
      date: "April 25, 2025",
      title: "Shortlist Announcement",
      description: "List of shortlisted candidates will be published on the website.",
      isActive: false
    },
    {
      date: "May 1, 2025",
      title: "Registration Deadline",
      description: "Selected candidates must complete registration and fee payment.",
      isActive: false
    },
    {
      date: "May 15, 2025",
      title: "Orientation Program",
      description: "Virtual kickoff event for all participants with mentor introductions.",
      isActive: false
    },
    {
      date: "May 20 - July 30, 2025",
      title: "Internship Period",
      description: "10-week intensive program with online sessions and hands-on projects.",
      isActive: false
    },
    {
      date: "August 5, 2025",
      title: "Project Presentations",
      description: "Final project presentations and evaluations at host institutions.",
      isActive: false
    },
    {
      date: "August 10, 2025",
      title: "Certification & Closing",
      description: "Distribution of certificates and closing ceremony.",
      isActive: false
    }
  ];

  const hostInstitutions = [
    {
      name: "Cochin University of Science and Technology",
      address: "Cochin, Kerala",
      coordinates: { lat: 9.9748, lng: 76.3121 }
    },
    {
      name: "National Institute of Technology Calicut",
      address: "Calicut, Kerala",
      coordinates: { lat: 11.3217, lng: 75.9335 }
    },
    {
      name: "Amrita Vishwa Vidyapeetham",
      address: "Amritapuri, Kerala",
      coordinates: { lat: 9.0936, lng: 76.4839 }
    }
  ];

  return (
    <section id="schedule" className="py-16 bg-ieee-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-2">Schedule</h2>
          <div className="w-24 h-1 bg-ieee-blue mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Important dates for the internship program.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-ieee p-6 mb-6">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-ieee-blue text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-ieee-dark">Program Timeline</h3>
            </div>
            
            <div className="pl-4">
              {timelineEvents.map((event, index) => (
                <TimelineEvent
                  key={index}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                  isActive={event.isActive}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Host Locations - Commented out section */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-ieee p-6"
        >
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-ieee-blue text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-ieee-dark">Host Institutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            // Map
            <div className="relative h-80 md:h-auto rounded-lg overflow-hidden">
              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                // Replace with actual map component
                <p className="text-gray-500">Interactive map would be integrated here</p>
                // This is a placeholder - in production, integrate Google Maps or similar
              </div>
            </div>

            // Locations list
            <div>
              <h4 className="text-xl font-bold mb-4">Physical Locations</h4>
              <div className="space-y-4">
                {hostInstitutions.map((institution, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-ieee-light p-4 rounded-lg"
                  >
                    <h5 className="font-bold text-ieee-blue">{institution.name}</h5>
                    <p className="flex items-center text-gray-600 mt-1">
                      <FaMapMarkerAlt className="mr-2" />
                      {institution.address}
                    </p>
                    <div className="mt-2 flex items-center text-sm">
                      <FaClock className="mr-2 text-ieee-blue" />
                      <span>Working hours: 9:00 AM - 5:00 PM</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
};

export default Schedule;
