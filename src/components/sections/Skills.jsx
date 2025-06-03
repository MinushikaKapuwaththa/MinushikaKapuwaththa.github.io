import React from 'react';
import { CheckCircle } from 'lucide-react';

const skills = [
  // Testing Skills
  { name: 'Manual Testing', level: 3, category: 'Testing' },
  { name: 'Test Planning', level: 2, category: 'Testing' },
  { name: 'Test Case Design', level: 3, category: 'Testing' },
  { name: 'API Testing', level: 4, category: 'Testing' },
  
  // Automation Skills
  { name: 'Selenium', level: 3, category: 'Automation' },
  { name: 'Cucumber', level: 2, category: 'Automation' },
  { name: 'TestNG', level: 3, category: 'Automation' },
  { name: 'JUnit', level: 3, category: 'Automation' },
  
  // Tools
  { name: 'JMeter', level: 3, category: 'Tools' },
  { name: 'Postman', level: 4, category: 'Tools' },
  { name: 'Jenkins', level: 3, category: 'Tools' },
  { name: 'Git', level: 4, category: 'Tools' },
  { name: 'Docker', level: 3, category: 'Tools' },
  
  // Programming
  { name: 'Java', level: 4, category: 'Programming' },
  { name: 'JavaScript', level: 3, category: 'Programming' },
  { name: 'Python', level: 3, category: 'Programming' },
  { name: 'SQL', level: 4, category: 'Programming' },
  { name: 'HTML/CSS', level: 3, category: 'Programming' },
];

const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {skill.level * 20}%
      </span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div 
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${skill.level * 20}%` }}
      ></div>
    </div>
  </div>
);

const SkillSection = ({ title, category, icon }) => {
  const categorySkills = skills.filter(skill => skill.category === category);
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8 mb-8 border-l-4 border-blue-500">
      <div className="flex items-center mb-4">
        {icon && <div className="text-blue-500 mr-2">{icon}</div>}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        {categorySkills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Technical Proficiency
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <SkillSection title="Testing Expertise" category="Testing" />
          <SkillSection title="Automation Skills" category="Automation" />
          <SkillSection title="Tools & Platforms" category="Tools"  />
          <SkillSection title="Programming Languages" category="Programming"  />
          
          {/* <div className="mt-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Additionally, I have experience with continuous integration, performance testing, security testing, 
                and mobile application testing across Android and iOS platforms.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
