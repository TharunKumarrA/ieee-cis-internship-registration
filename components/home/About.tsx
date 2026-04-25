'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import siteConfig from '../../data/site-config.json';

export default function About() {
  const { about } = siteConfig;
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
        <h2 className="section-title">{about.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              {about.description}
            </p>
            
            <h3 className="text-2xl font-bold text-ieeeBlue mb-4">Internship Structure</h3>
            
            <ul className="space-y-3">
              {about.structure.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center rounded-full bg-ieeeBlue bg-opacity-10 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ieeeBlue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span><strong>{item.label}:</strong> {item.value}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 px-5 py-4 bg-ieeeGray rounded-lg">
              <h4 className="text-xl font-semibold text-ieeeBlue mb-2">{about.whyApplyTitle}</h4>
              <ul className="list-disc pl-5 space-y-2">
                {about.whyApplyItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/image.png"
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