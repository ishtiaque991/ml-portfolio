import React from 'react';
import { FaBug, FaClipboardCheck, FaJira, FaGitAlt, FaDatabase, FaRegFileAlt, FaCogs, FaRobot } from 'react-icons/fa';
import { SiSelenium, SiCypress, SiJenkins, SiPostman, SiPython, SiJavascript } from 'react-icons/si';

const skills = [
  { name: "Manual Testing", icon: <FaClipboardCheck /> },
  { name: "Automation Testing", icon: <FaRobot /> },
  { name: "Test Case Design", icon: <FaRegFileAlt /> },
  { name: "Bug Reporting", icon: <FaBug /> },
  { name: "Regression Testing", icon: <FaCogs /> },
  { name: "API Testing", icon: <SiPostman /> },
  { name: "Selenium WebDriver", icon: <SiSelenium /> },
  { name: "Cypress", icon: <SiCypress /> },
  { name: "Jenkins (CI/CD)", icon: <SiJenkins /> },
  { name: "JIRA", icon: <FaJira /> },
  { name: "SQL & Database Testing", icon: <FaDatabase /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> }
];

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-center">QA Skills & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition"
          >
            <span className="text-3xl mb-2 text-blue-600 dark:text-blue-400">{skill.icon}</span>
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
