import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Dashboard, OrangeHRM, Portal, PortfolioImage, Swag, Weather } from '../../assets';

const projects = [
  {
    title: 'OrangeHRM UI Testing',
    description: 'Automated UI testing of the OrangeHRM platform, focusing on critical functionalities such as employee management, admin operations, and login workflows to ensure reliable performance and user experience.',
    technologies: ['Cucumber', 'Serenity BDD', 'Jenkins'],
    image: OrangeHRM,
    category: 'automation',
    github: 'https://github.com/MinushikaKapuwaththa/OrangeHRM-Web-Testing',
  },
  {
    title: 'Swag Labs E-Commerce UI Testing',
    description: 'Performed end-to-end automated UI testing on the Swag Labs e-commerce website, validating key user interactions, cart functionality, and product flows to ensure a seamless shopping experience.',
    technologies: ['Selenium',  'CI/CD'],
    image: Swag,
    category: 'automation',
    github: 'https://github.com/MinushikaKapuwaththa/Swag-Labs-Web-Testing'
  },
  {
    title: 'Project Management System',
    description: 'Led the development of a project management system for academic purposes. Implemented core project tracking features, task management, and ensured the application was responsive and user-centric.',
    technologies: ['React', 'ASP.NET Core', ' MS SQL',],
    image: Dashboard,
    category: 'Web Development',
    github: 'https://github.com/MinushikaKapuwaththa/project-management-system-frontend',
  },
  {
    title: 'Management Portal',
    description: 'Developed a web-based management portal that provides real-time operational insights and metrics for managers. Integrated dashboards and reporting modules using Jasper Reports to enhance decision-making. Woreked on during my internship.',
    technologies: ['Spring MVC', 'Jasper Reports', 'Java', 'Oracle' , 'ChartJS'],
    image: Portal,
    category: 'Web Development',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a responsive personal portfolio website to showcase skills, achievements, and projects. Implemented an interactive, user-friendly interface for optimal viewing across all devices.',
    technologies: ['React', 'CI/CD Integration'],
    image: PortfolioImage,
    category: 'Web Development',
    github: "https://github.com/MinushikaKapuwaththa/MinushikaKapuwaththa.github.io"
  },
  {
    title: 'Weather App',
    description: 'Built a weather forecasting application that retrieves and displays real-time weather data such as temperature, humidity, wind speed, and conditions for any selected city using the OpenWeatherMap API.',
    technologies: ['React', 'OpenWeatherMap API',],
    image: Weather,
    category: 'Web Development',
    github: 'https://github.com/MinushikaKapuwaththa/real-weather',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-start space-x-3">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Projects
        </h2>
        
        <div className="max-w-lg mx-auto mb-12">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Explore my testing projects and contributions that showcase my expertise in quality assurance and software testing.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${activeFilter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            All Projects
          </button>
          
          <button
            onClick={() => setActiveFilter('automation')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${activeFilter === 'automation'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            Automation
          </button>
          
          <button
            onClick={() => setActiveFilter('Web Development')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${activeFilter === 'Web Development'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            Web Development
          </button>
          
          {/* <button
            onClick={() => setActiveFilter('tools')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${activeFilter === 'tools'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            Tools & Infrastructure
          </button> */}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;