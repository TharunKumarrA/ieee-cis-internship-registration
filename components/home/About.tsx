'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="about" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About the Internship</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              The IEEE CIS Kerala Section Summer Internship Program offers a unique opportunity for students to gain hands-on experience in cutting-edge computational intelligence technologies under the guidance of expert mentors.
            </p>
            
            <h3 className="text-2xl font-bold text-ieeeBlue mb-4">Internship Structure</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-ieeeBlue bg-opacity-10 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ieeeBlue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Mode:</strong> Hybrid (Online learning + Hands-on projects)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-ieeeBlue bg-opacity-10 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ieeeBlue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Duration:</strong> 6 weeks (May 15 - June 30, 2025)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-ieeeBlue bg-opacity-10 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ieeeBlue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Host Institutions:</strong> Cochin University, NITC, Amrita University</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-ieeeBlue bg-opacity-10 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ieeeBlue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Certificate:</strong> IEEE CIS certified completion certificate</span>
              </li>
            </ul>
            
            <div className="mt-8 px-5 py-4 bg-ieeeGray rounded-lg">
              <h4 className="text-xl font-semibold text-ieeeBlue mb-2">Why Apply?</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Hands-on experience with cutting-edge AI technologies</li>
                <li>Mentorship from leading experts in the field</li>
                <li>Build your professional network in the industry</li>
                <li>Work on real-world projects with practical applications</li>
                <li>Enhance your resume with IEEE certification</li>
              </ul>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/internship-overview.jpg"
              alt="Students working on computational intelligence projects"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}