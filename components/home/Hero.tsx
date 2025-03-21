'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-ieeeBlue to-ieeeNavy opacity-90 z-0"></div>
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/tech-pattern.png')] bg-cover opacity-10 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            IEEE CIS Kerala Section
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-6">
            Summer Internship 2025
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8">
            A Premier Learning Experience in Computational Intelligence
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link href="#registration" className="btn-primary">
              Apply Now
            </Link>
            <Link href="#about" className="btn-secondary bg-white">
              Learn More
            </Link>
          </motion.div>
          
          <motion.div
            className="mt-12 p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white">Applications open until: <strong>April 30, 2025</strong></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}