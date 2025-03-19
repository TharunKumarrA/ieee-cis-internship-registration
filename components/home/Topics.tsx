'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaMicrochip, FaNetworkWired, FaShieldAlt, FaDatabase } from 'react-icons/fa';
// import { AiFillOpenAI } from 'react-icons/ri';
import { BsGraphUp } from 'react-icons/bs';
import { MdBiotech } from 'react-icons/md';

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const TopicCard = ({ icon, title, description, delay }: TopicCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-ieee hover:shadow-lg transition-all duration-300 border-l-4 border-ieee-blue"
    >
      <div className="text-ieee-blue text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-ieee-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Topics = () => {
  const topics = [
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description: "Fundamentals of ML algorithms, supervised and unsupervised learning techniques, and practical applications."
    },
    {
      icon: <FaNetworkWired />,
      title: "Artificial Intelligence",
      description: "Core AI concepts, problem-solving techniques, and modern AI systems development."
    },
    {
      icon: <FaMicrochip />,
      title: "Edge AI",
      description: "Deploy AI models on edge devices, optimize for resource constraints, and real-time applications."
    },
    {
      icon: <FaRobot />,
      title: "Natural Language Processing",
      description: "Text processing, sentiment analysis, language models, and conversational AI systems."
    },
    {
      icon: <FaNetworkWired />,
      title: "Internet of Things",
      description: "IoT architecture, sensor networks, data collection, and intelligent IoT applications."
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Security for AI systems, adversarial machine learning, and ethical hacking techniques."
    },
    {
      icon: <BsGraphUp />,
      title: "Data Analytics",
      description: "Data visualization, statistical analysis, and business intelligence applications."
    },
    {
      icon: <FaDatabase />,
      title: "Big Data",
      description: "Process and analyze large datasets using distributed computing frameworks."
    },
    {
      icon: <MdBiotech />,
      title: "Computational Biology",
      description: "AI applications in genomics, protein structure prediction, and drug discovery."
    }
  ];

  return (
    <section id="topics" className="py-16 bg-ieee-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-2">Topics Covered</h2>
          <div className="w-24 h-1 bg-ieee-blue mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore cutting-edge technologies and domains in computational intelligence through our comprehensive curriculum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <TopicCard 
              key={index}
              icon={topic.icon}
              title={topic.title}
              description={topic.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;