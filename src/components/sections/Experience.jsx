import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Ceylon Electricity Board - IT Division',
    location: 'Colombo, Sri Lanka',
    period: 'March 2024 - Oct 2024',
    description: [
      'Spring MVC & Java Development - Built and managed backend logic.',
      'JPQL & SQL Queries - Enhanced search queries and data retrieval.',
      'Data Visualization with Chart.js - Created interactive dashboards.',
      'Jaspersoft Studio Reports - Developed detailed business reports.',,
      "Oracle Database Management - Worked with live production data and optimized queries.",
      'Frontend UI Enhancements - Improved navigation and UI components.'
    ]
  }
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-8"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-blue-500/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 ml-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-blue-500 font-medium mt-1">
              {experience.company}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          {experience.description.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;