'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaClock, FaMoneyBillWave, FaUserGraduate } from 'react-icons/fa';

const Registration = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your actual registration system
    alert(`Thank you! We'll send registration details to ${email}`);
    setEmail('');
  };

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-2">Registration & Fees</h2>
          <div className="w-24 h-1 bg-ieee-blue mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure your spot in this prestigious internship program by completing the registration process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-ieee-light rounded-lg p-6 shadow-ieee border-l-4 border-ieee-blue mb-6">
              <h3 className="text-2xl font-bold text-ieee-dark mb-4">Registration Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-ieee-blue">
                    <FaMoneyBillWave size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-ieee-dark">Registration Fee</h4>
                    <p className="text-gray-600">₹1000 (Includes course materials, certification, and project mentorship)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-ieee-blue">
                    <FaClock size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-ieee-dark">Registration Deadline</h4>
                    <p className="text-gray-600">May 10, 2025 (11:59 PM IST)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-ieee-blue">
                    <FaUserGraduate size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-ieee-dark">Required Documents</h4>
                    <p className="text-gray-600">Resume/CV, Academic transcripts, Statement of purpose (300 words)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-ieee border border-ieee-blue/20">
              <h4 className="font-bold text-ieee-dark mb-2">IEEE Member Benefit</h4>
              <p className="text-gray-600 mb-4">IEEE members receive a 20% discount on the registration fee. Valid IEEE membership ID required during registration.</p>
              
              <div className="bg-ieee-light p-3 rounded-md border border-ieee-blue/20">
                <p className="text-sm font-medium text-ieee-dark">Not an IEEE member yet? <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="text-ieee-blue hover:underline">Join now</a> to access this and many other benefits.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg p-6 shadow-ieee border border-ieee-blue/20">
              <h3 className="text-2xl font-bold text-ieee-dark mb-6">Register Now</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-ieee-blue hover:bg-ieee-blue/90 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 shadow-sm"
                >
                  Get Registration Details
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  By registering, you agree to our terms and conditions and privacy policy.
                </p>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  For assistance with registration, please contact: <br />
                  <a href="mailto:internship@ciskerala.org" className="text-ieee-blue hover:underline">internship@ciskerala.org</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;