'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission logic
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-ieee-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-2">Contact Us</h2>
          <div className="w-24 h-1 bg-ieee-blue mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about the internship program? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-ieee p-6"
          >
            <h3 className="text-2xl font-bold text-ieee-dark mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ieee-blue text-ieee-light-blue py-2 px-4 rounded-md hover:bg-ieee-light-blue transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-lg shadow-ieee p-6 mb-6">
              <h3 className="text-2xl font-bold text-ieee-dark mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-ieee-blue bg-ieee-light p-3 rounded-full mr-4">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:internship@ieeekerala.org" className="text-gray-600 hover:text-ieee-blue">
                      internship@ieeekerala.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-ieee-blue bg-ieee-light p-3 rounded-full mr-4">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-ieee-blue">
                      +91 9876 543 210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-ieee-blue bg-ieee-light p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">
                      IEEE CIS Kerala Section<br />
                      College of Engineering Trivandrum<br />
                      Kerala, India - 695016
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-ieee p-6">
              {/* <h3 className="text-2xl font-bold text-ieee-dark mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-ieee-light p-3 rounded-full text-ieee-blue hover:bg-ieee-blue hover:text-white transition-colors duration-300">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="bg-ieee-light p-3 rounded-full text-ieee-blue hover:bg-ieee-blue hover:text-white transition-colors duration-300">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="bg-ieee-light p-3 rounded-full text-ieee-blue hover:bg-ieee-blue hover:text-white transition-colors duration-300">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="bg-ieee-light p-3 rounded-full text-ieee-blue hover:bg-ieee-blue hover:text-white transition-colors duration-300">
                  <FaInstagram className="text-xl" />
                </a>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;