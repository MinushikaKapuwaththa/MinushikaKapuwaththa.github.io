import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Testing Framework',
    description: 'A comprehensive automated testing framework for e-commerce platforms using Selenium and Java. Includes test cases for product browsing, cart functionality, checkout process, and user account management.',
    technologies: ['Selenium', 'Java', 'TestNG', 'Maven', 'Jenkins'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'automation',
    github: 'https://github.com/username/ecommerce-testing',
  },
  {
    title: 'API Testing Suite',
    description: 'An extensive collection of API tests using Postman and Newman. Validates REST endpoints for a financial services application, including data validation, error handling, and security testing.',
    technologies: ['Postman', 'Newman', 'JavaScript', 'Jenkins', 'CI/CD'],
    image: 'https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'automation',
    github: 'https://github.com/username/api-testing-suite',
    demo: 'https://example.com/demo'
  },
  {
    title: 'Mobile App Test Plan',
    description: 'Comprehensive test documentation for a healthcare mobile application. Includes test strategy, test cases, and defect reporting templates that helped ensure the application met HIPAA compliance requirements.',
    technologies: ['iOS', 'Android', 'Appium', 'JIRA', 'Test Documentation'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'manual',
  },
  {
    title: 'Test Automation Dashboard',
    description: 'A customized dashboard built to visualize test results and metrics from multiple testing tools. Provides insights into test coverage, success rates, and identifies testing bottlenecks.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'CI/CD Integration'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tools',
    github: 'https://github.com/username/test-dashboard',
    demo: 'https://example.com/dashboard-demo'
  },
  {
    title: 'Security Testing Protocol',
    description: 'Developed a comprehensive security testing protocol for web applications. Includes penetration testing procedures, vulnerability assessments, and compliance checklists.',
    technologies: ['OWASP ZAP', 'Burp Suite', 'Nmap', 'Security Documentation'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'manual',
  },
  {
    title: 'Continuous Testing Pipeline',
    description: 'Designed and implemented a continuous testing pipeline that integrates with the development workflow. Enables automatic test execution at various stages of the software development lifecycle.',
    technologies: ['Jenkins', 'Docker', 'Selenium Grid', 'GitLab CI', 'Reporting Tools'],
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tools',
    github: 'https://github.com/username/ci-testing-pipeline',
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
            onClick={() => setActiveFilter('manual')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${activeFilter === 'manual'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            Manual Testing
          </button>
          
          <button
            onClick={() => setActiveFilter('tools')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${activeFilter === 'tools'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            Tools & Infrastructure
          </button>
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